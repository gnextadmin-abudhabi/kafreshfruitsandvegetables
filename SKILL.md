# KA Fresh Fruits & Vegetables — Project Skill

Complete reference for building, maintaining, and extending the KA Fresh website.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5.x (static output) |
| Styling | Tailwind CSS v4 |
| Icons | astro-icon + Lucide |
| Fonts | Inter, Playfair Display, Noto Sans Arabic (Google Fonts) |
| Hosting | Cloudflare Pages |
| Email | Resend API |
| Forms | Cloudflare Pages Functions |
| Analytics | Google Tag Manager |

---

## Project Structure

```
ka-vegetables/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro     # Site header with nav, social, lang toggle
│   │   ├── Footer.astro     # Site footer with map, links, social
│   │   ├── Breadcrumbs.astro
│   │   ├── SeoFaq.astro
│   │   ├── SeoRelatedLinks.astro
│   │   ├── SeoServiceAreas.astro
│   │   └── SeoTestimonials.astro
│   ├── data/                # All data files (TypeScript)
│   │   ├── business.ts      # Business info, contact, hours
│   │   ├── serviceTypes.ts  # 10 service/product types with Arabic
│   │   ├── serviceAreas.ts  # 10 service areas with Arabic
│   │   ├── products.ts      # 15 products with prices (EN/AR)
│   │   ├── seoContent.ts    # Reviews, FAQs, testimonials
│   │   └── images-meta.json # Image metadata
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, SEO, scripts, RTL
│   ├── lib/
│   │   └── urls.ts          # URL helper functions
│   ├── pages/               # Astro pages = routes
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro    # Form + map
│   │   ├── products.astro   # Product catalog with filter
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   └── [service].astro        # 10 pages
│   │   ├── services/[area]/
│   │   │   └── [service].astro        # 100 combo pages
│   │   ├── areas/
│   │   │   ├── index.astro
│   │   │   └── [area].astro           # 10 area pages
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css       # Tailwind imports, animations, RTL
├── functions/
│   └── api/
│       └── contact.ts       # Cloudflare Function for contact form
├── public/
│   ├── images/              # All images (WebP)
│   ├── favicon.ico
│   ├── robots.txt
│   ├── _headers             # Security headers (Cloudflare)
│   └── _redirects           # www redirect rules
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

**Total pages:** 130 (6 fixed + 10 services + 10 areas + 100 combos + 3 blog + 1 products)

---

## Bilingual System (EN/AR)

### Two-tier approach:

**1. Static text** — `data-i18n` attributes
```html
<span data-i18n
  data-i18n-en="Fresh Fruits"
  data-i18n-ar="فواكه طازجة">
  Fresh Fruits
</span>
```
JavaScript in `BaseLayout.astro` replaces `textContent` based on `localStorage.getItem('ka-lang')`.

**2. Dynamic text** — `.en-text` / `.ar-text` spans
```html
<h3>
  <span class="en-text">{service.name}</span>
  <span class="ar-text hidden">{service.arName}</span>
