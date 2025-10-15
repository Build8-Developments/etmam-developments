import { ServiceItem } from '@/types';

export const servicesMockData: ServiceItem[] = [
  {
    id: '1',
    title: 'تأسيس الشركات',
    description: 'خدمة متكاملة تشمل تجهيز المستندات التسجيل والحصول على السجل التجاري',
    icon: {
      url: '/icons/building.svg',
      alternativeText: 'أيقونة تأسيس الشركات'
    },
    href: '/services/company-formation'
  },
  {
    id: '2',
    title: 'استخراج التراخيص',
    description: 'نقدم خدمات استخراج جميع أنواع التراخيص التجارية والصناعية',
    icon: {
      url: '/icons/license.svg',
      alternativeText: 'أيقونة التراخيص'
    },
    href: '/services/license-extraction'
  },
  {
    id: '3',
    title: 'الاستشارات القانونية',
    description: 'استشارات قانونية متخصصة في مجال الأعمال والتجارة',
    icon: {
      url: '/icons/consulting.svg',
      alternativeText: 'أيقونة الاستشارات القانونية'
    },
    href: '/services/legal-consultations'
  },
  {
    id: '4',
    title: 'المحاسبة والضرائب',
    description: 'خدمات محاسبية شاملة وإدارة الضرائب والزكاة',
    icon: {
      url: '/icons/accounting.svg',
      alternativeText: 'أيقونة المحاسبة والضرائب'
    },
    href: '/services/accounting-taxes'
  },
  {
    id: '5',
    title: 'الموارد البشرية',
    description: 'إدارة شؤون الموظفين والرواتب والتأمينات الاجتماعية',
    icon: {
      url: '/icons/hr.svg',
      alternativeText: 'أيقونة الموارد البشرية'
    },
    href: '/services/human-resources'
  },
  {
    id: '6',
    title: 'التسويق الرقمي',
    description: 'خدمات تسويقية متكاملة لتعزيز حضورك الرقمي',
    icon: {
      url: '/icons/marketing.svg',
      alternativeText: 'أيقونة التسويق الرقمي'
    },
    href: '/services/digital-marketing'
  }
];

export const servicesMockDataEn: ServiceItem[] = [
  {
    id: '1',
    title: 'Company Formation',
    description: 'An integrated service that includes preparing registration documents and obtaining the commercial register',
    icon: {
      url: '/icons/building.svg',
      alternativeText: 'Company formation icon'
    },
    href: '/services/company-formation'
  },
  {
    id: '2',
    title: 'License Extraction',
    description: 'We provide services for extracting all types of commercial and industrial licenses',
    icon: {
      url: '/icons/license.svg',
      alternativeText: 'License icon'
    },
    href: '/services/license-extraction'
  },
  {
    id: '3',
    title: 'Legal Consultations',
    description: 'Specialized legal consultations in business and commerce',
    icon: {
      url: '/icons/consulting.svg',
      alternativeText: 'Legal consultations icon'
    },
    href: '/services/legal-consultations'
  },
  {
    id: '4',
    title: 'Accounting & Taxes',
    description: 'Comprehensive accounting services and tax and zakat management',
    icon: {
      url: '/icons/accounting.svg',
      alternativeText: 'Accounting and taxes icon'
    },
    href: '/services/accounting-taxes'
  },
  {
    id: '5',
    title: 'Human Resources',
    description: 'Employee affairs management, salaries and social insurance',
    icon: {
      url: '/icons/hr.svg',
      alternativeText: 'Human resources icon'
    },
    href: '/services/human-resources'
  },
  {
    id: '6',
    title: 'Digital Marketing',
    description: 'Integrated marketing services to enhance your digital presence',
    icon: {
      url: '/icons/marketing.svg',
      alternativeText: 'Digital marketing icon'
    },
    href: '/services/digital-marketing'
  }
];
