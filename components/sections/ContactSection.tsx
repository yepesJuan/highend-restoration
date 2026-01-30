import { HiPhone, HiMail, HiClock } from 'react-icons/hi';
import ContactForm from '@/components/ui/ContactForm';
import { company } from '@/lib/data/company';

export default function ContactSection() {
  return (
    <section className="section-padding bg-cream-dark" id="contact">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div>
            <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Contact us now for a free consultation. We respond to all
              inquiries within 1 hour during business hours, and immediately for
              emergencies.
            </p>

            <div className="space-y-6 mb-8">
              <a
                href={company.phoneLink}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">Call us anytime</p>
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
                  <p className="text-sm text-charcoal/60">Email us</p>
                  <p className="font-semibold">{company.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center">
                  <HiClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">Availability</p>
                  <p className="font-semibold">{company.hours.display}</p>
                </div>
              </div>
            </div>

            <p className="text-charcoal/60 text-sm">
              Serving Broward County, Palm Beach, and West Palm Beach
            </p>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="heading-3 mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
