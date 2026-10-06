DCC Cricket Hub — Frontend Demo Implementation Task

1. Project Brief

Build a client-facing frontend-only demo for Devpur Cricket Club (DCC) using Next.js + TypeScript + Tailwind CSS.

This is a visual/product overview demo, not the final production application.

The client is a cricket club, not a tournament organizer. The club runs its own cricket development/practice program during the season (roughly October–March), works with coaches, conducts net/training sessions, develops club members' game, and then participates in multiple external tournaments/competitions where the club plays matches.

The website should communicate:

Club identity and legacy

Current-season activity

Training and coaching

Club players

External tournament participation

Upcoming / live / completed matches

Live-score links / live score experience

Player batting, bowling and fielding performances

Season highlights and achievements

Large photo/video memory galleries

Year-wise / season-wise club history

Important scope clarification

Do not build a tournament-management system in this demo.

Do not build a custom live-scoring backend.

Do not build a video broadcasting system.

The demo should only present the experience using realistic dummy data. For live score, model it as an external score provider/link and also provide a polished static internal live-score preview page so the client can understand the intended final product.

The future production version will later add:

Sanity CMS

APIs

Database

Real match/score data

External live-score integration

Authentication/admin workflows

For this task, everything is frontend + dummy data.

2. Brand / Visual Direction

Use the provided DCC logo as the primary brand reference.

Logo identity

The supplied logo contains:

Near-black / charcoal shield

White / ivory interior

Warm orange / copper border

Deep maroon/red cricket-ball accent

Black typography

Premium sports-club emblem feel

Color palette

Use a light overall UI. Do not make the whole website dark.

Recommended brand tokens:

:root {
  --background: #F6F5F3;
  --surface: #FFFFFF;
  --surface-soft: #FBFAF8;
  --foreground: #0B0B0D;
  --foreground-soft: #44454B;
  --muted: #74767D;
  --border: #E8E3DD;
  --border-strong: #D6CEC5;

  --brand-black: #090A0C;
  --brand-charcoal: #1B1D22;
  --brand-orange: #EFA267;
  --brand-copper: #CF7647;
  --brand-peach: #F3CA9F;
  --brand-maroon: #7A201B;
  --brand-red: #A40F1F;

  --success: #198754;
  --warning: #B7791F;
  --danger: #B42318;
  --info: #315D8C;

  --shadow-sm: 0 2px 10px rgba(9, 10, 12, 0.05);
  --shadow-md: 0 12px 35px rgba(9, 10, 12, 0.08);
}

Color usage rules

Page background: ivory/off-white.

Cards: white.

Main typography: near-black/charcoal.

Orange/copper is the brand highlight, not the page background.

Use maroon/red mainly for cricket-ball details, live/wicket indicators, and small accents.

Use orange for primary CTAs, active states, badges, dividers and decorative sports details.

Keep borders subtle.

Avoid rainbow-style UI.

Keep the visual tone premium, athletic, warm and trustworthy.

Typography

Use a clean modern sans-serif such as Manrope throughout.

Typography direction:

Large editorial headlines

Strong numeric treatment for cricket scores/statistics

Tight tracking for uppercase small labels

Comfortable body copy

Avoid overly futuristic / AI-looking typography

3. Core Product Story

The page hierarchy should tell this story:

WHO WE ARE
   ↓
HOW WE DEVELOP PLAYERS
   ↓
WHAT WE ARE PLAYING NOW
   ↓
HOW OUR PLAYERS PERFORM
   ↓
WHAT WE HAVE ACHIEVED
   ↓
OUR MEMORIES / LEGACY

This should feel like a professional cricket club digital home, not like a generic sports template.

4. Technical Stack

Use:

Next.js (App Router)

TypeScript

Tailwind CSS v4

lucide-react for icons

Next/Image for local images

Next/Font for typography

React client components only where interactions are required

Dummy local data files only

No backend in this phase

Do not add:

Sanity

PostgreSQL

MongoDB

Prisma/Drizzle database code

API routes for CRUD

Authentication

WebSockets

External live-score API integration

The frontend should be structured so these can be plugged in later without rewriting the UI.

5. Suggested Folder Structure

Use a clean scalable structure similar to:

