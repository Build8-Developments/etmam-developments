'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  isActive?: boolean;
}

interface ServicesProps {
  title?: string;
  description?: string;
  services?: ServiceCard[];
  ctaButton?: {
    label: string;
    href: string;
  };
}

export default function ServicesSection({
  title,
  description,
  services,
  ctaButton,
}: ServicesProps) {
  const { language } = useLanguage();

  // Default content
  const defaultTitle = language === 'ar' 
    ? 'خدماتنا التي تلبي احتياجاتك' 
    : 'Our Services That Meet Your Needs';
  
  const defaultDescription = language === 'ar'
    ? 'في إتمام نقدم مجموعة من الخدمات التجارية والإدارية المصممة لتسهيل رحلتك في تأسيس وإدارة أعمالك بكفاءة واحترافية.'
    : 'At Etmam, we offer a range of commercial and administrative services designed to facilitate your journey in establishing and managing your business efficiently and professionally.';

  const defaultServices: ServiceCard[] = [
    {
      icon: 'building',
      title: language === 'ar' ? 'تأسيس الشركات' : 'Company Formation',
      description: language === 'ar' 
        ? 'خدمة متكاملة تشمل تجهيز المستندات التسجيل والحصول على السجل التجاري'
        : 'An integrated service that includes preparing registration documents and obtaining the commercial register',
      isActive: true, // First card is highlighted
    },
    {
      icon: 'license',
      title: language === 'ar' ? 'استخراج التراخيص' : 'License Extraction',
      description: language === 'ar'
        ? 'نقدم خدمات استخراج جميع أنواع التراخيص التجارية والصناعية'
        : 'We provide services for extracting all types of commercial and industrial licenses',
    },
    {
      icon: 'consulting',
      title: language === 'ar' ? 'الاستشارات القانونية' : 'Legal Consultations',
      description: language === 'ar'
        ? 'استشارات قانونية متخصصة في مجال الأعمال والتجارة'
        : 'Specialized legal consultations in business and commerce',
    },
    {
      icon: 'accounting',
      title: language === 'ar' ? 'المحاسبة والضرائب' : 'Accounting & Taxes',
      description: language === 'ar'
        ? 'خدمات محاسبية شاملة وإدارة الضرائب والزكاة'
        : 'Comprehensive accounting services and tax and zakat management',
    },
    {
      icon: 'hr',
      title: language === 'ar' ? 'الموارد البشرية' : 'Human Resources',
      description: language === 'ar'
        ? 'إدارة شؤون الموظفين والرواتب والتأمينات الاجتماعية'
        : 'Employee affairs management, salaries and social insurance',
    },
    {
      icon: 'marketing',
      title: language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing',
      description: language === 'ar'
        ? 'خدمات تسويقية متكاملة لتعزيز حضورك الرقمي'
        : 'Integrated marketing services to enhance your digital presence',
    },
  ];

  const defaultCTA = {
    label: language === 'ar' ? 'عرض المزيد' : 'Show More',
    href: '/services',
  };

  const displayServices = services || defaultServices;
  const displayCTA = ctaButton || defaultCTA;

  const getIconComponent = (iconType: string, isActive: boolean) => {
    const iconColor = isActive ? '#FFFFFF' : '#90C054';
    const iconSize = 'clamp(20px, 24px, 28px)';
    
    switch (iconType) {
      case 'building':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21V19L12 5L3 19V21ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 19H11V17H9V19ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM13 19H15V17H13V19ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM17 19H19V17H17V19ZM17 15H19V13H17V15ZM17 11H19V9H17V11Z" fill={iconColor}/>
          </svg>
        );
      case 'license':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill={iconColor}/>
          </svg>
        );
      case 'consulting':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill={iconColor}/>
          </svg>
        );
      case 'accounting':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM7 6V19H17V6H7ZM9 8H15V10H9V8ZM9 12H15V14H9V12ZM9 16H15V18H9V16Z" fill={iconColor}/>
          </svg>
        );
      case 'hr':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill={iconColor}/>
          </svg>
        );
      case 'marketing':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM12 4.5L11.5 7.5L8.5 8L11.5 8.5L12 11.5L12.5 8.5L15.5 8L12.5 7.5L12 4.5Z" fill={iconColor}/>
          </svg>
        );
      default:
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill={iconColor}/>
          </svg>
        );
    }
  };

  return (
    <section 
      className="relative overflow-hidden w-full"
      style={{
        width: '100%',
        height: 'min(clamp(800px, 950px, 1100px), auto)',
        minHeight: 'clamp(800px, 950px, 1100px)',
        background: 'linear-gradient(223.26deg, rgba(19, 113, 67, 0.81) 24.24%, #9BE43F 138.37%)',
        opacity: 1,
        borderTopLeftRadius: 'clamp(20px, 40px, 120px)',
        borderTopRightRadius: '0px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        margin: 'clamp(30px, 60px, 80px) 0',
        padding: '0',
      }}
    >
      {/* Net pattern overlay - top */}
      <div 
        className="absolute top-0 left-0 w-full opacity-15"
        style={{
          height: 'clamp(80px, 120px, 160px)',
          backgroundImage: 'url(/net.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Net pattern overlay - bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full opacity-15"
        style={{
          height: 'clamp(80px, 120px, 160px)',
          backgroundImage: 'url(/net.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 h-full flex flex-col" style={{ padding: 'clamp(20px, 40px, 80px) clamp(8px, 16px, 80px)' }}>
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 
            className="text-white font-bold mb-4 sm:mb-6"
            style={{
              fontFamily: 'var(--font-almarai)',
              fontSize: 'clamp(20px, 3.5vw, 48px)',
              lineHeight: '1.2',
              fontWeight: 700,
              marginBottom: 'clamp(12px, 20px, 32px)',
            }}
          >
            {title || defaultTitle}
          </h2>
          
          <p 
            className="text-white/90 max-w-4xl mx-auto"
            style={{
              fontFamily: 'var(--font-almarai)',
              fontSize: 'clamp(14px, 2vw, 20px)',
              lineHeight: '1.6',
              fontWeight: 400,
              padding: '0 clamp(8px, 16px, 32px)',
            }}
          >
            {description || defaultDescription}
          </p>
        </div>

         {/* Services Grid */}
         <div className="flex-1 flex items-center justify-center mb-8 sm:mb-12">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-none px-2 sm:px-4 md:px-8 lg:px-12">
            {displayServices.map((service, index) => (
               <div
                 key={index}
                 className={`
                   transition-all duration-300 hover:scale-105 cursor-pointer border
                   ${service.isActive 
                     ? 'bg-green-700 shadow-xl border-green-700' 
                     : 'bg-white shadow-lg hover:shadow-xl border-gray-100'
                   }
                 `}
                 style={{
                   width: 'clamp(250px, 90vw, 400px)',
                   maxWidth: 'clamp(250px, 90vw, 400px)',
                   height: 'clamp(180px, 200px, auto)',
                   minHeight: 'clamp(180px, 200px, auto)',
                   borderRadius: 'clamp(10px, 15px, 20px)',
                   borderWidth: '1px',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   textAlign: 'center',
                   padding: 'clamp(16px, 20px, 36px)',
                   margin: '0 auto',
                   justifyContent: 'space-between',
                 }}
               >
                 {/* Icon */}
                 <div className="flex items-center justify-center" style={{ width: 'clamp(32px, 40px, 56px)', height: 'clamp(32px, 40px, 56px)', marginBottom: 'clamp(8px, 12px, 20px)' }}>
                   {getIconComponent(service.icon, service.isActive || false)}
                 </div>

                 {/* Content Container */}
                 <div className="flex-1 flex flex-col justify-center">
                   {/* Title */}
                   <h3 
                     className={`font-bold ${
                       service.isActive ? 'text-white' : 'text-gray-800'
                     }`}
                     style={{
                       fontFamily: 'var(--font-almarai)',
                       fontSize: 'clamp(12px, 16px, 22px)',
                       lineHeight: '1.3',
                       fontWeight: 700,
                       marginBottom: 'clamp(6px, 8px, 16px)',
                     }}
                   >
                     {service.title}
                   </h3>

                   {/* Description */}
                   <p 
                     className={`leading-relaxed ${
                       service.isActive ? 'text-white/90' : 'text-gray-600'
                     }`}
                     style={{
                       fontFamily: 'var(--font-almarai)',
                       fontSize: 'clamp(10px, 12px, 16px)',
                       lineHeight: '1.5',
                       fontWeight: 400,
                     }}
                   >
                     {service.description}
                   </p>
                 </div>
              </div>
            ))}
          </div>
        </div>

         {/* CTA Button */}
         <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-8">
           <Link
             href={displayCTA.href}
             className="bg-green-700 hover:bg-green-800 text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl rounded-lg transform hover:scale-105 flex items-center justify-center"
             style={{
               fontFamily: 'var(--font-almarai)',
               fontSize: 'clamp(14px, 16px, 20px)',
               fontWeight: 600,
               padding: 'clamp(10px, 14px, 22px) clamp(24px, 32px, 48px)',
               minWidth: 'clamp(140px, 180px, 260px)',
               minHeight: 'clamp(40px, 48px, 64px)',
               textAlign: 'center',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               letterSpacing: '0.5px',
               textDecoration: 'none',
               border: 'none',
               outline: 'none',
               cursor: 'pointer',
               direction: language === 'ar' ? 'rtl' : 'ltr',
             }}
           >
             <span 
               className="text-center w-full"
               style={{
                 textAlign: 'center',
                 display: 'block',
                 width: '100%',
                 direction: language === 'ar' ? 'rtl' : 'ltr',
               }}
             >
               {displayCTA.label}
             </span>
           </Link>
         </div>
      </div>
    </section>
  );
}
