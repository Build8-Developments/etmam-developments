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

    // Use buildImageUrl for Strapi URLs
    const imageSrc = iconPath.startsWith("http")
      ? iconPath
      : buildImageUrl(iconPath);

    return (
      <Image
        src={imageSrc}
        alt={service.icon?.name || service.title || "Service icon"}
        width={26}
        height={26}
        className="w-[26px] h-[26px]"
      />
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {title || defaultTitle}
          </h2>
          <p
            className="text-white/90 text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {description || defaultDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayServices.map((service: ServiceCard, index: number) => (
            <div
              key={service.id || index}
              className={`rounded-xl p-6 text-center transition-smooth hover-lift hover-glow animate-scale-in ${
                service.isActive
                  ? "bg-white/20 text-white border-2 border-white/40 animate-glow-pulse"
                  : "bg-white text-gray-800 shadow-lg hover:shadow-xl border border-gray-100"
              } transform`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full transition-smooth bg-green-50`}
                >
                  <div>{getIconComponent(service)}</div>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-3 text-lg transition-slow"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`leading-relaxed text-sm transition-slow ${
                  service.isActive ? "text-white/90" : "text-gray-600"
                }`}
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={displayCTA.href}
            className="inline-block bg-white text-green-600 font-semibold rounded-xl px-8 py-3 hover:bg-gray-50 transition-smooth hover-lift shadow-lg hover:shadow-xl transform"
            style={{
              fontFamily: "var(--font-almarai)",
              textDecoration: "none",
            }}
          >
            {displayCTA.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
