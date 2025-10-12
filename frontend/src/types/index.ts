// Common types used across the application

export type Language = 'ar' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Button {
  label: string;
  href: string;
}

export interface ImageAsset {
  url: string;
  alternativeText: string;
}

export interface HeaderProps {
  logo?: ImageAsset;
  navigationItems?: NavigationItem[];
  contactButton?: Button;
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButton?: Button;
  secondaryButton?: Button;
  backgroundImage?: ImageAsset;
  personImage?: ImageAsset;
}

export interface CTASectionProps {
  title?: string;
  buttonText?: string;
  backgroundImage?: ImageAsset;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: ImageAsset;
  href?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image?: ImageAsset;
  href?: string;
  date?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo?: ImageAsset;
  href?: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon?: ImageAsset;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon?: ImageAsset;
  order: number;
}
