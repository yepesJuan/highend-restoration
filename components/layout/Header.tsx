'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { HiMenu, HiX, HiPhone } from 'react-icons/hi';
import { company } from '@/lib/data/company';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const tl = useTranslations('languageSwitcher');
  const tc = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/services' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  const switchLocale = (newLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <nav className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt={company.name}
              width={160}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-terracotta font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher + Phone + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-charcoal/10 rounded-lg p-1">
              <button
                onClick={() => switchLocale('en')}
                aria-label="Switch to English"
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  locale === 'en'
                    ? 'bg-terracotta text-white'
                    : 'text-charcoal hover:bg-charcoal/5'
                }`}
              >
                {tl('en')}
              </button>
              <button
                onClick={() => switchLocale('es')}
                aria-label="Cambiar a Español"
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  locale === 'es'
                    ? 'bg-terracotta text-white'
                    : 'text-charcoal hover:bg-charcoal/5'
                }`}
              >
                {tl('es')}
              </button>
            </div>

            <a
              href={company.phoneLink}
              className="flex items-center gap-2 text-charcoal hover:text-terracotta font-semibold transition-colors"
            >
              <HiPhone className="w-5 h-5" />
              {company.phoneFormatted}
            </a>
            <Link href="/contact" className="btn-primary">
              {tc('getHelpNow')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-terracotta font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 py-2">
                <button
                  onClick={() => {
                    switchLocale('en');
                    setMobileMenuOpen(false);
                  }}
                  aria-label="Switch to English"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    locale === 'en'
                      ? 'bg-terracotta text-white'
                      : 'bg-charcoal/5 text-charcoal'
                  }`}
                >
                  {tl('english')}
                </button>
                <button
                  onClick={() => {
                    switchLocale('es');
                    setMobileMenuOpen(false);
                  }}
                  aria-label="Cambiar a Español"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    locale === 'es'
                      ? 'bg-terracotta text-white'
                      : 'bg-charcoal/5 text-charcoal'
                  }`}
                >
                  {tl('spanish')}
                </button>
              </div>

              <a
                href={company.phoneLink}
                className="flex items-center gap-2 text-terracotta font-semibold py-2"
              >
                <HiPhone className="w-5 h-5" />
                {company.phoneFormatted}
              </a>
              <Link
                href="/contact"
                className="btn-primary text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {tc('getHelpNow')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
