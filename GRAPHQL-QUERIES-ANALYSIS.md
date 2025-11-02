# 🔍 تحليل شامل لجميع GraphQL Queries

## 📊 نظرة عامة

المشروع يحتوي على **23 GraphQL Query/Mutation** موزعة على 3 فئات رئيسية:
- **Pages Queries** (8 queries) - صفحات المشروع
- **Content Queries** (9 queries) - المحتوى الديناميكي
- **Mutations** (1 mutation) - إرسال البيانات

---

## 📁 هيكل Queries

```
frontend/src/lib/graphql/queries/
├── index.ts                                 # Export all
├── pages/                                   # Page Queries (8)
│   ├── home.ts          ✅ GET_HOME_PAGE
│   ├── about.ts         ✅ GET_ABOUT_PAGE
│   ├── services.ts      ⚠️ GET_SERVICES_PAGE (يستعلم من "service")
│   ├── contact.ts       ✅ GET_CONTACT_PAGE
│   ├── offers.ts        ⚠️ GET_OFFERS_PAGE (يستعلم من "offer")
│   ├── packages.ts      ⚠️ GET_PACKAGES_PAGE (يستعلم من "package")
│   ├── privacy-policy.ts ✅ GET_PRIVACY_POLICY
│   └── terms-conditions.ts ✅ GET_TERMS_CONDITIONS
├── content/                                 # Content Queries (9)
│   ├── blog.ts          ✅ GET_BLOG_POSTS (3 queries)
│   ├── reviews.ts       ✅ GET_REVIEWS (2 queries)
│   ├── footer.ts        ✅ GET_FOOTER
│   ├── contact_info.ts  ✅ GET_CONTACTS_INFO
│   ├── contact_submit.ts ✅ CONTACT_SUBMISSION (mutation)
│   ├── offer-detail.ts  ✅ GET_OFFER_DETAILS (2 queries)
│   └── services/
│       ├── consulting.ts ✅ GET_CONSULTING_SERVICES (2 queries)
│       └── legal.ts      ✅ GET_LEGAL_SERVICES (3 queries)
└── index.ts
```

---

## 🔍 تحليل تفصيلي للـ Queries

---

### 📄 Pages Queries (8 Queries)

---

#### 1️⃣ GET_HOME_PAGE ✅

**الملف:** `pages/home.ts`

**Status:** ✅ مربوط بشكل صحيح

**API Endpoint:** `home` (Single Type)

**Sections (12):**
```graphql
query Home($locale: I18NLocaleCode) {
  home(locale: $locale) {
    Hero { ... }              # Hero Section
    About { ... }             # About Section
    Services { ... }          # Services Section
    HowItWorks { ... }        # How It Works Section
    Statistics { ... }        # Statistics Section
    ServicesCarousel { ... }  # Services Carousel Section
    Reviews { ... }           # Reviews Section (metadata only)
    Blog { ... }              # Blog Section (metadata only)
    Faq { ... }               # FAQ Section
    Consultation { ... }      # Consultation Section
    CTA { ... }               # CTA Section
    PartnersLogos { ... }     # Partners Section
  }
}
```

**i18n:** ✅ Yes

**Issues Fixed:** ✅ FAQ title (was "string", now "title")

**Usage:** `frontend/src/app/page.tsx`

---

#### 2️⃣ GET_ABOUT_PAGE ✅

**الملف:** `pages/about.ts`

**Status:** ✅ مربوط بشكل صحيح

**API Endpoint:** `about` (Single Type)

**Sections (9):**
```graphql
query About($locale: I18NLocaleCode) {
  about(locale: $locale) {
    Hero { ... }              # About Hero Section
    aboutUs { ... }           # About Us Section
    Success { ... }           # Success Section
    Achievements { ... }      # Achievements Section
    WhyChooseUs { ... }       # Why Choose Us Section
    ContactUsCard { ... }     # Contact Us Card Section
    Faq { ... }               # FAQ Section
    CTA { ... }               # CTA Section
    PartnersLogos { ... }     # Partners Section
  }
}
```

