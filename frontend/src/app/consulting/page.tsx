'use client';

import { 
  Header, 
  Footer,
  CTASection,
  ServicesGrid,
  PartnersSection
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from 'react';

export default function ConsultingServicesPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const consultingServices = [
    {
      id: 'company-formation',
      title: language === 'ar' ? 'تأسيس الشركات' : 'Company Formation',
      description: language === 'ar' 
        ? 'ابدأ مشروعك بثقة مع خدمات تأسيس الشركات واستخراج السجلات التجارية بسرعة وسهولة'
        : 'Start your project with confidence with company formation services and commercial register extraction quickly and easily',
      icon: 'building',
      price: language === 'ar' ? 'يبدأ من 2000 ريال' : 'Starting from 2000 SAR',
      duration: language === 'ar' ? 'من 3 إلى 5 أيام عمل' : '3 to 5 business days',
      features: [
        language === 'ar' ? 'استشارة مجانية قبل البدء' : 'Free consultation before starting',
        language === 'ar' ? 'إعداد جميع المستندات المطلوبة' : 'Preparation of all required documents',
        language === 'ar' ? 'متابعة الإجراءات حتى النهاية' : 'Follow-up procedures until completion',
        language === 'ar' ? 'دعم فني مستمر' : 'Continuous technical support'
      ],
      requirements: [
        language === 'ar' ? 'نسخة من الهوية الوطنية أو الإقامة' : 'Copy of national ID or residence',
        language === 'ar' ? 'بيانات الشركاء (في حال تأسيس شركة)' : 'Partners data (in case of company formation)',
        language === 'ar' ? 'العنوان الوطني' : 'National address',
        language === 'ar' ? 'اسم تجاري مقترح' : 'Proposed trade name'
      ],
      steps: [
        {
          title: language === 'ar' ? 'اختر الخدمة' : 'Choose Service',
          description: language === 'ar' ? 'اختر الخدمة المطلوبة من قائمة خدماتنا' : 'Choose the required service from our services list',
          icon: 'choice'
        },
        {
          title: language === 'ar' ? 'قدم الطلب أونلاين' : 'Submit Request Online',
          description: language === 'ar' ? 'املأ النموذج بالتفاصيل المطلوبة' : 'Fill out the form with required details',
          icon: 'form'
        },
        {
          title: language === 'ar' ? 'إتمام التنفيذ' : 'Complete Execution',
          description: language === 'ar' ? 'نبدأ العمل على خدمتك وتسليمها في الموعد المحدد' : 'We start working on your service and deliver it on time',
          icon: 'complete'
        }
      ]
    },
    {
      id: 'business-consulting',
      title: language === 'ar' ? 'الاستشارات التجارية' : 'Business Consulting',
      description: language === 'ar'
        ? 'استشارات متخصصة في تطوير الأعمال وتحسين الأداء التجاري'
        : 'Specialized consulting in business development and commercial performance improvement',
      icon: 'consulting',
      price: language === 'ar' ? 'يبدأ من 1500 ريال' : 'Starting from 1500 SAR',
      duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
      features: [
        language === 'ar' ? 'تحليل شامل للأعمال' : 'Comprehensive business analysis',
        language === 'ar' ? 'توصيات استراتيجية' : 'Strategic recommendations',
        language === 'ar' ? 'خطة عمل مفصلة' : 'Detailed business plan',
        language === 'ar' ? 'متابعة التنفيذ' : 'Implementation follow-up'
      ],
      requirements: [
        language === 'ar' ? 'معلومات عن النشاط التجاري' : 'Information about commercial activity',
        language === 'ar' ? 'البيانات المالية' : 'Financial data',
        language === 'ar' ? 'الأهداف المرجوة' : 'Desired goals',
        language === 'ar' ? 'الميزانية المتاحة' : 'Available budget'
      ],
      steps: [
        {
          title: language === 'ar' ? 'تحليل الوضع الحالي' : 'Current Situation Analysis',
          description: language === 'ar' ? 'نقوم بتحليل شامل للوضع الحالي لأعمالك' : 'We conduct a comprehensive analysis of your current business situation',
          icon: 'analysis'
        },
        {
          title: language === 'ar' ? 'إعداد التوصيات' : 'Prepare Recommendations',
          description: language === 'ar' ? 'نعد توصيات مخصصة لتحسين أدائك' : 'We prepare customized recommendations to improve your performance',
          icon: 'recommendations'
        },
        {
          title: language === 'ar' ? 'تنفيذ الخطة' : 'Implement Plan',
          description: language === 'ar' ? 'نساعدك في تنفيذ التوصيات ومتابعة النتائج' : 'We help you implement recommendations and track results',
          icon: 'implementation'
        }
      ]
    },
    {
      id: 'financial-consulting',
      title: language === 'ar' ? 'الاستشارات المالية' : 'Financial Consulting',
      description: language === 'ar'
        ? 'استشارات مالية متخصصة لإدارة الأموال وتحسين الأداء المالي'
        : 'Specialized financial consulting for money management and financial performance improvement',
      icon: 'finance',
      price: language === 'ar' ? 'يبدأ من 1200 ريال' : 'Starting from 1200 SAR',
      duration: language === 'ar' ? 'من 1 إلى 3 أيام عمل' : '1 to 3 business days',
      features: [
        language === 'ar' ? 'تحليل مالي شامل' : 'Comprehensive financial analysis',
        language === 'ar' ? 'تخطيط مالي استراتيجي' : 'Strategic financial planning',
        language === 'ar' ? 'إدارة المخاطر' : 'Risk management',
        language === 'ar' ? 'تحسين التدفق النقدي' : 'Cash flow optimization'
      ],
      requirements: [
        language === 'ar' ? 'البيانات المالية الحالية' : 'Current financial data',
        language === 'ar' ? 'كشوف الحسابات' : 'Account statements',
        language === 'ar' ? 'الميزانيات العمومية' : 'Balance sheets',
        language === 'ar' ? 'قائمة الدخل' : 'Income statements'
      ],
      steps: [
        {
          title: language === 'ar' ? 'مراجعة البيانات المالية' : 'Financial Data Review',
          description: language === 'ar' ? 'نراجع البيانات المالية الحالية ونحلل الأداء' : 'We review current financial data and analyze performance',
          icon: 'review'
        },
        {
          title: language === 'ar' ? 'إعداد التوصيات المالية' : 'Prepare Financial Recommendations',
          description: language === 'ar' ? 'نعد توصيات مالية مخصصة لتحسين الأداء' : 'We prepare customized financial recommendations to improve performance',
          icon: 'financial-plan'
        },
        {
          title: language === 'ar' ? 'تنفيذ الاستراتيجية' : 'Implement Strategy',
          description: language === 'ar' ? 'نساعدك في تنفيذ الاستراتيجية المالية الموصى بها' : 'We help you implement the recommended financial strategy',
          icon: 'strategy'
        }
      ]
    },
    {
      id: 'marketing-consulting',
      title: language === 'ar' ? 'الاستشارات التسويقية' : 'Marketing Consulting',
      description: language === 'ar'
        ? 'استشارات تسويقية متخصصة لتعزيز حضورك في السوق وزيادة المبيعات'
        : 'Specialized marketing consulting to enhance your market presence and increase sales',
      icon: 'marketing',
      price: language === 'ar' ? 'يبدأ من 1800 ريال' : 'Starting from 1800 SAR',
      duration: language === 'ar' ? 'من 3 إلى 6 أيام عمل' : '3 to 6 business days',
      features: [
        language === 'ar' ? 'استراتيجية تسويقية شاملة' : 'Comprehensive marketing strategy',
        language === 'ar' ? 'تحليل السوق والمنافسين' : 'Market and competitor analysis',
        language === 'ar' ? 'خطة تسويق رقمي' : 'Digital marketing plan',
        language === 'ar' ? 'قياس الأداء والتطوير' : 'Performance measurement and development'
      ],
      requirements: [
        language === 'ar' ? 'معلومات عن المنتج أو الخدمة' : 'Information about product or service',
        language === 'ar' ? 'الجمهور المستهدف' : 'Target audience',
        language === 'ar' ? 'الميزانية التسويقية' : 'Marketing budget',
        language === 'ar' ? 'الأهداف التسويقية' : 'Marketing objectives'
      ],
      steps: [
        {
          title: language === 'ar' ? 'تحليل السوق' : 'Market Analysis',
          description: language === 'ar' ? 'نحلل السوق والمنافسين ونحدد الفرص' : 'We analyze the market and competitors and identify opportunities',
          icon: 'market-analysis'
        },
        {
          title: language === 'ar' ? 'إعداد الاستراتيجية' : 'Strategy Preparation',
          description: language === 'ar' ? 'نعد استراتيجية تسويقية مخصصة لأعمالك' : 'We prepare a customized marketing strategy for your business',
          icon: 'strategy-prep'
        },
        {
          title: language === 'ar' ? 'تنفيذ الحملات' : 'Campaign Implementation',
          description: language === 'ar' ? 'نساعدك في تنفيذ الحملات التسويقية ومتابعة النتائج' : 'We help you implement marketing campaigns and track results',
          icon: 'campaign'
        }
      ]
    },
    {
      id: 'hr-consulting',
      title: language === 'ar' ? 'الاستشارات الإدارية' : 'HR Consulting',
      description: language === 'ar'
        ? 'استشارات إدارية متخصصة في إدارة الموارد البشرية وتطوير الأداء المؤسسي'
        : 'Specialized administrative consulting in human resources management and institutional performance development',
      icon: 'hr',
      price: language === 'ar' ? 'يبدأ من 1000 ريال' : 'Starting from 1000 SAR',
      duration: language === 'ar' ? 'من 2 إلى 4 أيام عمل' : '2 to 4 business days',
      features: [
        language === 'ar' ? 'تطوير السياسات الإدارية' : 'Administrative policy development',
        language === 'ar' ? 'إدارة الموارد البشرية' : 'Human resources management',
        language === 'ar' ? 'تقييم الأداء' : 'Performance evaluation',
        language === 'ar' ? 'التدريب والتطوير' : 'Training and development'
      ],
      requirements: [
        language === 'ar' ? 'هيكل المؤسسة الحالي' : 'Current organizational structure',
        language === 'ar' ? 'عدد الموظفين' : 'Number of employees',
        language === 'ar' ? 'السياسات الحالية' : 'Current policies',
        language === 'ar' ? 'الأهداف المؤسسية' : 'Institutional objectives'
      ],
      steps: [
        {
          title: language === 'ar' ? 'تقييم الوضع الحالي' : 'Current Situation Assessment',
          description: language === 'ar' ? 'نقيم الوضع الإداري الحالي ونحدد نقاط التحسين' : 'We assess the current administrative situation and identify improvement points',
          icon: 'assessment'
        },
        {
          title: language === 'ar' ? 'إعداد الخطة الإدارية' : 'Administrative Plan Preparation',
          description: language === 'ar' ? 'نعد خطة إدارية شاملة لتطوير المؤسسة' : 'We prepare a comprehensive administrative plan for institutional development',
          icon: 'admin-plan'
        },
        {
          title: language === 'ar' ? 'تنفيذ التطوير' : 'Development Implementation',
          description: language === 'ar' ? 'نساعدك في تنفيذ التطويرات الإدارية ومتابعة النتائج' : 'We help you implement administrative developments and track results',
          icon: 'development'
        }
      ]
    },
    {
      id: 'technical-consulting',
      title: language === 'ar' ? 'الاستشارات التقنية' : 'Technical Consulting',
      description: language === 'ar'
        ? 'استشارات تقنية متخصصة في تطوير الأنظمة التقنية وتحسين العمليات الرقمية'
        : 'Specialized technical consulting in system development and digital process improvement',
      icon: 'technical',
      price: language === 'ar' ? 'يبدأ من 2500 ريال' : 'Starting from 2500 SAR',
      duration: language === 'ar' ? 'من 5 إلى 10 أيام عمل' : '5 to 10 business days',
      features: [
        language === 'ar' ? 'تحليل الأنظمة الحالية' : 'Current system analysis',
        language === 'ar' ? 'تطوير الحلول التقنية' : 'Technical solution development',
        language === 'ar' ? 'تحسين العمليات الرقمية' : 'Digital process improvement',
        language === 'ar' ? 'التدريب والدعم التقني' : 'Training and technical support'
      ],
      requirements: [
        language === 'ar' ? 'الأنظمة التقنية الحالية' : 'Current technical systems',
        language === 'ar' ? 'متطلبات العمل' : 'Business requirements',
        language === 'ar' ? 'الميزانية التقنية' : 'Technical budget',
        language === 'ar' ? 'الأهداف التقنية' : 'Technical objectives'
      ],
      steps: [
        {
          title: language === 'ar' ? 'تحليل الأنظمة' : 'System Analysis',
          description: language === 'ar' ? 'نحلل الأنظمة التقنية الحالية ونحدد نقاط التحسين' : 'We analyze current technical systems and identify improvement points',
          icon: 'system-analysis'
        },
        {
          title: language === 'ar' ? 'تصميم الحلول' : 'Solution Design',
          description: language === 'ar' ? 'نصمم حلول تقنية مخصصة لاحتياجاتك' : 'We design customized technical solutions for your needs',
          icon: 'solution-design'
        },
        {
          title: language === 'ar' ? 'تنفيذ التطوير' : 'Development Implementation',
          description: language === 'ar' ? 'نساعدك في تنفيذ الحلول التقنية وتقديم الدعم المستمر' : 'We help you implement technical solutions and provide continuous support',
          icon: 'tech-implementation'
        }
      ]
    }
  ];

  // Filter services based on search term
  const filteredServices = consultingServices.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[500px]"
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
                {language === 'ar' ? 'الاستشارات المتخصصة' : 'Specialized Consulting'}
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'استشارات متخصصة في مختلف المجالات التجارية والإدارية لمساعدتك في اتخاذ القرارات الصحيحة وتحقيق أهدافك'
                  : 'Specialized consulting in various business and administrative fields to help you make the right decisions and achieve your goals'
                }
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <div className={`absolute inset-y-0 flex items-center pointer-events-none ${language === 'ar' ? 'right-0 pr-4' : 'left-0 pl-4'}`}>
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'ابحث عن الخدمة التي تحتاجها...' : 'Search for the service you need...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 ${language === 'ar' ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'}`}
                    style={{ fontFamily: 'var(--font-almarai)' }}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className={`absolute inset-y-0 flex items-center text-white/70 hover:text-white transition-colors ${language === 'ar' ? 'left-0 pl-4' : 'right-0 pr-4'}`}
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <ServicesGrid
        services={filteredServices}
        baseHref="/consulting"
        title={language === 'ar' ? 'خدماتنا الاستشارية' : 'Our Consulting Services'}
        description={language === 'ar' 
          ? 'اختر الخدمة الاستشارية المناسبة واحصل على الدعم المتخصص الذي تحتاجه'
          : 'Choose the appropriate consulting service and get the specialized support you need'
        }
      />

      {/* CTA Section */}
      <CTASection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      <Footer />
    </div>
  );
}