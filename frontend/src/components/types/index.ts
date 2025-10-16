// Common types used across components
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LanguageProps {
  language: 'ar' | 'en';
  isRTL: boolean;
}

export interface ImageAsset {
  url: string;
  alternativeText: string;
}

export interface ButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  description?: string;
  id?: string;
}

export interface CardProps extends BaseComponentProps {
  title: string;
  description: string;
  image?: ImageAsset;
  href?: string;
}

export interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

// Page-specific component types
export interface HomePageProps {
  hero?: HeroProps;
  about?: AboutSectionProps;
  cta?: CTASectionProps;
  statistics?: Statistic[];
  partners?: Partner[];
}

export interface ServicesPageProps {
  services?: ServiceItem[];
  howItWorks?: Step[];
  carousel?: ServiceItem[];
}

export interface AboutPageProps {
  about?: AboutSectionProps;
  leadership?: LeadershipMember[];
  successFoundation?: SuccessStory[];
  whyChoose?: WhyChooseItem[];
}

export interface BlogPageProps {
  posts?: BlogPost[];
  featured?: BlogPost;
}

// Component-specific interfaces
export interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  backgroundImage?: ImageAsset;
  personImage?: ImageAsset;
}

export interface AboutSectionProps {
  title?: string;
  heading?: string;
  description?: string;
  mainImage?: ImageAsset;
  secondaryImage?: ImageAsset;
  statNumber?: string;
  statLabel?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  ctaButton?: ButtonProps;
}

export interface CTASectionProps {
  title?: string;
  buttonText?: string;
  backgroundImage?: ImageAsset;
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

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: ImageAsset;
  href?: string;
  isActive?: boolean;
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

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  overlays: {
    type: 'speech' | 'box';
    text: string;
    position: 'top-right' | 'top-left' | 'middle-right' | 'bottom-center';
  }[];
}

// Layout types
export interface HeaderProps {
  logo?: ImageAsset;
  navigationItems?: Array<{
    label: string;
    href: string;
  }>;
  contactButton?: ButtonProps;
}

export interface FooterProps {
  logo: ImageAsset;
  description: string;
  quickLinks: Array<{
    label: string;
    href: string;
  }>;
  services: Array<{
    label: string;
    href: string;
  }>;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  copyright: string;
}
