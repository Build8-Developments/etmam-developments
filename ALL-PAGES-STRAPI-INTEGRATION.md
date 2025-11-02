# تحليل شامل لربط جميع الصفحات بـ Strapi

## 📊 نظرة عامة

المشروع يحتوي على **10 صفحات رئيسية** منها **7 صفحات مربوطة بـ Strapi** و **3 صفحات تحتاج ربط**.

---

## ✅ الصفحات المربوطة بـ Strapi (Single Types)

| # | الصفحة | Status | API Endpoint | Sections Count | i18n |
|---|--------|--------|--------------|----------------|------|
| 1 | Home | ✅ مربوط | `/api/home` | 12 sections | ✅ |
| 2 | About | ✅ مربوط | `/api/about` | 9 sections | ✅ |
| 3 | Contact | ⚠️ جزئي | `/api/contact` | Hero only | ✅ |
| 4 | Services | ⚠️ جزئي | - | No Single Type | ❌ |
| 5 | Privacy Policy | ✅ مربوط | `/api/privacy-policy-page` | 1 section | ✅ |
| 6 | Terms & Conditions | ✅ مربوط | `/api/terms-and-conditions-page` | 1 section | ✅ |

---

## ❌ الصفحات التي تحتاج ربط

| # | الصفحة | Status | الحل المطلوب |
|---|--------|--------|--------------|
| 1 | Blog | ❌ غير مربوط | Collection Type فقط |
| 2 | Offers | ❌ غير مربوط | Collection Type فقط |
| 3 | Packages | ❌ غير مربوط | Collection Type فقط |

---

## 🔍 تحليل تفصيلي لكل صفحة

---

### 1️⃣ صفحة Home Page ✅

**Status:** ✅ مربوطة بالكامل

**Schema Location:** `strapi/src/api/home/content-types/home/schema.json`

**Sections (12):**
1. Hero Section
2. About Section
3. Services Section
4. How It Works Section
5. Statistics Section
6. Services Carousel Section
7. Reviews Section
8. Blog Section
9. FAQ Section
10. Consultation Section
11. CTA Section
12. Partners Section

**GraphQL Query:** `GET_HOME_PAGE`

**i18n Support:** ✅ Yes (Arabic/English)

**Issues Fixed:**
- ✅ FAQ title field (was "string", now "title")
- ✅ About Section (was repeatable, now single)

---

### 2️⃣ صفحة About Page ✅

**Status:** ✅ مربوطة بالكامل

**Schema Location:** `strapi/src/api/about/content-types/about/schema.json`

**Sections (9):**
1. **Hero Section** (`sections.about-hero`)
   - Title, Subtitle
   - Primary & Secondary Buttons
   - Stats cards
   - Background Image

2. **About Us Section** (`sections.about-us-component`)
   - Title, Subtitle, Description
   - Trust & Vision descriptions
   - Primary & Secondary Images
   - Partners Count

3. **Success Section** (`sections.success`)
   - Title, Subtitle
   - Vision Message
   - Message Description & Images

4. **Achievements Section** (`sections.achievements`)
   - Title, Subtitle
   - Numbers Counter (repeatable)

5. **Why Choose Us** (`sections.why-choose-us-section`)
   - Title, Subtitle
   - Content cards (repeatable)

6. **Contact Us Card** (`sections.contact-us-card`)
   - Title, Description

7. **FAQ Section** (`sections.faq-section`)
   - Title
   - FAQs (repeatable)

8. **CTA Section** (`sections.cta-section`)
   - Title, Button, Background

9. **Partners Section** (`sections.partners-section`)
   - Partners logos (repeatable)

**GraphQL Query:** `GET_ABOUT_PAGE`

**i18n Support:** ✅ Yes

**Issues Found:**
- ⚠️ FAQ Section has `string` instead of `title` (same issue as Home)

---

### 3️⃣ صفحة Contact Page ⚠️

**Status:** ⚠️ مربوطة جزئياً

**Current Implementation:**
```typescript
const { data: contactPageData } = useContactPage();
const { data: contactInfoData } = useContactsInfo();
```

**Strapi APIs Used:**
1. `contact` - Single Type (Hero section only)
2. `contact-info` - Collection Type (Contact details)

**Schema Location:** `strapi/src/api/contact/content-types/contact/schema.json`

**Current Sections:**
1. ✅ Hero Section (مربوط)
   - Title, Subtitle
   - Primary & Secondary Buttons
   - Stats cards

