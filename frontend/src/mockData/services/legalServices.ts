export interface LegalService {
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
  companyName: {
    ar: string;
    en: string;
  };
  features: {
    ar: string[];
    en: string[];
  };
  requirements: {
    ar: string[];
    en: string[];
  };
  steps: {
    title: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
    icon: string;
  }[];
  benefits: {
    ar: string[];
    en: string[];
  };
  faq: {
    question: {
      ar: string;
      en: string;
    };
    answer: {
      ar: string;
      en: string;
    };
  }[];
}

export const legalServicesData = {
  'ministry-industry': {
    'company-formation': {
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
      icon: 'building',
      companyName: {
        ar: 'وزارة الصناعة والثروة المعدنية',
        en: 'Ministry of Industry and Mineral Resources'
      },
      features: {
        ar: [
          'إعداد جميع المستندات المطلوبة',
          'تسجيل الشركة في السجل التجاري',
          'استخراج الرخص اللازمة',
          'فتح الحساب البنكي',
          'استشارات قانونية مجانية'
        ],
        en: [
          'Preparation of all required documents',
          'Company registration in commercial register',
          'Extraction of necessary licenses',
          'Bank account opening',
          'Free legal consultations'
        ]
      },
      requirements: {
        ar: [
          'نسخة من الهوية الوطنية أو الإقامة',
          'بيانات الشركاء (في حال تأسيس شركة)',
          'العنوان الوطني',
          'اسم تجاري مقترح',
          'رأس المال المطلوب'
        ],
        en: [
          'Copy of national ID or residence',
          'Partners data (in case of company formation)',
          'National address',
          'Proposed trade name',
          'Required capital'
        ]
      },
      steps: [
        {
          title: {
            ar: 'تحديد نوع الشركة',
            en: 'Determine Company Type'
          },
          description: {
            ar: 'نحدد نوع الشركة المناسب لنشاطك التجاري',
            en: 'We determine the appropriate company type for your business activity'
          },
          icon: 'company-type'
        },
        {
          title: {
            ar: 'حجز الاسم التجاري',
            en: 'Reserve Trade Name'
          },
          description: {
            ar: 'نحجز الاسم التجاري المطلوب من وزارة التجارة',
            en: 'We reserve the required trade name from the Ministry of Commerce'
          },
          icon: 'name-reservation'
        },
        {
          title: {
            ar: 'إعداد المستندات',
            en: 'Prepare Documents'
          },
          description: {
            ar: 'نعد جميع المستندات المطلوبة للتأسيس',
            en: 'We prepare all required documents for establishment'
          },
          icon: 'documents'
        },
        {
          title: {
            ar: 'التسجيل النهائي',
            en: 'Final Registration'
          },
          description: {
            ar: 'نكمل عملية التسجيل وتسليم جميع المستندات',
            en: 'We complete the registration process and deliver all documents'
          },
          icon: 'registration'
        }
      ],
      benefits: {
        ar: [
          'تأسيس سريع وآمن',
          'دعم قانوني مستمر',
          'أسعار تنافسية',
          'ضمان الجودة',
          'متابعة بعد التسليم'
        ],
        en: [
          'Fast and secure establishment',
          'Continuous legal support',
          'Competitive prices',
          'Quality guarantee',
          'Follow-up after delivery'
        ]
      },
      faq: [
        {
          question: {
            ar: 'كم من الوقت يستغرق تأسيس الشركة؟',
            en: 'How long does it take to establish a company?'
          },
          answer: {
            ar: 'عادة ما يستغرق تأسيس الشركة من 3 إلى 5 أيام عمل، حسب نوع الشركة وتعقيد الإجراءات.',
            en: 'Company establishment usually takes 3 to 5 business days, depending on the company type and procedure complexity.'
          }
        },
        {
          question: {
            ar: 'ما هي المستندات المطلوبة؟',
            en: 'What documents are required?'
          },
          answer: {
            ar: 'تحتاج إلى نسخة من الهوية الوطنية، العنوان الوطني، اسم تجاري مقترح، وبيانات الشركاء إن وجدوا.',
            en: 'You need a copy of your national ID, national address, proposed trade name, and partners data if applicable.'
          }
        },
        {
          question: {
            ar: 'هل يمكنني تغيير اسم الشركة لاحقاً؟',
            en: 'Can I change the company name later?'
          },
          answer: {
            ar: 'نعم، يمكن تغيير اسم الشركة لاحقاً من خلال إجراءات محددة ورسوم إضافية.',
            en: 'Yes, you can change the company name later through specific procedures and additional fees.'
          }
        }
      ]
    }
  }
};
