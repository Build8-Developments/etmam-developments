export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    steps: string[];
  };
  pricing: {
    title: string;
    packages: {
      name: string;
      price: string;
      features: string[];
      isPopular?: boolean;
    }[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  image: {
    url: string;
    alternativeText: string;
  };
}

export const serviceDetailMockData: ServiceDetail = {
  id: '1',
  title: 'تأسيس الشركات',
  description: 'خدمة متكاملة لتأسيس الشركات بكافة أنواعها',
  longDescription: 'نقدم خدمة تأسيس الشركات الشاملة التي تشمل جميع الإجراءات القانونية والإدارية المطلوبة لتأسيس شركتك. من إعداد المستندات إلى الحصول على السجل التجاري والتراخيص اللازمة.',
  features: [
    'إعداد جميع المستندات القانونية المطلوبة',
    'الحصول على السجل التجاري',
    'استخراج التراخيص اللازمة',
    'فتح الحساب البنكي للشركة',
    'تسجيل الشركة في الغرفة التجارية',
    'إعداد النظام الأساسي للشركة'
  ],
  benefits: [
    'توفير الوقت والجهد في الإجراءات',
    'ضمان صحة جميع المستندات',
    'متابعة مستمرة لحالة الطلب',
    'استشارات قانونية مجانية',
    'أسعار تنافسية وشفافة'
  ],
  process: {
    title: 'خطوات تأسيس الشركة',
    steps: [
      'التواصل معنا وتحديد نوع الشركة المطلوبة',
      'جمع المستندات المطلوبة من العميل',
      'إعداد النظام الأساسي للشركة',
      'تقديم الطلب للجهات المختصة',
      'متابعة الطلب حتى الموافقة',
      'استلام السجل التجاري وتسليمه للعميل'
    ]
  },
  pricing: {
    title: 'باقات تأسيس الشركات',
    packages: [
      {
        name: 'الباقة الأساسية',
        price: '2,500 ريال',
        features: [
          'تأسيس شركة ذات مسؤولية محدودة',
          'السجل التجاري',
          'النظام الأساسي',
          'مدة التنفيذ: 7-10 أيام عمل'
        ]
      },
      {
        name: 'الباقة المتقدمة',
        price: '4,500 ريال',
        features: [
          'تأسيس شركة ذات مسؤولية محدودة',
          'السجل التجاري',
          'النظام الأساسي',
          'التراخيص التجارية',
          'فتح الحساب البنكي',
          'مدة التنفيذ: 5-7 أيام عمل'
        ],
        isPopular: true
      },
      {
        name: 'الباقة الشاملة',
        price: '7,500 ريال',
        features: [
          'تأسيس شركة ذات مسؤولية محدودة',
          'السجل التجاري',
          'النظام الأساسي',
          'جميع التراخيص المطلوبة',
          'فتح الحساب البنكي',
          'تسجيل في الغرفة التجارية',
          'استشارات قانونية لمدة شهر',
          'مدة التنفيذ: 3-5 أيام عمل'
        ]
      }
    ]
  },
  faq: [
    {
      question: 'كم تستغرق عملية تأسيس الشركة؟',
      answer: 'تستغرق عملية تأسيس الشركة من 3 إلى 10 أيام عمل حسب نوع الباقة المختارة.'
    },
    {
      question: 'ما هي المستندات المطلوبة؟',
      answer: 'نحتاج إلى صورة من الهوية الوطنية، صورة شخصية، وعنوان السكن.'
    },
    {
      question: 'هل يمكن تأسيس شركة برأس مال صغير؟',
      answer: 'نعم، يمكن تأسيس شركة ذات مسؤولية محدودة برأس مال يبدأ من 100,000 ريال.'
    }
  ],
  image: {
    url: '/services/company-formation.jpg',
    alternativeText: 'صورة تأسيس الشركات'
  }
};

export const serviceDetailMockDataEn: ServiceDetail = {
  id: '1',
  title: 'Company Formation',
  description: 'Comprehensive service for establishing companies of all types',
  longDescription: 'We provide comprehensive company formation services that include all legal and administrative procedures required to establish your company. From document preparation to obtaining commercial registration and necessary licenses.',
  features: [
    'Preparation of all required legal documents',
    'Obtaining commercial registration',
    'Extracting necessary licenses',
    'Opening company bank account',
    'Company registration in the Chamber of Commerce',
    'Preparation of company bylaws'
  ],
  benefits: [
    'Saving time and effort in procedures',
    'Ensuring accuracy of all documents',
    'Continuous follow-up on application status',
    'Free legal consultations',
    'Competitive and transparent prices'
  ],
  process: {
    title: 'Company Formation Steps',
    steps: [
      'Contact us and determine the required company type',
      'Collect required documents from the client',
      'Prepare company bylaws',
      'Submit application to relevant authorities',
      'Follow up on application until approval',
      'Receive commercial registration and deliver to client'
    ]
  },
  pricing: {
    title: 'Company Formation Packages',
    packages: [
      {
        name: 'Basic Package',
        price: '2,500 SAR',
        features: [
          'Limited liability company formation',
          'Commercial registration',
          'Company bylaws',
          'Execution time: 7-10 business days'
        ]
      },
      {
        name: 'Advanced Package',
        price: '4,500 SAR',
        features: [
          'Limited liability company formation',
          'Commercial registration',
          'Company bylaws',
          'Commercial licenses',
          'Bank account opening',
          'Execution time: 5-7 business days'
        ],
        isPopular: true
      },
      {
        name: 'Comprehensive Package',
        price: '7,500 SAR',
        features: [
          'Limited liability company formation',
          'Commercial registration',
          'Company bylaws',
          'All required licenses',
          'Bank account opening',
          'Chamber of Commerce registration',
          'Legal consultations for one month',
          'Execution time: 3-5 business days'
        ]
      }
    ]
  },
  faq: [
    {
      question: 'How long does the company formation process take?',
      answer: 'The company formation process takes from 3 to 10 business days depending on the chosen package.'
    },
    {
      question: 'What documents are required?',
      answer: 'We need a copy of the national ID, personal photo, and home address.'
    },
    {
      question: 'Can a company be established with small capital?',
      answer: 'Yes, a limited liability company can be established with capital starting from 100,000 SAR.'
    }
  ],
  image: {
    url: '/services/company-formation.jpg',
    alternativeText: 'Company formation image'
  }
};
