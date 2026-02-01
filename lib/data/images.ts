export interface ServiceImage {
  src: string;
  alt: string;
}

export const serviceImages: Record<string, ServiceImage[]> = {
  'water-damage-restoration': [
    { src: '/images/water-damage/waterdamage.webp', alt: 'Water damage restoration project' },
    { src: '/images/water-damage/waterdamage2.webp', alt: 'Water damage restoration work' },
  ],
  'fire-restoration': [
    { src: '/images/fire-restoration/firerestoration.webp', alt: 'Fire restoration project' },
    { src: '/images/fire-restoration/firerestoration2.webp', alt: 'Fire damage restoration work' },
    { src: '/images/fire-restoration/firerestoration3.webp', alt: 'Fire restoration in progress' },
    { src: '/images/fire-restoration/firerestoration4.webp', alt: 'Completed fire restoration' },
  ],
  'mold-restoration': [
    { src: '/images/mold-restoration/moldrestoration.webp', alt: 'Mold restoration project' },
    { src: '/images/mold-restoration/moldrestoration2.webp', alt: 'Mold remediation work' },
    { src: '/images/mold-restoration/moldrestoration3.webp', alt: 'Mold removal in progress' },
  ],
  'moisture-mold-inspection': [
    { src: '/images/moisture-inspection/moisturemold.webp', alt: 'Moisture and mold inspection' },
    { src: '/images/moisture-inspection/moisturemold2.webp', alt: 'Moisture detection equipment' },
    { src: '/images/moisture-inspection/moisturemold3.webp', alt: 'Mold inspection process' },
  ],
  'smoke-odor-removal': [
    { src: '/images/smoke-odor/smokeoder.webp', alt: 'Smoke and odor removal project' },
    { src: '/images/smoke-odor/smokeodor2.webp', alt: 'Odor removal treatment' },
  ],
  'decontamination': [
    { src: '/images/decontamination/decontamination.webp', alt: 'Decontamination project' },
    { src: '/images/decontamination/decontamination2.webp', alt: 'Biohazard cleanup' },
    { src: '/images/decontamination/decontamination3.webp', alt: 'Decontamination in progress' },
  ],
};

export function getImagesForService(slug: string): ServiceImage[] {
  return serviceImages[slug] || [];
}
