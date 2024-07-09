import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { visits } from "@/server/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { x64hash128 } from "fingerprintjs/src/utils/hashing";
import { count, eq, getTableColumns, getTableName, sql } from "drizzle-orm";
import { UAParser } from "ua-parser-js"
import { PgColumn, PgDialect } from "drizzle-orm/pg-core";


const insertVisits = createInsertSchema(visits, {
	ip: z.string().optional(),
});

function stringifyUUID(str?: string | null) {
	if (!str) return "NULL"
	return `'${str.replace(/[^a-zA-Z\d\-]+/g, "")}'`;
}

function getWhereClause(value: any, column: PgColumn) {
	if (value == null) {
		return sql` IS NULL `
	} else if (column.dataType === "json") {
		return sql` = '${sql.raw(JSON.stringify(value))}'::jsonb `
	} else {
		return sql` = ${value}`
	}
}


export const fingerprintRouter = createTRPCRouter({
	visit: publicProcedure.input(insertVisits).mutation(async ({ ctx, input }) => {
		try {
			input.ip = ctx.ip;
			input.http_headers = x64hash128(JSON.stringify(Object.keys(ctx.headers)));

			let fingerprint = input.id_cookie || input.id_fileSystem || input.id_localStorage || input.id_indexedDB || input.id_sessionStorage || x64hash128(JSON.stringify(input));
			const columns = Object.values(getTableColumns(visits));
			const candidates = Array.isArray(input.webrtc_candidates) ? input.webrtc_candidates : [];
			let percentage = undefined

			const id_columns = ["id_localStorage", "id_sessionStorage", "id_indexedDB", "id_fileSystem", "id_cookie"];
			const id_columns_string = id_columns.map(x => `"${x}"`).join(", ");

			const other_sessions = sql.raw(`WITH other_sessions AS (
			SELECT DISTINCT ON (${id_columns_string}) * FROM ${getTableName(visits)} WHERE
				"id_localStorage" != ${stringifyUUID(input.id_localStorage)}
				AND "id_sessionStorage" != ${stringifyUUID(input.id_sessionStorage)}
				AND "id_indexedDB" != ${stringifyUUID(input.id_indexedDB)}
				AND "id_fileSystem" != ${stringifyUUID(input.id_fileSystem)}
				AND "id_cookie" != ${stringifyUUID(input.id_cookie)}
			)`);

			const filteredColumns = columns.filter(x => x.name !== "id" && !id_columns.includes(x.name) && (input as any)[x.name] !== undefined)

			const parameter_count_other_sessions = [
				sql`SELECT`,
				sql.join([
					sql.raw(`(SELECT COUNT(*) FROM other_sessions) as total`),
					...filteredColumns.map(x => {
						// @ts-ignore
						const value = input[x.name];

						const select = sql.join([
							sql`(SELECT COUNT(*) FROM other_sessions WHERE "${sql.raw(x.name)}" `,
							getWhereClause(value, x),
							sql`) as ${sql.raw(x.name)}`,
						], sql.raw(" "))

						return select
					}),
					candidates.length > 0 &&
					sql`(
						WITH stmt AS (
							SELECT
							JSONB_ARRAY_ELEMENTS(CASE
													WHEN jsonb_typeof(webrtc_candidates::jsonb) = 'array'
													THEN webrtc_candidates::jsonb
													ELSE '[]'::jsonb
													END) AS candidate
							FROM
							other_sessions
						)
							SELECT COUNT(*) FROM stmt WHERE candidate ->> 'address' IN (${sql.raw(candidates.map((x: any) => `'${x.address?.replace(/[^\d.\]\[:\w]+/g, "")}'`).join(", "))})
						) as webrtc_candidates `,
				].flat().filter(Boolean), sql.raw(", ")),
			]

			const start = performance.now();
			const query = ctx.db
				.execute(sql.join([other_sessions, ...parameter_count_other_sessions], sql.raw(" ")))
			console.log(`Query took ${performance.now() - start}ms`);

			const occurance = await query.execute();

			const matches: any[] = await ctx.db.execute(
				(() => {
					const tableName = getTableName(visits)

					const columnUniqueness = filteredColumns.map(x => {
						const name = `"${x.name}"`
						const distinct = `"${x.name + "_distinct"}"`
						const uniqueness = `"${x.name + "_uniqueness"}"`
						const totalCount = `"${x.name + "_total"}"`
						const distinctValue = `"${x.name + "_distinct_value"}"`

						return `${distinct} as (
								SELECT DISTINCT ${name} as ${distinct} FROM ${tableName}
							),
							${totalCount} as (
								SELECT COUNT(${name})::float as ${totalCount} FROM ${tableName}
							),
							${distinctValue} as (
								SELECT COUNT(${distinct})::float as ${distinctValue}
								FROM ${tableName}
								INNER JOIN ${distinct} ON ${name} = ${distinct}
								GROUP BY ${distinct}
							),
							${uniqueness} as (
								SELECT abs(coalesce((
									SELECT SUM(
									CASE
										WHEN ${totalCount} <= 1 THEN 0
										ELSE
											(${distinctValue} / ${totalCount})
											* log(
												${totalCount}::numeric,
												(${distinctValue} / ${totalCount})::numeric
											)
									END
									) FROM ${distinctValue}, ${totalCount}
								) * -1, 0)) as ${uniqueness}
							)`
					}).join(",")

					const uniquenessCols = filteredColumns.map(x => `"${x.name}_uniqueness"`)

					return sql.join([
						sql.raw(`
							WITH ${columnUniqueness},
							matchTable AS (
							SELECT `),
						sql.raw(`(`),
						sql.join(filteredColumns.map(x =>
							sql.join([
								sql.raw(`(CASE WHEN "${x.name}"`), // @ts-ignore
								getWhereClause(input[x.name], x),
								// sql.raw(` THEN 1 ELSE 2 END) as "${x.name}_uniqueness"`),
								sql.raw(` THEN (1.0 + "${x.name}_uniqueness") ELSE 1.0 END)`)
							], sql.raw(" "))),
							sql.raw(" * ")),
						sql.raw(`) / 2.0 as "match"`),
						sql.raw(`
							, ${columns.map(x => `"${x.name}"`).join(",")}
							FROM ${uniquenessCols.join(", ")}, ${tableName}
						)

						SELECT * FROM matchTable
						ORDER BY "match" DESC
						LIMIT 1
						`)
					], sql.raw(" "))
				})())

			if (matches.length && matches[0]) {
				if (matches[0].match > 3.0) {
					fingerprint = (matches[0].id_cookie || matches[0].id_fileSystem || matches[0].id_localStorage || matches[0].id_indexedDB || matches[0].id_sessionStorage);
				}

				percentage = Math.round(((matches[0].match) / 3) * 100)
				if (percentage >= 100.0) percentage = 100
			}

			const cols = [] as string[];

			const my_sessions_sql = `SELECT * FROM ${getTableName(visits)} WHERE
				"id_localStorage" = ${stringifyUUID(input.id_localStorage)}
				OR "id_sessionStorage" = ${stringifyUUID(input.id_sessionStorage)}
				OR "id_indexedDB" = ${stringifyUUID(input.id_indexedDB)}
				OR "id_fileSystem" = ${stringifyUUID(input.id_fileSystem)}
				OR "id_cookie" = ${stringifyUUID(input.id_cookie)}`
			const visitsResult = (await ctx.db.execute(sql.raw(my_sessions_sql)).execute())

			if (visitsResult.length && visitsResult[0]) {
				fingerprint = (visitsResult[0].id_cookie || visitsResult[0].id_fileSystem || visitsResult[0].id_localStorage || visitsResult[0].id_indexedDB || visitsResult[0].id_sessionStorage) as string;
				percentage = 100
			}

			input.id_cookie = input.id_fileSystem = input.id_localStorage = input.id_indexedDB = input.id_sessionStorage = fingerprint;

			const values = columns.filter(x => x.name !== "id" && x.name !== "created_at").map((x, i) => {
				// @ts-ignore
				const value = input[x.name] || null

				cols.push(`"${x.name}"`)
				// if (x.dataType === "boolean") return value ? "true" : "false";
				// if (x.dataType === "number" && typeof value === "number") return value;
				if (x.dataType === "json") return sql.raw(`'${JSON.stringify(value || null)}'::jsonb`);
				// if (x.dataType === "date" && value instanceof Date) return value ? `'${value}'::date` : "now()";
				return sql`${value}`;
			}).filter(x => x);

			await ctx.db.execute(
				sql.join([
					sql`INSERT INTO ${sql.raw(getTableName(visits))} (${sql.raw(cols.join(", "))}) VALUES`,
					sql.raw(`(`),
					sql.join(values, sql.raw(", ")),
					sql.raw(`)`),
				], sql.raw(" "))
			);

			var user_agent_details = undefined

			if (input.user_agent) {
				user_agent_details = new UAParser(input.user_agent).getResult();
			}

			return {
				fingerprint,
				percentage,
				user_agent_details,
				headers: ctx.headers,
				parameters: occurance[0],
				matches,
				visits: visitsResult
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	}),
});
