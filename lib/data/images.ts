export interface ServiceImage {
  src: string;
  alt: string;
}

export const serviceImages: Record<string, ServiceImage[]> = {
  'water-damage-restoration': [
    { src: '/images/water-damage/waterdamage.JPG', alt: 'Water damage restoration project' },
    { src: '/images/water-damage/waterdamage2.JPG', alt: 'Water damage restoration work' },
  ],
  'fire-restoration': [
    { src: '/images/fire-restoration/firerestoration.JPG', alt: 'Fire restoration project' },
    { src: '/images/fire-restoration/firerestoration2.JPG', alt: 'Fire damage restoration work' },
    { src: '/images/fire-restoration/firerestoration3.JPG', alt: 'Fire restoration in progress' },
    { src: '/images/fire-restoration/firerestoration4.JPG', alt: 'Completed fire restoration' },
  ],
  'mold-restoration': [
    { src: '/images/mold-restoration/moldrestoration.JPG', alt: 'Mold restoration project' },
    { src: '/images/mold-restoration/moldrestoration2.JPG', alt: 'Mold remediation work' },
    { src: '/images/mold-restoration/moldrestoration3.JPG', alt: 'Mold removal in progress' },
  ],
  'moisture-mold-inspection': [
    { src: '/images/moisture-inspection/moisturemold.JPG', alt: 'Moisture and mold inspection' },
    { src: '/images/moisture-inspection/moisturemold2.JPG', alt: 'Moisture detection equipment' },
    { src: '/images/moisture-inspection/moisturemold3.JPG', alt: 'Mold inspection process' },
  ],
  'smoke-odor-removal': [
    { src: '/images/smoke-odor/smokeoder.JPG', alt: 'Smoke and odor removal project' },
    { src: '/images/smoke-odor/smokeodor2.JPG', alt: 'Odor removal treatment' },
  ],
  'decontamination': [
    { src: '/images/decontamination/decontamination.JPG', alt: 'Decontamination project' },
    { src: '/images/decontamination/decontamination2.JPG', alt: 'Biohazard cleanup' },
    { src: '/images/decontamination/decontamination3.JPG', alt: 'Decontamination in progress' },
  ],
};

export function getImagesForService(slug: string): ServiceImage[] {
  return serviceImages[slug] || [];
}
