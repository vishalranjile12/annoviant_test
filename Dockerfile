# syntax=docker/dockerfile:1

# --- Build the static site ---
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# --- Serve the built assets ---
FROM node:22-alpine AS runtime
WORKDIR /app
# Pinned to 14.2.4 — newer 14.x patches changed -l parsing and reject bare
# port numbers, causing "Unknown --listen endpoint scheme" on startup.
RUN npm install -g serve@14.2.4
COPY --from=build /app/dist ./dist
ENV PORT=8080
EXPOSE 8080
# -s rewrites unknown paths to index.html so client-side routes resolve.
# Explicit tcp:// URI so serve's parser doesn't guess the scheme.
CMD ["sh", "-c", "serve -s dist --listen tcp://0.0.0.0:${PORT:-8080}"]
