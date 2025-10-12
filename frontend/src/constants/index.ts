import { Language } from '@/types';

// Common translations used across components
export const TRANSLATIONS = {
  // Navigation
  navigation: {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'من نحن', en: 'About' },
    legal: { ar: 'خدمات قانونية', en: 'Legal Services' },
    consulting: { ar: 'خدمات استشارية', en: 'Consulting' },
    team: { ar: 'فريق العمل', en: 'Team' },
    blog: { ar: 'المدونة', en: 'Blog' },
    packages: { ar: 'الباقات', en: 'Packages' },
    contact: { ar: 'تواصل معنا', en: 'Contact Us' },
  },

  // Hero Section
  hero: {
    title: { ar: 'إتمام', en: 'Etmam' },
    subtitle: { ar: 'خدماتك التجارية والإدارية', en: 'Your Commercial and Administrative Services' },
    heading: { ar: 'أسهل وأسرع', en: 'Easier and Faster' },
    description: { 
      ar: 'من تأسيس الشركات إلى استخراج الرخص وإدارة أعمالك، نوفر لك حلول متكاملة لإنشاء شركة وسريعة في الرياض',
      en: 'From establishing companies to obtaining licenses and managing your business, we provide you with integrated and fast solutions to start a company in Riyadh'
    },
    primaryButton: { ar: 'تصفح الخدمات', en: 'Browse Services' },
    secondaryButton: { ar: 'من نحن', en: 'About Us' },
  },

  // CTA Section
  cta: {
    title: { 
      ar: 'جرب خدمات إتمام وكن جزءاً من بناء اقتصاد دائري أكثر كفاءة', 
      en: 'Try Etmam services and be part of building a more efficient circular economy' 
    },
    buttonText: { ar: 'ابدأ الآن', en: 'Start Now' },
  },

  // Common buttons
  buttons: {
    readMore: { ar: 'اقرأ المزيد', en: 'Read More' },
    learnMore: { ar: 'اعرف المزيد', en: 'Learn More' },
    getStarted: { ar: 'ابدأ الآن', en: 'Get Started' },
    contactUs: { ar: 'تواصل معنا', en: 'Contact Us' },
  },

  // Accessibility
  accessibility: {
    menuToggle: { ar: 'فتح/إغلاق القائمة', en: 'Toggle Menu' },
    languageSwitch: { ar: 'تغيير اللغة', en: 'Switch Language' },
    closeMenu: { ar: 'إغلاق القائمة', en: 'Close Menu' },
  },
} as const;

// Helper function to get translation
export const getTranslation = <T extends keyof typeof TRANSLATIONS>(
  section: T,
  key: keyof typeof TRANSLATIONS[T],
  language: Language
): string => {
  return TRANSLATIONS[section][key][language];
};

// Image paths organized by category
export const IMAGE_PATHS = {
  logos: {
    main: '/images/logos/logo.png',
    alt: '/images/logos/logo-alt.png',
    large: '/images/logos/logo-large.png',
  },
  backgrounds: {
    hero: '/images/backgrounds/bg.jpg',
    footer: '/images/backgrounds/bgfooter.jpg',
    cta: '/images/backgrounds/cta.jpg',
    ctaLarge: '/images/backgrounds/cta-large.png',
    bigLeft: '/images/backgrounds/bigleft.jpg',
    bigRight: '/images/backgrounds/bigrigth.jpg',
  },
  people: {
    main: '/images/people/men.png',
    alt: '/images/people/person-alt.png',
    small: '/images/people/person-small.png',
    background: '/images/people/person-background.png',
  },
  icons: {
    main: '/images/icons/icon.png',
    circle: '/images/icons/circle.png',
    ellipse: '/images/icons/ellipse.png',
    topRight: '/images/icons/top-right.png',
    behindAbout: '/images/icons/behind-about.png',
    network: '/images/icons/network.png',
    networkAlt: '/images/icons/network-alt.png',
    vector: '/images/icons/vector.png',
    vectorLeft: '/images/icons/vector-left.png',
    paymentMethod: '/images/icons/payment-method.png',
    paymentMethod1: '/images/icons/payment-method-1.png',
    paymentMethod2: '/images/icons/payment-method-2.png',
    icon11: '/images/icons/icon-11.png',
    icon4: '/images/icons/icon-4.png',
  },
  blog: {
    post1: '/images/blog/blog1.jpg',
    post2: '/images/blog/blog-2.jpg',
    left: '/images/blog/blog-left.jpg',
    right: '/images/blog/blog-right.jpg',
  },
  svg: {
    file: '/images/svg/file.svg',
    globe: '/images/svg/globe.svg',
    window: '/images/svg/window.svg',
    next: '/images/svg/next.svg',
    vercel: '/images/svg/vercel.svg',
  },
} as const;
