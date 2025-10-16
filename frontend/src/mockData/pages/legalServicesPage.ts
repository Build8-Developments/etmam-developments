export interface LegalServicesPageContent {
  hero: {
    title: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
    searchPlaceholder: {
      ar: string;
      en: string;
    };
  };
  companies: {
    viewDetailsButton: {
      ar: string;
      en: string;
    };
    noResultsMessage: {
      ar: string;
      en: string;
    };
  };
}

export interface LegalCompany {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  logo: string;
  servicesCount: number;
  isHighlighted: boolean;
}

export const legalServicesPageContent: LegalServicesPageContent = {
  hero: {
    title: {
      ar: 'الخدمات القانونية المتخصصة',
      en: 'Specialized Legal Services'
    },
    description: {
      ar: 'في إتمام، نوفر لك مجموعة شاملة من الخدمات القانونية، مصممة لتبسيط رحلتك وتحقيق أهدافك بكفاءة',
      en: 'At Etmam, we provide you with a comprehensive set of legal services, designed to simplify your journey and achieve your goals efficiently'
    },
    searchPlaceholder: {
      ar: 'ابحث عن الخدمات القانونية...',
      en: 'Search for legal services...'
    }
  },
  companies: {
    viewDetailsButton: {
      ar: 'عرض التفاصيل',
      en: 'View Details'
    },
    noResultsMessage: {
      ar: 'لم يتم العثور على خدمات مطابقة',
      en: 'No matching services found'
    }
  }
};

export const legalCompanies: LegalCompany[] = [
  {
    id: 'ministry-industry',
    name: {
      ar: 'وزارة الصناعة والثروة المعدنية',
      en: 'Ministry of Industry and Mineral Resources'
    },
    description: {
      ar: 'استكشف 11 خدمة تقدمها وزارة الصناعة والثروة المعدنية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك',
      en: 'Explore 11 services offered by the Ministry of Industry and Mineral Resources, we provide comprehensive support for all your needs'
    },
    logo: '/images/logos/logo.png',
    servicesCount: 11,
    isHighlighted: true
  },
  {
    id: 'ministry-commerce',
    name: {
      ar: 'وزارة التجارة',
      en: 'Ministry of Commerce'
    },
    description: {
      ar: 'استكشف 10 خدمات تقدمها وزارة التجارة، نحن نقدم دعمًا شاملاً لجميع احتياجاتك التجارية',
      en: 'Explore 10 services offered by the Ministry of Commerce, we provide comprehensive support for all your commercial needs'
    },
    logo: '/images/logos/logo.png',
    servicesCount: 10,
    isHighlighted: false
  },
  {
    id: 'ministry-finance',
    name: {
      ar: 'وزارة المالية',
      en: 'Ministry of Finance'
    },
    description: {
      ar: 'استكشف 8 خدمات تقدمها وزارة المالية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك المالية',
      en: 'Explore 8 services offered by the Ministry of Finance, we provide comprehensive support for all your financial needs'
    },
    logo: '/images/logos/logo.png',
    servicesCount: 8,
    isHighlighted: false
  },
  {
    id: 'ministry-labor',
    name: {
      ar: 'وزارة الموارد البشرية والتنمية الاجتماعية',
      en: 'Ministry of Human Resources and Social Development'
    },
    description: {
      ar: 'استكشف 12 خدمة تقدمها وزارة الموارد البشرية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك الإدارية',
      en: 'Explore 12 services offered by the Ministry of Human Resources, we provide comprehensive support for all your administrative needs'
    },
    logo: '/images/logos/logo.png',
    servicesCount: 12,
    isHighlighted: false
  },
  {
    id: 'ministry-health',
    name: {
      ar: 'وزارة الصحة',
      en: 'Ministry of Health'
    },
    description: {
      ar: 'استكشف 9 خدمات تقدمها وزارة الصحة، نحن نقدم دعمًا شاملاً لجميع احتياجاتك الصحية',
      en: 'Explore 9 services offered by the Ministry of Health, we provide comprehensive support for all your health needs'
    },
    logo: '/images/logos/logo.png',
    servicesCount: 9,
    isHighlighted: false
  },
  {
    id: 'ministry-education',
    name: {
      ar: 'وزارة التعليم',
      en: 'Ministry of Education'
    },
    description: {
      ar: 'استكشف 7 خدمات تقدمها وزارة التعليم، نحن نقدم دعمًا شاملاً لجميع احتياجاتك التعليمية',
      en: 'Explore 7 services offered by the Ministry of Education, we provide comprehensive support for all your educational needs'
    },
    logo: '/images/logos/logo.png',
    servicesCount: 7,
    isHighlighted: false
  }
];
