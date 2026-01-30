import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ContactSection from '@/components/sections/ContactSection';
import { company } from '@/lib/data/company';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <ContactSection />

      {/* JSON-LD Schema for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.highendrestoration.org',
            name: company.name,
            description: company.description,
            telephone: company.phone,
            email: company.email,
            url: 'https://www.highendrestoration.org',
            areaServed: [
              {
                '@type': 'City',
                name: 'Fort Lauderdale',
                containedInPlace: { '@type': 'State', name: 'Florida' },
              },
              {
                '@type': 'City',
                name: 'West Palm Beach',
                containedInPlace: { '@type': 'State', name: 'Florida' },
              },
              {
                '@type': 'AdministrativeArea',
                name: 'Broward County',
                containedInPlace: { '@type': 'State', name: 'Florida' },
              },
              {
                '@type': 'AdministrativeArea',
                name: 'Palm Beach County',
                containedInPlace: { '@type': 'State', name: 'Florida' },
              },
            ],
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
            priceRange: '$$',
            image: 'https://www.highendrestoration.org/logo.png',
            sameAs: [company.instagramUrl],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Restoration Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Water Damage Restoration',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Fire Restoration',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Mold Remediation',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
