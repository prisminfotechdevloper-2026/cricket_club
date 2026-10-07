# DEVPUR CRICKET CLUB — FRONTEND DEMO OPTIMIZATION SPEC

## 0. Agent Mission

Refactor and optimize the **existing Next.js frontend demo** so that it accurately represents the client’s real identity and operating model.

This is a **frontend-only client presentation/demo** for now.

The current experience feels too much like a **coaching academy / coaching institute website**. That is incorrect and must be removed from the visual language, information architecture, copy, section hierarchy, and calls-to-action.

The correct positioning is:

> **Devpur Cricket Club is a community cricket club. Cricket is the medium through which members train, stay fit, compete, build friendships, preserve memories, and create long-term community relationships.**

The club is not primarily selling coaching classes, courses, camps, or training packages.

The demo must communicate:

- Community first
- Cricket as the central activity/medium
- Club life and belonging
- Structured practice and professional coaching as one part of club life
- Participation in external community tournaments / matches
- Live match score access
- Sponsors and sponsor visibility
- Member development and achievements
- Social bonding / get-togethers / shared memories
- Strong year-wise / season-wise visual archive
- A future-ready community platform where more recreational/member activities can be added later

Do not implement backend APIs, Sanity, database, authentication, WebSockets, real scoring engine, or payment logic in this phase.

Use **dummy/static data**, but structure the frontend data so it can later be replaced by Sanity/API data without rewriting the UI.

---

# 1. SOURCE OF TRUTH — CLIENT POSITIONING

## 1.1 What DCC is

Devpur Cricket Club (DCC) is a cricket club representing Devpur Gaam and operating inside a larger KVO/community cricket ecosystem.

The client described the club as a **community club**, not a coaching institution.

The club has a member/player base, organizes regular practice activities, hires professional coaching support, plays practice matches, and participates in community-level tournaments.

The club also uses the cricket environment to build:

- fitness
- discipline
- routine
- friendships
- social circles
- community bonding
- future professional/business collaboration opportunities
- opportunities for members to progress toward higher-level cricket

The site should make this broader purpose visible.

## 1.2 What DCC is NOT

Do NOT present the site as any of the following:

- Cricket Academy
- Cricket Coaching Institute
- Training Center
- Coaching Course Platform
- Paid Cricket Classes Website
- “Join our coaching batch” type landing page
- Course/catalog based sports institute

Do NOT make the homepage headline primarily about “professional coaching”, “learn batting”, “join classes”, etc.

Coaching is a supporting activity inside the club, not the club’s entire identity.

---

# 2. VERIFIED CLUB FACTS FROM CLIENT DOCUMENTS

Use these facts in the demo where appropriate. Do not invent or alter them.

### Club identity
- Name: **Devpur Cricket Club**
- Positioning line from official documents: **Proudly Representing Devpur Gaam**
- Tagline from official documents: **PLAY • TRAIN • COMPETE • WIN**
- DCC was incepted in **2013**.
- The documents describe a **50+ strong player/member base**.
- The club currently has **2 runners-up trophies** and is stated as **ranked 10 amongst KVO teams**.
- The club’s stated sporting objective is to improve its KVO ranking and target championship glory; this is an objective, **not a guaranteed result**.
- The documents describe approximately **5–6 months of structured training each season**.
- Indoor and outdoor net practice is described at **Matunga Ground**, three days a week.
- Official sponsorship material names **Mr. Aditya Koli** as the professional coach and identifies him as a **Kanga B Division player**.
- DCC participates in approximately **25+ professional leather-ball tournament matches** over a five-month period each year.
- DCC provides/maintains professional cricket equipment required throughout the season.

