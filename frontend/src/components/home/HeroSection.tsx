'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, IMAGE_PATHS } from '@/constants';
import { HeroProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
  personImage,
}: HeroProps) {
  const { language, isRTL } = useLanguage();

  // Default content from translations
  const defaultTitle = getTranslation('hero', 'title', language);
  const defaultSubtitle = getTranslation('hero', 'subtitle', language);
  const defaultHeading = getTranslation('hero', 'heading', language);
  const defaultDescription = getTranslation('hero', 'description', language);
  const defaultPrimaryBtn = {
    label: getTranslation('hero', 'primaryButton', language),
    href: '/services',
  };
  const defaultSecondaryBtn = {
    label: getTranslation('hero', 'secondaryButton', language),
    href: '/about',
  };

  return (
    <section className="relative flex items-center overflow-hidden min-h-[540px] md:min-h-[620px] lg:min-h-[684px] pt-28 md:pt-32">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${backgroundImage.url}` : IMAGE_PATHS.backgrounds.hero}
          alt={backgroundImage?.alternativeText || 'Background'}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(94.78deg, rgba(22, 97, 19, 0.59) 17.73%, rgba(0, 0, 0, 0.7) 113.39%)',
        }}
      />

      <div className="w-full px-4 sm:px-6 relative z-[2]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Person Image */}
          <div className="relative order-2 lg:order-2">
            {/* Mobile/Tablet simplified visual */}
            <div className="relative mx-auto w-full max-w-[360px] h-[340px] sm:max-w-[420px] sm:h-[400px] lg:hidden">
              {/* Ellipse image background for mobile/tablet */}
              <Image src={IMAGE_PATHS.icons.ellipse} alt="Ellipse" fill className="object-contain" priority />
              <div className="absolute inset-0 flex items-end justify-center p-2">
                <div className="relative w-[78%] h-[88%] rounded-[48px] overflow-hidden">
                  <Image
                    src={personImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${personImage.url}` : IMAGE_PATHS.people.main}
                    alt={personImage?.alternativeText || 'Person'}
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-[96px] h-[105px] rounded-xl overflow-hidden shadow-md bg-white">
                <Image src={IMAGE_PATHS.people.small} alt="Right Men" width={96} height={105} className="object-cover w-full h-full" />
              </div>
            </div>

            {/* Desktop exact frame */}
            <div className="relative w-full max-w-[583px] h-[523.1768px] mx-auto hidden lg:block">
              {/* Outer ellipse (stroke) */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 521.8856,
                  height: 506.00177,
                  top: 17.18,
                  left: 61.11,
                  opacity: 0.5,
                  borderRadius: 14.17,
                  borderWidth: 0.94,
                  borderStyle: 'solid',
                  borderColor: '#A8A8A8',
                }}
              />

              {/* Ellipse image background for desktop */}
              <div
                className="absolute"
                style={{
                  width: 449.5132,
                  height: 435.83203,
                  top: 67.07,
                  left: 82.02,
                }}
              >
                <Image src={IMAGE_PATHS.icons.ellipse} alt="Ellipse" fill className="object-contain" priority />
              </div>

              {/* Person image */}
              <div className="absolute" style={{ top: 0, left: 170 }}>
                <div className="relative w-[283px] h-[501px] rounded-[102px] overflow-hidden">
                  <Image
                    src={personImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${personImage.url}` : IMAGE_PATHS.people.main}
                    alt={personImage?.alternativeText || 'Person'}
                    fill
                    className="object-cover object-bottom"
                    priority
                  />
                </div>
              </div>

              {/* Right-side circular icon */}
              <div
                className="absolute rounded-full bg-white shadow-md flex items-center justify-center"
                style={{
                  width: 59.125,
                  height: 61.8955078125,
                  top: 226.34,
                  left: 496.38,
                }}
              >
                <Image src={IMAGE_PATHS.icons.main} alt="Icon" width={28} height={28} className="object-contain" />
              </div>

              {/* Left small card with image */}
              <div className="absolute" style={{ top: 197.28, left: 0 }}>
                <div className="w-[132.228px] h-[145.017px] rounded-2xl border border-white/80 overflow-hidden shadow-lg bg-white">
                  <Image src={IMAGE_PATHS.people.small} alt="Right Men" width={132} height={145} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`order-1 lg:order-1 text-white ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="font-extrabold text-[34px] leading-[56px] md:text-[44px] md:leading-[64px] lg:text-[53px] lg:leading-[90px]">
              {title || defaultTitle}
            </h1>
            <h2 className="font-extrabold text-[30px] leading-[48px] md:text-[40px] md:leading-[60px] lg:text-[53px] lg:leading-[75px]">
              {subtitle || defaultSubtitle}
            </h2>
            <p className="mb-2 text-primary font-extrabold text-[22px] leading-[36px] md:text-[28px] md:leading-[44px] lg:text-[32px] lg:leading-[48px]">
              {defaultHeading}
            </p>
            <p className="mb-8 max-w-[563px] text-white/90 text-[16px] leading-7 md:text-[20px] md:leading-8 lg:text-[24px] lg:leading-10">
              {description || defaultDescription}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href={primaryButton?.href || defaultPrimaryBtn.href}
                className="bg-primary hover:bg-green-600 text-white font-semibold transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center rounded-[37px] px-7 py-[13px] md:px-8 md:py-[14px] lg:px-9 lg:py-[15px]"
              >
                {primaryButton?.label || defaultPrimaryBtn.label}
              </Link>
              <Link
                href={secondaryButton?.href || defaultSecondaryBtn.href}
                className="bg-transparent text-white font-semibold transition-all inline-flex items-center justify-center rounded-[37px] border border-white px-7 py-[13px] md:px-8 md:py-[14px] lg:px-9 lg:py-[15px]"
              >
                {secondaryButton?.label || defaultSecondaryBtn.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

