import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.highendrestoration.org';
  const locales = routing.locales;

  // Generate URLs for each locale
  const generateLocalizedUrls = (
    path: string,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: number
  ) => {
    return locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${path}`])
        ),
      },
    }));
  };

  // Core pages
  const corePages = [
    ...generateLocalizedUrls('', 'weekly', 1),
    ...generateLocalizedUrls('/about', 'monthly', 0.8),
    ...generateLocalizedUrls('/contact', 'monthly', 0.9),
    ...generateLocalizedUrls('/services', 'weekly', 0.9),
  ];

  // Service pages
  const servicePages = services.flatMap((service) =>
    generateLocalizedUrls(`/services/${service.slug}`, 'weekly', 0.8)
  );

  // Local SEO pages (service + area combinations)
  const localPages = services.flatMap((service) =>
    serviceAreas.flatMap((area) =>
      generateLocalizedUrls(
        `/services/${service.slug}/${area.slug}`,
        'monthly',
        0.7
      )
    )
  );

  return [...corePages, ...servicePages, ...localPages];
}
