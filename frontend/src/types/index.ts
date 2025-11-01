// ========================================
// CORE TYPES
// ========================================
export type Language = "ar" | "en";

// ========================================
// COMMON TYPES
// ========================================
export interface ImageAsset {
  url: string;
  alternativeText: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Button {
  label: string;
  variant?: "primary" | "secondary" | "outlined" | "ghost";
  href: string;
}

// ========================================
// CONTEXT TYPES
// ========================================
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

// ========================================
// LAYOUT TYPES
// ========================================
export interface HeaderProps {
  logo?: ImageAsset;
  navigationItems?: NavigationItem[];
  contactButton?: Button;
}

export interface FooterProps {
  logo: ImageAsset;
  description: string;
  quickLinks: NavigationItem[];
  services: NavigationItem[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  copyright: string;
}

// ========================================
// PAGE-SPECIFIC TYPES
// ========================================

// Home Page Types
export interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButton?: Button;
  secondaryButton?: Button;
  backgroundImage?: ImageAsset;
  personImage?: ImageAsset;
}

export interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  image?: ImageAsset;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon?: ImageAsset;
}

export interface Partner {
  id: string;
  name: string;
  logo?: ImageAsset;
  href?: string;
}

export interface CTASectionProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: ImageAsset;
}

// Services Types
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: ImageAsset;
  href?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    steps: string[];
  };
  pricing: {
    title: string;
    packages: {
      name: string;
      price: string;
      features: string[];
      isPopular?: boolean;
    }[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  image: ImageAsset;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon?: ImageAsset;
  order: number;
}

// About Page Types
export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: ImageAsset;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: ImageAsset;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image?: ImageAsset;
  href?: string;
  date?: string;
}

// Contact Types
export interface ContactInfo {
  title: string;
  description: string;
  contactMethods: {
    type: "phone" | "email" | "address" | "whatsapp";
    label: string;
    value: string;
    icon: string;
  }[];
  officeHours: {
    days: string;
    hours: string;
  };
  mapLocation: {
    lat: number;
    lng: number;
    address: string;
  };
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ========================================
// API TYPES
// ========================================

// GraphQL Response Types
export interface GraphQLResponse<T> {
  data: T;
  loading: boolean;
  error?: Error | null;
}

// Strapi Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEntity {
  id: string;
  attributes: Record<string, unknown>;
}