### Sponsorship facts
- Sponsor visibility includes match jersey branding.
- Match jersey branding is described for up to approximately **25 matches per season**.
- Sponsor visibility also includes social media branding/acknowledgement and match/team presence.
- Sponsorship support is intended to support training, professional coaching, equipment, match participation, and related cricket activities.
- Sponsorship MOU currently covers seasons **2026–27, 2027–28 and 2028–29**.
- Annual sponsorship in the supplied MOU: **₹60,000**.
- Total three-season value: **₹1,80,000**.
- The sponsor onboarding document states an estimated average **1K views per reel**, clearly marked as an estimate and **not a guaranteed reach**.
- The sponsor onboarding document also references visibility among **10K+ KVO cricket players**.

Source note: Use the supplied client PDFs as the factual source for these claims. Do not turn estimates into guarantees.

---

# 3. CLIENT-PROVIDED OPERATING MODEL TO REPRESENT IN UI

The client explained the club season as a roughly half-year cycle beginning around October and continuing into approximately March/May depending on the season.

Represent the idea as a **season journey**, not as a course calendar.

Suggested visual journey:

```text
SEASON START
   ↓
NET PRACTICE
   ↓
COACH-LED DRILLS
   ↓
SKILL + FITNESS DEVELOPMENT
   ↓
WEEKEND PRACTICE MATCHES
   ↓
COMMUNITY TOURNAMENT PARTICIPATION
   ↓
MATCH-DAY MOMENTS
   ↓
PLAYER ACHIEVEMENTS
   ↓
MEMORIES / COMMUNITY BONDING
   ↓
SEASON ARCHIVE
```

Client-described recurring practice rhythm:
- Monday
- Wednesday
- Friday
- Approximately 2-hour net practice sessions

Training activities can include:
- batting drills
- bowling drills
- fielding drills
- fitness / movement work
- coach-led skill development
- match preparation

Important: Present this as **“Club Practice / Club Development”**, not “Course Curriculum”.

---

# 4. COMPETITION MODEL

The club does **not organize the external tournaments**.

The club **participates in tournaments** organized within the relevant community ecosystem.

The frontend wording must therefore say:

- “Tournaments We Played”
- “Tournament Participation”
- “Matches Played”
- “Our Competitive Journey”
- “Match Results”

Avoid:

- “Host Tournament”
- “Create Tournament”
- “Tournament Management”
- “Register Your Team”
- “Tournament Organizer”

The client described multiple competition formats within the community ecosystem, including:

- village-level community tournaments
- multi-village / broader community competitions
- white-ball cricket
- red-ball cricket
- practice matches

These should be presented as **history / participation**, not as an organizer dashboard.

---

# 5. NEW BRAND STORY — HOMEPAGE MUST LEAD WITH COMMUNITY

## 5.1 Hero section

The hero must immediately communicate **club + community + cricket**, not coaching.

### Preferred conceptual direction

Eyebrow:

`DEVPUR GAAM • COMMUNITY CRICKET CLUB`

Headline examples:

`More Than Cricket. A Club. A Community.`

or

`Where Cricket Builds Community.`

Supporting copy:

`We train together, compete together, celebrate together, and grow together — representing Devpur Gaam through cricket.`

Primary CTA:

`Explore Our Club`

Secondary CTA:

`See Matches`

Optional small CTA:

`View This Season`

Do not use hero copy like:

- Become a professional cricketer
- Master your batting
- Professional cricket coaching
- Join our academy
- Enroll now
- Book a coaching session

---

# 6. HOMEPAGE SECTION ORDER

Rework the homepage into this narrative:

## Section 1 — Hero / Club Identity

Visual tone:
- premium sports club
- community energy
- authentic team photography
- strong DCC branding
- subtle cricket motifs
- no classroom/academy imagery

Use the provided DCC logo.

## Section 2 — TODAY / NEXT MATCH

This is a high-priority dynamic-looking block because the client specifically wants the day’s match score link visible from the first page.

If there is a match today:

```text
LIVE TODAY
DCC vs [Opponent]
[Tournament Name]
[Date] • [Time]
[Venue]

[ LIVE SCORE ]
```

If the match has not started:

