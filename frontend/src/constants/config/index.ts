// Application configuration
export const APP_CONFIG = {
  name: 'Etmam',
  description: 'Commercial and Administrative Services',
  version: '1.0.0',
  author: 'Etmam Team',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
  graphqlUrl: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL || 'http://localhost:1337/graphql',
} as const;

// Feature flags
export const FEATURE_FLAGS = {
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  enablePWA: process.env.NEXT_PUBLIC_ENABLE_PWA === 'true',
  enableDarkMode: process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true',
  enableNotifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  upload: '/api/upload',
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  consultation: '/api/consultation',
} as const;

// Cache configuration
export const CACHE_CONFIG = {
  defaultTTL: 300, // 5 minutes
  longTTL: 3600, // 1 hour
  shortTTL: 60, // 1 minute
} as const;

// Pagination configuration
export const PAGINATION_CONFIG = {
  defaultPageSize: 10,
  maxPageSize: 100,
  pageSizeOptions: [5, 10, 20, 50],
} as const;
