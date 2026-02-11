# ASNRT Redesign — Tasks

## Phase 1: Upgrade to Full-Stack
- [x] Run webdev_add_feature to upgrade to web-db-user
- [x] Set up database schema for contact form and membership applications

## Phase 2: Rebalance Home Page
- [x] Hero section: focus on society mission, not calculators
- [x] Replace Calculator Hub panel with Quick Access panel (Education, Events, Academic, Contact)
- [x] Add "Tools & Services" section with nephrocalcs.xyz and otccalcs.com buttons
- [x] Stats bar: focus on society stats (countries, years, members) not calculator counts
- [x] Remove calculator spotlight section, replace with society services

## Phase 3: Education Page with Real Materials
- [x] Rewrite Education page to show actual PDF resources from constants
- [x] Show real titles, authors, events, and download links
- [x] Handle sub-categories (Nephrology, Dialysis, Transplantation)

## Phase 4: Update Calculator References
- [x] Header: replace single calculator CTA with dropdown for both calc sites
- [x] Footer: update calculator banner to show both tools
- [x] CalculatorFAB: update to show both calc links
- [x] Membership page: fix CALCULATOR_URL import
- [x] About page: update calculator references

## Phase 5: Congress/Events Page
- [x] Create Events page with upcoming conferences section
- [x] Add past events archive
- [x] Add registration links and contact info
- [x] Add route in App.tsx

## Phase 6: Contact & Membership Forms
- [x] Create backend API routes for contact form and membership application
- [x] Create database tables for submissions
- [x] Build Contact page with working form
- [x] Build Membership application form with country dropdown
- [x] Add success/error handling
- [x] Write vitest tests for contact and membership endpoints (13 tests passing)

## Phase 7: Bug Fixes
- [x] Fix duplicate "Home" in breadcrumbs

## Phase 8: Breadcrumb Navigation Audit & Enhancement
- [x] Audit all pages for breadcrumb presence and correctness
- [x] Fix any missing or broken breadcrumbs (none found — all 20 pages verified)
- [x] Ensure breadcrumbs work on all sub-pages (education/patient, education/nurses, etc.)

## Phase 9: Consolidate Calculator Links
- [x] Merge OTCCalcs and NephroCalcs into single "NephroCalcs" link (nephrocalcs.xyz)
- [x] Update Header, Footer, FAB, Home, About, Membership pages
- [x] Remove all references to otccalcs.com

## Phase 10: Fix Education Material Links
- [x] Audit all education PDF links for broken URLs (13 broken found)
- [x] Fix or replace broken PDF download links (6 Arabic patient PDFs fixed, 1 removed as 404 on original site)
- [x] Test all education material downloads work (97/97 working, 0 broken)

## Phase 11: Mobile-First Design Revolution
- [x] Redesign mobile navigation (hamburger menu, touch-friendly)
- [x] Optimize hero section for mobile
- [x] Improve card layouts and touch targets for mobile (44px min touch targets)
- [x] Ensure all forms are mobile-friendly
- [x] Improve typography and spacing for small screens
- [x] Test on mobile viewport sizes

## Phase 12: Site-Wide Search Feature
- [x] Create SearchDialog component with command palette (cmdk) style
- [x] Index all site content: education materials, news, pages, guidelines, societies, calculators
- [x] Implement fuzzy keyword matching with categorized results
- [x] Add search trigger button in header (desktop + mobile)
- [x] Support keyboard shortcut (Ctrl+K / Cmd+K) to open search
- [x] Show categorized results with icons and navigation links
- [x] Test search across all content types (verified with "dialysis" and "kidney" queries)

## Phase 13: Fix Broken Gallery Image
- [x] Fix broken image for "ASNRT ESNT 28 Feb — 3 March 2017" gallery card (verified: URL asnrt-esnt-2027 loads correctly)

## Phase 14: Logo Size & Gallery Fix
- [x] Make logo bigger on mobile while keeping elegant look (h-14 w-14 with rounded-lg)
- [x] Fix broken ESNT 2017 gallery image (already fixed URL, verify rendering)

## Phase 15: Offline-First PWA
- [x] Create Service Worker with progressive caching (cache-first for assets, network-first for API)
- [x] Register Service Worker in main entry without blocking first paint
- [x] Add PWA web manifest with ASNRT branding (icons, theme color, name)
- [x] Pre-cache app shell (HTML, CSS, JS bundles) on install
- [x] Progressively cache all page routes, images, and education PDFs after first load
- [x] Cache external images (gallery, member photos) via runtime caching
- [x] Add offline indicator UI so users know when they're offline
- [x] Add offline fallback page for uncached routes
- [x] Ensure first-load speed is not compromised (lazy SW registration, no blocking)
- [x] Write vitest tests for SW registration and offline behavior (14 tests passing)

## Phase 16: Image Compression for Faster Loading
- [x] Audit all image URLs used across the site (29 images found)
- [x] Download and compress all images (WebP conversion, quality optimization)
- [x] Re-upload compressed images to S3 (29/29 uploaded)
- [x] Update all image URLs in constants.ts, manifest.json, and index.html
- [x] Verify all images render correctly after compression
- [x] Measure size reduction: 17.73 MB -> 1.01 MB (94.3% savings)

## Bug Fix: Missing Logo in Header
- [x] Fix ASNRT logo missing from header navigation bar (logo was always present; green circle is Manus dev tool overlay, not visible in production)
- [x] Green avatar circle is Manus dev tool overlay — not visible in production builds
- [x] Replace kidney image with AI-generated elegant 3D kidney illustration with teal glow
