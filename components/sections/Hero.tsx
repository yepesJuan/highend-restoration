import Link from 'next/link';
import { HiPhone } from 'react-icons/hi';
import { company } from '@/lib/data/company';

export default function Hero() {
  return (
    <section className="relative bg-charcoal text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-terracotta rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sage rounded-full blur-3xl" />
      </div>

      <div className="relative container-main py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
            <span className="text-sm font-medium">24/7 Emergency Response</span>
          </div>

          {/* Headline */}
          <h1 className="heading-1 mb-6">
            Restoring What{' '}
            <span className="text-terracotta">Matters Most</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {company.yearsInBusiness} Years Serving South Florida Families
          </p>

          {/* Service areas */}
          <p className="text-gray-400 mb-8">
            Broward County • Palm Beach • West Palm Beach
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact" className="btn-primary text-center">
              Get Help Now
            </Link>
            <a
              href={company.phoneLink}
              className="btn-secondary bg-transparent border-white/20 text-white hover:bg-white/10 text-center"
            >
              <HiPhone className="w-5 h-5 mr-2" />
              {company.phoneFormatted}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-sage">✓</span> Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="text-sage">✓</span> Family Owned
            </span>
            <span className="flex items-center gap-2">
              <span className="text-sage">✓</span> Fast Response
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
