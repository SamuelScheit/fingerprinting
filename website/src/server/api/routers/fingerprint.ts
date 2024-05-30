import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { visits } from "@/server/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { x64hash128 } from "fingerprintjs/src/utils/hashing";
import { count, eq, getTableColumns, getTableName, sql } from "drizzle-orm";

const insertVisits = createInsertSchema(visits, {
	ip: z.string().optional(),
});

export const fingerprintRouter = createTRPCRouter({
	visit: publicProcedure.input(insertVisits).mutation(async ({ ctx, input }) => {
		try {
			input.ip = ctx.ip;
			input.http_headers = x64hash128(JSON.stringify(Object.keys(ctx.headers)));

			const fingerprint = x64hash128(JSON.stringify(input));
			const columns = Object.values(getTableColumns(visits));

			const query = ctx.db
				.select({
					total: count(),
					...columns.reduce(
						(acc, x) => {
							// @ts-ignore
							const value = input[x.name];

							if (value === undefined) {
							} else if (value == null) {
								acc[x.name] = sql`(SELECT COUNT(*) FROM ${visits} WHERE "${sql.raw(x.name)}" IS NULL)`;
							} else if (x.dataType === "json") {
								acc[x.name] =
									sql`(SELECT COUNT(*) FROM ${visits} WHERE "${sql.raw(x.name)}" = '${sql.raw(JSON.stringify(value))}'::jsonb )`;
							} else {
								acc[x.name] =
									sql`(SELECT COUNT(*) FROM ${visits} WHERE "${sql.raw(x.name)}" = ${value})`;
							}

							return acc;
						},
						{} as Record<string, any>,
					),
				})
				.from(visits);

			const uniqueness = await query.execute();
			console.log(uniqueness);

			const cols = [] as string[];

			const values = columns.filter(x => x.name !== "id").map((x) => {
				cols.push(`"${x.name}"`)
				// @ts-ignore
				const value = input[x.name];
				if (x.dataType === "boolean") return value ? "true" : "false";
				if (x.dataType === "number") return value || 0;
				if (x.dataType === "json") return `'${JSON.stringify(value || null)}'::jsonb`;
				if (x.dataType === "date") return value ? `'${value}'::date` : "now()";
				return `'${value || ""}'`;
			}).join(", ")

			await ctx.db.execute(
				sql`INSERT INTO ${sql.raw(getTableName(visits))} (${sql.raw(cols.join(", "))}) VALUES (${sql.raw(values)})`,
			);

			return {
				fingerprint, // "654c8418b95d5236828891b2fabfaebba56ae880"
				percentage: 100,
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	}),
});
