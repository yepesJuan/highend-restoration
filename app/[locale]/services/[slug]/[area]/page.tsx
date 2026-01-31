import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HiPhone, HiCheckCircle, HiLocationMarker } from 'react-icons/hi';
import { services, getServiceBySlug } from '@/lib/data/services';
import { serviceAreas, getAreaBySlug } from '@/lib/data/areas';
import { company } from '@/lib/data/company';
import ContactForm from '@/components/ui/ContactForm';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string; slug: string; area: string }>;
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

export async function generateStaticParams() {
  const params: { locale: string; slug: string; area: string }[] = [];

  for (const locale of routing.locales) {
    services.forEach((service) => {
      serviceAreas.forEach((area) => {
        params.push({
          locale,
          slug: service.slug,
          area: area.slug,
        });
      });
    });
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, area } = await params;
  const service = getServiceBySlug(slug);
  const serviceArea = getAreaBySlug(area);
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const ts = await getTranslations({ locale, namespace: 'services' });

  if (!service || !serviceArea) {
    return { title: t('notFound.title') };
  }

  const translationKey = serviceTranslationKeys[slug];

  return {
    title: t('localService.title', {
      service: ts(`${translationKey}.name`),
      area: serviceArea.name,
    }),
    description: t('localService.description', {
      service: ts(`${translationKey}.name`).toLowerCase(),
      area: serviceArea.name,
      years: company.yearsInBusiness,
      phone: company.phoneFormatted,
    }),
    alternates: {
      canonical: `https://www.highendrestoration.org/${locale}/services/${slug}/${area}`,
      languages: {
        en: `https://www.highendrestoration.org/en/services/${slug}/${area}`,
        es: `https://www.highendrestoration.org/es/services/${slug}/${area}`,
      },
    },
  };
}