app/
  page.tsx
  about/
    page.tsx
  training/
    page.tsx
  players/
    page.tsx
    [slug]/
      page.tsx
  matches/
    page.tsx
    [slug]/
      page.tsx
  tournaments/
    page.tsx
    [slug]/
      page.tsx
  seasons/
    page.tsx
    [slug]/
      page.tsx
  gallery/
    page.tsx
    [slug]/
      page.tsx
  achievements/
    page.tsx

components/
  layout/
  navigation/
  home/
  matches/
  players/
  training/
  gallery/
  seasons/
  achievements/
  common/

lib/
  data/
    seasons.ts
    players.ts
    coaches.ts
    tournaments.ts
    matches.ts
    training.ts
    gallery.ts
    achievements.ts
  types/
    cricket.ts
    content.ts

public/
  logo.png
  images/
    players/
    matches/
    training/
    gallery/
    tournaments/

styles/
  globals.css

Keep data separate from components so later Sanity/API integration is easy.

6. Navigation

Create a responsive premium header.

Desktop navigation

LOGO

Home
About
Training
Matches
Players
Seasons
Gallery

[ View Live Score ]

Use a clean sticky header with subtle backdrop/blur.

Mobile navigation

Use a menu button and slide-down / drawer navigation.

Do not overcrowd the mobile header.

Header behaviour

Sticky on scroll

White/ivory background

Subtle border

Active route state

Compact height

Logo visible and sharp

Primary CTA uses brand orange/copper

Use lucide-react icons. Do not manually draw SVG icons.

7. Homepage — Highest Priority

The homepage is the main client demo screen.

It must immediately show the club's current story and the current match experience.

7.1 Hero section

Create a premium hero, not an oversized full-screen banner.

Content:

Eyebrow:

DEVLUR / DEVPUR CRICKET CLUB

Use the exact club name from the logo where appropriate:

DEVPUR CRICKET CLUB

Headline direction:

Train With Purpose.
Play With Pride.
Build The Legacy.

Supporting copy:

A competitive cricket club built around disciplined training,
player development, match experience and a strong sporting community.

CTA:

Explore The Club
View Matches

Hero visual:

Use the DCC logo prominently

Add a cricket visual treatment / subtle field texture if local assets exist

Prefer image + elegant content composition over generic stock-banner look

Use orange/copper detailing

Do not use a 100vh section.

8. Today's Match / Live Match Section

This is one of the most important client requirements.

The client wants the match happening on that day to appear on the homepage with its score link.

For the static demo, simulate this with a realistic LIVE NOW match.

Example dummy match:

Jhalawar Premier League 2026

DCC vs Royal XI
LIVE NOW

DCC 146/4
17.2 Overs

Royal XI 183/8
20 Overs

Need 38 runs from 16 balls

[ View Live Score ]

Under the card:

Today
6:00 PM
Devpur Cricket Ground

Also show a secondary upcoming match card:

NEXT MATCH
DCC vs Kota Warriors
14 Oct • 4:00 PM

Live score button

For demo:

Link to /matches/dcc-vs-royal-xi

The internal page should look like a live-score experience.

Keep the external provider URL as a field in the dummy match object for future integration.

Example dummy property:

scoreUrl: "https://example.com/live/dcc-vs-royal-xi"

Do not depend on this URL for the demo to work.

9. Live Score Preview Page

Route:

/matches/dcc-vs-royal-xi

Design this page as a Cricbuzz-inspired information layout, but do not copy Cricbuzz branding or exact UI.

Show:

Match header

Jhalawar Premier League 2026
Semi Final

DCC Cricket Club
vs
Royal XI

LIVE

Score summary

DCC
146/4 (17.2)

Royal XI
183/8 (20)

Need 38 runs from 16 balls

Current batters

Aarav Mehta       67* (39)
Rohan Singh       31* (24)

Current bowler

Vikas Rathore
3.2 - 0 - 28 - 2

Last 6 balls

1   4   0   2   6   1

Commentary feed

17.2 — Vikas to Aarav — 1 run
17.1 — Vikas to Aarav — SIX!
16.6 — Vikas to Rohan — 2 runs
16.5 — Vikas to Rohan — No run

Scorecard tabs

Scorecard
Commentary
Overs
Teams

For the demo, tabs can be client-side interactive and switch between static sections.

10. About Page

Route:

/about

Tell the club story.

Sections:

Club introduction

What the club stands for

Training philosophy

October–March annual cycle

Coaches / development approach

Competitive participation

Team values

Use editorial layouts rather than repetitive cards.

Example section:

From Net Practice To Match Day

