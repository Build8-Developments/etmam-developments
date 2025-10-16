'use client';

import { useState, useEffect, useCallback } from 'react';
import { Language } from '@/types';

/**
 * Custom hook for managing language with localStorage persistence
 */
export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>('ar');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  }, []);

  // Load saved language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('language') as Language | null;
      if (saved === 'en' || saved === 'ar') {
        setLanguageState(saved);
        document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  return {
    language,
    setLanguage,
    isRTL: language === 'ar',
  };
};
