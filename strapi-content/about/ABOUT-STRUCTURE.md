# About Page Content Structure

## Overview

The about page showcases Etmam's story, mission, values, team, and achievements. It contains 8 major sections designed to build trust and credibility.

---

## Section Breakdown

### 1. Hero Section (About) ⭐

**Type:** Component (`sections.about-hero-section`)  
**Dependencies:** None

**Content Needed:**

- Title text (e.g., "من نحن")
- Subtitle/Heading text (e.g., "نحن شركة إتمام للاستشارات الإدارية")
- Description text (2-3 paragraphs about the company)
- Background image (1920x600px)
- Overlay gradient color

**Visual Elements:**

- Full-width hero with text overlay
- Green gradient overlay
- Breadcrumb navigation

---

### 2. Mission & Vision Section

**Type:** Component (`sections.mission-vision-section`)  
**Dependencies:** `ui.icon-text-card`

**Content Needed:**

- Section title (e.g., "رؤيتنا ورسالتنا")
- Mission card:
  - Icon name
  - Title (e.g., "رسالتنا")
  - Description
- Vision card:
  - Icon name
  - Title (e.g., "رؤيتنا")
  - Description
- Background pattern (optional)

**Visual Elements:**

- Two-column layout (desktop)
- Icon cards with hover effects
- Clean, minimal design

---

### 3. Our Story Section 📖

**Type:** Component (`sections.our-story-section`)  
**Dependencies:** None

**Content Needed:**

- Title (e.g., "قصتنا")
- Story text (multiple paragraphs)
- Timeline events (optional, 3-5 items):
  - Year
  - Title
  - Description
- Story image (800x600px)

**Visual Elements:**

- Text + image split layout
- Timeline visualization (optional)
- Decorative elements

---

### 4. Core Values Section 💎

**Type:** Component (`sections.core-values-section`)  
**Dependencies:** `ui.icon-text-card`

**Content Needed:**

- Title (e.g., "قيمنا الأساسية")
- Description
- Values array (4-6 items):
  - Icon name
  - Title (e.g., "النزاهة", "الشفافية", "التميز")
  - Description

**Visual Elements:**

- Grid layout (2x3 or 3x2)
- Icon-based cards
- Consistent spacing

---

### 5. Team Section 👥

**Type:** Component (`sections.team-section`)  
**Dependencies:** `content.team-member` (new component)

**Content Needed:**

- Title (e.g., "فريقنا")
- Description
- Team members array (3-8 items):
  - Photo (400x400px, professional headshot)
  - Name
  - Position/Role
  - Bio (short)
  - Social links (LinkedIn, Twitter, etc.)

**Visual Elements:**

- Grid of profile cards
- Circular/rounded images
- Hover effects with social links

---

### 6. Achievements Section 🏆

**Type:** Component (`sections.achievements-section`)  
**Dependencies:** `content.stat-item` (reuse from home)

**Content Needed:**

- Title (e.g., "إنجازاتنا")
- Description
- Statistics array (4-6 items):
  - Number (e.g., "500+")
  - Label (e.g., "عميل راضٍ")
  - Icon (optional)
- Background image/pattern

**Visual Elements:**

- Full-width section with overlay
- Counter animations
- Grid layout for stats

---

### 7. Certifications & Partners Section 🤝

**Type:** Component (`sections.certifications-section`)  
**Dependencies:** `content.partner-logo` (reuse from home)

**Content Needed:**

- Title (e.g., "شهاداتنا وشركاؤنا")
- Certifications array (3-6 items):
  - Logo image (200x100px, transparent PNG)
  - Name
  - Link (optional)
- Partners array (4-8 items):
  - Logo image (200x100px, transparent PNG)
  - Name
  - Link (optional)

**Visual Elements:**

- Logo grid layout
- Grayscale logos with color on hover
- Clean, professional presentation

---

### 8. CTA Section (Join Us)

**Type:** Component (`sections.cta-section`) (reuse from home)  
**Dependencies:** `ui.button`

**Content Needed:**

- Title (e.g., "انضم إلى فريقنا" or "ابدأ مشروعك معنا")
- Description
- Primary button (label + link)
- Secondary button (optional)
- Background image/color

**Visual Elements:**

- Full-width section
- Centered content
- Strong call-to-action buttons

---

## New Components Needed

### 1. Team Member Component

**Component:** `content.team-member`

```json
{
  "name": "string",
  "position": "string",
  "bio": "text",
  "photo": "media (single)",
  "socialLinks": {
    "linkedin": "string (optional)",
    "twitter": "string (optional)",
    "email": "string (optional)"
  }
}
```

### 2. About Hero Section

**Component:** `sections.about-hero-section`

```json
{
  "title": "string",
  "heading": "string",
  "description": "text",
  "backgroundImage": "media (single)"
}
```

### 3. Mission Vision Section

**Component:** `sections.mission-vision-section`

