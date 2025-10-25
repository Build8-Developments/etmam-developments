# Home Page Implementation Checklist

## ✅ Pre-Setup Requirements

- [ ] Strapi project initialized
- [ ] i18n plugin installed
- [ ] Media library accessible
- [ ] Admin panel accessible
- [ ] Locales configured (ar, en)

---

## 📦 Phase 1: Create Reusable Components (30 min)

### Shared Components

- [ ] `shared.seo` - SEO metadata component
  - Fields: metaTitle, metaDescription, keywords, metaImage, canonicalURL, metaRobots, structuredData
  - File: `components/shared-seo.json`

### UI Components

- [ ] `ui.button` - Button component

  - Fields: label, href, variant, icon, openInNewTab
  - File: `components/ui-button.json`

- [ ] `ui.icon-text-card` - Icon card component
  - Fields: icon, iconImage, title, description
  - File: `components/ui-icon-text-card.json`

### Content Components

- [ ] `content.service-card` - Service card

  - Fields: icon, title, description, isActive, serviceLink
  - File: `components/content-service-card.json`

- [ ] `content.numbered-step` - Process step

  - Fields: number, title, description
  - File: `components/content-numbered-step.json`

- [ ] `content.stat-item` - Statistic item

  - Fields: number, label
  - File: `components/content-stat-item.json`

- [ ] `content.service-slide` - Carousel slide

  - Fields: image, icon, title, description
  - File: `components/content-service-slide.json`

- [ ] `content.faq-item` - FAQ item

  - Fields: question, answer, category, displayOrder
  - File: `components/content-faq-item.json`

- [ ] `content.partner-logo` - Partner logo
  - Fields: name, logo, website
  - File: `components/content-partner-logo.json`

---

## 🏗️ Phase 2: Create Section Components (60 min)

### Section Components (in order)

- [ ] `sections.hero-section`

  - Dependencies: ui.button
  - File: `home/hero-section.json`

- [ ] `sections.about-section`

  - Dependencies: ui.icon-text-card, ui.button
  - File: `home/about-section.json`

- [ ] `sections.services-section`

  - Dependencies: content.service-card, ui.button
  - File: `home/services-section.json`

- [ ] `sections.how-it-works-section`

  - Dependencies: content.numbered-step
  - File: `home/how-it-works-section.json`

- [ ] `sections.statistics-section`

  - Dependencies: content.stat-item
  - File: `home/statistics-section.json`

- [ ] `sections.services-carousel-section`

  - Dependencies: content.service-slide
  - File: `home/services-carousel-section.json`

- [ ] `sections.blog-section`

  - Dependencies: Blog Post relation (to be created)
  - File: `home/blog-section.json`

- [ ] `sections.faq-section`

  - Dependencies: content.faq-item
  - File: `home/faq-section.json`

- [ ] `sections.cta-section`

  - Dependencies: None
  - File: `home/cta-section.json`

- [ ] `sections.partners-section`
  - Dependencies: content.partner-logo
  - File: `home/partners-section.json`

---

## 📄 Phase 3: Create Home Page Single Type (15 min)

- [ ] Create Home Page (Single Type)

  - Name: `home-page`
  - Display Name: `Home Page`
  - File: `home/home-page.json`

- [ ] Add all section components:

  - [ ] seo (shared.seo)
  - [ ] heroSection
  - [ ] aboutSection
  - [ ] servicesSection
  - [ ] howItWorksSection
  - [ ] statisticsSection
  - [ ] servicesCarouselSection
  - [ ] blogSection
  - [ ] faqSection
  - [ ] ctaSection
  - [ ] partnersSection

- [ ] Enable Draft & Publish
- [ ] Enable i18n (Localization)

---

## 🖼️ Phase 4: Upload Media Assets (45 min)

### Hero Section Images

- [ ] Background image (1920x1080px) - hero-bg.jpg
- [ ] Person image (500x800px) - hero-person.png
- [ ] Decorative ellipse
- [ ] Small circular icon
- [ ] Small card person image

### About Section Images

- [ ] Main image (800x800px) - about-main.jpg
- [ ] Secondary image (400x400px) - about-secondary.jpg
- [ ] Decorative wave pattern - top-right-icon.png

### Statistics Section

