import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import mefLanding from '@/assets/MEF-CaseStudy-Top-Landing.webp'
import mefDesktopTop from '@/assets/MEF-CaseStudy-Grid-Desktop-One.png'
import mefDesktopBottom from '@/assets/MEF-CaseStudy-Grid-Desktop-Two.png'
import mefMobileTop from '@/assets/MEF-CaseStudy-Grid-Mobile-One.webp'
import mefMobileBottom from '@/assets/MEF-CaseStudy-Grid-Mobile-Two.png'

const tradeoffs = [
  {
    number: '01',
    title: 'Squarespace over custom development',
    subtitle: 'Efficiency was the right call for this client.',
    body: "The client had a live site from a previous gala and asked for an estimate on rebuilding it. I gave them options: custom development or a Squarespace theme. To keep time and cost down I found a theme that closely matched their example, showed them how it could be customized, and used it as the foundation. The right tool for the job is not always the most complex one.",
  },
  {
    number: '02',
    title: 'Working with what the designer gave me',
    subtitle: "Web assets and Canva assets are not the same thing.",
    body: "The graphic designer worked in Canva, which meant the fonts and files were not immediately web-ready. I had to find web equivalents for the Canva fonts, recreate graphics in Figma, and coordinate with the designer to get assets in formats that would actually render well on screen.",
  },
  {
    number: '03',
    title: 'Making a theme feel like it was built from scratch',
    subtitle: 'Nobody should be able to tell it started as a template.',
    body: "Squarespace themes have a recognizable look if you do not push them far enough. I customized the layout, typography, colors, and components until the Vegas theme felt intentional and original rather than off-the-shelf. The client's example was the reference point, but the final site had its own personality.",
  },
]

const callouts = [
  {
    number: '1',
    title: 'Brand-led hero',
    body: 'Casino imagery + "Viva Moraga" mark establish the theme in the first 2 seconds — no scrolling required.',
  },
  {
    number: '2',
    title: 'Invitation style landing page',
    body: 'All the event details right as you land on the website.',
  },
  {
    number: '3',
    title: 'Single primary path',
    body: 'One CTA above the fold — Buy Tickets. No competing actions to dilute the conversion goal.',
  },
  {
    number: '4',
    title: 'Event styled logo',
    body: 'Used AI to change the colors of the logo to match the theme, making the whole site feel more custom and cohesive without needing to get a new logo designed from scratch.',
  },
]


const pinPositions: Record<string, { top: string; left: string }> = {
  '1': { top: '22%', left: '18%' },
  '2': { top: '41%', left: '68%' },
  '3': { top: '6%', left: '96%' },
  '4': { top: '5%', left: '14%' },
}

