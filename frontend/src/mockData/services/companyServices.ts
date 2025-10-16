export interface CompanyService {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  price: {
    ar: string;
    en: string;
  };
  duration: {
    ar: string;
    en: string;
  };
  icon: string;
}

export interface CompanyData {
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  logo: string;
  services: CompanyService[];
}

export const companyServicesData: Record<string, CompanyData> = {
  'ministry-industry': {
    name: {
      ar: 'وزارة الصناعة والثروة المعدنية',
      en: 'Ministry of Industry and Mineral Resources'
    },
    description: {
      ar: 'استكشف 11 خدمة تقدمها وزارة الصناعة والثروة المعدنية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك',
      en: 'Explore 11 services offered by the Ministry of Industry and Mineral Resources, we provide comprehensive support for all your needs'
    },
    logo: '/images/logos/logo.png',
    services: [
      {
        id: 'company-formation',
        title: {
          ar: 'تأسيس الشركات',
          en: 'Company Formation'
        },
        description: {
          ar: 'خدمة متكاملة لتأسيس شركتك من الألف إلى الياء مع جميع المستندات المطلوبة',
          en: 'Comprehensive service to establish your company from A to Z with all required documents'
        },
        price: {
          ar: 'يبدأ من 2000 ريال',
          en: 'Starting from 2000 SAR'
        },
        duration: {
          ar: 'من 3 إلى 5 أيام عمل',
          en: '3 to 5 business days'
        },
        icon: 'building'
      },
      {
        id: 'license-extraction',
        title: {
          ar: 'استخراج التراخيص',
          en: 'License Extraction'
        },
        description: {
          ar: 'نستخرج جميع أنواع التراخيص التجارية والصناعية بسرعة ودقة',
          en: 'We extract all types of commercial and industrial licenses quickly and accurately'
        },
        price: {
          ar: 'يبدأ من 1500 ريال',
          en: 'Starting from 1500 SAR'
        },
        duration: {
          ar: 'من 2 إلى 4 أيام عمل',
          en: '2 to 4 business days'
        },
        icon: 'license'
      },
      {
        id: 'legal-consultation',
        title: {
          ar: 'الاستشارات القانونية',
          en: 'Legal Consultations'
        },
        description: {
          ar: 'استشارات قانونية متخصصة في مجال الأعمال والتجارة',
          en: 'Specialized legal consultations in business and commerce'
        },
        price: {
          ar: 'يبدأ من 500 ريال',
          en: 'Starting from 500 SAR'
        },
        duration: {
          ar: 'ساعة واحدة',
          en: '1 hour'
        },
        icon: 'consulting'
      },
      {
        id: 'contracts-agreements',
        title: {
          ar: 'العقود والاتفاقيات',
          en: 'Contracts & Agreements'
        },
        description: {
          ar: 'إعداد ومراجعة العقود والاتفاقيات التجارية',
          en: 'Preparation and review of commercial contracts and agreements'
        },
        price: {
          ar: 'يبدأ من 1000 ريال',
          en: 'Starting from 1000 SAR'
        },
        duration: {
          ar: 'من 1 إلى 3 أيام عمل',
          en: '1 to 3 business days'
        },
        icon: 'document'
      },
      {
        id: 'trademark-registration',
        title: {
          ar: 'تسجيل العلامة التجارية',
          en: 'Trademark Registration'
        },
        description: {
          ar: 'تسجيل وحماية العلامة التجارية الخاصة بك',
          en: 'Registration and protection of your trademark'
        },
        price: {
          ar: 'يبدأ من 1200 ريال',
          en: 'Starting from 1200 SAR'
        },
        duration: {
          ar: 'من 5 إلى 7 أيام عمل',
          en: '5 to 7 business days'
        },
        icon: 'trademark'
      },
      {
        id: 'commercial-register',
        title: {
          ar: 'السجل التجاري',
          en: 'Commercial Register'
        },
        description: {
          ar: 'تسجيل وتجديد السجل التجاري بجميع الإجراءات المطلوبة',
          en: 'Registration and renewal of commercial register with all required procedures'
        },
        price: {
          ar: 'يبدأ من 800 ريال',
          en: 'Starting from 800 SAR'
        },
        duration: {
          ar: 'من 1 إلى 2 أيام عمل',
          en: '1 to 2 business days'
        },
        icon: 'document'
      },
      {
        id: 'industrial-license',
        title: {
          ar: 'الترخيص الصناعي',
          en: 'Industrial License'
        },
        description: {
          ar: 'استخراج التراخيص الصناعية للمصانع والمنشآت الصناعية',
          en: 'Extraction of industrial licenses for factories and industrial facilities'
        },
        price: {
          ar: 'يبدأ من 3000 ريال',
          en: 'Starting from 3000 SAR'
        },
        duration: {
          ar: 'من 7 إلى 10 أيام عمل',
          en: '7 to 10 business days'
        },
        icon: 'factory'
      },
      {
        id: 'investment-license',
        title: {
          ar: 'رخصة الاستثمار',
          en: 'Investment License'
        },
        description: {
          ar: 'استخراج رخص الاستثمار للمشاريع الاستثمارية الكبيرة',
          en: 'Extraction of investment licenses for large investment projects'
        },
        price: {
          ar: 'يبدأ من 5000 ريال',
          en: 'Starting from 5000 SAR'
        },
        duration: {
          ar: 'من 10 إلى 15 يوم عمل',
          en: '10 to 15 business days'
        },
        icon: 'investment'
      },
      {
        id: 'export-import-license',
        title: {
          ar: 'رخصة التصدير والاستيراد',
          en: 'Export/Import License'
        },
        description: {
          ar: 'استخراج رخص التصدير والاستيراد للسلع والمنتجات',
          en: 'Extraction of export/import licenses for goods and products'
        },
        price: {
          ar: 'يبدأ من 1800 ريال',
          en: 'Starting from 1800 SAR'
        },
        duration: {
          ar: 'من 3 إلى 5 أيام عمل',
          en: '3 to 5 business days'
        },
        icon: 'shipping'
      },
      {
        id: 'quality-certification',
        title: {
          ar: 'شهادة الجودة',
          en: 'Quality Certification'
        },
        description: {
          ar: 'الحصول على شهادات الجودة والمعايير الدولية',
          en: 'Obtaining quality certificates and international standards'
        },
        price: {
          ar: 'يبدأ من 2500 ريال',
          en: 'Starting from 2500 SAR'
        },
        duration: {
          ar: 'من 5 إلى 8 أيام عمل',
          en: '5 to 8 business days'
        },
        icon: 'certificate'
      },
      {
        id: 'environmental-permit',
        title: {
          ar: 'الترخيص البيئي',
          en: 'Environmental Permit'
        },
        description: {
          ar: 'استخراج التراخيص البيئية للمشاريع الصناعية',
          en: 'Extraction of environmental permits for industrial projects'
        },
        price: {
          ar: 'يبدأ من 2200 ريال',
          en: 'Starting from 2200 SAR'
        },
        duration: {
          ar: 'من 6 إلى 9 أيام عمل',
          en: '6 to 9 business days'
        },
        icon: 'environment'
      }
    ]
  },
  'ministry-commerce': {
    name: {
      ar: 'وزارة التجارة',
      en: 'Ministry of Commerce'
    },
    description: {
      ar: 'استكشف 10 خدمات تقدمها وزارة التجارة، نحن نقدم دعمًا شاملاً لجميع احتياجاتك التجارية',
      en: 'Explore 10 services offered by the Ministry of Commerce, we provide comprehensive support for all your commercial needs'
    },
    logo: '/images/logos/logo.png',
    services: [
      {
        id: 'commercial-register',
        title: {
          ar: 'السجل التجاري',
          en: 'Commercial Register'
        },
        description: {
          ar: 'تسجيل وتجديد السجل التجاري بجميع الإجراءات المطلوبة',
          en: 'Registration and renewal of commercial register with all required procedures'
        },
        price: {
          ar: 'يبدأ من 800 ريال',
          en: 'Starting from 800 SAR'
        },
        duration: {
          ar: 'من 1 إلى 2 أيام عمل',
          en: '1 to 2 business days'
        },
        icon: 'document'
      },
      {
        id: 'trademark-registration',
        title: {
          ar: 'تسجيل العلامة التجارية',
          en: 'Trademark Registration'
        },
        description: {
          ar: 'تسجيل وحماية العلامة التجارية الخاصة بك',
          en: 'Registration and protection of your trademark'
        },
        price: {
          ar: 'يبدأ من 1200 ريال',
          en: 'Starting from 1200 SAR'
        },
        duration: {
          ar: 'من 5 إلى 7 أيام عمل',
          en: '5 to 7 business days'
        },
        icon: 'trademark'
      },
      {
        id: 'commercial-license',
        title: {
          ar: 'الرخصة التجارية',
          en: 'Commercial License'
        },
        description: {
          ar: 'استخراج الرخص التجارية لجميع الأنشطة التجارية',
          en: 'Extraction of commercial licenses for all commercial activities'
        },
        price: {
          ar: 'يبدأ من 1500 ريال',
          en: 'Starting from 1500 SAR'
        },
        duration: {
          ar: 'من 3 إلى 5 أيام عمل',
          en: '3 to 5 business days'
        },
        icon: 'license'
      },
      {
        id: 'franchise-registration',
        title: {
          ar: 'تسجيل الامتياز التجاري',
          en: 'Franchise Registration'
        },
        description: {
          ar: 'تسجيل الامتيازات التجارية والعلامات التجارية',
          en: 'Registration of commercial franchises and trademarks'
        },
        price: {
          ar: 'يبدأ من 2000 ريال',
          en: 'Starting from 2000 SAR'
        },
        duration: {
          ar: 'من 5 إلى 7 أيام عمل',
          en: '5 to 7 business days'
        },
        icon: 'franchise'
      },
      {
        id: 'import-export-permit',
        title: {
          ar: 'تصريح الاستيراد والتصدير',
          en: 'Import/Export Permit'
        },
        description: {
          ar: 'استخراج تصاريح الاستيراد والتصدير للسلع',
          en: 'Extraction of import/export permits for goods'
        },
        price: {
          ar: 'يبدأ من 1000 ريال',
          en: 'Starting from 1000 SAR'
        },
        duration: {
          ar: 'من 2 إلى 4 أيام عمل',
          en: '2 to 4 business days'
        },
        icon: 'shipping'
      },
      {
        id: 'consumer-protection',
        title: {
          ar: 'حماية المستهلك',
          en: 'Consumer Protection'
        },
        description: {
          ar: 'خدمات حماية المستهلك وحل النزاعات التجارية',
          en: 'Consumer protection services and commercial dispute resolution'
        },
        price: {
          ar: 'يبدأ من 500 ريال',
          en: 'Starting from 500 SAR'
        },
        duration: {
          ar: 'من 1 إلى 3 أيام عمل',
          en: '1 to 3 business days'
        },
        icon: 'protection'
      },
      {
        id: 'market-analysis',
        title: {
          ar: 'تحليل السوق',
          en: 'Market Analysis'
        },
        description: {
          ar: 'تحليل الأسواق التجارية والتقارير الاقتصادية',
          en: 'Analysis of commercial markets and economic reports'
        },
        price: {
          ar: 'يبدأ من 3000 ريال',
          en: 'Starting from 3000 SAR'
        },
        duration: {
          ar: 'من 7 إلى 10 أيام عمل',
          en: '7 to 10 business days'
        },
        icon: 'analysis'
      },
      {
        id: 'commercial-disputes',
        title: {
          ar: 'حل النزاعات التجارية',
          en: 'Commercial Disputes Resolution'
        },
        description: {
          ar: 'حل النزاعات التجارية والتحكيم التجاري',
          en: 'Resolution of commercial disputes and commercial arbitration'
        },
        price: {
          ar: 'يبدأ من 2500 ريال',
          en: 'Starting from 2500 SAR'
        },
        duration: {
          ar: 'من 5 إلى 8 أيام عمل',
          en: '5 to 8 business days'
        },
        icon: 'disputes'
      },
      {
        id: 'commercial-consultation',
        title: {
          ar: 'الاستشارات التجارية',
          en: 'Commercial Consultations'
        },
        description: {
          ar: 'استشارات تجارية متخصصة في القوانين التجارية',
          en: 'Specialized commercial consultations in commercial laws'
        },
        price: {
          ar: 'يبدأ من 800 ريال',
          en: 'Starting from 800 SAR'
        },
        duration: {
          ar: 'ساعة واحدة',
          en: '1 hour'
        },
        icon: 'consulting'
      },
      {
        id: 'commercial-contracts',
        title: {
          ar: 'العقود التجارية',
          en: 'Commercial Contracts'
        },
        description: {
          ar: 'إعداد ومراجعة العقود التجارية والاتفاقيات',
          en: 'Preparation and review of commercial contracts and agreements'
        },
        price: {
          ar: 'يبدأ من 1500 ريال',
          en: 'Starting from 1500 SAR'
        },
        duration: {
          ar: 'من 2 إلى 4 أيام عمل',
          en: '2 to 4 business days'
        },
        icon: 'contracts'
      }
    ]
  }
  // يمكن إضافة المزيد من الوزارات هنا
};
