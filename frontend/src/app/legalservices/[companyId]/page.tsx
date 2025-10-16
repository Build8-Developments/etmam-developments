'use client';

import { 
  Header, 
  Footer,
  CTASection,
  ServicesGrid
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CompanyServicesPage() {
  const { language } = useLanguage();
  const params = useParams();
  const { companyId } = params;

  // Mock data - في التطبيق الحقيقي، ستأتي هذه البيانات من API
  const companyData = {
    'ministry-industry': {
      name: language === 'ar' ? 'وزارة الصناعة والثروة المعدنية' : 'Ministry of Industry and Mineral Resources',
      description: language === 'ar' 
        ? 'استكشف 11 خدمة تقدمها وزارة الصناعة والثروة المعدنية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك'
        : 'Explore 11 services offered by the Ministry of Industry and Mineral Resources, we provide comprehensive support for all your needs',
      logo: '/images/logos/logo.png',
      services: [
        {
          id: 'company-formation',
          title: language === 'ar' ? 'تأسيس الشركات' : 'Company Formation',
          description: language === 'ar' 
            ? 'خدمة متكاملة لتأسيس شركتك من الألف إلى الياء مع جميع المستندات المطلوبة'
            : 'Comprehensive service to establish your company from A to Z with all required documents',
          price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'building'
        },
        {
          id: 'license-extraction',
          title: language === 'ar' ? 'استخراج التراخيص' : 'License Extraction',
          description: language === 'ar'
            ? 'نستخرج جميع أنواع التراخيص التجارية والصناعية بسرعة ودقة'
            : 'We extract all types of commercial and industrial licenses quickly and accurately',
          price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
          duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
          icon: 'license'
        },
        {
          id: 'legal-consultation',
          title: language === 'ar' ? 'الاستشارات القانونية' : 'Legal Consultations',
          description: language === 'ar'
            ? 'استشارات قانونية متخصصة في مجال الأعمال والتجارة'
            : 'Specialized legal consultations in business and commerce',
          price: language === 'ar' ? 'يبدأ من 500 ريال' : 'Starting from 500 SAR',
          duration: language === 'ar' ? 'ساعة واحدة' : '1 hour',
          icon: 'consulting'
        },
        {
          id: 'contracts-agreements',
          title: language === 'ar' ? 'العقود والاتفاقيات' : 'Contracts & Agreements',
          description: language === 'ar'
            ? 'إعداد ومراجعة العقود والاتفاقيات التجارية'
            : 'Preparation and review of commercial contracts and agreements',
          price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
          duration: language === 'ar' ? 'من 1 إلى 3 أيام عمل' : '1 to 3 business days',
          icon: 'document'
        },
        {
          id: 'trademark-registration',
          title: language === 'ar' ? 'تسجيل العلامة التجارية' : 'Trademark Registration',
          description: language === 'ar'
            ? 'تسجيل وحماية العلامة التجارية الخاصة بك'
            : 'Registration and protection of your trademark',
          price: language === 'ar' ? 'يبدأ من 1200 ريال' : 'Starting from 1200 SAR',
          duration: language === 'ar' ? 'من 5 إلى 7 أيام عمل' : '5 to 7 business days',
          icon: 'trademark'
        },
        {
          id: 'commercial-register',
          title: language === 'ar' ? 'السجل التجاري' : 'Commercial Register',
          description: language === 'ar'
            ? 'تسجيل وتجديد السجل التجاري بجميع الإجراءات المطلوبة'
            : 'Registration and renewal of commercial register with all required procedures',
          price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
          duration: language === 'ar' ? 'من 1 إلى 2 أيام عمل' : '1 to 2 business days',
          icon: 'document'
        },
        {
          id: 'industrial-license',
          title: language === 'ar' ? 'الترخيص الصناعي' : 'Industrial License',
          description: language === 'ar'
            ? 'استخراج التراخيص الصناعية للمصانع والمنشآت الصناعية'
            : 'Extraction of industrial licenses for factories and industrial facilities',
          price: language === 'ar' ? 'يبدأ من 3000 ريال' : 'Starting from 3000 SAR',
          duration: language === 'ar' ? 'من 7 إلى 10 أيام عمل' : '7 to 10 business days',
          icon: 'factory'
        },
        {
          id: 'investment-license',
          title: language === 'ar' ? 'رخصة الاستثمار' : 'Investment License',
          description: language === 'ar'
            ? 'استخراج رخص الاستثمار للمشاريع الاستثمارية الكبيرة'
            : 'Extraction of investment licenses for large investment projects',
          price: language === 'ar' ? 'يبدأ من 5000 ريال' : 'Starting from 5000 SAR',
          duration: language === 'ar' ? 'من 10 إلى 15 يوم عمل' : '10 to 15 business days',
          icon: 'investment'
        },
        {
          id: 'export-import-license',
          title: language === 'ar' ? 'رخصة التصدير والاستيراد' : 'Export/Import License',
          description: language === 'ar'
            ? 'استخراج رخص التصدير والاستيراد للسلع والمنتجات'
            : 'Extraction of export/import licenses for goods and products',
          price: language === 'ar' ? 'يبدأ من 1800 ريال' : 'Starting from 1800 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'shipping'
        },
        {
          id: 'quality-certification',
          title: language === 'ar' ? 'شهادة الجودة' : 'Quality Certification',
          description: language === 'ar'
            ? 'الحصول على شهادات الجودة والمعايير الدولية'
            : 'Obtaining quality certificates and international standards',
          price: language === 'ar' ? 'يبدأ من 2500 ريال' : 'Starting from 2500 SAR',
          duration: language === 'ar' ? 'من 5 إلى 8 أيام عمل' : '5 to 8 business days',
          icon: 'certificate'
        },
        {
          id: 'environmental-permit',
          title: language === 'ar' ? 'الترخيص البيئي' : 'Environmental Permit',
          description: language === 'ar'
            ? 'استخراج التراخيص البيئية للمشاريع الصناعية'
            : 'Extraction of environmental permits for industrial projects',
          price: language === 'ar' ? 'يبدأ من 2200 ريال' : 'Starting from 2200 SAR',
          duration: language === 'ar' ? 'من 6 إلى 9 أيام عمل' : '6 to 9 business days',
          icon: 'environment'
        }
      ]
    },
    'ministry-commerce': {
      name: language === 'ar' ? 'وزارة التجارة' : 'Ministry of Commerce',
      description: language === 'ar'
        ? 'استكشف 10 خدمات تقدمها وزارة التجارة، نحن نقدم دعمًا شاملاً لجميع احتياجاتك التجارية'
        : 'Explore 10 services offered by the Ministry of Commerce, we provide comprehensive support for all your commercial needs',
      logo: '/images/logos/logo.png',
      services: [
        {
          id: 'commercial-register',
          title: language === 'ar' ? 'السجل التجاري' : 'Commercial Register',
          description: language === 'ar'
            ? 'تسجيل وتجديد السجل التجاري بجميع الإجراءات المطلوبة'
            : 'Registration and renewal of commercial register with all required procedures',
          price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
          duration: language === 'ar' ? 'من 1 إلى 2 أيام عمل' : '1 to 2 business days',
          icon: 'document'
        },
        {
          id: 'trademark-registration',
          title: language === 'ar' ? 'تسجيل العلامة التجارية' : 'Trademark Registration',
          description: language === 'ar'
            ? 'تسجيل وحماية العلامة التجارية الخاصة بك'
            : 'Registration and protection of your trademark',
          price: language === 'ar' ? 'يبدأ من 1200 ريال' : 'Starting from 1200 SAR',
          duration: language === 'ar' ? 'من 5 إلى 7 أيام عمل' : '5 to 7 business days',
          icon: 'trademark'
        },
        {
          id: 'commercial-license',
          title: language === 'ar' ? 'الرخصة التجارية' : 'Commercial License',
          description: language === 'ar'
            ? 'استخراج الرخص التجارية لجميع الأنشطة التجارية'
            : 'Extraction of commercial licenses for all commercial activities',
          price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'license'
        },
        {
          id: 'franchise-registration',
          title: language === 'ar' ? 'تسجيل الامتياز التجاري' : 'Franchise Registration',
          description: language === 'ar'
            ? 'تسجيل الامتيازات التجارية والعلامات التجارية'
            : 'Registration of commercial franchises and trademarks',
          price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
          duration: language === 'ar' ? 'من 5 إلى 7 أيام عمل' : '5 to 7 business days',
          icon: 'franchise'
        },
        {
          id: 'import-export-permit',
          title: language === 'ar' ? 'تصريح الاستيراد والتصدير' : 'Import/Export Permit',
          description: language === 'ar'
            ? 'استخراج تصاريح الاستيراد والتصدير للسلع'
            : 'Extraction of import/export permits for goods',
          price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
          duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
          icon: 'shipping'
        },
        {
          id: 'consumer-protection',
          title: language === 'ar' ? 'حماية المستهلك' : 'Consumer Protection',
          description: language === 'ar'
            ? 'خدمات حماية المستهلك وحل النزاعات التجارية'
            : 'Consumer protection services and commercial dispute resolution',
          price: language === 'ar' ? 'يبدأ من 500 ريال' : 'Starting from 500 SAR',
          duration: language === 'ar' ? 'من 1 إلى 3 أيام عمل' : '1 to 3 business days',
          icon: 'protection'
        },
        {
          id: 'market-analysis',
          title: language === 'ar' ? 'تحليل السوق' : 'Market Analysis',
          description: language === 'ar'
            ? 'تحليل الأسواق التجارية والتقارير الاقتصادية'
            : 'Analysis of commercial markets and economic reports',
          price: language === 'ar' ? 'يبدأ من 3000 ريال' : 'Starting from 3000 SAR',
          duration: language === 'ar' ? 'من 7 إلى 10 أيام عمل' : '7 to 10 business days',
          icon: 'analysis'
        },
        {
          id: 'commercial-disputes',
          title: language === 'ar' ? 'حل النزاعات التجارية' : 'Commercial Disputes Resolution',
          description: language === 'ar'
            ? 'حل النزاعات التجارية والتحكيم التجاري'
            : 'Resolution of commercial disputes and commercial arbitration',
          price: language === 'ar' ? 'يبدأ من 2500 ريال' : 'Starting from 2500 SAR',
          duration: language === 'ar' ? 'من 5 إلى 8 أيام عمل' : '5 to 8 business days',
          icon: 'disputes'
        },
        {
          id: 'commercial-consultation',
          title: language === 'ar' ? 'الاستشارات التجارية' : 'Commercial Consultations',
          description: language === 'ar'
            ? 'استشارات تجارية متخصصة في القوانين التجارية'
            : 'Specialized commercial consultations in commercial laws',
          price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
          duration: language === 'ar' ? 'ساعة واحدة' : '1 hour',
          icon: 'consulting'
        },
        {
          id: 'commercial-contracts',
          title: language === 'ar' ? 'العقود التجارية' : 'Commercial Contracts',
          description: language === 'ar'
            ? 'إعداد ومراجعة العقود التجارية والاتفاقيات'
            : 'Preparation and review of commercial contracts and agreements',
          price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
          duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
          icon: 'contracts'
        }
      ]
    },
    'ministry-finance': {
      name: language === 'ar' ? 'وزارة المالية' : 'Ministry of Finance',
      description: language === 'ar'
        ? 'استكشف 8 خدمات تقدمها وزارة المالية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك المالية'
        : 'Explore 8 services offered by the Ministry of Finance, we provide comprehensive support for all your financial needs',
      logo: '/images/logos/logo.png',
      services: [
        {
          id: 'tax-registration',
          title: language === 'ar' ? 'تسجيل الضرائب' : 'Tax Registration',
          description: language === 'ar'
            ? 'تسجيل الشركات والأفراد في نظام الضرائب'
            : 'Registration of companies and individuals in the tax system',
          price: language === 'ar' ? 'يبدأ من 500 ريال' : 'Starting from 500 SAR',
          duration: language === 'ar' ? 'من 1 إلى 2 أيام عمل' : '1 to 2 business days',
          icon: 'tax'
        },
        {
          id: 'vat-registration',
          title: language === 'ar' ? 'تسجيل ضريبة القيمة المضافة' : 'VAT Registration',
          description: language === 'ar'
            ? 'تسجيل ضريبة القيمة المضافة للشركات'
            : 'VAT registration for companies',
          price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
          duration: language === 'ar' ? 'من 2 إلى 3 أيام عمل' : '2 to 3 business days',
          icon: 'vat'
        },
        {
          id: 'tax-consultation',
          title: language === 'ar' ? 'الاستشارات الضريبية' : 'Tax Consultations',
          description: language === 'ar'
            ? 'استشارات ضريبية متخصصة في القوانين الضريبية'
            : 'Specialized tax consultations in tax laws',
          price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
          duration: language === 'ar' ? 'ساعة واحدة' : '1 hour',
          icon: 'consulting'
        },
        {
          id: 'financial-planning',
          title: language === 'ar' ? 'التخطيط المالي' : 'Financial Planning',
          description: language === 'ar'
            ? 'خدمات التخطيط المالي وإدارة الميزانيات'
            : 'Financial planning services and budget management',
          price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'planning'
        },
        {
          id: 'audit-services',
          title: language === 'ar' ? 'خدمات التدقيق' : 'Audit Services',
          description: language === 'ar'
            ? 'خدمات التدقيق المالي والمحاسبي'
            : 'Financial and accounting audit services',
          price: language === 'ar' ? 'يبدأ من 3000 ريال' : 'Starting from 3000 SAR',
          duration: language === 'ar' ? 'من 5 إلى 7 أيام عمل' : '5 to 7 business days',
          icon: 'audit'
        },
        {
          id: 'budget-preparation',
          title: language === 'ar' ? 'إعداد الميزانيات' : 'Budget Preparation',
          description: language === 'ar'
            ? 'إعداد الميزانيات المالية والخطط المالية'
            : 'Preparation of financial budgets and financial plans',
          price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
          duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
          icon: 'budget'
        },
        {
          id: 'financial-reports',
          title: language === 'ar' ? 'التقارير المالية' : 'Financial Reports',
          description: language === 'ar'
            ? 'إعداد التقارير المالية والمحاسبية'
            : 'Preparation of financial and accounting reports',
          price: language === 'ar' ? 'يبدأ من 1200 ريال' : 'Starting from 1200 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'reports'
        },
        {
          id: 'investment-advice',
          title: language === 'ar' ? 'النصائح الاستثمارية' : 'Investment Advice',
          description: language === 'ar'
            ? 'نصائح استثمارية متخصصة وإدارة المحافظ المالية'
            : 'Specialized investment advice and portfolio management',
          price: language === 'ar' ? 'يبدأ من 2500 ريال' : 'Starting from 2500 SAR',
          duration: language === 'ar' ? 'من 4 إلى 6 أيام عمل' : '4 to 6 business days',
          icon: 'investment'
        }
      ]
    },
    'ministry-labor': {
      name: language === 'ar' ? 'وزارة الموارد البشرية والتنمية الاجتماعية' : 'Ministry of Human Resources and Social Development',
      description: language === 'ar'
        ? 'استكشف 12 خدمة تقدمها وزارة الموارد البشرية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك الإدارية'
        : 'Explore 12 services offered by the Ministry of Human Resources, we provide comprehensive support for all your administrative needs',
      logo: '/images/logos/logo.png',
      services: [
        {
          id: 'work-permit',
          title: language === 'ar' ? 'رخصة العمل' : 'Work Permit',
          description: language === 'ar'
            ? 'استخراج رخص العمل للعاملين الأجانب'
            : 'Extraction of work permits for foreign workers',
          price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'work'
        },
        {
          id: 'visa-services',
          title: language === 'ar' ? 'خدمات التأشيرة' : 'Visa Services',
          description: language === 'ar'
            ? 'استخراج التأشيرات للعاملين والزوار'
            : 'Extraction of visas for workers and visitors',
          price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
          duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
          icon: 'visa'
        },
        {
          id: 'iqama-renewal',
          title: language === 'ar' ? 'تجديد الإقامة' : 'Iqama Renewal',
          description: language === 'ar'
            ? 'تجديد الإقامة للعاملين الأجانب'
            : 'Renewal of residence permits for foreign workers',
          price: language === 'ar' ? 'يبدأ من 600 ريال' : 'Starting from 600 SAR',
          duration: language === 'ar' ? 'من 1 إلى 3 أيام عمل' : '1 to 3 business days',
          icon: 'iqama'
        },
        {
          id: 'labor-contracts',
          title: language === 'ar' ? 'عقود العمل' : 'Labor Contracts',
          description: language === 'ar'
            ? 'إعداد ومراجعة عقود العمل'
            : 'Preparation and review of labor contracts',
          price: language === 'ar' ? 'يبدأ من 500 ريال' : 'Starting from 500 SAR',
          duration: language === 'ar' ? 'من 1 إلى 2 أيام عمل' : '1 to 2 business days',
          icon: 'contracts'
        },
        {
          id: 'social-insurance',
          title: language === 'ar' ? 'التأمين الاجتماعي' : 'Social Insurance',
          description: language === 'ar'
            ? 'تسجيل العاملين في التأمين الاجتماعي'
            : 'Registration of workers in social insurance',
          price: language === 'ar' ? 'يبدأ من 300 ريال' : 'Starting from 300 SAR',
          duration: language === 'ar' ? 'من 1 إلى 2 أيام عمل' : '1 to 2 business days',
          icon: 'insurance'
        },
        {
          id: 'hr-consultation',
          title: language === 'ar' ? 'الاستشارات الإدارية' : 'HR Consultations',
          description: language === 'ar'
            ? 'استشارات إدارية متخصصة في الموارد البشرية'
            : 'Specialized administrative consultations in human resources',
          price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
          duration: language === 'ar' ? 'ساعة واحدة' : '1 hour',
          icon: 'consulting'
        },
        {
          id: 'employee-records',
          title: language === 'ar' ? 'سجلات الموظفين' : 'Employee Records',
          description: language === 'ar'
            ? 'إدارة سجلات الموظفين والبيانات الشخصية'
            : 'Management of employee records and personal data',
          price: language === 'ar' ? 'يبدأ من 400 ريال' : 'Starting from 400 SAR',
          duration: language === 'ar' ? 'من 1 إلى 2 أيام عمل' : '1 to 2 business days',
          icon: 'records'
        },
        {
          id: 'payroll-services',
          title: language === 'ar' ? 'خدمات الرواتب' : 'Payroll Services',
          description: language === 'ar'
            ? 'إدارة الرواتب والمكافآت والحوافز'
            : 'Management of salaries, bonuses and incentives',
          price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
          duration: language === 'ar' ? 'من 2 إلى 3 أيام عمل' : '2 to 3 business days',
          icon: 'payroll'
        },
        {
          id: 'training-programs',
          title: language === 'ar' ? 'برامج التدريب' : 'Training Programs',
          description: language === 'ar'
            ? 'تنظيم برامج التدريب والتطوير للموظفين'
            : 'Organization of training and development programs for employees',
          price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
          duration: language === 'ar' ? 'من 5 إلى 7 أيام عمل' : '5 to 7 business days',
          icon: 'training'
        },
        {
          id: 'performance-evaluation',
          title: language === 'ar' ? 'تقييم الأداء' : 'Performance Evaluation',
          description: language === 'ar'
            ? 'تقييم أداء الموظفين ومراجعة الإنجازات'
            : 'Evaluation of employee performance and review of achievements',
          price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'evaluation'
        },
        {
          id: 'disciplinary-actions',
          title: language === 'ar' ? 'الإجراءات التأديبية' : 'Disciplinary Actions',
          description: language === 'ar'
            ? 'إدارة الإجراءات التأديبية والنزاعات العمالية'
            : 'Management of disciplinary actions and labor disputes',
          price: language === 'ar' ? 'يبدأ من 1200 ريال' : 'Starting from 1200 SAR',
          duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
          icon: 'disciplinary'
        },
        {
          id: 'workplace-safety',
          title: language === 'ar' ? 'السلامة المهنية' : 'Workplace Safety',
          description: language === 'ar'
            ? 'تطبيق معايير السلامة المهنية في بيئة العمل'
            : 'Application of occupational safety standards in the work environment',
          price: language === 'ar' ? 'يبدأ من 1800 ريال' : 'Starting from 1800 SAR',
          duration: language === 'ar' ? 'من 4 إلى 6 أيام عمل' : '4 to 6 business days',
          icon: 'safety'
        }
      ]
    },
    'ministry-health': {
      name: language === 'ar' ? 'وزارة الصحة' : 'Ministry of Health',
      description: language === 'ar'
        ? 'استكشف 9 خدمات تقدمها وزارة الصحة، نحن نقدم دعمًا شاملاً لجميع احتياجاتك الصحية'
        : 'Explore 9 services offered by the Ministry of Health, we provide comprehensive support for all your health needs',
      logo: '/images/logos/logo.png',
      services: [
        {
          id: 'health-license',
          title: language === 'ar' ? 'الرخصة الصحية' : 'Health License',
          description: language === 'ar'
            ? 'استخراج الرخص الصحية للمنشآت الصحية'
            : 'Extraction of health licenses for health facilities',
          price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
          duration: language === 'ar' ? 'من 5 إلى 7 أيام عمل' : '5 to 7 business days',
          icon: 'health'
        },
        {
          id: 'medical-equipment',
          title: language === 'ar' ? 'ترخيص الأجهزة الطبية' : 'Medical Equipment License',
          description: language === 'ar'
            ? 'ترخيص الأجهزة والمعدات الطبية'
            : 'Licensing of medical devices and equipment',
          price: language === 'ar' ? 'يبدأ من 3000 ريال' : 'Starting from 3000 SAR',
          duration: language === 'ar' ? 'من 7 إلى 10 أيام عمل' : '7 to 10 business days',
          icon: 'equipment'
        },
        {
          id: 'pharmacy-license',
          title: language === 'ar' ? 'رخصة الصيدلية' : 'Pharmacy License',
          description: language === 'ar'
            ? 'استخراج رخص الصيدليات والمستودعات الدوائية'
            : 'Extraction of pharmacy and pharmaceutical warehouse licenses',
          price: language === 'ar' ? 'يبدأ من 2500 ريال' : 'Starting from 2500 SAR',
          duration: language === 'ar' ? 'من 6 إلى 8 أيام عمل' : '6 to 8 business days',
          icon: 'pharmacy'
        },
        {
          id: 'medical-practice',
          title: language === 'ar' ? 'رخصة الممارسة الطبية' : 'Medical Practice License',
          description: language === 'ar'
            ? 'ترخيص ممارسة المهن الطبية'
            : 'Licensing of medical professions practice',
          price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
          duration: language === 'ar' ? 'من 4 إلى 6 أيام عمل' : '4 to 6 business days',
          icon: 'practice'
        },
        {
          id: 'health-insurance',
          title: language === 'ar' ? 'التأمين الصحي' : 'Health Insurance',
          description: language === 'ar'
            ? 'تسجيل المنشآت في التأمين الصحي'
            : 'Registration of facilities in health insurance',
          price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
          duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
          icon: 'insurance'
        },
        {
          id: 'clinical-trials',
          title: language === 'ar' ? 'التجارب السريرية' : 'Clinical Trials',
          description: language === 'ar'
            ? 'ترخيص وإدارة التجارب السريرية'
            : 'Licensing and management of clinical trials',
          price: language === 'ar' ? 'يبدأ من 5000 ريال' : 'Starting from 5000 SAR',
          duration: language === 'ar' ? 'من 10 إلى 15 يوم عمل' : '10 to 15 business days',
          icon: 'trials'
        },
        {
          id: 'health-consultation',
          title: language === 'ar' ? 'الاستشارات الصحية' : 'Health Consultations',
          description: language === 'ar'
            ? 'استشارات صحية متخصصة في القوانين الصحية'
            : 'Specialized health consultations in health laws',
          price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
          duration: language === 'ar' ? 'ساعة واحدة' : '1 hour',
          icon: 'consulting'
        },
        {
          id: 'health-records',
          title: language === 'ar' ? 'السجلات الصحية' : 'Health Records',
          description: language === 'ar'
            ? 'إدارة السجلات الصحية والبيانات الطبية'
            : 'Management of health records and medical data',
          price: language === 'ar' ? 'يبدأ من 1200 ريال' : 'Starting from 1200 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'records'
        },
        {
          id: 'health-safety',
          title: language === 'ar' ? 'السلامة الصحية' : 'Health Safety',
          description: language === 'ar'
            ? 'تطبيق معايير السلامة الصحية في المنشآت'
            : 'Application of health safety standards in facilities',
          price: language === 'ar' ? 'يبدأ من 1800 ريال' : 'Starting from 1800 SAR',
          duration: language === 'ar' ? 'من 4 إلى 6 أيام عمل' : '4 to 6 business days',
          icon: 'safety'
        }
      ]
    },
    'ministry-education': {
      name: language === 'ar' ? 'وزارة التعليم' : 'Ministry of Education',
      description: language === 'ar'
        ? 'استكشف 7 خدمات تقدمها وزارة التعليم، نحن نقدم دعمًا شاملاً لجميع احتياجاتك التعليمية'
        : 'Explore 7 services offered by the Ministry of Education, we provide comprehensive support for all your educational needs',
      logo: '/images/logos/logo.png',
      services: [
        {
          id: 'school-license',
          title: language === 'ar' ? 'رخصة المدرسة' : 'School License',
          description: language === 'ar'
            ? 'استخراج رخص المدارس والمؤسسات التعليمية'
            : 'Extraction of school and educational institution licenses',
          price: language === 'ar' ? 'يبدأ من 3000 ريال' : 'Starting from 3000 SAR',
          duration: language === 'ar' ? 'من 7 إلى 10 أيام عمل' : '7 to 10 business days',
          icon: 'school'
        },
        {
          id: 'teacher-license',
          title: language === 'ar' ? 'رخصة التدريس' : 'Teaching License',
          description: language === 'ar'
            ? 'ترخيص ممارسة مهنة التدريس'
            : 'Licensing of teaching profession practice',
          price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'teacher'
        },
        {
          id: 'curriculum-approval',
          title: language === 'ar' ? 'اعتماد المناهج' : 'Curriculum Approval',
          description: language === 'ar'
            ? 'اعتماد المناهج الدراسية والبرامج التعليمية'
            : 'Approval of curricula and educational programs',
          price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
          duration: language === 'ar' ? 'من 5 إلى 7 أيام عمل' : '5 to 7 business days',
          icon: 'curriculum'
        },
        {
          id: 'student-records',
          title: language === 'ar' ? 'السجلات الطلابية' : 'Student Records',
          description: language === 'ar'
            ? 'إدارة السجلات الطلابية والشهادات'
            : 'Management of student records and certificates',
          price: language === 'ar' ? 'يبدأ من 500 ريال' : 'Starting from 500 SAR',
          duration: language === 'ar' ? 'من 1 إلى 3 أيام عمل' : '1 to 3 business days',
          icon: 'records'
        },
        {
          id: 'education-consultation',
          title: language === 'ar' ? 'الاستشارات التعليمية' : 'Educational Consultations',
          description: language === 'ar'
            ? 'استشارات تعليمية متخصصة في القوانين التعليمية'
            : 'Specialized educational consultations in educational laws',
          price: language === 'ar' ? 'يبدأ من 800 ريال' : 'Starting from 800 SAR',
          duration: language === 'ar' ? 'ساعة واحدة' : '1 hour',
          icon: 'consulting'
        },
        {
          id: 'accreditation',
          title: language === 'ar' ? 'الاعتماد الأكاديمي' : 'Academic Accreditation',
          description: language === 'ar'
            ? 'اعتماد المؤسسات التعليمية والبرامج الأكاديمية'
            : 'Accreditation of educational institutions and academic programs',
          price: language === 'ar' ? 'يبدأ من 4000 ريال' : 'Starting from 4000 SAR',
          duration: language === 'ar' ? 'من 10 إلى 15 يوم عمل' : '10 to 15 business days',
          icon: 'accreditation'
        },
        {
          id: 'educational-resources',
          title: language === 'ar' ? 'الموارد التعليمية' : 'Educational Resources',
          description: language === 'ar'
            ? 'توفير الموارد التعليمية والكتب الدراسية'
            : 'Provision of educational resources and textbooks',
          price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
          duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
          icon: 'resources'
        }
      ]
    }
  };

  const company = companyData[companyId as keyof typeof companyData];

  if (!company) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === 'ar' ? 'الشركة غير موجودة' : 'Company Not Found'}
          </h1>
          <Link href="/legalservices" className="text-green-600 hover:text-green-700">
            {language === 'ar' ? 'العودة إلى الخدمات القانونية' : 'Back to Legal Services'}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[400px]"
          style={{
            background: 'linear-gradient(86.9deg, rgba(27, 128, 54, 0.47) -14.86%, rgba(2, 6, 3, 0.47) 94%)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/bgabout.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center text-white">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {company.name}
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {company.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <ServicesGrid
        services={company.services}
        baseHref={`/legalservices/${companyId}`}
      />

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
