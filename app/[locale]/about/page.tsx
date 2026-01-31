import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HiShieldCheck, HiUserGroup, HiClock, HiHeart } from 'react-icons/hi';
import { company } from '@/lib/data/company';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('about.title'),
    description: t('about.description', {
      company: company.name,
      years: company.yearsInBusiness,
    }),
    alternates: {
      canonical: `https://www.highendrestoration.org/${locale}/about`,
      languages: {
        en: 'https://www.highendrestoration.org/en/about',
        es: 'https://www.highendrestoration.org/es/about',
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });
  const tc = await getTranslations({ locale, namespace: 'common' });

  const values = [
    {
      icon: HiHeart,
      titleKey: 'familyValues',
    },
    {
      icon: HiClock,
      titleKey: 'rapidResponse',
    },
    {
      icon: HiShieldCheck,
      titleKey: 'quality',
    },
    {
      icon: HiUserGroup,
      titleKey: 'community',
    },
  ];

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
            <p className="text-xl text-gray-300">
              {t('hero.subtitle', { years: company.yearsInBusiness })}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">{t('story.title')}</h2>
              <div className="space-y-4 text-charcoal/80">
                <p>{t('story.p1')}</p>
                <p>{t('story.p2', { years: company.yearsInBusiness })}</p>
                <p>{t('story.p3')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-terracotta/20 to-sage/20 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt={company.name}
                  width={300}
                  height={300}
                  className="w-2/3"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-terracotta text-white p-6 rounded-2xl shadow-soft-lg">
                <p className="text-4xl font-bold">{company.yearsInBusiness}+</p>
                <p className="text-sm">{t('story.yearsOfService')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">{t('values.title')}</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.titleKey}
                className="p-6 rounded-2xl bg-cream hover:bg-cream-dark transition-colors"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="heading-3 mb-2">
                  {t(`values.${value.titleKey}.title`)}
                </h3>
                <p className="text-charcoal/70">
                  {t(`values.${value.titleKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">{t('serviceAreas.title')}</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              {t('serviceAreas.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="heading-3 mb-2">{t('serviceAreas.broward.title')}</h3>
              <p className="text-charcoal/70 text-sm">
                {t('serviceAreas.broward.cities')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="heading-3 mb-2">
                {t('serviceAreas.palmBeach.title')}
              </h3>
              <p className="text-charcoal/70 text-sm">
                {t('serviceAreas.palmBeach.cities')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="heading-3 mb-2">
                {t('serviceAreas.westPalm.title')}
              </h3>
              <p className="text-charcoal/70 text-sm">
                {t('serviceAreas.westPalm.cities')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white text-center">
        <div className="container-main">
          <h2 className="heading-2 mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link href="/contact" className="btn-primary">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}
