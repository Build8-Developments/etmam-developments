# Strapi Content Types Guide - Home Page

## Overview

This guide provides comprehensive schemas for creating Strapi content types for the **Home Page** of the Etmam website. All schemas are designed to support bilingual content (Arabic & English) with full i18n support.

---

## 📋 Content Type Summary

### **Home Page** (Single Type)

The home page consists of 10 main sections that need to be managed through Strapi CMS:

1. **Hero Section** - Main banner with CTA
2. **About Section** - Company introduction with images
3. **Services Section** - Grid of service cards
4. **How It Works Section** - Step-by-step process
5. **Statistics Section** - Key metrics overlay
6. **Services Carousel Section** - Rotating service showcase
7. **Blog Section** - Featured blog posts
8. **FAQ Section** - Accordion style Q&A
9. **CTA Section** - Call-to-action banner
10. **Partners Section** - Logo carousel

---

## 🎯 Content Type vs Components

### **Use Single Type for:**

- ✅ **Home Page** - Only one home page exists
- ✅ Each page configuration (About, Contact, etc.)

### **Use Components for:**

- ✅ **All Sections** - Reusable across multiple pages
- ✅ **UI Elements** - Buttons, cards, icons
- ✅ **Content Blocks** - Service cards, FAQ items, steps

---

## 🏗️ Implementation Steps

### Step 1: Create Component Categories

In Strapi Admin, create these component categories first:

1. `sections` - Page sections
2. `ui` - UI elements (buttons, cards)
3. `content` - Content blocks (services, FAQs)
4. `shared` - Shared components (SEO, social)

### Step 2: Create Reusable Components (Bottom-Up)

Create components in this order:

#### A. Shared Components

1. `shared.seo` → shared-seo.json

#### B. UI Components

1. `ui.button` → ui-button.json
2. `ui.icon-text-card` → ui-icon-text-card.json

#### C. Content Components

1. `content.service-card` → content-service-card.json
2. `content.numbered-step` → content-numbered-step.json
3. `content.stat-item` → content-stat-item.json
4. `content.service-slide` → content-service-slide.json
5. `content.faq-item` → content-faq-item.json
6. `content.partner-logo` → content-partner-logo.json

#### D. Section Components

1. `sections.hero-section` → hero-section.json
2. `sections.about-section` → about-section.json
3. `sections.services-section` → services-section.json
4. `sections.how-it-works-section` → how-it-works-section.json
5. `sections.statistics-section` → statistics-section.json
6. `sections.services-carousel-section` → services-carousel-section.json
7. `sections.blog-section` → blog-section.json
8. `sections.faq-section` → faq-section.json
9. `sections.cta-section` → cta-section.json
10. `sections.partners-section` → partners-section.json

### Step 3: Create Single Type

1. `Home Page` (Single Type) → home-page.json

---

## 📸 Image Requirements

### Critical Images Needed:

| Section           | Image Type     | Dimensions  | Format   | Notes                    |
| ----------------- | -------------- | ----------- | -------- | ------------------------ |
| Hero              | Background     | 1920x1080px | WebP/JPG | High quality             |
| Hero              | Person         | 500x800px   | PNG      | Transparent bg preferred |
| About             | Main Image     | 800x800px   | JPG/WebP | Square aspect            |
| About             | Secondary      | 400x400px   | JPG/WebP | Square aspect            |
| Statistics        | Background     | 1920x600px  | JPG/WebP | Landscape                |
| Services Carousel | Service Images | 800x600px   | JPG/WebP | 4:3 ratio                |
| CTA               | Background     | 800x600px   | JPG/WebP | Right side bg            |
| Partners          | Logos          | 120x64px    | SVG/PNG  | Transparent bg           |
| How It Works      | Person         | 500x500px   | PNG      | With laptop              |
| SEO               | OG Image       | 1200x630px  | JPG      | Social sharing           |

---

## 🎨 Icon Requirements

### Service Icons Available:

- `building` - Company formation
- `license` - License extraction
- `consulting` - Legal consultations
- `accounting` - Accounting & taxes
- `hr` - Human resources
- `marketing` - Marketing services
- `document` - Document management

### Feature Icons:

- `trust` - Trust/reliability
- `mission` - Mission/goals
- `vision` - Vision/future

---

## 🌐 i18n Configuration

### Enable Internationalization:

1. Install i18n plugin in Strapi
2. Configure locales: `ar` (Arabic), `en` (English)
3. Set default locale: `ar`
4. Enable localization for:
   - Home Page (Single Type)
   - All text fields in components
   - SEO metadata

