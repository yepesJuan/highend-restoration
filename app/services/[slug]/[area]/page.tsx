import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HiPhone, HiCheckCircle, HiLocationMarker } from 'react-icons/hi';
import { services, getServiceBySlug } from '@/lib/data/services';
import { serviceAreas, getAreaBySlug } from '@/lib/data/areas';
import { company } from '@/lib/data/company';
import ContactForm from '@/components/ui/ContactForm';

interface Props {
  params: Promise<{ slug: string; area: string }>;
}

export async function generateStaticParams() {
  const paths: { slug: string; area: string }[] = [];

  services.forEach((service) => {
    serviceAreas.forEach((area) => {
      paths.push({
        slug: service.slug,
        area: area.slug,
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, area } = await params;
  const service = getServiceBySlug(slug);
  const serviceArea = getAreaBySlug(area);

  if (!service || !serviceArea) {
    return { title: 'Page Not Found' };
  }

  return {
    title: `${service.name} in ${serviceArea.name}`,
    description: `Professional ${service.name.toLowerCase()} services in ${serviceArea.name}, Florida. ${company.yearsInBusiness} years experience. 24/7 emergency service. Call ${company.phoneFormatted}.`,
  };
}

export default async function LocalServicePage({ params }: Props) {
  const { slug, area } = await params;
  const service = getServiceBySlug(slug);
  const serviceArea = getAreaBySlug(area);

  if (!service || !serviceArea) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <Link
                href={`/services/${service.slug}`}
                className="hover:text-white transition-colors"
              >
                {service.shortName}
              </Link>
              <span>/</span>
              <span className="text-white">{serviceArea.shortName}</span>
            </div>
            <h1 className="heading-1 mb-6">
              {service.name} in{' '}
              <span className="text-terracotta">{serviceArea.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">{service.description}</p>
            <p className="text-gray-400 mb-8 flex items-center gap-2">
              <HiLocationMarker className="w-5 h-5 text-terracotta" />
              Serving {serviceArea.cities.slice(0, 4).join(', ')}, and surrounding areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={company.phoneLink} className="btn-primary">
                <HiPhone className="w-5 h-5 mr-2" />
                Call {company.phoneFormatted}
              </a>
              <Link
                href="#contact"
                className="btn-secondary bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                Get Free Estimate
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
                Trusted {service.shortName} Services in {serviceArea.shortName}
              </h2>
              <div className="prose prose-lg text-charcoal/80">
                <p>
                  When {service.shortName.toLowerCase()} emergencies strike in{' '}
                  {serviceArea.name}, you need a restoration company you can trust.
                  HighEnd Restoration has been serving {serviceArea.shortName} families
                  for over {company.yearsInBusiness} years, providing fast, professional
                  restoration services when you need them most.
                </p>
                <p>
                  As a local, family-owned business, we understand the unique challenges
                  that {serviceArea.name} properties face. From Florida&apos;s humid climate
                  to seasonal storms, we have the experience and equipment to handle any
                  {' '}{service.shortName.toLowerCase()} situation.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">
                  Our {service.shortName} Services Include:
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
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
                  Cities We Serve in {serviceArea.name}
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
                <h3 className="font-semibold text-xl mb-2">24/7 Emergency Service</h3>
                <p className="opacity-90 mb-4">
                  We respond to {service.shortName.toLowerCase()} emergencies in{' '}
                  {serviceArea.shortName} around the clock.
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
                <h3 className="heading-3 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                    <span>Local to {serviceArea.shortName}—fast response times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                    <span>{company.yearsInBusiness}+ years serving South Florida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                    <span>Licensed, insured, and certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                    <span>Family-owned, customer-focused</span>
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
            Our {service.shortName} Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="relative p-6 bg-cream rounded-2xl">
                <div className="w-10 h-10 bg-terracotta text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-charcoal/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="section-padding bg-cream-dark">
        <div className="container-main">
          <h2 className="heading-2 mb-8 text-center">
            Also Serving Nearby Areas
          </h2>
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
                    {service.shortName} in {otherArea.shortName}
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
                Get {service.shortName} Help in {serviceArea.shortName}
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Contact us now for a free estimate. We&apos;re available 24/7 for
                emergencies and typically respond within 1 hour.
              </p>
              <a
                href={company.phoneLink}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">24/7 Emergency Line</p>
                  <p className="font-semibold text-lg">{company.phoneFormatted}</p>
                </div>
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="heading-3 mb-6">Request a Free Estimate</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for Local Business + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `${company.name} - ${serviceArea.name}`,
            description: `${service.name} services in ${serviceArea.name}. ${service.description}`,
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
              name: service.name,
              itemListElement: service.features.map((feature) => ({
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
          }),
        }}
      />
    </>
  );
}
