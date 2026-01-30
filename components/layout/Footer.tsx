import Link from 'next/link';
import Image from 'next/image';
import { HiPhone, HiMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { company } from '@/lib/data/company';
import { services } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt={company.name}
              width={140}
              height={52}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6">{company.description}</p>
            <div className="flex items-center gap-4">
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-terracotta transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <span className="text-gray-300">{area.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href={company.phoneLink}
                className="flex items-center gap-3 text-gray-300 hover:text-terracotta transition-colors"
              >
                <HiPhone className="w-5 h-5 text-terracotta" />
                {company.phoneFormatted}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-terracotta transition-colors"
              >
                <HiMail className="w-5 h-5 text-terracotta" />
                {company.email}
              </a>
              <p className="text-terracotta font-semibold">
                {company.hours.display}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
