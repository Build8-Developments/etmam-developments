export interface ConsultingService {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: string;
  price: {
    ar: string;
    en: string;
  };
  duration: {
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
}

export const consultingServices: ConsultingService[] = [
  {
    id: 'company-formation',
    title: {
      ar: 'تأسيس الشركات',
      en: 'Company Formation'
    },
    description: {
      ar: 'ابدأ مشروعك بثقة مع خدمات تأسيس الشركات واستخراج السجلات التجارية بسرعة وسهولة',
      en: 'Start your project with confidence with company formation services and commercial register extraction quickly and easily'
    },
    icon: 'building',
    price: {
      ar: 'يبدأ من 2000 ريال',
      en: 'Starting from 2000 SAR'
    },
    duration: {
      ar: 'من 3 إلى 5 أيام عمل',
      en: '3 to 5 business days'
    },
    features: {
      ar: [
        'استشارة مجانية قبل البدء',
        'إعداد جميع المستندات المطلوبة',
        'متابعة الإجراءات حتى النهاية',
        'دعم فني مستمر'
      ],
      en: [
        'Free consultation before starting',
        'Preparation of all required documents',
        'Follow-up procedures until completion',
        'Continuous technical support'
      ]
    },
    requirements: {
      ar: [
        'نسخة من الهوية الوطنية أو الإقامة',
        'بيانات الشركاء (في حال تأسيس شركة)',
        'العنوان الوطني',
        'اسم تجاري مقترح'
      ],
      en: [
        'Copy of national ID or residence',
        'Partners data (in case of company formation)',
        'National address',
        'Proposed trade name'
      ]
    },
    steps: [
      {
        title: {
          ar: 'اختر الخدمة',
          en: 'Choose Service'
        },
        description: {
          ar: 'اختر الخدمة المطلوبة من قائمة خدماتنا',
          en: 'Choose the required service from our services list'
        },
        icon: 'choice'
      },
      {
        title: {
          ar: 'قدم الطلب أونلاين',
          en: 'Submit Request Online'
        },
        description: {
          ar: 'املأ النموذج بالتفاصيل المطلوبة',
          en: 'Fill out the form with required details'
        },
        icon: 'form'
      },
      {
        title: {
          ar: 'إتمام التنفيذ',
          en: 'Complete Execution'
        },
        description: {
          ar: 'نبدأ العمل على خدمتك وتسليمها في الموعد المحدد',
          en: 'We start working on your service and deliver it on time'
        },
        icon: 'complete'
      }
    ]
  },
  {
    id: 'business-consulting',
    title: {
      ar: 'الاستشارات التجارية',
      en: 'Business Consulting'
    },
    description: {
      ar: 'استشارات متخصصة في تطوير الأعمال وتحسين الأداء التجاري',
      en: 'Specialized consulting in business development and commercial performance improvement'
    },
    icon: 'consulting',
    price: {
      ar: 'يبدأ من 1500 ريال',
      en: 'Starting from 1500 SAR'
    },
    duration: {
      ar: 'من 2 إلى 4 أيام عمل',
      en: '2 to 4 business days'
    },
    features: {
      ar: [
        'تحليل شامل للأعمال',
        'توصيات استراتيجية',
        'خطة عمل مفصلة',
        'متابعة التنفيذ'
      ],
      en: [
        'Comprehensive business analysis',
        'Strategic recommendations',
        'Detailed business plan',
        'Implementation follow-up'
      ]
    },
    requirements: {
      ar: [
        'معلومات عن النشاط التجاري',
        'البيانات المالية',
        'الأهداف المرجوة',
        'الميزانية المتاحة'
      ],
      en: [
        'Information about commercial activity',
        'Financial data',
        'Desired goals',
        'Available budget'
      ]
    },
    steps: [
      {
        title: {
          ar: 'تحليل الوضع الحالي',
          en: 'Current Situation Analysis'
        },
        description: {
          ar: 'نقوم بتحليل شامل للوضع الحالي لأعمالك',
          en: 'We conduct a comprehensive analysis of your current business situation'
        },
        icon: 'analysis'
      },
      {
        title: {
          ar: 'إعداد التوصيات',
          en: 'Prepare Recommendations'
        },
        description: {
          ar: 'نعد توصيات مخصصة لتحسين أدائك',
          en: 'We prepare customized recommendations to improve your performance'
        },
        icon: 'recommendations'
      },
      {
        title: {
          ar: 'تنفيذ الخطة',
          en: 'Implement Plan'
        },
        description: {
          ar: 'نساعدك في تنفيذ التوصيات ومتابعة النتائج',
          en: 'We help you implement recommendations and track results'
        },
        icon: 'implementation'
      }
    ]
  },
  {
    id: 'financial-consulting',
    title: {
      ar: 'الاستشارات المالية',
      en: 'Financial Consulting'
    },
    description: {
      ar: 'استشارات مالية متخصصة لإدارة الأموال وتحسين الأداء المالي',
      en: 'Specialized financial consulting for money management and financial performance improvement'
    },
    icon: 'finance',
    price: {
      ar: 'يبدأ من 1200 ريال',
      en: 'Starting from 1200 SAR'
    },
    duration: {
      ar: 'من 1 إلى 3 أيام عمل',
      en: '1 to 3 business days'
    },
    features: {
      ar: [
        'تحليل مالي شامل',
        'تخطيط مالي استراتيجي',
        'إدارة المخاطر',
        'تحسين التدفق النقدي'
      ],
      en: [
        'Comprehensive financial analysis',
        'Strategic financial planning',
        'Risk management',
        'Cash flow optimization'
      ]
    },
    requirements: {
      ar: [
        'البيانات المالية الحالية',
        'كشوف الحسابات',
        'الميزانيات العمومية',
        'قائمة الدخل'
      ],
      en: [
        'Current financial data',
        'Account statements',
        'Balance sheets',
        'Income statements'
      ]
    },
    steps: [
      {
        title: {
          ar: 'مراجعة البيانات المالية',
          en: 'Financial Data Review'
        },
        description: {
          ar: 'نراجع البيانات المالية الحالية ونحلل الأداء',
          en: 'We review current financial data and analyze performance'
        },
        icon: 'review'
      },
      {
        title: {
          ar: 'إعداد التوصيات المالية',
          en: 'Prepare Financial Recommendations'
        },
        description: {
          ar: 'نعد توصيات مالية مخصصة لتحسين الأداء',
          en: 'We prepare customized financial recommendations to improve performance'
        },
        icon: 'financial-plan'
      },
      {
        title: {
          ar: 'تنفيذ الاستراتيجية',
          en: 'Implement Strategy'
        },
        description: {
          ar: 'نساعدك في تنفيذ الاستراتيجية المالية الموصى بها',
          en: 'We help you implement the recommended financial strategy'
        },
        icon: 'strategy'
      }
    ]
  },
  {
    id: 'marketing-consulting',
    title: {
      ar: 'الاستشارات التسويقية',
      en: 'Marketing Consulting'
    },
    description: {
      ar: 'استشارات تسويقية متخصصة لتعزيز حضورك في السوق وزيادة المبيعات',
      en: 'Specialized marketing consulting to enhance your market presence and increase sales'
    },
    icon: 'marketing',
    price: {
      ar: 'يبدأ من 1800 ريال',
      en: 'Starting from 1800 SAR'
    },
    duration: {
      ar: 'من 3 إلى 6 أيام عمل',
      en: '3 to 6 business days'
    },
    features: {
      ar: [
        'استراتيجية تسويقية شاملة',
        'تحليل السوق والمنافسين',
        'خطة تسويق رقمي',
        'قياس الأداء والتطوير'
      ],
      en: [
        'Comprehensive marketing strategy',
        'Market and competitor analysis',
        'Digital marketing plan',
        'Performance measurement and development'
      ]
    },
    requirements: {
      ar: [
        'معلومات عن المنتج أو الخدمة',
        'الجمهور المستهدف',
        'الميزانية التسويقية',
        'الأهداف التسويقية'
      ],
      en: [
        'Information about product or service',
        'Target audience',
        'Marketing budget',
        'Marketing objectives'
      ]
    },
    steps: [
      {
        title: {
          ar: 'تحليل السوق',
          en: 'Market Analysis'
        },
        description: {
          ar: 'نحلل السوق والمنافسين ونحدد الفرص',
          en: 'We analyze the market and competitors and identify opportunities'
        },
        icon: 'market-analysis'
      },
      {
        title: {
          ar: 'إعداد الاستراتيجية',
          en: 'Strategy Preparation'
        },
        description: {
          ar: 'نعد استراتيجية تسويقية مخصصة لأعمالك',
          en: 'We prepare a customized marketing strategy for your business'
        },
        icon: 'strategy-prep'
      },
      {
        title: {
          ar: 'تنفيذ الحملات',
          en: 'Campaign Implementation'
        },
        description: {
          ar: 'نساعدك في تنفيذ الحملات التسويقية ومتابعة النتائج',
          en: 'We help you implement marketing campaigns and track results'
        },
        icon: 'campaign'
      }
    ]
  },
  {
    id: 'hr-consulting',
    title: {
      ar: 'الاستشارات الإدارية',
      en: 'HR Consulting'
    },
    description: {
      ar: 'استشارات إدارية متخصصة في إدارة الموارد البشرية وتطوير الأداء المؤسسي',
      en: 'Specialized administrative consulting in human resources management and institutional performance development'
    },
    icon: 'hr',
    price: {
      ar: 'يبدأ من 1000 ريال',
      en: 'Starting from 1000 SAR'
    },
    duration: {
      ar: 'من 2 إلى 4 أيام عمل',
      en: '2 to 4 business days'
    },
    features: {
      ar: [
        'تطوير السياسات الإدارية',
        'إدارة الموارد البشرية',
        'تقييم الأداء',
        'التدريب والتطوير'
      ],
      en: [
        'Administrative policy development',
        'Human resources management',
        'Performance evaluation',
        'Training and development'
      ]
    },
    requirements: {
      ar: [
        'هيكل المؤسسة الحالي',
        'عدد الموظفين',
        'السياسات الحالية',
        'الأهداف المؤسسية'
      ],
      en: [
        'Current organizational structure',
        'Number of employees',
        'Current policies',
        'Institutional objectives'
      ]
    },
    steps: [
      {
        title: {
          ar: 'تقييم الوضع الحالي',
          en: 'Current Situation Assessment'
        },
        description: {
          ar: 'نقيم الوضع الإداري الحالي ونحدد نقاط التحسين',
          en: 'We assess the current administrative situation and identify improvement points'
        },
        icon: 'assessment'
      },
      {
        title: {
          ar: 'إعداد الخطة الإدارية',
          en: 'Administrative Plan Preparation'
        },
        description: {
          ar: 'نعد خطة إدارية شاملة لتطوير المؤسسة',
          en: 'We prepare a comprehensive administrative plan for institutional development'
        },
        icon: 'admin-plan'
      },
      {
        title: {
          ar: 'تنفيذ التطوير',
          en: 'Development Implementation'
        },
        description: {
          ar: 'نساعدك في تنفيذ التطويرات الإدارية ومتابعة النتائج',
          en: 'We help you implement administrative developments and track results'
        },
        icon: 'development'
      }
    ]
  },
  {
    id: 'technical-consulting',
    title: {
      ar: 'الاستشارات التقنية',
      en: 'Technical Consulting'
    },
    description: {
      ar: 'استشارات تقنية متخصصة في تطوير الأنظمة التقنية وتحسين العمليات الرقمية',
      en: 'Specialized technical consulting in system development and digital process improvement'
    },
    icon: 'technical',
    price: {
      ar: 'يبدأ من 2500 ريال',
      en: 'Starting from 2500 SAR'
    },
    duration: {
      ar: 'من 5 إلى 10 أيام عمل',
      en: '5 to 10 business days'
    },
    features: {
      ar: [
        'تحليل الأنظمة الحالية',
        'تطوير الحلول التقنية',
        'تحسين العمليات الرقمية',
        'التدريب والدعم التقني'
      ],
      en: [
        'Current system analysis',
        'Technical solution development',
        'Digital process improvement',
        'Training and technical support'
      ]
    },
    requirements: {
      ar: [
        'الأنظمة التقنية الحالية',
        'متطلبات العمل',
        'الميزانية التقنية',
        'الأهداف التقنية'
      ],
      en: [
        'Current technical systems',
        'Business requirements',
        'Technical budget',
        'Technical objectives'
      ]
    },
    steps: [
      {
        title: {
          ar: 'تحليل الأنظمة',
          en: 'System Analysis'
        },
        description: {
          ar: 'نحلل الأنظمة التقنية الحالية ونحدد نقاط التحسين',
          en: 'We analyze current technical systems and identify improvement points'
        },
        icon: 'system-analysis'
      },
      {
        title: {
          ar: 'تصميم الحلول',
          en: 'Solution Design'
        },
        description: {
          ar: 'نصمم حلول تقنية مخصصة لاحتياجاتك',
          en: 'We design customized technical solutions for your needs'
        },
        icon: 'solution-design'
      },
      {
        title: {
          ar: 'تنفيذ التطوير',
          en: 'Development Implementation'
        },
        description: {
          ar: 'نساعدك في تنفيذ الحلول التقنية وتقديم الدعم المستمر',
          en: 'We help you implement technical solutions and provide continuous support'
        },
        icon: 'tech-implementation'
      }
    ]
  }
];
