# Frontend Setup Guide

## Overview
This is a Next.js 15 frontend with bilingual support (Arabic/English) using GraphQL to fetch content from Strapi CMS.

## Features
✅ Next.js 15.5.4 with App Router
✅ React 19
✅ TypeScript
✅ Tailwind CSS v4 with custom color palette
✅ Bilingual support (Arabic/English) without next-i18n
✅ GraphQL integration with Apollo Client
✅ RTL/LTR support
✅ Custom Header and Hero components
✅ Google Fonts (Geist Sans, Geist Mono, Cairo for Arabic)

## Installation

```bash
cd frontend
npm install
```

## Environment Variables

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_GRAPHQL_URL=http://localhost:1337/graphql
```

## Running the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Color Palette

The project uses a custom green color palette:

- `green-100`: #DAEDD5
- `green-200`: #8BD6B0  
- `green-300`: #BCDBB4
- `green-400`: #79B669
- `primary`: #90C054
- `green-600`: #155A03
- `green-700`: #104502
- `green-800`: #0B2E02

Use these colors in Tailwind classes:
```tsx
<div className="bg-primary text-white">...</div>
<button className="bg-green-700 hover:bg-green-800">...</button>
```

## Language Switching

The app uses a custom Language Context. To switch languages:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { language, setLanguage, isRTL } = useLanguage();
  
  return (
    <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}>
      Switch to {language === 'ar' ? 'English' : 'العربية'}
    </button>
  );
}
```

## Connecting to Strapi

1. Make sure Strapi is running on `http://localhost:1337`
2. In `src/app/page.tsx`, uncomment the GraphQL fetch code
3. The components will automatically use Strapi data instead of defaults

Example:
```tsx
'use client';

import { useEffect, useState } from "react";
import createApolloClient from "@/lib/apollo-client";
import { GET_HEADER_QUERY, GET_HERO_QUERY } from "@/lib/queries";

export default function Home() {
  const [headerData, setHeaderData] = useState(null);
  const [heroData, setHeroData] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      const client = createApolloClient();
      
      const { data: headerResponse } = await client.query({
        query: GET_HEADER_QUERY,
        variables: { locale: language },
      });
      
      const { data: heroResponse } = await client.query({
        query: GET_HERO_QUERY,
        variables: { locale: language },
      });
      
      setHeaderData(headerResponse.header?.data?.attributes);
      setHeroData(heroResponse.hero?.data?.attributes);
    };
    
    fetchData();
  }, [language]);

  return (
    <div>
      <Header {...headerData} />
      <HeroSection {...heroData} />
    </div>
  );
}
```

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Language Provider
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles + color palette
│   ├── components/
│   │   ├── Header.tsx          # Header component
│   │   └── HeroSection.tsx     # Hero section component
│   ├── contexts/
│   │   └── LanguageContext.tsx # Language management
│   └── lib/
│       ├── apollo-client.ts    # Apollo Client setup
│       └── queries.ts          # GraphQL queries
└── public/                     # Static assets
```

## Adding New Components

All components should support bilingual content:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

export default function MyComponent() {
  const { language, isRTL } = useLanguage();
  
  const text = language === 'ar' ? 'نص عربي' : 'English text';
  
  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      {text}
    </div>
  );
}
```

## Build for Production

```bash
npm run build
npm start
```

## Notes

- The default language is Arabic (RTL)
- Language preference is saved in localStorage
- The HTML dir attribute automatically switches between 'rtl' and 'ltr'
- All images from Strapi need the base URL prepended: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`