2. ❌ Contact Info (يستخدم Collection Type منفصل)
3. ❌ Contact Form (Consultation Section - مشترك)
4. ❌ Partners Section (مشترك)

**GraphQL Query:** `GET_CONTACT_PAGE`

**i18n Support:** ✅ Yes

**Recommended Fix:**
- إضافة Single Type كامل للـ Contact Page
- نقل Contact Info للـ Single Type
- إضافة sections مثل Home/About

---

### 4️⃣ صفحة Services Page ⚠️

**Status:** ⚠️ لا يوجد Single Type

**Current Implementation:**
```typescript
'use client'; // Client component
const { data: servicesPageData } = useServicesPage();
```

**Current Structure:**
- يستخدم Mock Data فقط
- لا يوجد Single Type في Strapi
- يعرض Service Categories فقط

**Service Categories:**
1. Legal Services (`/legalservices`)
2. Consulting Services (`/consulting`)

**Recommended Structure:**

```json
{
  "kind": "singleType",
  "collectionName": "services_pages",
  "attributes": {
    "Hero": "sections.hero-section",
    "ServiceCategories": "sections.service-categories",
    "Features": "sections.features-section",
    "HowItWorks": "sections.how-it-works-section",
    "FAQ": "sections.faq-section",
    "CTA": "sections.cta-section",
    "Partners": "sections.partners-section"
  }
}
```

**i18n Support:** ⚠️ Partial (using language context)

---

### 5️⃣ صفحة Blog ❌

**Status:** ❌ Collection Type فقط

**Current Implementation:**
- Collection Type: `blog` (Blog Posts)
- Collection Type: `blog-category`
- Collection Type: `blog-author`
- Collection Type: `blog-comment`

**Strapi Schema:** `strapi/src/api/blog/content-types/blog/schema.json`

**What's Missing:**
- لا يوجد Single Type للـ Blog Page
- Hero Section غير مربوط
- Settings غير موجودة

**Recommended Fix:**

إنشاء Single Type: `blog-page`

```json
{
  "kind": "singleType",
  "attributes": {
    "Hero": "sections.hero-section",
    "FeaturedPosts": "sections.featured-posts",
    "Categories": "relation -> blog-category",
    "DisplaySettings": {
      "postsPerPage": "integer",
      "showAuthor": "boolean",
      "showDate": "boolean"
    }
  }
}
```

---

### 6️⃣ صفحة Offers ❌

**Status:** ❌ Collection Type فقط

**Current APIs:**
- `offer` - Collection Type (list of offers)
- `offer-detail` - للتفاصيل

**Strapi Schema:** `strapi/src/api/offer/content-types/offer/schema.json`

**What's Missing:**
- لا يوجد Single Type للـ Offers Page
- Hero Section غير مربوط

**Recommended Fix:**

إنشاء Single Type: `offers-page`

```json
{
  "kind": "singleType",
  "attributes": {
    "Hero": "sections.hero-section",
    "FeaturedOffers": "relation -> offer",
    "Categories": "component:filters",
    "CTA": "sections.cta-section"
  }
}
```

---

### 7️⃣ صفحة Packages ❌

**Status:** ❌ Collection Type فقط

**Current APIs:**
- `package` - Collection Type (list of packages)

**Strapi Schema:** `strapi/src/api/package/content-types/package/schema.json`

**What's Missing:**
- لا يوجد Single Type للـ Packages Page
- Hero Section غير مربوط

**Recommended Fix:**

إنشاء Single Type: `packages-page`

```json
{
  "kind": "singleType",
  "attributes": {
    "Hero": "sections.hero-section",
    "PricingTiers": "sections.pricing-section",
    "Comparison": "sections.comparison-table",
    "FAQ": "sections.faq-section",
    "CTA": "sections.cta-section"
  }
}
```

---

### 8️⃣ صفحة Privacy Policy ✅

**Status:** ✅ مربوط

**Schema Location:** `strapi/src/api/privacy-policy-page/content-types/privacy-policy-page/schema.json`

**Structure:**
```json
{
  "kind": "singleType",
  "attributes": {
    "title": "string",
    "content": "richtext",
    "lastUpdated": "date"
  }
}
```

**i18n Support:** ✅ Yes

---

### 9️⃣ صفحة Terms & Conditions ✅

**Status:** ✅ مربوط

**Schema Location:** `strapi/src/api/terms-and-conditions-page/content-types/terms-and-conditions-page/schema.json`

