#!/bin/bash

# Strapi Database Sync Script
# Syncs local SQLite database to production server

set -e

# Configuration
SERVER_IP="104.248.136.250"
SERVER_USER="root"
LOCAL_DB_PATH="./strapi/.tmp/data.db"
REMOTE_DB_PATH="/var/www/etmam/strapi/.tmp/data.db"

echo "======================================"
echo "🗄️  Strapi Database Sync"
echo "======================================"
echo ""
echo "💡 You will be prompted for SSH password during the process"
echo ""

# Check if local database exists
if [ ! -f "$LOCAL_DB_PATH" ]; then
    echo "❌ Local database not found at: $LOCAL_DB_PATH"
    echo "   Make sure you're running this from the project root"
    exit 1
fi

echo "📦 Local database found: $LOCAL_DB_PATH"
echo "📊 Database size: $(du -h $LOCAL_DB_PATH | cut -f1)"
echo ""

# Confirm action
echo "⚠️  WARNING: This will OVERWRITE the production database!"
echo "📍 Target: ${SERVER_USER}@${SERVER_IP}:${REMOTE_DB_PATH}"
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Sync cancelled"
    exit 0
fi

echo ""
echo "🚀 Starting database sync..."

# Create backup on server first
echo "📦 Creating backup on server..."
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
BACKUP_DIR="/var/www/backups/database-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
if [ -f "/var/www/strapi/.tmp/data.db" ]; then
    cp /var/www/strapi/.tmp/data.db "$BACKUP_DIR/"
    echo "✅ Backup created at: $BACKUP_DIR"
else
    echo "⚠️  No existing database to backup"
fi
ENDSSH

# Stop Strapi
echo "⏸️  Stopping Strapi..."
ssh ${SERVER_USER}@${SERVER_IP} "pm2 stop strapi || true"

# Upload database
echo "📤 Uploading database..."
scp "$LOCAL_DB_PATH" ${SERVER_USER}@${SERVER_IP}:${REMOTE_DB_PATH}

# Set permissions and restart
echo "🔧 Setting permissions and restarting..."
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
cd /var/www/strapi
chown -R www-data:www-data .tmp/
chmod 644 .tmp/data.db
pm2 restart strapi
pm2 save
ENDSSH

echo ""
echo "======================================"
echo "✅ Database sync complete!"
echo "======================================"
echo ""
echo "📊 Strapi status:"
ssh ${SERVER_USER}@${SERVER_IP} "pm2 list | grep strapi"

echo ""
echo "🎉 Done! Your production database is now in sync with local."
