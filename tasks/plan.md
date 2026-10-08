# Implementation Plan: Devpur Cricket Club Frontend Optimization

## Overview
Refactor and optimize the Devpur Cricket Club Next.js frontend demo according to `optimize/work_optimize.md` to accurately represent DCC's identity as a **proud community cricket club representing Devpur Gaam** (operating within the KVO cricket ecosystem) rather than a coaching academy. Highlight community bonding, 2013 heritage, 50+ members, 25+ seasonal leather-ball matches at Matunga Ground, coach Aditya Koli, prominent sponsor showcase with provided PNG logos, live match score access, and memory preservation.

---

## Architectural Decisions
1. **Frontend-Only Static Demo**: Centralize all mock data in `src/lib/data/` with clean TypeScript interfaces so it can later be connected to Sanity CMS without rewriting UI components.
2. **Sponsor Asset Integration**: Copy provided sponsor PNG assets from `optimize/Sponsors Logo PNG` into `public/sponsors/` and build a dedicated `src/lib/data/sponsors.ts` dataset.
3. **Information Architecture Overhaul**: Update navigation and page hierarchy to emphasize Community, Matches, Players, Club Life, Memories, and Sponsors.
4. **Copy & Tone Correction**: Replace all coaching/academy/student terminology with community, member, club practice, and tournament participation language.
5. **Brand Consistency**: Maintain the established DCC color tokens (`--brand-charcoal`, `--brand-orange`, `--brand-copper`, `--brand-gold`, `--brand-cream`, `--brand-black`) and Barlow Condensed / Manrope typography.

---

## Task Breakdown

### Phase 1: Sponsor Assets & Data Architecture
- [ ] **Task 1.1: Consolidate Sponsor PNG Assets**
  - Copy all PNG logos from `optimize/Sponsors Logo PNG` to `public/sponsors/` with clean kebab-case names.
- [ ] **Task 1.2: Sponsor Types & Static Dataset**
  - Add `Sponsor` types to `src/lib/types/content.ts` and create `src/lib/data/sponsors.ts` with official 2026–2029 details from client MOU/onboarding documents.
- [ ] **Task 1.3: Update Club Facts in Datasets**
  - Update `src/lib/data/achievements.ts`, `seasons.ts`, `coaches.ts`, `matches.ts` with verified client facts: Incepted 2013, Devpur Gaam, KVO ecosystem, Matunga Ground, Coach Aditya Koli (Kanga B Division), 2 runners-up trophies, Rank 10 KVO.

### Checkpoint: Phase 1
- Verify all images load properly and TypeScript compiles with zero errors.

---

### Phase 2: Information Architecture & Global Layout
- [ ] **Task 2.1: Navigation Bar Optimization (`SiteHeader.tsx`)**
  - Update nav links to: Home, Club, Club Life, Matches, Players, Memories, Sponsors.
  - Update branding subtitle to: "Representing Devpur Gaam • Est. 2013".
- [ ] **Task 2.2: Footer Redesign (`SiteFooter.tsx`)**
  - Add official tagline: "PLAY • TRAIN • COMPETE • WIN" and "Proudly Representing Devpur Gaam".
  - Include navigation columns, sponsor mention, and club contacts.

### Checkpoint: Phase 2
- Test responsive header/footer across mobile and desktop.

---

### Phase 3: Homepage Redesign (Community-First Narrative)
- [ ] **Task 3.1: Community-First Hero (`HomeHero.tsx`)**
  - Eyebrow: `DEVPUR GAAM • COMMUNITY CRICKET CLUB`.
  - Headline: `More Than Cricket. A Club. A Community.`
  - Subhead: `We train together, compete together, celebrate together, and grow together — representing Devpur Gaam through cricket.`
  - CTAs: `Explore Our Club`, `See Matches`.
  - Feature card with verified facts (Est. 2013, 50+ Members, Matunga Ground).
- [ ] **Task 3.2: Sponsor Showcase Strip (`SponsorShowcaseSection.tsx`)**
  - Create prominent "Proudly Supported by Our Community Partners" strip near the top of the homepage using sponsor PNG logos.
