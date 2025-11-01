"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useMobileMenu } from "@/hooks";
import { getTranslation, IMAGE_PATHS } from "@/constants";
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

  const navItems = navigationItems || defaultNavItems;
  const contactLabel =
    contactButton?.label || getTranslation("navigation", "contact", language);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
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
                src={`http://localhost:1337${logo.url}`}
                alt={logo.alternativeText || "Logo"}
                width={90}
                height={50}
                className="w-[90px] h-[50px] object-contain"
                priority
              />
            ) : (
              <Image
                src={IMAGE_PATHS.logos.main}
                alt="Etmam"
                width={90}
                height={50}
                className="w-[90px] h-[50px] object-contain"
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
            {/* Language Switcher with Flags */}
            <Button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              variant="primary"
              size="sm"
              className="relative overflow-hidden bg-white text-white border-2 border-gray-300 hover:border-green-500 
              hover:bg-green-50 transition-all duration-300 shadow-sm 
              hover:shadow-lg hover:scale-110 active:scale-95 focus:outline-none 
              focus:ring-4 focus:ring-green-500/40 active:shadow-inner
              before:absolute before:inset-0 before:bg-green-500/10 before:translate-y-full 
              before:transition-transform before:duration-300 hover:before:translate-y-0"
              style={{
                borderRadius: "35px",
              }}
              ariaLabel={getTranslation(
                "accessibility",
                "languageSwitch",
                language
              )}
            >
              {language === "ar" ? (
                <>
                  <span
                    className="hidden sm:inline text-white text-sm font-bold group-hover:text-green-600 transition-all duration-300 relative z-10"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    EN
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="hidden sm:inline text-sm font-bold text-white group-hover:text-green-600 transition-all duration-300  relative z-10"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    عر
                  </span>
                </>
              )}
            </Button>

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
              className="hidden sm:inline-flex whitespace-nowrap text-sm font-semibold transition-transform hover:scale-105 duration-300 shadow-md hover:shadow-lg"
            />

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/50"
              aria-label={getTranslation(
                "accessibility",
                "menuToggle",
                language
              )}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <span
                className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Page overlay when mobile menu open */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-all duration-300"
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
          } lg:hidden transition-all duration-300 ease-out relative z-[60]`}
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
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between gap-4">
                {/* Language Switcher with Flags */}
                <button
                  onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-green-500 hover:bg-green-50 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  aria-label={getTranslation(
                    "accessibility",
                    "languageSwitch",
                    language
                  )}
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {language === "ar" ? (
                    <>
                      <span
                        className="text-2xl"
                        role="img"
                        aria-label="English"
                      >
                        🇬🇧
                      </span>
                      <span className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors">
                        English
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className="text-2xl"
                        role="img"
                        aria-label="العربية"
                      >
                        🇸🇦
                      </span>
                      <span className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors">
                        العربية
                      </span>
                    </>
                  )}
                </button>

                {/* Contact Button */}
                <Button
                  label={contactLabel}
                  href={contactButton?.href || "/contact"}
                  variant="primary"
                  size="sm"
                  className="px-4 py-2 rounded-xl text-sm font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