```text
UP NEXT
DCC vs [Opponent]
[Tournament]
[Date] • [Time]

[ MATCH DETAILS ]
```

If the match is completed:

```text
LATEST RESULT
DCC [Result]
[Score summary]

[ VIEW SCORECARD ]
```

This should feel editorial and sports-focused, not like an admin table.

Use client-style dummy match data.

---

# 7. SPONSOR SHOWCASE — MAJOR HOMEPAGE PRIORITY

Sponsors are a major part of the club ecosystem and must be visibly respected.

The client wants sponsor brands highlighted because sponsorship supports club activities and sponsors benefit from community reach.

## 7.1 Sponsor hero/banner

Create a strong “Powered by our community partners” / “Our Sponsors” visual strip near the top of the homepage.

Preferred hierarchy:

```text
PROUDLY SUPPORTED BY

[SPONSOR LOGOS]

Supporting training • equipment • match participation • club activities
```

Another section can use a branded banner card:

```text
OUR SPONSORS
Backing Devpur Cricket Club's journey,
season after season.
```

## 7.2 Live match sponsor visibility

The frontend demo must simulate sponsor presence on match pages and live-score cards.

Example:

```text
LIVE MATCH
DCC vs Royal XI

[ LIVE SCORE ]

SUPPORTED BY
[Logo 1] [Logo 2] [Logo 3]
```

The implementation must not claim that external score provider banners are technically injected yet. In this demo, it is a visual simulation only.

## 7.3 Sponsor logo assets

The supplied ZIP contains PNG and CDR sponsor assets.

Available PNG assets include:

- `DCC 2026.png`
- `Devpur_Mahajan.png`
- `Gala Diamond.png`
- `Gala Diamond Logo (1) (1).png`
- `KP_Technotrade.png`
- `LC Anchor.png`
- `Metro.png`
- `NanoNine horizontal.png`
- `Ratna.png`

Use the **PNG assets** in the demo whenever possible.

Do not require CorelDRAW/CDR assets for runtime rendering.

If the existing repository already contains a sponsor-assets directory, consolidate the provided PNG files there and use them consistently.

Use `next/image` with appropriate object-fit behavior so logos are not distorted.

Do not make sponsor logos tiny or visually unimportant.

---

# 8. “WHY THIS CLUB” / COMMUNITY BENEFITS

This section is crucial because the client wants the website to show why community cricket matters.

Do not frame benefits as “training outcomes” only.

Create a premium grid/cards section titled something like:

`Why We Play Together`

Cards:

### FITNESS
Regular cricket, movement, drills, and practice help members stay active.

### DISCIPLINE
A fixed practice routine creates consistency and discipline.

### FRIENDSHIP
Members build genuine friendships through shared practices, matches, and experiences.

### COMMUNITY
Cricket creates a stronger connection within the community and across members.

### NETWORK
The club can create opportunities for collaboration and stronger long-term social/business relationships.

### GROWTH
Members can develop their cricket and potentially progress toward higher-level opportunities.

Use authentic language. Avoid corporate “features” wording.

---

# 9. CLUB LIFE — SHOW THE WHOLE EXPERIENCE

Create a major section called:

`Life Inside DCC`

or

`What We Do Together`

Show 5–6 activities:

1. Net Practice
2. Coach-led Skill Development
3. Fitness & Fielding
4. Weekend Practice Matches
5. Tournament Matches
6. Get-togethers / Community Moments

The visual design should make it obvious that **cricket is the medium and community is the broader purpose**.

Use a varied editorial card layout instead of six identical feature cards.

---

# 10. COACHES — IMPORTANT BUT SECONDARY

Coaches should exist, but they must not dominate the site.

Create a clean section:

`Guided by Experience`

Example:

```text
Mr. Aditya Koli
Professional Coach
Kanga B Division Player

Coach-led practice and skill development
```

Do not headline this section as:

`Our Courses`
`Our Coaching Programs`
`Join Coaching`

The coach section is part of **Club Practice & Development**.