- [ ] Background image (1920x600px) - stats-bg.jpg

### How It Works Section

- [ ] Person with laptop (507x507px) - how-it-works-person.png

### Services Carousel

- [ ] Service image 1 (800x600px)
- [ ] Service image 2 (800x600px)
- [ ] Service image 3 (800x600px)
- [ ] Service image 4 (800x600px)
- [ ] Service image 5 (800x600px)

### CTA Section

- [ ] Background image (800x600px) - cta-bg.jpg

### Partners Section

- [ ] Partner logo 1 (120x64px, transparent)
- [ ] Partner logo 2 (120x64px, transparent)
- [ ] Partner logo 3 (120x64px, transparent)
- [ ] Partner logo 4 (120x64px, transparent)

### SEO

- [ ] Open Graph image (1200x630px) - og-home.jpg

### Patterns & Decorations

- [ ] Net pattern - net.png
- [ ] Decorative brackets
- [ ] Wave patterns

---

## ✍️ Phase 5: Add Arabic Content (90 min)

### SEO

- [ ] metaTitle: "إتمام - شريكك الموثوق في تأسيس وإدارة الأعمال"
- [ ] metaDescription: "نقدم خدمات متكاملة لتأسيس الشركات واستخراج التراخيص..."
- [ ] keywords
- [ ] metaImage (OG image)

### Hero Section

- [ ] title: "نساعدك في تأسيس و إدارة أعمالك"
- [ ] subtitle: "بسهولة وسرعة وأمان"
- [ ] description
- [ ] primaryButton: "استعرض خدماتنا" → /services
- [ ] secondaryButton: "اعرف أكثر" → /about
- [ ] backgroundImage
- [ ] personImage

### About Section

- [ ] title: "من نحن"
- [ ] heading: "رحلتك في تأسيس وإدارة الأعمال تبدأ من هنا"
- [ ] description
- [ ] mainImage, secondaryImage
- [ ] statNumber: "680"
- [ ] statLabel: "شراكة ناجحة"
- [ ] features (2-4 items):
  - [ ] موثوقية (Trust)
  - [ ] رسالتنا (Our Mission)
- [ ] ctaButton: "عرض المزيد" → /about

### Services Section

- [ ] title: "خدماتنا التي تلبي احتياجاتك"
- [ ] description
- [ ] services (6-8 items):
  - [ ] تأسيس الشركات (building)
  - [ ] استخراج التراخيص (license)
  - [ ] الاستشارات القانونية (consulting)
  - [ ] المحاسبة والضرائب (accounting)
  - [ ] إدارة الموارد البشرية (hr)
  - [ ] التسويق الرقمي (marketing)
- [ ] ctaButton: "عرض المزيد" → /services

### How It Works Section

- [ ] title: "خطوات بسيطة لطلب خدمتك"
- [ ] description
- [ ] personImage
- [ ] bannerText: "إجراءات أبسط... إنجاز أسرع"
- [ ] steps (3 items):
  - [ ] 1. اختر الخدمة
  - [ ] 2. قدم طلبك أونلاين
  - [ ] 3. إتمام التنفيذ

### Statistics Section

- [ ] title: "ابدأ رحلة عملك نحو مستقبل أكثر استدامة وأمانا"
- [ ] backgroundImage
- [ ] stats (4 items):
  - [ ] +١٥ - المواد البلاستيكية المدرجة
  - [ ] +٣٥٠k - المورد والمشتري الموثوق به
  - [ ] +١٥k - مدينة تدعم التوصيل
  - [ ] +١٥ - معدل رضا المستخدمين

### Services Carousel

- [ ] title: "ماذا نقدم في إتمام ؟"
- [ ] description
- [ ] services (5 items with images)

### Blog Section

- [ ] title: "المدونة"
- [ ] Select 3 featured blog posts
- [ ] displayCount: 3

### FAQ Section

- [ ] title: "الأسئلة الشائعة"
- [ ] faqs (8-12 items):
  - [ ] كم يستغرق إنجاز الخدمة؟
  - [ ] هل أحتاج الحضور شخصياً؟
  - [ ] هل يشمل السعر جميع الرسوم الحكومية؟
  - [ ] (Add more FAQs)

### CTA Section

