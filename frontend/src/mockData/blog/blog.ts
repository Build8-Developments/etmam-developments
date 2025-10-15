import { BlogPost } from '@/types';

export const blogMockData: BlogPost[] = [
  {
    id: '1',
    title: 'دليل شامل لتأسيس الشركات في المملكة العربية السعودية',
    excerpt: 'تعرف على الخطوات الكاملة لتأسيس شركتك في المملكة العربية السعودية، من المستندات المطلوبة إلى الإجراءات القانونية.',
    image: {
      url: '/blog/company-formation-guide.jpg',
      alternativeText: 'دليل تأسيس الشركات'
    },
    href: '/blog/company-formation-guide',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'أهم التراخيص التجارية المطلوبة في السعودية',
    excerpt: 'تعرف على أنواع التراخيص التجارية المختلفة والمطلوبة لممارسة الأنشطة التجارية في المملكة العربية السعودية.',
    image: {
      url: '/blog/commercial-licenses.jpg',
      alternativeText: 'التراخيص التجارية'
    },
    href: '/blog/commercial-licenses',
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'نصائح لإدارة الموارد البشرية بكفاءة',
    excerpt: 'تعرف على أفضل الممارسات في إدارة الموارد البشرية وكيفية بناء فريق عمل فعال ومتميز.',
    image: {
      url: '/blog/hr-management.jpg',
      alternativeText: 'إدارة الموارد البشرية'
    },
    href: '/blog/hr-management',
    date: '2024-01-05'
  },
  {
    id: '4',
    title: 'المحاسبة والضرائب: دليل المبتدئين',
    excerpt: 'تعرف على أساسيات المحاسبة والضرائب وكيفية إدارة أموال شركتك بطريقة صحيحة وفعالة.',
    image: {
      url: '/blog/accounting-taxes.jpg',
      alternativeText: 'المحاسبة والضرائب'
    },
    href: '/blog/accounting-taxes',
    date: '2024-01-01'
  }
];

export const blogMockDataEn: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Guide to Company Formation in Saudi Arabia',
    excerpt: 'Learn about the complete steps to establish your company in Saudi Arabia, from required documents to legal procedures.',
    image: {
      url: '/blog/company-formation-guide.jpg',
      alternativeText: 'Company formation guide'
    },
    href: '/blog/company-formation-guide',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Important Commercial Licenses Required in Saudi Arabia',
    excerpt: 'Learn about different types of commercial licenses required to practice commercial activities in Saudi Arabia.',
    image: {
      url: '/blog/commercial-licenses.jpg',
      alternativeText: 'Commercial licenses'
    },
    href: '/blog/commercial-licenses',
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'Tips for Efficient Human Resource Management',
    excerpt: 'Learn about best practices in human resource management and how to build an effective and outstanding team.',
    image: {
      url: '/blog/hr-management.jpg',
      alternativeText: 'Human resource management'
    },
    href: '/blog/hr-management',
    date: '2024-01-05'
  },
  {
    id: '4',
    title: 'Accounting and Taxes: A Beginner\'s Guide',
    excerpt: 'Learn the basics of accounting and taxes and how to manage your company\'s finances correctly and effectively.',
    image: {
      url: '/blog/accounting-taxes.jpg',
      alternativeText: 'Accounting and taxes'
    },
    href: '/blog/accounting-taxes',
    date: '2024-01-01'
  }
];
