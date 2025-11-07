"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGE_PATHS } from "@/constants";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

interface ServiceCard {
  id?: number;
  image?: string | { url?: string; name?: string };
  icon?: string | { url?: string; name?: string };
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  // Default content
  const defaultTitle =
    language === "ar" ? "ماذا نقدم في إتمام ؟" : "What do we offer at Itmam?";

  const defaultDescription =
    language === "ar"
      ? "في إتمام، نوفر خدمات شاملة في التأسيس التراخيص، والإدارة، لنكون شريكك الموثوق في كل مرحلة من رحلة عملك."
      : "At Itmam, we provide comprehensive services in establishment, licensing, and management, to be your trusted partner in every stage of your business journey.";

  const defaultServices: ServiceCard[] = [
    {
      id: 1,
      image: IMAGE_PATHS.blog.left,
      icon: "document",
      title:
        language === "ar"
          ? "إدارة المعاملات الإدارية"
          : "Administrative Transactions Management",
      description:
        language === "ar"
          ? "متابعة جميع الإجراءات الحكومية وتوفير وقتك وجهدك."
          : "Following up on all government procedures and saving your time and effort.",
    },
    {
      id: 2,
      image: IMAGE_PATHS.blog.right,
      icon: "building",
      title: language === "ar" ? "تأسيس الشركات" : "Company Formation",
      description:
        language === "ar"
          ? "خدمة متكاملة لتأسيس شركتك من الألف إلى الياء."
          : "Comprehensive service to establish your company from A to Z.",
    },
    {
      id: 3,
      image: IMAGE_PATHS.blog.left,
      icon: "license",
      title: language === "ar" ? "استخراج التراخيص" : "License Extraction",
      description:
        language === "ar"
          ? "نستخرج جميع أنواع التراخيص التجارية والصناعية."
          : "We extract all types of commercial and industrial licenses.",
    },
    {
      id: 4,
      image: IMAGE_PATHS.blog.right,
      icon: "consulting",
      title: language === "ar" ? "الاستشارات القانونية" : "Legal Consultations",
      description:
        language === "ar"
          ? "استشارات قانونية متخصصة في مجال الأعمال والتجارة."
          : "Specialized legal consultations in business and commerce.",
    },
    {
      id: 5,
      image: IMAGE_PATHS.blog.left,
      icon: "accounting",
      title: language === "ar" ? "المحاسبة والضرائب" : "Accounting & Taxes",
      description:
        language === "ar"
          ? "خدمات محاسبية شاملة وإدارة الضرائب والزكاة."
          : "Comprehensive accounting services and tax and zakat management.",
    },
  ];

  const displayServices = services || defaultServices;

  // Helper function to get image URL from both Strapi and mock data
  const getImageUrl = (
    image: string | { url?: string; name?: string } | undefined
  ): string => {
    if (!image) return "";

    if (typeof image === "string") {
      return image;
    }

    if (image.url) {
      // Strapi image URL
      return image.url.startsWith("http") || image.url.startsWith("/")
        ? `http://localhost:1337${image.url.startsWith("/") ? image.url : ""}`
        : `http://localhost:1337/uploads/${image.url}`;
    }

    return "";
  };

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % displayServices.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [displayServices.length, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentSlide(
      (prev) => (prev - 1 + displayServices.length) % displayServices.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [displayServices.length, isAnimating]);

  const goToSlide = (index: number) => {
    if (
      index >= 0 &&
      index < displayServices.length &&
      index !== currentSlide
    ) {
      if (isAnimating) return;
      setDirection(index > currentSlide ? "right" : "left");
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0]?.clientX || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientX || 0);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [displayServices.length, nextSlide, prevSlide]);

  // Safety check to ensure we have services
  if (!displayServices || displayServices.length === 0) {
    return null;
  }