Every season is a journey of preparation, discipline and performance.
We train together, learn together and compete together.

11. Training Page

Route:

/training

This should strongly represent the client's coaching and player-development process.

Hero

Training & Player Development

Preparation happens before match day.

Training categories

Net Practice
Batting Sessions
Bowling Sessions
Fielding Drills
Fitness
Coach Sessions
Match Preparation

Training session cards

Example:

Batting Under Pressure
Coach: Rahul Sharma
12 October 2026

Focus:
Strike rotation + boundary options

[ Watch Session ]

Use dummy videos as poster cards; actual playback is not required.

Coach spotlight

Show 2–3 coaches with:

photo

name

role

experience

coaching focus

12. Players Page

Route:

/players

Create a premium player directory.

Include:

Search

Role filter

Season filter

Player cards

Player card:

Photo

Aarav Mehta
Opening Batter

Matches  12
Runs     486
SR       151.2

[ View Profile ]

Roles:

Opening Batter
Middle Order
All-Rounder
Fast Bowler
Spinner
Wicketkeeper

13. Player Detail Page

Route:

/players/aarav-mehta

Create a visually strong profile.

Sections:

Profile header

Aarav Mehta
Right-Hand Batter
DCC Cricket Club

Career/season summary

Matches       28
Runs          1,146
Average       41.0
Strike Rate   148.6
50s           8
100s          1

Current season

Show:

runs

strike rate

highest score

4s

6s

catches

awards

Recent performances

92* vs Royal XI
67 vs Warriors
54 vs Kota Stars

Highlight

Include a small editorial highlight:

Season Highlight
Match-winning 92* in the JPL quarter-final.

14. Matches Page

Route:

/matches

This page shows the club's match history across tournaments.

Filters

Season
Tournament
Status
Result

Tabs

Upcoming
Live
Results

Match card should show:

Jhalawar Premier League 2026
DCC vs Royal XI
12 Oct 2026 • 6:00 PM
Devpur Cricket Ground

LIVE
[View Live Score]

Completed match:

DCC WON
by 6 wickets

DCC 184/4
Royal XI 183/8

[View Match]

15. Tournament / Competition Participation Page

Route:

/tournaments

This is not a tournament management page.

It is an archive of tournaments/competitions in which the club participated.

Example:

Jhalawar Premier League 2026
5 Matches
3 Wins
Quarter Final

[View Tournament]

Other examples:

Kota Cricket League 2026

Rajasthan Club Championship 2026

Winter Cricket Cup 2027

Tournament detail route:

/tournaments/jhalawar-premier-league-2026

Show:

tournament banner

club's matches

results

key performances

top player

gallery

short summary

16. Seasons Page

Route:

/seasons

This is one of the strongest client-facing features because the client wants year-wise memories.

Show seasons as an archive:

2026–27
Training • Matches • Achievements • Gallery

2025–26
Training • Matches • Achievements • Gallery

2024–25
Training • Matches • Achievements • Gallery

Current season should be visually featured.

Season detail:

/seasons/2026-27

Show:

season overview

training activity

matches

key players

achievements

season highlights

memories gallery

17. Performance / Season Highlights

Create a reusable section called something like:

Season Highlights

Show important achievements, not only raw statistics.

Examples:

Aarav Mehta
92* in a quarter-final

Vikas Rathore
5 wickets in a match

Rohan Singh
4 catches across the tournament

Team
3-match winning streak

The UI should make children/players feel recognized.

This directly reflects the client's request to showcase what each player did well during the year.

18. Gallery Page

Route:

/gallery

This should be a visually rich page.

Categories:

All
Training
Match Day
Tournaments
Team Moments
Celebrations
Behind The Scenes

Use a responsive editorial masonry-like grid or varied card composition.

Avoid making every image the same rectangular card.

Each album should show:

Album title
Season
Date
Image count

Example:

JPL Match Day — Royal XI
2026–27
24 Photos

19. Gallery Detail Page

Route:

/gallery/jpl-match-day-royal-xi

Show:

album title

date

short caption

responsive photo grid

fullscreen/lightbox preview

A simple client-side lightbox/modal is preferred for the demo.

20. Achievements Page

Route:

/achievements

Show club and player achievements.

Examples:

2026
JPL Semi-Finalists

2025
Winter Cup Champions

2025
Aarav Mehta — Best Batter

2024
Vikas Rathore — Best Bowler

