// ============================================================
// Service Types Configuration
// ============================================================

export interface ProcessStep {
  title: string;
  description: string;
  arTitle: string;
  arDescription: string;
}

export interface PriceRange {
  label: string;
  arLabel: string;
  min: number;
  max: number;
  unit?: string;
  arUnit?: string;
}

export interface ServiceType {
  slug: string;
  name: string;
  arName: string;
  shortName: string;
  arShortName: string;
  description: string;
  arDescription: string;
  image: string;
  icon: string;
  emergency: boolean;
  featured: boolean;
  process: ProcessStep[];
  priceRanges: PriceRange[];
  keywords: string[];
  relatedServices: string[];
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'fresh-fruits',
    name: 'Fresh Fruits',
    arName: 'فواكه طازجة',
    shortName: 'Fruits',
    arShortName: 'فواكه',
    description:
      'Daily fresh fruits, seasonal fruits, imported varieties, and popular choices for families and homes. From crisp apples and juicy oranges to tropical mangoes and grapes, we source the best produce for your table.',
    arDescription: 'فواكه طازجة يومياً، فواكه موسمية، أنواع مستوردة، وخيارات شائعة للعائلات والمنازل. من التفاح المقرمش والبرتقال العصير إلى المانجو الاستوائي والعنب، نحن نختار أفضل المنتجات لمائدتك.',
    image: '/images/produce-market-display.webp',
    icon: 'lucide:apple',
    emergency: false,
    featured: true,
    process: [
      { title: 'Daily Sourcing', arTitle: 'توريد يومي', description: 'We source fresh fruits daily from local farms, regional markets, and trusted importers to ensure peak freshness.', arDescription: 'نحن نورد الفواكه الطازجة يومياً من المزارع المحلية والأسواق الإقليمية والموردين الموثوقين لضمان أقصى درجة من الطزاجة.' },
      { title: 'Quality Check', arTitle: 'فحص الجودة', description: 'Every batch is inspected for ripeness, color, and firmness. Only the best fruits make it to our shelves.', arDescription: 'يتم فحص كل دفعة للتحقق من النضج واللون والصلابة. فقط أفضل الفواكه تصل إلى رفوفنا.' },
      { title: 'Careful Display', arTitle: 'عرض بعناية', description: 'Fruits are stored and displayed at optimal temperatures to maintain flavor, texture, and nutritional value.', arDescription: 'يتم تخزين الفواكه وعرضها في درجات حرارة مثالية للحفاظ على النكهة والملمس والقيمة الغذائية.' },
      { title: 'Fresh to You', arTitle: 'طازج إليك', description: 'Choose from our wide selection in-store or order for delivery. Fresh fruits ready for your family today.', arDescription: 'اختر من تشكيلتنا الواسعة في المتجر أو اطلب للتوصيل. فواكه طازجة جاهزة لعائلتك اليوم.' },
    ],
    priceRanges: [
      { label: 'Local Seasonal Fruits', arLabel: 'فواكه موسمية محلية', min: 5, max: 25, unit: 'per kg', arUnit: 'لكل كجم' },
      { label: 'Imported Fruits', arLabel: 'فواكه مستوردة', min: 15, max: 60, unit: 'per kg', arUnit: 'لكل كجم' },
      { label: 'Premium Selection', arLabel: 'اختيار مميز', min: 25, max: 100, unit: 'per kg', arUnit: 'لكل كجم' },
    ],
    keywords: ['fresh fruits', 'seasonal fruits', 'imported fruits', 'fruit shop Abu Dhabi', 'fruits MBZ City'],
    relatedServices: ['fresh-vegetables', 'seasonal-produce', 'local-imported-produce'],
  },
  {
    slug: 'fresh-vegetables',
    name: 'Fresh Vegetables',
    arName: 'خضروات طازجة',
    shortName: 'Vegetables',
    arShortName: 'خضروات',
    description:
      'Fresh vegetables for daily cooking, home kitchens, restaurants, and cafeterias. From tomatoes and cucumbers to eggplants and peppers, our vegetable selection supports every cuisine and every meal.',
    arDescription: 'خضروات طازجة للطبخ اليومي، مطابخ المنازل، المطاعم، والمقاصف. من الطماطم والخيار إلى الباذنجان والفلفل، تشكيلتنا من الخضروات تدعم كل مطبخ وكل وجبة.',
    image: '/images/vegetables-fruits-arrangement.webp',
    icon: 'lucide:carrot',
    emergency: false,
    featured: true,
    process: [
      { title: 'Farm Fresh Pick', arTitle: 'قطف طازج من المزرعة', description: 'Vegetables are harvested at peak freshness and transported quickly to preserve nutrients and flavor.', arDescription: 'يتم حصاد الخضروات في ذروة الطزاجة ونقلها بسرعة للحفاظ على العناصر الغذائية والنكهة.' },
      { title: 'Rigorous Selection', arTitle: 'اختيار دقيق', description: 'We hand-select each vegetable for size, color, and freshness. Wilted or damaged produce is removed immediately.', arDescription: 'نختار كل خضار يدوياً حسب الحجم واللون والطزاجة. يتم إزالة المنتجات الذابلة أو التالفة فوراً.' },
      { title: 'Proper Storage', arTitle: 'تخزين سليم', description: 'Temperature-controlled storage keeps vegetables crisp and vibrant until they reach your kitchen.', arDescription: 'التخزين المراقب بالحرارة يحافظ على الخضروات مقرمشة ونضرة حتى تصل إلى مطبخك.' },
      { title: 'Ready for Cooking', arTitle: 'جاهز للطبخ', description: 'Whether you need a single tomato or a bulk order for a restaurant, we have fresh vegetables ready for you.', arDescription: 'سواء كنت بحاجة إلى طماطمة واحدة أو طلب بالجملة لمطعم، لدينا خضروات طازجة جاهزة لك.' },
    ],
    priceRanges: [
      { label: 'Local Vegetables', arLabel: 'خضروات محلية', min: 3, max: 20, unit: 'per kg', arUnit: 'لكل كجم' },
      { label: 'Imported Vegetables', arLabel: 'خضروات مستوردة', min: 10, max: 45, unit: 'per kg', arUnit: 'لكل كجم' },
      { label: 'Organic Selection', arLabel: 'اختيار عضوي', min: 15, max: 60, unit: 'per kg', arUnit: 'لكل كجم' },
    ],
    keywords: ['fresh vegetables', 'vegetable shop', 'vegetables Abu Dhabi', 'cooking vegetables', 'restaurant vegetables'],
    relatedServices: ['fresh-fruits', 'leafy-greens', 'restaurant-kitchen-supply'],
  },
  {
    slug: 'leafy-greens',
    name: 'Leafy Greens',
    arName: 'خضروات ورقية',
    shortName: 'Greens',
    arShortName: 'ورقيات',
    description:
      'Spinach, lettuce, coriander, mint, parsley, spring onion, and other fresh greens. Essential for salads, soups, garnishes, and healthy cooking. Our leafy greens are harvested fresh and delivered daily.',
    arDescription: 'سبانخ، خس، كزبرة، نعناع، بقدونس، بصل أخضر، وخضروات ورقية طازجة أخرى. ضرورية للسلطات والشوربات والتزيين والطبخ الصحي. يتم حصاد خضرواتنا الورقية طازجة وتسليمها يومياً.',
    image: '/images/leafy-greens-display.webp',
    icon: 'lucide:leaf',
    emergency: false,
    featured: true,
    process: [
      { title: 'Early Morning Harvest', arTitle: 'حصاد الصباح الباكر', description: 'Leafy greens are harvested early in the morning when they are most hydrated and crisp.', arDescription: 'يتم حصاد الخضروات الورقية في الصباح الباكر عندما تكون أكثر ترطيباً وقساوة.' },
      { title: 'Washing & Cooling', arTitle: 'غسل وتبريد', description: 'Greens are gently washed and immediately cooled to lock in freshness and prevent wilting.', arDescription: 'يتم غسل الخضروات الورقية بلطف وتبريدها فوراً للحفاظ على الطزاجة ومنع الذبول.' },
      { title: 'Bundling & Packing', arTitle: 'تجميع وتغليف', description: 'We bundle greens in breathable packaging that maintains humidity without trapping excess moisture.', arDescription: 'نحن نجمع الخضروات الورقية في تغليف يسمح بالتهوية ويحافظ على الرطوبة دون حبس الماء الزائد.' },
      { title: 'Same-Day Availability', arTitle: 'متاح في نفس اليوم', description: 'From harvest to shelf within hours. Get the freshest leafy greens for your salads and cooking.', arDescription: 'من الحصاد إلى الرف في غضون ساعات. احصل على أ freshest الخضروات الورقية لسلطاتك وطبخك.' },
    ],
    priceRanges: [
      { label: 'Common Greens', arLabel: 'خضروات ورقية شائعة', min: 2, max: 15, unit: 'per bunch', arUnit: 'لكل باقة' },
      { label: 'Premium Greens', arLabel: 'خضروات ورقية مميزة', min: 8, max: 30, unit: 'per bunch', arUnit: 'لكل باقة' },
      { label: 'Bulk Greens', arLabel: 'خضروات ورقية بالجملة', min: 15, max: 50, unit: 'per kg', arUnit: 'لكل كجم' },
    ],
    keywords: ['leafy greens', 'spinach', 'lettuce', 'coriander', 'mint', 'parsley', 'fresh greens Abu Dhabi'],
    relatedServices: ['fresh-herbs', 'fresh-vegetables', 'fresh-fruits'],
  },
  {
    slug: 'fresh-herbs',
    name: 'Fresh Herbs',
    arName: 'أعشاب طازجة',
    shortName: 'Herbs',
    arShortName: 'أعشاب',
    description:
      'Daily-use herbs for home cooking, Arabic, Indian, and international recipes. From basil and thyme to curry leaves and dill, our herb selection brings authentic flavor to every dish you prepare.',
    arDescription: 'أعشاب للاستخدام اليومي في الطبخ المنزلي، الوصفات العربية والهندية والعالمية. من الريحان والزعتر إلى أوراق الكاري والشبت، تشكيلتنا من الأعشاب تضيف نكهة أصيلة لكل طبق تعده.',
    image: '/images/tomatoes-basil.webp',
    icon: 'lucide:flower-2',
    emergency: false,
    featured: true,
    process: [
      { title: 'Specialty Sourcing', arTitle: 'توريد متخصص', description: 'We source both common and hard-to-find herbs from local growers and specialist importers across the region.', arDescription: 'نحن نورد الأعشاب الشائعة والنادرة من المزارعين المحليين والموردين المتخصصين في جميع أنحاء المنطقة.' },
      { title: 'Fragrance & Freshness Check', arTitle: 'فحص الرائحة والطزاجة', description: 'Every herb batch is checked for vibrant color, strong aroma, and healthy leaves before acceptance.', arDescription: 'يتم فحص كل دفعة أعشاب للتحقق من اللون النابض بالحياة والرائحة القوية والأوراق الصحية قبل القبول.' },
      { title: 'Gentle Handling', arTitle: 'تعامل لطيف', description: 'Delicate herbs are handled with care and stored in conditions that preserve their essential oils and aroma.', arDescription: 'يتم التعامل مع الأعشاب الحساسة بعناية وتخزينها في ظروف تحافظ على زيوتها العطرية ورائحتها.' },
      { title: 'Recipe-Ready', arTitle: 'جاهز للوصفات', description: 'Find all the herbs you need for Arabic, Indian, Asian, and Western cuisines. Fresh flavor in every leaf.', arDescription: 'اعثر على جميع الأعشاب التي تحتاجها للمطابخ العربية والهندية والآسيوية والغربية. نكهة طازجة في كل ورقة.' },
    ],
    priceRanges: [
      { label: 'Common Herbs', arLabel: 'أعشاب شائعة', min: 2, max: 10, unit: 'per bunch', arUnit: 'لكل باقة' },
      { label: 'Specialty Herbs', arLabel: 'أعشاب متخصصة', min: 5, max: 25, unit: 'per bunch', arUnit: 'لكل باقة' },
      { label: 'Bulk Herb Packs', arLabel: 'أعشاب بالجملة', min: 10, max: 40, unit: 'per pack', arUnit: 'لكل عبوة' },
    ],
    keywords: ['fresh herbs', 'cooking herbs', 'basil', 'thyme', 'curry leaves', 'herbs Abu Dhabi'],
    relatedServices: ['leafy-greens', 'fresh-vegetables', 'seasonal-produce'],
  },
  {
    slug: 'seasonal-produce',
    name: 'Seasonal Produce',
    arName: 'منتجات موسمية',
    shortName: 'Seasonal',
    arShortName: 'موسمي',
    description:
      'Seasonal fruits and vegetables based on market availability and freshness. Enjoy the best nature has to offer each season, from summer mangoes and watermelon to winter citrus and root vegetables.',
    arDescription: 'فواكه وخضروات موسمية بناءً على توفر السوق والطزاجة. استمتع بأفضل ما تقدمه الطبيعة في كل موسم، من المانجو والبطيخ الصيفي إلى الحمضيات وخضروات الجذور الشتوية.',
    image: '/images/seasonal-produce.webp',
    icon: 'lucide:sun',
    emergency: false,
    featured: true,
    process: [
      { title: 'Seasonal Forecasting', arTitle: 'توقع الموسم', description: 'We track seasonal harvests across the region to know exactly when the best produce will be available.', arDescription: 'نحن نتتبع الحصاد الموسمي في جميع أنحاء المنطقة لنعرف بالضبط متى ستكون أفضل المنتجات متاحة.' },
      { title: 'Peak-Harvest Buying', arTitle: 'شراء في ذروة الحصاد', description: 'We purchase seasonal items at peak harvest when flavor is best and prices are most favorable.', arDescription: 'نشتري المنتجات الموسمية في ذروة الحصاد عندما تكون النكهة في أفضل حالاتها والأسعار الأكثر ملاءمة.' },
      { title: 'Rotating Selection', arTitle: 'تدوير التشكيلة', description: 'Our displays change with the seasons so you always find what is fresh, abundant, and affordably priced.', arDescription: 'تتغير عروضنا مع المواسم لتجد دائماً ما هو طازج ووفير وبسعر معقول.' },
      { title: 'Seasonal Recommendations', arTitle: 'توصيات موسمية', description: 'Ask our team what is in season. We will guide you to the freshest, most flavorful choices of the month.', arDescription: 'اسأل فريقنا ما هو في الموسم. سنرشدك إلى أ freshest وأكثر الخيارات نكهة في هذا الشهر.' },
    ],
    priceRanges: [
      { label: 'In-Season Fruits', arLabel: 'فواكه في الموسم', min: 4, max: 30, unit: 'per kg', arUnit: 'لكل كجم' },
      { label: 'In-Season Vegetables', arLabel: 'خضروات في الموسم', min: 3, max: 20, unit: 'per kg', arUnit: 'لكل كجم' },
      { label: 'Seasonal Boxes', arLabel: 'صناديق موسمية', min: 50, max: 150, unit: 'per box', arUnit: 'لكل صندوق' },
    ],
    keywords: ['seasonal produce', 'seasonal fruits', 'seasonal vegetables', 'fresh seasonal', 'Abu Dhabi produce'],
    relatedServices: ['fresh-fruits', 'fresh-vegetables', 'local-imported-produce'],
  },
  {
    slug: 'local-imported-produce',
    name: 'Local & Imported Produce',
    arName: 'منتجات محلية ومستوردة',
    shortName: 'Local & Imported',
    arShortName: 'محلي ومستورد',
    description:
      'A selection of local, regional, and imported fruits and vegetables. Support UAE farmers with local favorites or explore exotic imported varieties from around the world. Quality and freshness guaranteed.',
    arDescription: 'تشكيلة من الفواكه والخضروات المحلية والإقليمية والمستوردة. دعم مزارعي الإمارات بالمنتجات المحلية المفضلة أو استكشاف الأنواع المستوردة الغريبة من جميع أنحاء العالم. الجودة والطزاجة مضمونة.',
    image: '/images/fresh-vegetables-water.webp',
    icon: 'lucide:globe',
    emergency: false,
    featured: false,
    process: [
      { title: 'Local Farm Partnerships', arTitle: 'شراكات مزارع محلية', description: 'We work directly with UAE farms and regional growers to bring you the freshest local produce available.', arDescription: 'نعمل مباشرة مع مزارع الإمارات والمزارعين الإقليميين لنقدم لك أ freshest المنتجات المحلية المتاحة.' },
      { title: 'Global Import Network', arTitle: 'شبكة استيراد عالمية', description: 'Our import partners source premium fruits and vegetables from Europe, Asia, Africa, and the Americas.', arDescription: 'شركاؤنا في الاستيراد يوردون الفواكه والخضروات الممتازة من أوروبا وآسيا وأفريقيا والأمريكتين.' },
      { title: 'Quality Certification', arTitle: 'شهادة الجودة', description: 'All imported produce meets UAE food safety standards. Local produce is sourced from certified farms.', arDescription: 'جميع المنتجات المستوردة تلبي معايير سلامة الأغذية في الإمارات. المنتجات المحلية من مزارع معتمدة.' },
      { title: 'Best of Both Worlds', arTitle: 'أفضل ما في العالمين', description: 'Choose local for freshness and sustainability, or imported for variety and exotic flavors. We offer both.', arDescription: 'اختر المحلي للطزاجة والاستدامة، أو المستورد للتنوع والنكهات الغريبة. نحن نقدم كليهما.' },
    ],
    priceRanges: [
      { label: 'UAE Local Produce', arLabel: 'منتجات إماراتية محلية', min: 3, max: 25, unit: 'per kg', arUnit: 'لكل كجم' },
      { label: 'Regional Produce', arLabel: 'منتجات إقليمية', min: 5, max: 35, unit: 'per kg', arUnit: 'لكل كجم' },
      { label: 'Premium Imports', arLabel: 'مستوردات ممتازة', min: 15, max: 80, unit: 'per kg', arUnit: 'لكل كجم' },
    ],
    keywords: ['local produce', 'imported fruits', 'UAE farms', 'organic produce', 'imported vegetables Abu Dhabi'],
    relatedServices: ['fresh-fruits', 'fresh-vegetables', 'seasonal-produce'],
  },
  {
    slug: 'fresh-produce-delivery',
    name: 'Fresh Produce Delivery',
    arName: 'توصيل منتجات طازجة',
    shortName: 'Delivery',
    arShortName: 'توصيل',
    description:
      'Nearby delivery for customers in MBZ City, Musaffah, and Mussafah Shabiya. Fresh fruits and vegetables delivered to your door with the same quality and care you expect from our shop.',
    arDescription: 'توصيل مجاور للعملاء في مدينة محمد بن زايد والمصفح ومصفح شابية. فواكه وخضروات طازجة تُوصل إلى باب منزلك بنفس الجودة والعناية التي تتوقعها من متجرنا.',
    image: '/images/produce-delivery-box.webp',
    icon: 'lucide:truck',
    emergency: false,
    featured: true,
    process: [
      { title: 'Place Your Order', arTitle: 'قدم طلبك', description: 'Call us or message us on WhatsApp with your shopping list. We confirm availability and pricing right away.', arDescription: 'اتصل بنا أو راسلنا على واتساب مع قائمة مشترياتك. نؤكد التوفر والأسعار فوراً.' },
      { title: 'Hand-Picked Selection', arTitle: 'اختيار يدوي', description: 'Our team personally selects each item from our freshest stock, just as you would pick them yourself.', arDescription: 'فريقنا يختار كل صنف شخصياً من أ freshest مخزوننا، تماماً كما كنت ستختارها بنفسك.' },
      { title: 'Careful Packing', arTitle: 'تغليف بعناية', description: 'Items are packed with care using appropriate containers to prevent bruising and maintain freshness during transit.', arDescription: 'يتم تغليف الأصناف بعناية باستخدام حاويات مناسبة لمنع التلف والحفاظ على الطزاجة أثناء النقل.' },
      { title: 'Prompt Delivery', arTitle: 'توصيل سريع', description: 'Delivered to your door across MBZ City, Musaffah, and Shabiya. Fresh produce arrives ready to enjoy.', arDescription: 'يُوصل إلى باب منزلك في مدينة محمد بن زايد والمصفح وشابية. المنتجات الطازجة تصل جاهزة للاستمتاع.' },
    ],
    priceRanges: [
      { label: 'Standard Delivery', arLabel: 'توصيل قياسي', min: 10, max: 20, unit: 'per order', arUnit: 'لكل طلب' },
      { label: 'Bulk Delivery', arLabel: 'توصيل بالجملة', min: 0, max: 0, unit: 'Free for orders over AED 100', arUnit: 'مجاني للطلبات فوق 100 درهم' },
      { label: 'Express Delivery', arLabel: 'توصيل سريع', min: 25, max: 40, unit: 'per order', arUnit: 'لكل طلب' },
    ],
    keywords: ['produce delivery', 'vegetable delivery', 'fruit delivery MBZ City', 'fresh delivery Abu Dhabi', 'grocery delivery'],
    relatedServices: ['bulk-orders', 'pre-order-pickup', 'fresh-fruits'],
  },
  {
    slug: 'bulk-orders',
    name: 'Bulk Fruit & Vegetable Orders',
    arName: 'طلبات الفواكه والخضروات بالجملة',
    shortName: 'Bulk Orders',
    arShortName: 'طلبات جملة',
    description:
      'Bulk orders for homes, restaurants, cafeterias, offices, and small businesses. Get wholesale pricing on large quantities of fresh produce with reliable daily or weekly supply.',
    arDescription: 'طلبات بالجملة للمنازل والمطاعم والمقاصف والمكاتب والشركات الصغيرة. احصل على أسعار الجملة على كميات كبيرة من المنتجات الطازجة مع إمداد يومي أو أسبوعي موثوق.',
    image: '/images/basket-vegetables.webp',
    icon: 'lucide:package',
    emergency: false,
    featured: false,
    process: [
      { title: 'Consultation', arTitle: 'استشارة', description: 'Tell us what you need, how much, and how often. We discuss your requirements and recommend the best options.', arDescription: 'أخبرنا بما تحتاجه وكمية ومتى. نناقش متطلباتك ونوصي بأفضل الخيارات.' },
      { title: 'Custom Quotation', arTitle: 'عرض سعر مخصص', description: 'We provide a detailed quote with competitive bulk pricing based on your volume and frequency of orders.', arDescription: 'نقدم عرض سعر مفصل بأسعار جملة تنافسية بناءً على حجمك وتكرار طلباتك.' },
      { title: 'Scheduled Supply', arTitle: 'إمداد مجدول', description: 'Set up daily, weekly, or on-demand deliveries. We ensure consistent supply so you never run out of fresh produce.', arDescription: 'قم بإعداد توصيلات يومية أو أسبوعية أو عند الطلب. نضمن إمداداً مستمراً حتى لا تنفد منك المنتجات الطازجة أبداً.' },
      { title: 'Ongoing Support', arTitle: 'دعم مستمر', description: 'Your dedicated account manager adjusts orders as your needs change. Flexible, reliable, and always fresh.', arDescription: 'مدير حسابك المخصص يعدل الطلبات مع تغير احتياجاتك. مرن وموثوق وطازج دائماً.' },
    ],
    priceRanges: [
      { label: 'Small Bulk (10-50kg)', arLabel: 'جملة صغيرة (10-50 كجم)', min: 100, max: 500, unit: 'per order', arUnit: 'لكل طلب' },
      { label: 'Medium Bulk (50-200kg)', arLabel: 'جملة متوسطة (50-200 كجم)', min: 400, max: 1500, unit: 'per order', arUnit: 'لكل طلب' },
      { label: 'Large Bulk (200kg+)', arLabel: 'جملة كبيرة (200+ كجم)', min: 1200, max: 5000, unit: 'per order', arUnit: 'لكل طلب' },
    ],
    keywords: ['bulk fruits', 'bulk vegetables', 'wholesale produce', 'bulk orders Abu Dhabi', 'restaurant supply'],
    relatedServices: ['restaurant-kitchen-supply', 'fresh-produce-delivery', 'pre-order-pickup'],
  },
  {
    slug: 'restaurant-kitchen-supply',
    name: 'Restaurant & Kitchen Supply',
    arName: 'توريد المطاعم والمطابخ',
    shortName: 'Restaurant Supply',
    arShortName: 'توريد مطاعم',
    description:
      'Fresh produce supply for restaurants, catering kitchens, cafeterias, and food businesses. Reliable daily deliveries of premium-quality fruits and vegetables that keep your kitchen running smoothly.',
    arDescription: 'توريد منتجات طازجة للمطاعم ومطابخ التموين والمقاصف وشركات الأغذية. توصيلات يومية موثوقة من الفواكه والخضروات الممتازة التي تبقي مطبخك يعمل بسلاسة.',
    image: '/images/vegetable-counter.webp',
    icon: 'lucide:chef-hat',
    emergency: false,
    featured: false,
    process: [
      { title: 'Kitchen Assessment', arTitle: 'تقييم المطبخ', description: 'We visit your kitchen or restaurant to understand your menu, volume needs, and quality standards.', arDescription: 'نزور مطبخك أو مطعمك لفهم قائمتك واحتياجات الحجم ومعايير الجودة.' },
      { title: 'Menu-Aligned Sourcing', arTitle: 'توريد متوافق مع القائمة', description: 'We source produce that matches your cuisine requirements, from Arabic and Indian to Continental and Asian.', arDescription: 'نورد منتجات تتوافق مع متطلبات مطبخك، من العربي والهندي إلى القاري والآسيوي.' },
      { title: 'Daily Fresh Delivery', arTitle: 'توصيل طازج يومي', description: 'Scheduled morning deliveries ensure your kitchen starts each day with the freshest ingredients available.', arDescription: 'توصيلات الصباح المجدولة تضمن أن يبدأ مطبخك كل يوم بأ freshest المكونات المتاحة.' },
      { title: 'Quality Partnership', arTitle: 'شراكة جودة', description: 'We build long-term relationships with our restaurant partners, adjusting supply as menus and seasons change.', arDescription: 'نبني علاقات طويلة الأمد مع شركائنا من المطاعم، ونعدل الإمداد مع تغير القوائم والمواسم.' },
    ],
    priceRanges: [
      { label: 'Cafeteria Supply', arLabel: 'توريد مقصف', min: 200, max: 1000, unit: 'per week', arUnit: 'أسبوعياً' },
      { label: 'Restaurant Supply', arLabel: 'توريد مطعم', min: 500, max: 3000, unit: 'per week', arUnit: 'أسبوعياً' },
      { label: 'Catering Supply', arLabel: 'توريد تموين', min: 1000, max: 8000, unit: 'per event', arUnit: 'لكل مناسبة' },
    ],
    keywords: ['restaurant supply', 'kitchen supply', 'catering produce', 'food business vegetables', 'restaurant fruits Abu Dhabi'],
    relatedServices: ['bulk-orders', 'fresh-produce-delivery', 'fresh-vegetables'],
  },
  {
    slug: 'pre-order-pickup',
    name: 'Pre-Order & Pickup',
    arName: 'طلب مسبق واستلام',
    shortName: 'Pre-Order',
    arShortName: 'طلب مسبق',
    description:
      'Customers can pre-order fresh produce and collect from the shop. Save time by ordering ahead, and we will have everything ready and packed for quick pickup at your convenience.',
    arDescription: 'يمكن للعملاء الطلب مسبقاً من المنتجات الطازجة واستلامها من المتجر. وفر الوقت بالطلب مسبقاً، وسنجهز كل شيء ونغلفه للاستلام السريع في وقت يناسبك.',
    image: '/images/selecting-vegetables.webp',
    icon: 'lucide:shopping-bag',
    emergency: false,
    featured: false,
    process: [
      { title: 'Send Your List', arTitle: 'أرسل قائمتك', description: 'Message us on WhatsApp or call with your shopping list. Include quantities and any special preferences.', arDescription: 'راسلنا على واتساب أو اتصل بقائمة مشترياتك. أضف الكميات وأي تفضيلات خاصة.' },
      { title: 'Confirmation', arTitle: 'تأكيد', description: 'We confirm availability, total price, and pickup time. No waiting, no surprises when you arrive.', arDescription: 'نؤكد التوفر والسعر الإجمالي ووقت الاستلام. لا انتظار ولا مفاجآت عند وصولك.' },
      { title: 'Picking & Packing', arTitle: 'اختيار وتغليف', description: 'Our team selects the best items from our fresh stock and packs them neatly for easy collection.', arDescription: 'فريقنا يختار أفضل الأصناف من مخزوننا الطازج ويغلفها بإتقان للاستلام السهل.' },
      { title: 'Quick Pickup', arTitle: 'استلام سريع', description: 'Arrive at our shop on Al Ithmid St and collect your pre-packed order. Fast, convenient, and always fresh.', arDescription: 'تفضل إلى متجرنا في شارع الإثمد واستلم طلبك المغلف مسبقاً. سريع ومريح وطازج دائماً.' },
    ],
    priceRanges: [
      { label: 'Small Order', arLabel: 'طلب صغير', min: 0, max: 0, unit: 'No extra charge', arUnit: 'بدون رسوم إضافية' },
      { label: 'Large Pre-Order', arLabel: 'طلب مسبق كبير', min: 0, max: 0, unit: 'No extra charge', arUnit: 'بدون رسوم إضافية' },
      { label: 'Scheduled Weekly Pre-Order', arLabel: 'طلب مسبق أسبوعي مجدول', min: 0, max: 0, unit: 'Discounted pricing available', arUnit: 'أسعار مخفضة متاحة' },
    ],
    keywords: ['pre-order produce', 'pickup vegetables', 'order fruits online', 'WhatsApp order Abu Dhabi', 'pre-order pickup'],
    relatedServices: ['fresh-produce-delivery', 'bulk-orders', 'fresh-fruits'],
  },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((service) => service.slug === slug);
}

export function getServiceName(slug: string): string {
  const service = getServiceBySlug(slug);
  if (service) return service.name;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.emergency);
}

export function getFeaturedServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.featured);
}

export function getRelatedServices(slug: string): ServiceType[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedServices
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is ServiceType => s !== undefined);
}
