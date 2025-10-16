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
                className="text-gray-800 hover:text-primary transition-colors whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-almarai)',
                  fontWeight: 600,
                  fontSize: 20,
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
              className="hidden md:inline-flex px-9 py-[15px] rounded-[37px] whitespace-nowrap"
            />

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label={getTranslation('accessibility', 'menuToggle', language)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <span className="w-6 h-0.5 bg-gray-700"></span>
              <span className="w-6 h-0.5 bg-gray-700"></span>
              <span className="w-6 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>

        {/* Page overlay when mobile menu open */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden"
            onClick={close}
          />
        )}

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className={`${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'} lg:hidden transition-all duration-200 relative z-[60]`}
        >
          <div className="mt-2 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="flex flex-col py-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={close}
                  className="px-4 py-3 text-base font-semibold text-gray-800 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 px-4 pb-4">
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="w-10 h-10 rounded-full bg-primary hover:bg-green-600 text-white flex items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                aria-label={getTranslation('accessibility', 'languageSwitch', language)}
              >
                {language === 'ar' ? 'en' : 'ع'}
              </button>
              <div className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}