/**
 * Locale utilities for GraphQL queries
 */

import { cookies } from 'next/headers';

/**
 * Get locale from cookies or default to Arabic
 */
export async function getLocale(): Promise<string> {
  try {
    const cookieStore = await cookies();
    const locale = cookieStore.get('language')?.value;
    return locale === 'en' ? 'en' : 'ar';
  } catch {
    return 'ar'; // Default to Arabic
  }
}

/**
 * Get locale from search params (for dynamic routes)
 */
export function getLocaleFromParams(params: { locale?: string }): string {
  return params.locale === 'en' ? 'en' : 'ar';
}

/**
 * Get locale from headers (for server-side)
 */
export function getLocaleFromHeaders(headers: Headers): string {
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage?.includes('en')) {
    return 'en';
  }
  return 'ar';
}

/**
 * Create GraphQL variables with locale
 */
export function createLocaleVariables(locale: string, additionalVariables: Record<string, any> = {}) {
  return {
    locale,
    ...additionalVariables,
  };
}
