import { HiClock, HiShieldCheck, HiUserGroup, HiBadgeCheck } from 'react-icons/hi';

const trustItems = [
  {
    icon: HiClock,
    title: '24/7 Emergency',
    description: 'Always available',
  },
  {
    icon: HiBadgeCheck,
    title: '20 Years',
    description: 'Experience',
  },
  {
    icon: HiUserGroup,
    title: 'Family Owned',
    description: '& Operated',
  },
  {
    icon: HiShieldCheck,
    title: 'Licensed',
    description: '& Insured',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-dark border-y border-charcoal/5">
      <div className="container-main py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="font-semibold text-charcoal">{item.title}</p>
                <p className="text-sm text-charcoal/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
