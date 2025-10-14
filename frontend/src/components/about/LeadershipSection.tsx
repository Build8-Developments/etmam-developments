'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LeadershipSection() {
  const { language } = useLanguage();

  return (
    <section 
      className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white"
      style={{
        minHeight: '549px',
      }}
    >
      {/* Diagonal cut overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(185.93deg, rgba(27, 128, 54, 0.69) 4.7%, rgba(0, 0, 0, 0.79) 92.71%)',
          clipPath: 'polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)',
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white py-8 sm:py-12 lg:py-16">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            style={{ 
              fontFamily: 'var(--font-almarai)',
              fontWeight: 700,
              lineHeight: '1.2',
              letterSpacing: '-1%',
            }}
          >
            {language === 'ar' ? 'ريادة الحلول التجارية والإدارية في المملكة' : 'Leadership in Commercial and Administrative Solutions in the Kingdom'}
          </h2>
          
          <p 
            className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-4"
            style={{ 
              fontFamily: 'var(--font-almarai)',
              fontWeight: 400,
              lineHeight: '1.6',
              letterSpacing: '0%',
            }}
          >
            {language === 'ar' 
              ? 'نربط رواد الأعمال والشركات والجهات الحكومية لتبسيط الإجراءات، وتوفير الوقت، ودعم النجاح'
              : 'We connect entrepreneurs, companies, and government entities to simplify procedures, save time, and support success'
            }
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 700,
                }}
              >
                200+
              </div>
              <p 
                className="text-sm sm:text-base lg:text-lg"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 400,
                }}
              >
                {language === 'ar' ? 'شركة ناشئة تم دعمها' : 'Startup company supported'}
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 700,
                }}
              >
                50+
              </div>
              <p 
                className="text-sm sm:text-base lg:text-lg"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 400,
                }}
              >
                {language === 'ar' ? 'رخصة تجارية منجزة' : 'Business license completed'}
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 700,
                }}
              >
                200+
              </div>
              <p 
                className="text-sm sm:text-base lg:text-lg"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 400,
                }}
              >
                {language === 'ar' ? 'خدمة إدارية مكتملة' : 'Completed administrative service'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
