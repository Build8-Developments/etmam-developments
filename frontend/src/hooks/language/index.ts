"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Language } from "@/types";

/**
 * Custom hook for managing language with localStorage persistence
 */
export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>("ar");
  const router = useRouter();

  const setLanguage = useCallback(
    (lang: Language) => {
      setLanguageState(lang);
      if (typeof window !== "undefined") {
        // Add transition class to body
        document.body.classList.add("language-transitioning");

        localStorage.setItem("language", lang);
        document.cookie = `language=${lang}; path=/; max-age=31536000`;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;

        // Remove transition class after animation completes
        setTimeout(() => {
          document.body.classList.remove("language-transitioning");
          // Force router refresh to re-fetch server components with new locale
          router.refresh();
        }, 400);
      }
    },
    [router]
  );

  // Load saved language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("language") as Language | null;
      if (saved === "en" || saved === "ar") {
        setLanguageState(saved);
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.cookie = `language=${language}; path=/; max-age=31536000`;
    }
  }, [language]);

  return {
    language,
    setLanguage,
    isRTL: language === "ar",
  };
};
