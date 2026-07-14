// ============================================================
// Business Configuration
// ============================================================

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  stateCode: string;
  zip: string;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  shortName: string;
  legalName: string;
  owner: string;
  tagline: string;
  description: string;
  phone: string;
  phoneHref: string;
  phoneTel: string;
  phoneSecondary: string;
  email: string;
  address: Address;
  coordinates: Coordinates;
  website: string;
  siteUrl: string;
  googleBusinessUrl: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    linkedin: string;
    nextdoor: string;
    yelp: string;
  };
  licenseNumber: string;
  license: string;
  foundedYear: number;
  yearEstablished: number;
  certifications: string[];
  hours: BusinessHours[];
  emergencyService: boolean;
  emergencyCta: string;
  serviceRadius: string;
  schemaType: string;
  logo: string;
  logoWhite: string;
  ogImage: string;
}

export const business: Business = {
  name: 'KA Fresh Fruits & Vegetables',
  shortName: 'KA Fresh',
  legalName: 'KHAYRAT ALMAHROUSA FRESH FRUITS AND VEGETABLES TRADING - L.L.C',
  owner: 'KA Fresh Management',
  tagline: 'Farm-fresh, every day.',
  description:
    'KA Fresh Fruits & Vegetables is a fresh produce shop located on Al Ithmid St, MBZ City, ME10, Abu Dhabi. We provide daily fresh fruits, vegetables, leafy greens, herbs, seasonal produce, and selected fresh essentials for homes, families, restaurants, cafeterias, and kitchens. We serve customers across Mohammed Bin Zayed City, Musaffah, and Mussafah Shabiya with fresh quality, fair pricing, and friendly local service.',

  phone: '+971 54 580 1898',
  phoneHref: 'tel:+971545801898',
  phoneTel: '+971545801898',
  phoneSecondary: '',
  email: 'info@kavegetables.com',

  address: {
    street: 'Al Ithmid St, MBZ City, ME10',
    city: 'Abu Dhabi',
    state: 'Abu Dhabi',
    stateCode: 'AUH',
    zip: '',
    country: 'United Arab Emirates',
  },
  coordinates: {
    lat: 24.3406,
    lng: 54.5717,
  },

  website: 'https://kavegetables.com',
  siteUrl: 'https://kavegetables.com',
  googleBusinessUrl: '',

  socialMedia: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    linkedin: '',
    nextdoor: '',
    yelp: '',
  },

  licenseNumber:
    'Trade name reserved with Abu Dhabi Registration and Licensing Authority under activity 4721001',
  license:
    'Trade name reserved with Abu Dhabi Registration and Licensing Authority under activity 4721001',
  foundedYear: 2026,
  yearEstablished: 2026,
  certifications: [],

  hours: [
    { days: 'Monday - Sunday', hours: '7:00 AM - 12:00 AM' },
  ],
  emergencyService: false,
  emergencyCta: '',
  serviceRadius: 'Mohammed Bin Zayed City, Musaffah, and Mussafah Shabiya',
  schemaType: 'GroceryStore',

  logo: '/images/logo-sm.webp',
  logoWhite: '/images/logo-white-sm.webp',
  ogImage: '/images/fresh-produce-display.webp',
};

export function yearsInBusiness(): number {
  return new Date().getFullYear() - business.yearEstablished;
}
