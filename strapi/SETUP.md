# Strapi Backend Setup Guide

## Overview
Strapi v5 CMS backend with GraphQL API, i18n support (Arabic/English), and custom content types for the Etmam website.

## Features
✅ Strapi v5.25.0
✅ GraphQL API
✅ i18n with Arabic (default) and English
✅ PostgreSQL/MySQL/SQLite support
✅ Custom content types: Header & Hero
✅ Media upload support
✅ Users & Permissions plugin

## Installation

```bash
cd strapi
npm install
npm install @strapi/plugin-graphql
```

## First Time Setup

1. Run Strapi in development mode:
```bash
npm run develop
```

2. Create an admin user at `http://localhost:1337/admin`

3. Configure locales:
   - Go to Settings → Internationalization
   - Ensure Arabic (ar) and English (en) are enabled
   - Set Arabic as default

## Content Types

Two single-type content types have been created:

### 1. Header (Single Type)
Located in: `src/api/header/content-types/header/schema.json`

Fields:
- **logo** (Media - Image)
- **navigationItems** (JSON) - Array of `{label: string, href: string}`
- **contactButton** (JSON) - `{label: string, href: string}`

Example JSON for navigationItems:
```json
[
  {"label": "الرئيسية", "href": "/"},
  {"label": "من نحن", "href": "/about"},
  {"label": "الخدمات", "href": "/services"}
]
```

Example JSON for contactButton:
```json
{
  "label": "تواصل معنا",
  "href": "/contact"
}
```

### 2. Hero (Single Type)
Located in: `src/api/hero/content-types/hero/schema.json`

Fields:
- **title** (Text) - Localized
- **subtitle** (Text) - Localized
- **description** (Long Text) - Localized
- **primaryButton** (JSON) - Localized - `{label: string, href: string}`
- **secondaryButton** (JSON) - Localized - `{label: string, href: string}`
- **backgroundImage** (Media - Image)
- **personImage** (Media - Image)
- **smallImages** (Media - Multiple Images)

## Adding Content

1. Go to Content Manager in Strapi admin
2. Select "Header" or "Hero" from Single Types
3. Switch between locales using the locale dropdown (top right)
4. Fill in the content for each language
5. Upload images
6. Save

### Example Hero Content (Arabic):
```
Title: إتمام
Subtitle: خدماتك التجارية والإدارية
Description: من تأسيس الشركات إلى استخراج الرخص وإدارة أعمالك، نوفر لك حلول متكاملة لإنشاء شركة وسريعة في الرياض

Primary Button: {"label": "تصفح الخدمات", "href": "/services"}
Secondary Button: {"label": "من نحن", "href": "/about"}
```

### Example Hero Content (English):
```
Title: Etmam
Subtitle: Your Commercial and Administrative Services
Description: From establishing companies to obtaining licenses and managing your business, we provide integrated and fast solutions

Primary Button: {"label": "Browse Services", "href": "/services"}
Secondary Button: {"label": "About Us", "href": "/about"}
```

## GraphQL API

GraphQL playground is available at: `http://localhost:1337/graphql`

### Query Examples:

**Get Header (Arabic):**
```graphql
query {
  header(locale: "ar") {
    data {
      attributes {
        logo {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        navigationItems
        contactButton
      }
    }
  }
}
```

**Get Hero (English):**
```graphql
query {
  hero(locale: "en") {
    data {
      attributes {
        title
        subtitle
        description
        primaryButton
        secondaryButton
        backgroundImage {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        personImage {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        smallImages {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
```

## Environment Variables

Create a `.env` file in the strapi directory:

```env
HOST=0.0.0.0
PORT=1337

# Admin Panel
ADMIN_JWT_SECRET=your-random-secret-key-here
API_TOKEN_SALT=your-random-salt-here
TRANSFER_TOKEN_SALT=your-random-salt-here
ENCRYPTION_KEY=your-random-key-here

# App Keys (comma-separated)
APP_KEYS=key1,key2,key3,key4

# Database (SQLite for development)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# OR PostgreSQL for production
# DATABASE_CLIENT=postgres
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_NAME=etmam_strapi
# DATABASE_USERNAME=postgres
# DATABASE_PASSWORD=your-password
# DATABASE_SSL=false

# GraphQL
GRAPHQL_PLAYGROUND=true
```

**Generate secure keys:**
```bash
# Use Strapi's built-in key generator or:
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## CORS Configuration

Update `config/middlewares.ts` if needed to allow requests from your frontend:

```typescript
export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:3000'],
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

## Scripts

```bash
npm run develop   # Development mode with auto-reload
npm run start     # Production mode
npm run build     # Build admin panel
npm run strapi    # Strapi CLI
```

## Project Structure

```
strapi/
├── config/
│   ├── admin.ts           # Admin panel config
│   ├── api.ts             # API config (limits, etc)
│   ├── database.ts        # Database config
│   ├── middlewares.ts     # Middleware stack
│   ├── plugins.ts         # Plugin config (GraphQL, i18n)
│   └── server.ts          # Server config
├── src/
│   ├── api/
│   │   ├── header/        # Header content type
│   │   └── hero/          # Hero content type
│   ├── admin/             # Admin panel customization
│   ├── extensions/        # Custom extensions
│   └── index.ts           # Bootstrap file
├── database/              # Database files
└── public/
    └── uploads/           # Uploaded media files
```

## Adding New Content Types

1. Use Content-Type Builder in admin panel, OR
2. Create schema.json manually in `src/api/[name]/content-types/[name]/`
3. Restart Strapi
4. The GraphQL API will auto-generate queries

## Tips

- Always create content in both locales (AR and EN)
- Test GraphQL queries in the playground before using in frontend
- Use the Media Library to organize uploaded images
- Enable public access to content types via Settings → Users & Permissions → Roles → Public
- Image URLs from Strapi are relative - prepend with `NEXT_PUBLIC_STRAPI_API_URL` in frontend

## Troubleshooting

**GraphQL not available?**
- Make sure `@strapi/plugin-graphql` is installed
- Check `config/plugins.ts` has graphql enabled
- Restart Strapi

**Content not showing in GraphQL?**
- Go to Settings → Users & Permissions → Roles → Public
- Enable `find` permission for your content types

**Images not loading in frontend?**
- Check CORS settings
- Verify image URLs include the base URL
- Ensure images are published/accessible

