export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: 'water' | 'fire' | 'mold' | 'inspection' | 'smoke' | 'biohazard';
  color: string;
  heroImage: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    slug: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    shortName: 'Water Damage',
    description: 'Fast, professional water extraction and drying services to protect your property from further damage. We respond 24/7 to flooding emergencies.',
    icon: 'water',
    color: 'water',
    heroImage: '/images/water-damage-hero.jpg',
    features: [
      '24/7 emergency response',
      'Professional water extraction',
      'Industrial-grade drying equipment',
      'Moisture monitoring',
      'Insurance claim assistance',
    ],
    process: [
      {
        step: 1,
        title: 'Emergency Contact',
        description: 'Call us anytime, day or night. We typically arrive within 1-2 hours.',
      },
      {
        step: 2,
        title: 'Assessment & Inspection',
        description: 'We assess the damage, identify the water source, and create a restoration plan.',
      },
      {
        step: 3,
        title: 'Water Extraction & Drying',
        description: 'Using industrial equipment, we remove water and thoroughly dry the affected areas.',
      },
      {
        step: 4,
        title: 'Restoration & Monitoring',
        description: 'We restore your property and monitor moisture levels to prevent mold growth.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can you respond to a water emergency?',
        answer: 'We offer 24/7 emergency services and typically arrive within 1-2 hours of your call.',
      },
      {
        question: 'Do you work with insurance companies?',
        answer: 'Yes, we work directly with all major insurance companies and can help with the claims process.',
      },
    ],
  },
  {
    slug: 'fire-restoration',
    name: 'Fire Restoration',
    shortName: 'Fire Damage',
    description: 'Complete fire damage restoration including smoke removal, structural repair, and content cleaning. We help you rebuild after the devastation.',
    icon: 'fire',
    color: 'fire',
    heroImage: '/images/fire-restoration-hero.jpg',
    features: [
      'Emergency board-up services',
      'Smoke and soot removal',
      'Structural cleaning',
      'Content restoration',
      'Odor elimination',
    ],
    process: [
      {
        step: 1,
        title: 'Emergency Response',
        description: 'We secure your property with board-up services and assess the fire damage.',
      },
      {
        step: 2,
        title: 'Damage Assessment',
        description: 'Our team documents all damage for insurance and creates a detailed restoration plan.',
      },
      {
        step: 3,
        title: 'Cleanup & Restoration',
        description: 'We remove debris, clean surfaces, and eliminate smoke odors throughout the property.',
      },
      {
        step: 4,
        title: 'Final Restoration',
        description: 'We restore your property to its pre-fire condition, including any necessary repairs.',
      },
    ],
    faqs: [
      {
        question: 'Can you remove smoke smell from my home?',
        answer: 'Yes, we use specialized equipment and techniques to completely eliminate smoke odors.',
      },
      {
        question: 'How long does fire restoration take?',
        answer: 'It depends on the extent of damage, but most projects take 2-6 weeks to complete.',
      },
    ],
  },
  {
    slug: 'mold-restoration',
    name: 'Mold Restoration',
    shortName: 'Mold Removal',
    description: 'Professional mold remediation services to protect your family\'s health. We safely remove mold and address the source to prevent recurrence.',
    icon: 'mold',
    color: 'mold',
    heroImage: '/images/mold-restoration-hero.jpg',
    features: [
      'Complete mold removal',
      'HEPA air filtration',
      'Antimicrobial treatments',
      'Source identification',
      'Prevention recommendations',
    ],
    process: [
      {
        step: 1,
        title: 'Inspection & Assessment',
        description: 'We inspect your property, identify mold growth, and determine the moisture source.',
      },
      {
        step: 2,
        title: 'Containment',
        description: 'We isolate affected areas to prevent mold spores from spreading during removal.',
      },
      {
        step: 3,
        title: 'Removal & Treatment',
        description: 'Using HEPA filtration and antimicrobial treatments, we safely remove all mold.',
      },
      {
        step: 4,
        title: 'Restoration & Prevention',
        description: 'We restore affected areas and provide recommendations to prevent future growth.',
      },
    ],
    faqs: [
      {
        question: 'Is mold dangerous to my health?',
        answer: 'Yes, mold can cause respiratory issues and allergic reactions. Professional removal is recommended.',
      },
      {
        question: 'Will the mold come back after removal?',
        answer: 'Not if we address the moisture source. We identify and help fix the underlying cause.',
      },
    ],
  },
  {
    slug: 'moisture-mold-inspection',
    name: 'Moisture & Mold Inspection',
    shortName: 'Inspection',
    description: 'Comprehensive moisture and mold inspections using advanced detection equipment. Early detection prevents costly damage and health risks.',
    icon: 'inspection',
    color: 'sage',
    heroImage: '/images/inspection-hero.jpg',
    features: [
      'Thermal imaging detection',
      'Moisture meter readings',
      'Air quality testing',
      'Detailed inspection reports',
      'Prevention recommendations',
    ],
    process: [
      {
        step: 1,
        title: 'Visual Inspection',
        description: 'We thoroughly examine your property for visible signs of moisture damage or mold.',
      },
      {
        step: 2,
        title: 'Advanced Detection',
        description: 'Using thermal cameras and moisture meters, we identify hidden water and mold.',
      },
      {
        step: 3,
        title: 'Air Quality Testing',
        description: 'We test indoor air quality to detect mold spores and assess contamination levels.',
      },
      {
        step: 4,
        title: 'Detailed Report',
        description: 'You receive a comprehensive report with findings and recommended next steps.',
      },
    ],
    faqs: [
      {
        question: 'How do you find hidden mold?',
        answer: 'We use thermal imaging and moisture meters to detect mold behind walls and under floors.',
      },
      {
        question: 'Should I get an inspection before buying a home?',
        answer: 'Yes, a moisture and mold inspection can reveal hidden issues before you purchase.',
      },
    ],
  },
  {
    slug: 'smoke-odor-removal',
    name: 'Smoke & Odor Removal',
    shortName: 'Odor Removal',
    description: 'Professional smoke and odor elimination services. We don\'t mask odors—we eliminate them at the source using advanced techniques.',
    icon: 'smoke',
    color: 'charcoal',
    heroImage: '/images/smoke-odor-hero.jpg',
    features: [
      'Ozone treatment',
      'Thermal fogging',
      'Air scrubbing',
      'Surface cleaning',
      'HVAC cleaning',
    ],
    process: [
      {
        step: 1,
        title: 'Odor Assessment',
        description: 'We identify the source and extent of smoke or odor contamination.',
      },
      {
        step: 2,
        title: 'Source Treatment',
        description: 'We treat the source of odors with specialized cleaning agents and techniques.',
      },
      {
        step: 3,
        title: 'Air Treatment',
        description: 'Using ozone generators and air scrubbers, we purify the air throughout your property.',
      },
      {
        step: 4,
        title: 'Verification',
        description: 'We verify complete odor elimination and ensure your satisfaction.',
      },
    ],
    faqs: [
      {
        question: 'Can you remove cigarette smoke smell from a home?',
        answer: 'Yes, we specialize in removing all types of smoke odors, including years of cigarette smoke.',
      },
      {
        question: 'How long does odor removal take?',
        answer: 'Most projects are completed within 1-3 days, depending on the severity.',
      },
    ],
  },
  {
    slug: 'decontamination',
    name: 'Decontamination',
    shortName: 'Decontamination',
    description: 'Professional biohazard cleanup and decontamination services. We handle hazardous materials safely and restore your property to a safe condition.',
    icon: 'biohazard',
    color: 'biohazard',
    heroImage: '/images/decontamination-hero.jpg',
    features: [
      'Biohazard cleanup',
      'Trauma scene restoration',
      'Hazardous material removal',
      'Hospital-grade disinfection',
      'Proper disposal protocols',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'We assess the situation and develop a safe cleanup and disposal plan.',
      },
      {
        step: 2,
        title: 'Containment & Safety',
        description: 'We establish containment and use proper PPE to ensure safe handling.',
      },
      {
        step: 3,
        title: 'Removal & Disinfection',
        description: 'We remove all hazardous materials and thoroughly disinfect all surfaces.',
      },
      {
        step: 4,
        title: 'Verification & Restoration',
        description: 'We verify the area is safe and restore it to a clean, livable condition.',
      },
    ],
    faqs: [
      {
        question: 'What types of biohazards do you handle?',
        answer: 'We handle blood, bodily fluids, trauma scenes, hoarding situations, and other biohazards.',
      },
      {
        question: 'Is this service confidential?',
        answer: 'Yes, we maintain complete confidentiality and use unmarked vehicles when requested.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
