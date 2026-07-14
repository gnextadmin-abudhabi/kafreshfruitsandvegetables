# Instructions for Hermes Agent — KA Fresh Website Edits

## Agent Role
You manage edits to the KA Fresh Fruits & Vegetables website via Instagram chat commands. You have access to the GitHub repository and Cloudflare deployment.

---

## Repository Info

| Item | Value |
|---|---|
| **GitHub Repo** | `https://github.com/gnextadmin-abudhabi/kafreshfruitsandvegetables` |
| **Working Directory** | `ka-vegetables/` |
| **Main Branch** | `main` (live production) |
| **New Branch Format** | `edit-[description]-[date]` e.g., `edit-add-fruits-jul02` |
| **Cloudflare Project** | `kafreshfruitsandvegetables` |
| **Live Domain** | `https://kavegetables.com` |

---

## CRITICAL RULE: Always Use a New Branch

**NEVER push directly to `main`.** Always:
1. Create a new branch from `main`
2. Make edits
3. Push the branch to GitHub
4. Build and deploy from the new branch to Cloudflare
5. Share the preview URL with the user for approval
6. Only merge to `main` after user approval

---

## Adding Products to the Product Catalog

### Step 1: Pull latest code and create branch

```bash
cd ka-vegetables
git checkout main
git pull origin main
git checkout -b edit-[description]-$(date +%b%d | tr '[:upper:]' '[:lower:]')
```

### Step 2: Add product images

Place new product images in:
```
ka-vegetables/public/images/
```

**Image requirements:**
- Format: `.webp`
- Size: ~600×600px (square)
- Filename: descriptive, lowercase, hyphens
- Example: `red-apples.webp`, `banana-bunch.webp`

If user provides non-WebP images, convert them:
```bash
# Install cwebp if needed, or use online converter
# Save final image as .webp in public/images/
```

### Step 3: Edit the product data file

Open:
```
ka-vegetables/src/data/products.ts
```

Add new product objects to the `products` array. **Every product MUST have both English and Arabic fields.**

**Full product template:**

```typescript
{
  id: 'unique-slug-no-spaces',
  name: 'English Product Name',
  arName: 'الاسم العربي',
  category: 'vegetables',      // Options: vegetables | fruits | leafy-greens | herbs
  arCategory: 'الخضروات',       // Match the category
  price: 5.5,                   // Number, no currency symbol
  arPrice: '٥٫٥٠',              // Arabic numerals with Arabic decimal point
  unit: 'kg',                   // Options: kg | g | piece | bunch
  arUnit: 'كجم',                // Arabic unit: كجم | غرام | حبة | باقة
  image: '/images/filename.webp',
  badge: 'Optional Badge Text', // Optional. Options: Best Seller, Fresh Daily, Seasonal, Premium, Value Pack, Crisp & Fresh, Aromatic
  arBadge: 'شارة بالعربية',      // Optional Arabic badge
  badgeColor: 'bg-brand-700',   // Tailwind bg class for badge color
  inStock: true,                // true or false
},
```

**Category reference:**
| English slug | Arabic name |
|---|---|
| `vegetables` | `الخضروات` |
| `fruits` | `الفواكه` |
| `leafy-greens` | `الأوراق الخضراء` |
| `herbs` | `الأعشاب` |

**Unit reference:**
| English | Arabic |
|---|---|
| `kg` | `كجم` |
| `g` | `غرام` |
| `piece` | `حبة` |
| `bunch` | `باقة` |

**Badge color reference:**
| Badge type | Color class |
|---|---|
| Best Seller | `bg-amber-500` |
| Fresh Daily | `bg-brand-700` |
| Seasonal | `bg-orange-500` |
| Premium | `bg-brand-800` |
| Value Pack | `bg-orange-500` |
| Crisp & Fresh | `bg-brand-600` |
| Aromatic | `bg-brand-500` |

### Step 4: Build the site

```bash
cd ka-vegetables
npm run build
```

**If build fails:**
- Check for TypeScript errors in the terminal
- Ensure all commas and brackets are correct in `products.ts`
- Ensure `id` values are unique
- Ensure `image` paths start with `/images/`

### Step 5: Commit and push to new branch

```bash
cd ka-vegetables
git add -A
git commit -m "edit: add [product names] to product catalog"
git push origin [branch-name]
```

### Step 6: Deploy to Cloudflare Pages (preview)

Deploy from the new branch to get a preview URL:

```bash
cd ka-vegetables
npx wrangler pages deploy dist --project-name kafreshfruitsandvegetables --branch [branch-name]
```

This creates a preview URL like:
```
https://[hash].kafreshfruitsandvegetables.pages.dev
```

**Share this preview URL with the user** for approval before merging.

### Step 7: After user approval — deploy to production

Only do this after user says "approve" or "make it live":