**i18n:** ✅ Yes

**Issues Fixed:** ✅ FAQ title

**Usage:** `frontend/src/app/about/page.tsx`

---

#### 3️⃣ GET_SERVICES_PAGE ⚠️

**الملف:** `pages/services.ts`

**Status:** ⚠️ مشكلة في الـ Query

**API Endpoint:** `service` ❌ (يجب أن يكون `servicesPage`)

**Current Query:**
```graphql
query Query($locale: I18NLocaleCode) {
  service(locale: $locale) {  # ❌ خطأ: يستعلم من "service" غير موجود
    Hero { ... }
    serviceCategories [ ... ]
    features [ ... ]
    Faq { string ... }  # ❌ خطأ: يستخدم "string" بدل "title"
    cta { ... }
    partners { ... }
  }
}
```

**المشاكل:**
1. ❌ يستعلم من `service` بدلاً من `servicesPage`
2. ❌ FAQ يستخدم `string` بدل `title`
3. ❌ الـ Schema اللي أنشأناه هو `services-page` وليس `service`

**الحل المطلوب:**
```graphql
query ServicesPage($locale: I18NLocaleCode) {
  servicesPage(locale: $locale) {  # ✅ الاسم الصحيح
    Hero { ... }
    ServiceCategories {  # ✅ مع حرف كبير
      title
      description
      categories [ ... ]
    }
    Features {  # ✅ مع حرف كبير
      title
      description
      features [ ... ]
    }
    HowItWorks { ... }
    FAQ {  # ✅ مع حرف كبير
      title  # ✅ بدل "string"
      faqs [ ... ]
    }
    Consultation { ... }
    CTA { ... }
    Partners { ... }
  }
}
```

**i18n:** ✅ Yes

**Usage:** `frontend/src/app/services/page.tsx` (Client Component)

---

#### 4️⃣ GET_CONTACT_PAGE ✅

**الملف:** `pages/contact.ts`

**Status:** ✅ مربوط جزئياً

**API Endpoint:** `contact` (Single Type)

**Current Sections:**
```graphql
query Contact($locale: I18NLocaleCode) {
  contact(locale: $locale) {
    Hero { ... }
    location_link
    Contact_Info_Cards [ ... ]
    Faq {
      string  # ❌ خطأ: يجب تغييره لـ "title"
      faqs [ ... ]
    }
  }
}
```

**المشاكل:**
1. ❌ FAQ يستخدم `string` بدل `title`
2. ⚠️ محدود - فقط Hero و Contact Info Cards

**i18n:** ✅ Yes

**Usage:** `frontend/src/app/contact/page.tsx` (Client Component)

---

#### 5️⃣ GET_OFFERS_PAGE ⚠️

**الملف:** `pages/offers.ts`

**Status:** ⚠️ يستعلم من Collection Type

**API Endpoint:** `offer` ❌ (Collection Type بدل Single Type)

**Current Query:**
```graphql
query Offers($locale: I18NLocaleCode) {
  offer(locale: $locale) {  # ❌ Collection Type
    Hero { ... }
    Available_Offers [ ... ]
    contact { ... }
    Faq {
      string  # ❌ خطأ
      faqs [ ... ]
    }
    cta { ... }
    partners { ... }
  }
}
```

**المشاكل:**
1. ❌ يستعلم من Collection Type `offer` بدل Single Type `offersPage`
2. ❌ FAQ يستخدم `string` بدل `title`
3. ⚠️ لا يوجد Single Type في Strapi

**الحل المطلوب:**
- إنشاء Single Type: `offers-page`
- تحديث Query لـ `offersPage`

**i18n:** ✅ Yes (if Single Type exists)

---

#### 6️⃣ GET_PACKAGES_PAGE ⚠️

**الملف:** `pages/packages.ts`

**Status:** ⚠️ يستعلم من Collection Type

**API Endpoint:** `package` ❌ (Collection Type بدل Single Type)

