export interface PackageFeature {
  ar: string;
  en: string;
}

export interface Package {
  name: {
    ar: string;
    en: string;
  };
  price: {
    ar: string;
    en: string;
  };
  features: PackageFeature[];
  popular: boolean;
}

export interface Offer {
  id: number;
  slug?: string;
  title: {
    ar: string;
    en: string;
  };
  subtitle: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  offerText: {
    ar: string;
    en: string;
  };
  backgroundImage: string;
  type: string;
  number: string;
  warranty?: {
    ar: string;
    en: string;
  };
}

export const packages: Package[] = [
  {
    name: {
      ar: 'الباقة الأساسية',
      en: 'Basic Package'
    },
    price: {
      ar: '500 ريال',
      en: '500 SAR'
    },
    features: [
      {
        ar: 'تأسيس شركة',
        en: 'Company Formation'
      },
      {
        ar: 'استخراج السجل التجاري',
        en: 'Commercial Registration'
      },
      {
        ar: 'استخراج الرخص المطلوبة',
        en: 'Required Licenses'
      },
      {
        ar: 'دعم فني لمدة شهر',
        en: 'Technical Support for 1 Month'
      }
    ],
    popular: false
  },
  {
    name: {
      ar: 'الباقة المتقدمة',
      en: 'Advanced Package'
    },
    price: {
      ar: '1000 ريال',
      en: '1000 SAR'
    },
    features: [
      {
        ar: 'جميع خدمات الباقة الأساسية',
        en: 'All Basic Package Services'
      },
      {
        ar: 'استشارات قانونية',
        en: 'Legal Consultations'
      },
      {
        ar: 'إدارة المحاسبة',
        en: 'Accounting Management'
      },
      {
        ar: 'دعم فني لمدة 3 أشهر',
        en: 'Technical Support for 3 Months'
      },
      {
        ar: 'خدمات تسويقية',
        en: 'Marketing Services'
      }
    ],
    popular: true
  },
  {
    name: {
      ar: 'الباقة الشاملة',
      en: 'Comprehensive Package'
    },
    price: {
      ar: '2000 ريال',
      en: '2000 SAR'
    },
    features: [
      {
        ar: 'جميع خدمات الباقة المتقدمة',
        en: 'All Advanced Package Services'
      },
      {
        ar: 'استشارات إدارية شاملة',
        en: 'Comprehensive Administrative Consultations'
      },
      {
        ar: 'إدارة الموارد البشرية',
        en: 'Human Resources Management'
      },
      {
        ar: 'دعم فني لمدة سنة',
        en: 'Technical Support for 1 Year'
      },
      {
        ar: 'خدمات تسويقية متقدمة',
        en: 'Advanced Marketing Services'
      },
      {
        ar: 'متابعة دورية',
        en: 'Regular Follow-up'
      }
    ],
    popular: false
  }
];

export const offers: Offer[] = [
  {
    id: 1,
    slug: 'offer-1',
    title: {
      ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة',
      en: 'Establish a Human Resources Management Company with full currency'
    },
    subtitle: {
      ar: 'يوم بدينا',
      en: 'The day we started'
    },
    description: {
      ar: 'نفتخر بجذورنا',
      en: 'We are proud of our roots'
    },
    offerText: {
      ar: 'الحد الأدنى ساري حتى 30 سبتمبر',
      en: 'Minimum valid until September 30'
    },
    backgroundImage: '/offer1.jpg',
    type: 'heritage',
    number: '93'
  },
  {
    id: 2,
    slug: 'offer-2',
    title: {
      ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة',
      en: 'Establish a Human Resources Management Company with full currency'
    },
    subtitle: {
      ar: 'صناعة فاخرة',
      en: 'Luxury Industry'
    },
    description: {
      ar: 'بألوان تليق كل بكل مناسباتك!',
      en: 'With colors suitable for all your occasions!'
    },
    offerText: {
      ar: 'الحد الأدنى ساري حتى 30 سبتمبر',
      en: 'Minimum valid until September 30'
    },
    backgroundImage: '/offer2.jpg',
    type: 'luxury',
    warranty: {
      ar: 'ضمان سنتين',
      en: 'Two-year warranty'
    },
    number: '269'
  },
  {
    id: 3,
    slug: 'offer-3',
    title: {
      ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة',
      en: 'Establish a Human Resources Management Company with full currency'
    },
    subtitle: {
      ar: 'صناعة فاخرة',
      en: 'Luxury Industry'
    },
    description: {
      ar: 'بألوان تليق كل بكل مناسباتك!',
      en: 'With colors suitable for all your occasions!'
    },
    offerText: {
      ar: 'الحد الأدنى ساري حتى 30 سبتمبر',
      en: 'Minimum valid until September 30'
    },
    backgroundImage: '/offer.jpg',
    type: 'premium',
    warranty: {
      ar: 'ضمان مدى الحياة',
      en: 'Lifetime warranty'
    },
    number: '500'
  }
];
