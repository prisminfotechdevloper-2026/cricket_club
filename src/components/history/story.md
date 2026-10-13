# HISTORY_UPDATE.md – Devpur Cricket Club /history page

Instructions for an AI coding agent. Do every task below in `HistoryHero.tsx` (and the roadmap component if noted). Change nothing else: no routes, nav, global styles, colors or fonts. **Ignore text-color and contrast issues.**

## 0. Source of truth
The client's vision doc (section 3) and the approved story text (section 2) win over anything already on the page. Do not invent facts, numbers, awards, names or dates. If something is unclear, leave it as is and list it under "Open questions" in your final reply.

## 1. Task list
1. **Rename the vision section.** Heading "What the club has done so far" becomes **"Our vision: cricket as our medium"**. The content is goals, not achievements.
2. **Replace its intro line** (currently "Since the very first match… catalyst…", which was not approved) with:
   > For us, cricket is not just about the score. It is how we bring the Devpur community together.
3. **Replace `SIX_IMPACTS` with `VISION_POINTS`** (section 3). Keep the existing icons, card grid and card styles. Render `item.description` as JSX, so the `<strong>` key phrases show. Style `strong` as `font-semibold text-[#0F172A]`.
4. **Gaam wording.** Use **"52–42 gaams"** everywhere on the site (story, cards, roadmap). Replace every "52 and 42".
5. **Rewrite the "More than tournaments" paragraphs** (section 2) so they read as full sentences, not fragments.
6. **Remove the "Closing" label** above the closing paragraph. Keep the paragraph.
7. **Remove 01–06 numbering** if any is left on the cards. These points are not a sequence.
8. **Fix the "Meet Our Squad" button.** It links to `/members`, which is not in the nav and may 404. Check if the route exists. If not, remove the button (keep "Join Devpur" → `/contact`).
9. **Remove unused imports** from lucide-react (`Heart`, `Sparkles`, `Users`) unless the icons are now used. Keep the ones in use.
10. **"Est. 2013" appears twice** (roadmap and story header). Keep it in one place only.
11. **Roadmap overlap.** The roadmap already has an "Our Vision" step. If it has its own section elsewhere, keep the full vision cards there and leave only a 1–2 line summary on this page. If not, keep the cards here.

## 2. Approved story text
Headline (H1): Every team has a beginning. Ours began with a conversation.

**Where it started** (already live, keep as is)
The passion for cricket has always been alive in our KVO community. Year after year, the Kutchi Visa Oswal (KVO) Cricket Tournaments brought the Kutchi community together through competition, recreation and a shared love for the game. Watching that spirit, two friends from Devpur Gaam started talking.

Quote (keep once): "When cricket can bring so many people together, why can't we build a Devpur Gaam team of our own and bring Devpur's youngsters together?"

A casual conversation became an idea worth pursuing: one team, one identity, one shared passion for the youth of Devpur.

**More than tournaments** (replace current two paragraphs with this)
The vision was bigger than playing matches. We wanted the youngsters of Devpur to meet, connect and discover the talent within our community, to revive friendships, build new bonds and bring Devpur families closer. We imagined a team that gives our youth a reason to come together, a platform to show their potential, and memories to carry for years.

So the conversation became a vision, and the vision became Devpur Cricket Club.

**Closing** (keep as is)
Devpur Cricket Club is not just about the game. It is about our roots, our people and the pride of Devpur Gaam. This is where our story began, and it is only the beginning.

## 3. Vision cards (from the client's Vision & Philosophy doc)
Goal: a third-person reader should grasp the club's goals just by skimming the bold phrases.

```tsx
const VISION_POINTS = [
  {
    title: "Connect youth and gaams",
    description: (<>Cricket tournaments and fixtures are a bridge for <strong>Devpur youth to connect with all 52–42 gaams</strong> of KVO.</>),
  },
  {
    title: "Align generations",
    description: (<>Veterans and youth come together on the field around <strong>a common motive and shared passion</strong>.</>),
  },
  {
    title: "From pitch to family",
    description: (<>On-field connections become <strong>deep friendships, and friendships become an extended family</strong>.</>),
  },
  {
    title: "Uplift the community",
    description: (<>Our cricketing journey and club spirit drive <strong>the growth of the Devpur community as a whole</strong>.</>),
  },
  {
    title: "Business and career networking",
    description: (<>Match days and tournaments create <strong>more business and career opportunities</strong> across the gaam and the wider KVO community.</>),
  },
  {
    title: "Culture and values",
    description: (<>Jain principles, <strong>ethics, mutual respect and cultural sharing</strong> in every practice and match.</>),
  },
];
```

Keep the current icon mapping in the same order: people, handshake, heart, trending-up, briefcase, sparkles.

## 4. Data conflicts (do not guess, report them)
| Where | Says | Problem |
|---|---|---|
| Roadmap step 3 | "Sportobuddy 5× Finalists" | Count differs from footer |
| Roadmap step 4 | "5× Runners-Up" | Footer says 2× |
| Footer | "KVO RANK #10 • 2× RUNNERS-UP" | Conflicts with roadmap |

Leave these unchanged until the owner confirms the correct number. Mention them in the final reply.

## 5. Writing rules
- Plain English, active voice, short sentences.
- Sentence case for headings and card titles.
- Always "Devpur", "Devpurians", "gaam/gaams", "KVO", "Kutchi Visa Oswal", "Jain".
- No emoji, no hype words, no invented stats.

## 6. Done checklist
- [x] Heading reads "Our vision: cricket as our medium", with the new intro line.
- [x] Six vision cards use `VISION_POINTS`, with bold key phrases and original icons.
- [x] "52–42 gaams" everywhere; no "52 and 42" left.
- [x] "More than tournaments" uses the new text.
- [x] No "Closing" label, no numbering, no unapproved paragraph.
- [x] `/members` button fixed or removed; no broken links.
- [x] Unused imports removed; `npm run build` and lint pass.
- [x] Layout still good at 360 px width.
- [x] Final reply lists: changes made, open questions (the 5× vs 2× conflict), anything skipped and why.