



OPTIMIZE_V4.md — Devpur Cricket Club Production Frontend Finalization
0. Mission / Non-Negotiable Context
You are optimizing the existing live Devpur Cricket Club (DCC) Next.js frontend at:

https://cricket-club-demo.vercel.app/

This is NO LONGER A DEMO.

Treat the current codebase as the approved visual/product direction that is moving toward the final production frontend for the client.

Do NOT rebuild the application from scratch.

Do NOT replace the existing visual identity, theme, typography system, logo treatment, global CSS architecture, or working page structure unless the instruction below explicitly requires it.

The objective is:

Make DCC clearly feel like a community cricket club, not a cricket academy, coaching institute, training center, tournament organizer, statistics portal, or sports school.

The website must communicate:

Cricket is the medium. Community is the identity.

The final experience should make a visitor understand:

DCC represents Devpur Gaam.

DCC is a member-driven/community club.

Members come together through cricket, practice, competition, fitness, friendships, gatherings, and shared memories.

Coaching and practice are important, but coaching is one part of club life, not the club’s identity.

DCC participates in external/community tournaments; it does not present itself as the tournament organizer.

Match-day live scoring is an important public feature.

Sponsors are important because they support the club and should receive meaningful visibility.

The club preserves seasons, memories, milestones, member achievements, and community history.

Future opportunities can expand beyond cricket into other member/community activities, leisure, fitness, social connection, and collaboration.

1. Source-of-Truth Content Rules
Use the client-provided DCC documents and supplied sponsor asset package as the authority.

Verified facts from the provided DCC material include:

Devpur Cricket Club was incepted in 2013.

DCC has a 50+ strong player/member base.

DCC conducts approximately 5–6 months of structured training each season.

Indoor/outdoor net practice is conducted at Matunga Ground about 3 days a week.

Mr. Aditya Koli is identified in the supplied material as a Kanga B Division player and professional coach.

DCC participates in approximately 25+ professional leather-ball tournament matches over a five-month period each year.

DCC currently holds two runners-up trophies.

DCC is stated to be Rank 10 amongst KVO teams.

The club's stated goal is to improve its KVO ranking and target championship success; outcomes must never be presented as guaranteed.

Sponsorship supports training, coaching, equipment, match participation and related club activities.

Sponsor visibility includes jersey branding and relevant social/match/team promotion, subject to agreed scope and external restrictions.

The supplied sponsorship documents refer to a 3-season 2026–27, 2027–28 and 2028–29 association.

The supplied onboarding material references a wider 10K+ KVO cricket network as visibility context.

The supplied material also references an estimated average of roughly 1K views per reel; this is an estimate and must not be presented as guaranteed reach.

Critical interpretation rules
NEVER say:
“DCC organizes tournaments” when referring to the external tournaments.

“Join our coaching academy.”

“Admissions.”

“Courses.”

“Batch.”

“Training institute.”

“Certification.”

“Syllabus.”

“Coach-led academy.”

“Professional academy program.”

“Enroll.”

“Students.”

Prefer:
Club

Members

Community

Club life

Practice

Net sessions

Match preparation

Practice matches

Tournament participation

External/community tournaments

Matchday

Members & memories

Community connection

Fitness

Growth

Achievements

Representation

Devpur Gaam

Never invent factual claims.
Do not fabricate:

Player statistics

Tournament names

Tournament records

Exact match results

Award winners

Coaching credentials beyond the supplied source

Sponsor roles/tier/status

Sponsor impact claims

Sponsor financial terms on public-facing pages

Attendance numbers

Number of matches unless supported

Geographic/network claims not supported by the source

Where real data is not yet supplied, build the component so the content can be populated later via the future backend. Use neutral placeholder states or clearly non-public internal seed data rather than presenting fake achievements as real DCC history.

2. Biggest Positioning Correction
The current frontend has improved substantially, but some sections still communicate:

“High-performance cricket training organization.”

That is NOT the client’s desired identity.

The visual and copy hierarchy must instead communicate:

“A community of members who use cricket to stay active, compete, connect, grow and create memories.”

Required hierarchy:
Community identity

Club life

Members

Match participation

Sponsors

Memories

Cricket development

Coaching

Coaching must support the story, not dominate it.

3. GLOBAL EXPERIENCE
Preserve
Existing DCC logo/crest.

Existing custom color palette already established in the codebase.

