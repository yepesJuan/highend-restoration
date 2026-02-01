export interface ServiceArea {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  cities: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'broward-county',
    name: 'Broward County',
    shortName: 'Broward',
    description: 'Serving all of Broward County including Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding communities.',
    cities: [
      'Fort Lauderdale',
      'Hollywood',
      'Pembroke Pines',
      'Coral Springs',
      'Miramar',
      'Davie',
      'Plantation',
      'Sunrise',
      'Pompano Beach',
      'Deerfield Beach',
      'Weston',
      'Coconut Creek',
      'Tamarac',
      'Margate',
      'Lauderhill',
    ],
  },
  {
    slug: 'palm-beach',
    name: 'Palm Beach County',
    shortName: 'Palm Beach',
    description: 'Serving Palm Beach County including Boca Raton, Delray Beach, Boynton Beach, and surrounding areas.',
    cities: [
      'Boca Raton',
      'Delray Beach',
      'Boynton Beach',
      'Lake Worth',
      'Jupiter',
      'Palm Beach Gardens',
      'Wellington',
      'Royal Palm Beach',
      'Greenacres',
      'Riviera Beach',
      'Palm Springs',
      'Lantana',
    ],
  },
  {
    slug: 'west-palm-beach',
    name: 'West Palm Beach',
    shortName: 'West Palm',
    description: 'Serving West Palm Beach and the surrounding metropolitan area with fast, reliable restoration services.',
    cities: [
      'West Palm Beach',
      'Palm Beach',
      'North Palm Beach',
      'Lake Park',
      'Palm Beach Shores',
      'Mangonia Park',
      'Glen Ridge',
      'Cloud Lake',
      'Haverhill',
    ],
  },
  {
    slug: 'miami-dade-county',
    name: 'Miami-Dade County',
    shortName: 'Miami-Dade',
    description: 'Serving all of Miami-Dade County including Miami, Miami Beach, Hialeah, and surrounding communities.',
    cities: [
      'Miami',
      'Miami Beach',
      'Hialeah',
      'Coral Gables',
      'Homestead',
      'North Miami',
      'Doral',
      'Kendall',
      'Miami Gardens',
      'Aventura',
      'Key Biscayne',
      'Pinecrest',
      'Cutler Bay',
      'Miami Lakes',
      'Sunny Isles Beach',
    ],
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
