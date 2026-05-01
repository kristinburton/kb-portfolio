import { Navbar } from '@/components/Navbar'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import { WantToSeeMore } from '@/components/WantToSeeMore'
import { ComparisonSlider } from '@/components/ComparisonSlider'

import portfolioLandingBefore from '@/assets/Portfolio-CaseStudy-Top-Landing-Before.png'
import portfolioCaseStudyLandingBefore from '@/assets/Portfolio-CaseStudy-Landing-Before.png'
import portfolioCaseStudyBefore from '@/assets/Portfolio-CaseStudy-Example.webp'

import portfolioLandingAfter from '@/assets/Portfolio-CaseStudy-Top-Landing-After.webp'
import portfolioCaseStudyLandingAfter from '@/assets/Portfolio-CaseStudy-Landing-After.webp'
import portfolioCaseStudyAfter from '@/assets/Portfolio-CaseStudy-Example-After.webp'


const principles = [
  {
    number: '01',
    title: 'Lead with work, not bio.',
    body: "The old site opened with a hero circle and a tagline. No work in sight until you clicked through. The new home shows projects because that is what anyone visiting a portfolio actually wants to see.",
  },
  {
    number: '02',
    title: 'React as the right tool, not just a trend.',
    body: "I had used Vue.js before but not React, and I was seeing it everywhere. Rebuilding my portfolio was the right moment to learn it properly — with real routing, typed data, and a component system that actually scales.",
  },
  {
    number: '03',
    title: 'AI as a genuine part of the workflow.',
    body: "I tried Figma Make for quick layout exploration, Copilot in VS Code, Cursor, Lovable, and eventually landed on Claude as my primary tool. Each one taught me something. Claude Code let me move fast, stay in control, and ship things I would not have had time to build manually.",
  },
  {
    number: '04',
    title: 'Show the thinking, not just the output.',
    body: "Every case study now has a Three Tradeoffs section — the calls I made and why, in plain language. Good work without context looks like luck. The reasoning is the part that actually demonstrates how I think.",
  },
]

const pageChanges = [
  {
    before: portfolioLandingBefore,
    after: portfolioLandingAfter,

    beforeLabel: 'BEFORE / HOME',
    afterLabel: 'AFTER / NEW HOME + ANIMATED HERO',
    title: 'New Home — animated hero',
    body: 'Scroll-activated entrance, projects above the fold, featured card layout with device mockups.',
  },
  {
    before: portfolioCaseStudyLandingBefore,
    after: portfolioCaseStudyLandingAfter,
    beforeLabel: 'BEFORE / PORTFOLIO INDEX',
    afterLabel: 'AFTER / NEW INDEX + CARD GRID + MARQUEE',
    title: 'New Index — card grid + marquee',
    body: 'Card grid replaces the single-column list. Scrolling marquee adds energy without distracting from the work.',
  },
  {
    before: portfolioCaseStudyBefore,
    after: portfolioCaseStudyAfter,
    beforeLabel: 'BEFORE / CASE STUDY',
    afterLabel: 'AFTER / NEW CASE STUDY + HEROSPLIT LAYOUT',
    title: 'New Case Study — HeroSplit layout',
    body: "Full-bleed imagery, Three Tradeoffs, and a What I'd do differently block on every project page.",
  },
]

const bottomStats = [
  { before: '3', after: '6', label: 'Case Study Count', sub: 'Marquis, Dashboard, MEF' },
  { before: 'None', after: 'SPA', label: 'Routing', sub: 'React Router, per-project routes' },
  { before: '0', after: '22', label: 'Components', sub: 'Atomic, typed, tree-shakeable' },
  { before: '0', after: 'Motion', label: 'Animations', sub: 'Framer Motion, scroll-driven' },
]

