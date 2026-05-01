# Kristin Burton — Portfolio

React + TypeScript + Tailwind + shadcn/ui portfolio with 6 case studies.

## Stack
- **React 18** + **TypeScript**
- **Vite** (dev server + build)
- **Tailwind CSS v3** with custom brand tokens
- **shadcn/ui** (Button, Badge — extend via `npx shadcn@latest add <component>`)
- **React Router v6** for routing
- **Lucide React** for icons

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx            ← shadcn Button
│   │   └── badge.tsx             ← shadcn Badge
│   ├── ImagePlaceholder.tsx      ← Swap src prop to add real images
│   └── Navbar.tsx
├── data/
│   └── caseStudies.ts            ← ⭐ ALL content lives here
├── pages/
│   ├── PortfolioIndex.tsx        ← /
├── lib/
│   └── utils.ts                  ← cn() helper
├── App.tsx                       ← Router
├── main.tsx
└── index.css                     ← Brand CSS variables + Tailwind
```

---

## Adding Content

### Fill in placeholder text
Open `src/data/caseStudies.ts`. Every `[bracketed placeholder]` is a field waiting for your real copy. The TypeScript types will guide you — each layout has a specific shape:

- **HeroSplitCaseStudy** — `star`, `screens[]`, `outcomes[]`
- **BentoCaseStudy** — `cells[]` array of bento blocks

### Add real images

1. Drop your images into `src/assets/` (create the folder)
2. Import at the top of `caseStudies.ts`:
   ```ts
   import stPaulCover from '@/assets/stpaul-cover.jpg'
   ```
3. Set the `coverImage` field on the case study:
   ```ts
   coverImage: stPaulCover,
   ```
4. For screen shots, set `src` on each item in the `screens` array:
   ```ts
   screens: [
     { label: 'Landing Page — Hero + Search', src: stPaulScreen1 },
     ...
   ]
   ```

### Add a new case study
1. Add an entry to the `caseStudies` array in `caseStudies.ts`
2. Choose `layout: 'hero-split'` or `layout: 'bento-grid'`
3. Fill in the required fields (TypeScript will catch anything missing)
4. The route `/projects/<your-slug>` and the index card are generated automatically

### Add more shadcn components
```bash
npx shadcn@latest add card
npx shadcn@latest add separator
npx shadcn@latest add tooltip
```

---

## Brand Colors

Defined in `tailwind.config.ts` under `theme.extend.colors.brand`:

| Token | Value | Usage |
|---|---|---|
| `brand-purple` | `#A2519E` | Primary CTAs, accents |
| `brand-purple-mid` | `#7d4e7a` | Hover states |
| `brand-purple-dark` | `#6d4070` | Dark accents |
| `brand-footer-dark` | `#2a1f35` | Navbar, headings |
| `brand-coral` | `#E89C79` | Section labels, outcomes |
| `brand-coral-accent` | `rgba(232,156,121,0.8)` | Transparent coral |
| `brand-off` | `#F8F5F9` | Page background |
| `brand-muted` | `#6b5c75` | Body text, labels |
| `brand-border` | `#e8dff0` | All borders |

Use them in Tailwind like: `bg-brand-purple`, `text-brand-coral`, `border-brand-border`

---

## Deploy

```bash
npm run build    # outputs to /dist
```

Drop `/dist` into Netlify, Vercel, or your existing host. No server needed — it's a pure static SPA.

For Netlify, add a `_redirects` file in `/public`:
```
/*  /index.html  200
```
(Already included in this project.)
