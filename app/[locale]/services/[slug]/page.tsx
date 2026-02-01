import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HiPhone, HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { services, getServiceBySlug } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';
import { company } from '@/lib/data/company';
import { getImagesForService } from '@/lib/data/images';
import ContactForm from '@/components/ui/ContactForm';
import ImageGallery from '@/components/ui/ImageGallery';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
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
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const service of services) {
      params.push({ locale, slug: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const ts = await getTranslations({ locale, namespace: 'services' });

  if (!service) {
    return { title: t('notFound.title') };
  }

  const translationKey = serviceTranslationKeys[slug];

  return {
    title: t('service.title', { service: ts(`${translationKey}.name`) }),
    description: t('service.description', {
      description: ts(`${translationKey}.description`),
      phone: company.phoneFormatted,
    }),
    alternates: {
      canonical: `https://www.highendrestoration.org/${locale}/services/${slug}`,
      languages: {
        en: `https://www.highendrestoration.org/en/services/${slug}`,
        es: `https://www.highendrestoration.org/es/services/${slug}`,
      },
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  const images = getImagesForService(slug);

  if (!service) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'servicePage' });
  const ts = await getTranslations({ locale, namespace: 'services' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  const translationKey = serviceTranslationKeys[slug];

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

  const serviceName = ts(`${translationKey}.name`);
  const shortName = ts(`${translationKey}.shortName`);

  // Schema data is safe - it only uses hardcoded company data and translated strings
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: ts(`${translationKey}.description`),
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      telephone: company.phone,
      email: company.email,
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area.name,
    })),
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors"
            >
              {tc('backToServices')}
            </Link>
            <h1 className="heading-1 mb-6">{serviceName}</h1>
            <p className="text-xl text-gray-300 mb-8">
              {ts(`${translationKey}.description`)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={company.phoneLink} className="btn-primary">
                <HiPhone className="w-5 h-5 mr-2" />
                {tc('callNow')} {company.phoneFormatted}
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors duration-200"
              >
                {tc('requestService')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">{t('whatWeOffer')}</h2>
              <p className="text-charcoal/70 mb-8">
                {t('whatWeOfferSubtitle', { service: shortName.toLowerCase() })}
              </p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <HiCheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="heading-3 mb-6">
                {t('whyChooseUs', { service: shortName })}
              </h3>
              <ul className="space-y-4 text-charcoal/70">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>{t('whyChooseUsItems.emergency')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>
                    {t('whyChooseUsItems.experience', {
                      years: company.yearsInBusiness,
                    })}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>{t('whyChooseUsItems.licensed')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>{t('whyChooseUsItems.family')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>{t('whyChooseUsItems.insurance')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              {t('process.title', { service: shortName })}
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

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

      {/* Project Gallery Section */}
      {images.length > 0 && (
        <section className="section-padding bg-cream-dark">
          <div className="container-main">
            <div className="text-center mb-8">
              <h2 className="heading-2 mb-4">
                {t('gallery.title', { service: shortName })}
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                {t('gallery.subtitle', { service: shortName.toLowerCase() })}
              </p>
            </div>
            <ImageGallery images={images} />
          </div>
        </section>
      )}

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-4">
              {t('serviceAreas.title', { service: serviceName })}
            </h2>
            <p className="text-lg text-charcoal/70">
              {t('serviceAreas.subtitle', { service: shortName.toLowerCase() })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/services/${service.slug}/${area.slug}`}
                className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow group"
              >
                <h3 className="heading-3 mb-2 group-hover:text-terracotta transition-colors">
                  {area.name}
                </h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  {area.cities.slice(0, 5).join(', ')}
                  {area.cities.length > 5 && ', and more'}
                </p>
                <span className="inline-flex items-center text-terracotta font-medium text-sm">
                  {tc('viewServiceArea')}
                  <HiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-main max-w-3xl">
            <h2 className="heading-2 mb-8 text-center">{t('faq.title')}</h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-cream rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {ts(`${translationKey}.faqs.q${index + 1}.question`)}
                  </h3>
                  <p className="text-charcoal/70">
                    {ts(`${translationKey}.faqs.q${index + 1}.answer`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="section-padding bg-cream" id="contact">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-4">
                {t('contact.title', { service: shortName })}
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">{t('contact.subtitle')}</p>
              <div className="space-y-4">
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
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="heading-3 mb-6">{tc('requestConsultation')}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema - safe content from hardcoded data and translations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