```json
{
  "sectionTitle": "string",
  "missionCard": "component (ui.icon-text-card)",
  "visionCard": "component (ui.icon-text-card)"
}
```

### 4. Our Story Section

**Component:** `sections.our-story-section`

```json
{
  "title": "string",
  "storyText": "richtext",
  "storyImage": "media (single)",
  "timeline": "component (repeatable, content.timeline-event)"
}
```

**Timeline Event Component:** `content.timeline-event`

```json
{
  "year": "string",
  "title": "string",
  "description": "text"
}
```

### 5. Core Values Section

**Component:** `sections.core-values-section`

```json
{
  "title": "string",
  "description": "text",
  "values": "component (repeatable, ui.icon-text-card)"
}
```

### 6. Team Section

**Component:** `sections.team-section`

```json
{
  "title": "string",
  "description": "text",
  "teamMembers": "component (repeatable, content.team-member)"
}
```

### 7. Achievements Section

**Component:** `sections.achievements-section`

```json
{
  "title": "string",
  "description": "text",
  "statistics": "component (repeatable, content.stat-item)",
  "backgroundImage": "media (single, optional)"
}
```

### 8. Certifications Section

**Component:** `sections.certifications-section`

```json
{
  "title": "string",
  "certifications": "component (repeatable, content.partner-logo)",
  "partners": "component (repeatable, content.partner-logo)"
}
```

---

## Reusable Components (from Home Page)

- ✅ `content.stat-item` - Used in achievements
- ✅ `content.partner-logo` - Used in certifications
- ✅ `ui.icon-text-card` - Used in mission/vision and values
- ✅ `ui.button` - Used in CTA
- ✅ `sections.cta-section` - Reused as-is
- ✅ `shared.seo` - For SEO metadata

---

## Content Preparation Checklist

### Images Required

- [ ] Hero background image (1920x600px)
- [ ] Story section image (800x600px)
- [ ] Team member photos (400x400px each, 3-8 photos)
- [ ] Certification logos (200x100px each, 3-6 logos)
- [ ] Partner logos (200x100px each, 4-8 logos)
- [ ] Achievement background (1920x600px, optional)

### Text Content Required

#### Arabic & English:

- [ ] Hero title, heading, description
- [ ] Mission statement (2-3 sentences)
- [ ] Vision statement (2-3 sentences)
- [ ] Company story (3-5 paragraphs)
- [ ] Core values (4-6 values with descriptions)
- [ ] Team member bios (short, 2-3 sentences each)
- [ ] Achievement statistics (4-6 stats)
- [ ] CTA text and buttons

---

## Implementation Order

1. **Create new components:**

   - `content.team-member`
   - `content.timeline-event`
   - `sections.about-hero-section`
   - `sections.mission-vision-section`
   - `sections.our-story-section`
   - `sections.core-values-section`
   - `sections.team-section`
   - `sections.achievements-section`
   - `sections.certifications-section`

2. **Create About Page single type:**

   - Reference all 8 sections
   - Add SEO component
   - Enable i18n
   - Enable draft & publish

3. **Configure content:**
   - Add Arabic content
   - Add English translations
   - Upload all images
   - Test preview

---

## API Response Structure

When fetching from GraphQL/REST API:

```graphql
query GetAboutPage($locale: I18NLocaleCode!) {
  about(locale: $locale) {
    seo {
      metaTitle
      metaDescription
      shareImage {
        url
      }
    }
    heroSection {
      title
      heading
      description
      backgroundImage {
        url
      }
    }
    missionVisionSection {
      sectionTitle
      missionCard {
        icon
        title
        description
      }
      visionCard {
        icon
        title
        description
      }
    }
    ourStorySection {
      title
      storyText
      storyImage {
        url
      }
      timeline {
        year
        title
        description
      }
    }
    coreValuesSection {
      title
      description
      values {
        icon
        title
        description
      }
    }
    teamSection {
      title
      description
      teamMembers {
        name
        position
        bio
        photo {
          url
        }
        socialLinks {
          linkedin
          twitter
          email
        }
      }
    }
    achievementsSection {
      title
      description
      statistics {
        number
        label
        icon
      }
      backgroundImage {
        url
      }
    }
    certificationsSection {
      title
      certifications {
        logo {
          url
        }
        name
        link
      }
      partners {
        logo {
          url
        }
        name
        link
      }
    }
    ctaSection {
      # Same as home page CTA
    }
  }
}
```

---

## Design Considerations

- Maintain consistent spacing with home page
- Use same color scheme (green #11613A, #9BE43F)
- Ensure responsive design for all sections
- Add smooth transitions and animations
- Consider accessibility (ARIA labels, alt texts)
- Optimize images (WebP format, lazy loading)

---

## Estimated Time

- **Component creation:** 3-4 hours
- **Content entry:** 2-3 hours
- **Testing & refinement:** 1-2 hours
- **Total:** 6-9 hours

---

**Ready to implement? Start with the components folder!**
