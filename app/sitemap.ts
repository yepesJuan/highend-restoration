import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.highendrestoration.org';

  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Local SEO pages (service + area combinations)
  const localPages = services.flatMap((service) =>
    serviceAreas.map((area) => ({
      url: `${baseUrl}/services/${service.slug}/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...corePages, ...servicePages, ...localPages];
}