  const getIconComponent = (
    icon: string | { url?: string; name?: string } | undefined
  ) => {
    const iconSize = 32;

    // Handle Strapi icon (object with url)
    if (icon && typeof icon === "object" && icon.url) {
      const iconUrl =
        icon.url.startsWith("http") || icon.url.startsWith("/")
          ? `http://localhost:1337${icon.url.startsWith("/") ? icon.url : ""}`
          : `http://localhost:1337/uploads/${icon.url}`;

      return (
        <Image
          src={iconUrl}
          alt={icon.name || "Service icon"}
          width={iconSize}
          height={iconSize}
          className="w-[32px] h-[32px]"
        />
      );
    }

    // Handle mock data icon type (string)
    const iconType = typeof icon === "string" ? icon : "";

    switch (iconType) {
      case "document":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12H16V14H8V12ZM8 16H16V18H8V16Z"
              fill="#026838"
            />
          </svg>
        );
      case "building":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21H21V19L12 5L3 19V21ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 19H11V17H9V19ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM13 19H15V17H13V19ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM17 19H19V17H17V19ZM17 15H19V13H17V15ZM17 11H19V9H17V11Z"
              fill="#026838"
            />
          </svg>
        );
      case "license":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10.5V11.5C15.4 11.5 16 12.4 16 13V16C16 16.6 15.6 17 15 17H9C8.4 17 8 16.6 8 16V13C8 12.4 8.4 11.5 9 11.5V10.5C9 8.6 10.6 7 12 7ZM12 8.5C11.2 8.5 10.5 9.2 10.5 10V11.5H13.5V10C13.5 9.2 12.8 8.5 12 8.5Z"
              fill="#026838"
            />
          </svg>
        );
      case "consulting":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
              fill="#026838"
            />
          </svg>
        );
      case "accounting":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM7 6V19H17V6H7ZM9 8H15V10H9V8ZM9 12H15V14H9V12ZM9 16H15V18H9V16Z"
              fill="#026838"
            />
          </svg>
        );
      default:
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
              fill="#026838"
            />
          </svg>
        );
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeSlideInRight {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeSlideInLeft {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-almarai)", color: "#026838" }}
            >
              {title || defaultTitle}
            </h2>

            <p
              className="text-gray-600 text-lg max-w-3xl mx-auto mb-6"
              style={{ fontFamily: "var(--font-almarai)" }}
            >
              {description || defaultDescription}
            </p>

            {/* Green line below description */}
            <div className="w-20 h-1 bg-green-600 mx-auto rounded"></div>

            {/* Mobile swipe hint */}
            <div className="sm:hidden mt-4">
              <p
                className="text-sm text-gray-500"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar" ? "اسحب للتمرير" : "Swipe to navigate"}
              </p>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative" style={{ touchAction: "pan-y" }}>
            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl w-14 h-14 items-center justify-center"
              aria-label={
                language === "ar" ? "الشريحة السابقة" : "Previous slide"
              }
              disabled={displayServices.length <= 1}
            >
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl w-14 h-14 items-center justify-center"
              aria-label={language === "ar" ? "الشريحة التالية" : "Next slide"}
              disabled={displayServices.length <= 1}
            >
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Service Card */}
            <div className="flex justify-center px-4 sm:px-16">
              <div
                ref={carouselRef}
                className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ touchAction: "pan-y" }}
              >
                {/* Image Section */}
                <div
                  className="relative h-64 transition-all duration-500 ease-in-out"
                  style={{
                    animation: isAnimating
                      ? direction === "right"
                        ? "slideInRight 0.5s ease-in-out"
                        : "slideInLeft 0.5s ease-in-out"
                      : "none",
                  }}
                >
                  <Image
                    src={getImageUrl(displayServices[currentSlide]?.image)}
                    alt={displayServices[currentSlide]?.title || ""}
                    fill
                    className="object-cover object-center"
                    priority={currentSlide === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 885px"
                  />

                  {/* Icon Overlay */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100">
                      {getIconComponent(displayServices[currentSlide]?.icon)}
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div
                  className="p-8 pt-12 transition-all duration-500 ease-in-out"
                  style={{
                    animation: isAnimating
                      ? direction === "right"
                        ? "fadeSlideInRight 0.5s ease-in-out"
                        : "fadeSlideInLeft 0.5s ease-in-out"
                      : "none",
                  }}
                >
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-4 text-center"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {displayServices[currentSlide]?.title || ""}
                  </h3>

                  <p
                    className="text-gray-600 text-center leading-relaxed"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {displayServices[currentSlide]?.description || ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div
              className="flex justify-center gap-4 mt-8"
              role="tablist"
              aria-label={
                language === "ar" ? "شرائح الخدمات" : "Service slides"
              }
            >
              {displayServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all touch-manipulation ${
                    index === currentSlide
                      ? "bg-green-600 w-5 h-5 sm:w-6 sm:h-6"
                      : "bg-gray-300 w-4 h-4 sm:w-5 sm:h-5 hover:bg-gray-400"
                  }`}
                  role="tab"
                  aria-selected={index === currentSlide}
                  aria-label={`${language === "ar" ? "شريحة" : "Slide"} ${
                    index + 1
                  }`}
                  tabIndex={index === currentSlide ? 0 : -1}
                  style={{
                    minWidth: "20px",
                    minHeight: "20px",
                    touchAction: "manipulation",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
