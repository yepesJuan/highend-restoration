'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX, HiPhone } from 'react-icons/hi';
import { company } from '@/lib/data/company';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Phone + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={company.phoneLink}
              className="flex items-center gap-2 text-charcoal hover:text-terracotta font-semibold transition-colors"
            >
              <HiPhone className="w-5 h-5" />
              {company.phoneFormatted}
            </a>
            <Link href="/contact" className="btn-primary">
              Get Help Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                Get Help Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
