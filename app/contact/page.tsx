import type { Metadata } from 'next';
import { HiPhone, HiMail, HiClock, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import ContactForm from '@/components/ui/ContactForm';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${company.name} for 24/7 emergency restoration services in South Florida. Call ${company.phoneFormatted} or send us a message.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Get in <span className="text-terracotta">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Need emergency restoration services? Have questions? We&apos;re here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-2 mb-6">Contact Information</h2>
              <p className="text-charcoal/70 mb-8">
                We respond to all inquiries promptly. For emergencies, call us
                directly for the fastest response.
              </p>

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
                      Call us anytime, day or night
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
                      We respond within 1 hour during business hours
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">24/7 Emergency Service</p>
                    <p className="text-charcoal/60 text-sm">
                      We&apos;re always available for emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-water rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Service Areas</p>
                    <p className="text-charcoal/60 text-sm">
                      Broward County, Palm Beach County, West Palm Beach
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
                      Follow us for project updates
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-soft h-fit">
              <h2 className="heading-3 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-terracotta text-white text-center">
        <div className="container-main">
          <p className="text-lg mb-2">Have an emergency?</p>
          <a
            href={company.phoneLink}
            className="text-3xl md:text-4xl font-bold hover:underline"
          >
            Call {company.phoneFormatted} Now
          </a>
        </div>
      </section>
    </>
  );
}
