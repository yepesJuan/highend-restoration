'use client';

import { useTranslations } from 'next-intl';
import { HiClock, HiShieldCheck, HiUserGroup, HiBadgeCheck } from 'react-icons/hi';

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const trustItems = [
    {
      icon: HiClock,
      titleKey: 'emergency',
    },
    {
      icon: HiBadgeCheck,
      titleKey: 'experience',
    },
    {
      icon: HiUserGroup,
      titleKey: 'familyOwned',
    },
    {
      icon: HiShieldCheck,
      titleKey: 'licensed',
    },
  ];

  return (
    <section className="bg-cream-dark border-y border-charcoal/5">
      <div className="container-main py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.titleKey} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="font-semibold text-charcoal">
                  {t(`${item.titleKey}.title`)}
                </p>
                <p className="text-sm text-charcoal/60">
                  {t(`${item.titleKey}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
