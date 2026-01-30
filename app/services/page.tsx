import type { Metadata } from 'next';
import Link from 'next/link';
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

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional restoration services including water damage, fire restoration, mold remediation, and more. 24/7 emergency service in South Florida.',
};

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Our <span className="text-terracotta">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From water damage to fire restoration, mold remediation to
              decontamination—we have the expertise to handle any restoration
              challenge. Available 24/7 for emergencies.
            </p>
            <a
              href={company.phoneLink}
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-light font-semibold"
            >
              <HiPhone className="w-5 h-5" />
              {company.phoneFormatted} - Call for Immediate Assistance
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
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.slug}
                  className={`bg-white rounded-2xl shadow-soft overflow-hidden ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 rounded-xl ${colorClass} border flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h2 className="heading-2 mb-3">{service.name}</h2>
                        <p className="text-charcoal/70 mb-6 text-lg">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h3 className="font-semibold mb-3">What we offer:</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
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
                          Learn more about {service.shortName}
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
          <h2 className="heading-2 mb-4">Serving All of South Florida</h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            We provide restoration services throughout Broward County, Palm Beach
            County, and West Palm Beach. No matter where you are, help is just a
            call away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-cream rounded-full text-charcoal">
              Broward County
            </span>
            <span className="px-4 py-2 bg-cream rounded-full text-charcoal">
              Palm Beach County
            </span>
            <span className="px-4 py-2 bg-cream rounded-full text-charcoal">
              West Palm Beach
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-terracotta text-white text-center">
        <div className="container-main">
          <h2 className="heading-2 mb-4">Need Restoration Services?</h2>
          <p className="text-xl mb-8 opacity-90">
            We&apos;re available 24/7 for emergencies. Get help now.
          </p>
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
              className="btn-secondary border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
