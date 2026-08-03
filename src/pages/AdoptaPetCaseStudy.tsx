import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import adoptaLanding from '@/assets/Adoptapet-CaseStudy-Top-Landing.png'
import adoptaDesktopTop from '@/assets/Adoptapet-CaseStudy-Grid-Desktop-One.png'
import adoptaDesktopBottom from '@/assets/Adoptapet-CaseStudy-Grid-Desktop-Two.png'
import adoptaMobileTop from '@/assets/Adoptapet-CaseStudy-Grid-Mobile-One.png'
import adoptaMobileBottom from '@/assets/Adoptapet-CaseStudy-Grid-Mobile-Two.png'
import { Button } from '@/components/ui/button'

const tradeoffs = [
  {
    number: '01',
    title: 'One design system, three brands',
    subtitle: 'Efficiency without sacrificing brand integrity.',
    body: "Rather than designing three help centers from scratch, I built one flexible design system and applied it across all three. Rehome needed only a logo and color swap. That meant faster delivery, easier maintenance, and a consistent user experience across every touchpoint.",
  },
  {
    number: '02',
    title: 'Structured for scanning, not reading',
    subtitle: 'Support users want the answer, not the article.',
    body: "I restructured the category hierarchy around how users actually search, by task and animal type, not internal team taxonomy. Shorter titles, less nesting, and front-loaded answers so users could find what they needed without reading a wall of text.",
  },
  {
    number: '03',
    title: 'Mobile-first, not mobile-last',
    subtitle: '75% of users are on their phones.',
    body: "With the majority of traffic coming from mobile I designed for the smallest screen first. Thumb-reach navigation, compressed hero images, and single-column layouts were the foundation, not an afterthought retrofitted from desktop.",
  },
]

const callouts = [
  {
    number: '1',
    title: 'Brand hero',
    body: "Adopt a Pet's color palette and imagery above the fold so visitors immediately know they're in the right place.",
  },
  {
    number: '2',
    title: 'Search above everything',
    body: 'Prominent search bar reduces category-browsing friction and gets users to answers in one step.',
  },
  {
    number: '3',
    title: 'Audience-first categories',
    body: 'Tiles organized by user intent, adopting, fostering, shelters, not internal department structure.',
  },
  {
    number: '4',
    title: 'Navigation built for three help centers',
    body: 'One navigation structure that flexes across three brands, with Rehome differing only in logo and color.',
  },
]


const pinPositions: Record<string, { top: string; left: string }> = {
  '1': { top: '22%', left: '54%' },
  '2': { top: '15%', left: '68%' },
  '3': { top: '60%', left: '38%' },
  '4': { top: '5%', left: '80%' },
}

