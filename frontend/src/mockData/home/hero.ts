import { HeroProps } from '@/types';

export const heroMockData: HeroProps = {
  title: 'إتمام - منصة خدماتك التجارية والإدارية',
  subtitle: 'نحن هنا لمساعدتك في تأسيس وإدارة أعمالك بكفاءة واحترافية',
  description: 'في إتمام نقدم مجموعة شاملة من الخدمات التجارية والإدارية المصممة لتسهيل رحلتك في عالم الأعمال. من تأسيس الشركات إلى إدارة الموارد البشرية، نحن شريكك الموثوق.',
  primaryButton: {
    label: 'ابدأ الآن',
    href: '/services'
  },
  secondaryButton: {
    label: 'تعرف علينا',
    href: '/about'
  },
  backgroundImage: {
    url: '/hero-bg.jpg',
    alternativeText: 'خلفية الصفحة الرئيسية'
  },
  personImage: {
    url: '/hero-person.png',
    alternativeText: 'صورة شخصية'
  }
};

export const heroMockDataEn: HeroProps = {
  title: 'Etmam - Your Commercial and Administrative Services Platform',
  subtitle: 'We are here to help you establish and manage your business efficiently and professionally',
  description: 'At Etmam, we provide a comprehensive range of commercial and administrative services designed to facilitate your journey in the business world. From company formation to human resource management, we are your trusted partner.',
  primaryButton: {
    label: 'Get Started',
    href: '/services'
  },
  secondaryButton: {
    label: 'About Us',
    href: '/about'
  },
  backgroundImage: {
    url: '/hero-bg.jpg',
    alternativeText: 'Homepage background'
  },
  personImage: {
    url: '/hero-person.png',
    alternativeText: 'Person image'
  }
};
