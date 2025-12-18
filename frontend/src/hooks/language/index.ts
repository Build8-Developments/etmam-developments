"use client";

import { Language } from "@/types";

/**
 * @deprecated This hook is deprecated. Use useLanguage from @/contexts/LanguageContext instead.
 * The language is now derived from the URL path segment (e.g., /ar, /en).
 * This file is kept for backward compatibility but should not be used.
 */
export const useLanguage = () => {
  console.warn(
    "useLanguage from @/hooks is deprecated. Use useLanguage from @/contexts/LanguageContext instead."
  );

  // Return a stub that won't break existing code during migration
  return {
    language: "ar" as Language,
    setLanguage: (_lang: Language) => {
      console.warn(
        "setLanguage from deprecated hook does nothing. Use URL-based navigation."
      );
    },
    isRTL: true,
  };
};
