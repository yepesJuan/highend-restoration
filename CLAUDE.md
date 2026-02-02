# HighEnd Restoration Website

## Project Overview
Complete website rebuild for a family-owned restoration business serving South Florida for 20+ years.

**Live URL:** https://www.highendrestoration.org
**Domain:** highendrestoration.org ✓

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript 5.4
- Tailwind CSS
- next-intl (i18n - English/Spanish)
- HubSpot CRM (contact form)
- Vercel hosting (Node.js 24)

## Key Files & Structure
```
/app/[locale]           → Locale-aware pages (Next.js App Router)
/components/layout      → Header (with language switcher), Footer, FloatingCallButton
/components/sections    → Hero, ServicesGrid, ContactSection, etc.
/components/ui          → ContactForm, ImageGallery
/i18n                   → next-intl config (routing.ts, navigation.ts, request.ts)
/messages               → Translation files (en.json, es.json)
/lib/data              → services.ts, areas.ts, company.ts, images.ts
/public/images         → Service photos organized by category
/docs/plans            → Design documentation
```

## HubSpot Integration
- Contact form submissions go directly to HubSpot CRM
- Credentials stored in `.env.local` (see `.env.example` for template)

## Services (6)
1. Water Damage Restoration
2. Fire Restoration
3. Mold Restoration
4. Moisture & Mold Inspection
5. Smoke & Odor Removal
6. Decontamination

## Service Areas (4)
- Broward County
- Palm Beach County
- West Palm Beach
- Miami-Dade County

## Pages (80 total - bilingual)
- Homepage, About, Contact, Services hub (x2 locales)
- 6 individual service pages (x2 locales)
- 24 local SEO pages (6 services × 4 areas) (x2 locales)
- Sitemap.xml, robots.txt
- **Languages:** English (/en), Spanish (/es)

## Contact Info
- **Phone:** 305-989-5986
- **Email:** highendrestoration1@gmail.com
- **Instagram:** @highend_restoration

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
vercel --prod    # Deploy to Vercel
```

## Pending Tasks

### Manual/Business Tasks
- [ ] Have native Spanish speaker review translations
- [ ] Test contact form submission in Spanish
- [ ] Verify Google Analytics is tracking (check Realtime in GA4)

### Optional Enhancements
- [ ] Add testimonials/reviews section
- [ ] Add before/after project gallery

## Completed (Session Feb 1, 2026)

### Infrastructure
- [x] Connect custom domain in Vercel dashboard
- [x] Set up Google Analytics (GA4: G-4ST9R05VNJ)
- [x] Add Google Search Console verification
- [x] Added Node/npm engine requirements to package.json

### i18n & SEO
- [x] Language switcher working on all pages
- [x] hreflang tags verified
- [x] Sitemap includes both locales (72 URLs)
- [x] Spanish-specific keywords in metadata
- [x] JSON-LD schemas render in both languages
- [x] Auto-redirect based on browser language

### Miami-Dade County Expansion
- [x] Added as 4th service area (24 new local SEO pages)
- [x] Updated all references (hero, about, services, footer, keywords)
- [x] Service areas now clickable links throughout site

### Performance Optimizations
- [x] Compressed all images to WebP (60% smaller)
- [x] Hero carousel lazy loads 3 images at a time
- [x] Lighthouse scores: 90%+ performance on all pages
- [x] Added aria-labels for accessibility (96% score)

### Bug Fixes
- [x] Fixed white button text on colored backgrounds
- [x] Fixed email overflow on mobile (contact page)

### Framework Upgrade
- [x] Upgraded to Node.js 24 / npm 11 (engine requirements)
- [x] Upgraded to Next.js 16.1.6 (Turbopack stable)
- [x] Upgraded to React 19
- [x] Upgraded TypeScript to 5.4
- [x] Updated framer-motion to v12 (React 19 compatible)

## Design Decisions
- **Style:** Warm & approachable (family business feel)
- **Colors:** Terracotta accent (#C17F59), Warm charcoal (#2D3436), Sage green (#7D9F85)
- **Mobile:** Floating call button, touch-friendly targets
- **SEO:** Full local SEO with schema markup and location-specific pages
