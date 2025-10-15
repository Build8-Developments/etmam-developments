import { HeaderProps } from '@/types';

export const headerMockData: HeaderProps = {
  logo: {
    url: '/logo/etmam-logo.png',
    alternativeText: 'شعار إتمام'
  },
  navigationItems: [
    {
      label: 'الرئيسية',
      href: '/'
    },
    {
      label: 'الخدمات',
      href: '/services'
    },
    {
      label: 'من نحن',
      href: '/about'
    },
    {
      label: 'المدونة',
      href: '/blog'
    },
    {
      label: 'تواصل معنا',
      href: '/contact'
    }
  ],
  contactButton: {
    label: 'احجز استشارة',
    href: '/contact'
  }
};

export const headerMockDataEn: HeaderProps = {
  logo: {
    url: '/logo/etmam-logo.png',
    alternativeText: 'Etmam logo'
  },
  navigationItems: [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Services',
      href: '/services'
    },
    {
      label: 'About Us',
      href: '/about'
    },
    {
      label: 'Blog',
      href: '/blog'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ],
  contactButton: {
    label: 'Book Consultation',
    href: '/contact'
  }
};
