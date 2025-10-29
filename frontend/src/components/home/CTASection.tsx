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
      className="py-8 sm:py-12 lg:py-16"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div 
            className="relative w-full flex shadow-2xl"
            style={{
              width: '100%',
              height: 'clamp(350px, 45vh, 600px)',
              borderRadius: 'clamp(16px, 2.5vw, 24px)',
              maxWidth: '1400px',
              overflow: 'hidden',
            }}
          >
            {/* Left Section - Green Background */}
            <div 
              className={`h-full flex flex-col justify-center ${isRTL ? 'items-start' : 'items-start'}`}
              style={{
                width: isRTL ? 'calc(100% - clamp(40%, 40vw, 500px))' : 'clamp(60%, 60vw, 900px)',
                height: '100%',
                background: 'linear-gradient(263.5deg, #11613A 49.84%, rgba(42, 154, 91, 0.98) 94.9%)',
                borderTopLeftRadius: isRTL ? '0px' : 'clamp(16px, 2.5vw, 24px)',
                borderBottomLeftRadius: isRTL ? '0px' : 'clamp(16px, 2.5vw, 24px)',
                borderTopRightRadius: isRTL ? 'clamp(16px, 2.5vw, 24px)' : '0px',
                borderBottomRightRadius: isRTL ? 'clamp(16px, 2.5vw, 24px)' : '0px',
                padding: isRTL ? 'clamp(20px, 4vw, 48px) clamp(12px, 3vw, 32px) clamp(20px, 4vw, 48px) clamp(20px, 5vw, 64px)' : 'clamp(20px, 4vw, 48px) clamp(20px, 5vw, 64px) clamp(20px, 4vw, 48px) clamp(12px, 3vw, 32px)',
                zIndex: 2,
              }}
            >
              {/* Text Content */}
              <div 
                className={`text-white mb-6 sm:mb-8 lg:mb-10 ${isRTL ? 'text-right' : 'text-left'}`}
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: '700',
                  fontSize: 'clamp(18px, 3.5vw, 48px)',
                  lineHeight: 'clamp(28px, 4.5vw, 72px)',
                  letterSpacing: '-0.02em',
                  color: 'rgba(255, 255, 255, 1)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                {title || defaultTitle}
              </div>

              {/* Button */}
              <Link
                href="/services"
                className={`inline-flex items-center justify-center bg-white text-green-700 font-semibold rounded-xl shadow-lg transition-smooth hover-lift hover-glow transform ${isRTL ? 'self-end' : 'self-start'}`}
                style={{
                  width: 'clamp(140px, 28vw, 200px)',
                  height: 'clamp(44px, 9vw, 56px)',
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: '600',
                  fontSize: 'clamp(14px, 2.8vw, 20px)',
                  padding: 'clamp(8px, 2vw, 16px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  border: '2px solid rgba(17, 97, 58, 0.1)',
                }}
              >
                {buttonText || defaultButtonText}
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ 
                    transform: isRTL ? 'scaleX(-1)' : 'none',
                    color: 'rgba(17, 97, 58, 1)',
                    marginLeft: isRTL ? '0' : '8px',
                    marginRight: isRTL ? '8px' : '0',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>

            {/* Right Section - Image Background */}
            <div 
              className="h-full relative"
              style={{
                width: 'clamp(40%, 40vw, 500px)',
                height: '100%',
                background: 'linear-gradient(271.11deg, rgba(17, 97, 58, 0.15) -1.22%, rgba(17, 97, 58, 0.25) 99.15%)',
                borderTopRightRadius: isRTL ? '0px' : 'clamp(16px, 2.5vw, 24px)',
                borderBottomRightRadius: isRTL ? '0px' : 'clamp(16px, 2.5vw, 24px)',
                borderTopLeftRadius: isRTL ? 'clamp(16px, 2.5vw, 24px)' : '0px',
                borderBottomLeftRadius: isRTL ? 'clamp(16px, 2.5vw, 24px)' : '0px',
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
                    borderTopRightRadius: isRTL ? '0px' : 'clamp(16px, 2.5vw, 24px)',
                    borderBottomRightRadius: isRTL ? '0px' : 'clamp(16px, 2.5vw, 24px)',
                    borderTopLeftRadius: isRTL ? 'clamp(16px, 2.5vw, 24px)' : '0px',
                    borderBottomLeftRadius: isRTL ? 'clamp(16px, 2.5vw, 24px)' : '0px',
                  }}
                />
              </div>
              
              {/* Overlay for better text contrast */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(17, 97, 58, 0.1) 0%, rgba(17, 97, 58, 0.3) 100%)',
                  borderTopRightRadius: isRTL ? '0px' : 'clamp(16px, 2.5vw, 24px)',
                  borderBottomRightRadius: isRTL ? '0px' : 'clamp(16px, 2.5vw, 24px)',
                  borderTopLeftRadius: isRTL ? 'clamp(16px, 2.5vw, 24px)' : '0px',
                  borderBottomLeftRadius: isRTL ? 'clamp(16px, 2.5vw, 24px)' : '0px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
