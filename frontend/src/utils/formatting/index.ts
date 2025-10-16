import { Language } from '@/types';

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
 * Formats currency according to the language
 */
export const formatCurrency = (amount: number, language: Language, currency: string = 'SAR'): string => {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency,
  };
  
  if (language === 'ar') {
    return amount.toLocaleString('ar-SA', options);
  }
  return amount.toLocaleString('en-US', options);
};

/**
 * Formats phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format Saudi phone numbers
  if (cleaned.startsWith('966')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  
  if (cleaned.startsWith('05')) {
    return `+966 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
  }
  
  return phone;
};