If supplied coach-role/skill PDFs are later added, convert those into supporting content/cards without turning the website into an institute site.

---

# 11. SEASON JOURNEY

Create a visually strong season timeline.

Example:

```text
2026–27 SEASON

OCT
Season begins
Net practice starts

NOV
Practice matches
Skill development

DEC
Tournament matches
Community cricket

JAN
Competitive phase
Player highlights

FEB
Major matches
Team moments

MAR / MAY
Season memories
Results
Achievements
```

Keep this flexible because the client described the season as approximately October through March/May.

The demo may use October–March dates for presentation, but do not hard-code this assumption into the long-term content model.

---

# 12. MATCHES PAGE

This is a club match archive, not a tournament-management product.

Top tabs/filters:

- All Matches
- Live
- Upcoming
- Results

Filters:

- Season
- Competition / Tournament
- Ball Type (White Ball / Red Ball)

Each match card should show:

- DCC
- Opponent
- competition name
- date/time
- venue
- ball type
- status
- result if completed
- live score button if live
- scorecard button if completed

---

# 13. LIVE SCORE UX

The site is **not the live scoring engine in this phase**.

The real match scoring happens externally (client specifically mentioned Cric Club as the source used for live scoring).

For the frontend demo:

- store a dummy `liveScoreUrl` in the static match data
- display a prominent `LIVE SCORE` button
- create a convincing in-site live match preview UI for demonstration
- clearly keep the architecture data-driven so this can later become an iframe/widget/API integration if the provider permits it

Do not claim that the demo is connected to Cric Club yet.

Do not build a fake real-time backend.

---

# 14. LIVE MATCH DEMO SCREEN

Create a realistic static preview for client presentation.

Example:

```text
LIVE • COMMUNITY CRICKET
DCC vs Royal XI

Royal XI  164/7  (20)
DCC       148/5  (17.2)

Need 17 runs from 16 balls

CURRENT BATTERS
Aman       54 (37)
Rohit      21 (15)

CURRENT BOWLER
Vikas      3.2 - 0 - 26 - 2

LAST OVER
1  •  4  •  0  •  2  •  W  •  1

[ OPEN LIVE SCORE ]
```

Add a small sponsor ribbon underneath/around this component.

Important: this is a **visual demo state**, not actual live data.

---

# 15. PLAYER / MEMBER SECTION

Do not call players “students”.

Use:

- Members
- Players
- Club Members

Player page should communicate the journey from club participation to performance and achievement.

Example card:

```text
ROHIT SHARMA
Batter
DCC Member

Season 2026–27
Matches 12
Runs 486
Best 92*

[ VIEW PROFILE ]
```

---

# 16. PLAYER PROFILE

Each profile should have:

### Identity
- photo
- name
- primary role
- club membership indicator

### Performance
- matches
- runs
- average
- strike rate
- wickets
- economy
- catches

Only display relevant stats for the player’s role.

### Highlights
Examples:

- “Player of the Match vs Royal XI”
- “92* — season best”
- “4 catches in a match”
- “5 wickets in a practice match”
- “Selected for higher-level community competition”

Do not fabricate real achievements as factual claims. Mark demo content clearly inside code/data, or use generic sample data for presentation.

---

# 17. “FROM DCC TO THE NEXT LEVEL”

The client wants the website to demonstrate that members can grow beyond the immediate club environment and potentially play at higher/professional levels.

Create a storytelling section such as:

`Cricket Can Open Bigger Doors`

Copy direction:

`For some members, DCC is not the destination — it is part of the journey. As players develop, compete and build confidence, new opportunities can open up at higher levels of the game.`

Add one featured “Member Journey / Achievement” demo card.

Do not promise professional selection or guaranteed advancement.

---

# 18. MEMORIES / GALLERY — MAJOR FEATURE

This should be one of the biggest areas of the website.

The client explicitly wants the website to preserve memories from previous years.

Create:

### Gallery landing
Filters:

- Season
- Practice
- Match Day
- Tournament
- Get-together
- Team Moments

### Album cards

```text
SEASON 2025–26
Winter Practice Sessions
24 Photos

[ VIEW MEMORIES ]
```

Use rich mixed layouts:

- masonry/grid
- hero image + smaller tiles
- horizontal story strips
- full-width photo moments

Do not use a generic 3-column stock-gallery look everywhere.

---

# 19. VIDEO / TRAINING MEDIA

Create a separate media section or integrate it under “Club Life”.

Content categories:

- Coach Sessions
- Net Practice
- Batting Drills
- Bowling Drills
- Fielding Drills
- Fitness
- Practice Matches
- Match Moments

Video cards should feel like club media, not online courses.

Use a play button and realistic thumbnails.

Static demo can use placeholder image/video URLs or local demo assets, but code must keep media data-driven.

---

# 20. SOCIAL / COMMUNITY MOMENTS

Include a section showing:

- team gatherings
- celebrations
- dinners/get-togethers
- post-match moments
- team travel moments
- member bonding

Section title examples:

`Beyond the Boundary`

`More Than Match Day`

`The People Behind DCC`

This helps distinguish DCC from an academy.

---

# 21. ACHIEVEMENTS / CLUB HISTORY

Use a timeline or highlight strip:

```text
2013
DCC begins

...

2×
Runners-up Trophies

10
Current stated KVO ranking

25+
Tournament matches / season (approx.)

50+
Players & members
```

Do not imply any unverified championship victories.

Use “stated current ranking” or neutral presentation if needed.

---

# 22. ABOUT PAGE

The About page should explain:

1. Who DCC is
2. Devpur Gaam representation
3. Community-first nature
4. Cricket as a shared platform
5. Practice + professional coaching support
6. Competitive participation
7. Member growth
8. Social/community bonding
9. Future scope for more member activities

The page should read like the story of a club/community, not like an academy brochure.

---

# 23. SPONSOR PAGE

Create a dedicated sponsor area/page, even if the initial nav only links to it from the footer/homepage.

Sections:

- Why sponsors matter to DCC
- What sponsorship supports
- Sponsor visibility
- Current sponsors
- Sponsor brand showcase
- Community reach (use documented figures carefully)
- Contact / sponsorship enquiry CTA

Suggested copy direction:

`Our sponsors are part of the journey — supporting training, equipment, match participation and the wider cricket activities that keep the club moving forward.`

Do not promise guaranteed impressions, conversions, rankings, tournament results, or championship outcomes.

---

# 24. NAVIGATION — CHANGE THE INFORMATION ARCHITECTURE

Recommended main nav:

```text
Home
Club
Club Life
Matches
Players
Memories
Sponsors
```

Optional:

`Season` can be inside Club Life / Matches / Memories depending on space.

Do not use nav labels such as:

- Courses
- Coaching Programs
- Admissions
- Batches
- Classes
- Training Packages

The word “Training” may be used as a content category, but it should not define the overall navigation.

---

# 25. FOOTER

Footer should reinforce:

```text
DEVPUR CRICKET CLUB
Proudly Representing Devpur Gaam
PLAY • TRAIN • COMPETE • WIN

Club
Club Life
Matches
Players
Memories
Sponsors

Contact
Email
Instagram
Location

© Devpur Cricket Club
```

Keep the footer premium and community-oriented.

---

# 26. VISUAL DESIGN DIRECTION

## Primary feeling

The site should feel like:

**premium local sports club + community culture + authentic cricket + modern editorial storytelling**

Not:

**coaching academy + education landing page**

## Logo-led color direction

Use the supplied DCC logo as the main visual source.

The palette should stay around:

- deep black / charcoal
- warm white / ivory
- copper / orange-gold
- subtle champagne / sand tones
- deep cricket-ball red as a supporting accent

Avoid introducing a random blue/green startup palette.

