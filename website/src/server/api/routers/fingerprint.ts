import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { visits } from "@/server/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { x64hash128 } from "@/../../fingerprintjs/src/utils/hashing";

const insertVisits = createInsertSchema(visits, {
  ip: z.string().optional(),
});

export const fingerprintRouter = createTRPCRouter({
  visit: publicProcedure
    .input(insertVisits)
    .mutation(async ({ ctx, input }) => {
      const http_headers = x64hash128(JSON.stringify(Object.keys(ctx.headers)));

      await ctx.db.insert(visits).values({
        ...input,
        ip: ctx.ip,
        http_headers,
      });

      const fingerprint = x64hash128(JSON.stringify(input));

      return {
        fingerprint, // "654c8418b95d5236828891b2fabfaebba56ae880"
        percentage: 100,
      };
    }),
});
