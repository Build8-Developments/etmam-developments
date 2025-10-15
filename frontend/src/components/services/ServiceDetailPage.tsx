'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import Link from 'next/link';

interface ServiceStep {
  title: string;
  description: string;
  icon: string;
}

interface ServiceDetail {
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  companyName?: string;
  features: string[];
  requirements: string[];
  steps: ServiceStep[];
}

interface ServiceDetailPageProps {
  service: ServiceDetail;
  backHref: string;
  onRequestService?: () => void;
}

const ServiceDetailPage = ({ 
  service, 
  backHref, 
  onRequestService 
}: ServiceDetailPageProps) => {
  const { language } = useLanguage();

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
      case 'consulting':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#90C054"/>
          </svg>
        );
      case 'tax':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM7 6V19H17V6H7ZM9 8H15V10H9V8ZM9 12H15V14H9V12ZM9 16H15V18H9V16Z" fill="#90C054"/>
          </svg>
        );
      case 'work':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19ZM12 9C10.9 9 10 9.9 10 11S10.9 13 12 13 14 12.1 14 11 13.1 9 12 9ZM16 17H8V16C8 14.9 8.9 14 10 14H14C15.1 14 16 14.9 16 16V17Z" fill="#90C054"/>
          </svg>
        );
      case 'visa':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12H16V14H8V12ZM8 16H16V18H8V16Z" fill="#90C054"/>
          </svg>
        );
      case 'iqama':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12H16V14H8V12ZM8 16H16V18H8V16Z" fill="#90C054"/>
          </svg>
        );
      case 'health':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#90C054"/>
          </svg>
        );
      case 'school':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#90C054"/>
          </svg>
        );
      case 'finance':
      case 'marketing':
      case 'hr':
      case 'technical':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" fill="#90C054"/>
          </svg>
        );
      case 'choice':
      case 'form':
      case 'complete':
      case 'analysis':
      case 'recommendations':
      case 'implementation':
      case 'review':
      case 'financial-plan':
      case 'strategy':
      case 'market-analysis':
      case 'strategy-prep':
      case 'campaign':
      case 'assessment':
      case 'admin-plan':
      case 'development':
      case 'system-analysis':
      case 'solution-design':
      case 'tech-implementation':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#90C054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="relative py-24 lg:py-36 pt-32 md:pt-36 min-h-[500px]"
          style={{
            background: 'linear-gradient(135deg, rgba(27, 128, 54, 0.8) 0%, rgba(2, 6, 3, 0.9) 100%)',
            backdropFilter: 'blur(8px)',
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
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-black/40"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center text-white">
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30">
                  {getIconComponent(service.icon)}
                </div>
                <div className="max-w-4xl">
                  <h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {service.title}
                  </h1>
                  {service.companyName && (
                    <p 
                      className="text-xl md:text-2xl opacity-90 font-medium"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {service.companyName}
                    </p>
                  )}
                </div>
              </div>
              
              <p 
                className="text-lg md:text-xl mb-10 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold" style={{ fontFamily: 'var(--font-almarai)' }}>{service.price}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold" style={{ fontFamily: 'var(--font-almarai)' }}>{service.duration}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onRequestService}
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'احجز الخدمة' : 'Book Service'}
                </button>
                <Link
                  href={backHref}
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-2xl font-bold text-lg"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'العودة' : 'Go Back'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' ? 'وصف الخدمة' : 'Service Description'}
            </h2>
            <p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {service.description}
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'توفير الوقت والجهد' : 'Save Time & Effort'}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'توفر عليك عناء البحث عن مصممين وتقدم حلول شاملة'
                  : 'Saves you the trouble of searching for designers and offers comprehensive solutions'
                }
              </p>
            </div>

            <div className="bg-green-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'احترافية عالية' : 'High Professionalism'}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'فريق من المصممين المحترفين ذوي الخبرة الواسعة'
                  : 'A team of professional designers with extensive experience'
                }
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'سرعة في التنفيذ' : 'Fast Execution'}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'نلتزم بالمواعيد المحددة ونسلم أعمالنا في الوقت المناسب'
                  : 'We adhere to deadlines and deliver our work on time'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Requirements Section with Image */}
          <div className="mb-20">
            <div 
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
              style={{
                width: '1152px',
                height: '438.5px',
                margin: '0 auto'
              }}
            >
              {/* Image */}
              <div 
                className="absolute left-0 top-0"
                style={{
                  width: '528px',
                  height: '384px',
                  top: '27.25px'
                }}
              >
                <img 
                  src="/serv.jpg" 
                  alt={language === 'ar' ? 'اجتماع عمل' : 'Business Meeting'}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Requirements */}
              <div 
                className="absolute right-0 top-0 bg-white h-full flex flex-col justify-center pr-8 pl-16"
                style={{
                  width: '624px',
                  height: '438.5px'
                }}
              >
                <h2 
                  className="text-3xl font-bold text-gray-800 mb-8 text-right"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'المتطلبات والشروط' : 'Requirements & Conditions'}
                </h2>
                <ul className="space-y-6">
                  {service.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-4 text-right">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span 
                        className="text-gray-700 font-medium text-right leading-relaxed"
                        style={{ 
                          fontFamily: 'var(--font-almarai)',
                          lineHeight: '1.8'
                        }}
                      >
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' ? 'خطوات طلب الخدمة' : 'Steps to Request Service'}
            </h2>
            <p 
              className="text-lg text-gray-600"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' ? 'ثلاث خطوات بسيطة للحصول على خدمتك' : 'Three simple steps to get your service'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Choose Service */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'اختر الخدمة' : 'Choose Service'}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'حدد نوع التصميم المطلوب من قائمة خدماتنا المتنوعة'
                  : 'Specify the type of design required from our diverse list of services'
                }
              </p>
            </div>

            {/* Step 2: Submit Request Online */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'قدم الطلب أونلاين' : 'Submit Request Online'}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'املأ النموذج بالتفاصيل المطلوبة وارفق الملفات اللازمة'
                  : 'Fill out the form with the required details and attach the necessary files'
                }
              </p>
            </div>

            {/* Step 3: Complete Execution */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'إتمام التنفيذ' : 'Complete Execution'}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'نبدأ العمل على تصميمك وتسلمه في الموعد المحدد'
                  : 'We start working on your design and deliver it on time'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Duration */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' ? 'التسعير والمدة' : 'Pricing & Duration'}
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 bg-green-50 rounded-2xl px-8 py-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <p 
                  className="text-sm text-gray-600 font-medium"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'السعر' : 'Price'}
                </p>
                <p 
                  className="text-2xl font-bold text-green-600"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {service.price}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-blue-50 rounded-2xl px-8 py-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p 
                  className="text-sm text-gray-600 font-medium"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'المدة' : 'Duration'}
                </p>
                <p 
                  className="text-2xl font-bold text-blue-600"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {service.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ServiceDetailPage;