**Structure:**
```json
{
  "kind": "singleType",
  "attributes": {
    "title": "string",
    "content": "richtext",
    "lastUpdated": "date"
  }
}
```

**i18n Support:** ✅ Yes

---

## 🔧 الإصلاحات المطلوبة

### Priority 1: إصلاح FAQ في About Page

**المشكلة:** نفس مشكلة Home Page

**الملفات المطلوب تعديلها:**

1. ✅ Already Fixed: `strapi/src/components/sections/faq-section.json`
   ```json
   "title": { "type": "string" }  // بدلاً من "string"
   ```

2. GraphQL Query: `frontend/src/lib/graphql/queries/pages/about.ts`
   ```typescript
   // التغيير من:
   Faq { string ... }
   // إلى:
   Faq { title ... }
   ```

3. Page Component: `frontend/src/app/about/page.tsx`
   ```typescript
   // البحث عن استخدام Faq?.string وتغييره لـ Faq?.title
   ```

---

### Priority 2: إنشاء Services Page Single Type

**خطوات الإنشاء:**

1. إنشاء ملف Schema:
   ```bash
   strapi/src/api/services-page/content-types/services-page/schema.json
   ```

2. Components المطلوبة:
   ```json
   {
     "Hero": "sections.hero-section",
     "ServiceCategories": "sections.service-categories-section",
     "Features": "sections.features-section",
     "FAQ": "sections.faq-section",
     "CTA": "sections.cta-section"
   }
   ```

3. إنشاء Component جديد:
   ```bash
   strapi/src/components/sections/service-categories-section.json
   ```

4. تحديث Frontend:
   - إضافة GraphQL Query: `GET_SERVICES_PAGE`
   - تحويل Page من Client إلى Server Component
   - استخدام `fetchWithLocale`

---

### Priority 3: تحسين Contact Page

**التغييرات المطلوبة:**

1. توسيع Contact Schema:
   ```json
   {
     "Hero": "sections.hero-section",
     "ContactInfo": "component:contact-info",
     "ContactForm": "sections.consultation-section",
     "Map": "component:map",
     "FAQ": "sections.faq-section",
     "Partners": "sections.partners-section"
   }
   ```

2. نقل من Collection إلى Component
3. تحديث GraphQL Query

---

### Priority 4: Blog/Offers/Packages Pages

**نفس الخطوات لكل صفحة:**

1. إنشاء Single Type Schema
2. إضافة Hero Section
3. إضافة Settings Component
4. ربط بـ Collection Type الموجود
5. إنشاء GraphQL Query
6. تحديث Page Component

---

## 📁 هيكل الـ Components المطلوبة

### Components الموجودة والعاملة:

```
strapi/src/components/
├── sections/
│   ├── hero-section.json ✅
│   ├── about-us-component.json ✅
│   ├── services-section.json ✅
│   ├── how-it-works-section.json ✅
│   ├── statistics-section.json ✅
│   ├── services-carousel-section.json ✅
│   ├── reviews-section.json ✅
│   ├── blog-section.json ✅
│   ├── faq-section.json ✅ (تم إصلاحه)
│   ├── consultation-section.json ✅
│   ├── cta-section.json ✅
│   ├── partners-section.json ✅
│   ├── about-hero.json ✅
│   ├── success.json ✅
│   ├── achievements.json ✅
│   ├── why-choose-us-section.json ✅
│   └── contact-us-card.json ✅
├── content/
│   ├── content-service-card.json ✅
│   ├── content-service-slide.json ✅
│   ├── content-stat-item.json ✅
│   ├── content-numbered-step.json ✅
│   ├── content-faq-item.json ✅
│   └── content-partner-logo.json ✅
└── ui/
    ├── button.json ✅
    └── icon-text-card.json ✅
```

### Components المطلوب إنشاؤها:

```
strapi/src/components/
├── sections/
│   ├── service-categories-section.json ❌ (جديد)
│   ├── features-section.json ❌ (جديد)
│   ├── featured-posts-section.json ❌ (جديد)
│   ├── pricing-section.json ❌ (جديد)
│   └── comparison-table.json ❌ (جديد)
├── content/
│   ├── service-category-card.json ❌ (جديد)
│   ├── feature-card.json ❌ (جديد)
│   └── pricing-tier.json ❌ (جديد)
└── shared/
    ├── contact-info.json ❌ (جديد)
    ├── map.json ❌ (جديد)
    └── settings.json ❌ (جديد)
```

---

## 🎯 خطة العمل (Action Plan)

### المرحلة 1: إصلاحات فورية ✅