**Current Query:**
```graphql
query Packages($locale: I18NLocaleCode) {
  package(locale: $locale) {  # ❌ Collection Type
    Hero { ... }
    packages [ ... ]
    contact_card { ... }
    Faq {
      string  # ❌ خطأ
      faqs [ ... ]
    }
    partners { ... }
  }
}
```

**المشاكل:**
1. ❌ يستعلم من Collection Type `package` بدل Single Type `packagesPage`
2. ❌ FAQ يستخدم `string` بدل `title`
3. ⚠️ لا يوجد Single Type في Strapi

**الحل المطلوب:**
- إنشاء Single Type: `packages-page`
- تحديث Query لـ `packagesPage`

**i18n:** ✅ Yes (if Single Type exists)

---

#### 7️⃣ GET_PRIVACY_POLICY ✅

**الملف:** `pages/privacy-policy.ts`

**Status:** ✅ مربوط بشكل صحيح

**API Endpoint:** `privacyPolicyPage` (Single Type)

**Query:**
```graphql
query PrivacyPolicyPage($locale: I18NLocaleCode) {
  privacyPolicyPage(locale: $locale) {
    Hero { ... }
    locale
    privacy_policy {
      title
      subtitle
      icon { ... }
      content [ ... ]
    }
  }
}
```

**i18n:** ✅ Yes

---

#### 8️⃣ GET_TERMS_CONDITIONS ✅

**الملف:** `pages/terms-conditions.ts`

**Status:** ✅ مربوط بشكل صحيح

**API Endpoint:** `termsAndConditionsPage` (Single Type)

**Query:**
```graphql
query TermsAndConditionsPage($locale: I18NLocaleCode) {
  termsAndConditionsPage(locale: $locale) {
    Hero { ... }
    locale
    privacy_policy {  # Note: Uses same component as privacy
      title
      subtitle
      icon { ... }
      content [ ... ]
    }
  }
}
```

**i18n:** ✅ Yes

---

### 📦 Content Queries (9 Queries + 1 Mutation)

---

#### 1️⃣ Blog Queries ✅

**الملف:** `content/blog.ts`

**3 Queries:**

**A. GET_BLOG_POSTS**
```graphql
query Blogs($locale: I18NLocaleCode) {
  blogs(locale: $locale) {
    banner { ... }
    content
    featured_post
    publishedAt
    slug
    summary
    title
    blog_author { ... }
    blog_category { ... }
    blog_comments [ ... ]
  }
}
```

**B. GET_FEATURED_BLOG_POSTS**
```graphql
query FeaturedBlogs($locale: I18NLocaleCode) {
  blogs(
    locale: $locale
    filters: { featured_post: { eq: true } }
    pagination: { limit: 3 }
    sort: "publishedAt:desc"
  ) { ... }
}
```

**C. GET_BLOG_POST_BY_SLUG**
```graphql
query BlogPostBySlug($slug: String!, $locale: I18NLocaleCode) {
  blogs(
    locale: $locale
    filters: { slug: { eq: $slug } }
    pagination: { limit: 1 }
  ) { ... }
}
```

**Status:** ✅ Collection Type - يعمل بشكل صحيح

**i18n:** ✅ Yes

**Usage:** `frontend/src/app/blog/...`

---

#### 2️⃣ Reviews Queries ✅

**الملف:** `content/reviews.ts`

**2 Queries:**

**A. GET_REVIEWS**
```graphql
query Reviews($locale: I18NLocaleCode) {
  reviews(locale: $locale) {
    documentId
    name
    position
    company
    rating
    comment
    avatar { ... }
    date
    featured
    order
  }
}
```

**B. GET_FEATURED_REVIEWS**
```graphql
query FeaturedReviews($locale: I18NLocaleCode) {
  reviews(
    locale: $locale
    filters: { featured: { eq: true } }
    sort: "order:asc,createdAt:desc"
  ) { ... }
}
```

**Status:** ✅ Collection Type - يعمل بشكل صحيح

**i18n:** ✅ Yes

**Usage:** `frontend/src/components/home/ReviewsSection.tsx`

---

#### 3️⃣ Footer Query ✅

**الملف:** `content/footer.ts`