If the existing project already has a custom `globals.css` palette, preserve it and optimize the variables so all DCC sections use the same token system.

Example token structure (adapt to the project’s current implementation rather than blindly replacing it):

```css
:root {
  --background: ...;
  --foreground: ...;
  --surface: ...;
  --surface-muted: ...;
  --border: ...;
  --dcc-dark: ...;
  --dcc-copper: ...;
  --dcc-copper-soft: ...;
  --dcc-red: ...;
  --dcc-cream: ...;
}
```

Do not hard-code random colors inside individual components.

Use CSS variables / Tailwind tokens consistently.

---

# 27. TYPOGRAPHY DIRECTION

Typography should feel:

- strong
- sporty
- editorial
- premium
- highly readable

Recommended pairing if not already fixed by the project:

- Display: a bold modern geometric/sport font
- Body: clean sans-serif

Do not overuse condensed “school/academy” sports typography.

Use uppercase selectively for labels, not for entire paragraphs.

---

# 28. COMPONENT ARCHITECTURE

Refactor into reusable components.

Suggested structure:

```text
components/
  site/
    Header.tsx
    Footer.tsx
    MobileNav.tsx

  home/
    ClubHero.tsx
    TodayMatch.tsx
    SponsorShowcase.tsx
    WhyWePlay.tsx
    ClubLife.tsx
    SeasonJourney.tsx
    FeaturedPlayers.tsx
    FeaturedAchievement.tsx
    MemoriesPreview.tsx
    CommunityMoments.tsx

  matches/
    MatchCard.tsx
    MatchFilters.tsx
    LiveScoreCard.tsx
    LiveMatchPreview.tsx
    MatchResult.tsx

  players/
    PlayerCard.tsx
    PlayerStats.tsx
    PlayerHighlight.tsx

  memories/
    GalleryCard.tsx
    GalleryGrid.tsx
    MediaCard.tsx

  sponsors/
    SponsorLogo.tsx
    SponsorStrip.tsx
    SponsorBanner.tsx
```

Do not duplicate the same card markup across pages.

---

# 29. STATIC DATA ARCHITECTURE

Put all demo content into a clear local data layer, for example:

```text
data/
  seasons.ts
  players.ts
  matches.ts
  tournaments.ts
  coaches.ts
  training.ts
  galleries.ts
  sponsors.ts
  achievements.ts
```

Example match object:

```ts
{
  id: 'match-001',
  season: '2026-27',
  tournament: 'KVO Community Cup',
  competitionType: 'White Ball',
  opponent: 'Royal XI',
  date: '2026-10-12',
  time: '04:00 PM',
  venue: 'Matunga Ground',
  status: 'live',
  liveScoreUrl: '#demo-live-score',
  result: null,
  sponsorIds: ['sponsor-1', 'sponsor-2']
}
```

The data model should be easy to replace later with Sanity queries.

---

# 30. DEMO MATCH STATE LOGIC

Even though this is static, the frontend should behave as if it were a real production site.

Create a utility/function that determines the homepage match state from demo data:

```text
if match is today && status = live
  show LIVE TODAY
else if match is today && status = scheduled
  show TODAY'S MATCH
else if nearest future match exists
  show NEXT MATCH
else
  show latest completed match
```

Do not manually duplicate the same match content in multiple files.

---

# 31. RESPONSIVE DESIGN

The client demo must look polished on:

- mobile
- tablet
- desktop
- large desktop

Prioritize mobile for:

- today’s match
- live-score CTA
- sponsor logos
- player cards
- galleries
- navigation

Do not create layouts that depend on hover for essential information.

---

# 32. IMAGE / MEDIA GUIDELINES

Use the provided DCC and sponsor assets.

For demo-only missing club photographs, use tasteful cricket/community placeholders that visually support the content, but keep them replaceable later by real DCC images.

Do not use obvious generic “academy student” stock images.

Prefer visual scenes such as:

