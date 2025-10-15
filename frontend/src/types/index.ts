// Common types used across the application

export type Language = "ar" | "en";

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

// Layout Types
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
  icon?: string;
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

// GraphQL Response Types
export interface GraphQLResponse<T> {
  data: T;
  loading: boolean;
  error?: any;
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
  attributes: any;
}

// GraphQL Query Response Types
export interface HeaderQueryResponse {
  header: {
    data: {
      attributes: HeaderProps;
    };
  };
}

export interface FooterQueryResponse {
  footer: {
    data: {
      attributes: FooterProps;
    };
  };
}

export interface HeroQueryResponse {
  hero: {
    data: {
      attributes: HeroProps;
    };
  };
}

export interface HomeAboutQueryResponse {
  homeAbout: {
    data: {
      attributes: AboutSectionProps;
    };
  };
}

export interface StatisticsQueryResponse {
  statistics: {
    data: {
      attributes: {
        statistics: Statistic[];
      };
    };
  };
}

export interface PartnersQueryResponse {
  partners: {
    data: {
      attributes: {
        partners: Partner[];
      };
    };
  };
}

export interface CTAQueryResponse {
  cta: {
    data: {
      attributes: CTASectionProps;
    };
  };
}

export interface ServicesQueryResponse {
  services: {
    data: {
      attributes: {
        services: ServiceItem[];
      };
    };
  };
}

export interface ServiceDetailQueryResponse {
  service: {
    data: {
      attributes: ServiceDetail;
    };
  };
}

export interface HowItWorksQueryResponse {
  howItWorks: {
    data: {
      attributes: {
        steps: Step[];
      };
    };
  };
}

export interface AboutQueryResponse {
  about: {
    data: {
      attributes: AboutSectionProps;
    };
  };
}

export interface LeadershipQueryResponse {
  leadership: {
    data: {
      attributes: {
        members: LeadershipMember[];
      };
    };
  };
}

export interface SuccessFoundationQueryResponse {
  successFoundation: {
    data: {
      attributes: {
        stories: SuccessStory[];
      };
    };
  };
}

export interface WhyChooseQueryResponse {
  whyChoose: {
    data: {
      attributes: {
        items: WhyChooseItem[];
      };
    };
  };
}

export interface BlogPostsQueryResponse {
  blogPosts: {
    data: BlogPost[];
    meta: {
      pagination?: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };
}

export interface BlogPostQueryResponse {
  blogPosts: {
    data: Array<{
      attributes: BlogPost;
    }>;
  };
}

export interface ContactInfoQueryResponse {
  contactInfo: {
    data: {
      attributes: ContactInfo;
    };
  };
}

export interface FAQQueryResponse {
  faqs: {
    data: FAQItem[];
  };
}

export interface ConsultationQueryResponse {
  consultation: {
    data: {
      attributes: any;
    };
  };
}

export interface SEOQueryResponse {
  seo: {
    data: Array<{
      attributes: {
        title: string;
        description: string;
        keywords?: string[];
        ogImage?: ImageAsset;
      };
    }>;
  };
}