Existing typography and premium visual direction unless a small refinement is genuinely needed.

Existing responsive behavior.

Existing Tailwind setup.

Existing global CSS variables/tokens where already present.

Improve
Keep the UI premium, editorial, modern and athletic, but not “sports academy SaaS.”

Reduce excessive dashboard-like cards.

Use more emotional photography, full-width imagery, layered sections, subtle texture and premium spacing.

Avoid too many repeated stat cards.

Avoid every section looking like a KPI dashboard.

Introduce stronger visual rhythm:

large statement

image

editorial text

small supporting metrics

next story section

Prefer one meaningful CTA per section rather than multiple competing CTAs.

Keep mobile padding tight but comfortable.

Avoid full-screen-height hero sections.

Avoid over-animating the page.

4. HEADER / NAVIGATION REFINEMENT
The navigation should feel like a club website, not a sports analytics portal.

Recommended top-level navigation:

Home

Club

Club Life

Matches

Members

Seasons

Memories

Sponsors

Optional secondary action:

Live Score (visually highlighted only when a current live match exists)

Avoid putting too many deep links in the primary navbar.

Do NOT expose every utility route in the header.

Mega-menu / quick-link rule
If using the existing mega-menu, organize around:

Club

Our Story

Club Life

Members

Coaches

Cricket

Matches

Live Score

Tournaments We Play

Season Journey

Trophies

Memories

Seasons

Photo Memories

Member Milestones

Stories

Partners

Sponsors

Sponsor Visibility

Contact

The hierarchy should immediately explain the club.

5. GLOBAL LIVE MATCH / PULSE BAR
The existing DCC Pulse concept is useful, but keep it purposeful.

It should dynamically show:

When a match is LIVE
LIVE • DCC vs Opponent • View Live Score

When there is an upcoming match
NEXT MATCH • DCC vs Opponent • Date • Time

When there is no match today
Show a lightweight club pulse such as:

CLUB LIFE • Mon / Wed / Fri Practice Rhythm

Do not make a fake live score appear permanently on the site.

The final architecture will later connect this component to:

Admin Panel → Backend → Database → Next.js

For now, build the component with a clean typed data interface so the hard-coded data can be replaced without changing the UI.

6. HOMEPAGE — FINAL PRODUCTION DIRECTION
The homepage is the most important page.

Hero
Keep the core statement close to:

MORE THAN CRICKET.
A CLUB. A COMMUNITY.

Supporting message should explain:

DCC brings people together through cricket, regular practice, match participation, fitness, friendship and shared experiences while proudly representing Devpur Gaam.

Do NOT lead with:

Coaching

Skill training

Statistics

Tournament records

Hero CTAs
Primary:
Explore Club Life

Secondary:
See Matches

Contextual high-priority action if live:
Live Score

7. HOMEPAGE SECTION ORDER
Use this order unless there is a strong design reason to refine it:

Section 01 — Hero
Community-first identity.

Section 02 — Today / Next Match
Dynamic match center.

Section 03 — What DCC Is
Short explanation of the club and why it exists.

Section 04 — Club Life
Practice + fitness + match preparation + social connection.

Section 05 — Our Members
People first; stats second.

Section 06 — Community Value
Why members choose club life.

Section 07 — Tournament Participation
External/community competitions DCC plays in.

Section 08 — Sponsors
Highly visible sponsor area.

Section 09 — Season Memories
Visual archive and storytelling.

Section 10 — Member Growth / Milestones
Achievements and meaningful journeys.

Section 11 — Final Community CTA
Example:
Be Part of the Club Journey

Do not make the homepage a long continuous list of statistics.

8. HOMEPAGE — MATCH CENTER
This is a key client requirement.

The match card must support these states:

LIVE
LIVE badge

DCC vs opponent

Tournament/competition name

Date/time

Venue

Current score if available from the real provider later

View Live Score CTA

Sponsor mark/partner strip when appropriate

UPCOMING
Next match

Date

Time

Venue

Tournament/competition

Match type (White Ball / Red Ball if applicable)

Optional squad preview

Match Preview

COMPLETED
Result

Score summary if available

Winner

View Match Summary

No current/upcoming match
Show:

No match today

then a tasteful Next Match card.

DO NOT hard-code a “LIVE” state as if it is always happening.

9. LIVE SCORE EXPERIENCE
Client does NOT require video broadcasting.

Live Score means scoreboard / score sheet visibility.

