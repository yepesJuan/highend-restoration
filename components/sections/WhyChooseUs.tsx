import { HiLightningBolt, HiUserGroup, HiCog, HiHeart } from 'react-icons/hi';

const reasons = [
  {
    icon: HiLightningBolt,
    title: 'Fast Response Times',
    description:
      'We understand emergencies can\'t wait. Our team responds quickly to minimize damage and start the restoration process immediately.',
  },
  {
    icon: HiUserGroup,
    title: 'Experienced Technicians',
    description:
      'With 16 years in the industry, our skilled technicians have the expertise to handle any restoration challenge.',
  },
  {
    icon: HiCog,
    title: 'Advanced Equipment',
    description:
      'We use industrial-grade equipment and the latest techniques to ensure thorough, effective restoration.',
  },
  {
    icon: HiHeart,
    title: 'We Treat You Like Family',
    description:
      'As a family-owned business, we understand how stressful property damage can be. We\'re here to help every step of the way.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Why Choose HighEnd Restoration</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            When disaster strikes, you need a restoration company you can trust.
            Here&apos;s why South Florida families choose us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 p-6 rounded-2xl bg-cream hover:bg-cream-dark transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center">
                <reason.icon className="w-7 h-7 text-terracotta" />
              </div>
              <div>
                <h3 className="heading-3 mb-2">{reason.title}</h3>
                <p className="text-charcoal/70">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
