import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import life360Landing from '@/assets/Life360-CaseStudy-Top-Landing.png'
import life360DesktopTop from '@/assets/Life360-CaseStudy-Grid-Desktop-One.png'
import life360DesktopBottom from '@/assets/Life360-CaseStudy-Grid-Desktop-Two.png'
import life360MobileTop from '@/assets/Life360-CaseStudy-Grid-Mobile-One.png'
import life360MobileBottom from '@/assets/Life360-CaseStudy-Grid-Mobile-Two.png'

const tradeoffs = [
  {
    number: '01',
    title: 'Mobile-first, not mobile-adapted',
    subtitle: 'The highest importance call-out from kickoff.',
    body: "Both legacy help centers had been built for desktop and adapted for mobile as an afterthought. The client flagged mobile-first as the top priority from day one. I designed from the smallest screen up, navigation, search, and article layout all optimized for one-handed use before scaling to desktop.",
  },
  {
    number: '02',
    title: 'Familiar before unified',
    subtitle: "Tile users did not ask for this change.",
    body: "TTile customers were loyal and did not choose to be absorbed into Life360. Dropping them into a completely foreign experience would have generated more support tickets, not fewer. I preserved recognizable Tile UI patterns and terminology in the merged center to ease the transition rather than force an abrupt rebrand.",
  },
  {
    number: '03',
    title: 'Bot-friendly structure from the start',
    subtitle: 'Life360 uses the help center as a source for their generative AI bot.',
    body: "The existing structure had article overlap, inconsistent formatting, and cross-linked content that could break bot responses. I designed the consolidated article hierarchy and content structure with the generative AI source in mind, so the migration would not disrupt the bot pulling from it.",
  },
]

const callouts = [
  {
    number: '1',
    title: 'Search above everything',
    body: 'Both audiences use support to find one answer fast. Search is the primary navigation, not the category grid.',
  },
  {
    number: '2',
    title: 'Unified brand, familiar patterns',
    body: 'Life360 color and typography throughout, with Tile UI conventions preserved where returning users would expect them.',
  },
  {
    number: '3',
    title: 'Mobile-optimized hero',
    body: 'Compressed hero with thumb-reach search. No horizontal scroll, no pinch-to-zoom required.',
  },
  {
    number: '4',
    title: 'Condensed category structure',
    body: 'With two brands worth of content to navigate, clarity was critical. I made the three top-level categories bold and prominent, positioned above the fold so users immediately knew where to click without scrolling or guessing.',
  },
]


const pinPositions: Record<string, { top: string; left: string }> = {
  '1': { top: '44%', left: '48%' },
  '2': { top: '26%', left: '20%' },
  '3': { top: '70%', left: '50%' },
  '4': { top: '5%', left: '44%' },
}