- adult/community cricket practice
- team huddle
- match-day jersey
- net practice
- coach feedback
- fielding drills
- celebrations
- team/group moments
- sponsor jersey context

---

# 33. MICROCOPY RULES

Prefer:

- “Our Club”
- “Club Life”
- “Our Journey”
- “Our Players”
- “Matches We Play”
- “Tournament Participation”
- “Memories”
- “Community Moments”
- “Supported By”
- “Member Stories”

Avoid:

- “students”
- “enrollment”
- “course”
- “batch”
- “academy”
- “admission”
- “training package”
- “learn cricket in X days”

---

# 34. CONTENT TONE

Tone should feel:

- proud
- warm
- community-driven
- disciplined
- aspirational
- authentic
- sporty

Not:

- sales-heavy education marketing
- corporate SaaS
- school/institute brochure

The club should feel like a **family, sporting unit, and community network**.

---

# 35. WHAT MUST BE REMOVED OR DE-EMPHASIZED FROM CURRENT DEMO

Search the current frontend and remove/rewrite any UI that strongly suggests:

- coaching institute
- academy admissions
- courses/programs
- curriculum
- student enrollment
- class schedules as a primary product
- “professional training” as the primary reason to join
- generic coaching benefit hero sections
- “train like a pro” style positioning

If an existing section is useful, **reposition it** rather than deleting the whole idea.

Example:

`Professional Coaching` → `Guided Practice & Development`

`Training Programs` → `Club Practice`

`Students` → `Members / Players`

`Enroll` → `Become a Member` (only if membership CTA is actually needed in the demo)

---

# 36. FUTURE-READY BUT NOT IMPLEMENTED NOW

Do not build these systems in this frontend-only demo:

- Sanity CMS
- PostgreSQL
- Authentication
- Member dashboard
- Admin dashboard
- Payment / membership billing
- Sponsor onboarding workflow
- Real scoring engine
- WebSocket
- Real-time backend
- External score API integration
- Live broadcasting/video stream
- Notifications backend

However, keep components/data modular enough that these can be added later.

---

# 37. FUTURE DATA INTEGRATION PLAN

The eventual architecture should be compatible with:

```text
Next.js Frontend
      ↓
Sanity CMS
      ↓
Content: seasons / players / coaches / matches / sponsors / galleries / videos

External Score Provider / Cric Club
      ↓
Live Match Link / API / widget (subject to provider capability)
      ↓
DCC Website Live Match Experience
```

For now, only simulate this behavior visually.

---

# 38. DEMO CONTENT REQUIREMENTS

Create rich dummy data rather than repeating 3–4 generic entries.

Suggested demo seed:

### Seasons
- 2026–27
- 2025–26
- 2024–25
- 2023–24

### Matches
At least 8–12 demo matches spread across multiple tournaments and seasons.

Include:
- live match
- upcoming match
- completed win
- completed loss
- white-ball match
- red-ball match
- practice match

### Players
At least 10–14 players.

### Coaches
2–3 demo coach entries, with Aditya Koli as the primary documented example.

### Galleries
At least 6–8 albums distributed across seasons.

### Videos
At least 6–10 video entries.

### Sponsors
Use the supplied sponsor PNGs.

### Achievements
Use documented club facts plus clearly marked demo-only player achievement cards.

---

# 39. HOMEPAGE SPONSOR + MATCH COMBINATION

This is a particularly important presentation idea.

Design a composition where the client can visually understand the future commercial model:

```text
             TODAY'S MATCH
           DCC vs Royal XI

              LIVE SCORE

      SUPPORTED BY OUR SPONSORS

 [Logo]   [Logo]   [Logo]   [Logo]

 Community reach • Match visibility • Club support
```

The message should subtly communicate:

**Sponsors support the club, and the website becomes one of the club’s visibility channels when the community follows matches.**

Do not make exaggerated claims about guaranteed traffic or sponsor ROI.

---

# 40. “COMMUNITY > COACHING” VISUAL BALANCE RULE

