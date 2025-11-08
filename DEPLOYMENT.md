# 🚀 Deployment Guide - Etmam Platform

Automated CI/CD deployment for the Etmam platform (Frontend + Strapi CMS).

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [GitHub Secrets Setup](#github-secrets-setup)
- [Deployment Process](#deployment-process)
- [Manual Deployment](#manual-deployment)
- [Rollback](#rollback)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

This repository uses GitHub Actions for automated deployment to production:

- **Frontend**: Next.js 15 application → `/var/www/etmam-frontend/`
- **Strapi**: CMS backend → `/var/www/strapi/`
- **Server**: `72.60.135.197` (VPS)
- **Process Manager**: PM2

### Deployment Triggers

- **Automatic**: Push to `main` branch (deploys both frontend and Strapi)
- **Manual**: GitHub Actions → "Run workflow" (choose what to deploy)

---

## ✅ Prerequisites

### On Your Production Server

Ensure the following are installed and configured:

1. **Node.js** (v20.x or higher)

   ```bash
   node --version  # Should be v20.x
   ```

2. **PM2** (Process Manager)

   ```bash
   pm2 --version
   pm2 list  # Should show etmam-frontend and strapi
   ```

3. **Directory Structure**

   ```bash
   /var/www/
   ├── etmam-frontend/
   │   ├── .env.production  # Production environment variables
   │   └── ...
   └── strapi/
       ├── .env  # Strapi environment variables
       ├── public/uploads/  # Preserved during deployment
       └── ...
   ```

4. **Log Directory** (for PM2 logs)

   ```bash
   sudo mkdir -p /var/log/pm2
   sudo chown -R $USER:$USER /var/log/pm2
   ```

5. **Backups Directory**
   ```bash
   sudo mkdir -p /var/www/backups
   sudo chown -R $USER:$USER /var/www/backups
   ```

---

## 🔐 GitHub Secrets Setup

### Required Secrets

Go to: **GitHub Repository → Settings → Secrets and variables → Actions → Environment secrets**

#### SSH Connection Secrets

| Secret Name    | Value           | Description            |
| -------------- | --------------- | ---------------------- |
| `SSH_HOST`     | `72.60.135.197` | Server IP address      |
| `SSH_USER`     | `root`          | SSH username           |
| `SSH_PASSWORD` | `your-password` | SSH password           |
| `SSH_PORT`     | `22`            | SSH port (default: 22) |

#### Frontend Environment Secrets

| Secret Name                             | Example Value                      | Description                          |
| --------------------------------------- | ---------------------------------- | ------------------------------------ |
| `FRONTEND_NEXT_PUBLIC_APP_URL`          | `https://etmam.alkelany.com`       | Frontend public URL                  |
| `FRONTEND_NEXT_PUBLIC_STRAPI_API_URL`   | `https://etmam-admin.alkelany.com` | Strapi public URL                    |
| `FRONTEND_NEXT_PUBLIC_STRAPI_API_TOKEN` | `abc123...`                        | Strapi API token (from Strapi admin) |
| `FRONTEND_REVALIDATION_SECRET`          | `random-secret-key`                | On-demand revalidation secret        |

#### Strapi Environment Secrets

| Secret Name                  | Example Value                   | Description                       |
| ---------------------------- | ------------------------------- | --------------------------------- |
| `STRAPI_API_URL`             | `http://localhost:1337`         | Internal Strapi URL               |
| `STRAPI_GRAPHQL_URL`         | `http://localhost:1337/graphql` | Internal GraphQL URL              |
| `STRAPI_API_TOKEN`           | `abc123...`                     | Server-side API token             |
| `STRAPI_APP_KEYS`            | `key1,key2,key3,key4`           | Strapi app keys (comma-separated) |
| `STRAPI_API_TOKEN_SALT`      | `salt-value`                    | API token salt                    |
| `STRAPI_ADMIN_JWT_SECRET`    | `jwt-secret`                    | Admin JWT secret                  |
| `STRAPI_JWT_SECRET`          | `jwt-secret`                    | User JWT secret                   |
| `STRAPI_TRANSFER_TOKEN_SALT` | `salt-value`                    | Transfer token salt               |
| `STRAPI_ENCRYPTION_KEY`      | `encryption-key`                | Encryption key                    |

### How to Get Strapi API Token

1. Log into Strapi admin: `https://etmam-admin.alkelany.com/admin`
2. Navigate to: **Settings → API Tokens → Create new API Token**
3. Configure:
   - **Name**: `Next.js Frontend Token`
   - **Token type**: `Read-only` or `Full access`
   - **Duration**: `Unlimited`
4. Copy the generated token
5. Add to GitHub Secrets as `FRONTEND_NEXT_PUBLIC_STRAPI_API_TOKEN`

---

## 🔄 Deployment Process

### Automatic Deployment (Push to main)

```bash
# Make your changes
git add .
git commit -m "feat: your changes"
git push origin main

# GitHub Actions will automatically:
# 1. Build and test both frontend and Strapi
# 2. Deploy to production server
# 3. Restart PM2 processes
# 4. Show deployment status
```

### Manual Deployment (GitHub UI)

1. Go to: **GitHub Repository → Actions → Deploy to Production**
2. Click: **"Run workflow"**
3. Select deployment target:
   - `all` - Deploy both frontend and Strapi
   - `frontend` - Deploy only frontend
   - `strapi` - Deploy only Strapi
4. Click: **"Run workflow"** button

---

## 📦 What Gets Deployed

### Frontend Deployment

**Deployed Files:**

- `.next/` - Production build
- `public/` - Static assets
- `src/` - Source code
- `package.json`, `package-lock.json`
- Configuration files (next.config.ts, tsconfig.json, etc.)
- `.env.production` - Generated from GitHub secrets

**Preserved on Server:**

- Existing `.env.production` (if not using GitHub secrets)
- Node modules (reinstalled)

### Strapi Deployment

**Deployed Files:**

- `dist/` - Built Strapi code
- `src/` - Source code
- `config/` - Configuration files
- `database/migrations/` - Database migrations
- `package.json`, `package-lock.json`

**Preserved on Server:**

- `public/uploads/` - User uploaded files
- `.tmp/` - Temporary files
- Database files (SQLite)
- `.env` - Environment variables
- `.strapi/` - Strapi metadata

---

## 🛠️ Manual Deployment

If you need to deploy manually without GitHub Actions:

### Frontend Manual Deploy

```bash
# On your local machine
cd frontend
npm ci
npm run build

# Transfer to server
rsync -avz --delete .next/ root@72.60.135.197:/var/www/etmam-frontend/.next/
rsync -avz --delete public/ root@72.60.135.197:/var/www/etmam-frontend/public/

# On the server
ssh root@72.60.135.197
cd /var/www/etmam-frontend
npm ci --production
pm2 restart etmam-frontend
```

### Strapi Manual Deploy

```bash
# On your local machine
cd strapi
npm ci
npm run build

# Transfer to server
rsync -avz --delete dist/ root@72.60.135.197:/var/www/strapi/dist/
rsync -avz --delete config/ root@72.60.135.197:/var/www/strapi/config/

# On the server
ssh root@72.60.135.197
cd /var/www/strapi
npm ci --production
pm2 restart strapi
```

---

## ⏮️ Rollback

If a deployment fails, you can rollback to a previous version:

### Check Available Backups

```bash
ssh root@72.60.135.197
ls -lah /var/www/backups/
```

Output example:

```
frontend-20241108-143020/
frontend-20241108-150030/
strapi-20241108-143025/
strapi-20241108-150035/
```

### Rollback Frontend

```bash
# Choose a backup (example: frontend-20241108-143020)
BACKUP_DIR="frontend-20241108-143020"

cd /var/www/etmam-frontend
pm2 stop etmam-frontend

# Restore .next build
rm -rf .next
cp -r /var/www/backups/$BACKUP_DIR/.next .

# Restore .env if needed
cp /var/www/backups/$BACKUP_DIR/.env.production .

pm2 restart etmam-frontend
```

### Rollback Strapi

```bash
# Choose a backup (example: strapi-20241108-143025)
BACKUP_DIR="strapi-20241108-143025"

cd /var/www/strapi
pm2 stop strapi

# Restore dist build
rm -rf dist
cp -r /var/www/backups/$BACKUP_DIR/dist .

# Restore config if needed
cp -r /var/www/backups/$BACKUP_DIR/config .

pm2 restart strapi
```

---

## 🐛 Troubleshooting

### Deployment Failed

**Check GitHub Actions logs:**

1. Go to: **GitHub Repository → Actions**
2. Click on the failed workflow run
3. Expand failed step to see error details

**Common issues:**

1. **SSH Connection Failed**

   ```
   Error: Permission denied (publickey,password)
   ```

   - **Fix**: Check `SSH_HOST`, `SSH_USER`, `SSH_PASSWORD` secrets
   - Verify server is accessible: `ping 72.60.135.197`

2. **Build Failed (Frontend)**

   ```
   Error: Type error or ESLint error
   ```

   - **Fix**: Run locally first: `npm run lint && npm run type-check && npm run build`
   - Fix errors before pushing

3. **Build Failed (Strapi)**

   ```
   Error: Build failed
   ```

   - **Fix**: Run locally: `npm run build`
   - Check Strapi logs for specific errors

4. **PM2 Process Not Restarting**
   ```
   Error: Process not found
   ```
   - **Fix**: SSH to server and manually restart:
     ```bash
     pm2 list
     pm2 restart etmam-frontend
     pm2 restart strapi
     pm2 save
     ```

### Check Server Status

```bash
# SSH into server
ssh root@72.60.135.197

# Check PM2 processes
pm2 list
pm2 logs etmam-frontend --lines 50
pm2 logs strapi --lines 50

# Check if apps are responding
curl http://localhost:3000  # Frontend
curl http://localhost:1337  # Strapi

# Check disk space
df -h

# Check memory usage
free -h
```

### Frontend Not Loading

1. **Check PM2 status:**

   ```bash
   pm2 list
   pm2 logs etmam-frontend --lines 100
   ```

2. **Check .env.production:**

   ```bash
   cat /var/www/etmam-frontend/.env.production
   # Verify all URLs and tokens are correct
   ```

3. **Check build exists:**

   ```bash
   ls -lah /var/www/etmam-frontend/.next
   ```

4. **Manual restart:**
   ```bash
   cd /var/www/etmam-frontend
   pm2 restart etmam-frontend
   ```

### Strapi Not Loading

1. **Check PM2 status:**

   ```bash
   pm2 list
   pm2 logs strapi --lines 100
   ```

2. **Check .env:**

   ```bash
   cat /var/www/strapi/.env
   # Verify all secrets are set
   ```

3. **Check database:**

   ```bash
   ls -lah /var/www/strapi/.tmp/*.db
   # or check PostgreSQL connection
   ```

4. **Check uploads directory permissions:**
   ```bash
   ls -lah /var/www/strapi/public/uploads
   chown -R www-data:www-data /var/www/strapi/public/uploads
   ```

### Clear PM2 Logs

If logs are getting too large:

```bash
pm2 flush  # Clear all logs
pm2 restart all
```

---

## 📊 Monitoring

### View Logs in Real-time

```bash
# Frontend logs
pm2 logs etmam-frontend

# Strapi logs
pm2 logs strapi

# All logs
pm2 logs

# Exit: Ctrl+C
```

### Check Resource Usage

```bash
pm2 monit
# Shows CPU, memory usage in real-time
# Exit: Ctrl+C
```

### View Log Files

```bash
# Frontend logs
tail -f /var/log/pm2/etmam-frontend-error.log
tail -f /var/log/pm2/etmam-frontend-out.log

# Strapi logs
tail -f /var/log/pm2/strapi-error.log
tail -f /var/log/pm2/strapi-out.log
```

---

## 🔒 Security Best Practices

1. **Change SSH password authentication to key-based** (recommended)
2. **Rotate API tokens regularly**
3. **Use strong secrets** (generate with `openssl rand -base64 32`)
4. **Keep dependencies updated** (`npm audit fix`)
5. **Monitor server resources** (disk space, memory)
6. **Set up automated backups** for database and uploads
7. **Use HTTPS** for all public endpoints
8. **Limit SSH access** (use firewall, fail2ban)

---

## 📞 Support

If you encounter issues:

1. Check this guide's [Troubleshooting](#troubleshooting) section
2. Review GitHub Actions logs
3. Check server logs via PM2
4. Contact DevOps team

---

## 📝 Notes

- **Deployment time**: ~3-5 minutes (both apps)
- **Zero downtime**: PM2 handles graceful restarts
- **Backups**: Automatic before each deployment
- **Retention**: Manual cleanup of old backups recommended (keep last 5-10)

---

**Last Updated**: November 8, 2024  
**Maintained by**: Build8 Developments
