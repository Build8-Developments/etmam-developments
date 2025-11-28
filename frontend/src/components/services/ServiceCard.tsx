"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

interface ServiceCardProps {
  service: Service;
  href: string;
  showDetails?: boolean;
}

export const ServiceCard = ({
  service,
  href,
  showDetails = true,
}: ServiceCardProps) => {
  const { language } = useLanguage();

  const getIconComponent = (iconType: string) => {
    // If icon is a URL (starts with http or /), render as image
    if (iconType.startsWith("http") || iconType.startsWith("/")) {
      return (
        <Image
          src={iconType}
          alt={service.title}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
      );
    }

    // Otherwise, render hardcoded SVG icons
    const iconSize = 24;

    switch (iconType) {
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
      case "trademark":
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
      case "tax":
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
      case "work":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19ZM12 9C10.9 9 10 9.9 10 11S10.9 13 12 13 14 12.1 14 11 13.1 9 12 9ZM16 17H8V16C8 14.9 8.9 14 10 14H14C15.1 14 16 14.9 16 16V17Z"
              fill="#026838"
            />
          </svg>
        );
      case "visa":
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
      case "iqama":
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
      case "health":
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
      case "school":
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
    <Link href={href} className="block h-full">
      <div
        className="
        group relative bg-white rounded-2xl h-full flex flex-col overflow-hidden
        transition-all duration-500 ease-out
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_60px_rgba(27,128,54,0.15)]
        transform hover:-translate-y-3
        border border-gray-100
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#1B8036]/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 before:pointer-events-none
        hover:before:opacity-100
      "
      >
        {/* Gradient Header */}
        <div className="relative bg-gradient-to-br from-[#1B8036] via-[#1a7532] to-[#145c28] p-8 overflow-hidden">
          {/* Animated Background Patterns */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-700" />

          {/* Service Icon */}
          <div className="relative z-10 flex items-center justify-center">
            <div
              className="
              w-16 h-16 bg-white rounded-2xl flex items-center justify-center
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              transform group-hover:scale-110 group-hover:rotate-3
              transition-all duration-500
            "
            >
              <div className="group-hover:scale-110 transition-transform duration-500">
                {getIconComponent(service.icon)}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Service Title */}
          <h3
            className="
            text-xl font-bold text-gray-900 mb-3 text-center
            group-hover:text-[#1B8036] 
            transition-colors duration-300
            leading-tight
          "
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {service.title}
          </h3>

          {/* Service Description */}
          <p
            className="
            text-gray-600 text-sm leading-relaxed mb-4 flex-1 text-center
            group-hover:text-gray-700
            transition-colors duration-300
          "
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {service.description}
          </p>

          {/* Service Details */}
          {showDetails && (
            <div className="space-y-3 mb-6 px-4">
              <div
                className="
                flex items-center justify-center gap-3 text-sm
                px-4 py-2.5 rounded-xl
                bg-gradient-to-r from-green-50 to-emerald-50
                border border-green-100
                group-hover:border-green-200
                transition-all duration-300
              "
              >
                <svg
                  className="w-5 h-5 text-[#1B8036] group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                <span
                  className="font-semibold text-gray-700"
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {service.price}
                </span>
              </div>
              <div
                className="
                flex items-center justify-center gap-3 text-sm
                px-4 py-2.5 rounded-xl
                bg-gradient-to-r from-blue-50 to-cyan-50
                border border-blue-100
                group-hover:border-blue-200
                transition-all duration-300
              "
              >
                <svg
                  className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span
                  className="font-semibold text-gray-700"
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {service.duration}
                </span>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-4 border-t border-gray-100">
            <div
              className="
              flex items-center justify-center gap-2
              w-full py-3 px-6 rounded-xl
              bg-gradient-to-r from-[#1B8036] to-[#145c28]
              text-white font-bold
              group-hover:shadow-lg group-hover:shadow-[#1B8036]/50
              transform group-hover:scale-[1.02]
              transition-all duration-300
            "
            >
              <span
                className="text-sm"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar" ? "عرض التفاصيل" : "View Details"}
              </span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d={language === "ar" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
