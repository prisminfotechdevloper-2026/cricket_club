# Tasks: Devpur Cricket Club Frontend Optimization

## Phase 1: Sponsor Assets & Data Architecture
- [x] Task 1.1: Copy sponsor PNG assets to `public/sponsors/` with clean kebab-case names
- [x] Task 1.2: Add Sponsor type definitions in `src/lib/types/content.ts` and create `src/lib/data/sponsors.ts`
- [x] Task 1.3: Update club facts across data files (`achievements.ts`, `seasons.ts`, `coaches.ts`, `matches.ts`)

## Checkpoint 1: Foundation Data
- [x] All sponsor images accessible
- [x] Data models typed and verified

## Phase 2: Navigation & Global Layout
- [x] Task 2.1: Update `SiteHeader.tsx` with community nav (Home, Club, Club Life, Matches, Players, Memories, Sponsors) and Devpur Gaam branding
- [x] Task 2.2: Redesign `SiteFooter.tsx` with official motto, community links, and sponsor recognition

## Checkpoint 2: Layout
- [x] Header & Footer responsive across mobile, tablet, desktop

## Phase 3: Homepage Redesign (Community > Coaching)
- [x] Task 3.1: Redesign `HomeHero.tsx` with community-first messaging and verified club facts
- [x] Task 3.2: Create `SponsorShowcaseSection.tsx` prominent sponsor strip near top of homepage
- [x] Task 3.3: Refactor match day experience (`TodayMatchSection.tsx`) with dynamic match state and sponsor ribbon
- [x] Task 3.4: Create `WhyWePlaySection.tsx` (Fitness, Discipline, Friendship, Community, Network, Growth)
- [x] Task 3.5: Create `ClubLifeSection.tsx` highlighting the 6 club activities
- [x] Task 3.6: Create `SeasonJourneySection.tsx` with annual season cycle timeline (Oct - Mar/May)
- [x] Task 3.7: Create `NextLevelStorySection.tsx` ("Cricket Can Open Bigger Doors")
- [x] Task 3.8: Create `CommunityMomentsSection.tsx` ("Beyond the Boundary" social gatherings)
- [x] Task 3.9: Assemble homepage in `src/app/page.tsx` following `work_optimize.md` section hierarchy

## Checkpoint 3: Homepage Experience
- [x] Can tell it's a community club in 5 seconds
- [x] Zero coaching institute / academy vibes
- [x] Sponsors and today's match clearly visible

## Phase 4: Dedicated Sponsors Page & Match Sponsor Integrations
- [x] Task 4.1: Create `/sponsors` page (`src/app/sponsors/page.tsx`) with 2026-2029 MOU details, tier breakdown, and partner showcase
- [x] Task 4.2: Add sponsor ribbon to `LiveMatchCard.tsx` and `LiveScoreCentre.tsx`

## Phase 5: Polish, Route Reviews & Production Build
- [x] Task 5.1: Update `/about`, `/training` (Club Life), `/players`, and `/gallery` copy to be 100% community-aligned
- [x] Task 5.2: Run `npm run build` to verify 0 errors
- [x] Task 5.3: Verify responsiveness and visual polish

## Phase 6: Code Quality & React Doctor Audit (100 / 100)
- [x] Task 6.1: Run `react-doctor` baseline scan and triage issues (initial score 61/100)
- [x] Task 6.2: Resolve 44 performance issues (`no-transition-all`) with dedicated transition properties
- [x] Task 6.3: Resolve 21 bug issues (`no-array-index-as-key`) across cards, carousels, lists, and commentary
- [x] Task 6.4: Resolve 20 accessibility issues (`click-events-have-key-events`, `no-static-element-interactions`, `prefer-html-dialog`, `no-noninteractive-element-interactions`, and label association)
- [x] Task 6.5: Resolve duplicated JSX structures and refactor into clean arrays
- [x] Task 6.6: Fix effect dependency patterns (`prefer-use-effect-event`)
- [x] Task 6.7: Verify zero TypeScript type issues via `npx tsc --noEmit`
- [x] Task 6.8: Achieve 100/100 React Doctor score with 0 issues

