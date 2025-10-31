export interface OfferDetail {
  documentId?: string;
  slug: string;
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
  image?: {
    url: string;
    name: string;
  };
  discount?: number;
  originalPrice?: number;
  discountedPrice?: number;
  currency?: string;
  features?: Array<{
    title: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
    icon?: {
      url: string;
      name: string;
    };
  }>;
  benefits?: Array<{
    title: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
    icon?: {
      url: string;
      name: string;
    };
  }>;
  validUntil?: string;
  termsAndConditions?: {
    ar: string;
    en: string;
  };
  callToAction?: {
    label: {
      ar: string;
      en: string;
    };
    href: string;
  };
}

export const offerDetails: OfferDetail[] = [
  {
    slug: 'offer-1',
    documentId: '1',
    title: {
      ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة',
      en: 'Establish a Human Resources Management Company with full currency'
    },
    subtitle: {
      ar: 'يوم بدينا - عروض خاصة للبداية',
      en: 'The day we started - Special offers for beginners'
    },
    description: {
      ar: `<p>استفد من عروضنا الحصرية لتأسيس شركة إدارة موارد بشرية بعملة كاملة. نحن نفتخر بجذورنا وقيمنا الأصيلة، ونقدم لك خدمات احترافية بأسعار مميزة.</p>
      <p>هذا العرض يتيح لك تأسيس شركتك بسهولة وسرعة، مع دعم كامل من فريقنا المتخصص في جميع مراحل العملية.</p>
      <p>الحد الأدنى للعرض ساري حتى نهاية الشهر الحالي، فلا تفوت الفرصة!</p>`,
      en: `<p>Take advantage of our exclusive offers to establish a human resources management company with full currency. We are proud of our roots and authentic values, and offer you professional services at competitive prices.</p>
      <p>This offer allows you to establish your company easily and quickly, with full support from our specialized team at all stages of the process.</p>
      <p>The minimum offer is valid until the end of this month, don't miss the opportunity!</p>`
    },
    image: {
      url: '/offer1.jpg',
      name: 'Offer 1'
    },
    discount: 30,
    originalPrice: 5000,
    discountedPrice: 3500,
    currency: 'SAR',
    features: [
      {
        title: {
          ar: 'تأسيس سريع',
          en: 'Quick Establishment'
        },
        description: {
          ar: 'إتمام جميع الإجراءات في وقت قياسي لا يتجاوز أسبوعين',
          en: 'Complete all procedures in record time not exceeding two weeks'
        }
      },
      {
        title: {
          ar: 'استشارات مجانية',
          en: 'Free Consultations'
        },
        description: {
          ar: 'استشارات قانونية وإدارية مجانية لمدة 3 أشهر',
          en: 'Free legal and administrative consultations for 3 months'
        }
      },
      {
        title: {
          ar: 'دعم مستمر',
          en: 'Continuous Support'
        },
        description: {
          ar: 'دعم فني وإداري متواصل على مدار الساعة',
          en: '24/7 continuous technical and administrative support'
        }
      },
      {
        title: {
          ar: 'متابعة دورية',
          en: 'Regular Follow-up'
        },
        description: {
          ar: 'متابعة دورية مع تقارير شهرية عن حالة الشركة',
          en: 'Regular follow-up with monthly reports on the company status'
        }
      }
    ],
    benefits: [
      {
        title: {
          ar: 'توفير الوقت والجهد',
          en: 'Save Time and Effort'
        },
        description: {
          ar: 'نحن نهتم بجميع الإجراءات الرسمية نيابة عنك، مما يوفر عليك الوقت والجهد',
          en: 'We handle all official procedures on your behalf, saving you time and effort'
        }
      },
      {
        title: {
          ar: 'ضمان الجودة',
          en: 'Quality Guarantee'
        },
        description: {
          ar: 'نضمن لك الحصول على أفضل الخدمات بأعلى معايير الجودة',
          en: 'We guarantee you the best services with the highest quality standards'
        }
      },
      {
        title: {
          ar: 'أسعار تنافسية',
          en: 'Competitive Prices'
        },
        description: {
          ar: 'أسعارنا تنافسية ومميزة مقارنة بالسوق المحلي',
          en: 'Our prices are competitive and distinguished compared to the local market'
        }
      },
      {
        title: {
          ar: 'خبرة واسعة',
          en: 'Wide Experience'
        },
        description: {
          ar: 'فريقنا يمتلك خبرة واسعة في تأسيس وإدارة الشركات',
          en: 'Our team has extensive experience in establishing and managing companies'
        }
      }
    ],
    validUntil: '2024-12-31',
    termsAndConditions: {
      ar: 'هذا العرض ساري حتى نهاية العام الحالي. الشروط والأحكام تخضع لقوانين المملكة العربية السعودية. العرض غير قابل للتحويل أو الاسترداد النقدي.',
      en: 'This offer is valid until the end of this year. Terms and conditions are subject to the laws of Saudi Arabia. The offer is non-transferable or refundable in cash.'
    },
    callToAction: {
      label: {
        ar: 'احصل على العرض الآن',
        en: 'Get the Offer Now'
      },
      href: '/contact'
    }
  },
  {
    slug: 'offer-2',
    documentId: '2',
    title: {
      ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة',
      en: 'Establish a Human Resources Management Company with full currency'
    },
    subtitle: {
      ar: 'صناعة فاخرة - للتميز في عالم الأعمال',
      en: 'Luxury Industry - Excellence in the business world'
    },
    description: {
      ar: `<p>عرض حصري للعملاء المميزين! تأسيس شركة إدارة موارد بشرية بألوان تليق بكل مناسباتك المهنية.</p>
      <p>هذا العرض الفاخر يتضمن خدمات متقدمة وحصرية، مع ضمان لمدة سنتين على جميع الخدمات المقدمة.</p>
      <p>اختر التميز وكن جزءاً من نخبة رجال الأعمال.</p>`,
      en: `<p>Exclusive offer for distinguished clients! Establish a human resources management company with colors suitable for all your professional occasions.</p>
      <p>This luxury offer includes advanced and exclusive services, with a two-year warranty on all services provided.</p>
      <p>Choose excellence and be part of the elite of businessmen.</p>`
    },
    image: {
      url: '/offer2.jpg',
      name: 'Offer 2'
    },
    discount: 40,
    originalPrice: 8000,
    discountedPrice: 4800,
    currency: 'SAR',
    features: [
      {
        title: {
          ar: 'خدمات فاخرة',
          en: 'Luxury Services'
        },
        description: {
          ar: 'حزمة خدمات فاخرة ومميزة تشمل جميع احتياجات شركتك',
          en: 'A luxury and distinguished service package that includes all your company needs'
        }
      },
      {
        title: {
          ar: 'ضمان سنتين',
          en: 'Two-Year Warranty'
        },
        description: {
          ar: 'ضمان شامل لمدة سنتين على جميع الخدمات المقدمة',
          en: 'Comprehensive warranty for two years on all services provided'
        }
      },
      {
        title: {
          ar: 'استشارات VIP',
          en: 'VIP Consultations'
        },
        description: {
          ar: 'استشارات حصرية مع أفضل الخبراء في المجال',
          en: 'Exclusive consultations with the best experts in the field'
        }
      },
      {
        title: {
          ar: 'إدارة شاملة',
          en: 'Comprehensive Management'
        },
        description: {
          ar: 'إدارة شاملة لجميع جوانب الشركة من الموارد البشرية إلى المالية',
          en: 'Comprehensive management of all aspects of the company from human resources to finance'
        }
      }
    ],
    benefits: [
      {
        title: {
          ar: 'تميز في السوق',
          en: 'Market Excellence'
        },
        description: {
          ar: 'ضع قدمك في السوق كشركة مميزة ورائدة',
          en: 'Establish yourself in the market as a distinguished and leading company'
        }
      },
      {
        title: {
          ar: 'شبكة علاقات واسعة',
          en: 'Wide Network'
        },
        description: {
          ar: 'الوصول إلى شبكة علاقات واسعة مع كبار رجال الأعمال',
          en: 'Access to a wide network of relationships with senior businessmen'
        }
      },
      {
        title: {
          ar: 'دعم استشاري متقدم',
          en: 'Advanced Advisory Support'
        },
        description: {
          ar: 'دعم استشاري متقدم من أفضل الخبراء في المملكة',
          en: 'Advanced advisory support from the best experts in the Kingdom'
        }
      }
    ],
    validUntil: '2024-12-31',
    termsAndConditions: {
      ar: 'هذا العرض الفاخر يشمل ضمان لمدة سنتين. الشروط والأحكام خاصة بهذا العرض. غير قابل للاسترداد أو التحويل.',
      en: 'This luxury offer includes a two-year warranty. Terms and conditions are specific to this offer. Non-refundable or transferable.'
    },
    callToAction: {
      label: {
        ar: 'احصل على العرض الفاخر',
        en: 'Get the Luxury Offer'
      },
      href: '/contact'
    }
  },
  {
    slug: 'offer-3',
    documentId: '3',
    title: {
      ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة',
      en: 'Establish a Human Resources Management Company with full currency'
    },
    subtitle: {
      ar: 'صناعة فاخرة - ضمان مدى الحياة',
      en: 'Luxury Industry - Lifetime Warranty'
    },
    description: {
      ar: `<p>العرض الأكثر تميزاً! تأسيس شركة مع ضمان مدى الحياة على جميع الخدمات.</p>
      <p>هذا العرض المميز يتضمن جميع الخدمات الفاخرة بالإضافة إلى ضمان شامل مدى الحياة.</p>
      <p>كن من النخبة واختر أفضل ما تقدمه إتمام.</p>`,
      en: `<p>The most distinguished offer! Company establishment with lifetime warranty on all services.</p>
      <p>This distinguished offer includes all luxury services plus a comprehensive lifetime warranty.</p>
      <p>Be among the elite and choose the best that Etmam offers.</p>`
    },
    image: {
      url: '/offer.jpg',
      name: 'Offer 3'
    },
    discount: 50,
    originalPrice: 12000,
    discountedPrice: 6000,
    currency: 'SAR',
    features: [
      {
        title: {
          ar: 'خدمات شاملة',
          en: 'Comprehensive Services'
        },
        description: {
          ar: 'جميع الخدمات التجارية والإدارية في حزمة واحدة شاملة',
          en: 'All commercial and administrative services in one comprehensive package'
        }
      },
      {
        title: {
          ar: 'ضمان مدى الحياة',
          en: 'Lifetime Warranty'
        },
        description: {
          ar: 'ضمان شامل مدى الحياة على جميع الخدمات والاستشارات',
          en: 'Comprehensive lifetime warranty on all services and consultations'
        }
      },
      {
        title: {
          ar: 'فريق مخصص',
          en: 'Dedicated Team'
        },
        description: {
          ar: 'فريق عمل مخصص لشركتك على مدار الساعة',
          en: 'A dedicated work team for your company 24/7'
        }
      },
      {
        title: {
          ar: 'استشارات استراتيجية',
          en: 'Strategic Consultations'
        },
        description: {
          ar: 'استشارات استراتيجية مع كبار المستشارين',
          en: 'Strategic consultations with senior consultants'
        }
      },
      {
        title: {
          ar: 'تحديثات مستمرة',
          en: 'Continuous Updates'
        },
        description: {
          ar: 'تحديثات مستمرة على جميع القوانين واللوائح',
          en: 'Continuous updates on all laws and regulations'
        }
      }
    ],
    benefits: [
      {
        title: {
          ar: 'استثمار طويل المدى',
          en: 'Long-term Investment'
        },
        description: {
          ar: 'استثمار ذكي يضمن لك النمو والاستمرارية على المدى الطويل',
          en: 'A smart investment that ensures growth and continuity in the long term'
        }
      },
      {
        title: {
          ar: 'راحة البال',
          en: 'Peace of Mind'
        },
        description: {
          ar: 'اطمئن على مستقبل شركتك مع ضمان مدى الحياة',
          en: 'Rest assured about your company future with a lifetime warranty'
        }
      },
      {
        title: {
          ar: 'تميز مستمر',
          en: 'Continuous Excellence'
        },
        description: {
          ar: 'تميز مستمر في السوق مع أفضل الخدمات والاستشارات',
          en: 'Continuous excellence in the market with the best services and consultations'
        }
      },
      {
        title: {
          ar: 'شريك استراتيجي',
          en: 'Strategic Partner'
        },
        description: {
          ar: 'كن شريكاً استراتيجياً مع إتمام في رحلتك نحو النجاح',
          en: 'Be a strategic partner with Etmam in your journey towards success'
        }
      }
    ],
    validUntil: '2024-12-31',
    termsAndConditions: {
      ar: 'هذا العرض المميز يشمل ضمان مدى الحياة. الشروط والأحكام مفصلة في العقد. غير قابل للاسترداد.',
      en: 'This distinguished offer includes a lifetime warranty. Terms and conditions are detailed in the contract. Non-refundable.'
    },
    callToAction: {
      label: {
        ar: 'احصل على العرض المميز',
        en: 'Get the Distinguished Offer'
      },
      href: '/contact'
    }
  }
];

