'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavigationItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: {
    url: string;
    alternativeText: string;
  };
  navigationItems?: NavigationItem[];
  contactButton?: {
    label: string;
    href: string;
  };
}

export default function Header({ logo, navigationItems, contactButton }: HeaderProps) {
  const { language, setLanguage, isRTL } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true } as AddEventListenerOptions);
    onScroll();
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Build labels from a static dictionary to ensure SSR/CSR match
  const DICT = {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'من نحن', en: 'About' },
    legal: { ar: 'خدمات قانونية', en: 'Legal Services' },
    consulting: { ar: 'خدمات استشارية', en: 'Consulting' },
    team: { ar: 'فريق العمل', en: 'Team' },
    blog: { ar: 'المدونة', en: 'Blog' },
    packages: { ar: 'الباقات', en: 'Packages' },
  } as const;

  const labels = {
    home: DICT.home[language],
    about: DICT.about[language],
    legal: DICT.legal[language],
    consulting: DICT.consulting[language],
    team: DICT.team[language],
    blog: DICT.blog[language],
    packages: DICT.packages[language],
  };

  const defaultNavItems = [
    { label: labels.home, href: '/' },
    { label: labels.about, href: '/about' },
    { label: labels.legal, href: '/legal-services' },
    { label: labels.consulting, href: '/consulting' },
    { label: labels.team, href: '/team' },
    { label: labels.blog, href: '/blog' },
    { label: labels.packages, href: '/packages' },
  ];

  const navItems = navigationItems || defaultNavItems;
  const contactLabel = contactButton?.label || (language === 'ar' ? 'تواصل معنا' : 'Contact Us');

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 sm:px-6">
        <div
          className="flex items-center justify-between"
          style={{
            height: scrolled ? 80 : 95,
            background: '#FFFFFF',
            opacity: 1,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            paddingInline: 24,
            boxShadow: scrolled ? '0 6px 18px rgba(0,0,0,0.08)' : '0 2px 12px rgba(0,0,0,0.06)',
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
                src="/logo.png"
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

          {/* Right Section - Language Switcher & Contact Button */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="w-10 h-10 rounded-full bg-primary hover:bg-green-600 text-white flex items-center justify-center font-medium transition-colors"
              aria-label="Switch Language"
            >
              {language === 'ar' ? 'en' : 'ع'}
            </button>

            {/* Contact Button */}
            <Link
              href={contactButton?.href || '/contact'}
              className="hidden md:inline-flex px-9 py-[15px] bg-primary hover:bg-green-600 text-white rounded-[37px] font-semibold transition-colors whitespace-nowrap"
            >
              {contactLabel}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span className="w-6 h-0.5 bg-gray-700"></span>
              <span className="w-6 h-0.5 bg-gray-700"></span>
              <span className="w-6 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>

        {/* Page overlay when mobile menu open */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className={`${mobileOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'} lg:hidden transition-all duration-200 relative z-[60]`}
        >
          <div className="mt-2 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="flex flex-col py-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
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
                aria-label="Switch Language"
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

