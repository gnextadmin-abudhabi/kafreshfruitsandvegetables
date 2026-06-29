// ============================================================
// Service Areas Configuration
// ============================================================

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  state: string;
  zipCodes: string[];
  population: number;
  lat: number;
  lng: number;
  description: string;
  arDescription: string;
  featured: boolean;
  nearby: string[];
  priority: 'primary' | 'secondary' | 'tertiary';
  responseTime: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'mohammed-bin-zayed-city',
    name: 'Mohammed Bin Zayed City',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 250000,
    lat: 24.3406,
    lng: 54.5717,
    description:
      'Mohammed Bin Zayed City is a vibrant residential community in Abu Dhabi with a growing population of families and professionals. KA Fresh provides daily fresh fruits and vegetables to homes, restaurants, and catering kitchens throughout MBZ City.',
    arDescription: 'مدينة محمد بن زايد هي مجتمع سكني نابض بالحياة في أبوظبي مع عدد متزايد من العائلات والمحترفين. كيه أي فريش يوفر فواكه وخضروات طازجة يومياً للمنازل والمطاعم ومطابخ التموين في جميع أنحاء مدينة محمد بن زايد.',
    featured: true,
    nearby: ['mbz-city', 'me10', 'musaffah'],
    priority: 'primary',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'mbz-city',
    name: 'MBZ City',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 250000,
    lat: 24.3380,
    lng: 54.5690,
    description:
      `MBZ City is one of Abu Dhabi's largest residential developments, home to thousands of families who value fresh, quality produce. KA Fresh is conveniently located to serve the daily grocery needs of MBZ City residents.`,
    arDescription: 'مدينة محمد بن زايد هي واحدة من أكبر التطويرات السكنية في أبوظبي، موطن لآلاف العائلات التي تقدر المنتجات الطازجة والجودة. كيه أي فريش يقع في موقع مريح لخدمة احتياجات البقالة اليومية لسكان مدينة محمد بن زايد.',
    featured: true,
    nearby: ['mohammed-bin-zayed-city', 'me10', 'musaffah'],
    priority: 'primary',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'me10',
    name: 'ME10',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 45000,
    lat: 24.3420,
    lng: 54.5730,
    description:
      'ME10 is a well-known zone within Mohammed Bin Zayed City, featuring residential communities and local businesses. KA Fresh is located right on Al Ithmid St in ME10, making it easy for residents to pick up fresh produce daily.',
    arDescription: 'منطقة مي 10 هي منطقة معروفة ضمن مدينة محمد بن زايد، تضم مجتمعات سكنية وأعمال محلية. كيه أي فريش يقع مباشرة في شارع الإثمد في مي 10، مما يسهل على السكان استلام المنتجات الطازجة يومياً.',
    featured: true,
    nearby: ['mohammed-bin-zayed-city', 'mbz-city', 'musaffah'],
    priority: 'secondary',
    responseTime: '10-15 minutes',
  },
  {
    slug: 'musaffah',
    name: 'Musaffah',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 180000,
    lat: 24.3708,
    lng: 54.5000,
    description:
      'Musaffah is an industrial and residential district southwest of Abu Dhabi city center. With a mix of labor camps, workshops, and residential areas, Musaffah residents rely on KA Fresh for affordable bulk produce and daily essentials.',
    arDescription: 'المصفح هي منطقة صناعية وسكنية جنوب غرب مركز مدينة أبوظبي. مع مزيج من معسكرات العمال والورش والمناطق السكنية، يعتمد سكان المصفح على كيه أي فريش للحصول على منتجات بالجملة بأسعار معقولة والضروريات اليومية.',
    featured: true,
    nearby: ['mussafah-shabiya', 'mohammed-bin-zayed-city', 'mbz-city'],
    priority: 'secondary',
    responseTime: '25-30 minutes',
  },
  {
    slug: 'mussafah-shabiya',
    name: 'Mussafah Shabiya',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 85000,
    lat: 24.3800,
    lng: 54.4800,
    description:
      'Mussafah Shabiya is a bustling residential and commercial area near the industrial zone. KA Fresh delivers fresh fruits and vegetables to households, restaurants, and cafeterias across Shabiya with reliable daily service.',
    arDescription: 'مصفح شابية هي منطقة سكنية وتجارية مزدحمة بالقرب من المنطقة الصناعية. كيه أي فريش يوّل فواكه وخضروات طازجة للمنازل والمطاعم والمقاصف في جميع أنحاء شابية بخدمة يومية موثوقة.',
    featured: true,
    nearby: ['musaffah', 'shabiya-10', 'shabiya-11'],
    priority: 'secondary',
    responseTime: '25-30 minutes',
  },
  {
    slug: 'shabiya',
    name: 'Shabiya',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 85000,
    lat: 24.3820,
    lng: 54.4780,
    description:
      'Shabiya is a growing community in the Mussafah area known for its family-friendly neighborhoods and diverse dining scene. Local restaurants and home cooks alike count on KA Fresh for the freshest seasonal produce.',
    arDescription: 'شابية هي مجتمع متنامٍ في منطقة المصفح معروف بأحيائه الصديقة للعائلات ومشهد الطعام المتنوع. المطاعم المحلية وطهاة المنازل على حد سواء يعتمدون على كيه أي فريش للحصول على أ freshest المنتجات الموسمية.',
    featured: false,
    nearby: ['mussafah-shabiya', 'shabiya-10', 'musaffah'],
    priority: 'tertiary',
    responseTime: '25-30 minutes',
  },
  {
    slug: 'shabiya-10',
    name: 'Shabiya 10',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 25000,
    lat: 24.3850,
    lng: 54.4750,
    description:
      'Shabiya 10 is a residential sub-community within the broader Shabiya area. Families here enjoy easy access to KA Fresh for their daily fruit and vegetable shopping, with delivery options available.',
    arDescription: 'شابية 10 هي مجتمع سكني فرعي ضمن منطقة شابية الأوسع. تستمتع العائلات هنا بسهولة الوصول إلى كيه أي فريش لتسوق الفواكه والخضروات اليومي، مع خيارات التوصيل المتاحة.',
    featured: false,
    nearby: ['shabiya-11', 'shabiya-12', 'mussafah-shabiya'],
    priority: 'tertiary',
    responseTime: '30-35 minutes',
  },
  {
    slug: 'shabiya-11',
    name: 'Shabiya 11',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 22000,
    lat: 24.3870,
    lng: 54.4780,
    description:
      'Shabiya 11 offers affordable housing and a tight-knit community atmosphere. KA Fresh serves residents with budget-friendly fresh produce, bulk orders, and reliable delivery throughout the neighborhood.',
    arDescription: 'شابية 11 توفر سكناً بأسعار معقولة وأجواء مجتمعية متماسكة. كيه أي فريش يخدم السكان بمنتجات طازجة بأسعار معقولة وطلبات بالجملة وتوصيل موثوق في جميع أنحاء الحي.',
    featured: false,
    nearby: ['shabiya-10', 'shabiya-12', 'mussafah-shabiya'],
    priority: 'tertiary',
    responseTime: '30-35 minutes',
  },
  {
    slug: 'shabiya-12',
    name: 'Shabiya 12',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 20000,
    lat: 24.3890,
    lng: 54.4810,
    description:
      'Shabiya 12 is a residential area popular with families and working professionals. KA Fresh provides daily deliveries of fresh fruits, vegetables, and herbs to homes and small businesses in Shabiya 12.',
    arDescription: 'شابية 12 هي منطقة سكنية محبوبة من العائلات والمحترفين العاملين. كيه أي فريش يوفر توصيلات يومية من الفواكه والخضروات والأعشاب الطازجة للمنازل والشركات الصغيرة في شابية 12.',
    featured: false,
    nearby: ['shabiya-10', 'shabiya-11', 'mussafah-shabiya'],
    priority: 'tertiary',
    responseTime: '30-35 minutes',
  },
  {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    county: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zipCodes: [],
    population: 1500000,
    lat: 24.4539,
    lng: 54.3773,
    description:
      'As the capital of the UAE, Abu Dhabi is home to millions of residents and a thriving food service industry. KA Fresh proudly serves the greater Abu Dhabi area with wholesale and retail fresh produce solutions.',
    arDescription: 'باعتبارها عاصمة الإمارات العربية المتحدة، أبوظبي موطن لملايين السكان وصناعة خدمات الأغذية المزدهرة. كيه أي فريش يفتخر بخدمة منطقة أبوظبي الكبرى بحلول الجملة والتجزئة للمنتجات الطازجة.',
    featured: false,
    nearby: ['mohammed-bin-zayed-city', 'musaffah', 'mbz-city'],
    priority: 'tertiary',
    responseTime: '45-60 minutes',
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyAreas(slug: string): ServiceArea[] {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.nearby
    .map((nearbySlug) => getAreaBySlug(nearbySlug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  const area = getAreaBySlug(slug);
  if (area) return area.name;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getFeaturedAreas(): ServiceArea[] {
  return serviceAreas.filter((area) => area.featured);
}

export function getCounties(): string[] {
  return [...new Set(serviceAreas.map((area) => area.county))];
}