**Query:**
```graphql
query GetFooter($locale: I18NLocaleCode) {
  footer(locale: $locale) {
    logo { ... }
    slogan
    companyName
    companyTagline
    consultingServices [ ... ]
    legalServices [ ... ]
    quickLinks [ ... ]
    copyright
  }
}
```

**Status:** ✅ Single Type - يعمل بشكل صحيح

**i18n:** ✅ Yes

**Usage:** `frontend/src/components/layout/Footer.tsx`

---

#### 4️⃣ Contact Info Query ✅

**الملف:** `content/contact_info.ts`

**Query:**
```graphql
query ContactInfo {
  contactInfos {
    email
    phone_number
    whatsapp_number
    location_link
    facebook_link
    instagram_link
    twitter_link
  }
}
```

**Status:** ✅ Collection Type

**i18n:** ❌ No (لا تحتاج - معلومات اتصال)

**Usage:** `frontend/src/app/contact/page.tsx`

---

#### 5️⃣ Contact Submission Mutation ✅

**الملف:** `content/contact_submit.ts`

**Mutation:**
```graphql
mutation CreateContactSubmission($data: ContactSubmissionInput!) {
  createContactSubmission(data: $data) {
    companyName
    email
    fullName
    language
    note
    phoneNumber
    preferredContactTime
    service
  }
}
```

**Status:** ✅ Mutation - يعمل بشكل صحيح

**Usage:** `frontend/src/components/sections/ConsultationSection.tsx`

---

#### 6️⃣ Offer Details Queries ✅

**الملف:** `content/offer-detail.ts`

**2 Queries:**

**A. GET_OFFER_DETAILS**
```graphql
query OfferDetails($locale: I18NLocaleCode) {
  offerDetails(
    locale: $locale
    publicationState: LIVE
    sort: "createdAt:desc"
  ) {
    documentId
    title
    slug
    subtitle
    description { ... }
    image { ... }
    discount
    originalPrice
    discountedPrice
    currency
    features [ ... ]
    benefits [ ... ]
    validUntil
    termsAndConditions
    callToAction { ... }
  }
}
```

**B. GET_OFFER_DETAIL_BY_SLUG**
```graphql
query OfferDetailBySlug($slug: String!, $locale: I18NLocaleCode) {
  offerDetails(
    locale: $locale
    filters: { slug: { eq: $slug } }
  ) { ... }
}
```

**Status:** ✅ Collection Type - يعمل بشكل صحيح

**i18n:** ✅ Yes

**Usage:** `frontend/src/app/offers/[slug]/...`

---

#### 7️⃣ Consulting Services Queries ✅

**الملف:** `content/services/consulting.ts`

**2 Queries:**

**A. GET_SHORT_CONSULTING_SERVICES**
```graphql
query ConsultingServices($locale: I18NLocaleCode) {
  consultingServices(locale: $locale) {
    documentId
    slug
    name
    shortDescription
    icon { ... }
    startFromPrice
    currency
    finishPeriodMin
    finishPeriodMax
    button_label
    order
  }
}
```

**B. GET_CONSULTING_SERVICE_BY_DOCUMENTID**
```graphql
query ConsultingService($documentId: ID!, $locale: I18NLocaleCode) {
  consultingService(documentId: $documentId, locale: $locale) {
    documentId
    slug
    name
    shortDescription
    description [ ... ]
    requirements [ ... ]
    steps [ ... ]
    icon { ... }
    startFromPrice
    currency
    finishPeriodMin
    finishPeriodMax
  }
}
```

**Status:** ✅ Collection Type - يعمل بشكل صحيح

**i18n:** ✅ Yes

**Usage:** `frontend/src/app/consulting/...`

---

#### 8️⃣ Legal Services Queries ✅

**الملف:** `content/services/legal.ts`

**3 Queries:**

**A. GET_LEGAL_SERVICE_CATEGORIES**
```graphql
query LegalServiceCategories($locale: I18NLocaleCode) {
  legalServiceCategories(locale: $locale) {
    documentId
    slug
    name
    description
    icon { ... }
    order
  }
}
```

