"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { buildImageUrl } from "@/lib/api";
import {
  servicesMockData,
  servicesMockDataEn,
} from "@/mockData/services/services";
import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  id?: string;
  href?: string;
  serviceLink?: string;
  title: string;
  description: string;
  isActive?: boolean;
  icon?: {
    url?: string;
    name?: string;
  };
}

interface ServicesProps {
  title?: string;
  description?: string;
  services?: ServiceCard[];
  ctaButton?: {
    label: string;
    href: string;
  };
}

export default function ServicesSection({
  title,
  description,
  services,
  ctaButton,
}: ServicesProps) {
  const { language } = useLanguage();

  // Default content
  const defaultTitle =
    language === "ar"
      ? "خدماتنا التي تلبي احتياجاتك"
      : "Our Services That Meet Your Needs";

  const defaultDescription =
    language === "ar"
      ? "في إتمام نقدم مجموعة من الخدمات التجارية والإدارية المصممة لتسهيل رحلتك في تأسيس وإدارة أعمالك بكفاءة واحترافية."
      : "At Etmam, we offer a range of commercial and administrative services designed to facilitate your journey in establishing and managing your business efficiently and professionally.";

  // Use Strapi data if available, otherwise fallback to mock data
  const mockServices =
    language === "ar" ? servicesMockData : servicesMockDataEn;
  const displayServices = services || mockServices;

  const defaultCTA = {
    label: language === "ar" ? "عرض المزيد" : "Show More",
    href: "/services",
  };

  const displayCTA = ctaButton || defaultCTA;

  const getIconComponent = (service: ServiceCard) => {
    // Handle Strapi data structure (icon.url)
    const iconUrl = service.icon?.url;

    // Handle mock data structure (href as icon path)
    const fallbackIcon = service.href;

    const iconPath = iconUrl || fallbackIcon;

    if (!iconPath) {
      return null;
    }

    // Determine the correct image source
    let imageSrc: string;
    
    if (iconPath.startsWith("http")) {
      // External URL - use as is
      imageSrc = iconPath;
    } else if (iconPath.startsWith("/icons/") || iconPath.startsWith("/images/")) {
      // Local public folder - use as is (Next.js serves from public)
      imageSrc = iconPath;
    } else if (iconPath.startsWith("/uploads/")) {
      // Strapi upload - use buildImageUrl
      imageSrc = buildImageUrl(iconPath);
    } else {
      // Default fallback
      imageSrc = iconPath;
    }

    // Use regular img tag for SVG files, Next.js Image for others
    const isSvg = imageSrc.endsWith('.svg');
    
    if (isSvg) {
      return (
        <img
          src={imageSrc}
          alt={service.icon?.name || service.title || "Service icon"}
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(95%) contrast(101%)' }}
        />
      );
    }

    return (
      <Image
        src={imageSrc}
        alt={service.icon?.name || service.title || "Service icon"}
        width={40}
        height={40}
        className="w-[40px] h-[40px]"
      />
    );
  };

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-[#0a5c3c] via-[#0d7045] to-[#0a5c3c] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h2
            className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 drop-shadow-lg px-2"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {title || defaultTitle}
          </h2>
          <p
            className="text-white/95 text-sm md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {description || defaultDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {displayServices.map((service: ServiceCard, index: number) => (
            <div
              key={service.id || index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`rounded-xl md:rounded-2xl p-5 md:p-8 text-center transition-all duration-300 h-full ${
                  service.isActive
                    ? "bg-white/15 backdrop-blur-sm text-white border-2 border-white/30 shadow-2xl"
                    : "bg-white text-gray-800 shadow-xl hover:shadow-2xl border border-gray-100 hover:-translate-y-2"
                }`}
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center mb-3 md:mb-6">
                  <div
                    className={`w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl transition-all duration-300 ${
                      service.isActive 
                        ? "bg-white/20 group-hover:bg-white/30" 
                        : "bg-gradient-to-br from-green-50 to-green-100 group-hover:from-green-100 group-hover:to-green-200 group-hover:scale-110"
                    }`}
                  >
                    <div className="text-green-600">{getIconComponent(service)}</div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-bold mb-2 md:mb-4 text-base md:text-xl transition-colors"
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed text-xs md:text-base transition-colors ${
                    service.isActive ? "text-white/95" : "text-gray-600 group-hover:text-gray-700"
                  }`}
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={displayCTA.href}
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold rounded-full px-6 md:px-10 py-3 md:py-4 hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 text-sm md:text-base"
            style={{
              fontFamily: "var(--font-almarai)",
              textDecoration: "none",
            }}
          >
            {displayCTA.label}
            <svg 
              className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
