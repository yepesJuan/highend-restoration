'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { HiPhone } from 'react-icons/hi';
import { company } from '@/lib/data/company';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations('hero');
  const tc = useTranslations('common');

  const heroImages = [
    {
      src: '/images/truck.JPG',
      labelKey: 'truck',
      color: 'bg-terracotta',
      position: 'object-bottom',
    },
    {
      src: '/images/water-damage/waterdamage.JPG',
      labelKey: 'waterDamage',
      color: 'bg-water',
      position: 'object-center',
    },
    {
      src: '/images/fire-restoration/firerestoration2.JPG',
      labelKey: 'fireRestoration',
      color: 'bg-fire',
      position: 'object-center',
    },
    {
      src: '/images/mold-restoration/moldrestoration2.JPG',
      labelKey: 'moldRestoration',
      color: 'bg-mold',
      position: 'object-center',
    },
    {
      src: '/images/moisture-inspection/moisturemold3.JPG',
      labelKey: 'moistureInspection',
      color: 'bg-sage',
      position: 'object-center',
    },
    {
      src: '/images/smoke-odor/smokeodor2.JPG',
      labelKey: 'smokeOdor',
      color: 'bg-charcoal',
      position: 'object-center',
    },
    {
      src: '/images/decontamination/decontamination3.JPG',
      labelKey: 'decontamination',
      color: 'bg-biohazard',
      position: 'object-top',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const currentImage = heroImages[currentIndex];

  return (
    <section className="relative bg-charcoal text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-terracotta rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sage rounded-full blur-3xl" />
      </div>

      <div className="relative container-main py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
              <span className="text-sm font-medium">{t('badge')}</span>
            </div>

            {/* Headline */}
            <h1 className="heading-1 mb-6">
              {t('title')} <span className="text-terracotta">{t('titleHighlight')}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {t('subtitle', { years: company.yearsInBusiness })}
            </p>

            {/* Service areas */}
            <p className="text-gray-400 mb-8">{t('serviceAreas')}</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="btn-primary text-center">
                {tc('getHelpNow')}
              </Link>
              <a
                href={company.phoneLink}
                className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors duration-200 text-center"
              >
                <HiPhone className="w-5 h-5 mr-2" />
                {company.phoneFormatted}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="text-sage">✓</span> {t('trustLicensed')}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-sage">✓</span> {t('trustFamily')}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-sage">✓</span> {t('trustFast')}
              </span>
            </div>
          </div>

          {/* Right side - Rotating images */}
          <div className="hidden lg:block relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              {heroImages.map((image, index) => {
                // Only render current, previous, and next images for performance
                const isVisible = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + heroImages.length) % heroImages.length;
                const isNext = index === (currentIndex + 1) % heroImages.length;
                if (!isVisible && !isPrev && !isNext) return null;

                return (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={t(`imageLabels.${image.labelKey}`)}
                    fill
                    className={`object-cover ${image.position} transition-opacity duration-700 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={index === 0}
                    sizes="(max-width: 1024px) 0vw, 50vw"
                  />
                );
              })}

              {/* Service label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <span
                  className={`inline-block px-3 py-1 ${currentImage.color} text-white text-sm font-medium rounded-full`}
                >
                  {t(`imageLabels.${currentImage.labelKey}`)}
                </span>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-terracotta' : 'bg-white/30'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-terracotta/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
