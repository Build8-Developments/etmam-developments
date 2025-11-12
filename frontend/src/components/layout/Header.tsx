"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useMobileMenu } from "@/hooks";
import { getTranslation, IMAGE_PATHS } from "@/constants";
import { buildImageUrl } from "@/lib/api";
import { HeaderProps } from "@/types";
import { Button } from "../common";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  logo,
  navigationItems,
  contactButton,
}: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const { isOpen, toggle, close } = useMobileMenu();

  // Build navigation items from translations
  const defaultNavItems = [
    { label: getTranslation("navigation", "home", language), href: "/" },
    { label: getTranslation("navigation", "about", language), href: "/about" },
    {
      label: getTranslation("navigation", "legal", language),
      href: "/legalservices",
    },
    {
      label: getTranslation("navigation", "consulting", language),
      href: "/consulting",
    },
    {
      label: getTranslation("navigation", "offers", language),
      href: "/offers",
    },
    { label: getTranslation("navigation", "blog", language), href: "/blog" },
    {
      label: getTranslation("navigation", "packages", language),
      href: "/packages",
    },
  ];

  const navItems = (navigationItems || defaultNavItems).map((item: any) => ({
    ...item,
    label:
      typeof item.label === "string"
        ? item.label
        : item.label?.[language] ?? "",
  }));
  const contactLabel =
    (typeof contactButton?.label === "string"
      ? contactButton?.label
      : contactButton?.label?.[language]) ||
    getTranslation("navigation", "contact", language);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] animate-slide-down">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between transition-all duration-300 hover:shadow-lg"
          style={{
            height: "70px",
            background: "#FFFFFF",
            borderBottomRightRadius: "35px",
            borderBottomLeftRadius: "35px",
            paddingLeft: "20px",
            paddingRight: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105 duration-300"
          >
            {logo ? (
              <Image
                src={buildImageUrl(logo.url)}
                alt={logo.alternativeText || "Logo"}
                width={120}
                height={65}
                className="w-[110px] h-[60px] sm:w-[120px] sm:h-[65px] lg:w-[90px] lg:h-[50px] object-contain"
                priority
              />
            ) : (
              <Image
                src={IMAGE_PATHS.logos.main}
                alt="Etmam"
                width={120}
                height={65}
                className="w-[110px] h-[60px] sm:w-[120px] sm:h-[65px] lg:w-[90px] lg:h-[50px] object-contain"
                priority
              />
            )}
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 whitespace-nowrap text-sm xl:text-base font-semibold group"
                style={{
                  fontFamily: "var(--font-almarai)",
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Language Switcher - Unified Design */}
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="group relative flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-green-50 hover:to-green-100 border-2 border-gray-200 hover:border-green-500 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500/30"
              aria-label={getTranslation(
                "accessibility",
                "languageSwitch",
                language
              )}
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>

              {/* Globe Icon */}
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-300 transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              {/* Language Text */}
              <span
                className="text-sm font-bold text-gray-700 group-hover:text-green-600 transition-colors duration-300 relative z-10"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar" ? "EN" : "عر"}
              </span>

              {/* Swap Icon */}
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:rotate-180 transition-all duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>

            {/* Contact Button */}
            <Button
              label={contactLabel}
              href={contactButton?.href || "/contact"}
              style={
                language === "ar"
                  ? {
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "32px",
                      borderBottomLeftRadius: "35px",
                      borderBottomRightRadius: "35px",
                    }
                  : {
                      borderTopLeftRadius: "32px",
                      borderTopRightRadius: "0",
                      borderBottomLeftRadius: "35px",
                      borderBottomRightRadius: "35px",
                    }
              }
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex whitespace-nowrap text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.08] active:scale-[0.98]"
            />

            {/* Mobile Menu Button - Enhanced Animation */}
            <button
              onClick={toggle}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-50 to-gray-100 hover:from-green-50 hover:to-green-100 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500/30 group"
              aria-label={getTranslation(
                "accessibility",
                "menuToggle",
                language
              )}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {/* Animated background pulse */}
              <span
                className={`absolute inset-0 rounded-full bg-green-500 opacity-0 ${
                  isOpen ? "animate-ping" : ""
                }`}
              ></span>

              {/* Hamburger Icon */}
              <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                <span
                  className={`absolute w-6 h-0.5 bg-gray-700 group-hover:bg-green-600 rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 bg-gray-700 group-hover:bg-green-600 rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 bg-gray-700 group-hover:bg-green-600 rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Page overlay when mobile menu open */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm lg:hidden transition-all duration-300"
            onClick={close}
          />
        )}

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className={`${
            isOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          } lg:hidden transition-all duration-300 ease-out relative z-[95]`}
        >
          <div className="mt-3 mx-4 rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden backdrop-blur-sm">
            {/* Menu Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <h3
                className="text-lg font-bold text-gray-800"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar" ? "القائمة" : "Menu"}
              </h3>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col py-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={close}
                  className="px-6 py-4 text-base font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-all duration-200 flex items-center group"
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  <span className="flex-1">{item.label}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors"
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
                </Link>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gradient-to-br from-gray-50/50 to-white">
              <div className="flex items-center justify-between gap-4">
                {/* Language Switcher - Matching Desktop Design */}
                <button
                  onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                  className="group relative flex items-center gap-3 px-4 py-2.5 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-green-50 hover:to-green-100 border-2 border-gray-200 hover:border-green-500 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500/30"
                  aria-label={getTranslation(
                    "accessibility",
                    "languageSwitch",
                    language
                  )}
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {/* Animated background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>

                  {/* Globe Icon */}
                  <svg
                    className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300 transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  {/* Language Text */}
                  <span className="text-sm font-bold text-gray-700 group-hover:text-green-600 transition-colors duration-300 relative z-10">
                    {language === "ar" ? "English" : "العربية"}
                  </span>

                  {/* Swap Icon */}
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:rotate-180 transition-all duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>

                {/* Contact Button */}
                <Button
                  label={contactLabel}
                  href={contactButton?.href || "/contact"}
                  variant="primary"
                  size="sm"
                  className="px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.08] active:scale-[0.98]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
