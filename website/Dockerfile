FROM oven/bun:debian

ARG DATABASE_URL
ARG NEXT_PUBLIC_CLIENTVAR
WORKDIR /app

RUN apt-get update && apt-get install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && \
	. ~/.nvm/nvm.sh && \
	nvm install node

COPY package.json bun.lockb ./
RUN bun install

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN SKIP_ENV_VALIDATION=1 bun next build

EXPOSE 3000
ENV PORT 3000

CMD . ~/.nvm/nvm.sh && bun node_modules/.bin/drizzle-kit migrate && node next start

# node .next/standalone/server.js

