import { AboutSectionProps } from '@/types';

export const homeAboutMockData: AboutSectionProps = {
  title: 'لماذا إتمام؟',
  subtitle: 'نحن نقدم حلولاً شاملة ومتكاملة لجميع احتياجاتك التجارية',
  description: 'مع سنوات من الخبرة في مجال الخدمات التجارية والإدارية، نقدم لك أفضل الحلول التي تساعدك على النمو والتطور في عالم الأعمال.',
  features: [
    {
      id: '1',
      title: 'خبرة واسعة',
      description: 'أكثر من 10 سنوات في مجال الخدمات التجارية',
      icon: 'experience'
    },
    {
      id: '2',
      title: 'خدمة متميزة',
      description: 'فريق متخصص يقدم خدمة عملاء على أعلى مستوى',
      icon: 'service'
    },
    {
      id: '3',
      title: 'أسعار تنافسية',
      description: 'عروض وأسعار تنافسية تناسب جميع الميزانيات',
      icon: 'pricing'
    },
    {
      id: '4',
      title: 'دعم مستمر',
      description: 'نقدم الدعم والمتابعة المستمرة لعملائنا',
      icon: 'support'
    }
  ],
  image: {
    url: '/about-image.jpg',
    alternativeText: 'صورة عن الشركة'
  }
};

export const homeAboutMockDataEn: AboutSectionProps = {
  title: 'Why Etmam?',
  subtitle: 'We provide comprehensive and integrated solutions for all your business needs',
  description: 'With years of experience in commercial and administrative services, we provide you with the best solutions that help you grow and develop in the business world.',
  features: [
    {
      id: '1',
      title: 'Extensive Experience',
      description: 'More than 10 years in commercial services',
      icon: 'experience'
    },
    {
      id: '2',
      title: 'Excellent Service',
      description: 'Specialized team providing top-level customer service',
      icon: 'service'
    },
    {
      id: '3',
      title: 'Competitive Prices',
      description: 'Competitive offers and prices suitable for all budgets',
      icon: 'pricing'
    },
    {
      id: '4',
      title: 'Continuous Support',
      description: 'We provide continuous support and follow-up for our clients',
      icon: 'support'
    }
  ],
  image: {
    url: '/about-image.jpg',
    alternativeText: 'About company image'
  }
};