- [ ] title: "ابدأ الآن واحصل على استشارة مجانية"
- [ ] buttonText: "تواصل معنا"
- [ ] buttonLink: /contact
- [ ] backgroundImage

### Partners Section

- [ ] partners (4-8 items with logos)
- [ ] animationSpeed: 15

---

## 🌍 Phase 6: Add English Translation (60 min)

- [ ] Switch locale to English in admin
- [ ] Translate all sections (same structure as Arabic)
- [ ] Keep same media files
- [ ] Update alt text for images in English

---

## 🧪 Phase 7: Testing (30 min)

### Content Review

- [ ] All required fields filled (AR & EN)
- [ ] All images uploaded with alt text
- [ ] All buttons have valid links
- [ ] Text content is proofread
- [ ] No placeholder text remaining

### Visual Check

- [ ] Preview in Arabic locale
- [ ] Preview in English locale
- [ ] Check mobile responsiveness (use browser dev tools)
- [ ] Verify image quality
- [ ] Check text contrast/readability

### API Testing

- [ ] Test endpoint: `/api/home-page?populate=deep&locale=ar`
- [ ] Test endpoint: `/api/home-page?populate=deep&locale=en`
- [ ] Verify all nested data is populated
- [ ] Check image URLs are correct
- [ ] Verify response time is acceptable

### Permissions

- [ ] Public role can access home-page (find, findOne)
- [ ] API token created for frontend
- [ ] CORS configured correctly

---

## 🚀 Phase 8: Publish & Deploy (15 min)

- [ ] Publish Home Page (move from Draft to Published)
- [ ] Test published endpoint
- [ ] Connect frontend to API
- [ ] Test frontend rendering
- [ ] Verify images load correctly
- [ ] Test language switching
- [ ] Check all links work
- [ ] Test on different devices
- [ ] Performance check (Lighthouse)

---

## 📊 Post-Launch Monitoring

### Week 1

- [ ] Monitor API response times
- [ ] Check error logs
- [ ] Review user feedback
- [ ] Test on actual mobile devices
- [ ] SEO validation (meta tags)

### Week 2

- [ ] Analytics setup verified
- [ ] Content edits tested (edit & republish flow)
- [ ] Backup content types exported
- [ ] Document any custom changes

---

## 🔄 Maintenance Checklist

### Monthly

- [ ] Update blog posts
- [ ] Review FAQ content
- [ ] Update statistics if needed
- [ ] Check for broken links
- [ ] Update partner logos if needed
- [ ] Review and optimize images
- [ ] Check API performance

### Quarterly

- [ ] Content audit (outdated info)
- [ ] Update service offerings
- [ ] Refresh hero images/messaging
- [ ] Review SEO metadata
- [ ] Update structured data
- [ ] Backup all content

---

## ⏱️ Estimated Time

| Phase                        | Duration | Total           |
| ---------------------------- | -------- | --------------- |
| Pre-Setup                    | 30 min   | 30 min          |
| Phase 1: Components          | 30 min   | 1 hr            |
| Phase 2: Sections            | 60 min   | 2 hr            |
| Phase 3: Content Type        | 15 min   | 2 hr 15 min     |
| Phase 4: Media Upload        | 45 min   | 3 hr            |
| Phase 5: Arabic Content      | 90 min   | 4 hr 30 min     |
| Phase 6: English Translation | 60 min   | 5 hr 30 min     |
| Phase 7: Testing             | 30 min   | 6 hr            |
| Phase 8: Publish             | 15 min   | **6 hr 15 min** |

**Total Estimated Time:** 6-8 hours (depending on content preparation)

---

## 📝 Notes

- Take breaks between phases
- Test after each major phase
- Save frequently
- Document any issues encountered
- Keep a list of questions for later
- Take screenshots of completed sections
- Export content types as backup

---

## ✅ Final Checklist

- [ ] All components created successfully
- [ ] Home Page single type configured
- [ ] All media assets uploaded
- [ ] Arabic content complete
- [ ] English translation complete
- [ ] All sections tested
- [ ] API endpoints working
- [ ] Frontend connected
- [ ] Published and live
- [ ] Documentation updated

---

**Status:** ⬜ Not Started | 🟡 In Progress | ✅ Completed  
**Last Updated:** October 22, 2025  
**Project:** Etmam Developments - Home Page CMS
