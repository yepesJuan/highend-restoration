# HighEnd Restoration Website Redesign

## Overview

Complete rebuild of highendrestoration.org using modern tech stack. Family-owned restoration business serving South Florida for 16 years.

## Business Context

- **Company:** HighEnd Restoration
- **Services:** Water damage, fire restoration, mold remediation, moisture inspection, smoke/odor removal, decontamination
- **Service Areas:** Broward County, Palm Beach, West Palm Beach
- **Experience:** 16 years
- **Contact:** 305-989-5986, highendrestoration1@gmail.com
- **Domain:** highendrestoration.org

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel deployment
- HubSpot CRM (form submissions)

## Design Direction

**Style:** Warm & Approachable
- Family business feel
- Earthy, trustworthy colors
- Friendly, not corporate

**Color Palette:**

| Role | Color | Hex |
|------|-------|-----|
| Primary | Warm Charcoal | #2D3436 |
| Secondary | Warm White | #FAF9F7 |
| Accent | Terracotta | #C17F59 |
| Trust | Sage Green | #7D9F85 |
| Water | Blue | #4A9BD9 |
| Fire | Orange-Red | #E85D3B |
| Mold | Green | #5B8C5A |
| Biohazard | Gold | #D4A84B |

**Typography:** Inter (clean, readable, friendly)

**Design Elements:**
- Rounded corners
- Subtle shadows
- Generous whitespace
- Mobile-first responsive
- Floating call button on mobile

## Site Architecture

### Core Pages (5)
- `/` - Homepage
- `/about` - About Us
- `/contact` - Contact
- `/services` - Services Hub
- `/services/[slug]` - Individual Service Pages (6)

### Services (6)
1. Water Damage Restoration
2. Fire Restoration
3. Mold Restoration
4. Moisture & Mold Inspection
5. Smoke & Odor Removal
6. Decontamination

### Local SEO Pages (18)
Each service × each location:
- `/services/[service]/broward-county`
- `/services/[service]/palm-beach`
- `/services/[service]/west-palm-beach`

**Total: 29 pages**

## Page Layouts

### Homepage
1. Hero - Full-width image, headline, CTA, phone number
2. Trust Bar - 24/7, 16 years, family-owned, licensed
3. Services Grid - 6 cards with icons
4. Why Choose Us - 4 key differentiators
5. Contact Section - Simple form + phone
6. Footer

### Service Pages
1. Hero with service-specific image
2. Problem/Solution explanation
3. Process steps (1-4)
4. Photo gallery (inline)
5. Service area callout with location links
6. CTA section

### Local SEO Pages
- Same as service pages
- Location name in headline
- Local landmarks/cities mentioned
- Schema markup for local business

## Features

### Contact Form
- Fields: Name, Email, Phone, Message
- Submits to HubSpot CRM
- Hub ID: 245035855
- Form ID: a0578f9a-8455-4bbc-a736-296cfe6055ff

### Mobile Experience
- Floating call button (bottom-right)
- Touch-friendly tap targets (48px min)
- Collapsible navigation
- Optimized images

### SEO
- Dynamic metadata per page
- JSON-LD LocalBusiness schema
- Sitemap generation
- robots.txt
- Open Graph images
- Location-specific pages

### Analytics
- Google Analytics 4
- Google Search Console
- Conversion tracking (form submissions, phone clicks)

## Project Structure

```
/app
  /page.tsx                    → Homepage
  /about/page.tsx              → About Us
  /contact/page.tsx            → Contact
  /services/page.tsx           → Services Hub
  /services/[slug]/page.tsx    → Individual Service
  /services/[slug]/[area]/page.tsx → Local SEO Pages
  /layout.tsx                  → Root layout
  /globals.css                 → Tailwind base

/components
  /ui                          → Buttons, inputs, cards
  /layout                      → Header, Footer, FloatingCallButton
  /sections                    → Hero, Services, ContactForm, etc.

/lib
  /data                        → Services data, areas data
  /utils                       → Helper functions

/public
  /images                      → Service photos
  /logo.png                    → Logo
```

## Assets Needed

- [x] Logo: `Highend Restoration.png` (provided)
- [ ] Service photos (6 categories - user will provide)
- [ ] About Us content (draft from current site or user provides)

## Performance Targets

- Lighthouse: 95+ all metrics
- First Contentful Paint: <1.5s
- Mobile-friendly: 100%

## Integration Details

### HubSpot Form Submission
```typescript
// POST to HubSpot Forms API
const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/245035855/a0578f9a-8455-4bbc-a736-296cfe6055ff`;
```

### Analytics Setup
- GA4 Measurement ID: (to be provided)
- Search Console: (verify via DNS or file)

---

*Design approved: 2026-01-30*