The production architecture later will be:

Admin Panel → Match → Live Score URL → Backend → Database → Public UI

For this frontend phase:

Keep the live-score interaction clean.

Do not build an internal scoring engine.

Do not build WebSocket infrastructure in the frontend.

Do not poll an external provider from the browser.

Do not scrape a third-party score page.

Do not pretend a static score is “live.”

Use an integration-ready component and typed model.

The UI should support:

View Live Score

and later can support direct API/embed/live feed integration without visual redesign.

10. CLUB LIFE PAGE — REFRAME STRONGLY
This page currently contains too many detailed coaching/drill descriptions.

The page should not feel like a curriculum or coaching syllabus.

New structure
Hero
Life Inside DCC

Subline:

Cricket gives us a reason to meet, stay active, compete, improve and spend time together.

Pillar 01 — Practice
Monday / Wednesday / Friday rhythm, approximately two-hour sessions when applicable.

Pillar 02 — Fitness
Warm-up, conditioning, mobility, fielding movement and match readiness.

Pillar 03 — Match Preparation
Weekend practice matches and applying what members work on during regular sessions.

Pillar 04 — Community
Post-session conversations, gatherings, socializing and life outside the ground.

Pillar 05 — Representation
Playing for Devpur Gaam in external/community competitions.

Pillar 06 — Growth
Personal improvement, confidence, higher-level exposure and future opportunities.

11. COACHING SECTION
Keep Coach Aditya Koli as an important supporting profile.

Do NOT let this page become “The Coach’s Academy.”

Use:

Professional Coaching Support

Copy direction:

Coaching is one part of DCC club life, helping members improve cricket skills, fitness and match readiness.

Keep the source-supported fact:

Mr. Aditya Koli — Kanga B Division Player

Do not add unsupported credentials, certifications, career claims or invented staff members.

If other coach profiles are later supplied by the client, make the section data-driven.

12. REMOVE / REWRITE OVER-SPECIFIC TRAINING SYLLABUS CONTENT
The current frontend includes detailed drill titles and tightly authored technical descriptions such as:

Front-foot/back-foot mechanics

Biomechanics

Yorker variations

Specific training timings that vary per card

Tactical mastery

Technical mastery

Match simulation terminology

These create a coaching-institute impression.

Replace with shorter club-life language:

Batting Practice
Work on rhythm, shot-making and match readiness.

Bowling Practice
Build consistency, control and confidence.

Fielding & Fitness
Stay sharp, mobile and active together.

Practice Matches
Take the week’s work into real match situations.

Avoid creating a “course catalogue.”

13. PRACTICE SCHEDULE
The client described a recurring schedule:

Monday / Wednesday / Friday

approximately:

2 hours per session

Practice at:

Matunga Ground

Use this as a simple club rhythm, not as an academy timetable.

Preferred UI:

MON • WED • FRI

~2 HOURS

MATUNGA GROUND

Do not create contradictory session times across multiple cards.

If exact session times are not officially supplied, do not invent them.

14. WEEKEND PRACTICE MATCHES
Keep this feature prominent.

Client specifically described practice matches from weekend to weekend.

Label it:

Weekend Practice Matches

Explain:

Members use practice matches to apply the week’s preparation in real playing situations.

Do not confuse these with external tournament matches.

15. TOURNAMENTS PAGE
This page should communicate:

Tournaments We Play

NOT:

tournaments we organize

Use:

DCC participates in community cricket competitions and represents Devpur Gaam when we take the field.

Clearly support:

External/community tournament participation

White-ball cricket

Red-ball cricket

Different community/village-level competition formats

Match history

Results

Season association

Do not build an organizer dashboard into the public page.

16. IMPORTANT: SEPARATE PRACTICE MATCHES FROM TOURNAMENT MATCHES
The current UI can blur these concepts.

Use tags:

PRACTICE MATCH

and

TOURNAMENT MATCH

This separation should exist both visually and in the eventual data model.

Examples:

Weekend Practice Match

Community Tournament Match

Knockout / Championship Match (only when true and supplied)

17. MEMBERS PAGE — MAKE IT ABOUT PEOPLE, NOT SCOUTING
The member directory is important.

The current page still reads like a performance database.

Reframe it:

Hero
OUR MEMBERS
The People Behind the Crest

Supporting text:

50+ members connected through cricket, practice, competition, friendship and shared experiences.

Member card priority
Photo

Name

