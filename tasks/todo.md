# Tasks: Devpur Cricket Club Frontend Demo

## Phase 1: Project Foundations, Design System & Mock Datasets
- [x] Install `lucide-react`
- [x] Configure `src/app/globals.css` with DCC color palette, Barlow Condensed & Manrope fonts, and Tailwind v4 utilities
- [x] Create TypeScript types in `src/lib/types/` (`cricket.ts`, `content.ts`)
- [x] Create mock data in `src/lib/data/` (`players.ts`, `matches.ts`, `coaches.ts`, `training.ts`, `tournaments.ts`, `seasons.ts`, `gallery.ts`, `achievements.ts`)
- [x] Implement layout components: `SiteHeader` with mobile drawer & live score button, `SiteFooter`, and base atoms (`LiveBadge`, `SectionHeading`, `Container`)
- [x] Verify build and layout rendering

## Phase 2: Homepage & Today's Match Experience
- [x] Build Hero section with DCC logo and club motto
- [x] Build Today's Live Match Card with pulse badge, live score, and match details
- [x] Build Next Match preview card and Season Stats strip
- [x] Build Club Introduction & Training teaser
- [x] Build Featured Players grid and Current Season Highlights
- [x] Build Tournament Participation preview and Coaches spotlight
- [x] Build CTA & verify mobile layout (360px - 1440px)

## Phase 3: Live Score Experience & Matches Directory
- [x] Build `/matches/dcc-vs-royal-xi` Live Match Centre with scoreboard summary, current batters & bowler, last 6 balls, and interactive tabs (Scorecard, Commentary, Overs, Teams)
- [x] Build `/matches` with status filter tabs (All, Live, Upcoming, Completed) and tournament/season dropdowns
- [x] Verify live score interaction and match cards

## Phase 4: Players Directory & Profile Pages
- [x] Build `/players` directory with search input and role filters
- [x] Build `/players/[slug]` dynamic profile with career stats, 2026-27 season metrics, recent match logs, and editorial highlights
- [x] Verify Next.js 16 async params handling and filter states

## Phase 5: Training, Tournaments, Seasons & Achievements Hub
- [x] Build `/training` page with category filters, training cards, and coach spotlight
- [x] Build `/tournaments` and `/tournaments/[slug]` for tournament campaigns
- [x] Build `/seasons` and `/seasons/[slug]` with annual timeline (Oct-Mar)
- [x] Build `/achievements` with trophy showcase and milestone timeline
- [x] Build `/about` with club origin, philosophy, and facilities

## Phase 6: Memories Gallery, Lightbox, Mobile Polish & Production Build
- [x] Build `/gallery` with category filters and editorial layout
- [x] Build `/gallery/[slug]` with interactive Lightbox preview modal
- [x] Conduct mobile responsiveness & accessibility check
- [x] Set up route metadata for SEO
- [x] Run `npm run build` and `npm run doctor` to verify 0 errors
