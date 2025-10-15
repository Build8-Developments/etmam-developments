'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const DICT = {
    contactUs: { ar: 'تواصل معنا', en: 'Contact Us' },
    email: { ar: 'Etmamm@gmail.com', en: 'Etmamm@gmail.com' },
    phone1: { ar: '(00) 0000-0000', en: '(00) 0000-0000' },
    phone2: { ar: '(00) 00000-0000', en: '(00) 00000-0000' },
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
    slogan: { ar: 'إتمام... وجهتك الأولى لإنجاز أعمالك بثقة وسهولة.', en: 'Etmam... Your first destination to accomplish your business with confidence and ease.' },
    privacyPolicy: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    termsConditions: { ar: 'الشروط والاحكام', en: 'Terms and Conditions' },
  } as const;

  // Real services data
  const consultingServices = [
    { ar: 'تأسيس الشركات', en: 'Company Formation' },
    { ar: 'الاستشارات التجارية', en: 'Business Consulting' },
    { ar: 'الاستشارات المالية', en: 'Financial Consulting' },
    { ar: 'الاستشارات التسويقية', en: 'Marketing Consulting' },
    { ar: 'الاستشارات الإدارية', en: 'HR Consulting' },
    { ar: 'الاستشارات التقنية', en: 'Technical Consulting' }
  ];

  const legalServices = [
    { ar: 'وزارة الصناعة والثروة المعدنية', en: 'Ministry of Industry and Mineral Resources' },
    { ar: 'وزارة التجارة', en: 'Ministry of Commerce' },
    { ar: 'وزارة المالية', en: 'Ministry of Finance' },
    { ar: 'وزارة الموارد البشرية', en: 'Ministry of Human Resources' },
    { ar: 'وزارة الصحة', en: 'Ministry of Health' },
    { ar: 'وزارة التعليم', en: 'Ministry of Education' }
  ];

  return (
    <footer 
      className="w-full"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
       {/* Upper Section - Green Gradient */}
       <div 
         className="relative py-12 sm:py-16 lg:py-20"
         style={{
           background: 'linear-gradient(135deg, #11613A 0%, #2A9A5B 100%)',
         }}
       >
         {/* Background Image */}
         <div 
           className="absolute inset-0"
           style={{
             backgroundImage: 'url(/bgfooter.jpg)',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             opacity: 0.05,
             mixBlendMode: 'luminosity',
           }}
         />
         <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Column 1: Contact Us */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-lg sm:text-xl md:text-2xl border-b-2 border-white pb-2 mb-4"
                 style={{ 
                   textDecoration: 'underline',
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.contactUs[language]}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                   <span className="text-sm sm:text-base md:text-lg" style={{ fontFamily: 'var(--font-almarai)' }}>{DICT.email[language]}</span>
                </div>
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                   <span className="text-sm sm:text-base md:text-lg" style={{ fontFamily: 'var(--font-almarai)' }}>{DICT.phone1[language]}</span>
                </div>
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                   <span className="text-sm sm:text-base md:text-lg" style={{ fontFamily: 'var(--font-almarai)' }}>{DICT.phone2[language]}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Consulting Services */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-lg sm:text-xl md:text-2xl border-b-2 border-white pb-2 mb-4"
                 style={{ 
                   textDecoration: 'underline',
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.consultingServices[language]}
              </h3>
              <div className="space-y-2">
                {consultingServices.map((service, index) => (
                   <Link 
                     key={index} 
                     href="/consulting" 
                     className="block text-white text-sm sm:text-base md:text-lg hover:text-gray-200 transition-colors cursor-pointer" 
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
                 className="text-white font-bold text-lg sm:text-xl md:text-2xl border-b-2 border-white pb-2 mb-4"
                 style={{ 
                   textDecoration: 'underline',
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.legalServices[language]}
              </h3>
              <div className="space-y-2">
                {legalServices.map((service, index) => (
                   <Link 
                     key={index} 
                     href="/legalservices" 
                     className="block text-white text-sm sm:text-base md:text-lg hover:text-gray-200 transition-colors cursor-pointer" 
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
                 className="text-white font-bold text-lg sm:text-xl md:text-2xl border-b-2 border-white pb-2 mb-4"
                 style={{ 
                   textDecoration: 'underline',
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.quickLinks[language]}
              </h3>
              <div className="space-y-2">
                 <Link href="/" className="block text-white text-sm sm:text-base md:text-lg hover:text-gray-200 transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.home[language]}
                 </Link>
                 <Link href="/about" className="block text-white text-sm sm:text-base md:text-lg hover:text-gray-200 transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.aboutUs[language]}
                 </Link>
                 <Link href="/offers" className="block text-white text-sm sm:text-base md:text-lg hover:text-gray-200 transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.offers[language]}
                 </Link>
                 <Link href="/packages" className="block text-white text-sm sm:text-base md:text-lg hover:text-gray-200 transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.packages[language]}
                 </Link>
                 <Link href="/blog" className="block text-white text-sm sm:text-base md:text-lg hover:text-gray-200 transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.blog[language]}
                 </Link>
                 <Link href="/contact" className="block text-white text-sm sm:text-base md:text-lg hover:text-gray-200 transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.contact[language]}
                 </Link>
              </div>
            </div>

            {/* Column 5: Logo and Slogan */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start">
                <Image
                  src="/images/logos/logo.png"
                  alt="Etmam"
                  width={120}
                  height={84}
                  className="object-contain mb-4 brightness-0 invert w-[100px] h-[70px] sm:w-[120px] sm:h-[84px] md:w-[140px] md:h-[98px] lg:w-[150px] lg:h-[105px]"
                />
                 <div 
                   className="text-white text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-right max-w-xs lg:max-w-none"
                   style={{ 
                     textAlign: language === 'ar' ? 'center' : 'center',
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

       {/* Lower Section - Light Background */}
       <div className="bg-white py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <span className="text-white font-bold text-sm sm:text-base">f</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

             {/* Legal Links */}
             <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 text-green-600 text-sm sm:text-base">
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