export default async function LocalServicePage({ params }: Props) {
  const { locale, slug, area } = await params;
  const service = getServiceBySlug(slug);
  const serviceArea = getAreaBySlug(area);

  if (!service || !serviceArea) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'localServicePage' });
  const ts = await getTranslations({ locale, namespace: 'services' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  const translationKey = serviceTranslationKeys[slug];
  const serviceName = ts(`${translationKey}.name`);
  const shortName = ts(`${translationKey}.shortName`);

  // Get translated features
  const serviceFeatureMap: Record<string, string[]> = {
    waterDamage: ['emergency', 'extraction', 'drying', 'monitoring', 'insurance'],
    fireRestoration: ['boardUp', 'smoke', 'structural', 'content', 'odor'],
    moldRestoration: ['removal', 'hepa', 'antimicrobial', 'source', 'prevention'],
    moistureInspection: [
      'thermal',
      'moisture',
      'airQuality',
      'reports',
      'prevention',
    ],
    smokeOdor: ['ozone', 'fogging', 'airScrubbing', 'surface', 'hvac'],
    decontamination: ['biohazard', 'trauma', 'hazmat', 'disinfection', 'disposal'],
  };

  const features =
    serviceFeatureMap[translationKey]?.map((key) =>
      ts(`${translationKey}.features.${key}`)
    ) || service.features;

  // Schema data is safe - it only uses hardcoded company data and translated strings
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${company.name} - ${serviceArea.name}`,
    description: `${serviceName} services in ${serviceArea.name}. ${ts(`${translationKey}.description`)}`,
    telephone: company.phone,
    email: company.email,
    url: `https://www.highendrestoration.org/services/${service.slug}/${serviceArea.slug}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: serviceArea.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceName,
      itemListElement: features.map((feature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
      })),
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <Link href="/services" className="hover:text-white transition-colors">
                {t('breadcrumb.services')}
              </Link>
              <span>/</span>
              <Link
                href={`/services/${service.slug}`}
                className="hover:text-white transition-colors"
              >
                {shortName}
              </Link>
              <span>/</span>
              <span className="text-white">{serviceArea.shortName}</span>
            </div>
            <h1 className="heading-1 mb-6">
              {t('hero.title', { service: serviceName })}{' '}
              <span className="text-terracotta">{serviceArea.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {ts(`${translationKey}.description`)}
            </p>
            <p className="text-gray-400 mb-8 flex items-center gap-2">
              <HiLocationMarker className="w-5 h-5 text-terracotta" />
              {t('hero.servingAreas', {
                cities: serviceArea.cities.slice(0, 4).join(', '),
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={company.phoneLink} className="btn-primary">
                <HiPhone className="w-5 h-5 mr-2" />
                {tc('callNow')} {company.phoneFormatted}
              </a>
              <Link
                href="#contact"
                className="btn-secondary bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                {tc('getFreeEstimate')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Info */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">
                {t('content.title', {
                  service: shortName,
                  area: serviceArea.shortName,
                })}
              </h2>
              <div className="prose prose-lg text-charcoal/80">
                <p>
                  {t('content.p1', {
                    service: shortName.toLowerCase(),
                    fullArea: serviceArea.name,
                    area: serviceArea.shortName,
                    years: company.yearsInBusiness,
                  })}
                </p>
                <p>
                  {t('content.p2', {
                    fullArea: serviceArea.name,
                    service: shortName.toLowerCase(),
                  })}
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">
                  {t('content.servicesInclude', { service: shortName })}
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-sage flex-shrink-0" />
                      <span className="text-charcoal/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="heading-3 mb-4">
                  {t('citiesWeServe', { area: serviceArea.name })}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceArea.cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-cream rounded-full text-sm text-charcoal/70"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-terracotta text-white rounded-2xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  {t('emergencyService.title')}
                </h3>
                <p className="opacity-90 mb-4">
                  {t('emergencyService.subtitle', {
                    service: shortName.toLowerCase(),
                    area: serviceArea.shortName,
                  })}
                </p>
                <a
                  href={company.phoneLink}
                  className="inline-flex items-center gap-2 bg-white text-charcoal px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  <HiPhone className="w-5 h-5" />
                  {company.phoneFormatted}
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="heading-3 mb-4">{t('whyChooseUs.title')}</h3>
                <ul className="space-y-3 text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                    <span>
                      {t('whyChooseUs.local', { area: serviceArea.shortName })}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                    <span>
                      {t('whyChooseUs.experience', {
                        years: company.yearsInBusiness,
                      })}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                    <span>{t('whyChooseUs.licensed')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                    <span>{t('whyChooseUs.family')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 mb-8 text-center">
            {t('process.title', { service: shortName })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="relative p-6 bg-cream rounded-2xl">
                <div className="w-10 h-10 bg-terracotta text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {ts(`${translationKey}.process.step${step.step}.title`)}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {ts(`${translationKey}.process.step${step.step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="section-padding bg-cream-dark">
        <div className="container-main">
          <h2 className="heading-2 mb-8 text-center">{t('otherAreas.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceAreas
              .filter((a) => a.slug !== serviceArea.slug)
              .map((otherArea) => (
                <Link
                  key={otherArea.slug}
                  href={`/services/${service.slug}/${otherArea.slug}`}
                  className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow text-center group"
                >
                  <h3 className="heading-3 group-hover:text-terracotta transition-colors">
                    {t('otherAreas.serviceIn', {
                      service: shortName,
                      area: otherArea.shortName,
                    })}
                  </h3>
                  <p className="text-charcoal/60 text-sm mt-2">
                    {otherArea.cities.slice(0, 3).join(', ')}...
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream" id="contact">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-4">
                {t('contact.title', {
                  service: shortName,
                  area: serviceArea.shortName,
                })}
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">{t('contact.subtitle')}</p>
              <a
                href={company.phoneLink}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">
                    {t('contact.emergencyLine')}
                  </p>
                  <p className="font-semibold text-lg">{company.phoneFormatted}</p>
                </div>
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="heading-3 mb-6">{tc('requestFreeEstimate')}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for Local Business + Service - safe content from hardcoded data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
