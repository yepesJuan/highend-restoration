import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiShieldCheck, HiUserGroup, HiClock, HiHeart } from 'react-icons/hi';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${company.name}, a family-owned restoration company serving South Florida for over ${company.yearsInBusiness} years.`,
};

const values = [
  {
    icon: HiHeart,
    title: 'Family Values',
    description:
      'As a family-owned business, we treat every customer like family. Your home is your sanctuary, and we respect that.',
  },
  {
    icon: HiClock,
    title: 'Rapid Response',
    description:
      'Disasters don\'t wait, and neither do we. Our 24/7 emergency team is always ready to help when you need us most.',
  },
  {
    icon: HiShieldCheck,
    title: 'Quality Workmanship',
    description:
      'We take pride in our work. Every job is completed to the highest standards, ensuring your property is fully restored.',
  },
  {
    icon: HiUserGroup,
    title: 'Community First',
    description:
      'We\'ve served South Florida families for 20 years. This community is our home, and we\'re committed to protecting it.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              A Family Business Built on <span className="text-terracotta">Trust</span>
            </h1>
            <p className="text-xl text-gray-300">
              For over {company.yearsInBusiness} years, HighEnd Restoration has been helping
              South Florida families recover from water damage, fire, mold, and other disasters.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-charcoal/80">
                <p>
                  HighEnd Restoration started with a simple mission: to help our neighbors
                  when disaster strikes. What began as a small family operation has grown
                  into one of South Florida&apos;s most trusted restoration companies.
                </p>
                <p>
                  Over the past {company.yearsInBusiness} years, we&apos;ve helped thousands of
                  families and businesses recover from water damage, fires, mold infestations,
                  and other emergencies. We understand that these situations are stressful,
                  and we&apos;re here to make the restoration process as smooth as possible.
                </p>
                <p>
                  Today, we continue to operate with the same family values that started it all:
                  honesty, hard work, and genuine care for our community. When you call HighEnd
                  Restoration, you&apos;re not just getting a contractor—you&apos;re getting a team that
                  truly cares about restoring your property and your peace of mind.
                </p>
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
                <p className="text-sm">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Values</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              These principles guide everything we do, from the first phone call to the final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-cream hover:bg-cream-dark transition-colors"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="heading-3 mb-2">{value.title}</h3>
                <p className="text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Proudly Serving South Florida</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              From Fort Lauderdale to West Palm Beach, we&apos;re here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="heading-3 mb-2">Broward County</h3>
              <p className="text-charcoal/70 text-sm">
                Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, and more
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="heading-3 mb-2">Palm Beach County</h3>
              <p className="text-charcoal/70 text-sm">
                Boca Raton, Delray Beach, Boynton Beach, Jupiter, and more
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="heading-3 mb-2">West Palm Beach</h3>
              <p className="text-charcoal/70 text-sm">
                West Palm Beach, Palm Beach Gardens, Royal Palm Beach, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white text-center">
        <div className="container-main">
          <h2 className="heading-2 mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether it&apos;s an emergency or you just have questions, we&apos;re here to help.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
