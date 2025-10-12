'use client';

import Image from 'next/image';
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
    companyFormation: { ar: 'تأسيس الشركات', en: 'Company Formation' },
    home: { ar: 'الرئيسية', en: 'Home' },
    aboutUs: { ar: 'من نحن', en: 'About Us' },
    services: { ar: 'الخدمات', en: 'Services' },
    offers: { ar: 'العروض', en: 'Offers' },
    blog: { ar: 'المدونة', en: 'Blog' },
    slogan: { ar: 'إتمام... وجهتك الأولى لإنجاز أعمالك بثقة وسهولة.', en: 'Etmam... Your first destination to accomplish your business with confidence and ease.' },
    privacyPolicy: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    termsConditions: { ar: 'الشروط والاحكام', en: 'Terms and Conditions' },
  } as const;

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
         <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Column 1: Contact Us */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-base sm:text-lg md:text-xl border-b-2 border-white pb-2"
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
                   <span className="text-xs sm:text-sm md:text-base" style={{ fontFamily: 'var(--font-almarai)' }}>{DICT.email[language]}</span>
                </div>
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                   <span className="text-xs sm:text-sm md:text-base" style={{ fontFamily: 'var(--font-almarai)' }}>{DICT.phone1[language]}</span>
                </div>
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                   <span className="text-xs sm:text-sm md:text-base" style={{ fontFamily: 'var(--font-almarai)' }}>{DICT.phone2[language]}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Consulting Services */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-base sm:text-lg md:text-xl border-b-2 border-white pb-2"
                 style={{ 
                   textDecoration: 'underline',
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.consultingServices[language]}
              </h3>
              <div className="space-y-2">
                {[...Array(6)].map((_, index) => (
                   <div key={index} className="text-white text-xs sm:text-sm md:text-base" style={{ fontFamily: 'var(--font-almarai)' }}>
                     {DICT.companyFormation[language]}
                   </div>
                ))}
              </div>
            </div>

            {/* Column 3: Legal Services */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-base sm:text-lg md:text-xl border-b-2 border-white pb-2"
                 style={{ 
                   textDecoration: 'underline',
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.legalServices[language]}
              </h3>
              <div className="space-y-2">
                {[...Array(6)].map((_, index) => (
                   <div key={index} className="text-white text-xs sm:text-sm md:text-base" style={{ fontFamily: 'var(--font-almarai)' }}>
                     {DICT.companyFormation[language]}
                   </div>
                ))}
              </div>
            </div>

            {/* Column 4: Quick Links */}
            <div className="space-y-4">
               <h3 
                 className="text-white font-bold text-base sm:text-lg md:text-xl border-b-2 border-white pb-2"
                 style={{ 
                   textDecoration: 'underline',
                   fontFamily: 'var(--font-almarai)',
                 }}
               >
                {DICT.quickLinks[language]}
              </h3>
              <div className="space-y-2">
                 <div className="text-white text-xs sm:text-sm md:text-base hover:text-gray-200 cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.home[language]}
                 </div>
                 <div className="text-white text-xs sm:text-sm md:text-base hover:text-gray-200 cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.aboutUs[language]}
                 </div>
                 <div className="text-white text-xs sm:text-sm md:text-base hover:text-gray-200 cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.services[language]}
                 </div>
                 <div className="text-white text-xs sm:text-sm md:text-base hover:text-gray-200 cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.offers[language]}
                 </div>
                 <div className="text-white text-xs sm:text-sm md:text-base hover:text-gray-200 cursor-pointer" style={{ fontFamily: 'var(--font-almarai)' }}>
                   {DICT.blog[language]}
                 </div>
              </div>
            </div>

            {/* Column 5: Logo and Slogan */}
            <div className="space-y-4">
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src="/logo1.png"
                  alt="Etmam"
                  width={120}
                  height={84}
                  className="object-contain mb-4 brightness-0 invert w-[80px] h-[56px] sm:w-[100px] sm:h-[70px] md:w-[120px] md:h-[84px] lg:w-[150px] lg:h-[105px]"
                />
                 <div 
                   className="text-white text-xs sm:text-sm md:text-base leading-relaxed"
                   style={{ 
                     textAlign: language === 'ar' ? 'right' : 'left',
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
       <div className="bg-white py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 sm:space-x-6">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

             {/* Legal Links */}
             <div className="flex items-center space-x-3 sm:space-x-4 text-green-600 text-xs sm:text-sm md:text-base">
               <span className="cursor-pointer hover:text-green-700 transition-colors" style={{ fontFamily: 'var(--font-almarai)' }}>
                 {DICT.privacyPolicy[language]}
               </span>
               <span className="text-gray-400">|</span>
               <span className="cursor-pointer hover:text-green-700 transition-colors" style={{ fontFamily: 'var(--font-almarai)' }}>
                 {DICT.termsConditions[language]}
               </span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
