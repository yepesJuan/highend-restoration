# HighEnd Restoration Website

## Project Overview
Complete website rebuild for a family-owned restoration business serving South Florida for 20+ years.

**Live URL:** https://highend-restoration.vercel.app
**Domain:** highendrestoration.org (pending DNS setup)

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- HubSpot CRM (contact form)
- Vercel hosting

## Key Files & Structure
```
/app                    → Pages (Next.js App Router)
/components/layout      → Header, Footer, FloatingCallButton
/components/sections    → Hero, ServicesGrid, ContactSection, etc.
/components/ui          → ContactForm, ImageGallery
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

## Service Areas (3)
- Broward County
- Palm Beach County
- West Palm Beach

## Pages (33 total)
- Homepage, About, Contact, Services hub
- 6 individual service pages
- 18 local SEO pages (6 services × 3 areas)
- Sitemap.xml, robots.txt

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
- [ ] Connect custom domain in Vercel dashboard
- [ ] Set up Google Analytics (need GA4 Measurement ID)
- [ ] Add Google Search Console verification

## Design Decisions
- **Style:** Warm & approachable (family business feel)
- **Colors:** Terracotta accent (#C17F59), Warm charcoal (#2D3436), Sage green (#7D9F85)
- **Mobile:** Floating call button, touch-friendly targets
- **SEO:** Full local SEO with schema markup and location-specific pages