**B. GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES**
```graphql
query LegalSubServices($locale: I18NLocaleCode) {
  legalSubServices(locale: $locale) {
    documentId
    slug
    name
    shortDescription
    icon { ... }
    startFromPrice
    currency
    finishPeriodMin
    finishPeriodMax
    button_label
    order
    legal_service_category {
      name
      slug
    }
  }
}
```

**C. GET_LEGAL_SERVICE_SUBSERVICE_DETAILS_BY_DOCUMENTID**
```graphql
query LegalSubService($documentId: ID!, $locale: I18NLocaleCode) {
  legalSubService(documentId: $documentId, locale: $locale) {
    documentId
    slug
    name
    shortDescription
    description [ ... ]
    requirements [ ... ]
    steps [ ... ]
    icon { ... }
    startFromPrice
    currency
    finishPeriodMin
    finishPeriodMax
  }
}
```

**Status:** ✅ Collection Types - يعمل بشكل صحيح

**i18n:** ✅ Yes

**Usage:** `frontend/src/app/legalservices/...`

---

## 🚨 المشاكل المكتشفة

### Priority 1: FAQ "string" Issue ❌

**المشكلة:** عدة queries تستخدم `Faq { string }` بدلاً من `Faq { title }`

**الملفات المتأثرة:**
1. ❌ `pages/services.ts` - سطر 59
2. ❌ `pages/offers.ts` - سطر 52
3. ❌ `pages/packages.ts` - سطر 52
4. ❌ `pages/contact.ts` - سطر 48

**الحل:** تغيير `string` إلى `title` في كل query

---

### Priority 2: Services Page Query ❌

**المشكلة:** Query يستعلم من `service` غير موجود

**الملف:** `pages/services.ts`

**Current:**
```graphql
query Query($locale: I18NLocaleCode) {
  service(locale: $locale) { ... }  # ❌ خطأ
}
```

**Required:**
```graphql
query ServicesPage($locale: I18NLocaleCode) {
  servicesPage(locale: $locale) {  # ✅ صحيح
    Hero { ... }
    ServiceCategories { ... }  # مع حرف كبير
    Features { ... }           # مع حرف كبير
    HowItWorks { ... }
    FAQ {                      # مع حرف كبير
      title                    # بدل "string"
      faqs [ ... ]
    }
    Consultation { ... }
    CTA { ... }
    Partners { ... }
  }
}
```

---

### Priority 3: Offers & Packages Pages ⚠️

**المشكلة:** Queries تستعلم من Collection Types بدلاً من Single Types

**ملفات متأثرة:**
1. `pages/offers.ts` - يستعلم من `offer`
2. `pages/packages.ts` - يستعلم من `package`

**الحل:**
1. إنشاء Single Types: `offers-page` و `packages-page`
2. تحديث Queries

---

## ✅ الإصلاحات المطلوبة

### 1. إصلاح FAQ في Services Page

```typescript
// pages/services.ts
export const GET_SERVICES_PAGE = gql`
  query ServicesPage($locale: I18NLocaleCode) {
    servicesPage(locale: $locale) {  # ✅ تغيير من "service"
      Hero {
        title
        subtitle
        description
        primaryButton { label, href }
        secondaryButton { label, href }
        backgroundImage { url, name }
      }
      ServiceCategories {  # ✅ مع حرف كبير
        title
        description
        categories {
          title
          description
          icon { url, name }
          href
          servicesCount
          isHighlighted
          color
        }
      }
      Features {  # ✅ مع حرف كبير
        title
        description
        features {
          title
          description
          icon { url, name }
        }
      }
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
      FAQ {  # ✅ مع حرف كبير
        title  # ✅ تغيير من "string"
        faqs {
          question
          answer
          order
        }
      }
      Consultation {
        title
        description
        backgroundImage { url, name }
      }
      CTA {
        title
        buttonText
        buttonLink
        backgroundImage { url, name }
      }
      Partners {
        partners {
          name
          logo { url, name }
          website
        }
      }
    }
  }
