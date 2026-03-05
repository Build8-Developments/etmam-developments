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
          width={56}
          height={56}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(95%) contrast(101%)' }}
        />
      );
    }

    return (
      <Image
        src={imageSrc}
        alt={service.icon?.name || service.title || "Service icon"}
        width={56}
        height={56}
        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
      />
    );
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0a5c3c] via-[#0d7045] to-[#0a5c3c] relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" data-decorative="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" data-decorative="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
              {language === "ar" ? "خدماتنا" : "Our Services"}
            </span>
          </div>
          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 drop-shadow-2xl px-4 leading-tight"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {title || defaultTitle}
          </h2>
          <p
            className="text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {description || defaultDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-20">
          {displayServices.map((service: ServiceCard, index: number) => (
            <div
              key={service.id || index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" data-decorative="true"></div>
              
              <div
                className={`relative rounded-2xl p-6 md:p-8 lg:p-10 text-center transition-all duration-500 h-full flex flex-col ${
                  service.isActive
                    ? "bg-white/15 backdrop-blur-md text-white border-2 border-white/30 shadow-2xl"
                    : "bg-white text-gray-800 shadow-xl hover:shadow-2xl border border-gray-100 hover:-translate-y-3 hover:scale-[1.02]"
                }`}
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                      service.isActive 
                        ? "bg-white/20 group-hover:bg-white/30 group-hover:scale-110" 
                        : "bg-gradient-to-br from-green-50 to-green-100 group-hover:from-green-100 group-hover:to-green-200 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                    }`}
                  >
                    <div className="text-green-600 transform transition-transform duration-500 group-hover:scale-110">
                      {getIconComponent(service)}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-bold mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl transition-colors leading-tight"
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed text-sm md:text-base lg:text-lg transition-colors flex-grow ${
                    service.isActive ? "text-white/90" : "text-gray-600 group-hover:text-gray-800"
                  }`}
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {service.description}
                </p>

                {/* Decorative Bottom Line */}
                <div className={`mt-6 pt-4 border-t transition-colors ${
                  service.isActive ? "border-white/20" : "border-gray-100 group-hover:border-green-200"
                }`}>
                  <span className={`text-xs font-medium transition-colors ${
                    service.isActive ? "text-white/70" : "text-green-600 group-hover:text-green-700"
                  }`}>
                    {language === "ar" ? "اعرف المزيد" : "Learn More"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={displayCTA.href}
            className="group inline-flex items-center gap-3 bg-white text-green-700 font-bold rounded-full px-8 md:px-12 lg:px-14 py-4 md:py-5 hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 text-base md:text-lg border-2 border-transparent hover:border-white/50"
            style={{
              fontFamily: "var(--font-almarai)",
              textDecoration: "none",
            }}
          >
            {displayCTA.label}
            <svg 
              className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${
                language === 'ar' 
                  ? 'rotate-180 group-hover:-translate-x-2' 
                  : 'group-hover:translate-x-2'
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
