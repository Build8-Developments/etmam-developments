# Database Management Scripts

Scripts for syncing SQLite database between local development and production.

## 📋 Available Scripts

### 1. `sync-database.sh` - Upload Local DB to Production

Uploads your local Strapi database to the production server.

**Use when:**

- Setting up production for the first time
- You have local content/data you want to deploy
- Restoring production from a local backup

**Usage:**

```bash
# From project root
bash scripts/sync-database.sh
```

**What it does:**

1. ✅ Checks if local database exists
2. ✅ Creates backup on production server
3. ✅ Stops Strapi on server
4. ✅ Uploads your local database
5. ✅ Sets proper permissions
6. ✅ Restarts Strapi

---

### 2. `download-database.sh` - Download Production DB to Local

Downloads the production database to your local development environment.

**Use when:**

- You want to work with production data locally
- Testing with real data
- Creating a local backup

**Usage:**

```bash
# From project root
bash scripts/download-database.sh
```

**What it does:**

1. ✅ Creates backup of local database (if exists)
2. ✅ Downloads production database
3. ✅ Sets proper permissions
4. ✅ Ready for local development

---

## ⚠️ Important Notes

### Database Location

**Local:**

```
strapi/.tmp/data.db
```

**Production:**

```
/var/www/strapi/.tmp/data.db
```

### Backups

Both scripts create automatic backups:

- **Sync script**: Creates backup on server at `/var/www/backups/database-YYYYMMDD-HHMMSS/`
- **Download script**: Creates local backup at `strapi/.tmp/data.db.backup-YYYYMMDD-HHMMSS`

### Permissions

The scripts automatically set correct permissions:

- Owner: `www-data:www-data` (on server)
- Mode: `644` (read/write for owner, read for others)

---

## 🚨 Safety Features

1. **Confirmation prompts** - Both scripts ask for confirmation before overwriting
2. **Automatic backups** - Always creates backup before overwriting
3. **Server restart** - Automatically restarts Strapi after sync
4. **Permission management** - Sets correct ownership and permissions

---

## 🔄 Common Workflows

### Initial Production Setup

```bash
# 1. Set up content locally in Strapi
cd strapi
npm run develop

# 2. Upload to production
bash scripts/sync-database.sh
```

### Pull Production Data to Local

```bash
# Download latest production data
bash scripts/download-database.sh

# Restart local Strapi
cd strapi
npm run develop
```

### Restore Production from Backup

```bash
# 1. Download current production (creates backup)
bash scripts/download-database.sh

# 2. Fix issues locally

# 3. Upload fixed database
bash scripts/sync-database.sh
```

---

## 🛡️ Security Considerations

### ✅ Safe (Your Setup)

- Private GitHub repository
- Small SQLite database (< 50MB typically)
- SSH password authentication
- Local scripts (not committed passwords)

### ⚠️ Not Recommended

- **Large databases** (> 100MB) - Use PostgreSQL instead
- **Public repositories** - Never commit database
- **Sensitive data** - Consider encryption at rest

---

## 🔐 Alternative: Add Database to Git

If you want to version control your database (only recommended for private repos with small DBs):

### Option 1: Track Database in Git

```bash
# Remove .tmp from .gitignore
# Edit .gitignore and comment out or remove the .tmp exclusion

# Add database
git add strapi/.tmp/data.db -f
git commit -m "chore: add production database"
git push origin main
```

### Option 2: Use Git LFS (Large File Storage)

For databases > 10MB:

```bash
# Install Git LFS
git lfs install

# Track database files
git lfs track "strapi/.tmp/*.db"

# Add and commit
git add .gitattributes
git add strapi/.tmp/data.db
git commit -m "chore: add database with LFS"
git push origin main
```

---

## 📊 Check Database Size

```bash
# Local database
du -h strapi/.tmp/data.db

# Production database
ssh root@72.60.135.197 "du -h /var/www/strapi/.tmp/data.db"
```

---

## 🆘 Troubleshooting

### Script Permission Denied

```bash
chmod +x scripts/sync-database.sh
chmod +x scripts/download-database.sh
```

### SSH Connection Failed

- Verify server IP: `72.60.135.197`
- Test connection: `ssh root@72.60.135.197`
- Check password

### Strapi Won't Start After Sync

```bash
# SSH to server
ssh root@72.60.135.197

# Check permissions
ls -lah /var/www/strapi/.tmp/

# Fix permissions
sudo chown -R www-data:www-data /var/www/strapi/.tmp/
sudo chmod 644 /var/www/strapi/.tmp/data.db

# Restart
pm2 restart strapi
pm2 logs strapi
```

---

## 📝 Best Practices

1. **Always backup before syncing** (scripts do this automatically)
2. **Test locally first** before uploading to production
3. **Sync during low-traffic times** to minimize downtime
4. **Keep database small** or migrate to PostgreSQL for production
5. **Version control migrations** in `strapi/database/migrations/`

---

**Need help?** Check the main [DEPLOYMENT.md](../DEPLOYMENT.md) guide.
