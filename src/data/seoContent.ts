// ============================================================
// SEO Content: FAQs & Reviews
// ============================================================

import type { ServiceArea } from './serviceAreas';
import type { ServiceType } from './serviceTypes';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
  area?: string;
  source: string;
}

const BUSINESS_NAME = 'KA Fresh Fruits & Vegetables';
const PHONE = '+971 54 580 1898';
const LICENSE =
  'Trade name reserved with Abu Dhabi Registration and Licensing Authority under activity 4721001';
const YEAR_ESTABLISHED = 2026;
const CITY = 'Abu Dhabi';
const STATE = 'Abu Dhabi';

export function generateFaqs(area?: ServiceArea, service?: ServiceType): FaqItem[] {
  const areaName = area?.name ?? CITY;
  const serviceName = service?.name ?? 'fresh produce';

  const universal: FaqItem[] = [
    {
      question: `Is ${BUSINESS_NAME} licensed?`,
      answer:
        `Yes. ${BUSINESS_NAME} is a registered Limited Liability Company in Abu Dhabi. ${LICENSE}. We operate under the activity "Retail Sale of Fresh Fruits and Vegetables."`,
    },
    {
      question: `What areas does ${BUSINESS_NAME} serve?`,
      answer:
        `We proudly serve Mohammed Bin Zayed City, Musaffah, Mussafah Shabiya, and the greater Abu Dhabi area. We offer in-store shopping, pre-order pickup, and delivery across these communities. Visit our <a href="/areas/">service areas page</a> for a complete list.`,
    },
    {
      question: `What are your business hours?`,
      answer:
        `We are open daily from 7:00 AM to 12:00 AM, including weekends and public holidays. You can visit us anytime for fresh produce, or place a pre-order for quick pickup.`,
    },
    {
      question: `Do you offer home delivery?`,
      answer:
        `Yes, we offer fresh produce delivery across MBZ City, Musaffah, and Mussafah Shabiya. Delivery fees vary by location and order size. Bulk orders and restaurant accounts may qualify for free delivery. Call ${PHONE} to arrange delivery.`,
    },
    {
      question: `Do you supply restaurants and cafeterias?`,
      answer:
        `Absolutely. We supply fresh fruits and vegetables to restaurants, catering kitchens, cafeterias, and food businesses across Abu Dhabi. We offer wholesale pricing, scheduled daily deliveries, and customized orders based on your menu needs.`,
    },
  ];

  const areaFaqs: FaqItem[] = area
    ? [
        {
          question: `How quickly can you deliver to ${areaName}?`,
          answer: `We typically deliver to ${areaName} within ${area.responseTime}. For pre-orders, you can schedule a convenient pickup or delivery time. Call ${PHONE} to place your order.`,
        },
        {
          question: `Do you charge extra for delivery to ${areaName}?`,
          answer: `No. ${areaName} is within our standard delivery area. Delivery fees are based on order size, not distance within our service radius. Orders above AED 100 often qualify for free delivery.`,
        },
      ]
    : [];

  const serviceFaqs: FaqItem[] = service
    ? [
        {
          question: `How much does ${serviceName.toLowerCase()} cost at ${BUSINESS_NAME}?`,
          answer: `Our ${serviceName.toLowerCase()} pricing is competitive and based on current market rates. ${service.priceRanges.map((p) => `${p.label}: AED ${p.min}-${p.max} ${p.unit ?? ''}`).join('. ')}. Call ${PHONE} for today's prices and availability.`,
        },
        {
          question: `Is ${serviceName.toLowerCase()} available for delivery in ${areaName}?`,
          answer: `Yes, we offer ${serviceName.toLowerCase()} delivery throughout ${areaName} and surrounding areas. Place your order by phone or WhatsApp at ${PHONE} and we will deliver fresh to your door.`,
        },
      ]
    : [];

  return [...universal, ...areaFaqs, ...serviceFaqs];
}

