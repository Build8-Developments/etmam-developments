# GitHub Actions Workflows

This directory contains automated CI/CD workflows for the Etmam platform.

## 📁 Workflows

### `deploy.yml` - Production Deployment

Automatically deploys Frontend and Strapi to production server.

**Triggers:**

- Push to `main` branch (automatic)
- Manual workflow dispatch (on-demand)

**What it does:**

1. **Frontend Job**

   - Lint and type-check code
   - Build Next.js production bundle
   - Deploy to `/var/www/etmam-frontend/`
   - Restart PM2 process: `etmam-frontend`

2. **Strapi Job**
   - Build Strapi application
   - Deploy to `/var/www/strapi/`
   - Preserve uploads and database
   - Restart PM2 process: `strapi`

**Duration:** ~3-5 minutes

**Manual Run:**

1. Go to **Actions → Deploy to Production**
2. Click **Run workflow**
3. Choose what to deploy:
   - `all` - Both frontend and Strapi
   - `frontend` - Frontend only
   - `strapi` - Strapi only

---

## 🔐 Required Secrets

See [`QUICKSTART.md`](../QUICKSTART.md) for complete setup guide.

**SSH Secrets:**

- `SSH_HOST` - Server IP (72.60.135.197)
- `SSH_USER` - SSH username
- `SSH_PASSWORD` - SSH password
- `SSH_PORT` - SSH port (22)

**Frontend Secrets:**

- `FRONTEND_NEXT_PUBLIC_APP_URL`
- `FRONTEND_NEXT_PUBLIC_STRAPI_API_URL`
- `FRONTEND_NEXT_PUBLIC_STRAPI_API_TOKEN`
- `FRONTEND_REVALIDATION_SECRET`

**Strapi Secrets:**

- `STRAPI_API_URL`
- `STRAPI_GRAPHQL_URL`
- `STRAPI_API_TOKEN`
- `STRAPI_APP_KEYS`
- `STRAPI_API_TOKEN_SALT`
- `STRAPI_ADMIN_JWT_SECRET`
- `STRAPI_JWT_SECRET`
- `STRAPI_TRANSFER_TOKEN_SALT`
- `STRAPI_ENCRYPTION_KEY`

---

## 📊 Workflow Status

View deployment status: **[Actions Tab](../../actions)**

---

## 📚 Documentation

- [Quick Start Guide](../QUICKSTART.md) - Setup and first deployment
- [Full Deployment Guide](../DEPLOYMENT.md) - Complete documentation
- [Troubleshooting](../DEPLOYMENT.md#troubleshooting) - Common issues and fixes

---

**Maintained by**: Build8 Developments