Playing role

Member since (when provided)

Short human/club profile

Small performance summary

Milestones / achievements

Statistics should be secondary.

Do not make members look like professional-player scouting profiles.

18. REMOVE “DEMO” / SIMULATION LANGUAGE
The current frontend still contains demo-oriented wording such as:

FEATURED MEMBERS • DEMO

simulated live scoring

demo data

fake spotlight language if visible in final UI

REMOVE all such public-facing wording.

The final frontend must look like the actual DCC website.

If mock data is needed internally during development, keep it in code comments/config only and never expose “DEMO” in the UI.

19. PLAYER DATA INTEGRITY
The current frontend contains many very specific player names, match totals, strike rates, bowling numbers and performance claims.

Do not present fabricated statistics as official DCC history.

Create a centralized typed data source such as:

src/data/dcc/players.ts

or, if the existing project has a better structure, preserve that architecture.

Each player record should be backend-ready:

type Player = {
  id: string
  slug: string
  name: string
  photo?: string
  jerseyNumber?: number
  primaryRole?: PlayerRole
  battingStyle?: string
  bowlingStyle?: string
  bio?: string
  joinedYear?: number
  active?: boolean
}
Stats should be separated:

type PlayerSeasonStats = {
  playerId: string
  seasonId: string
  matches: number
  runs: number
  wickets: number
  catches: number
  average?: number
  strikeRate?: number
  economy?: number
}
This prepares the frontend for the future backend cleanly.

20. SEASONS PAGE — MEMORY-FIRST, NOT KPI-FIRST
Current page still leans heavily toward season statistics.

The client wants:

What happened in the life of the club that season?

Preferred structure:

Season hero
2026–27

The Journey

Timeline
October:
Season begins / net practice

November:
Regular club rhythm

December:
Tournament participation / matchdays

January:
Competitive phase

February:
Important fixtures / community moments

March–May:
Season close / gatherings / memories

Do not invent exact monthly competition stages unless supplied by the client.

Each season should contain
Club story

Matches

Results

Player highlights

Achievements

Practice / club-life moments

Gallery

Social/community moments

21. SEASON DATA MODEL
Prepare the frontend around:

type Season = {
  id: string
  slug: string
  label: string
  startDate: string
  endDate?: string
  summary?: string
  highlights?: string[]
  coverImage?: string
}
Related content:

Season
 ├── Matches
 ├── Players / stats
 ├── Achievements
 ├── Training moments
 ├── Gallery albums
 └── Stories
This should later map directly to the backend.

22. MEMORIES PAGE
This should be one of the most emotionally strong areas of the website.

Client explicitly wants:

Year-wise memories

Match moments

Practice moments

Team moments

Social gatherings

Personal/community milestones

Celebrations

“What we did together over the years”

UX
Use:

Large editorial album cards

Masonry/asymmetric visual rhythm where appropriate

Season filters

Album tags

Lightbox viewer

Optional captions

Optional member/event tags

Avoid making it look like a generic “photo gallery grid.”

It should feel like a club archive / visual history.

23. STORIES / BLOG
If the current blog remains, reposition it.

Do not make “Cricket Tips” a major navigation item.

Recommended:

Club Stories

Categories:

Match Stories

Member Stories

Season Stories

Community Moments

Achievements

Behind the Club

Do not build an SEO cricket tutorial publication.

24. WHY MEMBERS CHOOSE CLUB LIFE
This is a major client requirement and should remain strong.

Use a concise visual set such as:

Community
Meet people from the same community and build genuine friendships.

Fitness
Regular activity and disciplined routine.

Cricket
Play, practice and compete together.

Social Connection
Get-togethers, celebrations and time together outside matches.

Personal Growth
Confidence, discipline, consistency and opportunities to progress.

Network
Relationships that can continue into personal and professional life.

Important:

Do not promise jobs, businesses or career outcomes.

Use:

“Can create opportunities for meaningful connections and collaborations.”

Not:

“Guaranteed business leads.”

25. “FUTURE OF THE CLUB” / EXPANSION
Client described that cricket is one medium and the club could later offer broader community facilities/activities.

Do not turn this into a large product roadmap.

Use a subtle forward-looking section:

More Ways to Belong

Example direction:

Today:
Cricket

Next:
Fitness • Social Activities • Community Experiences • Member-led Initiatives

Messaging:

Cricket is where the community meets today; the club can grow into a broader platform for recreation, connection and member-led activities.

