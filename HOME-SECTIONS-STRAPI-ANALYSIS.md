# تحليل ربط Sections الصفحة الرئيسية بـ Strapi

## نظرة عامة
الصفحة الرئيسية تحتوي على **12 Section** كلها مربوطة بـ Strapi كـ **Single Type** بإسم `home`.

---

## 📋 جدول Sections وربطها بـ Strapi

| # | Section Name | Component في Strapi | GraphQL Query | حالة الربط |
|---|--------------|---------------------|---------------|------------|
| 1 | Hero Section | `sections.hero-section` | `homeData?.Hero` | ✅ مربوط |
| 2 | About Section | `sections.about-us-component` | `homeData?.About` | ✅ مربوط |
| 3 | Services Section | `sections.services-section` | `homeData?.Services` | ✅ مربوط |
| 4 | How It Works | `sections.how-it-works-section` | `homeData?.HowItWorks` | ✅ مربوط |
| 5 | Statistics | `sections.statistics-section` | `homeData?.Statistics` | ✅ مربوط |
| 6 | Services Carousel | `sections.services-carousel-section` | `homeData?.ServicesCarousel` | ✅ مربوط |
| 7 | Reviews Section | `sections.reviews-section` | `homeData?.Reviews` | ✅ مربوط |
| 8 | Blog Section | `sections.blog-section` | `homeData?.Blog` | ✅ مربوط |
| 9 | FAQ Section | `sections.faq-section` | `homeData?.Faq` | ✅ مربوط |
| 10 | Consultation | `sections.consultation-section` | `homeData?.Consultation` | ✅ مربوط |
| 11 | CTA Section | `sections.cta-section` | `homeData?.CTA` | ✅ مربوط |
| 12 | Partners | `sections.partners-section` | `homeData?.PartnersLogos` | ✅ مربوط |

---

## 🔍 تحليل تفصيلي لكل Section

### 1️⃣ Hero Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/home/HeroSection.tsx`
- استخدام في Page: `frontend/src/app/page.tsx` (سطر 43-52)

**🔗 الربط بـ Strapi:**
```json
// strapi/src/components/sections/hero-section.json
{
  "attributes": {
    "title": "string",
    "subtitle": "string", 
    "description": "text",
    "primaryButton": "ui.button",
    "secondaryButton": "ui.button",
    "backgroundImage": "media",
    "personImage": "media"
  }
}
```

**📊 GraphQL Query:**
```graphql
Hero {
  title
  subtitle
  description
  primaryButton { label, href }
  secondaryButton { label, href }
  backgroundImage { url, name }
  personImage { url, name }
}
```

**✨ Features:**
- عنوان رئيسي وفرعي
- وصف تفصيلي
- زرين CTA (رئيسي وثانوي)
- صورة خلفية وصورة شخص

---

### 2️⃣ About Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/home/AboutSection.tsx`
- استخدام في Page: سطر 55-81

**🔗 الربط بـ Strapi:**
```json
// sections.about-us-component
{
  "attributes": {
    "title": "string",
    "subtitle": "string",
    "description": "richtext",
    "primaryImage": "media",
    "secondaryImage": "media",
    "partnersCount": "integer",
    "partnersCountText": "string",
    "trustDescription": "text",
    "visionDescription": "text"
  }
}
```

**📊 GraphQL Query:**
```graphql
About {
  title
  subtitle
  description
  trustDescription
  visionDescription
  primaryImage { url, name }
  secondaryImage { url, name }
  partnersCount
  partnersCountText
}
```

**✨ Features:**
- عنوان وعنوان فرعي
- وصف غني (Rich Text)
- صورتين (رئيسية وثانوية)
- إحصائية الشركاء
- وصف الثقة والرؤية

---

### 3️⃣ Services Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/services/ServicesSection.tsx`
- استخدام في Page: سطر 84-91

**🔗 الربط بـ Strapi:**
```json
// sections.services-section
{
  "attributes": {
    "title": "string",
    "description": "text",
    "services": "content.content-service-card[]", // repeatable
    "ctaButton": "ui.button"
  }
}
```

**📊 GraphQL Query:**
```graphql
Services {
  title
  description
  services {
    title
    description
    icon { url, name }
    serviceLink
  }
  ctaButton { label, href }
}
```

**✨ Features:**
- عنوان ووصف للقسم
- مصفوفة من بطاقات الخدمات (3-6 خدمات)
- كل خدمة لها: أيقونة، عنوان، وصف، رابط
- زر CTA لعرض المزيد

