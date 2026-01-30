'use client';

import { useState } from 'react';
import { hubspot } from '@/lib/data/company';

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${hubspot.portalId}/${hubspot.formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.firstname },
              { name: 'lastname', value: formData.lastname },
              { name: 'email', value: formData.email },
              { name: 'phone', value: formData.phone },
              { name: 'message', value: formData.message },
            ],
            context: {
              pageUri: typeof window !== 'undefined' ? window.location.href : '',
              pageName: typeof document !== 'undefined' ? document.title : '',
            },
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-sage"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h4 className="heading-3 mb-2">Thank You!</h4>
        <p className="text-charcoal/70">
          We&apos;ve received your message and will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-charcoal mb-1"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            value={formData.firstname}
            onChange={(e) =>
              setFormData({ ...formData, firstname: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-charcoal mb-1"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            value={formData.lastname}
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-charcoal mb-1"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-1"
        >
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors resize-none"
          placeholder="Tell us about your situation..."
        />
      </div>

      {status === 'error' && (
        <p className="text-fire text-sm">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-charcoal/50 text-center">
        We typically respond within 1 hour
      </p>
    </form>
  );
}
