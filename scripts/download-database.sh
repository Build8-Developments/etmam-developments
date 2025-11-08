#!/bin/bash

# Download Production Database Script
# Downloads the production SQLite database to local development

set -e

# Configuration
SERVER_IP="72.60.135.197"
SERVER_USER="root"
LOCAL_DB_PATH="./strapi/.tmp/data.db"
REMOTE_DB_PATH="/var/www/strapi/.tmp/data.db"

echo "======================================"
echo "⬇️  Download Production Database"
echo "======================================"
echo ""
echo "💡 You will be prompted for SSH password during the process"
echo ""

# Create local .tmp directory if it doesn't exist
mkdir -p ./strapi/.tmp

# Backup local database if it exists
if [ -f "$LOCAL_DB_PATH" ]; then
    BACKUP_FILE="./strapi/.tmp/data.db.backup-$(date +%Y%m%d-%H%M%S)"
    echo "📦 Backing up local database to: $BACKUP_FILE"
    cp "$LOCAL_DB_PATH" "$BACKUP_FILE"
fi

echo "⚠️  WARNING: This will OVERWRITE your local database!"
echo "📍 Source: ${SERVER_USER}@${SERVER_IP}:${REMOTE_DB_PATH}"
echo "📍 Target: $LOCAL_DB_PATH"
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Download cancelled"
    exit 0
fi

echo ""
echo "⬇️  Downloading database from production..."

# Download database
scp ${SERVER_USER}@${SERVER_IP}:${REMOTE_DB_PATH} "$LOCAL_DB_PATH"

# Set local permissions
chmod 644 "$LOCAL_DB_PATH"

echo ""
echo "======================================"
echo "✅ Download complete!"
echo "======================================"
echo ""
echo "📊 Database size: $(du -h $LOCAL_DB_PATH | cut -f1)"
echo ""
echo "🎉 Your local database is now in sync with production."
echo "💡 Restart your local Strapi: cd strapi && npm run develop"