---

### 4️⃣ How It Works Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/services/HowItWorksSection.tsx`
- استخدام في Page: سطر 94-101

**🔗 الربط بـ Strapi:**
```json
// sections.how-it-works-section
{
  "attributes": {
    "title": "string",
    "description": "text",
    "bannerText": "string",
    "personImage": "media",
    "steps": "content.numbered-step[]" // repeatable
  }
}
```

**📊 GraphQL Query:**
```graphql
HowItWorks {
  title
  description
  bannerText
  personImage { url, name }
  steps {
    title
    description
    order
  }
}
```

**✨ Features:**
- عنوان ووصف
- صورة شخص مع لابتوب
- نص بانر
- خطوات مرقمة (3-5 خطوات)

---

### 5️⃣ Statistics Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/home/StatisticsSection.tsx`
- استخدام في Page: سطر 107-113

**🔗 الربط بـ Strapi:**
```json
// sections.statistics-section
{
  "attributes": {
    "title": "text",
    "backgroundImage": "media",
    "stats": "content.stat-item[]" // repeatable
  }
}
```

**📊 GraphQL Query:**
```graphql
Statistics {
  title
  backgroundImage { url, name }
  stats {
    number
    label
  }
}
```

**✨ Features:**
- عنوان رئيسي
- صورة خلفية (تغطي 2/3 العلوي)
- 4-6 إحصائيات (رقم + تسمية)
- تصميم Overlay مع Gradient

---

### 6️⃣ Services Carousel Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/services/ServicesCarouselSection.tsx`
- استخدام في Page: سطر 116-122

**🔗 الربط بـ Strapi:**
```json
// sections.services-carousel-section
{
  "attributes": {
    "title": "string",
    "description": "text",
    "services": "content.service-slide[]" // repeatable
  }
}
```

**📊 GraphQL Query:**
```graphql
ServicesCarousel {
  title
  description
  services {
    title
    description
    icon { url, name }
    image { url, name }
  }
}
```

**✨ Features:**
- عنوان ووصف
- Carousel/Slider للخدمات
- كل slide: صورة، أيقونة، عنوان، وصف
- Navigation dots
- Keyboard navigation

---

### 7️⃣ Reviews Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/home/ReviewsSection.tsx`
- استخدام في Page: سطر 125-129

**🔗 الربط بـ Strapi:**
```json
// sections.reviews-section
{
  "attributes": {
    "title": "string",
    "subtitle": "string",
    "description": "text"
  }
}
```

**📊 GraphQL Query:**
```graphql
Reviews {
  title
  subtitle
  description
}
```

**⚠️ ملاحظة:**
- Reviews الفعلية تأتي من Collection Type منفصل
- Section يستخدم Hook منفصل: `useReviews()`
- يوجد Fallback لـ Mock Data

---

### 8️⃣ Blog Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/blog/BlogSection.tsx`
- استخدام في Page: سطر 132-134

**🔗 الربط بـ Strapi:**
```json
// sections.blog-section
{
  "attributes": {
    "title": "string",
    "blogPosts": "relation:oneToMany -> blog-post",
    "displayCount": "integer"
  }
}
```

**⚠️ ملاحظة:**
- Blog Posts تأتي من Collection Type منفصل
- العلاقة: oneToMany مع `api::blog-post.blog-post`
- يعرض آخر 3 مقالات بشكل افتراضي

---

### 9️⃣ FAQ Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/sections/FAQSection.tsx`
- استخدام في Page: سطر 137-139

**🔗 الربط بـ Strapi:**
```json
// sections.faq-section
{
  "attributes": {
    "title": "string",
    "faqs": "content.faq-item[]" // repeatable
  }
}
```

**📊 GraphQL Query:**
```graphql
Faq {
  string // العنوان (ملاحظة: المفروض يكون title)
  faqs {
    question
    answer
    order
  }
}
```

**✨ Features:**
- عنوان القسم
- 4-20 سؤال وجواب
- Accordion expandable
- تصميم عمودين على Desktop

**🐛 Bug محتمل:**
- في GraphQL Query: `Faq?.string` بدلاً من `Faq?.title`

---

### 🔟 Consultation Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/sections/ConsultationSection.tsx`
- استخدام في Page: سطر 142-147

**🔗 الربط بـ Strapi:**
```json
// sections.consultation-section
{
  "attributes": {
    "title": "string",
    "description": "text",
    "backgroundImage": "media"
  }
}
```