- [ ] **Task 3.3: Matchday Experience & Live Score Hub (`TodayMatchSection.tsx`)**
  - Display Live / Up Next / Latest Result state with simulated Cric Club live score button and sponsor ribbon.
- [ ] **Task 3.4: "Why We Play Together" Community Benefits (`WhyWePlaySection.tsx`)**
  - 6 community pillars: Fitness, Discipline, Friendship, Community, Network, Growth.
- [ ] **Task 3.5: "Life Inside DCC" Club Activities (`ClubLifeSection.tsx`)**
  - Net Practice, Coach-led Skill Development, Fitness & Fielding, Weekend Practice Matches, Tournament Matches, Community Moments.
- [ ] **Task 3.6: Season Journey Timeline (`SeasonJourneySection.tsx`)**
  - October to March/May annual cycle visualization.
- [ ] **Task 3.7: "Cricket Can Open Bigger Doors" Next Level Story (`NextLevelStorySection.tsx`)**
  - Member growth and progression story.
- [ ] **Task 3.8: "Beyond the Boundary" Social & Community Moments (`CommunityMomentsSection.tsx`)**
  - Celebrations, dinners, and member bonding highlights.
- [ ] **Task 3.9: Assemble Homepage (`src/app/page.tsx`)**
  - Reorder sections to strictly match `work_optimize.md` hierarchy.

### Checkpoint: Phase 3
- Verify homepage flow within 5-second client test: community is obvious, no academy vibes, sponsors prominent, live match visible.

---

### Phase 4: Dedicated Sponsors Page & Match Sponsor Integrations
- [ ] **Task 4.1: Create Dedicated `/sponsors` Page (`src/app/sponsors/page.tsx`)**
  - Sponsor partnership narrative, 2026–2029 tenure, match jersey visibility, social media presence, brand logo grid, and partnership contact form/CTA.
- [ ] **Task 4.2: Sponsor Integration in Match Views (`LiveMatchCard.tsx`, `LiveScoreCentre.tsx`)**
  - Add "Supported by" sponsor ribbon to match cards and live match center.

---

### Phase 5: Verification & Quality Assurance
- [x] **Task 5.1: Review and Clean Sub-Pages (`/about`, `/training`, `/players`, `/gallery`)**
  - Ensure zero academy/student wording remains on any page.
- [x] **Task 5.2: Production Build & Lint Validation**
  - Run `npm run build` to verify 100% clean compilation.
- [x] **Task 5.3: Visual & Mobile Responsiveness Verification**
  - Inspect on mobile and desktop viewports.

---

### Phase 8: Admin Panel Implementation (`/admin`)
- [x] **Task 8.1: Header & Footer Isolation**
  - Check `pathname?.startsWith('/admin')` in `SiteHeader.tsx` and `SiteFooter.tsx` so public chrome is excluded from the admin portal.
- [x] **Task 8.2: Dummy Auth Session & Reactive Admin Store**
  - Create `adminAuth.ts`, `adminStore.tsx`, and `apiAdapter.ts` with local persistence, dummy auth tokens, and seeding from `src/lib/data`.
- [x] **Task 8.3: Branded Split-Screen Login View**
  - Left column: DCC brand showcase (crest, taglines, quotes, stats).
  - Right column: Admin credentials form with test helper credentials and quick demo autofill button.
- [x] **Task 8.4: Admin Navigation Shell**
  - Admin layout, sidebar with module navigation badges, top bar with breadcrumbs and user profile/logout.
- [x] **Task 8.5: Admin Operational Modules**
  - Dashboard Overview, Matches & Live Score Manager, Members & Squad Manager, Sponsors & 2026-2029 MOU Tracker, Practice & Training Hub, Seasons & Tournaments, Memories & Gallery, and Inquiries.
- [x] **Task 8.6: Interactive CRUD Modals**
  - Quick action modals for Match, Member, and Sponsor creation and live score updating.
- [x] **Task 8.7: Verification & Build Check**
  - Run `npx tsc --noEmit` and `npm run build`.
