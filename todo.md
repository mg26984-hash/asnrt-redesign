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
