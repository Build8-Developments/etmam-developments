export interface FooterProps {
  logo: {
    url: string;
    alternativeText: string;
  };
  description: string;
  quickLinks: {
    label: string;
    href: string;
  }[];
  services: {
    label: string;
    href: string;
  }[];
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

export const footerMockData: FooterProps = {
  logo: {
    url: '/logo/etmam-logo-white.png',
    alternativeText: 'شعار إتمام'
  },
  description: 'إتمام - منصة خدماتك التجارية والإدارية. نساعدك في تأسيس وإدارة أعمالك بكفاءة واحترافية.',
  quickLinks: [
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
      label: 'تواصل معنا',
      href: '/contact'
    }
  ],
  services: [
    {
      label: 'تأسيس الشركات',
      href: '/services/company-formation'
    },
    {
      label: 'استخراج التراخيص',
      href: '/services/license-extraction'
    },
    {
      label: 'الاستشارات القانونية',
      href: '/services/legal-consultations'
    },
    {
      label: 'المحاسبة والضرائب',
      href: '/services/accounting-taxes'
    }
  ],
  contactInfo: {
    address: 'الرياض، المملكة العربية السعودية',
    phone: '+966 11 123 4567',
    email: 'info@etmam.com'
  },
  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/etmam',
      icon: 'twitter'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/company/etmam',
      icon: 'linkedin'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/etmam',
      icon: 'instagram'
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/etmam',
      icon: 'youtube'
    }
  ],
  copyright: '© 2024 إتمام. جميع الحقوق محفوظة.'
};

export const footerMockDataEn: FooterProps = {
  logo: {
    url: '/logo/etmam-logo-white.png',
    alternativeText: 'Etmam logo'
  },
  description: 'Etmam - Your Commercial and Administrative Services Platform. We help you establish and manage your business efficiently and professionally.',
  quickLinks: [
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
      label: 'Contact',
      href: '/contact'
    }
  ],
  services: [
    {
      label: 'Company Formation',
      href: '/services/company-formation'
    },
    {
      label: 'License Extraction',
      href: '/services/license-extraction'
    },
    {
      label: 'Legal Consultations',
      href: '/services/legal-consultations'
    },
    {
      label: 'Accounting & Taxes',
      href: '/services/accounting-taxes'
    }
  ],
  contactInfo: {
    address: 'Riyadh, Saudi Arabia',
    phone: '+966 11 123 4567',
    email: 'info@etmam.com'
  },
  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/etmam',
      icon: 'twitter'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/company/etmam',
      icon: 'linkedin'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/etmam',
      icon: 'instagram'
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/etmam',
      icon: 'youtube'
    }
  ],
  copyright: '© 2024 Etmam. All rights reserved.'
};
