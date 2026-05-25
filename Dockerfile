# syntax=docker/dockerfile:1

# --- Build the static site ---
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# --- Serve the built assets with nginx ---
# nginx is the boring, reliable choice. We switched away from `serve` because
# serve@14.x's `parseEndpoint` is broken — bare ports and tcp:// URIs both
# throw "Unknown --listen endpoint scheme (protocol): undefined" at startup.
FROM nginx:1.27-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
# nginx:alpine's default CMD already runs nginx in the foreground.
