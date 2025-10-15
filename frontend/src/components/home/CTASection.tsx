'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, IMAGE_PATHS } from '@/constants';
import { CTASectionProps } from '@/types';

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  buttonText, 
  backgroundImage 
}) => {
  const { language, isRTL } = useLanguage();

  const defaultTitle = getTranslation('cta', 'title', language);
  const defaultButtonText = getTranslation('cta', 'buttonText', language);

  return (
    <section 
      className="py-4 sm:py-8 lg:py-12"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-center">
          <div 
            className="relative w-full flex"
            style={{
              width: '100%',
              height: 'clamp(300px, 40vh, 515px)',
              borderRadius: 'clamp(10px, 2vw, 20px)',
              maxWidth: '1321px',
              overflow: 'hidden',
            }}
          >
            {/* Left Section - Green Background */}
            <div 
              className={`h-full flex flex-col justify-center ${isRTL ? 'items-start pl-2 sm:pl-4 lg:pl-8' : 'items-start pl-2 sm:pl-4 lg:pl-8'}`}
              style={{
                width: isRTL ? 'calc(100% - clamp(35%, 35vw, 471px))' : 'clamp(65%, 65vw, 850px)',
                height: '100%',
                background: 'linear-gradient(263.5deg, #11613A 49.84%, rgba(42, 154, 91, 0.98) 94.9%)',
                borderTopLeftRadius: isRTL ? '0px' : 'clamp(10px, 2vw, 20px)',
                borderBottomLeftRadius: isRTL ? '0px' : 'clamp(10px, 2vw, 20px)',
                borderTopRightRadius: isRTL ? 'clamp(10px, 2vw, 20px)' : '0px',
                borderBottomRightRadius: isRTL ? 'clamp(10px, 2vw, 20px)' : '0px',
                border: 'none',
                marginRight: '0',
                marginLeft: '0',
                zIndex: 2,
              }}
            >
              {/* Text Content */}
              <div 
                className={`text-white mb-3 sm:mb-6 ${isRTL ? 'text-right pr-2 sm:pr-4 lg:pr-8 pl-8 sm:pl-12 lg:pl-16' : 'text-left pl-2 sm:pl-4 lg:pl-8'}`}
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: '700',
                  fontSize: 'clamp(14px, 3vw, 40px)',
                  lineHeight: 'clamp(20px, 4vw, 70px)',
                  letterSpacing: '0%',
                  color: 'rgba(255, 255, 255, 1)',
                  direction: isRTL ? 'rtl' : 'ltr',
                }}
              >
                {title || defaultTitle}
              </div>

              {/* Button */}
              <Link
                href="/services"
                className={`inline-flex items-center justify-center bg-white text-green-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${isRTL ? 'mr-2 sm:mr-4 lg:mr-8 ml-8 sm:ml-12 lg:ml-16' : 'ml-2 sm:ml-4 lg:ml-8'}`}
                style={{
                  width: 'clamp(120px, 25vw, 180px)',
                  height: 'clamp(35px, 8vw, 50px)',
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: '600',
                  fontSize: 'clamp(12px, 2.5vw, 18px)',
                  marginTop: 'clamp(10px, 2vw, 30px)',
                  padding: 'clamp(6px, 1.5vw, 12px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                }}
              >
                {buttonText || defaultButtonText}
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ 
                    transform: isRTL ? 'scaleX(-1)' : 'none',
                    color: 'rgba(17, 97, 58, 1)',
                    marginLeft: isRTL ? '0' : '6px',
                    marginRight: isRTL ? '6px' : '0',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>

            {/* Right Section - Image Background */}
            <div 
              className="h-full relative"
              style={{
                width: 'clamp(35%, 35vw, 471px)',
                height: '100%',
                background: 'linear-gradient(271.11deg, rgba(17, 97, 58, 0.22) -1.22%, rgba(17, 97, 58, 0.22) 99.15%)',
                borderTopRightRadius: isRTL ? '0px' : 'clamp(10px, 2vw, 20px)',
                borderBottomRightRadius: isRTL ? '0px' : 'clamp(10px, 2vw, 20px)',
                borderTopLeftRadius: isRTL ? 'clamp(10px, 2vw, 20px)' : '0px',
                borderBottomLeftRadius: isRTL ? 'clamp(10px, 2vw, 20px)' : '0px',
                border: 'none',
                marginLeft: '0',
                marginRight: '0',
                zIndex: 1,
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={backgroundImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${backgroundImage.url}` : IMAGE_PATHS.backgrounds.cta}
                  alt={backgroundImage?.alternativeText || 'Background'}
                  fill
                  className="object-cover"
                  style={{
                    borderTopRightRadius: 'clamp(10px, 2vw, 20px)',
                    borderBottomRightRadius: 'clamp(10px, 2vw, 20px)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
