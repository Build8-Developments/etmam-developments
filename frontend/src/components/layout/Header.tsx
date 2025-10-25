'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useMobileMenu } from '@/hooks';
import { getTranslation, IMAGE_PATHS } from '@/constants';
import { HeaderProps } from '@/types';
import { Button } from '../common';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ logo, navigationItems, contactButton }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const { isOpen, toggle, close } = useMobileMenu();

  // Build navigation items from translations
  const defaultNavItems = [
    { label: getTranslation('navigation', 'home', language), href: '/' },
    { label: getTranslation('navigation', 'about', language), href: '/about' },
    { label: getTranslation('navigation', 'legal', language), href: '/legalservices' },
    { label: getTranslation('navigation', 'consulting', language), href: '/consulting' },
    { label: getTranslation('navigation', 'offers', language), href: '/offers' },
    { label: getTranslation('navigation', 'blog', language), href: '/blog' },
    { label: getTranslation('navigation', 'packages', language), href: '/packages' },
  ];

  const navItems = navigationItems || defaultNavItems;
  const contactLabel = contactButton?.label || getTranslation('navigation', 'contact', language);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 sm:px-6">
        <div
          className="flex items-center justify-between"
          style={{
            height: 95,
            background: '#FFFFFF',
            opacity: 1,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            paddingInline: 24,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logo ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${logo.url}`}
                alt={logo.alternativeText || 'Logo'}
                width={128}
                height={72}
                className="w-[128px] h-[72px] lg:w-[101px] lg:h-[60px] object-contain"
                priority
              />
            ) : (
              <Image
                src={IMAGE_PATHS.logos.main}
                alt="Etmam"
                width={128}
                height={72}
                className="w-[128px] h-[72px] lg:w-[101px] lg:h-[60px] object-contain"
                priority
              />
            )}
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10 rtl:gap-reverse">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-800 hover:text-primary transition-colors whitespace-nowrap text-sm sm:text-base lg:text-lg"
                style={{
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  lineHeight: '100%',
                  letterSpacing: 0,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="w-10 h-10 rounded-full bg-primary hover:bg-green-600 text-white flex items-center justify-center font-medium transition-colors"
              aria-label={getTranslation('accessibility', 'languageSwitch', language)}
            >
              {language === 'ar' ? 'en' : 'ع'}
            </button>

            {/* Contact Button */}
            <Button
              label={contactLabel}
              href={contactButton?.href || '/contact'}
              variant="primary"
              size="md"
              className="hidden sm:inline-flex px-6 sm:px-9 py-2 sm:py-[15px] rounded-[37px] whitespace-nowrap text-sm sm:text-base"
            />

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              aria-label={getTranslation('accessibility', 'menuToggle', language)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
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
          className={`${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'} lg:hidden transition-all duration-300 ease-out relative z-[60]`}
        >
          <div className="mt-3 mx-4 rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden backdrop-blur-sm">
            {/* Menu Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'var(--font-almarai)' }}>
                {language === 'ar' ? 'القائمة' : 'Menu'}
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
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  <span className="flex-1">{item.label}</span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
            
            {/* Menu Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between gap-4">
                {/* Language Switcher */}
                <button
                  onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary hover:bg-green-600 text-white font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  aria-label={getTranslation('accessibility', 'languageSwitch', language)}
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  <span className="text-lg">{language === 'ar' ? 'en' : 'ع'}</span>
                  <span className="text-sm">{language === 'ar' ? 'English' : 'العربية'}</span>
                </button>
                
                {/* Contact Button */}
                <Button
                  label={contactLabel}
                  href={contactButton?.href || '/contact'}
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