'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface VisionMessage {
  VisionTitle?: string;
  VisionDescription?: string;
  VisionImage?: {
    url: string;
    name: string;
  };
  MessageTitle?: string;
  MessageDescription?: string;
  MessageImage?: {
    url: string;
    name: string;
  };
}

interface SuccessFoundationSectionProps {
  title?: string;
  subtitle?: string;
  visionMessage?: VisionMessage;
}

export default function SuccessFoundationSection({ 
  title, 
  subtitle, 
  visionMessage 
}: SuccessFoundationSectionProps) {
  const { language } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-black mb-6"
            style={{ 
              fontFamily: 'var(--font-almarai)',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '-1%',
            }}
          >
            {title || (language === 'ar' ? 'أساس نجاحنا' : 'Our Foundation for Success')}
          </h2>
          
          <p 
            className="text-2xl text-black/58 max-w-4xl mx-auto leading-[45px]"
            style={{ 
              fontFamily: 'var(--font-almarai)',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '45px',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            {subtitle || (language === 'ar' 
              ? 'نؤمن أن النجاح يبدأ برؤية واضحة ورسالة ثابتة تقود خطواتنا نحو خدمة عملائنا بأفضل صورة.'
              : 'We believe that success begins with a clear vision and a steadfast mission that guides our steps towards serving our customers in the best possible way.'
            )}
          </p>
        </div>

        {/* Vision Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 ${language === 'ar' ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Image - Position changes based on language */}
          <div className={`relative ${language === 'ar' ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
            <div 
              className="w-full h-[360px] rounded-[22px] overflow-hidden"
              style={{
                backgroundImage: visionMessage?.VisionImage?.url 
                  ? `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${visionMessage.VisionImage.url})`
                  : 'url(/aboutsec.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Gradient overlay */}
              <div 
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(193.07deg, rgba(217, 217, 217, 0.26) 9.42%, rgba(16, 92, 36, 0.38) 69.8%)',
                }}
              ></div>
            </div>
          </div>
          
          {/* Vision Content - Position changes based on language */}
          <div className={`flex flex-col justify-center ${language === 'ar' ? 'lg:col-start-1' : 'lg:col-start-2'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Vision Title with Green Background */}
            <div className={`mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h3 
                className="text-white px-4 py-2 rounded inline-block"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '45px',
                  letterSpacing: '0%',
                  background: 'rgba(27, 128, 54, 1)',
                }}
              >
                {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
            </div>
            
            {/* Vision Subtitle */}
            <h4 
              className={`text-black mb-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              style={{ 
                fontFamily: 'var(--font-almarai)',
                fontWeight: 700,
                fontSize: '23px',
                lineHeight: '45px',
                letterSpacing: '0%',
              }}
            >
              {visionMessage?.VisionTitle || (language === 'ar' 
                ? 'نحو ريادة الخدمات الإدارية والتجارية في المملكة'
                : 'Towards leadership in administrative and commercial services in the Kingdom'
              )}
            </h4>
            
            {/* Vision Description */}
            <p 
              className={`text-black leading-[38px] ${language === 'ar' ? 'text-right' : 'text-left'}`}
              style={{ 
                fontFamily: 'var(--font-almarai)',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '38px',
                letterSpacing: '0%',
              }}
            >
              {visionMessage?.VisionDescription || (language === 'ar' 
                ? 'في إتمام نطمح لأن نكون الخيار الأول والأكثر ثقة لرواد الأعمال والشركات في المملكة. رؤيتنا تتمحور حول تقديم حلول مبتكرة وشاملة تسهّل رحلة تأسيس وإدارة الأعمال، وتواكب تطلعات رؤية السعودية 2030 نحو اقتصاد مزدهر قائم على التميز والكفاءة. نؤمن أن نجاح عملائنا هو الأساس الذي يُلهمنا للاستمرار في تطوير خدماتنا وتحقيق الريادة.'
                : 'At Itmam, we aspire to be the first choice and most trusted for entrepreneurs and companies in the Kingdom. Our vision revolves around providing innovative and comprehensive solutions that facilitate the journey of establishing and managing businesses, and keeping pace with the aspirations of Saudi Vision 2030 towards a prosperous economy based on excellence and efficiency. We believe that the success of our clients is the foundation that inspires us to continue developing our services and achieving leadership.'
              )}
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${language === 'ar' ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Mission Content - Position changes based on language */}
          <div className={`flex flex-col justify-center ${language === 'ar' ? 'lg:col-start-2' : 'lg:col-start-1'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Mission Title with Green Background */}
            <div className={`mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h3 
                className="text-white px-4 py-2 rounded inline-block"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '45px',
                  letterSpacing: '0%',
                  background: 'rgba(27, 128, 54, 1)',
                }}
              >
                {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
              </h3>
            </div>
            
            {/* Mission Subtitle */}
            <h4 
              className={`text-black mb-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              style={{ 
                fontFamily: 'var(--font-almarai)',
                fontWeight: 700,
                fontSize: '23px',
                lineHeight: '45px',
                letterSpacing: '0%',
              }}
            >
              {visionMessage?.MessageTitle || (language === 'ar' 
                ? 'خدمات موثوقة تسهل طريق نجاحك'
                : 'Reliable services that ease your path to success'
              )}
            </h4>
            
            {/* Mission Description */}
            <p 
              className={`text-black leading-[38px] ${language === 'ar' ? 'text-right' : 'text-left'}`}
              style={{ 
                fontFamily: 'var(--font-almarai)',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '38px',
                letterSpacing: '0%',
              }}
            >
              {visionMessage?.MessageDescription || (language === 'ar' 
                ? 'رسالتنا في إتمام هي تبسيط وتعزيز كل ما يتعلق بالإجراءات الإدارية والتجارية، من تأسيس الشركات واستخراج التراخيص، إلى تقديم حلول احترافية لإدارة الأعمال. نحن نضع العميل في قلب أولوياتنا، ونعمل بروح الفريق لتقديم خدمات سريعة وموثوقة تساهم في نمو واستقرار أعمال شركائنا، وتدعم رحلتهم نحو تحقيق النجاح بأقل جهد وأعلى كفاءة.'
                : 'Our mission at Itmam is to simplify and enhance everything related to administrative and commercial procedures, from company formation and license extraction, to providing professional solutions for business management. We place the client at the heart of our priorities, and we work with a team spirit to provide fast and reliable services that contribute to the growth and stability of our partners\' businesses, supporting their journey towards achieving success with less effort and higher efficiency.'
              )}
            </p>
          </div>
          
          {/* Image - Position changes based on language */}
          <div className={`relative ${language === 'ar' ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
            <div 
              className="w-full h-[360px] rounded-[22px] overflow-hidden"
              style={{
                backgroundImage: visionMessage?.MessageImage?.url 
                  ? `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${visionMessage.MessageImage.url})`
                  : 'url(/aboutsec1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Gradient overlay */}
              <div 
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(193.07deg, rgba(217, 217, 217, 0.26) 9.42%, rgba(16, 92, 36, 0.38) 69.8%)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
