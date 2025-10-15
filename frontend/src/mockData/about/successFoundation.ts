export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: {
    url: string;
    alternativeText: string;
  };
}

export const successFoundationMockData: SuccessStory[] = [
  {
    id: '1',
    title: 'تأسيس أكثر من 500 شركة',
    description: 'ساعدنا في تأسيس أكثر من 500 شركة ناجحة في مختلف القطاعات، مما يؤكد خبرتنا وثقة عملائنا في خدماتنا.',
    metrics: [
      { label: 'شركات مكتملة', value: '500+' },
      { label: 'معدل النجاح', value: '98%' },
      { label: 'رضا العملاء', value: '95%' }
    ],
    image: {
      url: '/success/company-formation.jpg',
      alternativeText: 'صورة تأسيس الشركات'
    }
  },
  {
    id: '2',
    title: 'استخراج آلاف التراخيص',
    description: 'نفذنا آلاف من طلبات استخراج التراخيص التجارية والصناعية بنجاح، مما ساعد عملائنا على بدء أعمالهم بسرعة.',
    metrics: [
      { label: 'تراخيص مكتملة', value: '2000+' },
      { label: 'معدل النجاح', value: '99%' },
      { label: 'متوسط الوقت', value: '5 أيام' }
    ],
    image: {
      url: '/success/license-extraction.jpg',
      alternativeText: 'صورة استخراج التراخيص'
    }
  },
  {
    id: '3',
    title: 'خدمات محاسبية شاملة',
    description: 'نقدم خدمات محاسبية شاملة لأكثر من 300 عميل، مما يساعدهم على إدارة أموالهم وضرائبهم بكفاءة.',
    metrics: [
      { label: 'عملاء نشطين', value: '300+' },
      { label: 'معاملات سنوية', value: '10,000+' },
      { label: 'دقة المحاسبة', value: '100%' }
    ],
    image: {
      url: '/success/accounting-services.jpg',
      alternativeText: 'صورة الخدمات المحاسبية'
    }
  }
];

export const successFoundationMockDataEn: SuccessStory[] = [
  {
    id: '1',
    title: 'Established Over 500 Companies',
    description: 'We have helped establish over 500 successful companies in various sectors, confirming our expertise and our clients\' trust in our services.',
    metrics: [
      { label: 'Completed Companies', value: '500+' },
      { label: 'Success Rate', value: '98%' },
      { label: 'Client Satisfaction', value: '95%' }
    ],
    image: {
      url: '/success/company-formation.jpg',
      alternativeText: 'Company formation image'
    }
  },
  {
    id: '2',
    title: 'Extracted Thousands of Licenses',
    description: 'We have successfully processed thousands of commercial and industrial license applications, helping our clients start their businesses quickly.',
    metrics: [
      { label: 'Completed Licenses', value: '2000+' },
      { label: 'Success Rate', value: '99%' },
      { label: 'Average Time', value: '5 days' }
    ],
    image: {
      url: '/success/license-extraction.jpg',
      alternativeText: 'License extraction image'
    }
  },
  {
    id: '3',
    title: 'Comprehensive Accounting Services',
    description: 'We provide comprehensive accounting services to over 300 clients, helping them manage their finances and taxes efficiently.',
    metrics: [
      { label: 'Active Clients', value: '300+' },
      { label: 'Annual Transactions', value: '10,000+' },
      { label: 'Accounting Accuracy', value: '100%' }
    ],
    image: {
      url: '/success/accounting-services.jpg',
      alternativeText: 'Accounting services image'
    }
  }
];
