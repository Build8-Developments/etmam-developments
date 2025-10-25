# Home Page Content Structure

## Overview

The home page contains 10 major sections, each requiring specific content types and components in Strapi.

---

## Section Breakdown

### 1. Hero Section ⭐

**Type:** Component (`sections.hero-section`)  
**Dependencies:** `ui.button`

**Content Needed:**

- Title text (main headline)
- Subtitle text
- Description text
- Primary button (label + link)
- Secondary button (label + link)
- Background image (1920x1080px)
- Person/character image (500x800px)

**Visual Elements:**

- Green gradient overlay on background
- Ellipse decorative elements
- Small circular icon overlay
- Small card with person image

---

### 2. About Section

**Type:** Component (`sections.about-section`)  
**Dependencies:** `ui.icon-text-card`, `ui.button`

**Content Needed:**

- Title (e.g., "من نحن")
- Heading text
- Description paragraph
- Main image (800x800px)
- Secondary overlay image (400x400px)
- Statistic number (e.g., "680")
- Statistic label (e.g., "شراكة ناجحة")
- Features array (2-4 items):
  - Icon name
  - Title
  - Description
- CTA button

**Visual Elements:**

- Decorative wave pattern (top right)
- Green stat box overlay
- Two overlapping images

---

### 3. Services Section 🎯

**Type:** Component (`sections.services-section`)  
**Dependencies:** `content.service-card`, `ui.button`

**Content Needed:**

- Title
- Description
- Services array (3-12 items):
  - Icon type (building, license, consulting, accounting, hr, marketing)
  - Title
  - Description
  - isActive flag
- CTA button
- Background pattern (optional net.png)

**Visual Elements:**

- Green gradient background (#11613A to #9BE43F)
- Rounded top-left corner
- Net pattern overlays (top and bottom)
- Grid layout (1-3 columns responsive)

---

### 4. How It Works Section

**Type:** Component (`sections.how-it-works-section`)  
**Dependencies:** `content.numbered-step`

**Content Needed:**

- Title
- Description
- Person image (507x507px, person with laptop)
- Banner text (overlay text)
- Steps array (3-5 items):
  - Number (1, 2, 3)
  - Title
  - Description

**Visual Elements:**

- Green frame around person image
- Banner overlay with star icon
- Numbered circles with connecting lines
- Vertical timeline layout

---

### 5. Statistics Section 📊

**Type:** Component (`sections.statistics-section`)  
**Dependencies:** `content.stat-item`

**Content Needed:**

- Title (main heading)
- Stats array (4-6 items):
  - Number (with +, k, % if needed)
  - Label
- Background image (1920x600px)

**Visual Elements:**

- Image covers top 2/3 of section
- White background on bottom 1/3
- Green gradient box overlapping both sections
- Grid layout (2x2 mobile, 4x1 desktop)
- Vertical borders between stats

---

### 6. Services Carousel Section

**Type:** Component (`sections.services-carousel-section`)  
**Dependencies:** `content.service-slide`

**Content Needed:**

- Title
- Description
- Services array (3-10 items):
  - Image (800x600px)
  - Icon type
  - Title
  - Description

**Visual Elements:**

- Decorative bracket above title
- Decorative wave patterns (top left & right)
- Carousel navigation dots
- Keyboard navigation support
- Large service icon (72x72px)

---

### 7. Blog Section 📝

**Type:** Component (`sections.blog-section`)  
**Dependencies:** Relation to Blog Posts collection

**Content Needed:**

- Title (section heading)
- Blog posts (relation to 3 featured posts)
- Display count (how many to show)

**Visual Elements:**

- Grid layout (3 columns)
- Post cards (398x541px)
- Image (316px height)
- Date and location metadata
- Hover effects

---

### 8. FAQ Section ❓

**Type:** Component (`sections.faq-section`)  
**Dependencies:** `content.faq-item`

**Content Needed:**

- Title
- FAQs array (4-20 items):
  - Question
  - Answer
  - Category (optional)

**Visual Elements:**

- Two-column layout on desktop
- White cards with shadow
- Accordion style (expandable/collapsible)
- +/- icons for expand/collapse
- Smooth transitions

---

### 9. CTA Section 📢

**Type:** Component (`sections.cta-section`)  
**Dependencies:** None (self-contained)

**Content Needed:**

- Title/message text
- Button text
- Button link
- Background image (800x600px, for right side)

**Visual Elements:**

- Two-part layout (65% green + 35% image)
- Green gradient (#11613A to #2A9A5B)
- White button on green background
- Arrow icon (flips for RTL)
- Rounded corners

---

### 10. Partners Section 🤝

**Type:** Component (`sections.partners-section`)  
**Dependencies:** `content.partner-logo`

**Content Needed:**

- Partners array (minimum 3):
  - Name
  - Logo (120x64px, transparent)
  - Website (optional)
- Animation speed (default 15s)

**Visual Elements:**

- Infinite horizontal scrolling
- Bordered boxes (120x64px)
- White background
- Seamless loop animation

---

## Content Type Recommendations

### Single Type (Only one instance):

✅ **Home Page** - Main page configuration

### Components (Reusable):

✅ All 10 sections above  
✅ All UI elements (buttons, cards)  
✅ All content blocks (services, FAQs, steps)

### Collections (Multiple instances):

🔄 Blog Posts (for blog section)  
🔄 Services (optional, if services are managed separately)

---

## Multilingual Support (i18n)

All text fields should support:

- Arabic (ar) - Primary/default
- English (en) - Secondary

### Localized Fields:

- ✅ All titles and headings
- ✅ All descriptions
- ✅ Button labels
- ✅ FAQ questions and answers
- ✅ SEO metadata

### Non-localized Fields:

- ❌ Images (but alt text should be localized)
- ❌ Icon names
- ❌ Display counts
- ❌ Active states

---

## Image Optimization Guidelines

| Section      | Image      | Size      | Format  | Notes              |
| ------------ | ---------- | --------- | ------- | ------------------ |
| Hero         | Background | 1920x1080 | WebP    | Compressed         |
| Hero         | Person     | 500x800   | PNG     | Transparent        |
| About        | Main       | 800x800   | WebP    | Square             |
| About        | Secondary  | 400x400   | WebP    | Square             |
| Statistics   | Background | 1920x600  | WebP    | Landscape          |
| Carousel     | Services   | 800x600   | WebP    | 4:3 ratio          |
| CTA          | Background | 800x600   | WebP    | Portrait/landscape |
| Partners     | Logos      | 120x64    | SVG/PNG | Transparent        |
| How It Works | Person     | 507x507   | PNG     | Square             |

---

## Quick Setup Order

1. ✅ Create shared SEO component
2. ✅ Create UI components (button, icon-card)
3. ✅ Create content components (service-card, faq-item, etc.)
4. ✅ Create section components (10 sections)
5. ✅ Create Home Page single type
6. ✅ Configure i18n
7. ✅ Upload media assets
8. ✅ Populate content

---

**Total Components:** 18  
**Total Sections:** 10  
**Single Types:** 1 (Home Page)  
**Languages:** 2 (Arabic + English)
