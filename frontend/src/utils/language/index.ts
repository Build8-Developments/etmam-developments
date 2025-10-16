import { Language } from '@/types';

/**
 * Gets the appropriate direction class based on language
 */
export const getDirectionClass = (language: Language): string => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

/**
 * Gets the appropriate text alignment class based on language
 */
export const getTextAlignClass = (language: Language): string => {
  return language === 'ar' ? 'text-right' : 'text-left';
};

/**
 * Gets the appropriate margin/padding direction based on language
 */
export const getSpacingDirection = (language: Language, type: 'margin' | 'padding') => {
  const prefix = type === 'margin' ? 'm' : 'p';
  return {
    start: language === 'ar' ? `${prefix}r` : `${prefix}l`,
    end: language === 'ar' ? `${prefix}l` : `${prefix}r`,
  };
};

/**
 * Gets the appropriate flex direction based on language
 */
export const getFlexDirection = (language: Language): string => {
  return language === 'ar' ? 'flex-row-reverse' : 'flex-row';
};

/**
 * Gets the appropriate justify content based on language
 */
export const getJustifyContent = (language: Language, position: 'start' | 'end' | 'center'): string => {
  if (position === 'center') return 'justify-center';
  
  const baseClass = 'justify-';
  if (language === 'ar') {
    return position === 'start' ? `${baseClass}end` : `${baseClass}start`;
  }
  return position === 'start' ? `${baseClass}start` : `${baseClass}end`;
};

/**
 * Gets the appropriate text direction for CSS
 */
export const getTextDirection = (language: Language): 'rtl' | 'ltr' => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

/**
 * Converts Arabic numerals to English
 */
export const arabicToEnglish = (text: string): string => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  return text.replace(/[٠-٩]/g, (match): string => {
    const index = arabicNumbers.indexOf(match);
    return index !== -1 ? englishNumbers[index]! : match;
  });
};

/**
 * Converts English numerals to Arabic
 */
export const englishToArabic = (text: string): string => {
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  
  return text.replace(/[0-9]/g, (match): string => {
    const index = englishNumbers.indexOf(match);
    return index !== -1 ? arabicNumbers[index]! : match;
  });
};
