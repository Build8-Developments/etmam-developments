import { Language } from '@/types';

/**
 * Generates mock data for testing and development
 */
export const generateMockData = <T>(
  template: T,
  count: number = 1,
  variations?: Partial<T>[]
): T[] => {
  return Array.from({ length: count }, (_, index) => {
    const variation = variations?.[index % variations.length] || {};
    return { ...template, ...variation };
  });
};

/**
 * Gets mock data based on language
 */
export const getMockDataByLanguage = <T>(
  data: Record<Language, T>,
  language: Language
): T => {
  return data[language];
};

/**
 * Creates mock image asset
 */
export const createMockImageAsset = (
  url: string,
  alternativeText: string = 'Mock Image'
) => ({
  url,
  alternativeText,
});

/**
 * Creates mock navigation item
 */
export const createMockNavigationItem = (
  label: string,
  href: string
) => ({
  label,
  href,
});

/**
 * Creates mock button
 */
export const createMockButton = (
  label: string,
  href: string
) => ({
  label,
  href,
});

/**
 * Creates mock statistic
 */
export const createMockStatistic = (
  id: string,
  value: string,
  label: string
) => ({
  id,
  value,
  label,
});

/**
 * Creates mock service item
 */
export const createMockServiceItem = (
  id: string,
  title: string,
  description: string,
  href?: string
) => ({
  id,
  title,
  description,
  href,
});

/**
 * Creates mock blog post
 */
export const createMockBlogPost = (
  id: string,
  title: string,
  excerpt: string,
  image?: string
) => ({
  id,
  title,
  excerpt,
  image,
});

/**
 * Creates mock contact method
 */
export const createMockContactMethod = (
  type: 'phone' | 'email' | 'address' | 'whatsapp',
  label: string,
  value: string,
  icon: string
) => ({
  type,
  label,
  value,
  icon,
});

/**
 * Creates mock FAQ item
 */
export const createMockFAQItem = (
  id: string,
  question: string,
  answer: string,
  category?: string
) => ({
  id,
  question,
  answer,
  category,
});
