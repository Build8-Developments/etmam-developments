/**
 * Internationalization Configuration
 * URL-based localization for SEO-correct implementation
 */

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
};

export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Get locale from path segment, with fallback to default
 */
export function getLocaleFromPath(segment: string): Locale {
  return isValidLocale(segment) ? segment : defaultLocale;
}

/**
 * Generate alternate URLs for hreflang tags
 */
export function generateAlternateUrls(
  pathname: string,
  baseUrl: string
): Record<Locale | "x-default", string> {
  // Remove any existing locale prefix from pathname
  const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, "") || "/";

  return {
    ar: `${baseUrl}/ar${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`,
    en: `${baseUrl}/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`,
    "x-default": `${baseUrl}/ar${
      pathWithoutLocale === "/" ? "" : pathWithoutLocale
    }`,
  };
}

/**
 * Get canonical URL for a specific locale and path
 */
export function getCanonicalUrl(
  locale: Locale,
  pathname: string,
  baseUrl: string
): string {
  const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, "") || "/";
  return `${baseUrl}/${locale}${
    pathWithoutLocale === "/" ? "" : pathWithoutLocale
  }`;
}