export function MEFCaseStudy() {
  const [activePin, setActivePin] = useState<string | null>(null)
  const [hoveredPin, setHoveredPin] = useState<string | null>(null)
  const togglePin = (n: string) => setActivePin(prev => prev === n ? null : n)
  const displayPin = hoveredPin ?? activePin

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Helmet>
        <title>MEF Auction Gala — Kristin Burton</title>
        <meta name="description" content="Full event website and on-site presentation for the Moraga Education Foundation's Vegas-themed annual gala — designed and built to drive ticket sales and help raise $240K." />
      </Helmet>
      <Navbar />
      <CaseStudyBack />

      {/* Hero */}
      <header className="px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-12 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
            2026 MEF Auction Gala
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6  min-[390px]:text-sm sm:leading-7 md:text-base md:leading-8">
            Full event website + on-site presentation for the Moraga Education Foundation's largest annual fundraiser, a Vegas-meets-Moraga themed gala.
          </p>
          <div className="mt-7">
            <Button asChild variant="pill-coral" size="pill-lg">
              <a href="https://www.mefgala.com/" target="_blank" rel="noreferrer">See it in the wild</a>
            </Button>
          </div>
        </div>
      </header>

      {/* 4-item stats bar */}
      <section className="border-y border-hairline bg-plum-card px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center md:flex-nowrap">
          {[
            { label: 'Role',     value: 'Designer + Developer', highlight: false },
            { label: 'Timeline', value: '3 months',        highlight: false },
            { label: 'Raised',   value: '$240K',          highlight: true  },
            { label: 'Guests',   value: '220+',           highlight: true  },
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

          {/* Problem / Goal columns */}
          <section className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mb-4 text-[24px] italic leading-5 text-cream md:text-md">
                <span className="text-coral not-italic font-bold">The problem</span>
              </p>
              <p className="text-[16px] leading-7 text-cream min-[390px]:text-sm md:text-base md:leading-8">
                The Moraga Education Foundation needed more than an event flyer. Their annual gala had a full Vegas theme, a live auction, sponsors to recognize, and 220+ guests who could show up with questions. They needed a central place to send them.
              </p>
            </div>
            <div>
              <p className="mb-4 text-[24px] italic leading-5 text-cream md:text-md">
                <span className="text-coral not-italic font-bold">The goal</span>
              </p>
              <p className="text-[16px] leading-7 text-cream min-[390px]:text-sm md:text-base md:leading-8">
                Design and build a full event presence, invitation, event details, live auction previews, FAQ, sponsor recognition, and an on-site presentation deck, all themed around Viva Moraga and built to drive ticket sales before the doors opened.
              </p>
            </div>
          </section>

          {/* Six pages, one evening */}
          <section className="mt-20 md:mt-28">
            <div className="text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                Six pages, one evening
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6  min-[390px]:text-sm sm:leading-7 md:text-base">
                Black-and-gold palette, custom display type, casino motifs. Designed in
                Figma, built in Webflow, with a 29-slide Canva deck shown on-screen during
                the program.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5">
              <div className="group/img1 col-span-2 h-[160px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-[2px] border border-hairline md:col-start-1 md:col-end-3 md:row-start-1">
                <img
                  src={mefDesktopTop}
                  alt="MEF invitation page"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img1:-translate-y-[calc(100%_-_160px)] sm:group-hover/img1:-translate-y-[calc(100%_-_220px)] md:group-hover/img1:-translate-y-[calc(100%_-_300px)] lg:group-hover/img1:-translate-y-[calc(100%_-_400px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img2 col-span-2 h-[160px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-[2px] border border-hairline md:col-start-1 md:col-end-3 md:row-start-2">
                <img
                  src={mefDesktopBottom}
                  alt="MEF event details page"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img2:-translate-y-[calc(100%_-_160px)] sm:group-hover/img2:-translate-y-[calc(100%_-_220px)] md:group-hover/img2:-translate-y-[calc(100%_-_300px)] lg:group-hover/img2:-translate-y-[calc(100%_-_400px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img3 col-span-1 h-[250px] sm:h-[320px] md:h-[620px] lg:h-[820px] overflow-hidden rounded-[2px] border border-hairline md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3">
                <img
                  src={mefMobileTop}
                  alt="MEF live auction previews page"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img3:-translate-y-[calc(100%_-_250px)] sm:group-hover/img3:-translate-y-[calc(100%_-_320px)] md:group-hover/img3:-translate-y-[calc(100%_-_620px)] lg:group-hover/img3:-translate-y-[calc(100%_-_820px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="group/img4 col-span-1 h-[250px] sm:h-[320px] md:h-[620px] lg:h-[820px] overflow-hidden rounded-[2px] border border-hairline md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3">
                <img
                  src={mefMobileBottom}
                  alt="MEF FAQ page"
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
                Three tradeoffs that shaped the site
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
              {tradeoffs.map((t) => (
                <div key={t.number} className="rounded-lg border border-hairline bg-surf-1 p-6 md:p-7">
                  <p className="font-condensed text-[42px] font-bold leading-none text-coral">
                    {t.number}
                  </p>
                  <h3 className="mt-3 text-[18px] font-bold text-cream md:text-[19px]">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-[13px] italic text-sand md:text-sm">
                    {t.subtitle}
                  </p>
                  <p className="mt-3 text-[13px] leading-6  md:text-sm md:leading-7">
                    {t.body}
                  </p>
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
                Click a pin to read the design intent behind it.
              </p>
            </div>
            <div className="relative mt-10 mx-auto w-fit max-w-full overflow-hidden rounded-[2px] border border-hairline">
              <img
                src={mefLanding}
                alt="MEF Gala landing page annotated"
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
        </div>
      </main>

    </div>
  )
}