**📊 GraphQL Query:**
```graphql
Consultation {
  title
  description
  backgroundImage { url, name }
}
```

**✨ Features:**
- عنوان ووصف
- صورة خلفية
- فورم لطلب استشارة
- يرسل البيانات لـ `contact-submission` Collection

---

### 1️⃣1️⃣ CTA Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/home/CTASection.tsx`
- استخدام في Page: سطر 150-156

**🔗 الربط بـ Strapi:**
```json
// sections.cta-section
{
  "attributes": {
    "title": "text",
    "buttonText": "string",
    "buttonLink": "string",
    "backgroundImage": "media"
  }
}
```

**📊 GraphQL Query:**
```graphql
CTA {
  title
  buttonText
  buttonLink
  backgroundImage { url, name }
}
```

**✨ Features:**
- عنوان CTA
- زر مع نص ورابط
- صورة خلفية (35% من العرض)
- تصميم Gradient أخضر (65% من العرض)

---

### 1️⃣2️⃣ Partners Section
**📍 الموقع في الكود:**
- Component: `frontend/src/components/home/PartnersSection.tsx`
- استخدام في Page: سطر 159-161

**🔗 الربط بـ Strapi:**
```json
// sections.partners-section
{
  "attributes": {
    "partners": "content.partner-logo[]", // repeatable
    "animationSpeed": "integer"
  }
}
```

**📊 GraphQL Query:**
```graphql
PartnersLogos {
  partners {
    name
    logo { url, name }
    website
  }
}
```

**✨ Features:**
- شعارات الشركاء
- Infinite scrolling animation
- كل شعار: صورة، اسم، رابط موقع
- سرعة الـ animation قابلة للتخصيص

---

## 🏗️ بنية Strapi Schema

### Home Page (Single Type)
```json
{
  "kind": "singleType",
  "collectionName": "homes",
  "pluginOptions": {
    "i18n": { "localized": true }
  },
  "attributes": {
    "Hero": "component:sections.hero-section",
    "About": "component:sections.about-us-component",
    "Services": "component:sections.services-section",
    "HowItWorks": "component:sections.how-it-works-section",
    "Statistics": "component:sections.statistics-section",
    "ServicesCarousel": "component:sections.services-carousel-section",
    "Reviews": "component:sections.reviews-section",
    "Blog": "component:sections.blog-section",
    "Faq": "component:sections.faq-section",
    "Consultation": "component:sections.consultation-section",
    "CTA": "component:sections.cta-section",
    "PartnersLogos": "component:sections.partners-section"
  }
}
```

---

## 📂 مسارات الملفات الرئيسية

### Frontend Structure
```
frontend/src/
├── app/
│   └── page.tsx                           # الصفحة الرئيسية
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx               # Hero
│   │   ├── AboutSection.tsx              # About
│   │   ├── StatisticsSection.tsx         # Statistics
│   │   ├── CTASection.tsx                # CTA
│   │   ├── PartnersSection.tsx           # Partners
│   │   └── ReviewsSection.tsx            # Reviews
│   ├── services/
│   │   ├── ServicesSection.tsx           # Services
│   │   ├── ServicesCarouselSection.tsx   # Services Carousel
│   │   └── HowItWorksSection.tsx         # How It Works
│   ├── sections/
│   │   ├── FAQSection.tsx                # FAQ
│   │   └── ConsultationSection.tsx       # Consultation
│   └── blog/
│       └── BlogSection.tsx               # Blog
└── lib/
    └── graphql/
        └── queries/
            └── pages/
                └── home.ts               # GET_HOME_PAGE Query
```

### Strapi Structure
```
strapi/src/
├── api/
│   └── home/
│       └── content-types/
│           └── home/
│               └── schema.json           # Home Page Schema
├── components/
│   └── sections/
│       ├── hero-section.json
│       ├── about-us-component.json
│       ├── services-section.json
│       ├── how-it-works-section.json
│       ├── statistics-section.json
│       ├── services-carousel-section.json
│       ├── reviews-section.json
│       ├── blog-section.json
│       ├── faq-section.json
│       ├── consultation-section.json
│       ├── cta-section.json
│       └── partners-section.json
└── strapi-content/home/                  # Documentation
    ├── home-page.json
    ├── hero-section.json
    ├── about-section.json
    └── ...
```

---