```bash
cd ka-vegetables
git checkout main
git merge [branch-name]
git push origin main
npm run build
npx wrangler pages deploy dist --project-name kafreshfruitsandvegetables --branch main
```

Verify live:
```bash
curl -s -o /dev/null -w "%{http_code}" https://kavegetables.com/products/
```
Should return `200`.

---

## Editing Existing Products

Same process as adding, but:
1. Find the existing product in `src/data/products.ts`
2. Edit the fields
3. Do NOT change the `id` unless the user specifically asks
4. Follow Steps 4-7 above

---

## Adding Product Images Only (No Data Changes)

If user sends images to add to existing products:

1. Save images to `ka-vegetables/public/images/`
2. Update the `image` field in `products.ts` for the relevant product
3. Build, commit, push, deploy preview

---

## Removing Products

1. Delete the product object from `src/data/products.ts`
2. Optionally delete the image from `public/images/` (only if no other product uses it)
3. Build, commit, push, deploy preview

---

## Emergency Rollback (If Something Breaks)

If the live site breaks after deployment:

```bash
cd ka-vegetables
git checkout main
git log --oneline -5          # Find last good commit hash
git revert [bad-commit-hash]  # Or git reset --hard [good-commit-hash]
git push origin main --force  # Only if reset used
npm run build
npx wrangler pages deploy dist --project-name kafreshfruitsandvegetables --branch main
```

---

## Key File Paths (Memorize)

| Task | File Path |
|---|---|
| Add/edit products | `ka-vegetables/src/data/products.ts` |
| Add product images | `ka-vegetables/public/images/` |
| Product catalog page | `ka-vegetables/src/pages/products.astro` |
| Business info (phone, hours) | `ka-vegetables/src/data/business.ts` |
| Services data | `ka-vegetables/src/data/serviceTypes.ts` |
| Areas data | `ka-vegetables/src/data/serviceAreas.ts` |
| Header component | `ka-vegetables/src/components/Header.astro` |
| Footer component | `ka-vegetables/src/components/Footer.astro` |
| Site layout (SEO, scripts) | `ka-vegetables/src/layouts/BaseLayout.astro` |
| Contact form API | `ka-vegetables/functions/api/contact.ts` |
| Global styles | `ka-vegetables/src/styles/global.css` |
| Security headers | `ka-vegetables/public/_headers` |
| Redirect rules | `ka-vegetables/public/_redirects` |

---

## Brand Colors (For Consistency)

| Name | Hex | Tailwind |
|---|---|---|
| Forest Green | #047B33 | `brand-700`, `brand-800` |
| Leaf Green | #62B410 | `brand-500`, `brand-600` |
| Carrot Orange | #F47C00 | `amber-500`, `orange-500` |
| Cream Background | #F5F0E8 | `stone-50` |
| Dark Text | #1C1917 | `stone-900` |

---

## Bilingual Rule

**Every text shown to users must have both English and Arabic.**

For static text, use `data-i18n` attributes:
```html
<span data-i18n
  data-i18n-en="English text"
  data-i18n-ar="النص العربي">
  English text
</span>
```

For dynamic text from data files, use `.en-text` / `.ar-text` spans:
```html
<span class="en-text">{englishValue}</span>
<span class="ar-text hidden">{arabicValue}</span>
```

The JavaScript in `BaseLayout.astro` and `Header.astro` handles toggling visibility based on `localStorage.getItem('ka-lang')`.

---

## Common Commands Quick Reference

```bash
# Development server
npm run dev

# Build for production
npm run build

# Deploy preview (new branch)
npx wrangler pages deploy dist --project-name kafreshfruitsandvegetables --branch [branch-name]

# Deploy production (main branch only)
npx wrangler pages deploy dist --project-name kafreshfruitsandvegetables --branch main

# Check live site status
curl -s -o /dev/null -w "%{http_code}" https://kavegetables.com/

# Check product page
curl -s -o /dev/null -w "%{http_code}" https://kavegetables.com/products/
```

---

## Communication Format

When user sends a product list via Instagram, format your response like:

```
✅ Added [N] products to the catalog:
1. [English Name] / [Arabic Name] — AED [price]/[unit]
2. ...

🔗 Preview: https://[hash].kafreshfruitsandvegetables.pages.dev/products/

Reply "approve" to make it live on kavegetables.com
```

---

## Summary Checklist for Every Edit

- [ ] Create new branch from `main`
- [ ] Make edits in `src/data/products.ts` (and images in `public/images/`)
- [ ] Build succeeds (`npm run build`)
- [ ] Commit with descriptive message
- [ ] Push to new branch on GitHub
- [ ] Deploy preview to Cloudflare
- [ ] Share preview URL with user
- [ ] **Wait for user approval**
- [ ] Only then: merge to `main` and deploy production
- [ ] Verify live at `https://kavegetables.com`