`;
```

---

### 2. إصلاح FAQ في Contact Page

```typescript
// pages/contact.ts
export const GET_CONTACT_PAGE = gql`
  query Contact($locale: I18NLocaleCode) {
    contact(locale: $locale) {
      location_link
      Hero { ... }
      Contact_Info_Cards [ ... ]
      Faq {
        title  # ✅ تغيير من "string"
        faqs {
          question
          answer
          order
        }
      }
    }
  }
`;
```

---

### 3. إصلاح FAQ في Offers Page

```typescript
// pages/offers.ts - سطر 52
Faq {
  title  # ✅ تغيير من "string"
  faqs { ... }
}
```

---

### 4. إصلاح FAQ في Packages Page

```typescript
// pages/packages.ts - سطر 52
Faq {
  title  # ✅ تغيير من "string"
  faqs { ... }
}
```

---

## 📊 إحصائيات Queries

| Category | Count | Status |
|----------|-------|--------|
| **Pages Queries** | 8 | 4 ✅ / 4 ⚠️ |
| **Content Queries** | 9 | 9 ✅ |
| **Mutations** | 1 | 1 ✅ |
| **Total** | 18 | 14 ✅ / 4 ⚠️ |

### Pages Queries Status:
- ✅ **Working:** Home, About, Privacy Policy, Terms & Conditions
- ⚠️ **Needs Fix:** Services, Contact, Offers, Packages

### Content Queries Status:
- ✅ **All Working:** Blog, Reviews, Footer, Contact Info, Offer Details, Consulting Services, Legal Services

---

## 🎯 خطة الإصلاح

### المرحلة 1: إصلاح FAQ (سريع) ⚡

- [ ] `pages/services.ts` - FAQ title
- [ ] `pages/contact.ts` - FAQ title
- [ ] `pages/offers.ts` - FAQ title
- [ ] `pages/packages.ts` - FAQ title

### المرحلة 2: إصلاح Services Page Query (متوسط) 🔧

- [ ] تحديث Query name من `service` لـ `servicesPage`
- [ ] تحديث field names (ServiceCategories, Features, FAQ, etc.)
- [ ] اختبار مع Strapi

### المرحلة 3: إنشاء Single Types للصفحات الناقصة (طويل) 📅

- [ ] إنشاء `offers-page` Single Type
- [ ] تحديث Offers Query
- [ ] إنشاء `packages-page` Single Type
- [ ] تحديث Packages Query

---

## 📝 ملاحظات مهمة

### 1. i18n Support
- ✅ **معظم الـ Queries تدعم i18n** عبر `$locale` parameter
- ❌ **Contact Info** لا تحتاج i18n (معلومات اتصال ثابتة)

### 2. Collection vs Single Types
- **Single Types:** Home, About, Contact, Footer, Privacy, Terms, Services (الجديد)
- **Collection Types:** Blog, Reviews, Offers, Packages, Consulting Services, Legal Services

### 3. Naming Conventions
- **Single Types:** camelCase (`home`, `about`, `servicesPage`)
- **Collection Types:** plural (`blogs`, `reviews`, `offers`)
- **Component Fields:** PascalCase (`Hero`, `ServiceCategories`, `FAQ`)

### 4. Common Patterns
كل Page Query عادة يحتوي على:
- `Hero` section
- `FAQ` section
- `CTA` section
- `Partners` section

---

## ✅ Checklist للتأكد من صحة Query

عند إنشاء/تعديل Query جديد:

- [ ] اسم الـ Query مناسب ووصفي
- [ ] يستخدم `$locale` parameter
- [ ] field names تطابق Schema في Strapi
- [ ] FAQ يستخدم `title` وليس `string`
- [ ] Component names بحروف كبيرة (PascalCase)
- [ ] Media fields تحتوي على `url` و `name`
- [ ] Relations محملة بشكل صحيح
- [ ] الـ Query تم اختباره مع Strapi GraphQL Playground

---

*آخر تحديث: نوفمبر 2025*
*Status: 14/18 Queries Working - 4 Queries Need Fixes*