export function PortfolioCaseStudy() {
  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Navbar />
      <CaseStudyBack />

      {/* Hero */}
      <header className="px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-12 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
            A Case Study{' '}
            <em className="font-condensed text-coral not-italic">about this very site.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-6">
            From a static HTML/CSS/JS site to a fully routed React app — three case study
            templates, animated transitions, and a draggable comparison built into the
            redesign page itself.
          </p>
        </div>
      </header>

      {/* 4-item stats bar */}
      <section className="border-y border-hairline bg-plum-card px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center md:flex-nowrap">
          {[
            { label: 'First Version', value: '2025',                     highlight: false },
            { label: 'Redesign',      value: '2026',                     highlight: false },
            { label: 'Old Stack',     value: 'HTML · CSS · JS · Figma',  highlight: true  },
            { label: 'New Stack',     value: 'React · TS · Claude · Figma', highlight: true },
          ].map((item, i) => (
            <div key={item.label} className="flex">
              {i > 0 && (
                <div className="hidden w-6 items-center justify-center self-stretch md:flex md:w-10">
                  <div className="h-10 w-px bg-hairline-2" />
                </div>
              )}
              <div className="flex flex-col items-center justify-center px-6 py-8 text-center md:px-8 md:py-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sand">{item.label}</p>
                <p className={`mt-2 font-condensed text-[22px] font-bold md:text-[26px] ${item.highlight ? 'text-cream' : 'text-cream'}`}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main className="px-4 pb-16 pt-12 sm:px-6 sm:pt-14 md:px-10 md:pb-24 md:pt-16 lg:px-20">
        <div className="mx-auto max-w-[1280px]">

          {/* See it side by side */}
          <section>
            <div className="mb-8 text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                See it side by side
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-6">
                Drag the handle to compare before and after.
              </p>
            </div>
            <ComparisonSlider
              beforeSrc={portfolioLandingBefore}
              afterSrc={portfolioLandingAfter}
              beforeLabel="BEFORE / 2025"
              afterLabel="AFTER / 2026"
            />
          </section>

          {/* Before — video walkthrough */}
          <section className="mt-16 md:mt-20">
            <div className="mb-6 text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                The old site, in motion
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-6">
                A walkthrough of the 2024 site before the redesign.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2px] border border-hairline">
              <video
                src="/downloads/Kristin-Burton-Before-Portfolio-Website.mp4"
                controls
                muted
                loop
                playsInline
                className="w-full"
              />
            </div>
          </section>

          {/* What changed, page by page */}
          <section className="mt-20 md:mt-28">
            <div className="mb-10 text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                What changed, page by page
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-6">
                Hover the screenshots to scroll through each page.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              {pageChanges.map((row) => (
                <div key={row.title} className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  {/* Before screenshot */}
                  <div className="group/scroll h-[260px] overflow-hidden rounded-[2px] border border-hairline md:h-[420px]">
                    <div className="relative">
                      <span className="absolute left-3 top-3 z-10 rounded bg-plum/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-sm">
                        {row.beforeLabel}
                      </span>
                      <img
                        src={row.before}
                        alt={`Before: ${row.title}`}
                        className="w-full transition-transform duration-[3500ms] linear group-hover/scroll:-translate-y-[calc(100%_-_260px)] md:group-hover/scroll:-translate-y-[calc(100%_-_420px)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* After screenshot */}
                  <div className="group/scroll h-[260px] overflow-hidden rounded-[2px] border border-hairline md:h-[420px]">
                    <div className="relative">
                      <span className="absolute left-3 top-3 z-10 rounded bg-plum/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-sm">
                        {row.afterLabel}
                      </span>
                      <img
                        src={row.after}
                        alt={`After: ${row.title}`}
                        className="w-full transition-transform duration-[3500ms] linear group-hover/scroll:-translate-y-[calc(100%_-_260px)] md:group-hover/scroll:-translate-y-[calc(100%_-_420px)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                 </div>
              ))}
            </div>
          </section>

          {/* Bottom stats: before → after counts */}
          <section className="mt-20 md:mt-28">
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              {bottomStats.map((s) => (
                <div key={s.label} className="rounded-lg border border-hairline bg-surf-1 px-6 py-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] ">
                    {s.label}
                  </p>
                  <p className="mt-3 font-condensed text-[28px] font-bold text-cream md:text-[32px]">
                    <span className="text-cream-subtle">{s.before}</span>
                    <span className="mx-2 text-coral">→</span>
                    {s.after}
                  </p>
                  <p className="mt-2 text-[12px] leading-5">{s.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why I rebuilt */}
          <section className="mt-20 md:mt-28">
            <div className="mb-10 text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                Why I rebuilt this portfolio from scratch
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-6">
                My first portfolio was built with static HTML, CSS, and JavaScript. It did the job,
                but it felt flat. Three projects, limited interactivity, and nothing that really
                demonstrated what I was capable of. The more I interviewed, the clearer it became
                that I needed to take it up a level.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {principles.map((p) => (
                <div key={p.number} className="flex gap-5">
                  <p className="mt-0.5 font-condensed text-[36px] font-bold leading-none text-coral md:text-[42px]">
                    {p.number}
                  </p>
                  <div>
                    <h3 className="font-condensed text-[20px] font-bold text-cream md:text-[22px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-base leading-6">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Closing quote */}
          <section className="mt-20 border-t border-hairline pt-16 text-center md:mt-28 md:pt-20">
            <h2 className="font-condensed text-[32px] font-bold text-cream min-[390px]:text-[38px] md:text-[52px] lg:text-[60px]">
              A portfolio is a{' '}
              <em className="font-condensed text-coral not-italic">product.</em>
              {' '}<br />This one is also an AI playground.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-6">
              Rebuilding in React with Claude, Figma Make, and a handful of other tools taught
              me more in a few months than I expected. The site itself is now the most current
              case study, and every new project I ship sharpens the system behind it.
            </p>
            <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em]">
              Kristin Burton · Designer &amp; Developer
            </p>
          </section>

        </div>
      </main>

      <WantToSeeMore />
    </div>
  )
}