export function Life360CaseStudy() {
  const [activePin, setActivePin] = useState<string | null>(null)
  const [hoveredPin, setHoveredPin] = useState<string | null>(null)
  const togglePin = (n: string) => setActivePin(prev => prev === n ? null : n)
  const displayPin = hoveredPin ?? activePin

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Helmet>
        <title>Life360 help center unification — Kristin Burton</title>
        <meta name="description" content="Led the design of a unified Zendesk help center merging Life360 and Tile after their acquisition — one mobile-first support experience for two brands and two user bases." />
      </Helmet>
      <Navbar />
      <CaseStudyBack />

      {/* Hero */}
      <header className="px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-12 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
            Life360 help center unification

          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6  min-[390px]:text-sm sm:leading-7 md:text-base md:leading-8">
          Led the design of a unified Zendesk help center merging Life360 and Tile following their acquisition, consolidating two brands, two article libraries, and two user bases into one mobile-first support experience under a refreshed Life360 identity.
          </p>
        </div>
        <div className="mt-7">
          <Button asChild variant="pill-coral" size="pill-lg">
            <a href="https://support.life360.com/hc/en-us" target="_blank" rel="noreferrer">See it in the wild</a>
          </Button>
        </div>
      </header>

      {/* Stats bar */}
      <section className="border-y border-hairline bg-plum-card px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center md:flex-nowrap">
          {[
            { label: 'Role',           value: 'Web Designer + Developer', highlight: false },
            { label: 'Timeline',       value: '4 weeks',      highlight: false },
            { label: 'Brands Unified', value: '2',             highlight: true  },
            { label: 'Tools',          value: 'Figma',         highlight: false },
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

          {/* Problem / Goal */}
          <section className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mb-4 text-[24px] italic leading-5 text-cream md:text-md">
                <span className="text-coral not-italic font-bold">The problem</span>
              </p>
              <p className="text-[16px] leading-7 text-cream min-[390px]:text-sm md:text-base md:leading-8">
                After Tile's acquisition, Life360 and Tile were running separate help centers with different designs, tone, and structure. As the two products moved closer together, legacy Tile users crossing into Life360 support hit a wall. Branding was outdated, article overlap was creating confusion, and the help center wasn't structured to handle dynamic content, localization, or the generative AI bot pulling from it as a source.
              </p>
            </div>
            <div>
              <p className="mb-4 text-[24px] italic leading-5 text-cream md:text-md">
                <span className="text-coral not-italic font-bold">The goal</span>
              </p>
              <p className="text-[16px] leading-7 text-cream min-[390px]:text-sm md:text-base md:leading-8">
                One unified Life360 help center, mobile-first, that served both new Life360 users and legacy Tile customers without overwhelming either group. Two brands brought into one, pulling elements from both while keeping a strong, consistent Life360 identity throughout. Bold components to draw users in, a refreshed email template, and navigation clear enough that no one had to think about which brand they came from.              </p>
            </div>
          </section>

          {/* Grid section */}
          <section className="mt-20 md:mt-28">
            <div className="text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                Bold brand, not a clone
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6  min-[390px]:text-sm sm:leading-7 md:text-base">
The first design matched the main Life360 site too closely. Client feedback pushed me to go bolder, more purple, their signature graphics, heavier components. Same brand, distinct experience.              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5">
              <div className="group/img1 col-span-2 h-[160px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-[2px] border border-hairline md:col-start-1 md:col-end-3 md:row-start-1">
                <img
                  src={life360DesktopTop}
                  alt="Life360 help center landing page"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img1:-translate-y-[calc(100%_-_160px)] sm:group-hover/img1:-translate-y-[calc(100%_-_220px)] md:group-hover/img1:-translate-y-[calc(100%_-_300px)] lg:group-hover/img1:-translate-y-[calc(100%_-_400px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img2 col-span-2 h-[160px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-[2px] border border-hairline md:col-start-1 md:col-end-3 md:row-start-2">
                <img
                  src={life360DesktopBottom}
                  alt="Life360 desktop article view"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img2:-translate-y-[calc(100%_-_160px)] sm:group-hover/img2:-translate-y-[calc(100%_-_220px)] md:group-hover/img2:-translate-y-[calc(100%_-_300px)] lg:group-hover/img2:-translate-y-[calc(100%_-_400px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img3 col-span-1 h-[250px] sm:h-[320px] md:h-[620px] lg:h-[820px] overflow-hidden rounded-[2px] border border-hairline md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3">
                <img
                  src={life360MobileTop}
                  alt="Life360 mobile landing"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img3:-translate-y-[calc(100%_-_250px)] sm:group-hover/img3:-translate-y-[calc(100%_-_320px)] md:group-hover/img3:-translate-y-[calc(100%_-_620px)] lg:group-hover/img3:-translate-y-[calc(100%_-_820px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img4 col-span-1 h-[250px] sm:h-[320px] md:h-[620px] lg:h-[820px] overflow-hidden rounded-[2px] border border-hairline md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3">
                <img
                  src={life360MobileBottom}
                  alt="Life360 mobile article experience"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img4:-translate-y-[calc(100%_-_250px)] sm:group-hover/img4:-translate-y-[calc(100%_-_320px)] md:group-hover/img4:-translate-y-[calc(100%_-_620px)] lg:group-hover/img4:-translate-y-[calc(100%_-_820px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Three tradeoffs */}
          <section className="mt-20 md:mt-28">
            <div className="text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                Three tradeoffs that shaped the design
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
              {tradeoffs.map((t) => (
                <div key={t.number} className="rounded-lg border border-hairline bg-surf-1 p-6 md:p-7">
                  <p className="font-condensed text-[42px] font-bold leading-none text-coral">
                    {t.number}
                  </p>
                  <h3 className="mt-3 text-[18px] font-bold text-cream md:text-[19px]">{t.title}</h3>
                  <p className="mt-1 text-[13px] italic text-sand md:text-sm">{t.subtitle}</p>
                  <p className="mt-3 text-[13px] leading-6  md:text-sm md:leading-7">{t.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What's happening on the landing page */}
          <section className="mt-20 md:mt-28">
            <div className="text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                What's happening on the landing page
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6  min-[390px]:text-sm">
                The design decisions that reduced confusion and kept users moving forward.
              </p>
            </div>
            <div className="relative mt-10 mx-auto w-fit max-w-full overflow-hidden rounded-[2px] border border-hairline">
              <img
                src={life360Landing}
                alt="Life360 unified help center landing page"
                className="block w-[800px] max-w-full h-[500px] object-cover object-top"
                loading="lazy"
              />
              {callouts.map((c) => (
                <button
                  key={c.number}
                  onClick={() => togglePin(c.number)}
                  style={{ top: pinPositions[c.number].top, left: pinPositions[c.number].left }}
                  onMouseEnter={() => setHoveredPin(c.number)}
                  onMouseLeave={() => setHoveredPin(null)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 hidden md:flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-cream shadow-elev-2 transition-all duration-150 ${displayPin === c.number ? 'scale-110 bg-coral ring-2 ring-cream/40' : 'bg-coral/75 hover:scale-110 hover:bg-coral'}`}
                >
                  {c.number}
                </button>
              ))}
            </div>
            <div className="mt-6 hidden md:grid gap-4 sm:grid-cols-2">
              {callouts.map((c) => (
                <div
                  key={c.number}
                  onClick={() => togglePin(c.number)}
                  onMouseEnter={() => setHoveredPin(c.number)}
                  onMouseLeave={() => setHoveredPin(null)}
                  className={`flex cursor-pointer gap-4 rounded-lg border p-5 transition-colors duration-150 ${displayPin === c.number ? 'border-coral bg-surf-2' : 'border-hairline bg-surf-1 hover:border-hairline-2'}`}
                >
                  <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-cream transition-colors duration-150 ${displayPin === c.number ? 'bg-coral' : 'bg-coral/75'}`}>
                    {c.number}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cream">{c.title}</p>
                    <p className="mt-1.5 text-[13px] leading-5 ">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What I'd do differently */}
          {/* <section className="mt-20 md:mt-28">
            <div className="mx-auto max-w-[760px]">
              <h2 className="font-condensed text-[24px] font-bold text-cream min-[390px]:text-[28px] md:text-[36px]">
                What I'd do differently — work with a content strategist on the taxonomy.
              </h2>
              <p className="mt-5 text-[14px] leading-7  min-[390px]:text-sm md:text-base md:leading-8">
                Merging two help centers means merging two article libraries, two category
                structures, and two authoring styles. I did the information architecture
                work solo, which worked — but it took longer than it should have.
              </p>
              <p className="mt-4 text-[14px] leading-7  min-[390px]:text-sm md:text-base md:leading-8">
                A half-day content audit with a content strategist upfront would have surfaced
                naming conflicts and redundant articles faster — and made the final taxonomy
                more defensible to stakeholders.
              </p>
            </div>
          </section> */}

        </div>
      </main>

    </div>
  )
}
