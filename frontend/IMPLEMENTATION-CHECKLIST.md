# Implementation Checklist ✅

Use this checklist to ensure everything is set up correctly.

## ✅ Completed

- [x] **Next.js 15** installed with React 19
- [x] **TypeScript** configured
- [x] **Tailwind CSS v4** with custom green color palette
- [x] **Apollo Client & GraphQL** installed and configured
- [x] **Language Context** created for AR/EN switching
- [x] **Header Component** built with navigation
- [x] **Hero Section Component** built matching design
- [x] **Cairo Font** added for Arabic support
- [x] **RTL/LTR** automatic switching implemented
- [x] **Strapi Content Types** created (Header & Hero)
- [x] **GraphQL Plugin** configured in Strapi
- [x] **i18n** configured in Strapi (AR default, EN secondary)

## 🔄 Next Steps (For You to Complete)

### 1. Add Environment Variables
- [ ] Create `frontend/.env.local` with:
  ```env
  NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
  NEXT_PUBLIC_STRAPI_GRAPHQL_URL=http://localhost:1337/graphql
  ```
- [ ] Create `strapi/.env` with required secrets (see strapi/SETUP.md)

### 2. Install Strapi GraphQL Plugin
- [ ] Run: `cd strapi && npm install @strapi/plugin-graphql`

### 3. Start Development Servers
- [ ] Start Strapi: `cd strapi && npm run develop`
- [ ] Create admin user at http://localhost:1337/admin
- [ ] Start Frontend: `cd frontend && npm run dev`
- [ ] Visit http://localhost:3000

### 4. Add Your Images
- [ ] Upload background image to Strapi Media Library
- [ ] Upload person image (man in Saudi dress)
- [ ] Upload 3 small team images
- [ ] OR place images directly in `frontend/public/` folder

### 5. Configure Strapi Content
- [ ] In Strapi admin, go to Settings → Internationalization
- [ ] Ensure Arabic (ar) and English (en) locales are enabled
- [ ] Set Arabic as default locale
- [ ] Go to Content Manager → Hero (Single Type)
- [ ] Add content for Arabic:
  - Title: `إتمام`
  - Subtitle: `خدماتك التجارية والإدارية`
  - Description: `من تأسيس الشركات إلى استخراج الرخص وإدارة أعمالك، نوفر لك حلول متكاملة لإنشاء شركة وسريعة في الرياض`
  - Primary Button: `{"label": "تصفح الخدمات", "href": "/services"}`
  - Secondary Button: `{"label": "من نحن", "href": "/about"}`
  - Upload background, person, and small images
- [ ] Switch to English locale and add English content
- [ ] Save

### 6. Enable Public Access in Strapi
- [ ] Settings → Users & Permissions → Roles → Public
- [ ] Enable `find` permission for **Header**
- [ ] Enable `find` permission for **Hero**
- [ ] Save

### 7. Connect Frontend to Strapi
- [ ] Open `frontend/src/app/page.tsx`
- [ ] Uncomment all the GraphQL fetch code
- [ ] Save and refresh browser

### 8. Test Everything
- [ ] Test language switcher (AR ↔ EN)
- [ ] Test RTL/LTR layout switching
- [ ] Verify images are loading
- [ ] Check responsive design on mobile
- [ ] Test navigation links
- [ ] Verify colors match design

## 🎨 Design Matching Checklist

Compare with your design image:

- [ ] Header has white background with shadow
- [ ] Navigation items aligned correctly
- [ ] Language switcher is circular with primary green color
- [ ] Contact button ("تواصل معنا") has primary green background
- [ ] Hero background image covers full section
- [ ] Person image positioned correctly in green circle
- [ ] Location pin icon visible on person image area
- [ ] 3 small circular team photos in white card (top left)
- [ ] Title "إتمام" in large white text
- [ ] Subtitle "خدماتك التجارية والإدارية" below title
- [ ] "أسهل وأسرع" in primary green color
- [ ] Description text readable in white
- [ ] Two buttons: primary (green) and secondary (white outline)
- [ ] Text alignment: right for Arabic, left for English

## 🚀 Performance Checklist

- [ ] Images optimized (compressed)
- [ ] Next.js Image component used (automatic optimization)
- [ ] Fonts loading correctly
- [ ] No console errors
- [ ] Page loads in < 3 seconds

## 📱 Responsive Checklist

Test on different screen sizes:

- [ ] Desktop (1920px+) ✓
- [ ] Laptop (1366px) ✓
- [ ] Tablet (768px) ✓
- [ ] Mobile (375px) ✓

## 🔧 Development Commands Reference

### Frontend
```bash
cd frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Backend
```bash
cd strapi
npm run develop    # Start with admin panel
npm run start      # Start production
npm run build      # Build admin panel
```

## 📚 Documentation Files

- [README.md](../README.md) - Project overview
- [frontend/SETUP.md](./SETUP.md) - Detailed frontend setup
- [strapi/SETUP.md](../strapi/SETUP.md) - Detailed Strapi setup
- [HOW-TO-ADD-IMAGES.md](./HOW-TO-ADD-IMAGES.md) - Image upload guide

## 🆘 Common Issues & Solutions

### Issue: "Cannot find module '@/contexts/LanguageContext'"
**Solution:** Make sure TypeScript paths are configured correctly in `tsconfig.json`

### Issue: GraphQL endpoint not found
**Solution:** 
1. Install plugin: `npm install @strapi/plugin-graphql`
2. Check `strapi/config/plugins.ts` has graphql enabled
3. Restart Strapi

### Issue: Images not loading from Strapi
**Solution:**
1. Check CORS settings in `strapi/config/middlewares.ts`
2. Enable public permissions for content types
3. Verify `NEXT_PUBLIC_STRAPI_API_URL` in `.env.local`

### Issue: Arabic text not displaying correctly
**Solution:**
1. Ensure Cairo font is loaded in layout.tsx
2. Check `dir="rtl"` is set on html element
3. Verify language context is providing correct locale

### Issue: Tailwind colors not working
**Solution:**
1. Check `globals.css` has color variables defined
2. Restart dev server
3. Clear `.next` cache: `rm -rf .next`

## ✨ Success Criteria

Your implementation is complete when:

✅ The header and hero section match the design 100%
✅ Language switching works smoothly (AR ↔ EN)
✅ All images are displaying correctly
✅ Text is readable and properly aligned
✅ Colors match the provided palette
✅ Layout is responsive on all devices
✅ Strapi content updates reflect on frontend
✅ No console errors or warnings

---

**Questions or issues?** Check the documentation files or review the component code.

