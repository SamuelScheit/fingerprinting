FROM oven/bun:latest

ARG DATABASE_URL
ARG NEXT_PUBLIC_CLIENTVAR
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN SKIP_ENV_VALIDATION=1 bun run build

EXPOSE 3000
ENV PORT 3000

CMD bun node_modules/.bin/drizzle-kit migrate && bun .next/standalone/server.js
# CMD ["./node_modules/.bin/drizzle-kit"]