When reviewing the homepage from top to bottom, the visitor should understand the following hierarchy:

```text
1. This is a community cricket club.
2. These are our people / members.
3. This is how we spend the season together.
4. We practice and develop our game.
5. We compete in tournaments and matches.
6. Here is the live score / match journey.
7. Here are our sponsors.
8. Here are our memories and achievements.
9. There is room for future community activities.
```

If the first screen primarily communicates coaching, the redesign has failed.

---

# 41. CLIENT PRESENTATION CHECK

Before finishing, review the site as if the client has never seen it.

Ask:

### Can I tell this is a community club within 5 seconds?
If no → revise hero.

### Does it feel like an academy?
If yes → remove/rewrite coaching-first copy.

### Can I immediately see today’s match?
If no → move Today/Live Match higher.

### Can I immediately see sponsors?
If no → strengthen Sponsor Showcase.

### Can I understand why members benefit from the club?
If no → strengthen community benefits section.

### Can I discover previous years and memories?
If no → strengthen Seasons + Memories.

### Can I see players as members with a journey, not students?
If no → revise player language.

### Does coaching feel like one part of the club?
If no → reduce its prominence.

---

# 42. ACCEPTANCE CRITERIA

The optimization is complete only when all of the following are true:

- [ ] Website clearly identifies DCC as a community cricket club.
- [ ] Coaching-institute / academy feeling is removed.
- [ ] Community is visible in hero and homepage narrative.
- [ ] “Today’s Match / Live Score” is a prominent homepage experience.
- [ ] Match links are modeled as external/live-score links, not a custom scoring engine.
- [ ] Sponsor showcase is visually prominent.
- [ ] Provided sponsor PNG assets are used.
- [ ] Club life shows practice, matches, community moments and social activities.
- [ ] Training/coaching is positioned as one club activity, not the whole product.
- [ ] Season structure is visible.
- [ ] Matches are shown as participation/history, not tournament administration.
- [ ] White-ball and red-ball formats can be represented.
- [ ] Player performance and achievements are visible.
- [ ] A “next level / member growth” story exists without guarantees.
- [ ] Memories/galleries are a major visual area.
- [ ] Videos/media are represented as club media, not online courses.
- [ ] Sponsor visibility is also reflected around match/live-score UI.
- [ ] Footer is club/community oriented.
- [ ] All dummy data is centralized and reusable.
- [ ] Responsive UI works across mobile/tablet/desktop.
- [ ] No Sanity/API/DB/backend implementation is introduced in this phase.
- [ ] Existing global color system is respected and polished.
- [ ] No random colors are hard-coded into individual components.
- [ ] No unsupported claims are presented as verified facts.

---

# 43. FINAL IMPLEMENTATION INSTRUCTION TO THE CODING AGENT

**Do not build a new generic cricket website from scratch.**

Inspect the existing project first.

Then:

1. Identify the current sections that make it look like a coaching institute.
2. Preserve good components where possible.
3. Refactor the information architecture around **club + community + cricket + matches + sponsors + memories**.
4. Keep the existing Next.js + TypeScript + Tailwind setup.
5. Use the existing custom color system in `globals.css`; normalize it rather than creating a second theme.
6. Use the provided DCC logo and sponsor assets.
7. Move demo content into local typed data modules.
8. Make the homepage feel like a real, premium community sports club website.
9. Make today/live/next match a first-class homepage experience.
10. Make sponsor visibility a first-class homepage + match experience.
11. Make memories and member stories visually important.
12. Keep coaching/training present but secondary.
13. Do not add backend or CMS code.
14. Do not invent production integrations.
15. Build the demo so the client can understand the future product within one scroll and then explore deeper pages.

The final result must feel like:

> **DEVPUR CRICKET CLUB — a proud community cricket club representing Devpur Gaam, where people come together through cricket to train, compete, stay fit, build friendships, create memories, and grow together.**

—not like a coaching academy.
