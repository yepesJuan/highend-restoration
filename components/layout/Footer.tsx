'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { HiPhone, HiMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { company } from '@/lib/data/company';
import { services } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';

// Map service slugs to translation keys
const serviceTranslationKeys: Record<string, string> = {
  'water-damage-restoration': 'waterDamage',
  'fire-restoration': 'fireRestoration',
  'mold-restoration': 'moldRestoration',
  'moisture-mold-inspection': 'moistureInspection',
  'smoke-odor-removal': 'smokeOdor',
  decontamination: 'decontamination',
};

export default function Footer() {
  const t = useTranslations('footer');
  const ts = useTranslations('services');

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt={company.name}
              width={140}
              height={52}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6">{company.description}</p>
            <div className="flex items-center gap-4">
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              {services.map((service) => {
                const translationKey = serviceTranslationKeys[service.slug];
                return (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-gray-300 hover:text-terracotta transition-colors"
                    >
                      {ts(`${translationKey}.shortName`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('serviceAreas')}</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <span className="text-gray-300">{area.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contactUs')}</h3>
            <div className="space-y-4">
              <a
                href={company.phoneLink}
                className="flex items-center gap-3 text-gray-300 hover:text-terracotta transition-colors"
              >
                <HiPhone className="w-5 h-5 text-terracotta" />
                {company.phoneFormatted}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-terracotta transition-colors"
              >
                <HiMail className="w-5 h-5 text-terracotta" />
                {company.email}
              </a>
              <p className="text-terracotta font-semibold">
                {company.hours.display}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            {t('copyright', {
              year: new Date().getFullYear(),
              company: company.name,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
