'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactsInfo, useFooter } from '@/hooks/graphql';

const Footer = () => {
  const { language } = useLanguage();
  const { data: contactInfoData } = useContactsInfo();
  const { data: footerData } = useFooter();

  // Helper function to get localized value
  const getLocalizedValue = (value: any): string => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object' && value !== null) {
      return value[language] || value.ar || value.en || '';
    }
    return String(value);
  };

  const DICT = {
    contactUs: { ar: 'تواصل معنا', en: 'Contact Us' },
    email: { ar: contactInfoData?.email || 'Etmamm@gmail.com', en: contactInfoData?.email || 'Etmamm@gmail.com' },
    phone1: { ar: contactInfoData?.phone_number || '(00) 0000-0000', en: contactInfoData?.phone_number || '(00) 0000-0000' },
    phone2: { ar: contactInfoData?.whatsapp_number || '(00) 00000-0000', en: contactInfoData?.whatsapp_number || '(00) 00000-0000' },
    consultingServices: { ar: 'ابرز الخدمات الاستشارية', en: 'Key Consulting Services' },
    legalServices: { ar: 'ابرز الخدمات القانونية', en: 'Key Legal Services' },
    quickLinks: { ar: 'روابط سريعه', en: 'Quick Links' },
    home: { ar: 'الرئيسية', en: 'Home' },
    aboutUs: { ar: 'من نحن', en: 'About Us' },
    services: { ar: 'الخدمات', en: 'Services' },
    offers: { ar: 'العروض', en: 'Offers' },
    blog: { ar: 'المدونة', en: 'Blog' },
    packages: { ar: 'الباقات', en: 'Packages' },
    contact: { ar: 'تواصل معنا', en: 'Contact Us' },
    slogan: { ar: getLocalizedValue(footerData?.slogan) || 'إتمام... وجهتك الأولى لإنجاز أعمالك بثقة وسهولة.', en: getLocalizedValue(footerData?.slogan) || 'Etmam... Your first destination to accomplish your business with confidence and ease.' },
    privacyPolicy: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    termsConditions: { ar: 'الشروط والاحكام', en: 'Terms and Conditions' },
  } as const;

  // Default services data
  const defaultConsultingServices = [
    { ar: 'تأسيس الشركات', en: 'Company Formation', href: '/consulting' },
    { ar: 'الاستشارات التجارية', en: 'Business Consulting', href: '/consulting' },
    { ar: 'الاستشارات المالية', en: 'Financial Consulting', href: '/consulting' },
    { ar: 'الاستشارات التسويقية', en: 'Marketing Consulting', href: '/consulting' },
    { ar: 'الاستشارات الإدارية', en: 'HR Consulting', href: '/consulting' },
    { ar: 'الاستشارات التقنية', en: 'Technical Consulting', href: '/consulting' }
  ];

  const defaultLegalServices = [
    { ar: 'وزارة الصناعة والثروة المعدنية', en: 'Ministry of Industry and Mineral Resources', href: '/legalservices' },
    { ar: 'وزارة التجارة', en: 'Ministry of Commerce', href: '/legalservices' },
    { ar: 'وزارة المالية', en: 'Ministry of Finance', href: '/legalservices' },
    { ar: 'وزارة الموارد البشرية', en: 'Ministry of Human Resources', href: '/legalservices' },
    { ar: 'وزارة الصحة', en: 'Ministry of Health', href: '/legalservices' },
    { ar: 'وزارة التعليم', en: 'Ministry of Education', href: '/legalservices' }
  ];

  // Use Strapi data if available, otherwise use defaults
  const consultingServices = footerData?.consultingServices && footerData.consultingServices.length > 0
    ? footerData.consultingServices.map((service: any) => ({
        ar: getLocalizedValue(service.label),
        en: getLocalizedValue(service.label),
        href: service.href || '/consulting'
      }))
    : defaultConsultingServices;

  const legalServices = footerData?.legalServices && footerData.legalServices.length > 0
    ? footerData.legalServices.map((service: any) => ({
        ar: getLocalizedValue(service.label),
        en: getLocalizedValue(service.label),
        href: service.href || '/legalservices'
      }))
    : defaultLegalServices;

  // Quick links - use Strapi data if available
  const defaultQuickLinks = [
    { ar: DICT.home[language], en: DICT.home[language], href: '/' },
    { ar: DICT.aboutUs[language], en: DICT.aboutUs[language], href: '/about' },
    { ar: DICT.offers[language], en: DICT.offers[language], href: '/offers' },
    { ar: DICT.packages[language], en: DICT.packages[language], href: '/packages' },
    { ar: DICT.blog[language], en: DICT.blog[language], href: '/blog' },
    { ar: DICT.contact[language], en: DICT.contact[language], href: '/contact' }
  ];

  const quickLinks = footerData?.quickLinks && footerData.quickLinks.length > 0
    ? footerData.quickLinks.map((link: any) => ({
        ar: getLocalizedValue(link.label),
        en: getLocalizedValue(link.label),
        href: link.href || '#'
      }))
    : defaultQuickLinks;

  return (
    <footer 
      className="w-full"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
       {/* Upper Section - Green Gradient */}
       <div 
         className="relative py-16 sm:py-20 lg:py-24"
         style={{
           background: 'linear-gradient(135deg, #11613A 0%, #2A9A5B 100%)',
         }}
       >
         {/* Background Pattern */}
         <div 
           className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
           }}
         />
         <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            
            {/* Column 1: Contact Us */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 border-b border-white/30 pb-2"
                 style={{ 
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.contactUs[language]}
              </h3>
              <div className="space-y-4">
                <a 
                  href={`mailto:${contactInfoData?.email || 'Etmamm@gmail.com'}`}
                  className="flex items-center text-white/90 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                   <span className="text-sm sm:text-base md:text-lg lg:text-xl" style={{ fontFamily: 'var(--font-almarai)' }}>{contactInfoData?.email || DICT.email[language]}</span>
                </a>
                <a 
                  href={`tel:${contactInfoData?.phone_number || '(00) 0000-0000'}`}
                  className="flex items-center text-white/90 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                   <span className="text-sm sm:text-base md:text-lg lg:text-xl" style={{ fontFamily: 'var(--font-almarai)' }}>{contactInfoData?.phone_number || DICT.phone1[language]}</span>
                </a>
                <a 
                  href={`https://wa.me/${contactInfoData?.whatsapp_number?.replace(/[^0-9]/g, '') || '00000000000'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white/90 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                  </div>
                   <span className="text-sm sm:text-base md:text-lg lg:text-xl" style={{ fontFamily: 'var(--font-almarai)' }}>{contactInfoData?.whatsapp_number || DICT.phone2[language]}</span>
                </a>
              </div>
            </div>

            {/* Column 2: Consulting Services */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 border-b border-white/30 pb-2"
                 style={{ 
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.consultingServices[language]}
              </h3>
              <div className="space-y-2">
                {consultingServices.map((service: { ar: string; en: string; href: string }, index: number) => (
                   <Link 
                     key={index} 
                     href={service.href || '/consulting'} 
                     className="block text-white/90 text-sm sm:text-base md:text-lg lg:text-xl hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer py-1" 
                     style={{ fontFamily: 'var(--font-almarai)' }}
                   >
                     {service[language]}
                   </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Legal Services */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 border-b border-white/30 pb-2"
                 style={{ 
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.legalServices[language]}
              </h3>
              <div className="space-y-2">
                {legalServices.map((service: { ar: string; en: string; href: string }, index: number) => (
                   <Link 
                     key={index} 
                     href={service.href || '/legalservices'} 
                     className="block text-white/90 text-sm sm:text-base md:text-lg lg:text-xl hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer py-1" 
                     style={{ fontFamily: 'var(--font-almarai)' }}
                   >
                     {service[language]}
                   </Link>
                ))}
              </div>
            </div>

            {/* Column 4: Quick Links */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 border-b border-white/30 pb-2"
                 style={{ 
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.quickLinks[language]}
              </h3>
              <div className="space-y-2">
                {quickLinks.map((link: { ar: string; en: string; href: string }, index: number) => (
                  <Link 
                    key={index}
                    href={link.href} 
                    className="block text-white/90 text-sm sm:text-base md:text-lg lg:text-xl hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer py-1" 
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {link[language]}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 5: Logo and Slogan */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start space-y-6">
                {/* Logo Section */}
                <div className="flex flex-col items-center lg:items-start space-y-3">
                  {footerData?.logo?.url ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${footerData.logo.url}`}
                      alt={footerData.logo.name || 'Etmam'}
                      width={140}
                      height={98}
                      className="object-contain brightness-0 invert w-[120px] h-[84px] sm:w-[140px] sm:h-[98px] md:w-[160px] md:h-[112px] lg:w-[180px] lg:h-[126px]"
                    />
                  ) : (
                    <Image
                      src="/images/logos/logo.png"
                      alt="Etmam"
                      width={140}
                      height={98}
                      className="object-contain brightness-0 invert w-[120px] h-[84px] sm:w-[140px] sm:h-[98px] md:w-[160px] md:h-[112px] lg:w-[180px] lg:h-[126px]"
                    />
                  )}
                  <div className="text-center lg:text-right">
                    <h4 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2" style={{ fontFamily: 'var(--font-almarai)' }}>
                      {getLocalizedValue(footerData?.companyName) || 'إتمام'}
                    </h4>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg" style={{ fontFamily: 'var(--font-almarai)' }}>
                      {getLocalizedValue(footerData?.companyTagline) || 'ETMAM Business Solutions'}
                    </p>
                  </div>
                </div>
                
                {/* Slogan Section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div 
                    className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-right"
                    style={{ 
                      fontFamily: 'var(--font-almarai)',
                    }}
                  >
                    {DICT.slogan[language]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Divider Line */}
       <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

       {/* Lower Section - Light Background */}
       <div className="bg-gradient-to-r from-gray-50 to-white py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center space-y-6 sm:space-y-8 lg:space-y-0 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Logo */}
            <div className="flex items-center">
              {footerData?.logo?.url ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${footerData.logo.url}`}
                  alt={footerData.logo.name || 'Etmam'}
                  width={80}
                  height={56}
                  className="object-contain"
                />
              ) : (
                <Image
                  src="/images/logos/logo.png"
                  alt="Etmam"
                  width={80}
                  height={56}
                  className="object-contain"
                />
              )}
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5">
              {contactInfoData?.facebook_link && (
                <a 
                  href={contactInfoData.facebook_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  <span className="text-white font-bold text-lg sm:text-xl">f</span>
                </a>
              )}
              {contactInfoData?.twitter_link && (
                <a 
                  href={contactInfoData.twitter_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              )}
              {contactInfoData?.instagram_link && (
                <a 
                  href={contactInfoData.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>

             {/* Legal Links */}
             <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 text-green-600 text-xs sm:text-sm md:text-base">
               <Link href="/privacy-policy" className="cursor-pointer hover:text-green-700 transition-colors text-center" style={{ fontFamily: 'var(--font-almarai)' }}>
                 {DICT.privacyPolicy[language]}
               </Link>
               <span className="hidden sm:block text-gray-400">|</span>
               <Link href="/terms-conditions" className="cursor-pointer hover:text-green-700 transition-colors text-center" style={{ fontFamily: 'var(--font-almarai)' }}>
                 {DICT.termsConditions[language]}
               </Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
