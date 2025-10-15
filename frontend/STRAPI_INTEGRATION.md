# إتمام - نظام إدارة المحتوى مع Strapi و GraphQL

## نظرة عامة

تم إعداد المشروع ليكون جاهز للربط مع Strapi باستخدام GraphQL. النظام مصمم ليعمل مع البيانات الحقيقية من Strapi مع الاحتفاظ بالموك داتا كـ fallback في حالة عدم توفر البيانات.

## البنية الجديدة

### 1. مجلد MockData
```
src/mockData/
├── index.ts                 # تصدير جميع الموك داتا
├── home/                    # بيانات الصفحة الرئيسية
│   ├── index.ts
│   ├── hero.ts
│   ├── about.ts
│   ├── statistics.ts
│   ├── partners.ts
│   └── cta.ts
├── services/                # بيانات الخدمات
│   ├── index.ts
│   ├── services.ts
│   ├── howItWorks.ts
│   └── serviceDetail.ts
├── about/                   # بيانات صفحة من نحن
│   ├── index.ts
│   ├── about.ts
│   ├── leadership.ts
│   ├── successFoundation.ts
│   └── whyChoose.ts
├── blog/                    # بيانات المدونة
│   ├── index.ts
│   └── blog.ts
├── contact/                 # بيانات التواصل
│   ├── index.ts
│   └── contact.ts
├── layout/                  # بيانات التخطيط
│   ├── index.ts
│   ├── header.ts
│   └── footer.ts
└── common/                  # بيانات مشتركة
    ├── index.ts
    └── faq.ts
```

### 2. استعلامات GraphQL
```
src/lib/queries.ts
```
يحتوي على جميع استعلامات GraphQL المطلوبة لجميع الأقسام والصفحات.

### 3. Custom Hooks
```
src/hooks/useGraphQL.ts
```
يحتوي على hooks مخصصة لجميع الاستعلامات مع دعم اللغة والـ fallback للموك داتا.

### 4. الأنواع المحدثة
```
src/types/index.ts
```
تم تحديث ملف الأنواع ليشمل جميع البيانات المطلوبة من Strapi.

## كيفية الاستخدام

### 1. إعداد متغيرات البيئة
```env
NEXT_PUBLIC_STRAPI_GRAPHQL_URL=http://localhost:1337/graphql
```

### 2. استخدام البيانات في المكونات

```tsx
import { useServices } from '@/hooks';
import { servicesMockData, servicesMockDataEn } from '@/mockData/services/services';

export default function MyComponent() {
  const { language } = useLanguage();
  
  // جلب البيانات من GraphQL
  const { data: graphqlData, loading, error } = useServices();
  
  // استخدام الموك داتا كـ fallback
  const mockData = language === 'ar' ? servicesMockData : servicesMockDataEn;
  const displayData = graphqlData || mockData;
  
  return (
    // عرض البيانات
  );
}
```

### 3. المتاح Hooks

#### Layout Hooks
- `useHeader()` - بيانات الهيدر
- `useFooter()` - بيانات الفوتر

#### Home Page Hooks
- `useHero()` - بيانات القسم الرئيسي
- `useHomeAbout()` - بيانات قسم من نحن في الصفحة الرئيسية
- `useStatistics()` - الإحصائيات
- `usePartners()` - الشركاء
- `useCTA()` - قسم الدعوة للعمل

#### Services Hooks
- `useServices()` - قائمة الخدمات
- `useServiceDetail(id)` - تفاصيل خدمة معينة
- `useHowItWorks()` - خطوات العمل

#### About Page Hooks
- `useAbout()` - بيانات صفحة من نحن
- `useLeadership()` - فريق القيادة
- `useSuccessFoundation()` - قصص النجاح
- `useWhyChoose()` - لماذا تختارنا

#### Blog Hooks
- `useBlogPosts(limit?, start?)` - قائمة المقالات
- `useBlogPost(slug)` - مقال معين

#### Contact Hooks
- `useContactInfo()` - معلومات التواصل

#### Common Hooks
- `useFAQ()` - الأسئلة الشائعة
- `useConsultation()` - نموذج الاستشارة
- `useSEO(page)` - بيانات SEO

## إعداد Strapi

### 1. Content Types المطلوبة

#### Header
```json
{
  "logo": "media",
  "navigationItems": "component",
  "contactButton": "component"
}
```

#### Hero
```json
{
  "title": "string",
  "subtitle": "string", 
  "description": "text",
  "primaryButton": "component",
  "secondaryButton": "component",
  "backgroundImage": "media",
  "personImage": "media",
  "smallImages": "media"
}
```

#### Services
```json
{
  "services": "component"
}
```

#### Service Detail
```json
{
  "title": "string",
  "description": "text",
  "longDescription": "richtext",
  "features": "json",
  "benefits": "json",
  "process": "component",
  "pricing": "component",
  "faq": "component",
  "image": "media"
}
```

### 2. إعداد الترجمة
- تفعيل i18n في Strapi
- إضافة اللغات العربية والإنجليزية
- إعداد Content Types للترجمة

### 3. إعداد GraphQL
- تفعيل GraphQL plugin
- إعداد الصلاحيات
- إعداد الـ locales في الاستعلامات

## الميزات

### 1. Fallback System
- يعمل النظام مع البيانات الحقيقية من Strapi
- في حالة عدم توفر البيانات، يستخدم الموك داتا
- لا توجد أخطاء في العرض حتى لو لم يكن Strapi متاح

### 2. دعم متعدد اللغات
- جميع الاستعلامات تدعم اللغة الحالية
- الموك داتا متوفرة بالعربية والإنجليزية
- تبديل سلس بين اللغات

### 3. Type Safety
- جميع الأنواع محددة بوضوح
- دعم TypeScript كامل
- IntelliSense متاح لجميع البيانات

### 4. Performance
- Apollo Client مع cache
- استعلامات محسنة
- Loading states

## التطوير

### إضافة مكون جديد
1. إنشاء الموك داتا في المجلد المناسب
2. إضافة الاستعلام في `queries.ts`
3. إنشاء hook في `useGraphQL.ts`
4. استخدام الـ hook في المكون

### إضافة صفحة جديدة
1. إنشاء مجلد للموك داتا
2. إضافة الاستعلامات المطلوبة
3. إنشاء الـ hooks
4. تحديث الصفحة لاستخدام البيانات

## استكشاف الأخطاء

### مشاكل شائعة
1. **لا تظهر البيانات**: تأكد من إعداد متغيرات البيئة
2. **أخطاء GraphQL**: تحقق من بنية البيانات في Strapi
3. **مشاكل الترجمة**: تأكد من إعداد i18n في Strapi
4. **ApolloProvider export error**: تأكد من استيراد ApolloProvider من `@apollo/client/react`

### حل مشاكل الاستيراد

#### مشكلة: Export ApolloProvider doesn't exist
```tsx
// ❌ خطأ
import { ApolloProvider } from '@apollo/client';

// ✅ صحيح
import { ApolloProvider } from '@apollo/client/react';
```

#### مشكلة: useQuery export error
```tsx
// ❌ خطأ
import { useQuery } from '@apollo/client';

// ✅ صحيح
import { useQuery } from '@apollo/client/react';
```

### Debug Mode
```tsx
const { data, loading, error } = useServices();
console.log('GraphQL Data:', data);
console.log('Loading:', loading);
console.log('Error:', error);
```

## الدعم

للمساعدة في الإعداد أو التطوير، يمكن الرجوع إلى:
- [Strapi Documentation](https://docs.strapi.io/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [Next.js Documentation](https://nextjs.org/docs)
