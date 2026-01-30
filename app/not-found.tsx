import Link from 'next/link';
import { HiHome, HiPhone } from 'react-icons/hi';
import { company } from '@/lib/data/company';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-cream">
      <div className="container-main text-center py-20">
        <h1 className="text-8xl font-bold text-terracotta mb-4">404</h1>
        <h2 className="heading-2 mb-4">Page Not Found</h2>
        <p className="text-lg text-charcoal/70 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
          moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <HiHome className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <a href={company.phoneLink} className="btn-secondary">
            <HiPhone className="w-5 h-5 mr-2" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