export function AdoptapetCaseStudy() {
  const [activePin, setActivePin] = useState<string | null>(null)
  const [hoveredPin, setHoveredPin] = useState<string | null>(null)
  const togglePin = (n: string) => setActivePin(prev => prev === n ? null : n)
  const displayPin = hoveredPin ?? activePin

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Helmet>
        <title>Adopt a Pet help centers — Kristin Burton</title>
        <meta name="description" content="Three custom Zendesk help centers built from a single design system for Adopt a Pet — mobile-first, structured for an audience that is 75% on their phones." />
      </Helmet>
      <Navbar />
      <CaseStudyBack />

      {/* Hero */}
      <header className="px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-12 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
           Adopt a Pet — three branded Zendesk help centers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6  min-[390px]:text-sm sm:leading-7 md:text-base md:leading-8">
            Designed three custom Zendesk help centers for Adopt a Pet, one for pet adopters, one for shelter and rescue partners, and one for Rehome, all built from a single brand guide with a mobile-first approach for an audience that is 75% on their phones.
          </p>
        </div>
        <div className="mt-7">
          <Button asChild variant="pill-coral" size="pill-lg">
            <a href="https://adoptapetusers.zendesk.com/hc/en-us" target="_blank" rel="noreferrer">See it in the wild</a>
          </Button>
        </div>
      </header>

      {/* Stats bar */}
      <section className="border-y border-hairline bg-plum-card px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center md:flex-nowrap">
          {[
            { label: 'Role',      value: 'Web Designer', highlight: false },
            { label: 'Timeline',  value: '2 months',           highlight: false },
            { label: 'Platform',  value: 'Zendesk',            highlight: false },
            { label: 'Tools',     value: 'Figma + HTML/CSS',   highlight: false },
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
                The existing help centers ran on a default Zendesk theme that didn't match Adopt a Pet's branding. Users didn't trust what they were looking at, and with chatbot integration on the horizon, the team needed a cohesive, on-brand foundation before connecting anything.
              </p>
            </div>
            <div>
              <p className="mb-4 text-[24px] italic leading-5 text-cream md:text-md">
                <span className="text-coral not-italic font-bold">The goal</span>
              </p>
              <p className="text-[16px] leading-7 text-cream min-[390px]:text-sm md:text-base md:leading-8">
                Three fully branded help centers built from a single design system, structured for mobile, easy to scan, and ready to integrate with Ada chatbot. Purposeful imagery, less scrolling, and a support experience users would actually trust.
              </p>
            </div>
          </section>

          {/* Grid section */}
          <section className="mt-20 md:mt-28">
            <div className="text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                Three brands, one design system
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6  min-[390px]:text-sm sm:leading-7 md:text-base">
                Adopt a Pet (users), Adopt a Pet (shelters and rescues), and Rehome share the same structure and components. Rehome differs only in logo and color. All three were designed mobile-first for an audience that is 75% on phones.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5">
              <div className="group/img1 col-span-2 h-[160px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-[2px] border border-hairline md:col-start-1 md:col-end-3 md:row-start-1">
                <img
                  src={adoptaDesktopTop}
                  alt="Adopt-a-Pet help center landing page"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img1:-translate-y-[calc(100%_-_160px)] sm:group-hover/img1:-translate-y-[calc(100%_-_220px)] md:group-hover/img1:-translate-y-[calc(100%_-_300px)] lg:group-hover/img1:-translate-y-[calc(100%_-_400px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img2 col-span-2 h-[160px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-[2px] border border-hairline md:col-start-1 md:col-end-3 md:row-start-2">
                <img
                  src={adoptaDesktopBottom}
                  alt="Adopt-a-Pet desktop article layout"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img2:-translate-y-[calc(100%_-_160px)] sm:group-hover/img2:-translate-y-[calc(100%_-_220px)] md:group-hover/img2:-translate-y-[calc(100%_-_300px)] lg:group-hover/img2:-translate-y-[calc(100%_-_400px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img3 col-span-1 h-[250px] sm:h-[320px] md:h-[620px] lg:h-[820px] overflow-hidden rounded-[2px] border border-hairline md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3">
                <img
                  src={adoptaMobileTop}
                  alt="Adopt-a-Pet mobile help center"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img3:-translate-y-[calc(100%_-_250px)] sm:group-hover/img3:-translate-y-[calc(100%_-_320px)] md:group-hover/img3:-translate-y-[calc(100%_-_620px)] lg:group-hover/img3:-translate-y-[calc(100%_-_820px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img4 col-span-1 h-[250px] sm:h-[320px] md:h-[620px] lg:h-[820px] overflow-hidden rounded-[2px] border border-hairline md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3">
                <img
                  src={adoptaMobileBottom}
                  alt="Adopt-a-Pet mobile article view"
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
            </div>
            <div className="relative mt-10 mx-auto w-fit max-w-full overflow-hidden rounded-[2px] border border-hairline">
              <img
                src={adoptaLanding}
                alt="Adopt-a-Pet help center landing page"
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
                What I'd do differently — run usability testing before final handoff.
              </h2>
              <p className="mt-5 text-[14px] leading-7  min-[390px]:text-sm md:text-base md:leading-8">
                I designed based on assumptions about how pet owners and shelter staff navigate
                support content. With more time, I'd have run even one round of unmoderated
                testing to validate the category structure before launch.
              </p>
              <p className="mt-4 text-[14px] leading-7  min-[390px]:text-sm md:text-base md:leading-8">
                A few hours of testing often surfaces navigation patterns you can't anticipate
                in a static prototype — and it's far cheaper to fix a category label before
                launch than after.
              </p>
            </div>
          </section> */}

        </div>
      </main>

    </div>
  )
}
