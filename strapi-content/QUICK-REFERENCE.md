# Strapi Content Types - Quick Reference

## 📚 File Structure

```
strapi-content/
├── README.md                          # Main guide
├── components/                        # Reusable components
│   ├── ui-button.json                 # Button component
│   ├── ui-icon-text-card.json         # Icon + text card
│   ├── content-service-card.json      # Service card
│   ├── content-numbered-step.json     # Numbered step
│   ├── content-stat-item.json         # Statistic item
│   ├── content-service-slide.json     # Carousel slide
│   ├── content-faq-item.json          # FAQ item
│   ├── content-partner-logo.json      # Partner logo
│   └── shared-seo.json                # SEO metadata
└── home/                              # Home page
    ├── HOME-STRUCTURE.md              # Structure overview
    ├── home-page.json                 # Home page (Single Type)
    ├── hero-section.json              # Hero section
    ├── about-section.json             # About section
    ├── services-section.json          # Services grid
    ├── how-it-works-section.json      # Process steps
    ├── statistics-section.json        # Stats overlay
    ├── services-carousel-section.json # Service carousel
    ├── blog-section.json              # Blog preview
    ├── faq-section.json               # FAQs
    ├── cta-section.json               # Call to action
    └── partners-section.json          # Partners logos
```

---

## 🎯 Component Categories

### 1. **shared** - Shared across entire site

- `shared.seo` - SEO metadata

### 2. **ui** - UI elements

- `ui.button` - Button with label & link
- `ui.icon-text-card` - Card with icon, title, description

### 3. **content** - Content blocks

- `content.service-card` - Service with icon, title, desc, active state
- `content.numbered-step` - Step with number, title, description
- `content.stat-item` - Statistic number + label
- `content.service-slide` - Carousel slide with image & details
- `content.faq-item` - Question & answer pair
- `content.partner-logo` - Partner logo & name

### 4. **sections** - Page sections

- `sections.hero-section`
- `sections.about-section`
- `sections.services-section`
- `sections.how-it-works-section`
- `sections.statistics-section`
- `sections.services-carousel-section`
- `sections.blog-section`
- `sections.faq-section`
- `sections.cta-section`
- `sections.partners-section`

---

## 🔢 Creation Order (Bottom-Up)

### Phase 1: Foundation Components

1. `shared.seo`
2. `ui.button`
3. `ui.icon-text-card`

### Phase 2: Content Components

4. `content.service-card`
5. `content.numbered-step`
6. `content.stat-item`
7. `content.service-slide`
8. `content.faq-item`
9. `content.partner-logo`

### Phase 3: Section Components

10. `sections.hero-section`
11. `sections.about-section`
12. `sections.services-section`
13. `sections.how-it-works-section`
14. `sections.statistics-section`
15. `sections.services-carousel-section`
16. `sections.blog-section`
17. `sections.faq-section`
18. `sections.cta-section`
19. `sections.partners-section`

### Phase 4: Content Types

20. `Home Page` (Single Type)

---

## 📋 Component Dependencies

```
Home Page (Single Type)
├── seo → shared.seo
├── heroSection → sections.hero-section
│   ├── primaryButton → ui.button
│   └── secondaryButton → ui.button
├── aboutSection → sections.about-section
│   ├── features[] → ui.icon-text-card
│   └── ctaButton → ui.button
├── servicesSection → sections.services-section
│   ├── services[] → content.service-card
│   └── ctaButton → ui.button
├── howItWorksSection → sections.how-it-works-section
│   └── steps[] → content.numbered-step
├── statisticsSection → sections.statistics-section
│   └── stats[] → content.stat-item
├── servicesCarouselSection → sections.services-carousel-section
│   └── services[] → content.service-slide
├── blogSection → sections.blog-section
│   └── blogPosts (relation to Blog Post collection)
├── faqSection → sections.faq-section
│   └── faqs[] → content.faq-item
├── ctaSection → sections.cta-section
└── partnersSection → sections.partners-section
    └── partners[] → content.partner-logo
```

---

## 🎨 Icon Reference

### Service Icons

| Icon         | Used For          | SVG Path Available |
| ------------ | ----------------- | ------------------ |
| `building`   | Company Formation | ✅                 |
| `license`    | License Services  | ✅                 |
| `consulting` | Consultations     | ✅                 |
| `accounting` | Accounting        | ✅                 |
| `hr`         | Human Resources   | ✅                 |
| `marketing`  | Marketing         | ✅                 |
| `document`   | Documentation     | ✅                 |

### Feature Icons

| Icon      | Used For          | Notes       |
| --------- | ----------------- | ----------- |
| `trust`   | Trust/Reliability | Shield icon |
| `mission` | Mission/Goals     | Target icon |
| `vision`  | Vision/Future     | Eye icon    |

---

## 📊 Field Types Reference

| Strapi Type   | Used For           | Example                    |
| ------------- | ------------------ | -------------------------- |
| `string`      | Short text         | Titles, labels (max 255)   |
| `text`        | Long text          | Descriptions (1000+)       |
| `richtext`    | Formatted text     | Rich content with HTML     |
| `integer`     | Numbers            | Counts, display order      |
| `boolean`     | True/false         | isActive, openInNewTab     |
| `enumeration` | Predefined options | Icon types, variants       |
| `media`       | Images/files       | Photos, logos, backgrounds |
| `component`   | Nested structure   | Repeatable or single       |
| `relation`    | Link to collection | Blog posts, services       |
| `json`        | Structured data    | Schema.org markup          |

