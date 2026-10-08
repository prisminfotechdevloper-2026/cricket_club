# Spec: Devpur Cricket Club Admin Panel (/admin)

## Objective
Implement an interactive, brand-aligned Admin Portal under the route `/admin` for Devpur Cricket Club (DCC).
The portal provides DCC organizers and committee members with management capabilities over club operations:
- Matches & Live Scores (fixtures, results, live CricClubs score links, live score stats updater)
- Squad & Members (50+ member profiles, playing roles, stats, jersey numbers)
- Sponsors & 2026–2029 MOUs (tracking tiers, ₹60,000/yr commercial commitments, jersey branding)
- Training & Practice Sessions (Matunga Ground nets schedule, Coach Aditya Koli notes, attendance)
- Seasons, Tournaments & Achievements (KVO trophies, campaigns)
- Memories & Gallery (upload simulation, media tagging)
- Inquiries / Contact form review

The route is **protected** with dummy authentication for now (ready for future Hono Backend API + PostgreSQL integration without UI rewrites).
Unauthenticated access displays a split-screen Login page (Left: branded visual showcase with club emblem, quotes, and stats; Right: authentication form with quick demo test login helper).
Once logged in, the user enters the full Admin Dashboard. A quick Logout action reverts to unauthenticated state.

## Tech Stack
- **Framework:** Next.js 16.3.8 (App Router), React 19.2.8
- **Styling:** Tailwind CSS v4, custom brand design tokens (`--color-brand-orange: #EA6E18`, `--color-brand-gold: #F89928`, `--color-brand-black: #090A0C`, `--color-brand-charcoal: #1B1D22`, etc.)
- **Fonts:** Barlow Condensed (headlines/counters), Manrope (UI/body)
- **Icons:** `lucide-react`
- **Client State / Mock Persistence:** React Context + `localStorage` backed reactive store (`src/lib/admin/adminStore.tsx`) with optimistic CRUD and API adapter abstractions (`src/lib/admin/apiAdapter.ts`)

## Commands
- Dev server: `npm run dev`
- Type check: `npx tsc --noEmit`
- Lint: `npm run lint`
- React Doctor: `npm run doctor`
- Build: `npm run build`

## Project Structure
```text
src/
├── app/
│   ├── admin/
│   │   ├── layout.tsx             # Dedicated Admin Layout (bypasses public header/footer)
│   │   └── page.tsx               # Main Admin Controller (Auth guard, Login vs Admin Dashboard view)
├── components/
│   ├── admin/
│   │   ├── AdminLoginView.tsx     # Split-screen: Left brand showcase, Right login form + test helper
│   │   ├── AdminDashboard.tsx     # Main shell: Header, Sidebar, Dynamic Active Module Switcher
│   │   ├── AdminSidebar.tsx       # Collapsible navigation with badges & active highlights
│   │   ├── AdminTopBar.tsx        # Breadcrumb, search, club status, committee user profile & logout
│   │   ├── modules/
│   │   │   ├── DashboardOverview.tsx # Metrics KPIs, quick actions, match highlights, activity feed
│   │   │   ├── MatchesManager.tsx    # List, filter, add/edit match modal, live score simulator
│   │   │   ├── MembersManager.tsx    # 50+ members directory, role filters, add/edit player modal
│   │   │   ├── SponsorsManager.tsx   # 2026-2029 MOU tracker, ₹60k/yr commercial terms, add/edit partner
│   │   │   ├── TrainingManager.tsx   # Matunga Ground net sessions, Coach Aditya Koli drills
│   │   │   ├── TournamentsManager.tsx# KVO campaigns, rankings, trophies & tournament records
│   │   │   ├── MemoriesManager.tsx   # Photos, albums, match-day tagger
│   │   │   └── InquiriesManager.tsx  # Messages from contact form, status update
│   │   └── modals/
│   │       ├── MatchEditModal.tsx    # Form to create/edit matches & live links
│   │       ├── MemberEditModal.tsx   # Form to create/edit squad members
│   │       └── SponsorEditModal.tsx  # Form to create/edit sponsor deals
├── lib/
│   └── admin/
│       ├── adminAuth.ts           # Dummy auth session helpers (token/storage/credentials)
│       ├── adminStore.tsx         # Reactive admin state provider with local persistence & seeds
│       └── apiAdapter.ts          # Clean contract for future Hono + PostgreSQL swap
```

## Code Style
- Clean TypeScript types for all admin models and action payloads.
- Strictly adhere to DCC brand identity: `#EA6E18` athletic orange, `#F89928` warm gold, `#090A0C` obsidian black, `#1B1D22` charcoal.
- Accessible interactive elements (`aria-label`, button keys, keyboard navigation).
- Dedicated transitions (`transition-colors`, `transition-transform`) avoiding `transition-all`.
- Next.js Turbopack and React 19 compliance (zero hydration mismatches, safe `useEffect` guards for SSR).

## Testing Strategy
1. **TypeScript Verification:** `npx tsc --noEmit` must produce 0 errors.
2. **Next.js Production Build:** `npm run build` must succeed with `/admin` statically or dynamically generated without build-time errors.
3. **Interactive Validation:**
   - Unauthenticated state loads Login page (left brand artwork, right credentials form).
   - "Demo Credentials" auto-fill button logs in immediately.
   - Protected dashboard displays all 8 operational modules.
   - Interactive CRUD operations (e.g. creating a match, updating live scores, adding a member) update state immediately.
   - Logout clears credentials and returns to Login page.
   - Public header and footer do not render or collide on `/admin`.

## Boundaries
- **Always do:** Preserve all existing public website code and ensure zero disruption to public routes (`/`, `/matches`, `/players`, `/sponsors`, etc.).
- **Ask first:** Modifying public database schema or installing heavy third-party admin suites.
- **Never do:** Commit real user secrets or break TypeScript / Next.js build.

## Success Criteria
1. `/admin` loads quickly with a responsive, modern split-screen login page.
2. Protected route behaves correctly: unauthenticated requests cannot access admin data without logging in.
3. Login works with both manual typing (`admin@devpurcc.com` / `admin123`) and a 1-click "Quick Demo Fill" for client review.
4. Dashboard shell matches DCC exact visual palette, fonts, and logo `/logo/dcc-logo.png`.
5. Key administrative modules are fully functional with live search, filters, and modal editing.
6. Clean API adapter pattern documented and ready for Hono + PostgreSQL integration.
