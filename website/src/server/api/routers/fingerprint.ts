import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { visits } from "@/server/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { x64hash128 } from "@/../../fingerprintjs/src/utils/hashing";
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

							if (value == null) {
								// acc[x.name] = sql`(SELECT COUNT(*) FROM ${visits} WHERE "${sql.raw(x.name)}" IS NULL)`;
							} else if (typeof value === "object") {
								console.log(x.name, value);
								if (Array.isArray(value)) {
									acc[x.name] =
										sql`(SELECT COUNT(*) FROM ${visits} WHERE "${sql.raw(x.name)}" = '${sql.raw(JSON.stringify(value))}'::jsonb )`;
								} else {
								}
							} else {
								// acc[x.name] =
								// 	sql`(SELECT COUNT(*) FROM ${visits} WHERE "${sql.raw(x.name)}" = ${value})`;
							}

							return acc;
						},
						{} as Record<string, any>,
					),
				})
				.from(visits);

			const uniqueness = await query.execute();
			console.log(uniqueness);

			// await ctx.db.execute(
			// 	sql`INSERT INTO ${sql.raw(getTableName(visits))} VALUES (${sql.raw(columns.map((x) => {
			// 		// @ts-ignore
			// 		const value = input[x.name];
			// 		if (x.dataType === "boolean") return value ? "true" : "false";
			// 		if (x.dataType === "number") return value || 0;
			// 		if (x.dataType === "json") return `'${JSON.stringify(value || null)}'::jsonb`;
			// 		if (x.dataType === "date") return value ? `'${value}'::date` : "now()";
			// 		console.log(x.dataType, x.name, value);
			// 		return `'${value || ""}'`;
			// 	}).join(", "))})`,
			// );

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
