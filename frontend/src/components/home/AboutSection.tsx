'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGE_PATHS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/AboutSection.module.css';

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
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          {/* Decorative wave pattern - top right using toprighticon.png */}
          <div className={styles.aboutDecorative}>
            <Image src={IMAGE_PATHS.icons.topRight} alt="" width={120} height={40} className="opacity-60" />
          </div>

          <div className={`${styles.aboutGrid} ${isRTL ? '' : ''}`}>
            {/* Left Column - Images */}
            <div className={`${styles.aboutImageColumn} ${isRTL ? 'order-2 lg:order-2' : 'order-2 lg:order-2'}` }>
              {/* Responsive frame maintaining 421x423 ratio, scales down on small screens */}
              <div className={styles.aboutImageFrame}>
                {/* Big image (fills frame) - using blog-left.jpg */}
                <div className={styles.aboutMainImage}>
                  <Image 
                    src={mainImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${mainImage.url}` : IMAGE_PATHS.blog.left} 
                    alt={mainImage?.alternativeText || 'About Main'} 
                    fill 
                    className="object-cover" 
                  />
                </div>

                {/* Small image overlay (uses percentages to stay proportional) - using blog-right.jpg */}
                <div className={styles.aboutOverlayImage}>
                  <div className={styles.aboutOverlayContent}>
                    <Image 
                      src={secondaryImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${secondaryImage.url}` : IMAGE_PATHS.blog.right} 
                      alt={secondaryImage?.alternativeText || 'About Secondary'} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>

                {/* Green stat rectangle (percent-based, responsive text) */}
                <div className={styles.aboutStatBox}>
                  <div className={styles.aboutStatNumber}>
                    {statNumber || defaultStatNumber}
                  </div>
                  <div className={styles.aboutStatLabel}>
                    {statLabel || defaultStatLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`${styles.aboutTextColumn} ${isRTL ? 'order-1 lg:order-1' : 'order-1 lg:order-1'} ${isRTL ? styles.rtl : styles.ltr}`}>
              {/* Title now sits above the content sentence */}
              <div className={`${styles.aboutTitleContainer} ${isRTL ? styles.rtl : styles.ltr}`}>
                {!isRTL ? (
                  <span className={styles.aboutTitleLine}></span>
                ) : null}
                <h2 className={styles.aboutTitle}>
                  {title || defaultTitle}
                </h2>
                {isRTL ? (
                  <span className={styles.aboutTitleLine}></span>
                ) : null}
              </div>

              {/* Main heading */}
              <h3 className={`${styles.aboutHeading} ${isRTL ? styles.rtl : styles.ltr}`}>
                {heading || defaultHeading}
              </h3>

              {/* Description */}
              <p className={`${styles.aboutDescription} ${isRTL ? styles.rtl : styles.ltr}`}>
                {description || defaultDescription}
              </p>

              {/* Features list */}
              <div className={styles.aboutFeatures}>
                {displayFeatures.map((feature, idx) => (
                  <div key={idx} className={`${styles.aboutFeatureItem} ${isRTL ? styles.rtl : styles.ltr}`}>
                    <div className={styles.aboutFeatureIcon}>
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
                    <div className={styles.aboutFeatureContent}>
                      <h4 className={`${styles.aboutFeatureTitle} ${isRTL ? styles.rtl : styles.ltr}`}>
                        {feature.title}
                      </h4>
                      <p className={`${styles.aboutFeatureDescription} ${isRTL ? styles.rtl : styles.ltr}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={ctaButton?.href || defaultCTA.href}
                className={styles.aboutCtaButton}
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