Do not claim that those facilities already exist.

26. SPONSORS — MAJOR BUSINESS GOAL
Sponsors are not just a footer logo strip.

They are an important business/visibility story.

The sponsor section should show:

Sponsor logos

Why sponsor support matters

Matchday visibility

Jersey visibility

Digital/social visibility

Support for training/equipment/match participation

Club/community reach

Use the supplied sponsor asset package instead of generic placeholder logos.

The supplied logo package contains:

DCC 2026

Devpur Mahajan

Gala Diamond

KP Technotrade

LC Anchor

Metro

NanoNine

Ratna

Use the correct supplied logo artwork and preserve aspect ratio.

27. SPONSOR CONTENT SAFETY
Do not hard-code unsupported sponsor roles.

Avoid:

“Principal Partner”

“Primary Front-of-Jersey Sponsor”

“Apex community institution”

Detailed business-specific claims

“Hydration partner” etc.

unless explicitly confirmed in source materials.

Safer default label:

Official Club Partner

Make partner role, website, description, logo, display order and visibility scope editable in the future admin panel.

28. SPONSOR METRICS — USE PRECISE LANGUAGE
If displaying source-supported sponsorship metrics, use:

~25 matches / season where applicable

10,000+ KVO cricket network

Estimated ~1K average views/reel

Never turn estimates into guarantees.

Use words:

Approx.

Estimated

Intended

Subject to agreed scope

Avoid:

Guaranteed

Guaranteed reach

Guaranteed impressions

29. PUBLIC SPONSOR FINANCIAL DATA
Do NOT expose MOU payment amounts such as annual sponsorship value or three-year commercial value on the public website unless the client explicitly requests it.

The supplied sponsorship documents contain commercial amounts, but these belong to the agreement, not automatically to the public marketing site.

30. SPONSOR MATCHDAY VISIBILITY
When a match is live/upcoming, the public match UI can include:

Matchday Supported By

then a controlled set of sponsor logos.

This directly supports the client’s goal of making people view the match through the DCC website so sponsors receive visibility.

Do not overcrowd the scorecard.

Use a compact sponsor rail.

31. MATCH DETAIL PAGE — FUTURE-READY UX
Structure:

Match hero

Status

Teams

Tournament / competition

Date / time / venue

Live Score CTA

Match summary

Result

Player performance

Sponsor visibility

Match memories / gallery

Related season

The same page must work for:

UPCOMING → LIVE → COMPLETED

without needing different page templates.

32. MATCH DATA MODEL
Frontend should already be compatible with a future backend object:

type MatchStatus = 'upcoming' | 'live' | 'completed' | 'cancelled' | 'postponed'

type MatchType = 'practice' | 'tournament'

type BallFormat = 'white-ball' | 'red-ball'

type Match = {
  id: string
  slug: string
  seasonId: string
  competitionName?: string
  opponentName: string
  matchType: MatchType
  ballFormat?: BallFormat
  date: string
  startTime?: string
  venue?: string
  status: MatchStatus
  liveScoreUrl?: string
  scoreSummary?: {
    dcc?: string
    opponent?: string
  }
  resultText?: string
  coverImage?: string
}
This is intentionally simple and maps cleanly to the future backend.

33. API-READY FRONTEND ARCHITECTURE
The current site is static, but code should now be written as if backend data will arrive later.

Use:

src/
  data/
  types/
  lib/
  services/
  components/
  features/
Recommended:

src/types/dcc.ts
src/data/dcc/
src/services/
src/lib/
Separate:

Domain data
What the DCC data means.

Presentation
How the data looks.

Fetching
How data will eventually come from the backend.

Do NOT mix large data objects directly inside JSX page files.

34. CREATE A DATA ADAPTER LAYER
Prepare interfaces such as:

getHomepageData()
getTodayMatch()
getUpcomingMatches()
getCompletedMatches()
getPlayers()
getPlayerBySlug()
getSeasons()
getSeasonBySlug()
getMemories()
getSponsors()
getClubLifeContent()
For this frontend phase, these functions can read local typed static data.

Later they can be replaced by API calls without rewriting the UI.

35. CACHE-FRIENDLY FRONTEND DESIGN
The eventual production architecture will use:

Next.js

Hono backend

PostgreSQL / Neon

Cloudflare

Redis when required

Object storage / media CDN

Therefore the frontend should distinguish:

