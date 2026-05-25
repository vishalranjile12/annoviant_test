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
RUN npm install -g serve@14
COPY --from=build /app/dist ./dist
ENV PORT=8080
EXPOSE 8080
# -s rewrites unknown paths to index.html so client-side routes resolve.
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]