Use timeline / trophy-card presentation.

Do not make the page look like a generic dashboard.

21. Footer

Footer should contain:

DCC logo

short club statement

quick links

contact details (dummy data)

social links (dummy)

season note

copyright

Example:

Devpur Cricket Club
Train. Compete. Remember.

Home  Training  Matches  Players  Gallery

Instagram  YouTube  Facebook

© 2026 Devpur Cricket Club

22. Dummy Data Requirement

Use realistic dummy data so the demo feels like a real product.

Do not use random placeholder strings such as Lorem ipsum, Player 1, Team A, etc.

Dummy club identity

Club: Devpur Cricket Club
Short name: DCC
Location: Devpur, Rajasthan
Season: 2026–27
Season period: October 2026 – March 2027

Dummy tournaments

Jhalawar Premier League 2026
Kota Cricket League 2026
Rajasthan Club Championship 2026
Winter Cricket Cup 2027

Dummy players

Create at least 8–12 players with realistic names, photos/placeholders, roles and stats.

Suggested names:

Aarav Mehta — Opening Batter
Rohan Singh — Wicketkeeper Batter
Vikas Rathore — Fast Bowler
Kabir Sharma — All-Rounder
Mohit Choudhary — Spinner
Dev Joshi — Middle Order Batter
Yash Verma — Fast Bowler
Arjun Solanki — All-Rounder
Aditya Jain — Batter
Manav Pareek — Fielder / Batter

Dummy coaches

Rahul Sharma — Head Coach
Amit Verma — Batting Coach
Sandeep Rathore — Bowling Coach

Dummy matches

Include at least:

1 live match

2 upcoming matches

5 completed matches

Dummy galleries

At least 5 albums across 3 seasons.

Dummy training sessions

At least 6 sessions.

Dummy achievements

At least 8 achievements/highlights.

23. Suggested Home Page Section Order

Use this order unless there is a strong UX reason to change it:

1. Header
2. Hero
3. Today's / Live Match
4. Next Match
5. Club Introduction
6. Training & Player Development
7. Featured Players
8. Current Season Highlights
9. Tournament Participation
10. Latest Memories / Gallery
11. Coaches
12. CTA / Join or Contact
13. Footer

The live match should appear very high on the homepage because this is one of the client's primary use cases.

24. Reusable Components

Build reusable UI components instead of duplicating JSX.

Recommended:

SiteHeader
MobileNav
SiteFooter
SectionHeading
PageHero
LiveBadge
MatchCard
UpcomingMatchCard
ResultMatchCard
LiveScoreCard
ScoreSummary
BattingTable
BowlingTable
CommentaryList
PlayerCard
PlayerStatGrid
CoachCard
TrainingCard
TournamentCard
SeasonCard
AchievementCard
GalleryAlbumCard
GalleryGrid
Lightbox
CTASection
StatsStrip

25. Data Interfaces

Create reusable TypeScript interfaces.

Example:

export interface Player {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  battingStyle?: string;
  bowlingStyle?: string;
  stats: {
    matches: number;
    runs: number;
    average: number;
    strikeRate: number;
    fours: number;
    sixes: number;
    wickets: number;
    catches: number;
  };
}

Example match interface:

export interface Match {
  id: string;
  slug: string;
  tournament: string;
  season: string;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  status: "upcoming" | "live" | "completed";
  result?: string;
  dccScore?: string;
  opponentScore?: string;
  scoreUrl?: string;
  featured?: boolean;
}

Keep these interfaces future-compatible with real APIs.

26. Global CSS Requirement

Create a polished globals.css using the DCC palette.

Tailwind CSS v4 should be used.

Suggested base:

@import "tailwindcss";

