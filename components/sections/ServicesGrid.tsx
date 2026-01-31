'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { HiArrowRight } from 'react-icons/hi';
import {
  HiOutlineBeaker,
  HiOutlineFire,
  HiOutlineEye,
  HiOutlineSparkles,
  HiOutlineShieldExclamation,
} from 'react-icons/hi';
import { FaWater } from 'react-icons/fa';
import { services } from '@/lib/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  water: FaWater,
  fire: HiOutlineFire,
  mold: HiOutlineBeaker,
  inspection: HiOutlineEye,
  smoke: HiOutlineSparkles,
  biohazard: HiOutlineShieldExclamation,
};

const colorMap: Record<string, string> = {
  water: 'bg-water/10 text-water',
  fire: 'bg-fire/10 text-fire',
  mold: 'bg-mold/10 text-mold',
  sage: 'bg-sage/10 text-sage',
  charcoal: 'bg-charcoal/10 text-charcoal',
  biohazard: 'bg-biohazard/10 text-biohazard',
};

// Map service slugs to translation keys
const serviceTranslationKeys: Record<string, string> = {
  'water-damage-restoration': 'waterDamage',
  'fire-restoration': 'fireRestoration',
  'mold-restoration': 'moldRestoration',
  'moisture-mold-inspection': 'moistureInspection',
  'smoke-odor-removal': 'smokeOdor',
  decontamination: 'decontamination',
};

export default function ServicesGrid() {
  const t = useTranslations('servicesSection');
  const ts = useTranslations('services');
  const tc = useTranslations('common');

  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">{t('title')}</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FaWater;
            const colorClass = colorMap[service.color] || colorMap.water;
            const translationKey = serviceTranslationKeys[service.slug];

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${colorClass} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="heading-3 mb-2 group-hover:text-terracotta transition-colors">
                  {ts(`${translationKey}.shortName`)}
                </h3>
                <p className="text-charcoal/70 mb-4 line-clamp-2">
                  {ts(`${translationKey}.description`)}
                </p>
                <span className="inline-flex items-center text-terracotta font-medium">
                  {tc('learnMore')}
                  <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
