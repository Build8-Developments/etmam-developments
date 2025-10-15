export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqMockData: FAQItem[] = [
  {
    id: '1',
    question: 'كم تستغرق عملية تأسيس الشركة؟',
    answer: 'تستغرق عملية تأسيس الشركة من 3 إلى 10 أيام عمل حسب نوع الباقة المختارة ونوع الشركة.',
    category: 'تأسيس الشركات'
  },
  {
    id: '2',
    question: 'ما هي المستندات المطلوبة لتأسيس شركة؟',
    answer: 'نحتاج إلى صورة من الهوية الوطنية، صورة شخصية، وعنوان السكن. قد نحتاج إلى مستندات إضافية حسب نوع الشركة.',
    category: 'تأسيس الشركات'
  },
  {
    id: '3',
    question: 'هل يمكن تأسيس شركة برأس مال صغير؟',
    answer: 'نعم، يمكن تأسيس شركة ذات مسؤولية محدودة برأس مال يبدأ من 100,000 ريال.',
    category: 'تأسيس الشركات'
  },
  {
    id: '4',
    question: 'كم تستغرق عملية استخراج الترخيص التجاري؟',
    answer: 'تستغرق عملية استخراج الترخيص التجاري من 5 إلى 15 يوم عمل حسب نوع النشاط التجاري.',
    category: 'التراخيص'
  },
  {
    id: '5',
    question: 'ما هي أنواع التراخيص التجارية المتاحة؟',
    answer: 'نقدم خدمات استخراج جميع أنواع التراخيص التجارية والصناعية والخدمية حسب طبيعة النشاط.',
    category: 'التراخيص'
  },
  {
    id: '6',
    question: 'هل تقدمون خدمات المحاسبة للشركات الصغيرة؟',
    answer: 'نعم، نقدم خدمات محاسبية شاملة للشركات الصغيرة والمتوسطة والكبيرة.',
    category: 'المحاسبة'
  },
  {
    id: '7',
    question: 'ما هي تكلفة الخدمات المحاسبية؟',
    answer: 'تختلف تكلفة الخدمات المحاسبية حسب حجم الشركة وطبيعة العمليات. نقدم عروض تنافسية تناسب جميع الميزانيات.',
    category: 'المحاسبة'
  },
  {
    id: '8',
    question: 'هل تقدمون استشارات قانونية مجانية؟',
    answer: 'نعم، نقدم استشارة قانونية مجانية لمدة 30 دقيقة لكل عميل جديد.',
    category: 'الاستشارات القانونية'
  }
];

export const faqMockDataEn: FAQItem[] = [
  {
    id: '1',
    question: 'How long does the company formation process take?',
    answer: 'The company formation process takes from 3 to 10 business days depending on the chosen package and company type.',
    category: 'Company Formation'
  },
  {
    id: '2',
    question: 'What documents are required to establish a company?',
    answer: 'We need a copy of the national ID, personal photo, and home address. We may need additional documents depending on the company type.',
    category: 'Company Formation'
  },
  {
    id: '3',
    question: 'Can a company be established with small capital?',
    answer: 'Yes, a limited liability company can be established with capital starting from 100,000 SAR.',
    category: 'Company Formation'
  },
  {
    id: '4',
    question: 'How long does the commercial license extraction process take?',
    answer: 'The commercial license extraction process takes from 5 to 15 business days depending on the type of commercial activity.',
    category: 'Licenses'
  },
  {
    id: '5',
    question: 'What types of commercial licenses are available?',
    answer: 'We provide services for extracting all types of commercial, industrial, and service licenses according to the nature of the activity.',
    category: 'Licenses'
  },
  {
    id: '6',
    question: 'Do you provide accounting services for small companies?',
    answer: 'Yes, we provide comprehensive accounting services for small, medium, and large companies.',
    category: 'Accounting'
  },
  {
    id: '7',
    question: 'What is the cost of accounting services?',
    answer: 'The cost of accounting services varies according to the company size and nature of operations. We provide competitive offers suitable for all budgets.',
    category: 'Accounting'
  },
  {
    id: '8',
    question: 'Do you provide free legal consultations?',
    answer: 'Yes, we provide free legal consultation for 30 minutes for each new client.',
    category: 'Legal Consultations'
  }
];
