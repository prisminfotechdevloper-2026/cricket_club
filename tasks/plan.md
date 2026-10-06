# Devpur Cricket Club (DCC) — Implementation Plan & Specification

## 1. Executive Summary & Visual Brand Analysis

### Logo Analysis (`public/logo/logo.png`)
- **Emblem Shape**: Traditional sports shield with a black/charcoal beveled outer trim and metallic warm gold/copper framing.
- **Interior Core**: Warm ivory/off-white background (`#FDFDFB` / `#F6F5F3`) creating high contrast with the emblem elements.
- **Monogram**: Prominent interlocking black "DCC" monogram with subtle 3D gold-edged highlights.
- **Typography**: "DEVPUR CRICKET CLUB" in clean, bold, tracked uppercase sans-serif.
- **Sports Motifs**: Crossed wooden cricket bats in warm gold/brass with black grips, anchored by golden wicket stumps and a deep maroon/crimson leather cricket ball (`#7A201B` / `#A40F1F`) with white seam stitching.

### Color Tokens & Palette Strategy
The website will strictly follow a **light, high-end athletic aesthetic** (not a dark mode template and not a generic SaaS theme):
- **Background**: Ivory / warm off-white (`#F6F5F3`, surface: `#FFFFFF`, surface-soft: `#FBFAF8`).
- **Foreground / Text**: Deep charcoal black (`#090A0C`, `#1B1D22`) and muted slate (`#74767D`).
- **Brand Primary Accent**: Warm copper & gold (`#CF7647`, `#EFA267`, `#C68B34`) for primary buttons, active tabs, score card borders, and badges.
- **Cricket Ball & Live Accent**: Deep maroon / red (`#7A201B`, `#A40F1F`) strictly for "LIVE NOW", wickets, and match badges.
- **Borders & Dividers**: Subtle warm stone (`#E8E3DD`, `#D6CEC5`).

### Typography Strategy
- **Headlines, Scores & Athletic Numbers**: `Barlow Condensed` (`@fontsource/barlow-condensed`) for bold, punchy cricket scoreboards, match cards, and section banners.
- **Body, UI & Navigation**: `Manrope` (`@fontsource/manrope`) for editorial storytelling, commentary feeds, and high readability.
- **No generic emojis or AI clipart**: All icons powered by `lucide-react`.

---

## 2. Scope Boundaries

- **In Scope**:
  - Full client-facing frontend demo for Devpur Cricket Club.
  - Complete Next.js App Router structure with TypeScript and Tailwind CSS v4.
  - 100% mobile-first responsive layout (optimized for 360px, 390px, 768px, 1280px+).
  - High-priority Today's Live Match card on the homepage and interactive Live Score preview page (`/matches/dcc-vs-royal-xi`).
  - Comprehensive modules: Matches, Players, Training & Coaches, Tournaments, Seasons archive, Achievements, and Photo/Video Gallery with Lightbox modal.
  - Robust mock data structures (`src/lib/data/*.ts`) and TypeScript contracts (`src/lib/types/*.ts`) pre-aligned with future Sanity CMS schemas.
- **Out of Scope (Explicitly Deferred)**:
  - No database (PostgreSQL/Prisma), no custom live-scoring backend engine, no Sanity studio, no WebSockets, no authentication/admin dashboards.

---

## 3. Capability Map & Module Architecture

```
                    Devpur Cricket Club (DCC)
                               │
       ┌───────────────────────┼───────────────────────┐
       │                       │                       │
 1. Training             2. Matches              3. Club Legacy
  - Coaching Staff        - Today's Live Match    - Season Archives (Year-wise)
  - Net Drills/Videos     - Match Center          - Photo/Video Galleries
  - Player Development    - Live Score Experience - Trophy & Player Honors
       │                       │                       │
       └───────────────────────┴───────────────────────┘
                               │
                               ▼
                       4. Player Hub
                        - Player Directory
                        - Profiles & Detailed Stats
```

---

## 4. Phased Implementation Roadmap

Implementation will proceed strictly phase by phase upon user confirmation.

### Phase 1: Project Foundations, Design System & Mock Datasets
- **Goal**: Establish styling tokens, dependencies (`lucide-react`), TypeScript types, realistic datasets, and core layout components (Header, Footer, Mobile Navigation).
- **Tasks**:
  1. Install `lucide-react`.
  2. Configure `globals.css` with Tailwind v4 theme variables, typography utilities, and container classes.
  3. Define TypeScript contracts in `src/lib/types/` (`cricket.ts`, `content.ts`).
  4. Create realistic datasets in `src/lib/data/` (`players.ts`, `matches.ts`, `coaches.ts`, `training.ts`, `tournaments.ts`, `seasons.ts`, `gallery.ts`, `achievements.ts`).
  5. Build layout shell: `SiteHeader` (sticky, desktop menu + mobile slide drawer, live score shortcut), `SiteFooter`, and common atoms (`LiveBadge`, `SectionHeading`, `Container`).