---

## 🌐 i18n Configuration

### Locales to Enable:

- **ar** (Arabic) - Primary/Default
- **en** (English) - Secondary

### Localized Content:

- All text fields (string, text, richtext)
- SEO metadata
- Button labels
- Alt text for images

### Non-Localized:

- Media files (same images)
- Enumeration values
- Boolean flags
- Numbers

---

## 📸 Image Checklist

### Required Images:

- [ ] Hero background (1920x1080)
- [ ] Hero person (500x800)
- [ ] About main image (800x800)
- [ ] About secondary image (400x400)
- [ ] Statistics background (1920x600)
- [ ] How It Works person (507x507)
- [ ] CTA background (800x600)
- [ ] Service carousel images (800x600) x5-10
- [ ] Partner logos (120x64) x4-8
- [ ] SEO/OG image (1200x630)

### Optional Images:

- [ ] Background patterns (net.png)
- [ ] Decorative elements (ellipse, brackets, waves)
- [ ] Custom icons (if not using SVG paths)

---

## ⚡ Quick Setup Commands

### Create Component in Strapi Admin:

1. Content-Type Builder → Components
2. Click "Create new component"
3. Select category (shared, ui, content, sections)
4. Name the component
5. Add attributes from JSON schema
6. Save

### Enable i18n:

1. Marketplace → i18n
2. Install plugin
3. Settings → Internationalization
4. Add locales: ar (default), en
5. Enable for Home Page & components

### Configure Permissions:

1. Settings → Roles → Public
2. Enable: find, findOne for Home Page
3. Settings → API Tokens
4. Create token for frontend

---

## 🚀 Testing Checklist

### After Creating Components:

- [ ] All components created without errors
- [ ] Component dependencies resolved
- [ ] i18n enabled on all text fields
- [ ] Media fields accept images

### After Creating Home Page:

- [ ] Single Type created successfully
- [ ] All sections added
- [ ] Draft & Publish enabled
- [ ] i18n enabled

### After Adding Content:

- [ ] Content added in Arabic
- [ ] Translated to English
- [ ] All required fields filled
- [ ] Images uploaded with alt text
- [ ] Content published

### API Testing:

- [ ] `/api/home-page` returns data
- [ ] `?populate=deep` includes nested data
- [ ] `?locale=ar` returns Arabic
- [ ] `?locale=en` returns English
- [ ] Images have proper URLs

---

## 📱 Responsive Considerations

### Mobile (320px - 768px):

- Hero: Single column, simplified layout
- Services: 1 column grid
- Statistics: 2x2 grid
- FAQs: Single column
- Partners: Scrolls automatically

### Tablet (769px - 1024px):

- Hero: 2 column layout
- Services: 2 column grid
- Statistics: 4x1 grid
- FAQs: 2 columns
- Blog: 2 columns

### Desktop (1025px+):

- Hero: 2 column with decorative elements
- Services: 3 column grid
- Statistics: 4x1 grid
- FAQs: 2 columns
- Blog: 3 columns

---

## 🔗 API Endpoint Examples

### Get Home Page (Deep Populate):

```
GET /api/home-page?populate=deep&locale=ar
```

### Get Home Page (Specific Sections):

```
GET /api/home-page?populate[heroSection][populate]=*&populate[aboutSection][populate]=*&locale=en
```

### Get Media URL:

```javascript
const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`;
```

---

## 💡 Best Practices

1. **Always populate nested components** - Use `populate=deep` or specific paths
2. **Optimize images before upload** - Max 5MB, use WebP when possible
3. **Add alt text to all images** - For accessibility and SEO
4. **Keep text concise** - Respect max length recommendations
5. **Test in both languages** - Ensure content looks good in AR and EN
6. **Use consistent naming** - Follow naming conventions in JSON files
7. **Preview before publish** - Use Draft mode for review
8. **Document custom changes** - If you modify schemas
9. **Backup before major changes** - Export content types
10. **Monitor API performance** - Use specific populate paths if slow

---

## 🛠️ Troubleshooting

### Component Not Found:

- Ensure component is created before the type that uses it
- Check category name matches (shared, ui, content, sections)
- Verify component name is correct (case-sensitive)

### Images Not Showing:

- Check STRAPI_API_URL is set correctly
- Verify image URL includes domain
- Ensure proper permissions on public role
- Check image uploaded successfully

### i18n Not Working:

- Verify i18n plugin is installed
- Check locale is enabled (ar, en)
- Ensure field is marked as localized
- Pass `?locale=ar` in API request

### Populate Not Working:

- Use `populate=deep` for all nested data
- Or specify exact paths: `populate[section][populate]=*`
- Check component relations are correct
- Verify API permissions

---

## 📞 Support Resources

- **Strapi Docs:** https://docs.strapi.io
- **i18n Plugin:** https://docs.strapi.io/dev-docs/plugins/i18n
- **API Reference:** https://docs.strapi.io/dev-docs/api/rest
- **Component Guide:** https://docs.strapi.io/dev-docs/backend-customization/models

---

**Last Updated:** October 22, 2025  
**Version:** 1.0  
**Total Components:** 19 (9 reusable + 10 sections)  
**Total Content Types:** 1 (Home Page - Single Type)
