export const company = {
  name: 'HighEnd Restoration',
  legalName: 'HighEnd Restoration LLC',
  phone: '305-989-5986',
  phoneFormatted: '(305) 989-5986',
  phoneLink: 'tel:+13059895986',
  email: 'highendrestoration1@gmail.com',
  instagram: 'highend_restoration',
  instagramUrl: 'https://instagram.com/highend_restoration',
  yearsInBusiness: 20,
  foundedYear: 2006,
  tagline: 'Restoring What Matters Most',
  description:
    'Family-owned restoration company serving South Florida for over 20 years. Specializing in water damage, fire restoration, mold remediation, and emergency services.',
  address: {
    region: 'South Florida',
    areas: ['Broward County', 'Palm Beach County', 'West Palm Beach'],
  },
  hours: {
    display: '24/7 Emergency Service',
    isAlwaysOpen: true,
  },
  socialProof: {
    yearsExperience: 20,
    available24_7: true,
    familyOwned: true,
    licensedInsured: true,
  },
};

export const hubspot = {
  portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '',
  formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || '',
};
