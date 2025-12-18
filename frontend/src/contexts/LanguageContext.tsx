"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { LanguageContextType, Language } from "@/types";
import { usePathname, useRouter } from "next/navigation";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
  locale: Language;
}

/**
 * Language Provider that derives language from URL pathname
 * No localStorage - purely URL-based for SEO
 */
export function LanguageProvider({ children, locale }: LanguageProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const languageContext = useMemo<LanguageContextType>(
    () => ({
      language: locale,
      setLanguage: (lang: Language) => {
        // Navigate to the same path but with different locale
        // Replace /ar or /en at the start with the new locale
        const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, "") || "/";
        const newPath = `/${lang}${
          pathWithoutLocale === "/" ? "" : pathWithoutLocale
        }`;
        router.push(newPath);
      },
      isRTL: locale === "ar",
    }),
    [locale, pathname, router]
  );

  return (
    <LanguageContext.Provider value={languageContext}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
