'use client';

import { HiPhone } from 'react-icons/hi';
import { company } from '@/lib/data/company';

export default function FloatingCallButton() {
  return (
    <a
      href={company.phoneLink}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-16 h-16 bg-terracotta text-white rounded-full shadow-soft-lg pulse-ring"
      aria-label={`Call ${company.phoneFormatted}`}
    >
      <HiPhone className="w-7 h-7" />
    </a>
  );
}
