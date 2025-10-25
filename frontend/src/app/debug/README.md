# Debug Pages

This folder contains debug pages for testing GraphQL queries with SSR.

## Available Debug Pages

### Home Page Debug

- **URL:** `/debug/home`
- **Query:** `GET_HOME_PAGE`
- **Features:**
  - Server-Side Rendering (SSR)
  - Locale switching (ar/en)
  - Formatted data display
  - Raw JSON response viewer
  - Error handling display

## Usage

1. Make sure Strapi is running on `http://localhost:1337`
2. Visit `http://localhost:3000/debug/home`
3. Switch between Arabic and English using the locale buttons
4. View formatted data or copy raw JSON

## Query Parameters

- `locale` - Set the language (default: 'ar')
  - Example: `/debug/home?locale=en`

## Environment Variables

Make sure you have this set in your `.env.local`:

```env
NEXT_PUBLIC_STRAPI_GRAPHQL_URL=http://localhost:1337/graphql
```