Mostly-static content
About

Club story

Coach

Gallery

Sponsors

Historical seasons

Semi-dynamic
Upcoming matches

Match results

Player season stats

Highly dynamic in the future
Live match score

Design each UI component so highly dynamic data is isolated and does not force the entire page to re-render.

36. PERFORMANCE REQUIREMENTS
The final frontend must be optimized for a public audience that can scale from dozens to roughly 1,000 concurrent viewers during matchday spikes.

Implement:

Next.js Server Components wherever appropriate

Avoid unnecessary client components

Avoid global client state for static content

Lazy-load large galleries

Use responsive image dimensions

Use Next/Image or the project’s optimized image mechanism

Preload only genuinely critical hero media

Dynamic import heavy interactive components

Avoid large third-party packages for simple UI

Avoid unnecessary animation libraries

Keep JavaScript shipped to the client minimal

Prevent layout shifts

Use semantic HTML

Maintain accessible focus states

Do not add a client-side polling loop for live score.

37. GALLERY PERFORMANCE
This project may eventually contain a large number of images.

Build gallery cards to support:

Thumbnail

Optimized display

Lazy loading

Fixed/aspect-ratio containers

Lightbox

Optional progressive loading

Album-level pagination/infinite loading later

Never render hundreds of full-resolution images at once.

38. RESPONSIVE DESIGN
The website must feel intentionally designed at:

360px

390px

430px

768px

1024px

1280px

1440px+

Especially test:

Navbar

Hero

Live match card

Sponsor logo rails

Player cards

Season timeline

Gallery

Match cards

Footer

Long text sections

Do not simply stack desktop cards on mobile.

Mobile should have deliberate layouts.

39. ACCESSIBILITY
Production baseline:

Keyboard navigation

Proper button semantics

Proper anchor semantics

Visible focus states

Alt text for meaningful images

Decorative images marked appropriately

Good color contrast

No text inside images when avoidable

Reduced-motion support for non-essential animations

Touch targets >= comfortable mobile size

Form labels where forms exist

Do not rely only on color to communicate match status.

40. SEO
For final public website:

Each important page must have correct metadata:

Title

Description

Open Graph

Twitter/X metadata where appropriate

Canonical URL

Robots metadata where appropriate

Important routes:

/

/about

/club-life

/matches

/tournaments

/players

/seasons

/memories

/sponsors

Dynamic future routes should support:

player slug

season slug

match slug

tournament slug

gallery slug

Also prepare:

sitemap

robots.txt

favicon/app icons

social preview image

41. TYPOGRAPHY / COPY QUALITY
Fix awkward punctuation and cramped headings.

Avoid:

MORE THAN CRICKET.A CLUB. A COMMUNITY.

Prefer:

MORE THAN CRICKET. A CLUB. A COMMUNITY.

Use consistent capitalization.

Do not overuse all caps.

Do not use marketing buzzwords that make DCC sound like an institution.

42. REDUCE DASHBOARD FEEL
Current interface uses many:

stat chips

score boxes

KPI cards

numbered cards

ranking panels

Keep some because cricket benefits from structured information, but reduce repetition.

Guideline:

Story section → 1–3 supporting metrics, not 8–12.

For example:

Bad:

EST 2013 / 50+ / 25+ / 2 RUNNERS-UP / RANK 10 / 10K / 1K / 3 DAYS / 5–6 MONTHS

all in one visual cluster.

Better:

EST. 2013

50+ MEMBERS

2 RUNNERS-UP FINISHES

then explain the story.

43. CURRENT “RANK 10” CORRECTION
Never write:

Rank #10 among 10,000+ community cricket players

That incorrectly combines two separate source statements.

Use:

KVO TEAM RANK #10

and separately:

10,000+ KVO COMMUNITY CRICKET NETWORK

Do not imply that DCC is individually ranked #10 among 10,000 people.

44. CURRENT SEASON DATA CORRECTION
If the UI says:

2026–27 Season
14 matches
10 wins
etc.

those figures must come from actual backend/client data.

Do not ship fabricated season records as official.

Use a typed seed layer with either:

verified data

empty/null values

neutral placeholder states

until the actual client data is available.

45. CURRENT TOURNAMENT DATA CORRECTION
The current UI includes highly specific competition names, records, stage statuses and “top performer” data.

Before production:

Keep only client-confirmed tournament names.

Keep only real match records.

