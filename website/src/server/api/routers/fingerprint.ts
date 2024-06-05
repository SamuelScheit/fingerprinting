import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { visits } from "@/server/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { x64hash128 } from "fingerprintjs/src/utils/hashing";
import { count, eq, getTableColumns, getTableName, sql } from "drizzle-orm";
import { UAParser } from "ua-parser-js"


const insertVisits = createInsertSchema(visits, {
	ip: z.string().optional(),
});

function stringifyUUID(str?: string | null) {
	if (!str) return "NULL"
	return `'${str.replace(/[^a-zA-Z\d\-]+/g, "")}'`;
}

export const fingerprintRouter = createTRPCRouter({
	visit: publicProcedure.input(insertVisits).mutation(async ({ ctx, input }) => {
		try {
			input.ip = ctx.ip;
			input.http_headers = x64hash128(JSON.stringify(Object.keys(ctx.headers)));

			const fingerprint = input.id_cookie || input.id_fileSystem || input.id_localStorage || input.id_indexedDB || input.id_sessionStorage || x64hash128(JSON.stringify(input));
			const columns = Object.values(getTableColumns(visits));
			const candidates = Array.isArray(input.webrtc_candidates) ? input.webrtc_candidates : [];

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

			const my_sessions = ctx.db.execute(sql.raw(`SELECT * FROM ${getTableName(visits)} WHERE
				"id_localStorage" = ${stringifyUUID(input.id_localStorage)}
				OR "id_sessionStorage" = ${stringifyUUID(input.id_sessionStorage)}
				OR "id_indexedDB" = ${stringifyUUID(input.id_indexedDB)}
				OR "id_fileSystem" = ${stringifyUUID(input.id_fileSystem)}
				OR "id_cookie" = ${stringifyUUID(input.id_cookie)}
			`));

			const parameter_count_other_sessions = [
				sql`SELECT`,
				sql.join([
					sql.raw(`(SELECT COUNT(*) FROM other_sessions) as total`),
					...columns.map(
						(x) => {
							if (x.name === "id") return
							if (id_columns.includes(x.name)) return

							// @ts-ignore
							const value = input[x.name];
							if (value === undefined) return

							if (value == null) {
								return sql`(SELECT COUNT(*) FROM other_sessions WHERE "${sql.raw(x.name)}" IS NULL ) as ${sql.raw(x.name)}`;
							} else if (x.dataType === "json") {
								return sql`(SELECT COUNT(*) FROM other_sessions WHERE "${sql.raw(x.name)}" = '${sql.raw(JSON.stringify(value))}'::jsonb ) as ${sql.raw(x.name)}`;
							} else {
								return sql`(SELECT COUNT(*) FROM other_sessions WHERE "${sql.raw(x.name)}" = ${value}) as ${sql.raw(x.name)}`;
							}

							const select = [
								sql`(SELECT COUNT(*) FROM other_sessions WHERE "${sql.raw(x.name)}" `,
							]

							if (value == null) {
								select.push(sql` IS NULL `)
							} else if (x.dataType === "json") {
								select.push(sql` = '${sql.raw(JSON.stringify(value))}'::jsonb `)
							} else {
								select.push(sql` = ${value}`)
							}

							// @ts-ignore
							select.push(sql(`) as ${sql.raw(x.name)}`))

							return sql.join(select, sql.raw(" "))
						}
					).filter(x => x),
					sql`(
						WITH stmt AS (
							SELECT JSONB_ARRAY_ELEMENTS("webrtc_candidates"::jsonb) AS candidate FROM other_sessions)
							SELECT COUNT(*) FROM stmt WHERE candidate ->> 'address' IN (${sql.raw(candidates.map((x: any) => `'${x.address?.replace(/[^\d.\]\[:\w]+/g, "")}'`).join(", "))})
						) as webrtc_candidates `,
				], sql.raw(", ")),
			]

			const start = performance.now();
			const query = ctx.db
				.execute(sql.join([other_sessions, ...parameter_count_other_sessions], sql.raw(" ")))
			console.log(`Query took ${performance.now() - start}ms`);

			const uniqueness = await query.execute();

			const cols = [] as string[];

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
				fingerprint, // "654c8418b95d5236828891b2fabfaebba56ae880"
				percentage: 100,
				user_agent_details,
				headers: ctx.headers,
				parameters: uniqueness[0],
				visits: await my_sessions,
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	}),
});
