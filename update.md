# Task: Improve DCC Vision Cards Content & Highlighting

Update the existing **Devpur Cricket Club (DCC) — “Our Vision: Cricket as Our Medium”** section according to the following requirements.

## 1. Objective

Make all six vision cards easy to understand at a glance. A first-time visitor should quickly understand the main purpose of each card without reading the entire paragraph.

Keep the content concise, meaningful, and community-focused. Highlight only the most important keywords or phrases within each description.

## 2. Updated Card Content

Use the following headings and descriptions exactly as provided.

### Card 1: Connecting Youth & Gaams
Description: Cricket tournaments bring **Devpur youth** together and connect them with **different gaams across the KVO community**.

Highlight phrases:
- Devpur youth
- different gaams across the KVO community

### Card 2: Aligning Generations
Description: Bringing **young and senior generations** together through a **shared passion for cricket**.

Highlight phrases:
- young and senior generations
- shared passion for cricket

### Card 3: From Pitch to Family
Description: Turning cricket connections into **lasting friendships** and a **stronger community bond**.

Highlight phrases:
- lasting friendships
- stronger community bond

### Card 4: Community Upliftment
Description: Using **cricket and club spirit** to support the **growth and development of Devpur**.

Highlight phrases:
- cricket and club spirit
- growth and development of Devpur

### Card 5: Business & Career Networking
Description: Creating **business and career opportunities** by connecting people across the Devpur and wider **KVO community**.

Highlight phrases:
- business and career opportunities
- KVO community

### Card 6: Cultural Sharing & Values
Description: Promoting **Jain principles, ethics and mutual respect** through cricket, practice sessions and matches.

Highlight phrases:
- Jain principles
- ethics
- mutual respect

## 3. Highlight Styling

Use the following visual styling:

- Card headings: white or existing light-colored text, with a bold, condensed appearance consistent with the current UI.
- Highlighted phrases: golden-orange `#F5A13B`, with `font-semibold` or `font-bold`.
- Remaining description text: muted light grey, maintaining comfortable readability against the dark background.
- Keep descriptions readable, with appropriate line height and natural wrapping.
- Highlight only the specified key phrases. Do not color the entire paragraph.
- Maintain a consistent highlighting style across all six cards.

Implementation example using React and Tailwind CSS:

```jsx
<p className="text-slate-400 leading-relaxed">
  Cricket tournaments bring{" "}
  <span className="font-semibold text-[#F5A13B]">
    Devpur youth
  </span>{" "}
  together and connect them with{" "}
  <span className="font-semibold text-[#F5A13B]">
    different gaams across the KVO community
  </span>.
</p>
```

Adapt this example to the project's existing component structure and styling conventions.

## 4. UI/UX Requirements

- Preserve the existing dark cricket-stadium background, card layout, borders, icons, spacing, and responsive grid.
- Keep the existing card headings and their order unchanged.
- Do not redesign the entire section or introduce unnecessary UI elements.
- Do not add new cards, statistics, achievements, animations, or unrelated content.
- Maintain a premium, professional, cricket-club visual identity.
- Ensure that all six cards remain responsive on desktop, tablet, and mobile.
- Preserve accessibility and sufficient text contrast.

## 5. Implementation Requirements

1. Inspect the existing vision section and identify the correct component before making changes.
2. Update only the necessary descriptions and inline highlight styling.
3. Reuse the project's existing icon library, components, and CSS conventions.
4. Avoid unnecessary dependencies, duplicated code, and unrelated refactoring.
5. Verify that all specified phrases are highlighted correctly and that punctuation and spacing render properly.
6. Check responsive layouts to ensure highlighted text wraps naturally without overflow.

## Expected Result

The six cards should communicate DCC's core vision clearly: connecting youth and villages, bridging generations, building lasting relationships, uplifting the community, creating business and career opportunities, and preserving cultural values.

**Make the changes directly in the existing project. Do not create a separate demo or replace the existing design.**