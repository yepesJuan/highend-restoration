import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { HiPhone, HiMail, HiClock, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import ContactForm from '@/components/ui/ContactForm';
import { company } from '@/lib/data/company';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('contact.title'),
    description: t('contact.description', {
      company: company.name,
      phone: company.phoneFormatted,
    }),
    alternates: {
      canonical: `https://www.highendrestoration.org/${locale}/contact`,
      languages: {
        en: 'https://www.highendrestoration.org/en/contact',
        es: 'https://www.highendrestoration.org/es/contact',
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contactPage' });
  const tf = await getTranslations({ locale, namespace: 'contactSection' });

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
            <p className="text-xl text-gray-300">{t('hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-2 mb-6">{t('info.title')}</h2>
              <p className="text-charcoal/70 mb-8">{t('info.subtitle')}</p>

              <div className="space-y-6">
                <a
                  href={company.phoneLink}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg group-hover:text-terracotta transition-colors">
                      {company.phoneFormatted}
                    </p>
                    <p className="text-charcoal/60 text-sm">
                      {t('info.phoneSubtitle')}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg group-hover:text-terracotta transition-colors">
                      {company.email}
                    </p>
                    <p className="text-charcoal/60 text-sm">
                      {t('info.emailSubtitle')}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      {t('info.emergencyService')}
                    </p>
                    <p className="text-charcoal/60 text-sm">
                      {t('info.emergencySubtitle')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-water rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      {t('info.serviceAreasTitle')}
                    </p>
                    <p className="text-charcoal/60 text-sm">
                      {t('info.serviceAreasSubtitle')}
                    </p>
                  </div>
                </div>

                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaInstagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg group-hover:text-terracotta transition-colors">
                      @{company.instagram}
                    </p>
                    <p className="text-charcoal/60 text-sm">
                      {t('info.instagramSubtitle')}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-soft h-fit">
              <h2 className="heading-3 mb-6">{tf('formTitle')}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-terracotta text-white text-center">
        <div className="container-main">
          <p className="text-lg mb-2">{t('emergency.title')}</p>
          <a
            href={company.phoneLink}
            className="text-3xl md:text-4xl font-bold hover:underline"
          >
            {t('emergency.callNow', { phone: company.phoneFormatted })}
          </a>
        </div>
      </section>
    </>
  );
}