- [x] إصلاح FAQ Section في Home Page
- [x] تحديث About Section (repeatable → single)
- [ ] إصلاح FAQ Section في About Page
- [ ] اختبار Home Page بعد التعديلات

### المرحلة 2: Services Page 🚧

- [ ] إنشاء Services Page Single Type
- [ ] إنشاء Service Categories Section Component
- [ ] إنشاء Features Section Component
- [ ] إنشاء GraphQL Query
- [ ] تحديث Frontend Page
- [ ] اختبار التكامل

### المرحلة 3: تحسين Contact Page 🚧

- [ ] توسيع Contact Schema
- [ ] إنشاء Contact Info Component
- [ ] إنشاء Map Component
- [ ] تحديث GraphQL Query
- [ ] تحديث Frontend Page

### المرحلة 4: Blog/Offers/Packages Pages 📅

- [ ] إنشاء Blog Page Single Type
- [ ] إنشاء Offers Page Single Type
- [ ] إنشاء Packages Page Single Type
- [ ] إنشاء Components المطلوبة
- [ ] تحديث Frontend Pages

---

## 📊 إحصائيات المشروع

| Item | Current | Target | Progress |
|------|---------|--------|----------|
| Single Types | 6 | 10 | 60% |
| Sections Components | 17 | 22 | 77% |
| Content Components | 6 | 9 | 67% |
| Pages with i18n | 4 | 10 | 40% |
| Fully Integrated Pages | 2 | 10 | 20% |

---

## 🔍 مثال: Services Page Integration

### Step 1: إنشاء Schema

**ملف:** `strapi/src/api/services-page/content-types/services-page/schema.json`

```json
{
  "kind": "singleType",
  "collectionName": "services_pages",
  "info": {
    "singularName": "services-page",
    "pluralName": "services-pages",
    "displayName": "Services Page"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    "Hero": {
      "type": "component",
      "component": "sections.hero-section",
      "required": true
    },
    "ServiceCategories": {
      "type": "component",
      "component": "sections.service-categories-section",
      "required": true
    },
    "Features": {
      "type": "component",
      "component": "sections.features-section",
      "required": true
    },
    "HowItWorks": {
      "type": "component",
      "component": "sections.how-it-works-section",
      "required": false
    },
    "FAQ": {
      "type": "component",
      "component": "sections.faq-section",
      "required": false
    },
    "CTA": {
      "type": "component",
      "component": "sections.cta-section",
      "required": true
    },
    "Partners": {
      "type": "component",
      "component": "sections.partners-section",
      "required": false
    }
  }
}
```

### Step 2: إنشاء Service Categories Component

**ملف:** `strapi/src/components/sections/service-categories-section.json`

```json
{
  "collectionName": "components_sections_service_categories",
  "info": {
    "displayName": "Service Categories Section"
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "text",
      "required": true
    },
    "categories": {
      "type": "component",
      "component": "content.service-category-card",
      "repeatable": true,
      "min": 2,
      "max": 6
    }
  }
}
```

### Step 3: إنشاء Service Category Card Component

**ملف:** `strapi/src/components/content/service-category-card.json`

```json
{
  "collectionName": "components_content_service_category_cards",
  "info": {
    "displayName": "Service Category Card"
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "text",
      "required": true
    },
    "icon": {
      "type": "media",
      "allowedTypes": ["images"],
      "required": true
    },
    "href": {
      "type": "string",
      "required": true
    },
    "servicesCount": {
      "type": "integer",
      "default": 0
    },
    "isHighlighted": {
      "type": "boolean",
      "default": false
    },
    "color": {
      "type": "string",
      "default": "from-green-500 to-green-600"
    }
  }
}
```

### Step 4: GraphQL Query

**ملف:** `frontend/src/lib/graphql/queries/pages/services.ts`

```typescript
import { gql } from "@apollo/client";

export const GET_SERVICES_PAGE = gql`
  query ServicesPage($locale: I18NLocaleCode) {
    servicesPage(locale: $locale) {
      Hero {
        title
        subtitle
        description
        primaryButton {
          label
          href
        }
        secondaryButton {
          label
          href
        }
        backgroundImage {
          url
          name
        }
      }
      ServiceCategories {
        title
        description
        categories {
          title
          description
          icon {
            url
            name
          }
          href
          servicesCount
          isHighlighted
          color
        }
      }
      Features {
        title
        description
        features {
          title
          description
          icon {
            url
            name
          }
        }
      }
      HowItWorks {
        title
        description
        steps {
          title
          description
          order
        }
      }
      FAQ {
        title
        faqs {
          question
          answer
          order
        }
      }
      CTA {
        title
        buttonText
        buttonLink
        backgroundImage {
          url
          name
        }
      }
      Partners {
        partners {
          name
          logo {
            url
            name
          }
          website
        }
      }
    }
  }