:root {
  --background: #F6F5F3;
  --surface: #FFFFFF;
  --surface-soft: #FBFAF8;
  --foreground: #0B0B0D;
  --foreground-soft: #44454B;
  --muted: #74767D;
  --border: #E8E3DD;
  --border-strong: #D6CEC5;

  --brand-black: #090A0C;
  --brand-charcoal: #1B1D22;
  --brand-orange: #EFA267;
  --brand-copper: #CF7647;
  --brand-peach: #F3CA9F;
  --brand-maroon: #7A201B;
  --brand-red: #A40F1F;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-manrope), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

::selection {
  background: var(--brand-peach);
  color: var(--brand-black);
}

Also define reusable utility classes when useful, for example:

.container-shell {
  width: min(100% - 2rem, 1280px);
  margin-inline: auto;
}

.section-space {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.brand-ring {
  box-shadow: 0 0 0 1px rgba(207, 118, 71, 0.18), 0 12px 30px rgba(9, 10, 12, 0.06);
}

Do not create a massive CSS file if Tailwind utilities can handle the styling.

27. Tailwind Design Tokens

Map the visual palette into Tailwind v4 theme tokens where appropriate.

Recommended semantic naming:

brand-black
brand-charcoal
brand-orange
brand-copper
brand-peach
brand-maroon
surface
surface-soft
foreground
muted
border

Prefer semantic classes over raw hex values repeated across components.

Bad:

className="bg-[#efa267]"

Preferred:

className="bg-brand-orange"

28. Responsive Requirements

The demo must work well on:

Desktop 1440px

Desktop 1280px

Tablet 1024px

Mobile 768px

Mobile 390px

Mobile 360px

Mobile priorities

Today's match

Live score CTA

Upcoming match

Player highlights

Gallery

Navigation

No horizontal page overflow.

Avoid unnecessary full-width dense tables on mobile. Convert stats into horizontally scrollable or stacked layouts where needed.

29. Interaction Requirements

Even though this is a static demo, it should feel like a real application.

Implement:

Mobile navigation

Active navigation states

Player search

Player role filters

Match status filters

Season filter

Gallery category filters

Gallery lightbox/modal

Live score tabs

Hover states

Button press/transition states

Smooth section reveals if a lightweight animation library already exists; otherwise use CSS transitions only

Avoid excessive animations.

The demo should feel polished, calm and premium.

30. Loading / Empty States

Create simple reusable states even if data is static.

Examples:

No match scheduled today.

No gallery items found.

No players match your search.

Use these for filtered states.

31. Accessibility

Implement:

semantic HTML

alt text on images

visible keyboard focus

proper button labels

sufficient text contrast

accessible mobile menu

accessible modal/lightbox

Do not rely only on color to communicate LIVE / WON / LOST.

32. SEO Demo Requirements

Even though this is only a frontend demo, add basic metadata for each major route.

Home metadata example:

Title: Devpur Cricket Club | Train. Compete. Remember.
Description: Devpur Cricket Club — training, player development, matches, performances and cricket memories.

Add route-specific titles for:

Training

Players

Matches

Tournaments

Seasons

Gallery

Achievements

Use meaningful URLs/slugs.

33. Image / Media Strategy for Demo

Use local assets whenever possible.

Minimum expected local asset categories:

/public/logo.png
/public/images/players/*
/public/images/training/*
/public/images/gallery/*
/public/images/matches/*

If real photos are not available yet, use tasteful cricket-related placeholders from a public image source during development, but keep all content/data structured so they can later be replaced from Sanity.

Do not make the UI dependent on remote images that can randomly fail.

34. Important UI Rules

Do

Light premium sports-club aesthetic

Strong typography

Generous whitespace

Orange/copper accents

Realistic cricket terminology

Editorial photography layouts

Subtle borders and shadows

Consistent card radius

Strong score numbers

Clear primary CTA

Do not

Make every section full-screen

Use giant gradient blobs everywhere

Use neon colors

Use excessive glassmorphism

Use AI-generated futuristic visuals

Use generic SaaS dashboard styling

Overuse rounded pills

Build a tournament organizer dashboard

35. Recommended UI Radius / Spacing

Use a consistent system:

Small cards:     rounded-2xl
Feature cards:   rounded-3xl
Buttons:         rounded-xl / rounded-2xl
Images:          rounded-2xl / rounded-3xl

Do not use different radii randomly.

Spacing should feel premium rather than cramped.

36. Live Badge Design

Live badge should be visually obvious.

Example:

● LIVE NOW

Use dark/red accent for the status indicator while keeping the surrounding card light.

Wicket example:

WICKET

Do not make the entire live section bright red.

37. Mobile Live Score Layout

On mobile, prioritize:

Tournament
Match
LIVE

DCC 146/4
17.2 Overs

Need 38 from 16

Current batters
Current bowler
Last 6 balls

[ Scorecard ] [ Commentary ]

Keep important match information above the fold without making the section full-screen.

38. Homepage Featured Statistics

Add a compact strip such as:

12
Matches This Season

486
Runs — Aarav Mehta

18
Wickets — Vikas Rathore

9
Season Highlights

This is for visual storytelling, not final verified statistics.

39. Club Journey Timeline

Add a simple visual timeline:

OCT
Season Begins

NOV
Training + Match Preparation

DEC
Tournament Participation

JAN
Competitive Matches

FEB
Knockout Push

MAR
Season Wrap + Awards

This communicates the client's annual operating cycle.

40. Demo Content Tone

Use confident but authentic sports language.

Preferred:

Built through repetition.
Tested under pressure.
Remembered beyond the scoreboard.

Avoid overly corporate copy such as:

We provide innovative synergistic cricket solutions.

41. Future Integration Notes

Design the frontend so the data source can later be replaced.

Current:

lib/data/*.ts

Future:

Sanity CMS / API
      ↓
Server components / fetching layer
      ↓
Same UI components

Do not hard-code all data directly inside page JSX.

42. Future Sanity Mapping

Keep the future content model in mind:

season
player
coach
trainingSession
tournament
match
performance
achievement
galleryAlbum
galleryItem

The static objects should roughly follow these future models.

43. Build Order

Implement in this sequence:

Step 1

Set up Next.js App Router + TypeScript + Tailwind v4.

Step 2

Add DCC logo and global theme.

Step 3

Create global header, footer, containers and typography system.

Step 4

Build homepage.

Step 5

Build live match + live score preview page.

Step 6

Build matches page + filters.

Step 7

Build players + player profile.

Step 8

Build training + coaches.

Step 9

Build tournament participation archive.

Step 10

Build seasons + achievements.

Step 11

Build gallery + album detail/lightbox.

Step 12

Polish responsive states, accessibility, metadata and transitions.

Step 13

Run production build and fix all errors/warnings.

44. Final Acceptance Criteria

The task is complete only when:

The website clearly looks like a premium cricket club website.

DCC branding and logo are consistently visible.

The UI uses the custom black / ivory / orange / copper / maroon palette.

The overall site is light, not dark.

Homepage immediately communicates the club identity.

A Today's Match / Live Match module is visible near the top of the homepage.

Clicking View Live Score opens a polished live-score preview page.

Matches support upcoming, live and completed visual states.

Players have profile pages and realistic statistics.

Training/coaching content is represented.

Tournaments are represented only as competitions the club participated in.

Seasons provide year-wise history.

Achievements/highlights show what individual players did well.

Gallery is a major visual section, not an afterthought.

Gallery supports filtering and a lightbox/modal.

Mobile navigation works.

Mobile layouts do not overflow horizontally.

Components are reusable.

Dummy data is kept outside JSX wherever practical.

No backend/database/Sanity/auth is added.

No custom live-scoring engine is added.

The project builds successfully with npm run build.

No major console errors remain.

45. Definition of Done for Client Demo

A client should be able to open the demo and understand within 1–2 minutes:

This is our cricket club.
        ↓
These are our coaches and training sessions.
        ↓
These are our players.
        ↓
These are the tournaments we participate in.
        ↓
This is the match we are playing today.
        ↓
This is where the live score appears.
        ↓
These are our player performances.
        ↓
This is our season history and memories.

The final demo should feel ready to present to a client, even though the data is currently static.

46. Important Instruction to AI Coding Agent

Do not over-engineer this phase.

The goal is UI validation and client approval.

Build a highly polished, responsive and realistic frontend first. Do not start implementing Sanity, APIs, database schemas or authentication in this phase.

Use clean architecture so that those systems can be added later with minimal UI changes.

The design should take visual inspiration from premium cricket / sports platforms such as Cricbuzz in terms of information hierarchy, but the branding, layout, copy and component design must be original to Devpur Cricket Club.

The site should look like a real cricket club's digital home, not like a generic AI-generated template.

47. Suggested Project Commands

If starting from scratch:

npx create-next-app@latest dcc-cricket-hub --typescript --tailwind --eslint --app
cd dcc-cricket-hub
npm install lucide-react
npm run dev

For the final check:

npm run build
npm run start

48. Deliverables from the Coding Agent

The coding agent should deliver:

Fully working Next.js frontend demo.

Responsive desktop/tablet/mobile UI.

DCC logo integration.

Global custom theme in globals.css.

Reusable components.

Structured local dummy data.

All routes listed in this document.

Interactive filters / tabs / lightbox / mobile nav.

Live-score preview page.

Clean build with no blocking errors.

Do not add backend infrastructure in this phase.