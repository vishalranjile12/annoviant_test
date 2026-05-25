# syntax=docker/dockerfile:1

# --- Build the static site ---
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .

# Build-time env vars for Vite — VITE_* must be set before `bun run build`
# or Vite cannot inline them into the client bundle. Railway passes service
# variables as Docker build args automatically when these ARGs are declared.
ARG VITE_STRAPI_URL
ARG VITE_STRAPI_TOKEN
ARG VITE_BRIEFING_CODE
ARG VITE_INVESTOR_DATAROOM_URL
ENV VITE_STRAPI_URL=${VITE_STRAPI_URL}
ENV VITE_STRAPI_TOKEN=${VITE_STRAPI_TOKEN}
ENV VITE_BRIEFING_CODE=${VITE_BRIEFING_CODE}
ENV VITE_INVESTOR_DATAROOM_URL=${VITE_INVESTOR_DATAROOM_URL}

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