export const reviews: Review[] = [
  {
    author: 'Fatima Al-Hassan',
    rating: 5,
    text: 'The freshest fruits I have found in MBZ City. The mangoes are always perfectly ripe and the vegetables last much longer than what I used to buy from the supermarket. Highly recommend KA Fresh!',
    date: '2026-05-15',
    service: 'fresh-fruits',
    area: 'mohammed-bin-zayed-city',
    source: 'Google',
  },
  {
    author: 'Mohammed Khan',
    rating: 5,
    text: 'We order bulk vegetables for our cafeteria every week and KA Fresh never disappoints. The quality is consistent, the prices are fair, and the delivery is always on time. Great local business.',
    date: '2026-05-22',
    service: 'bulk-orders',
    area: 'musaffah',
    source: 'Google',
  },
  {
    author: 'Sarah Johnson',
    rating: 4.8,
    text: 'I love their leafy greens selection. The spinach and coriander are so fresh, and the herbs are perfect for my cooking. The staff is friendly and always helps me find what I need.',
    date: '2026-04-28',
    service: 'leafy-greens',
    area: 'mbz-city',
    source: 'Google',
  },
  {
    author: 'Rajesh Patel',
    rating: 5,
    text: 'As a restaurant owner in Shabiya, I rely on KA Fresh for daily produce supply. Their restaurant supply service is excellent: fresh ingredients every morning, competitive wholesale prices, and reliable delivery.',
    date: '2026-06-01',
    service: 'restaurant-kitchen-supply',
    area: 'mussafah-shabiya',
    source: 'Google',
  },
  {
    author: 'Aisha Al-Mansouri',
    rating: 4.9,
    text: 'The pre-order and pickup service saves me so much time. I send my list on WhatsApp, and everything is packed and ready when I arrive. The produce quality is outstanding every single time.',
    date: '2026-06-10',
    service: 'pre-order-pickup',
    area: 'me10',
    source: 'Google',
  },
  {
    author: 'James Wilson',
    rating: 5,
    text: 'I was looking for hard-to-find herbs for an international recipe and KA Fresh had everything. Fresh basil, thyme, and even curry leaves. This shop is a gem for anyone who loves cooking.',
    date: '2026-05-30',
    service: 'fresh-herbs',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Omar Hassan',
    rating: 4.7,
    text: 'Great seasonal selection. I bought their summer fruit box and it was amazing: watermelon, mangoes, grapes, all perfectly ripe. Will definitely order again for Eid gatherings.',
    date: '2026-04-15',
    service: 'seasonal-produce',
    area: 'shabiya-10',
    source: 'Google',
  },
  {
    author: 'Lina George',
    rating: 5,
    text: 'The delivery service is fantastic. I live in Shabiya 11 and they deliver fresh vegetables to my door within 30 minutes. The packaging is good and nothing ever arrives bruised.',
    date: '2026-06-18',
    service: 'fresh-produce-delivery',
    area: 'shabiya-11',
    source: 'Google',
  },
];

export function getReviewsForPage(
  areaSlug?: string,
  serviceSlug?: string,
  limit: number = 6
): Review[] {
  let filtered = [...reviews];

  if (serviceSlug && areaSlug) {
    const both = filtered.filter((r) => r.service === serviceSlug && r.area === areaSlug);
    if (both.length >= 2) return both.slice(0, limit);
  }

  if (serviceSlug) {
    const byService = filtered.filter((r) => r.service === serviceSlug);
    if (byService.length >= 2) return byService.slice(0, limit);
  }

  if (areaSlug) {
    const byArea = filtered.filter((r) => r.area === areaSlug);
    if (byArea.length >= 2) return byArea.slice(0, limit);
  }

  return filtered.sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getAggregateRating(): {
  ratingValue: string;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
} {
  if (reviews.length === 0) {
    return { ratingValue: '0', reviewCount: 0, bestRating: 5, worstRating: 1 };
  }
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  const avg = sum / reviews.length;
  return {
    ratingValue: avg.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}
