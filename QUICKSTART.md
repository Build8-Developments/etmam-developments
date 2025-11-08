# 🚀 Quick Start - GitHub Secrets Setup

This guide will help you verify and set up GitHub Secrets for CI/CD deployment.

## ✅ Current Status

Based on your GitHub secrets screenshot, you have most secrets configured. Here's what to verify:

### 🔐 Secrets to Verify/Update

#### 1. Fix SSH_HOST Secret

**Current**: Shows as a URL  
**Should be**: `72.60.135.197` (IP address only)

**How to fix:**

1. Go to: **Repository → Settings → Secrets → Actions**
2. Find `SSH_HOST` → Click **Update**
3. Change value to: `72.60.135.197`
4. Save

---

## 📋 Complete Secrets Checklist

### SSH Secrets (4/4 ✅)

- [x] `SSH_HOST` - ⚠️ **Update to IP: `72.60.135.197`**
- [x] `SSH_USER`
- [x] `SSH_PASSWORD`
- [x] `SSH_PORT`

### Frontend Secrets (5/5 ✅)

- [x] `FRONTEND_NEXT_PUBLIC_APP_URL`
- [x] `FRONTEND_NEXT_PUBLIC_STRAPI_API_URL`
- [x] `FRONTEND_NEXT_PUBLIC_STRAPI_API_TOKEN`
- [x] `FRONTEND_REVALIDATION_SECRET`
- [x] `REVALIDATION_SECRET` (duplicate - that's fine)

### Strapi Secrets (8/8 ✅)

- [x] `STRAPI_API_URL`
- [x] `STRAPI_GRAPHQL_URL`
- [x] `STRAPI_API_TOKEN`
- [x] `STRAPI_APP_KEYS`
- [x] `STRAPI_API_TOKEN_SALT`
- [x] `STRAPI_ADMIN_JWT_SECRET`
- [x] `STRAPI_JWT_SECRET`
- [x] `STRAPI_TRANSFER_TOKEN_SALT`
- [x] `STRAPI_ENCRYPTION_KEY`

---

## 🎯 Next Steps

### 1. Update SSH_HOST (Required)

```
Old: https://etmam.alkelany.com (or similar URL)
New: 72.60.135.197
```

### 2. Test Deployment

Once `SSH_HOST` is fixed, you can test deployment:

#### Option A: Push to main branch

```bash
git add .
git commit -m "chore: setup CI/CD deployment"
git push origin main
```

#### Option B: Manual workflow trigger

1. Go to: **Actions → Deploy to Production**
2. Click: **Run workflow**
3. Select: `frontend` (test frontend first)
4. Click: **Run workflow** button

### 3. Monitor Deployment

1. Go to: **Actions** tab
2. Click on the running workflow
3. Watch the deployment steps in real-time
4. Check for any errors

---

## 🐛 If Deployment Fails

### Check These Common Issues:

1. **SSH_HOST is still a URL**

   - Must be IP address: `72.60.135.197`

2. **SSH connection fails**

   - Test manually: `ssh root@72.60.135.197`
   - Verify password is correct

3. **Build fails**

   - Check GitHub Actions logs
   - Test locally: `npm run build`

4. **PM2 restart fails**
   - SSH to server: `pm2 list`
   - Manually restart if needed

---

## 📚 Documentation

For full details, see: [`DEPLOYMENT.md`](./DEPLOYMENT.md)

---

**Ready?** Update `SSH_HOST` secret and push to `main` branch! 🚀