## 🔄 آلية العمل (Data Flow)

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User Request → Page Load                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. frontend/src/app/page.tsx                                │
│    - getLocale() → Get user language (ar/en)                │
│    - fetchWithLocale({ query: GET_HOME_PAGE, locale })      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. GraphQL Query to Strapi                                  │
│    GET_HOME_PAGE fetches all 12 sections                    │
│    - Hero, About, Services, HowItWorks, etc.                │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Strapi CMS                                               │
│    - Single Type: "Home"                                    │
│    - Returns localized content (ar/en)                      │
│    - Includes all components + media URLs                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. Data Processing                                          │
│    const homeData = strapiData?.home                        │
│    - homeData.Hero → HeroSection props                      │
│    - homeData.About → AboutSection props                    │
│    - homeData.Services → ServicesSection props              │
│    - etc...                                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. Component Rendering                                      │
│    Each section receives its data as props                  │
│    - Falls back to default/mock data if Strapi unavailable  │
│    - Wrapped in AnimatedSection for animations              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 7. Final Rendered Page                                      │
│    All 12 sections displayed with Strapi content            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🌐 i18n Support (Internationalization)

**جميع Sections تدعم اللغات المتعددة:**
- كل component في Strapi له `pluginOptions.i18n.localized: true`
- الـ Query يرسل `locale` parameter (ar/en)
- كل section له محتوى منفصل بالعربي والإنجليزي

**مثال:**
```graphql
query Home($locale: I18NLocaleCode) {
  home(locale: $locale) {
    Hero { ... }
    About { ... }
  }
}
```

---

## ⚠️ ملاحظات ومشاكل محتملة

### 1. FAQ Section Bug
```typescript
// في page.tsx سطر 138
<FAQSection title={homeData?.Faq?.string} faqs={homeData?.Faq?.faqs} />
```
- المفروض يكون `homeData?.Faq?.title` بدل `string`

### 2. Blog & Reviews
- **Blog Section**: المحتوى يأتي من Collection Type منفصل
- **Reviews Section**: تستخدم Hook منفصل `useReviews()`
- كلاهما ليس مباشرة من Home Schema

### 3. Fallback Data
- كل component لديه Mock/Default data
- إذا Strapi غير متاح، الصفحة تعمل بـ Default content
- يساعد في الـ Development وتجنب الأخطاء

### 4. About Section - Repeatable
```json
"About": {
  "component": "sections.about-us-component",
  "repeatable": true  // ⚠️ Repeatable لكن يستخدم كـ Single
}
```
- في Schema مكتوب `repeatable: true`
- لكن في الاستخدام يُعامل كـ Single component

---

## 🎯 التوصيات

### 1. إصلاح FAQ Title
```typescript
// قبل
<FAQSection title={homeData?.Faq?.string} />

// بعد
<FAQSection title={homeData?.Faq?.title} />
```

### 2. توحيد About Component
```json
// في schema.json
"About": {
  "repeatable": false  // تغيير لـ false
}
```

### 3. إضافة SEO Component
```json
"attributes": {
  "seo": {
    "type": "component",
    "component": "shared.seo",
    "required": true
  }
}
```

### 4. Error Handling
- إضافة Loading states
- إضافة Error boundaries
- تحسين Fallback UI

---

## 📊 إحصائيات المشروع

| Item | Count |
|------|-------|
| Total Sections | 12 |
| Strapi Components | 12 |
| Sub-components (UI) | ~8 (buttons, cards, etc.) |
| GraphQL Queries | 1 main (GET_HOME_PAGE) |
| Media Fields | 15+ |
| Repeatable Fields | 6 |
| i18n Support | ✅ All sections |
| Fallback Data | ✅ Available |

---

## 🚀 خطوات التشغيل

### 1. تشغيل Strapi
```bash
cd strapi
npm run develop
```

### 2. إدخال البيانات
- افتح: `http://localhost:1337/admin`
- اختر Content Manager → Home (Single Type)
- املأ جميع الـ 12 sections
- انشر المحتوى (Publish)

### 3. تشغيل Frontend
```bash
cd frontend
npm run dev
```

### 4. معاينة الصفحة
- افتح: `http://localhost:3000`
- شاهد جميع sections محملة من Strapi

---

## 📝 ملخص

✅ **جميع الـ 12 Sections مربوطة بـ Strapi بشكل كامل**
✅ **كل section له Component منفصل في Strapi**
✅ **GraphQL Query واحد يجلب كل البيانات**
✅ **دعم كامل للغة العربية والإنجليزية**
✅ **Fallback data متوفر لكل section**
✅ **المشروع جاهز للاستخدام بعد إدخال البيانات في Strapi**

---

*آخر تحديث: نوفمبر 2025*
