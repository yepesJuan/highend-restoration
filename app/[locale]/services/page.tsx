import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import {
  HiOutlineBeaker,
  HiOutlineFire,
  HiOutlineEye,
  HiOutlineSparkles,
  HiOutlineShieldExclamation,
} from 'react-icons/hi';
import { FaWater } from 'react-icons/fa';
import { services } from '@/lib/data/services';
import { company } from '@/lib/data/company';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('services.title'),
    description: t('services.description'),
    alternates: {
      canonical: `https://www.highendrestoration.org/${locale}/services`,
      languages: {
        en: 'https://www.highendrestoration.org/en/services',
        es: 'https://www.highendrestoration.org/es/services',
      },
    },
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  water: FaWater,
  fire: HiOutlineFire,
  mold: HiOutlineBeaker,
  inspection: HiOutlineEye,
  smoke: HiOutlineSparkles,
  biohazard: HiOutlineShieldExclamation,
};

const colorMap: Record<string, string> = {
  water: 'bg-water/10 text-water border-water/20',
  fire: 'bg-fire/10 text-fire border-fire/20',
  mold: 'bg-mold/10 text-mold border-mold/20',
  sage: 'bg-sage/10 text-sage border-sage/20',
  charcoal: 'bg-charcoal/10 text-charcoal border-charcoal/20',
  biohazard: 'bg-biohazard/10 text-biohazard border-biohazard/20',
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

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicesPage' });
  const ts = await getTranslations({ locale, namespace: 'services' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              {t('hero.title')}{' '}
              <span className="text-terracotta">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">{t('hero.subtitle')}</p>
            <a
              href={company.phoneLink}
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-light font-semibold"
            >
              <HiPhone className="w-5 h-5" />
              {company.phoneFormatted} - {tc('callForAssistance')}
            </a>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || FaWater;
              const colorClass = colorMap[service.color] || colorMap.water;
              const translationKey = serviceTranslationKeys[service.slug];

              // Get translated features
              const featuresKey = `${translationKey}.features`;
              const features = service.features.map((_, i) => {
                const featureKeys = [
                  'emergency',
                  'extraction',
                  'drying',
                  'monitoring',
                  'insurance',
                  'boardUp',
                  'smoke',
                  'structural',
                  'content',
                  'odor',
                  'removal',
                  'hepa',
                  'antimicrobial',
                  'source',
                  'prevention',
                  'thermal',
                  'moisture',
                  'airQuality',
                  'reports',
                  'ozone',
                  'fogging',
                  'airScrubbing',
                  'surface',
                  'hvac',
                  'biohazard',
                  'trauma',
                  'hazmat',
                  'disinfection',
                  'disposal',
                ];
                // Get the feature key based on index from the translation file
                const serviceFeatureMap: Record<string, string[]> = {
                  waterDamage: [
                    'emergency',
                    'extraction',
                    'drying',
                    'monitoring',
                    'insurance',
                  ],
                  fireRestoration: [
                    'boardUp',
                    'smoke',
                    'structural',
                    'content',
                    'odor',
                  ],
                  moldRestoration: [
                    'removal',
                    'hepa',
                    'antimicrobial',
                    'source',
                    'prevention',
                  ],
                  moistureInspection: [
                    'thermal',
                    'moisture',
                    'airQuality',
                    'reports',
                    'prevention',
                  ],
                  smokeOdor: [
                    'ozone',
                    'fogging',
                    'airScrubbing',
                    'surface',
                    'hvac',
                  ],
                  decontamination: [
                    'biohazard',
                    'trauma',
                    'hazmat',
                    'disinfection',
                    'disposal',
                  ],
                };
                const featureKey = serviceFeatureMap[translationKey]?.[i];
                return featureKey
                  ? ts(`${translationKey}.features.${featureKey}`)
                  : service.features[i];
              });

              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-2xl shadow-soft overflow-hidden"
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 rounded-xl ${colorClass} border flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h2 className="heading-2 mb-3">
                          {ts(`${translationKey}.name`)}
                        </h2>
                        <p className="text-charcoal/70 mb-6 text-lg">
                          {ts(`${translationKey}.description`)}
                        </p>

                        <div className="mb-6">
                          <h3 className="font-semibold mb-3">
                            {t('whatWeOffer')}
                          </h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-charcoal/70"
                              >
                                <span className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center text-terracotta hover:text-terracotta-dark font-semibold group"
                        >
                          {t('learnMoreAbout', {
                            service: ts(`${translationKey}.shortName`),
                          })}
                          <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <h2 className="heading-2 mb-4">{t('serviceAreas.title')}</h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            {t('serviceAreas.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/water-damage-restoration/broward-county"
              className="px-4 py-2 bg-cream rounded-full text-charcoal hover:bg-terracotta hover:text-white transition-colors"
            >
              Broward
            </Link>
            <Link
              href="/services/water-damage-restoration/palm-beach"
              className="px-4 py-2 bg-cream rounded-full text-charcoal hover:bg-terracotta hover:text-white transition-colors"
            >
              Palm Beach
            </Link>
            <Link
              href="/services/water-damage-restoration/west-palm-beach"
              className="px-4 py-2 bg-cream rounded-full text-charcoal hover:bg-terracotta hover:text-white transition-colors"
            >
              West Palm Beach
            </Link>
            <Link
              href="/services/water-damage-restoration/miami-dade-county"
              className="px-4 py-2 bg-cream rounded-full text-charcoal hover:bg-terracotta hover:text-white transition-colors"
            >
              Miami-Dade
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-terracotta text-white text-center">
        <div className="container-main">
          <h2 className="heading-2 mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={company.phoneLink}
              className="btn-secondary bg-white text-charcoal hover:bg-gray-100"
            >
              <HiPhone className="w-5 h-5 mr-2" />
              {company.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors duration-200"
            >
              {tc('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
