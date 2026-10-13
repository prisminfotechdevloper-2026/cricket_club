STORY.md – Devpur Cricket Club "Our Story" page

Instructions for an AI agent that updates the Story / History / Club Overview page. Follow this file over any older copy on the page.

1. Task

Rewrite the existing Story page so it matches the approved content in section 4. Change only the Story page. Do not touch other pages, routes, nav, or global styles unless a fix is required for this page to render.

2. Before editing: audit the current page

Find the current Story page in the repo and list what is wrong. Check each item and report it:

 Wrong facts (club name, gaam name, "two friends" origin, KVO full form).
 Text that does not exist in section 4 (invented players, dates, trophies, stats, quotes).
 Wrong or missing heading, or more than one H1.
 Missing hero image, broken image path, missing alt.
 Spelling and name consistency: Devpur, Devpurians, gaam/gaams, KVO, Kutchi Visa Oswal, Jain.
 Layout broken on mobile (320–430 px), horizontal scroll, text under 16 px.
 Placeholder or lorem text left in. Output a short list of findings, then fix them.
3. Structure (in this order)
H1 (headline): Every team has a beginning. Ours began with a conversation.
Hero image: one team or tournament photo. 16:9, object-fit: cover, descriptive alt. If no photo is supplied, keep a clearly marked placeholder. Never use a stock photo of other people.
H2 "Where it started": KVO tournaments, the two friends, the quote.
H2 "More than tournaments": vision, youth, families, belonging.
H2 "What the club has done so far": the six impact points as a list.
Closing block: roots, people, pride; "only the beginning."
4. Approved content (source of truth)

Where it started The passion for cricket has always been alive in our KVO community. Year after year, the Kutchi Visa Oswal (KVO) Cricket Tournaments brought the Kutchi community together through competition, recreation and a shared love for the game. Watching that spirit, two friends from Devpur Gaam started talking.

Quote: "When cricket can bring so many people together, why can't we build a Devpur Gaam team of our own and bring Devpur's youngsters together?"

A casual conversation became an idea worth pursuing: one team, one identity, one shared passion for the youth of Devpur.

More than tournaments The vision was bigger than playing matches. Meet, connect and discover the talent within our community; revive friendships, build new bonds, bring Devpur families closer, strengthen belonging among Devpurians. A team that gives youth a reason to come together, a platform to show potential, and memories for years. The conversation became a vision, and the vision became Devpur Cricket Club.

What the club has done so far

Helped Devpur youth connect with the 52 and 42 gaams of KVO. (Confirm wording with owner: source note says "52-42 gaams".)
Brought different generations together around a common purpose.
Turned connections into friendships, and friendships into family.
Lifted the community as a whole.
Opened more business and career opportunities across the gaam and the KVO community.
Shared our culture and Jain principles.

Closing Devpur Cricket Club is not just about the game. It is about our roots, our people and the pride of Devpur Gaam. This is where our story began, and it is only the beginning.

5. Writing rules
English, simple words, active voice, sentence case headings.
Warm and proud, not boastful. No invented numbers, awards or names.
Paragraphs of 2–4 sentences. Line length under 70 characters.
Keep the quote exactly once, styled as a blockquote.
CAPS only for acronyms (KVO). No ALL-CAPS emphasis, no emoji.
6. Design rules
Palette: navy 
#0E2A47, pitch green 
#E0A526, chalk 
#F6F7F2. Support dark mode.
Fonts: Fraunces (headings), Mulish (body), with system fallbacks.
Body at least 18 px, line-height about 1.7, content max-width about 720 px.
Images: lazy-load below the fold, compressed, with alt.
Accessible: contrast AA, visible focus, respects prefers-reduced-motion.
No heavy animation, no carousels.
7. Done checklist
 Text matches section 4 word for word (minor typo fixes only).
 One H1, three H2s, correct order.
 Hero image present with alt, or placeholder clearly marked.
 Works at 360 px width without horizontal scroll.
 No console errors, no broken links.
 Final reply lists: what was wrong, what changed, open questions (e.g. the "52-42 gaams" wording, hero photo).