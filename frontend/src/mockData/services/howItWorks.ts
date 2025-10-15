import { Step } from '@/types';

export const howItWorksMockData: Step[] = [
  {
    id: '1',
    title: 'التواصل معنا',
    description: 'اتصل بنا أو أرسل رسالة عبر الموقع لطلب الخدمة المطلوبة',
    icon: {
      url: '/icons/contact.svg',
      alternativeText: 'أيقونة التواصل'
    },
    order: 1
  },
  {
    id: '2',
    title: 'الاستشارة الأولية',
    description: 'نقوم بفهم احتياجاتك وتقديم الاستشارة المناسبة لحالتك',
    icon: {
      url: '/icons/consultation.svg',
      alternativeText: 'أيقونة الاستشارة'
    },
    order: 2
  },
  {
    id: '3',
    title: 'إعداد الخطة',
    description: 'نضع خطة عمل مفصلة مع الجدول الزمني والتكلفة المتوقعة',
    icon: {
      url: '/icons/planning.svg',
      alternativeText: 'أيقونة التخطيط'
    },
    order: 3
  },
  {
    id: '4',
    title: 'التنفيذ والمتابعة',
    description: 'نبدأ في تنفيذ الخطة مع المتابعة المستمرة والتحديثات الدورية',
    icon: {
      url: '/icons/execution.svg',
      alternativeText: 'أيقونة التنفيذ'
    },
    order: 4
  }
];

export const howItWorksMockDataEn: Step[] = [
  {
    id: '1',
    title: 'Contact Us',
    description: 'Call us or send a message through the website to request the required service',
    icon: {
      url: '/icons/contact.svg',
      alternativeText: 'Contact icon'
    },
    order: 1
  },
  {
    id: '2',
    title: 'Initial Consultation',
    description: 'We understand your needs and provide appropriate consultation for your case',
    icon: {
      url: '/icons/consultation.svg',
      alternativeText: 'Consultation icon'
    },
    order: 2
  },
  {
    id: '3',
    title: 'Plan Preparation',
    description: 'We create a detailed work plan with timeline and expected cost',
    icon: {
      url: '/icons/planning.svg',
      alternativeText: 'Planning icon'
    },
    order: 3
  },
  {
    id: '4',
    title: 'Execution & Follow-up',
    description: 'We start implementing the plan with continuous follow-up and regular updates',
    icon: {
      url: '/icons/execution.svg',
      alternativeText: 'Execution icon'
    },
    order: 4
  }
];
