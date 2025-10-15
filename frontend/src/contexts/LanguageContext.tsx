'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Language, LanguageContextType } from '@/types';
import { useLanguage as useLanguageHook } from '@/hooks';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const languageContext = useLanguageHook();

  return (
    <LanguageContext.Provider value={languageContext}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