`;
```

### Step 5: تحديث Frontend Page

**ملف:** `frontend/src/app/services/page.tsx`

```typescript
import { 
  Header, 
  Footer,
  HeroSection,
  CTASection,
  FAQSection,
  PartnersSection,
  ConsultationSection
} from '@/components';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { GET_SERVICES_PAGE } from '@/lib/graphql/queries/pages/services';
import { fetchWithLocale } from '@/lib/graphql/utils/fetchGraphQL';
import { getLocale } from '@/lib/graphql/utils/locale';

export default async function ServicesPage() {
  const locale = await getLocale();
  
  const { data: strapiData } = await fetchWithLocale({
    query: GET_SERVICES_PAGE,
    locale,
  });

  const servicesData = strapiData?.servicesPage;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection {...servicesData?.Hero} />
      
      <AnimatedSection animation="fadeInUp" delay={100}>
        <ServiceCategoriesSection {...servicesData?.ServiceCategories} />
      </AnimatedSection>
      
      <AnimatedSection animation="fadeInUp" delay={150}>
        <FeaturesSection {...servicesData?.Features} />
      </AnimatedSection>
      
      {servicesData?.HowItWorks && (
        <AnimatedSection animation="fadeInUp" delay={200}>
          <HowItWorksSection {...servicesData.HowItWorks} />
        </AnimatedSection>
      )}
      
      {servicesData?.FAQ && (
        <AnimatedSection animation="slideInUp" delay={150}>
          <FAQSection {...servicesData.FAQ} />
        </AnimatedSection>
      )}
      
      <AnimatedSection animation="scaleIn" delay={100}>
        <CTASection {...servicesData?.CTA} />
      </AnimatedSection>
      
      {servicesData?.Partners && (
        <AnimatedSection animation="fadeIn" delay={150}>
          <PartnersSection {...servicesData.Partners} />
        </AnimatedSection>
      )}
      
      <Footer />
    </div>
  );
}
```

---

## 🚀 الأوامر المطلوبة

### بعد إنشاء/تعديل Schemas:

```bash
# 1. Build Strapi
cd strapi
npm run build

# 2. Start Strapi
npm run develop

# 3. في متصفح آخر - Test Frontend
cd frontend
npm run dev
```

### إنشاء API جديد:

```bash
cd strapi
npm run strapi generate:api services-page
```

### إنشاء Component جديد:

```bash
# يدوياً - أنشئ الملف في:
# strapi/src/components/<category>/<component-name>.json
```

---

## ✅ Checklist للتكامل الكامل

### لكل صفحة:

- [ ] Schema موجود في `strapi/src/api/<page>/`
- [ ] كل Sections عندها Components
- [ ] GraphQL Query موجود في `frontend/src/lib/graphql/queries/pages/`
- [ ] Page Component يستخدم `fetchWithLocale`
- [ ] i18n مفعل في Schema
- [ ] Fallback Data موجود
- [ ] SEO Component مضاف
- [ ] الصفحة تعمل بدون Strapi (Fallback)
- [ ] الصفحة تعمل مع Strapi
- [ ] التنقل بين اللغات يعمل
- [ ] الصور تظهر صح
- [ ] Animations تعمل
- [ ] Mobile Responsive

---

## 📝 الملخص

### Current Status:
- ✅ **Home Page**: مربوط بالكامل (12 sections)
- ✅ **About Page**: مربوط بالكامل (9 sections) - يحتاج إصلاح FAQ
- ⚠️ **Contact Page**: مربوط جزئياً (Hero only)
- ⚠️ **Services Page**: لا يوجد Single Type
- ❌ **Blog Page**: Collection Type فقط
- ❌ **Offers Page**: Collection Type فقط
- ❌ **Packages Page**: Collection Type فقط
- ✅ **Privacy Policy**: مربوط
- ✅ **Terms & Conditions**: مربوط

### Next Steps:
1. ✅ إصلاح FAQ في About Page
2. 🚧 إنشاء Services Page Single Type
3. 🚧 تحسين Contact Page
4. 📅 إنشاء Blog/Offers/Packages Pages

---

*آخر تحديث: نوفمبر 2025*