</h3>
```
JavaScript toggles `hidden` class when language switches.

### Data files with Arabic fields:
- `serviceTypes.ts` — `arName`, `arDescription`, `arProcess`, `arPriceRanges`
- `serviceAreas.ts` — `arDescription`
- `products.ts` — `arName`, `arCategory`, `arPrice`, `arUnit`, `arBadge`

### Key files:
- `BaseLayout.astro` — `applyLang()` runs on load + toggle click
- `Header.astro` — `switchLanguage()` function + EN/AR toggle buttons
- `global.css` — `.rtl-active` font family overrides

---

## Adding/Editing Products

Edit `src/data/products.ts`:

```typescript
{
  id: 'unique-slug',
  name: 'English Name',
  arName: 'الاسم العربي',
  category: 'vegetables',     // vegetables | fruits | leafy-greens | herbs
  arCategory: 'الخضروات',
  price: 5.5,
  arPrice: '٥٫٥٠',
  unit: 'kg',
  arUnit: 'كجم',
  image: '/images/filename.webp',
  badge: 'Optional Badge',
  arBadge: 'شارة اختيارية',
  badgeColor: 'bg-brand-700', // Tailwind bg class
  inStock: true,
}
```

Add product images to `public/images/` (WebP format, ~600x600px).

---

## Adding/Editing Services

Edit `src/data/serviceTypes.ts`:

```typescript
{
  slug: 'service-slug',
  name: 'Service Name',
  arName: 'الاسم العربي',
  shortName: 'Short',
  arShortName: 'قصير',
  description: 'Full description...',
  arDescription: 'الوصف الكامل...',
  shortDescription: 'Short...',
  arShortDescription: 'قصير...',
  icon: 'lucide:icon-name',
  image: '/images/filename.webp',
  process: [
    {
      title: 'Step Title',
      arTitle: 'عنوان الخطوة',
      description: 'Step description...',
      arDescription: 'وصف الخطوة...',
    },
  ],
  priceRanges: [
    {
      label: 'Label',
      arLabel: 'التسمية',
      min: 10,
      max: 50,
      unit: 'kg',
      arUnit: 'كجم',
    },
  ],
}
```

---

## Adding/Editing Areas

Edit `src/data/serviceAreas.ts`:

```typescript
{
  slug: 'area-slug',
  name: 'Area Name',
  county: 'Abu Dhabi',
  postcodePrefix: 'ME10',
  lat: 24.4539,
  lng: 54.6206,
  population: 50000,
  responseTime: 'Same day',
  priority: 'primary',     // primary | secondary | tertiary
  nearby: ['nearby-area-1', 'nearby-area-2'],
  description: 'Area description...',
  arDescription: 'وصف المنطقة...',
}
```

---

## Contact Form

**Endpoint:** `/api/contact` (Cloudflare Pages Function)

**Fields:** name, email, phone, service (optional), area (optional), message

**Email sent via:** Resend API
- From: `KA Fresh <contact@gnext.space>`
- To: `kavegetableandfruits@gmail.com`
- Reply-To: customer's email

**Environment variable:** `RESEND_API_KEY` (set in Cloudflare Pages dashboard)

---

## Build & Deploy

### Local development:
```bash
cd ka-vegetables
npm run dev
```

### Build:
```bash
npm run build
```
Output goes to `dist/`.

### Deploy to Cloudflare Pages:
```bash
npx wrangler pages deploy dist --project-name kafreshfruitsandvegetables --branch main
```

### Git workflow:
```bash
git add -A
git commit -m "description"
git push origin main
```

---

## Cloudflare Configuration

### Custom domains:
- `kavegetables.com` ✅ Active
- `www.kavegetables.com` ✅ Active (redirects to root)

### DNS records (in Cloudflare dashboard):
- `@` CNAME → `kafreshfruitsandvegetables.pages.dev` (Proxied)
- `www` CNAME → `kafreshfruitsandvegetables.pages.dev` (Proxied)

### Security headers (`public/_headers`):
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy (restricts sensors/camera/mic)
- Content-Security-Policy

### Environment variables (Cloudflare Pages → Settings → Environment variables):
- `RESEND_API_KEY` = `re_...` (production secret)

---

## Resend Email Setup

**Verified domains in Resend:**
- `autocareabudhabi.com` (original)
- `gnext.space` ✅ Active (used for sending)

**DNS records for gnext.space (in Cloudflare):**
- `resend._domainkey` TXT → DKIM key
- `send` MX → `feedback-smtp.us-east-1.amazonses.com` (priority 10)
- `send` TXT → `v=spf1 include:amazonses.com ~all`

---

## Google Tag Manager

**Container ID:** `GTM-PDL8XGK4`

**Placement:**
- `<head>`: GTM loader script
- `<body>`: `<noscript>` iframe fallback

**Location:** `src/layouts/BaseLayout.astro`

---

## Brand Colors

| Name | Hex | Tailwind |
|---|---|---|
| Forest Green | #047B33 | `brand-700` / `brand-800` |
| Leaf Green | #62B410 | `brand-500` / `brand-600` |
| Carrot Orange | #F47C00 | `amber-500` / `orange-500` |
| Cream | #F5F0E8 | `stone-50` |
| Dark | #1C1917 | `stone-900` |

---

## Common Tasks

### Update a phone number:
Edit `src/data/business.ts` → `phone` and `phoneHref`

### Update business hours:
Edit `src/data/business.ts` → `hours` array

### Add a new page:
1. Create `.astro` file in `src/pages/`
2. Use `BaseLayout` wrapper
3. Add bilingual spans or `data-i18n` attributes
4. Build and deploy

### Update Google Maps location:
1. Get new short link from Google Maps
2. Update iframe `src` in `contact.astro` and `Footer.astro`
3. Update "Open in Google Maps" `href` in both files

### Change email recipient:
Edit `functions/api/contact.ts` → `to: ['newemail@domain.com']`

### Add social media links:
Edit `Header.astro` (desktop + mobile sections) and `Footer.astro`

---

## Performance Tips

- Images are WebP format with `-sm.webp` variants
- Lazy loading on all images below the fold
- `loading="eager"` only on hero images
- Scroll reveal uses IntersectionObserver (not scroll events)
- CSS animations use `transform` and `opacity` only (GPU accelerated)

---

## Troubleshooting

| Issue | Fix |
|---|---|
| Arabic text not showing | Check `data-i18n-ar` attribute exists; verify `Noto Sans Arabic` font loads |
| Mobile menu not opening | Check `mobile-menu-btn` ID matches script; check for JS errors |
| Contact form not sending | Verify `RESEND_API_KEY` env var is set in Cloudflare dashboard |
| Map not showing | Check iframe `src` URL is valid; check CSP allows `frame-src` |
| Build fails | Run `npm install` first; check for TypeScript errors |

---

## Domain & Hosting Checklist

- [ ] Domain registered and DNS in Cloudflare
- [ ] CNAME records pointing to Pages
- [ ] SSL certificate active
- [ ] Resend domain verified
- [ ] GTM container installed
- [ ] Contact form tested
- [ ] Mobile responsive verified
- [ ] Arabic translation tested
- [ ] Social links working
- [ ] Map location correct
