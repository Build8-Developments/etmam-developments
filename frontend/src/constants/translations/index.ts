import { Language } from '@/types';

// Common translations used across components
export const TRANSLATIONS = {
  // Navigation
  navigation: {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'من نحن', en: 'About' },
    services: { ar: 'الخدمات', en: 'Services' },
    legal: { ar: 'خدمات قانونية', en: 'Legal Services' },
    consulting: { ar: 'خدمات استشارية', en: 'Consulting' },
    offers: { ar: 'العروض', en: 'Offers' },
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

  // Reviews Section
  reviews: {
    title: { 
      ar: 'آراء عملائنا', 
      en: 'What Our Clients Say' 
    },
    subtitle: { 
      ar: 'اكتشف تجارب عملائنا المميزة مع خدمات إتمام', 
      en: 'Discover our clients\' exceptional experiences with Etmam services' 
    },
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

  // Form labels
  forms: {
    companyName: { ar: 'اسم المنشأة', en: 'Company Name' },
    fullName: { ar: 'الاسم بالكامل', en: 'Full Name' },
    mobileNumber: { ar: 'رقم الجوال', en: 'Mobile Number' },
    email: { ar: 'البريد الإلكتروني', en: 'Email' },
    preferredTime: { ar: 'أوقات التواصل المفضلة', en: 'Preferred Contact Times' },
    preferredLanguage: { ar: 'لغة التواصل', en: 'Preferred Language' },
    service: { ar: 'اختر الخدمة', en: 'Choose Service' },
    note: { ar: 'ملاحظة', en: 'Note' },
    submit: { ar: 'إرسال الرسالة', en: 'Send Message' },
  },

  // Error messages
  errors: {
    required: { ar: 'هذا الحقل مطلوب', en: 'This field is required' },
    invalidEmail: { ar: 'البريد الإلكتروني غير صحيح', en: 'Invalid email address' },
    invalidPhone: { ar: 'رقم الجوال غير صحيح', en: 'Invalid phone number' },
    minLength: { ar: 'يجب أن يكون النص أطول من {min} أحرف', en: 'Text must be longer than {min} characters' },
    maxLength: { ar: 'يجب أن يكون النص أقصر من {max} أحرف', en: 'Text must be shorter than {max} characters' },
  },

  // Success messages
  success: {
    formSubmitted: { ar: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.', en: 'Your request has been submitted successfully! We will contact you soon.' },
    emailSent: { ar: 'تم إرسال البريد الإلكتروني بنجاح', en: 'Email sent successfully' },
    dataSaved: { ar: 'تم حفظ البيانات بنجاح', en: 'Data saved successfully' },
  },
} as const;

// Helper function to get translation
export const getTranslation = <T extends keyof typeof TRANSLATIONS>(
  section: T,
  key: keyof typeof TRANSLATIONS[T],
  language: Language
): string => {
  return (TRANSLATIONS[section][key] as Record<Language, string>)[language];
};

// Helper function to get translation with placeholders
export const getTranslationWithPlaceholders = (
  section: keyof typeof TRANSLATIONS,
  key: string,
  language: Language,
  placeholders: Record<string, string | number> = {}
): string => {
  let translation = getTranslation(section, key as keyof typeof TRANSLATIONS[typeof section], language);
  
  Object.entries(placeholders).forEach(([placeholder, value]) => {
    translation = translation.replace(`{${placeholder}}`, String(value));
  });
  
  return translation;
};
