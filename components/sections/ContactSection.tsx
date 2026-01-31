'use client';

import { useTranslations } from 'next-intl';
import { HiPhone, HiMail, HiClock } from 'react-icons/hi';
import ContactForm from '@/components/ui/ContactForm';
import { company } from '@/lib/data/company';

export default function ContactSection() {
  const t = useTranslations('contactSection');

  return (
    <section className="section-padding bg-cream-dark" id="contact">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div>
            <h2 className="heading-2 mb-4">{t('title')}</h2>
            <p className="text-lg text-charcoal/70 mb-8">{t('subtitle')}</p>

            <div className="space-y-6 mb-8">
              <a
                href={company.phoneLink}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">{t('callUsAnytime')}</p>
                  <p className="font-semibold text-lg">{company.phoneFormatted}</p>
                </div>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center">
                  <HiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">{t('emailUs')}</p>
                  <p className="font-semibold">{company.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center">
                  <HiClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">{t('availability')}</p>
                  <p className="font-semibold">{company.hours.display}</p>
                </div>
              </div>
            </div>

            <p className="text-charcoal/60 text-sm">{t('servingAreas')}</p>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="heading-3 mb-6">{t('formTitle')}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