- **Verification**: `npm run build` passes; header and footer render cleanly on mobile and desktop.

### Phase 2: Homepage & Today's Match Experience
- **Goal**: Deliver the primary client demo showcase screen.
- **Tasks**:
  1. **Hero Section**: Prominent DCC logo emblem, punchy club headline ("Train With Purpose. Play With Pride. Build The Legacy."), quick CTAs.
  2. **Today's Live Match Card**: Prominent card featuring the simulated live match (DCC vs Royal XI, JPL 2026, DCC 146/4 in 17.2 overs), live pulse indicator, and "View Live Score" button.
  3. **Next Match & Stats Strip**: Secondary match preview and season key numbers strip (matches played, top run scorer, top wicket taker).
  4. **Club Story & Training Highlights**: Philosophy teaser, 2 featured drills, coach spotlight.
  5. **Featured Players Carousel/Grid**: Cards showing role, recent stats, and link to profile.
  6. **Current Season Achievements & Memories Preview**: Highlight cards and recent tournament snapshots.
- **Verification**: Homepage responds dynamically from 360px mobile to 1440px desktop with zero layout shift or overflow.

### Phase 3: Live Match Centre & Matches Directory
- **Goal**: Interactive live score experience and comprehensive match archive.
- **Tasks**:
  1. Build `/matches/dcc-vs-royal-xi` (Live Match Centre):
     - Scoreboard header (teams, status, required run rate, target).
     - Live Batters & Current Bowler statistics card.
     - Recent deliveries strip (1, 4, 0, 2, 6, 1).
     - Interactive tabs: Full Scorecard, Ball-by-ball Commentary, Overs summary, Playing XI.
  2. Build `/matches` (Matches Archive):
     - Filter tabs (All, Live, Upcoming, Completed).
     - Season & Tournament dropdown/pills.
     - Rich match cards with result summaries and venue details.
- **Verification**: Tab switching works seamlessly; live score page presents Cricbuzz-grade clarity with DCC branding.

### Phase 4: Players Directory & Profile Pages
- **Goal**: Showcase club talent with detailed batting, bowling, and fielding profiles.
- **Tasks**:
  1. Build `/players`:
     - Real-time search by player name.
     - Role filters (All, Opening Batter, Middle Order, All-Rounder, Fast Bowler, Spinner, Wicketkeeper).
     - Player cards displaying avatar, role, matches, runs/wickets, and strike rate.
  2. Build `/players/[slug]`:
     - Hero header with player photo, role, jersey number, and bio.
     - Career summary vs Current Season (2026-27) stats grid.
     - Recent match performance log.
     - Season highlights & awards spotlight.
- **Verification**: Dynamic routes resolve properly (awaiting `params` in Next.js 16); filtering operates with empty state handling.

### Phase 5: Training, Tournaments, Seasons & Achievements Hub
- **Goal**: Complete the operational story of the cricket club.
- **Tasks**:
  1. Build `/training`:
     - Training categories (Net Practice, Batting Pressure Drills, Bowling Accuracy, Fielding, Fitness).
     - Session cards with video thumbnails, coach info, and key takeaways.
     - Coach spotlight cards (Head Coach, Batting Coach, Bowling Coach).
  2. Build `/tournaments` & `/tournaments/[slug]`:
     - Archive of external tournaments DCC competed in (JPL 2026, Kota League, Rajasthan Club Championship).
     - Campaign summary, match record, top performer, and tournament gallery.
  3. Build `/seasons` & `/seasons/[slug]`:
     - Year-wise archives (2026-27 featured, 2025-26, 2024-25).
     - Annual cycle timeline (Oct Season Begins -> Nov Training -> Dec Tournaments -> Jan League -> Feb Knockouts -> Mar Awards).
  4. Build `/achievements`:
     - Trophy shelf and individual player milestones timeline.
  5. Build `/about`:
     - Club history, mission, training philosophy ("From Net Practice to Match Day"), and facility details.
- **Verification**: All routes navigable, rich content displayed with zero placeholder text.

### Phase 6: Memories Gallery, Lightbox, Mobile Polish & Production Build
- **Goal**: Visual photo/video memory bank, mobile UX audit, accessibility review, and production build readiness.
- **Tasks**:
  1. Build `/gallery`:
     - Category filter (All, Training, Match Day, Tournaments, Celebrations).
     - Responsive editorial photo grid.
  2. Build `/gallery/[slug]` with interactive Lightbox/Modal viewer (zoom, prev/next, image caption).
  3. Responsive audit across all breakpoints (360px, 390px, 768px, 1024px, 1440px).
  4. Accessibility check: ARIA attributes on buttons/modals, keyboard navigation, contrast ratios.
  5. Meta tags & OpenGraph metadata for all routes.
  6. Run `npm run build` and `npm run doctor` to ensure zero lint or compilation errors.
- **Verification**: Clean build output with no errors or unhandled warnings.
