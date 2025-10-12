import { Language } from '@/types';

// Utility functions for common operations

/**
 * Formats a number with Arabic numerals for Arabic language
 */
export const formatNumber = (num: number, language: Language): string => {
  if (language === 'ar') {
    return num.toLocaleString('ar-SA');
  }
  return num.toLocaleString('en-US');
};

/**
 * Formats a date according to the language
 */
export const formatDate = (date: Date, language: Language): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  if (language === 'ar') {
    return date.toLocaleDateString('ar-SA', options);
  }
  return date.toLocaleDateString('en-US', options);
};

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
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Generates a unique ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Checks if the current device is mobile
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Checks if the current device is tablet
 */
export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

/**
 * Checks if the current device is desktop
 */
export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 1024;
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number format
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};
