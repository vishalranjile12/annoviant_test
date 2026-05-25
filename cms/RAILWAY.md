# Deploying the Annoviant CMS (Strapi 5) to Railway

The `cms/` directory is a Strapi 5 application. It deploys as its **own Railway
service**, separate from the static frontend. Two Railway services live in this
project:

| Service           | Source path | Runtime          | Public URL                       |
| ----------------- | ----------- | ---------------- | -------------------------------- |
| `annoviant-web`   | repo root   | Node (serve)     | annoviant.com (or *.railway.app) |
| `annoviant-cms`   | `cms/`      | Node (Strapi)    | *.railway.app — admin + API only |

The frontend reads the CMS over HTTP at `VITE_STRAPI_URL`. If the variable is
unset, the frontend falls back to bundled content in `src/data/*.ts`.

## One-time setup

### 1. Create the CMS service

```bash
# In the Railway project that already hosts annoviant-web
railway service create annoviant-cms
```

In the Railway dashboard, point the new service at this repository, with:

- **Root directory**: `cms`
- **Builder**: Dockerfile (`cms/Dockerfile`)
- **Healthcheck path**: `/_health`
- **Healthcheck timeout**: 300s

(These are already encoded in `cms/railway.toml`.)

### 2. Add a Postgres database

In the Railway dashboard for the `annoviant-cms` service:

1. Click **+ New** → **Database** → **PostgreSQL**.
2. Railway exposes a `DATABASE_URL` variable to services in the same project.
   Strapi's `cms/config/database.ts` auto-selects Postgres when `DATABASE_URL`
   is present.

### 3. Set the required environment variables

On the `annoviant-cms` service, set:

```bash
NODE_ENV=production
HOST=0.0.0.0
PORT=1337

# Strapi secrets — generate with: openssl rand -base64 32
APP_KEYS=<comma-separated list of four random base64 strings>
API_TOKEN_SALT=<random base64>
ADMIN_JWT_SECRET=<random base64>
TRANSFER_TOKEN_SALT=<random base64>
JWT_SECRET=<random base64>

# Database — Railway auto-injects DATABASE_URL from the Postgres plugin
DATABASE_CLIENT=postgres
# DATABASE_URL is set automatically by Railway's Postgres add-on

# CORS — the frontend origin Strapi will accept requests from
FRONTEND_URL=https://annoviant.com
```

Generate all five secrets in one shot:

```bash
for var in APP_KEYS API_TOKEN_SALT ADMIN_JWT_SECRET TRANSFER_TOKEN_SALT JWT_SECRET; do
  echo "$var=$(openssl rand -base64 32)"
done
```

For `APP_KEYS`, use four secrets joined by commas:

```bash
echo "APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32)"
```

### 4. Deploy

Push to the branch Railway is watching (typically `main` or `develop`). Railway
will build `cms/Dockerfile` and start the service. The first deploy takes ~5
minutes (native `vips` and `better-sqlite3` builds).

### 5. First admin user

After the service is up, open `https://<your-cms-domain>/admin` and create the
first admin user. **Do this within 5 minutes of first boot** — the bootstrap
flow expires quickly.

### 6. Make content publicly readable

Strapi v5 ships with permissions locked down. To let the public frontend read
content without an API token:

1. **Settings → Users & Permissions → Roles → Public**.
2. Grant **find** and **findOne** for: `blog-post`, `news-article`, `answer`.
3. Grant **create** for: `contact-submission`.
4. Save.

(Alternatively, mint an API token under **Settings → API Tokens** and set
`VITE_STRAPI_TOKEN` on the frontend service — required only if you want
authenticated reads.)

### 7. Point the frontend at the CMS

On the `annoviant-web` service:

```bash
VITE_STRAPI_URL=https://<your-cms-domain>
# Optional:
# VITE_STRAPI_TOKEN=<api-token-from-step-6>
```

Trigger a redeploy of the frontend so the build picks up the new env var.

## Content types

Already scaffolded (live as soon as you deploy):

- **news-article** — press, milestones, grants
- **blog-post** — long-form posts (`/blog`)
- **answer** — AEO knowledge-base entries
- **contact-submission** — receives form submissions

## Local development

```bash
cd cms
npm install
npm run develop
```

Strapi starts on `http://localhost:1337`. The admin panel is at
`http://localhost:1337/admin`. On first boot, it falls back to a SQLite database
under `.tmp/data.db` — no Postgres needed locally.

To run the frontend against the local CMS:

```bash
# In repo root
echo "VITE_STRAPI_URL=http://localhost:1337" >> .env.local
npm run dev
```

## Backup & migration

- Postgres backups are managed by the Railway Postgres add-on. Set the snapshot
  schedule in the database service settings.
- Content can be exported with `npx strapi export --file <name>.tar.gz` and
  imported with `npx strapi import --file <name>.tar.gz`. Run these from the
  Railway shell.
