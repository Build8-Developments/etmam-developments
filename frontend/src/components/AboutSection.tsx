'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

interface AboutProps {
  title?: string;
  heading?: string;
  description?: string;
  mainImage?: {
    url: string;
    alternativeText: string;
  };
  secondaryImage?: {
    url: string;
    alternativeText: string;
  };
  statNumber?: string;
  statLabel?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  ctaButton?: {
    label: string;
    href: string;
  };
}

export default function AboutSection({
  title,
  heading,
  description,
  mainImage,
  secondaryImage,
  statNumber,
  statLabel,
  features,
  ctaButton,
}: AboutProps) {
  const { language, isRTL } = useLanguage();

  // Default content
  const defaultTitle = language === 'ar' ? 'من نحن' : 'About Us';
  const defaultHeading =
    language === 'ar'
      ? 'رحلتك في تأسيس وإدارة الأعمال تبدأ من هنا'
      : 'Your Journey in Business Formation and Management Starts Here';
  const defaultDescription =
    language === 'ar'
      ? 'نحن في إتمام نقدم خدمات تجارية وإدارية متكاملة من تأسيس الشركات إلى استخراج التراخيص، بهدف تبسيط الإجراءات وتقديم حلول سريعة وموثوقة تدعم نجاح عملائك وتوفيرها.'
      : 'At Etmam, we provide comprehensive commercial and administrative services from company formation to license extraction, aiming to simplify procedures and provide fast and reliable solutions that support the success of your clients and provide them.';
  
  const defaultStatNumber = '680';
  const defaultStatLabel = language === 'ar' ? 'شراكة ناجحة' : 'Successful Partnership';

  const defaultFeatures = [
    {
      icon: 'trust',
      title: language === 'ar' ? 'موثوقية' : 'Trust',
      description: language === 'ar' ? 'ان نسلم في بناء بيئة أعمال أكثر سهولة واحترافية.' : 'We believe in building a more accessible and professional business environment.',
    },
    {
      icon: 'mission',
      title: language === 'ar' ? 'رسالتنا' : 'Our Mission',
      description: language === 'ar' ? 'تبسيط الإجراءات، وتقديم قيمة حقيقية للعملاء.' : 'Simplify procedures and provide real value to clients.',
    },
  ];

  const defaultCTA = {
    label: language === 'ar' ? 'عرض المزيد' : 'Show More',
    href: '/about',
  };

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto relative" style={{ maxWidth: 1231 }}>
          {/* Decorative wave pattern - top right using toprighticon.png */}
          <div className="hidden md:block absolute -top-12 right-0">
            <Image src="/toprighticon.png" alt="" width={120} height={40} className="opacity-60" />
          </div>

          

          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-24 items-center lg:min-h-[549px] ${isRTL ? '' : ''}`}>
            {/* Left Column - Images */}
            <div className={`relative ${isRTL ? 'order-2 lg:order-2' : 'order-2 lg:order-2'}` }>
              {/* Responsive frame maintaining 421x423 ratio, scales down on small screens */}
              <div className="relative w-full mx-auto" style={{ maxWidth: 421, aspectRatio: '421 / 423' }}>
                {/* Big image (fills frame) */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image src={mainImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${mainImage.url}` : '/bigleft.jpg'} alt="About Main" fill className="object-cover" />
                </div>

                {/* Small image overlay (uses percentages to stay proportional) */}
                <div className="absolute" style={{ width: '72.21%', height: '79.2%', top: '50.6%', left: '64.0%' }}>
                  <div className="relative w-full h-full overflow-hidden" style={{ boxShadow: '0px 2px 2px 0px #00000040', border: 'clamp(4px, 2.8vw, 12px) solid #FFFFFF' }}>
                    <Image src={secondaryImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${secondaryImage.url}` : '/bigrigth.jpg'} alt="About Secondary" fill className="object-cover" />
                  </div>
                </div>

                {/* Green stat rectangle (percent-based, responsive text) */}
                <div className="absolute bg-green-700 text-white text-center flex flex-col items-center justify-center" style={{ width: '40.6%', height: '30.9%', top: '87.9%', left: '37.6%' }}>
                  <div style={{ fontFamily: 'Roboto, var(--font-almarai)', fontWeight: 700, fontSize: 'clamp(18px, 5vw, 40px)', lineHeight: '100%' }}>
                    {statNumber || defaultStatNumber}
                  </div>
                  <div style={{ fontFamily: 'var(--font-almarai)', fontWeight: 700, fontSize: 'clamp(12px, 3.2vw, 25px)', lineHeight: '100%' }}>
                    {statLabel || defaultStatLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`${isRTL ? 'order-1 lg:order-1' : 'order-1 lg:order-1'} ${isRTL ? 'text-right' : 'text-left'}`}>
              {/* Title now sits above the content sentence */}
              <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                {!isRTL ? (
                  <span className="block w-[64px] h-[3px] bg-[#90C054]"></span>
                ) : null}
                <h2
                  className="inline-block"
                  style={{
                    fontFamily: 'var(--font-almarai)',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 3.5vw, 28px)',
                    lineHeight: '100%',
                    letterSpacing: 0,
                    background: 'linear-gradient(180deg, #11613A 0%, #0A3A22 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {title || defaultTitle}
                </h2>
                {isRTL ? (
                  <span className="block w-[64px] h-[3px] bg-[#90C054]"></span>
                ) : null}
              </div>

              {/* Main heading */}
              <h3
                className="text-black mb-6 max-w-full lg:max-w-[527px]"
                style={{
                  fontFamily: 'Cairo, var(--font-almarai)',
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 3.2vw, 31px)',
                  lineHeight: 'clamp(32px, 4.2vw, 50px)',
                  letterSpacing: 0,
                  textAlign: isRTL ? 'right' : 'left',
                }}
              >
                {heading || defaultHeading}
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 mb-8 max-w-full lg:max-w-[506px]"
                style={{
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 2.5vw, 21px)',
                  lineHeight: 'clamp(28px, 3.5vw, 40px)',
                  letterSpacing: 0,
                  textAlign: isRTL ? 'right' : 'left',
                }}
              >
                {description || defaultDescription}
              </p>

              {/* Features list */}
              <div className="space-y-6 mb-8 max-w-full lg:max-w-[506px]">
                {displayFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      {feature.icon === 'trust' ? (
                        <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 
                        className="text-gray-900 mb-2"
                        style={{ 
                          fontFamily: 'var(--font-almarai)',
                          fontWeight: 700,
                          fontSize: 19,
                          lineHeight: '100%',
                          letterSpacing: 0,
                          textAlign: isRTL ? 'right' : 'left',
                        }}
                      >
                        {feature.title}
                      </h4>
                      <p 
                        className="text-gray-700"
                        style={{ 
                          fontFamily: 'var(--font-almarai)',
                          fontWeight: 400,
                          fontSize: 'clamp(14px, 2.2vw, 18px)',
                          lineHeight: 'clamp(26px, 3.2vw, 50px)',
                          letterSpacing: 0,
                          textAlign: isRTL ? 'right' : 'left',
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={ctaButton?.href || defaultCTA.href}
                className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors shadow-lg hover:shadow-xl rounded-lg px-10 py-4"
                style={{
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 600,
                }}
              >
                {ctaButton?.label || defaultCTA.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

