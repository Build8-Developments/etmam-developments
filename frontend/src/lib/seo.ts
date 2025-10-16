import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: readonly string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: string;
}

/**
 * Generate SEO metadata for pages
 * @param config - SEO configuration object
 * @returns Metadata object for Next.js
 */
export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = '/images/logos/logo-large.png',
    url,
    type = 'website',
    locale = 'ar'
  } = config;

  const keywordsArray = Array.from(keywords);

  const fullTitle = title.includes('إتمام') ? title : `${title} | إتمام`;
  const fullDescription = description || 'منصة إتمام للخدمات التجارية والإدارية - تأسيس الشركات وإدارة الأعمال';

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      'إتمام',
      'تأسيس الشركات',
      'الخدمات التجارية',
      'إدارة الأعمال',
      'الرخص التجارية',
      'etmam',
      'business services',
      'company formation',
      ...keywordsArray
    ],
    authors: [{ name: 'إتمام - Etmam' }],
    creator: 'إتمام - Etmam',
    publisher: 'إتمام - Etmam',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://etmam.com'),
    alternates: {
      canonical: url,
      languages: {
        'ar': url,
        'en': url + '?lang=en',
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: url,
      siteName: 'إتمام - Etmam',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: locale,
      type: type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

/**
 * Predefined SEO configurations for common pages
 */
export const SEO_CONFIGS = {
  HOME: {
    title: 'إتمام - خدماتك التجارية والإدارية',
    description: 'منصة إتمام الرائدة في تأسيس الشركات والخدمات الإدارية. نقدم حلول متكاملة لتأسيس وإدارة أعمالك بكفاءة عالية.',
    keywords: ['تأسيس شركات', 'خدمات إدارية', 'رخص تجارية', 'استشارات أعمال'] as const,
    url: '/',
  },
  
  ABOUT: {
    title: 'من نحن - إتمام',
    description: 'تعرف على فريق إتمام وخبرتنا في مجال تأسيس الشركات والخدمات الإدارية. نحن شريكك الموثوق لنجاح أعمالك.',
    keywords: ['فريق إتمام', 'خبرة', 'شركة تأسيس', 'خدمات مهنية'] as const,
    url: '/about',
  },
  
  SERVICES: {
    title: 'خدماتنا - إتمام',
    description: 'اكتشف مجموعة خدمات إتمام الشاملة لتأسيس الشركات وإدارة الأعمال. حلول مخصصة لاحتياجاتك التجارية.',
    keywords: ['خدمات تأسيس', 'إدارة أعمال', 'استشارات', 'حلول تجارية'] as const,
    url: '/services',
  },
  
  CONTACT: {
    title: 'تواصل معنا - إتمام',
    description: 'تواصل مع فريق إتمام للحصول على استشارة مجانية حول تأسيس شركتك أو إدارة أعمالك. نحن هنا لمساعدتك.',
    keywords: ['تواصل', 'استشارة مجانية', 'دعم العملاء', 'خدمة العملاء'] as const,
    url: '/contact',
  },
} as const;