Keep only confirmed results.

Keep only approved player performance claims.

Remove invented “semi-final / super-4 / group champion” claims unless source-confirmed.

The site must never look like it is publishing fictional sporting history.

46. CURRENT MEMBER DATA CORRECTION
The frontend currently has a set of named players with detailed numbers.

Before production:

Preserve the UI pattern.

Replace seed records with actual client-provided roster later.

Do not use “Featured Members • DEMO.”

Avoid fake biographies.

Avoid fake speed claims such as “135+ kmph” unless confirmed.

Avoid fake award claims.

Avoid fake milestone records.

47. CURRENT MEMORY DATA CORRECTION
The current memory section references very specific moments, dates and settings.

Before production:

Preserve the gallery storytelling UX.

Replace unverified captions and dates with real club content.

Avoid fictional “championship victories” or “trophy nights” unless they match actual archives.

Use real photos from the client when supplied.

48. ABOUT PAGE
The About page is now close to the right direction.

Strengthen:

Devpur Gaam identity

Club origin in 2013

Community-first purpose

Member relationship

Cricket as medium

Practice

Competition

Fitness

Social connection

Memories

Growth

Avoid “program”, “academy”, “curriculum” language.

49. CONTACT / JOIN CTA
Do not turn “Join” into an academy admission funnel.

Preferred wording:

Get in Touch

Club Enquiry

Connect With DCC

Membership Enquiry

Membership messaging can explain the club model without promising acceptance or specific pricing unless the client provides approved public details.

Do not publish internal sponsorship or membership commercial terms unless explicitly approved.

50. FOOTER
Footer should reinforce:

Devpur Cricket Club

Proudly Representing Devpur Gaam

PLAY • TRAIN • COMPETE • WIN

Include:

Club links

Cricket links

Memories links

Sponsors

Contact

Instagram

Copyright

Legal/privacy links when implemented

Keep it compact and premium.

51. LEGAL / TRUST
Before true public production launch, prepare:

Privacy Policy

Terms / Website Terms

Media usage policy if required

Contact information

Sponsor usage rights

Cookie/analytics disclosure when applicable

Do not invent legal copy in this optimization pass; structure the footer and routes so the final legal documents can be inserted later.

52. IMAGE / MEDIA RULES
Use the client's real supplied assets wherever available.

Priority:

DCC logo/crest

Sponsor logos from supplied ZIP

Real club photos

Real player photos

Real coach photo

Real match/training photos

Avoid generic stock-photo-heavy sections once the real media set is supplied.

Image treatment should feel premium:

consistent aspect ratios

subtle radius

controlled overlays

no stretched logos

no distorted sponsor marks

no pixelated hero image

responsive cropping with object-position controls

53. SPONSOR LOGO RENDERING
Build a reusable:

SponsorLogoStrip

and:

SponsorCard

component.

Requirements:

preserve original aspect ratio

support transparent PNG

support different logo shapes

visually normalize height, not width

use neutral background where necessary

prevent huge logos from dominating

allow ordering

allow active/inactive later

support contextual placement

Do NOT manually recreate sponsor logos as SVGs.

Use the supplied logo assets.

54. FUTURE ADMIN PANEL COMPATIBILITY
The eventual architecture will use one Custom Admin Panel, not two separate management systems.

The frontend should be organized so these future admin-managed objects map naturally:

Seasons
Matches
Tournaments
Players
Player Performances
Coaches
Training Sessions
Achievements
Gallery Albums
Gallery Items
Videos
Sponsors
Homepage Highlights
Club Content
Future flow:

Admin Panel → Hono API → PostgreSQL → Next.js

Media:

Admin → Backend → Object Storage → DB metadata → Next.js

Do not build Sanity-specific code.

Do not add CMS-specific dependencies in this phase.

55. DO NOT ADD YET
This optimization is frontend finalization.

Do NOT implement:

Hono backend

PostgreSQL

Neon

Redis

Cloudflare Workers

WebSockets

SSE

live API ingestion

custom scoring engine

authentication system

admin panel

Docker

CMS

payment system

Only prepare the frontend architecture so these can be integrated later.

56. CODE QUALITY / MAINTAINABILITY
Refactor only where beneficial.

Requirements:

reusable UI components

typed domain data

predictable folder structure

no repeated arrays in multiple pages

no duplicate constants

no magic strings scattered everywhere

no huge page component files

avoid deep prop-drilling

