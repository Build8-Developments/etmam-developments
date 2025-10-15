'use client';

import { 
  Header, 
  Footer,
  CTASection,
  ServiceDetailPage as ServiceDetailComponent
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ServiceDetailPage() {
  const { language } = useLanguage();
  const params = useParams();
  const { companyId, serviceId } = params;

  // Mock data - في التطبيق الحقيقي، ستأتي هذه البيانات من API
  const serviceData = {
    'ministry-industry': {
      'company-formation': {
        title: language === 'ar' ? 'تأسيس الشركات' : 'Company Formation',
        description: language === 'ar' 
          ? 'خدمة متكاملة لتأسيس شركتك من الألف إلى الياء مع جميع المستندات المطلوبة'
          : 'Comprehensive service to establish your company from A to Z with all required documents',
        price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
        duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
        icon: 'building',
        companyName: language === 'ar' ? 'وزارة الصناعة والثروة المعدنية' : 'Ministry of Industry and Mineral Resources',
        features: language === 'ar' ? [
          'إعداد جميع المستندات المطلوبة',
          'تسجيل الشركة في السجل التجاري',
          'استخراج الرخص اللازمة',
          'فتح الحساب البنكي',
          'استشارات قانونية مجانية'
        ] : [
          'Preparation of all required documents',
          'Company registration in commercial register',
          'Extraction of necessary licenses',
          'Bank account opening',
          'Free legal consultations'
        ],
        requirements: language === 'ar' ? [
          'صورة من الهوية الوطنية',
          'صورة من السجل التجاري',
          'عقد إيجار أو ملكية المقر',
          'شهادة عدم المحكومية',
          'صور شخصية حديثة'
        ] : [
          'Copy of national ID',
          'Copy of commercial register',
          'Rental contract or property ownership',
          'Criminal record certificate',
          'Recent personal photos'
        ],
        steps: language === 'ar' ? [
          'تقديم الطلب مع المستندات المطلوبة',
          'مراجعة الطلب من قبل الفريق القانوني',
          'إعداد المستندات والتراخيص',
          'تسجيل الشركة في الجهات المختصة',
          'تسليم جميع المستندات للعميل'
        ] : [
          'Submit application with required documents',
          'Review application by legal team',
          'Prepare documents and licenses',
          'Register company with relevant authorities',
          'Deliver all documents to client'
        ]
      },
      'license-extraction': {
        title: language === 'ar' ? 'استخراج التراخيص' : 'License Extraction',
        description: language === 'ar'
          ? 'نستخرج جميع أنواع التراخيص التجارية والصناعية بسرعة ودقة'
          : 'We extract all types of commercial and industrial licenses quickly and accurately',
        price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
        duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
        icon: 'license',
        companyName: language === 'ar' ? 'وزارة الصناعة والثروة المعدنية' : 'Ministry of Industry and Mineral Resources',
        features: language === 'ar' ? [
          'استخراج التراخيص التجارية',
          'استخراج التراخيص الصناعية',
          'تجديد التراخيص المنتهية',
          'تعديل بيانات التراخيص',
          'متابعة حالة الطلب'
        ] : [
          'Extract commercial licenses',
          'Extract industrial licenses',
          'Renew expired licenses',
          'Modify license data',
          'Follow up on application status'
        ],
        requirements: language === 'ar' ? [
          'السجل التجاري',
          'عقد إيجار المقر',
          'شهادة عدم المحكومية',
          'صور شخصية',
          'رسوم الترخيص'
        ] : [
          'Commercial register',
          'Premises rental contract',
          'Criminal record certificate',
          'Personal photos',
          'License fees'
        ],
        steps: language === 'ar' ? [
          'تحديد نوع الترخيص المطلوب',
          'جمع المستندات المطلوبة',
          'تقديم الطلب للجهة المختصة',
          'متابعة حالة الطلب',
          'استلام الترخيص'
        ] : [
          'Determine required license type',
          'Collect required documents',
          'Submit application to relevant authority',
          'Follow up on application status',
          'Receive license'
        ]
      }
    },
    'ministry-finance': {
      'tax-registration': {
        title: language === 'ar' ? 'تسجيل الضرائب' : 'Tax Registration',
        description: language === 'ar'
          ? 'تسجيل الشركات والأفراد في نظام الضرائب'
          : 'Registration of companies and individuals in the tax system',
        price: language === 'ar' ? 'يبدأ من 500 ريال' : 'Starting from 500 SAR',
        duration: language === 'ar' ? 'من 1 إلى 2 أيام عمل' : '1 to 2 business days',
        icon: 'tax',
        companyName: language === 'ar' ? 'وزارة المالية' : 'Ministry of Finance',
        features: language === 'ar' ? [
          'تسجيل الشركات في نظام الضرائب',
          'تسجيل الأفراد في نظام الضرائب',
          'تحديث البيانات الضريبية',
          'استخراج الشهادات الضريبية',
          'استشارات ضريبية مجانية'
        ] : [
          'Register companies in tax system',
          'Register individuals in tax system',
          'Update tax data',
          'Extract tax certificates',
          'Free tax consultations'
        ],
        requirements: language === 'ar' ? [
          'السجل التجاري',
          'الهوية الوطنية',
          'عقد إيجار المقر',
          'شهادة عدم المحكومية',
          'صور شخصية'
        ] : [
          'Commercial register',
          'National ID',
          'Premises rental contract',
          'Criminal record certificate',
          'Personal photos'
        ],
        steps: language === 'ar' ? [
          'تقديم الطلب مع المستندات',
          'مراجعة البيانات',
          'تسجيل في النظام الضريبي',
          'إصدار الرقم الضريبي',
          'تسليم الشهادات'
        ] : [
          'Submit application with documents',
          'Review data',
          'Register in tax system',
          'Issue tax number',
          'Deliver certificates'
        ]
      }
    },
    'ministry-labor': {
      'work-permit': {
        title: language === 'ar' ? 'رخصة العمل' : 'Work Permit',
        description: language === 'ar'
          ? 'استخراج رخص العمل للعاملين الأجانب'
          : 'Extraction of work permits for foreign workers',
        price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
        duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
        icon: 'work',
        companyName: language === 'ar' ? 'وزارة الموارد البشرية والتنمية الاجتماعية' : 'Ministry of Human Resources and Social Development',
        features: language === 'ar' ? [
          'استخراج رخص العمل للعاملين الأجانب',
          'تجديد رخص العمل المنتهية',
          'تعديل بيانات رخص العمل',
          'استشارات قانونية مجانية',
          'متابعة حالة الطلب'
        ] : [
          'Extract work permits for foreign workers',
          'Renew expired work permits',
          'Modify work permit data',
          'Free legal consultations',
          'Follow up on application status'
        ],
        requirements: language === 'ar' ? [
          'جواز السفر ساري المفعول',
          'شهادة عدم المحكومية',
          'شهادة المؤهل العلمي',
          'صور شخصية حديثة',
          'عقد العمل'
        ] : [
          'Valid passport',
          'Criminal record certificate',
          'Educational qualification certificate',
          'Recent personal photos',
          'Employment contract'
        ],
        steps: language === 'ar' ? [
          'تقديم الطلب مع المستندات المطلوبة',
          'مراجعة الطلب من قبل الفريق القانوني',
          'إرسال الطلب للجهة المختصة',
          'متابعة حالة الطلب',
          'استلام رخصة العمل'
        ] : [
          'Submit application with required documents',
          'Review application by legal team',
          'Send application to relevant authority',
          'Follow up on application status',
          'Receive work permit'
        ]
      },
      'visa-services': {
        title: language === 'ar' ? 'خدمات التأشيرة' : 'Visa Services',
        description: language === 'ar'
          ? 'استخراج التأشيرات للعاملين والزوار'
          : 'Extraction of visas for workers and visitors',
        price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
        duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
        icon: 'visa',
        companyName: language === 'ar' ? 'وزارة الموارد البشرية والتنمية الاجتماعية' : 'Ministry of Human Resources and Social Development',
        features: language === 'ar' ? [
          'استخراج تأشيرات العمل',
          'استخراج تأشيرات الزيارة',
          'تجديد التأشيرات المنتهية',
          'تعديل نوع التأشيرة',
          'استشارات مجانية'
        ] : [
          'Extract work visas',
          'Extract visit visas',
          'Renew expired visas',
          'Modify visa type',
          'Free consultations'
        ],
        requirements: language === 'ar' ? [
          'جواز السفر ساري المفعول',
          'صور شخصية حديثة',
          'شهادة عدم المحكومية',
          'رسوم التأشيرة',
          'خطاب دعوة'
        ] : [
          'Valid passport',
          'Recent personal photos',
          'Criminal record certificate',
          'Visa fees',
          'Invitation letter'
        ],
        steps: language === 'ar' ? [
          'تحديد نوع التأشيرة المطلوبة',
          'جمع المستندات المطلوبة',
          'تقديم الطلب للسفارة',
          'متابعة حالة الطلب',
          'استلام التأشيرة'
        ] : [
          'Determine required visa type',
          'Collect required documents',
          'Submit application to embassy',
          'Follow up on application status',
          'Receive visa'
        ]
      },
      'iqama-renewal': {
        title: language === 'ar' ? 'تجديد الإقامة' : 'Iqama Renewal',
        description: language === 'ar'
          ? 'تجديد الإقامة للعاملين الأجانب'
          : 'Renewal of residence permits for foreign workers',
        price: language === 'ar' ? 'يبدأ من 600 ريال' : 'Starting from 600 SAR',
        duration: language === 'ar' ? 'من 1 إلى 3 أيام عمل' : '1 to 3 business days',
        icon: 'iqama',
        companyName: language === 'ar' ? 'وزارة الموارد البشرية والتنمية الاجتماعية' : 'Ministry of Human Resources and Social Development',
        features: language === 'ar' ? [
          'تجديد الإقامة للعاملين الأجانب',
          'تحديث بيانات الإقامة',
          'إصدار إقامة جديدة',
          'استشارات قانونية مجانية',
          'متابعة حالة الطلب'
        ] : [
          'Renew residence permits for foreign workers',
          'Update residence data',
          'Issue new residence permit',
          'Free legal consultations',
          'Follow up on application status'
        ],
        requirements: language === 'ar' ? [
          'الإقامة الحالية',
          'جواز السفر ساري المفعول',
          'عقد العمل',
          'شهادة عدم المحكومية',
          'صور شخصية حديثة'
        ] : [
          'Current residence permit',
          'Valid passport',
          'Employment contract',
          'Criminal record certificate',
          'Recent personal photos'
        ],
        steps: language === 'ar' ? [
          'تقديم طلب التجديد مع المستندات',
          'مراجعة الطلب من قبل الفريق',
          'إرسال الطلب للجهة المختصة',
          'متابعة حالة الطلب',
          'استلام الإقامة الجديدة'
        ] : [
          'Submit renewal application with documents',
          'Review application by team',
          'Send application to relevant authority',
          'Follow up on application status',
          'Receive new residence permit'
        ]
      }
    },
    'ministry-health': {
      'health-license': {
        title: language === 'ar' ? 'الرخصة الصحية' : 'Health License',
        description: language === 'ar'
          ? 'استخراج الرخص الصحية للمنشآت الصحية'
          : 'Extraction of health licenses for health facilities',
        price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
        duration: language === 'ar' ? 'من 5 إلى 7 أيام عمل' : '5 to 7 business days',
        icon: 'health',
        companyName: language === 'ar' ? 'وزارة الصحة' : 'Ministry of Health',
        features: language === 'ar' ? [
          'استخراج الرخص الصحية للمنشآت',
          'تجديد الرخص الصحية المنتهية',
          'تعديل بيانات الرخص الصحية',
          'استشارات صحية مجانية',
          'متابعة حالة الطلب'
        ] : [
          'Extract health licenses for facilities',
          'Renew expired health licenses',
          'Modify health license data',
          'Free health consultations',
          'Follow up on application status'
        ],
        requirements: language === 'ar' ? [
          'السجل التجاري',
          'عقد إيجار المقر',
          'شهادة عدم المحكومية',
          'صور شخصية',
          'رسوم الترخيص'
        ] : [
          'Commercial register',
          'Premises rental contract',
          'Criminal record certificate',
          'Personal photos',
          'License fees'
        ],
        steps: language === 'ar' ? [
          'تقديم الطلب مع المستندات المطلوبة',
          'مراجعة الطلب من قبل الفريق الصحي',
          'إرسال الطلب للجهة المختصة',
          'متابعة حالة الطلب',
          'استلام الرخصة الصحية'
        ] : [
          'Submit application with required documents',
          'Review application by health team',
          'Send application to relevant authority',
          'Follow up on application status',
          'Receive health license'
        ]
      }
    },
    'ministry-education': {
      'school-license': {
        title: language === 'ar' ? 'رخصة المدرسة' : 'School License',
        description: language === 'ar'
          ? 'استخراج رخص المدارس والمؤسسات التعليمية'
          : 'Extraction of school and educational institution licenses',
        price: language === 'ar' ? 'يبدأ من 3000 ريال' : 'Starting from 3000 SAR',
        duration: language === 'ar' ? 'من 7 إلى 10 أيام عمل' : '7 to 10 business days',
        icon: 'school',
        companyName: language === 'ar' ? 'وزارة التعليم' : 'Ministry of Education',
        features: language === 'ar' ? [
          'استخراج رخص المدارس والمؤسسات التعليمية',
          'تجديد الرخص التعليمية المنتهية',
          'تعديل بيانات الرخص التعليمية',
          'استشارات تعليمية مجانية',
          'متابعة حالة الطلب'
        ] : [
          'Extract school and educational institution licenses',
          'Renew expired educational licenses',
          'Modify educational license data',
          'Free educational consultations',
          'Follow up on application status'
        ],
        requirements: language === 'ar' ? [
          'السجل التجاري',
          'عقد إيجار المقر',
          'شهادة عدم المحكومية',
          'صور شخصية',
          'رسوم الترخيص'
        ] : [
          'Commercial register',
          'Premises rental contract',
          'Criminal record certificate',
          'Personal photos',
          'License fees'
        ],
        steps: language === 'ar' ? [
          'تقديم الطلب مع المستندات المطلوبة',
          'مراجعة الطلب من قبل الفريق التعليمي',
          'إرسال الطلب للجهة المختصة',
          'متابعة حالة الطلب',
          'استلام الرخصة التعليمية'
        ] : [
          'Submit application with required documents',
          'Review application by educational team',
          'Send application to relevant authority',
          'Follow up on application status',
          'Receive educational license'
        ]
      }
    }
  };

  const getServiceData = () => {
    const companyServices = serviceData[companyId as string];
    if (!companyServices) return null;
    return companyServices[serviceId as string] || null;
  };

  const service = getServiceData();

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === 'ar' ? 'الخدمة غير موجودة' : 'Service Not Found'}
          </h1>
          <Link href={`/legalservices/${companyId}`} className="text-green-600 hover:text-green-700">
            {language === 'ar' ? 'العودة إلى خدمات الشركة' : 'Back to Company Services'}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getIconComponent = (iconType: string) => {
    const iconSize = 48;
    
    switch (iconType) {
      case 'building':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21V19L12 5L3 19V21ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 19H11V17H9V19ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM13 19H15V17H13V19ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM17 19H19V17H17V19ZM17 15H19V13H17V15ZM17 11H19V9H17V11Z" fill="#90C054"/>
          </svg>
        );
      case 'license':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10.5V11.5C15.4 11.5 16 12.4 16 13V16C16 16.6 15.6 17 15 17H9C8.4 17 8 16.6 8 16V13C8 12.4 8.4 11.5 9 11.5V10.5C9 8.6 10.6 7 12 7ZM12 8.5C11.2 8.5 10.5 9.2 10.5 10V11.5H13.5V10C13.5 9.2 12.8 8.5 12 8.5Z" fill="#90C054"/>
          </svg>
        );
      case 'tax':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM7 6V19H17V6H7ZM9 8H15V10H9V8ZM9 12H15V14H9V12ZM9 16H15V18H9V16Z" fill="#90C054"/>
          </svg>
        );
      default:
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#90C054"/>
          </svg>
        );
    }
  };

  const handleRequestService = () => {
    // يمكن إضافة منطق طلب الخدمة هنا
    console.log('Request service:', service.title);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <ServiceDetailComponent
        service={service}
        backHref={`/legalservices/${companyId}`}
        onRequestService={handleRequestService}
      />

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}