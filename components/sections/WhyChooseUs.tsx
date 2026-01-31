'use client';

import { useTranslations } from 'next-intl';
import { HiLightningBolt, HiUserGroup, HiCog, HiHeart } from 'react-icons/hi';

export default function WhyChooseUs() {
  const t = useTranslations('whyChooseUs');

  const reasons = [
    {
      icon: HiLightningBolt,
      key: 'fastResponse',
    },
    {
      icon: HiUserGroup,
      key: 'experienced',
    },
    {
      icon: HiCog,
      key: 'equipment',
    },
    {
      icon: HiHeart,
      key: 'family',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">{t('title')}</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.key}
              className="flex gap-5 p-6 rounded-2xl bg-cream hover:bg-cream-dark transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center">
                <reason.icon className="w-7 h-7 text-terracotta" />
              </div>
              <div>
                <h3 className="heading-3 mb-2">{t(`${reason.key}.title`)}</h3>
                <p className="text-charcoal/70">{t(`${reason.key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