use composition

clean route boundaries

accessible interactive components

Keep component names semantic, for example:

LiveMatchCard
UpcomingMatchCard
MatchResultCard
SponsorLogoStrip
SponsorCard
MemberCard
SeasonCard
MemoryAlbumCard
ClubLifePillar
PracticeSchedule
CommunityValueCard
57. ERROR / EMPTY STATES
Every data-driven component must gracefully support:

no data

missing image

missing live score URL

no current match

no upcoming match

season without gallery

player without stats

sponsor without website

Example:

If no live score URL:

Live score will be available here on matchday.

Do not render a broken button.

58. ANIMATION GUIDELINE
Keep motion premium and subtle:

fade/slide entrance

image reveal

hover lift

sponsor marquee only if genuinely useful

live pulse only for actual live state

Avoid:

constant aggressive movement

distracting auto-cycling text

heavy parallax

animation on every section

animation that blocks reading

Support prefers-reduced-motion.

59. FINAL UX CHECKLIST
Agent must manually test:

Home
Community is understood within the first viewport.

Today/Next match is obvious.

Sponsor presence is visible.

Memories are visible.

Members are visible.

No academy impression.

Club Life
Feels like club routine, not coaching syllabus.

Practice, fitness, matches and community all present.

Coach is supporting story.

Matches
Practice vs tournament is distinct.

Live/upcoming/completed states are clear.

Live score CTA is prominent.

Tournaments
DCC is clearly participant, not organizer.

Members
People-first, stats-second.

No “demo” labels.

Seasons
Memory/story-first.

Statistics support the story rather than dominating it.

Memories
Editorial archive feel.

Seasonal filtering works.

Sponsors
Real supplied logos.

Clean visibility.

No unsupported partner claims.

Matchday sponsor visibility makes sense.

Mobile
No horizontal overflow.

No crushed tables/cards.

Match CTA remains accessible.

Sponsor logos remain readable.

60. FINAL ACCEPTANCE CRITERIA
The optimization is complete only when all of the following are true:

Site clearly feels like a community cricket club.

No academy/coaching-institution positioning remains.

Coaching is visible but clearly one component of club life.

DCC / Devpur Gaam identity is strong.

Member/community relationship is strong.

Practice rhythm is represented accurately.

Weekend practice matches are represented.

External tournament participation is represented.

White-ball and red-ball concepts can be represented.

Today / Live / Upcoming / Completed match states are supported.

Live score is treated as scoreboard/score-sheet access, not video broadcasting.

Sponsors have strong but tasteful visibility.

Sponsor claims are source-safe.

Season history is story + memories + milestones.

Player stats are secondary to human/member identity.

Memories are a major part of the product.

Community benefits are clearly communicated.

Future community expansion is hinted at without false claims.

No “DEMO”, “simulation”, or fake-production wording remains.

Unsupported fictional player/tournament/stat claims are removed or isolated from public UI.

Frontend data is centralized and typed.

Frontend is backend/API-ready.

No CMS-specific architecture is introduced.

No backend/live infrastructure is introduced in this task.

No unnecessary dependencies are added.

Performance is optimized for public matchday spikes.

Responsive behavior is verified across mobile/tablet/desktop.

Accessibility baseline is met.

SEO metadata is consistent.

No broken links, console errors or layout overflow remain.

61. FINAL DIRECTIVE TO THE AI AGENT
Do not redesign the entire website because of this document.

The current DCC frontend already has a strong visual foundation.

Your task is to:

Preserve the existing custom visual identity.

Remove remaining academy/performance-institute signals.

Strengthen the community-club narrative.

Make the match/live-score experience more truthful and integration-ready.

Make sponsors a real business/visibility pillar.

Make members and memories feel more human and central.

Make seasons more story-driven.

Remove unverified/fabricated factual claims from public-facing copy.

Refactor the frontend data architecture so it can cleanly connect to a future Custom Admin → Hono → PostgreSQL backend.

Optimize the application for production performance, accessibility, maintainability and matchday traffic.

Do not add backend, CMS, Redis, Cloudflare Worker logic, Docker or live-score ingestion in this task.

The final result should feel like a polished, premium official Devpur Cricket Club digital home — a place that documents the club, represents Devpur Gaam, showcases its members and sponsors, surfaces matchday action, and preserves the club's journey over the years.

Community first. Cricket at the center. Memories for the long term. Production-ready foundation.