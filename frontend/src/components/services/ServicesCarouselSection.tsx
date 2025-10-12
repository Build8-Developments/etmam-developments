'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGE_PATHS } from '@/constants';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/components/ServicesCarouselSection.module.css';

interface ServiceCard {
  id: number;
  image: string;
  icon: string;
  title: string;
  description: string;
}

interface ServicesCarouselProps {
  title?: string;
  description?: string;
  services?: ServiceCard[];
}

export default function ServicesCarouselSection({
  title,
  description,
  services,
}: ServicesCarouselProps) {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(1);

  // Default content
  const defaultTitle = language === 'ar' 
    ? 'ماذا نقدم في إتمام ؟' 
    : 'What do we offer at Itmam?';
  
  const defaultDescription = language === 'ar'
    ? 'في إتمام، نوفر خدمات شاملة في التأسيس التراخيص، والإدارة، لنكون شريكك الموثوق في كل مرحلة من رحلة عملك.'
    : 'At Itmam, we provide comprehensive services in establishment, licensing, and management, to be your trusted partner in every stage of your business journey.';

  const defaultServices: ServiceCard[] = [
    {
      id: 1,
      image: IMAGE_PATHS.blog.left,
      icon: 'document',
      title: language === 'ar' ? 'إدارة المعاملات الإدارية' : 'Administrative Transactions Management',
      description: language === 'ar' 
        ? 'متابعة جميع الإجراءات الحكومية وتوفير وقتك وجهدك.'
        : 'Following up on all government procedures and saving your time and effort.',
    },
    {
      id: 2,
      image: IMAGE_PATHS.blog.right,
      icon: 'building',
      title: language === 'ar' ? 'تأسيس الشركات' : 'Company Formation',
      description: language === 'ar'
        ? 'خدمة متكاملة لتأسيس شركتك من الألف إلى الياء.'
        : 'Comprehensive service to establish your company from A to Z.',
    },
    {
      id: 3,
      image: IMAGE_PATHS.blog.left,
      icon: 'license',
      title: language === 'ar' ? 'استخراج التراخيص' : 'License Extraction',
      description: language === 'ar'
        ? 'نستخرج جميع أنواع التراخيص التجارية والصناعية.'
        : 'We extract all types of commercial and industrial licenses.',
    },
    {
      id: 4,
      image: IMAGE_PATHS.blog.right,
      icon: 'consulting',
      title: language === 'ar' ? 'الاستشارات القانونية' : 'Legal Consultations',
      description: language === 'ar'
        ? 'استشارات قانونية متخصصة في مجال الأعمال والتجارة.'
        : 'Specialized legal consultations in business and commerce.',
    },
    {
      id: 5,
      image: IMAGE_PATHS.blog.left,
      icon: 'accounting',
      title: language === 'ar' ? 'المحاسبة والضرائب' : 'Accounting & Taxes',
      description: language === 'ar'
        ? 'خدمات محاسبية شاملة وإدارة الضرائب والزكاة.'
        : 'Comprehensive accounting services and tax and zakat management.',
    },
  ];

  const displayServices = services || defaultServices;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % displayServices.length);
  }, [displayServices.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + displayServices.length) % displayServices.length);
  }, [displayServices.length]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < displayServices.length) {
      setCurrentSlide(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [displayServices.length, nextSlide, prevSlide]);

  // Safety check to ensure we have services
  if (!displayServices || displayServices.length === 0) {
    return null;
  }

  const getIconComponent = (iconType: string) => {
    const iconSize = 72;
    
    switch (iconType) {
      case 'document':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12H16V14H8V12ZM8 16H16V18H8V16Z" fill="#11613A"/>
          </svg>
        );
      case 'building':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21V19L12 5L3 19V21ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 19H11V17H9V19ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM13 19H15V17H13V19ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM17 19H19V17H17V19ZM17 15H19V13H17V15ZM17 11H19V9H17V11Z" fill="#11613A"/>
          </svg>
        );
      case 'license':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10.5V11.5C15.4 11.5 16 12.4 16 13V16C16 16.6 15.6 17 15 17H9C8.4 17 8 16.6 8 16V13C8 12.4 8.4 11.5 9 11.5V10.5C9 8.6 10.6 7 12 7ZM12 8.5C11.2 8.5 10.5 9.2 10.5 10V11.5H13.5V10C13.5 9.2 12.8 8.5 12 8.5Z" fill="#11613A"/>
          </svg>
        );
      case 'consulting':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#11613A"/>
          </svg>
        );
      case 'accounting':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM7 6V19H17V6H7ZM9 8H15V10H9V8ZM9 12H15V14H9V12ZM9 16H15V18H9V16Z" fill="#11613A"/>
          </svg>
        );
      default:
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#11613A"/>
          </svg>
        );
    }
  };

  return (
    <section className={styles.servicesCarouselSection}>
      <div className={styles.servicesCarouselContainer}>
        
        {/* Header Section */}
        <div className={styles.headerSection}>
          {/* Decorative bracket above title - positioned absolutely */}
          <div className={styles.decorativeBracket} />
          
          {/* Decorative waves - positioned absolutely at top right */}
          <div className={styles.decorativeWavesRight}>
            <Image
              src={IMAGE_PATHS.icons.topRight}
              alt="Decorative waves"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Second decorative waves - positioned absolutely at top left */}
          <div className={styles.decorativeWavesLeft}>
            <Image
              src={IMAGE_PATHS.icons.topRight}
              alt="Decorative waves"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.headerTitle}>
              {title || defaultTitle}
            </h2>
            
            <p className={styles.headerDescription}>
              {description || defaultDescription}
            </p>

            {/* Green line below description */}
            <div className={styles.headerLine} />
          </div>
        </div>

        {/* Carousel Container */}
        <div className={styles.carouselContainer}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`${styles.navigationButton} ${styles.navigationButtonLeft}`}
            aria-label={language === 'ar' ? 'الشريحة السابقة' : 'Previous slide'}
            disabled={displayServices.length <= 1}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={`${styles.navigationButton} ${styles.navigationButtonRight}`}
            aria-label={language === 'ar' ? 'الشريحة التالية' : 'Next slide'}
            disabled={displayServices.length <= 1}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

           {/* Service Card */}
           <div className={styles.serviceCardContainer}>
             <div className={styles.serviceCard}>
               {/* Image Section */}
               <div className={styles.imageSection}>
                 <Image
                   src={displayServices[currentSlide]?.image || ''}
                   alt={displayServices[currentSlide]?.title || ''}
                   fill
                   className="object-cover"
                   priority={currentSlide === 0}
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 885px"
                 />
                 
                 {/* Icon Overlay - positioned at the border between image and text */}
                 <div className={styles.iconOverlay}>
                   <div className={styles.iconContent}>
                     {getIconComponent(displayServices[currentSlide]?.icon || '')}
                   </div>
                 </div>
               </div>

               {/* Text Section */}
               <div className={styles.textSection}>
                 <h3 className={`${styles.serviceTitle} ${language === 'ar' ? styles.rtl : styles.ltr}`}>
                   {displayServices[currentSlide]?.title || ''}
                 </h3>
                 
                 <p className={`${styles.serviceDescription} ${language === 'ar' ? styles.rtl : styles.ltr}`}>
                   {displayServices[currentSlide]?.description || ''}
                 </p>
               </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className={styles.paginationContainer} role="tablist" aria-label={language === 'ar' ? 'شرائح الخدمات' : 'Service slides'}>
            {displayServices.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.paginationDot} ${
                  index === currentSlide 
                    ? styles.active 
                    : styles.inactive
                }`}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`${language === 'ar' ? 'شريحة' : 'Slide'} ${index + 1}`}
                tabIndex={index === currentSlide ? 0 : -1}
              />
            ))}
          </div>
        </div>

        {/* Background decorative circle - positioned like in the image */}
        <div className={styles.backgroundCircle} />
      </div>
    </section>
  );
}