### Localized Fields:

- ✅ All text strings
- ✅ Rich text content
- ✅ SEO metadata
- ❌ Images (use same images, but provide alt text in both languages)
- ❌ URLs (if using slugs, localize them)

---

## 📊 Data Structure Examples

### Hero Section Example:

```json
{
  "title": "نساعدك في تأسيس و إدارة أعمالك",
  "subtitle": "بسهولة وسرعة وأمان",
  "description": "نقدم حلول متكاملة...",
  "primaryButton": {
    "label": "استعرض خدماتنا",
    "href": "/services",
    "variant": "primary"
  },
  "backgroundImage": {
    /* media object */
  },
  "personImage": {
    /* media object */
  }
}
```

### Services Section Example:

```json
{
  "title": "خدماتنا التي تلبي احتياجاتك",
  "description": "في إتمام نقدم مجموعة من الخدمات...",
  "services": [
    {
      "icon": "building",
      "title": "تأسيس الشركات",
      "description": "خدمة متكاملة لتأسيس شركتك...",
      "isActive": true
    }
  ],
  "ctaButton": {
    "label": "عرض المزيد",
    "href": "/services"
  }
}
```

---

## 🔄 Content Management Workflow

### Recommended Workflow:

1. **Create Components** (one-time setup)
2. **Upload Media Assets** to Media Library
3. **Create Content** in Home Page (Single Type)
4. **Add Translations** for Arabic & English
5. **Preview** content
6. **Publish** when ready

### For Each Section:

1. Fill required text fields
2. Upload required images
3. Configure buttons/links
4. Add repeatable items (services, FAQs, etc.)
5. Review in both languages
6. Test on frontend

---

## 🎯 API Endpoints

Once created, your content will be available at:

```
GET /api/home-page?populate=deep
```

### Population Strategy:

```javascript
// Fetch home page with all nested components
const response = await fetch(
  `${API_URL}/api/home-page?populate[0]=heroSection&populate[1]=heroSection.backgroundImage&populate[2]=heroSection.personImage&populate[3]=aboutSection&populate[4]=aboutSection.mainImage&populate[5]=aboutSection.secondaryImage&populate[6]=aboutSection.features&...`
);

// Or use populate=deep (easier but may over-fetch)
const response = await fetch(
  `${API_URL}/api/home-page?populate=deep&locale=ar`
);
```

---

## ✅ Validation Rules

### Text Fields:

- Titles: 50-200 characters
- Descriptions: 200-500 characters
- Button labels: 10-50 characters
- Meta titles: Max 60 characters
- Meta descriptions: Max 160 characters

### Media:

- Max file size: 5MB for images
- Allowed formats: JPG, PNG, WebP, SVG
- Required alt text for accessibility

### Required Fields:

- All sections marked as required
- All images need alt text
- All buttons need labels and links

---

## 🚀 Quick Start Checklist

- [ ] Create component categories (sections, ui, content, shared)
- [ ] Create all reusable components (8 components)
- [ ] Create section components (10 sections)
- [ ] Create Home Page single type
- [ ] Configure i18n (Arabic + English)
- [ ] Enable Draft & Publish
- [ ] Upload media assets
- [ ] Create content in Arabic
- [ ] Translate to English
- [ ] Test API endpoints
- [ ] Connect frontend

---

## 📝 Notes & Best Practices

1. **Always use components** for reusable content blocks
2. **Enable Draft & Publish** for content review workflow
3. **Use i18n** for all text content (AR + EN)
4. **Optimize images** before uploading (WebP recommended)
5. **Provide alt text** for all images (accessibility)
6. **Use descriptive names** for media files
7. **Test on mobile** - all sections are responsive
8. **Keep content concise** - respect max lengths
9. **Use consistent icons** across similar services
10. **Preview before publishing** in both languages

---

## 🔗 Next Steps

After completing the Home Page:

1. Create Blog Post collection type
2. Create About page
3. Create Services page
4. Create Contact page
5. Create shared Header/Footer components
6. Configure Strapi roles & permissions
7. Set up API tokens for frontend
8. Implement frontend GraphQL queries

---

## 📞 Support

For questions about these schemas:

- Review the JSON files in `/strapi-content/home/`
- Check Strapi documentation: https://docs.strapi.io
- Refer to component files in `/strapi-content/components/`

---

**Generated for:** Etmam Developments Website  
**Date:** October 22, 2025  
**Version:** 1.0  
**Pages Covered:** Home Page (complete)
