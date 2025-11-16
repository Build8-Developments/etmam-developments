"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildImageUrl } from "@/lib/api";

interface ContactInfo {
  email?: string;
  phone_number?: string;
  whatsapp_number?: string;
  address?: string;
  facebook_link?: string;
  twitter_link?: string;
  instagram_link?: string;
}

interface FooterService {
  ar: string;
  en: string;
  href: string;
}

interface FooterProps {
  contactInfo?: ContactInfo;
  consultingServices?: FooterService[];
  legalServices?: FooterService[];
  logo?: {
    url: string;
    name: string;
  };
  companyName?: string;
  companyTagline?: string;
  slogan?: string;
}

const Footer = ({
  contactInfo,
  consultingServices,
  legalServices,
  logo,
  companyName,
  companyTagline,
  slogan,
}: FooterProps) => {
  const { language } = useLanguage();

  const DICT = {
    contactUs: { ar: "تواصل معنا", en: "Contact Us" },
    email: {
      ar: contactInfo?.email || "Etmamm@gmail.com",
      en: contactInfo?.email || "Etmamm@gmail.com",
    },
    phone1: {
      ar: contactInfo?.phone_number || "(00) 0000-0000",
      en: contactInfo?.phone_number || "(00) 0000-0000",
    },
    phone2: {
      ar: contactInfo?.whatsapp_number || "(00) 00000-0000",
      en: contactInfo?.whatsapp_number || "(00) 00000-0000",
    },
    consultingServices: {
      ar: "أبرز الخدمات الاستشارية",
      en: "Key Consulting Services",
    },
    legalServices: { ar: "أبرز الخدمات القانونية", en: "Key Legal Services" },
    quickLinks: { ar: "روابط سريعة", en: "Quick Links" },
    home: { ar: "الرئيسية", en: "Home" },
    aboutUs: { ar: "من نحن", en: "About Us" },
    services: { ar: "الخدمات", en: "Services" },
    offers: { ar: "العروض", en: "Offers" },
    blog: { ar: "المدونة", en: "Blog" },
    packages: { ar: "الباقات", en: "Packages" },
    contact: { ar: "تواصل معنا", en: "Contact Us" },
    slogan: {
      ar: "إتمام... وجهتك الأولى لإنجاز أعمالك بثقة وسهولة.",
      en: "Etmam... Your first destination to accomplish your business with confidence and ease.",
    },
    privacyPolicy: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
    termsConditions: { ar: "الشروط والاحكام", en: "Terms and Conditions" },
  } as const;

  // Default services data
  const defaultConsultingServices = [
    { ar: "تأسيس الشركات", en: "Company Formation", href: "/consulting" },
    {
      ar: "الاستشارات التجارية",
      en: "Business Consulting",
      href: "/consulting",
    },
    {
      ar: "الاستشارات المالية",
      en: "Financial Consulting",
      href: "/consulting",
    },
    {
      ar: "الاستشارات التسويقية",
      en: "Marketing Consulting",
      href: "/consulting",
    },
    { ar: "الاستشارات الإدارية", en: "HR Consulting", href: "/consulting" },
    {
      ar: "الاستشارات التقنية",
      en: "Technical Consulting",
      href: "/consulting",
    },
  ];

  const defaultLegalServices = [
    {
      ar: "وزارة الصناعة والثروة المعدنية",
      en: "Ministry of Industry and Mineral Resources",
      href: "/legalservices",
    },
    { ar: "وزارة التجارة", en: "Ministry of Commerce", href: "/legalservices" },
    { ar: "وزارة المالية", en: "Ministry of Finance", href: "/legalservices" },
    {
      ar: "وزارة الموارد البشرية",
      en: "Ministry of Human Resources",
      href: "/legalservices",
    },
    { ar: "وزارة الصحة", en: "Ministry of Health", href: "/legalservices" },
    {
      ar: "وزارة التعليم",
      en: "Ministry of Education",
      href: "/legalservices",
    },
  ];

  // Use provided data or defaults
  const displayConsultingServices =
    consultingServices && consultingServices.length > 0
      ? consultingServices
      : defaultConsultingServices;

  const displayLegalServices =
    legalServices && legalServices.length > 0
      ? legalServices
      : defaultLegalServices;

  // Quick links
  const defaultQuickLinks = [
    { ar: DICT.home[language], en: DICT.home[language], href: "/" },
    { ar: DICT.aboutUs[language], en: DICT.aboutUs[language], href: "/about" },
    { ar: DICT.offers[language], en: DICT.offers[language], href: "/offers" },
    {
      ar: DICT.packages[language],
      en: DICT.packages[language],
      href: "/packages",
    },
    { ar: DICT.blog[language], en: DICT.blog[language], href: "/blog" },
    {
      ar: DICT.contact[language],
      en: DICT.contact[language],
      href: "/contact",
    },
  ];

  const quickLinks = defaultQuickLinks;

  return (
    <footer className="w-full" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Upper Section - Enhanced Green Gradient */}
      <div
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #14532d 0%, #15803d 50%, #16a34a 100%)",
        }}
      >
        {/* Background Pattern with Animation */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            
            {/* Column 5: Logo and Slogan - First on mobile, last on desktop */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-1 order-1 xl:order-5">
              <div className="flex flex-col items-center lg:items-start space-y-6">
                {/* Logo Section */}
                <div className="flex flex-col items-center lg:items-start space-y-3">
                  {logo?.url ? (
                    <Image
                      src={buildImageUrl(logo.url)}
                      alt={logo.name || "Etmam"}
                      width={140}
                      height={98}
                      className="object-contain brightness-0 invert w-[120px] h-[84px] sm:w-[140px] sm:h-[98px] md:w-[160px] md:h-[112px] lg:w-[180px] lg:h-[126px]"
                    />
                  ) : (
                    <Image
                      src="/images/logos/logo.png"
                      alt="Etmam"
                      width={140}
                      height={98}
                      className="object-contain brightness-0 invert w-[120px] h-[84px] sm:w-[140px] sm:h-[98px] md:w-[160px] md:h-[112px] lg:w-[180px] lg:h-[126px]"
                    />
                  )}
                  <div className="text-center lg:text-right">
                    <h4
                      className="text-white font-bold text-lg sm:text-xl md:text-xl mb-2"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      {companyName || "إتمام"}
                    </h4>
                    <p
                      className="text-white/80 text-sm sm:text-base md:text-lg"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      {companyTagline || "ETMAM Business Solutions"}
                    </p>
                  </div>
                </div>

                {/* Slogan Section */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-tr-full" />
                  
                  <div className="relative z-10">
                    <svg
                      className="w-8 h-8 text-white/40 mb-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div
                      className="text-white text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-right"
                      style={{
                        fontFamily: "var(--font-almarai)",
                      }}
                    >
                      {slogan || DICT.slogan[language]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 1: Contact Us */}
            <div className="space-y-4 order-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-white font-bold text-lg sm:text-xl md:text-xl"
                  style={{
                    fontFamily: "var(--font-almarai)",
                  }}
                >
                  {DICT.contactUs[language]}
                </h3>
              </div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-4" />
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo?.email || "Etmamm@gmail.com"}`}
                  className="flex items-center text-white/90 hover:text-white transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span
                    className="text-sm sm:text-base md:text-lg"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {contactInfo?.email || DICT.email[language]}
                  </span>
                </a>
                <a
                  href={`tel:${contactInfo?.phone_number || "(00) 0000-0000"}`}
                  className="flex items-center text-white/90 hover:text-white transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span
                    className="text-sm sm:text-base md:text-lg"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {contactInfo?.phone_number || DICT.phone1[language]}
                  </span>
                </a>
                <a
                  href={`https://wa.me/${
                    contactInfo?.whatsapp_number?.replace(/[^0-9]/g, "") ||
                    "00000000000"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white/90 hover:text-white transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-400/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span
                    className="text-sm sm:text-base md:text-lg"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {contactInfo?.whatsapp_number || DICT.phone2[language]}
                  </span>
                </a>
              </div>
            </div>

            {/* Column 2: Consulting Services */}
            <div className="space-y-4 order-3">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-white font-bold text-lg sm:text-xl md:text-xl"
                  style={{
                    fontFamily: "var(--font-almarai)",
                  }}
                >
                  {DICT.consultingServices[language]}
                </h3>
              </div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-4" />
              <div className="space-y-2">
                {displayConsultingServices.map(
                  (
                    service: { ar: string; en: string; href: string },
                    index: number
                  ) => (
                    <Link
                      key={index}
                      href={service.href || "/consulting"}
                      className="group flex items-center gap-2 text-white/90 text-sm sm:text-base md:text-lg hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer py-1.5 hover:bg-white/5 -mx-2 px-2 rounded-lg"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
                      {service[language]}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Column 3: Legal Services */}
            <div className="space-y-4 order-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3
                  className="text-white font-bold text-lg sm:text-xl md:text-xl"
                  style={{
                    fontFamily: "var(--font-almarai)",
                  }}
                >
                  {DICT.legalServices[language]}
                </h3>
              </div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-4" />
              <div className="space-y-2">
                {displayLegalServices.map(
                  (
                    service: { ar: string; en: string; href: string },
                    index: number
                  ) => (
                    <Link
                      key={index}
                      href={service.href || "/legalservices"}
                      className="group flex items-center gap-2 text-white/90 text-sm sm:text-base md:text-lg hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer py-1.5 hover:bg-white/5 -mx-2 px-2 rounded-lg"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
                      {service[language]}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Column 4: Quick Links */}
            <div className="space-y-4 order-5 xl:order-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-white font-bold text-lg sm:text-xl md:text-xl"
                  style={{
                    fontFamily: "var(--font-almarai)",
                  }}
                >
                  {DICT.quickLinks[language]}
                </h3>
              </div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-4" />
              <div className="space-y-2">
                {quickLinks.map(
                  (
                    link: { ar: string; en: string; href: string },
                    index: number
                  ) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="group flex items-center gap-2 text-white/90 text-sm sm:text-base md:text-lg hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer py-1.5 hover:bg-white/5 -mx-2 px-2 rounded-lg"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
                      {link[language]}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

      {/* Lower Section - Light Background */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8 sm:py-10 md:py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center space-y-6 sm:space-y-8 lg:space-y-0 gap-6 sm:gap-8 lg:gap-12">
            {/* Logo */}
            <div className="flex items-center">
              {logo?.url ? (
                <Image
                  src={buildImageUrl(logo.url)}
                  alt={logo.name || "Etmam"}
                  width={80}
                  height={56}
                  className="object-contain"
                />
              ) : (
                <Image
                  src="/images/logos/logo.png"
                  alt="Etmam"
                  width={80}
                  height={56}
                  className="object-contain"
                />
              )}
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {contactInfo?.facebook_link && (
                <a
                  href={contactInfo.facebook_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-green-500/30 hover:scale-110 hover:-rotate-6"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <svg
                    className="w-6 h-6 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {contactInfo?.twitter_link && (
                <a
                  href={contactInfo.twitter_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-green-500/30 hover:scale-110 hover:-rotate-6"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <svg
                    className="w-5 h-5 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              )}
              {contactInfo?.instagram_link && (
                <a
                  href={contactInfo.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-green-500/30 hover:scale-110 hover:-rotate-6"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <svg
                    className="w-5 h-5 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Link
                href="/privacy-policy"
                className="group relative text-green-700 text-xs sm:text-sm md:text-base font-semibold hover:text-green-800 transition-all duration-300"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                <span className="relative">
                  {DICT.privacyPolicy[language]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <span className="hidden sm:block w-1 h-1 bg-green-300 rounded-full" />
              <Link
                href="/terms-conditions"
                className="group relative text-green-700 text-xs sm:text-sm md:text-base font-semibold hover:text-green-800 transition-all duration-300"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                <span className="relative">
                  {DICT.termsConditions[language]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
