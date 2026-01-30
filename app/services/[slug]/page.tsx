import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HiPhone, HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { services, getServiceBySlug } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';
import { company } from '@/lib/data/company';
import { getImagesForService } from '@/lib/data/images';
import ContactForm from '@/components/ui/ContactForm';
import ImageGallery from '@/components/ui/ImageGallery';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} | South Florida`,
    description: `${service.description} Serving Broward County, Palm Beach, and West Palm Beach. Call ${company.phoneFormatted} for 24/7 emergency service.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const images = getImagesForService(slug);

  if (!service) {
    notFound();
  }

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
              ← Back to Services
            </Link>
            <h1 className="heading-1 mb-6">{service.name}</h1>
            <p className="text-xl text-gray-300 mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={company.phoneLink} className="btn-primary">
                <HiPhone className="w-5 h-5 mr-2" />
                Call {company.phoneFormatted}
              </a>
              <Link
                href="#contact"
                className="btn-secondary bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                Request Service
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
              <h2 className="heading-2 mb-6">What We Offer</h2>
              <p className="text-charcoal/70 mb-8">
                Our {service.shortName.toLowerCase()} services are comprehensive
                and tailored to your specific situation. Here&apos;s what you can
                expect when you work with us:
              </p>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <HiCheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="heading-3 mb-6">Why Choose Us for {service.shortName}?</h3>
              <ul className="space-y-4 text-charcoal/70">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>24/7 emergency response—we&apos;re always available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>{company.yearsInBusiness} years of experience in restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>Licensed, insured, and certified technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>Family-owned with a commitment to quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2" />
                  <span>Insurance claim assistance available</span>
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
            <h2 className="heading-2 mb-4">Our {service.shortName} Process</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              We follow a proven process to ensure your property is fully
              restored with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="relative p-6 bg-cream rounded-2xl"
              >
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

      {/* Project Gallery Section */}
      {images.length > 0 && (
        <section className="section-padding bg-cream-dark">
          <div className="container-main">
            <div className="text-center mb-8">
              <h2 className="heading-2 mb-4">Our {service.shortName} Work</h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                See examples of our {service.shortName.toLowerCase()} projects throughout South Florida.
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
              {service.name} Service Areas
            </h2>
            <p className="text-lg text-charcoal/70">
              We provide {service.shortName.toLowerCase()} services throughout South Florida
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
                  View service area
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
            <h2 className="heading-2 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-cream rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-charcoal/70">{faq.answer}</p>
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
                Need {service.shortName} Services?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Contact us now for a free consultation. We respond to all
                inquiries promptly, and we&apos;re available 24/7 for emergencies.
              </p>
              <div className="space-y-4">
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
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="heading-3 mb-6">Request a Consultation</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.description,
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
          }),
        }}
      />
    </>
  );
}
