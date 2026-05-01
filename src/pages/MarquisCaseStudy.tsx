import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import { WantToSeeMore } from '@/components/WantToSeeMore'
import { Button } from '@/components/ui/button'
import marquisLanding from '@/assets/Marquis-CaseStudy-Top-Landing.png'
import marquisDesktopTop from '@/assets/Marquis-CaseStudy-Grid-Desktop-One.png'
import marquisDesktopBottom from '@/assets/Marquis-CaseStudy-Grid-Desktop-Two.png'
import marquisMobileTop from '@/assets/Marquis-CaseStudy-Grid-Mobile-One.png'
import marquisMobileBottom from '@/assets/Marquis-CaseStudy-Grid-Mobile-Two.png'

const tradeoffs = [
  {
    number: '01',
    title: 'Audience-split UI, not one-size-fits-all',
    subtitle: 'External clients and internal agents have completely different needs.',
    body: "External clients needed to quickly find answers by product. Internal agents needed to publish and manage content visible only to them. Rather than mixing everything together, I designed the UI to serve both audiences from a single platform without either group wading through content that wasn't meant for them.",
  },
  {
    number: '02',
    title: 'Custom theme, not default Zendesk',
    subtitle: 'A platform trusted by 700+ financial institutions deserves more than a generic support site.',
    body: "The previous help center had no brand alignment and clients didn't trust what they were looking at. I built a custom theme using Marquis's full brand system, color, type, spacing, and iconography, so the help center felt like a natural extension of the products clients were already using daily.",
  },
  {
    number: '03',
    title: 'Make it a seamless experience for users',
    subtitle: "Design for self-service, not support tickets.",
    body: "The help center needed to align with their brand guidelines as well as their main site so that it felt like a cohesive experience for users. I focused on making the design intuitive and easy to navigate, with a prominent search bar and clear category organization to help users find answers on their own and reduce support tickets.",
  }
]

const callouts = [
  {
    number: '1',
    title: 'Product-organized entry points',
    body: 'Four clear domain categories from the first click so clients land directly in the product area they need, no scrolling through unrelated content.',
  },
  {
    number: '2',
    title: 'Search above everything',
    body: 'Prominent search handles all intent without forcing clients into category navigation first.',
  },
  {
    number: '3',
    title: 'Role-based content visibility',
    body: 'Internal agents can publish and manage articles only they can see, while the public-facing experience stays clean and relevant for external clients.',
  },
  {
    number: '4',
    title: 'Intentional design for self-service',
    body: 'Prominent search bar and clearly organized categories make it easy for clients to find answers on their own, reducing support tickets and empowering users to help themselves.',
  },
]


const pinPositions: Record<string, { top: string; left: string }> = {
  '1': { top: '87%', left: '45%' },
  '2': { top: '43%', left: '68%' },
  '3': { top: '54%', left: '38%' },
  '4': { top: '25%', left: '13%' },
}

export function MarquisCaseStudy() {
  const [activePin, setActivePin] = useState<string | null>(null)
  const [hoveredPin, setHoveredPin] = useState<string | null>(null)

  const togglePin = (n: string) => setActivePin(prev => prev === n ? null : n)
  const displayPin = hoveredPin ?? activePin

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Helmet>
        <title>Marquis Help Center — Kristin Burton</title>
        <meta name="description" content="Designed and built a fully branded Zendesk help center and community forum for Marquis, serving 700+ banks and credit unions with role-based content and four product domains." />
      </Helmet>
      <Navbar />
      <CaseStudyBack />

      {/* Hero */}
      <header className="px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-12 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
            Marquis Help Center & Community Platform
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6  min-[390px]:text-sm sm:leading-7 md:text-base md:leading-8">
            Designed and built a fully branded Zendesk help center and community forum for Marquis, a data-driven marketing and compliance platform serving 700+ banks and credit unions.
          </p>
          <div className="mt-7">
            <Button asChild variant="pill-coral" size="pill-lg">
              <a href="https://help.gomarquis.com/hc/en-us" target="_blank" rel="noreferrer">See it in the wild</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <section className="border-y border-hairline bg-plum-card px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center md:flex-nowrap">
          {[
            { label: 'Role',      value: 'Web Designer / Developer',  highlight: false },
            { label: 'Timeline',  value: '2 months',            highlight: false },
            { label: 'Platform',  value: 'Zendesk',             highlight: false },
            { label: 'Tools',     value: 'Figma + HTML/CSS',    highlight: false },
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
                Marquis's previous help center was built on a default template with no brand alignment, a flat structure that mixed product content together, and lengthy PDF guides that made self-service nearly impossible. Clients struggled to answer basic questions like "what is this," "how do I do this," and "where do I find this." The design eroded trust before users even started searching.
              </p>
            </div>
            <div>
              <p className="mb-4 text-[24px] italic leading-5 text-cream md:text-md">
                <span className="text-coral not-italic font-bold">The goal</span>
              </p>
              <p className="text-[16px] leading-7 text-cream min-[390px]:text-sm md:text-base md:leading-8">
                A clean, branded help center that felt like a natural extension of the Marquis product suite. Intuitive navigation organized by product domain, role-based content visibility for internal agents, and a structure that made 400 articles actually findable.              </p>
            </div>
          </section>

          {/* Grid section */}
          <section className="mt-20 md:mt-28">
            <div className="text-center">
              <h2 className="font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
                One help center, four product domains
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6  min-[390px]:text-sm sm:leading-7 md:text-base">
                Built on a custom Zendesk theme using Marquis's full brand system. Organized around four domains: CDP, Solutions, Analytics, and Enhancements, with a separate authenticated section for The Keys. Internal agents can publish content only they can see, while external clients get a clean public-facing experience.              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5">
              {/* Desktop image 1: full width on mobile / left half row 1 on md+ */}
              <div className="group/img1 col-span-2 h-[160px] sm:h-[220px] md:h-[300px] lg:h-[402px] overflow-hidden rounded-[2px] border border-hairline md:col-start-1 md:col-end-3 md:row-start-1">
                <img
                  src={marquisDesktopTop}
                  alt="Marquis help center landing page"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img1:-translate-y-[calc(100%_-_160px)] sm:group-hover/img1:-translate-y-[calc(100%_-_220px)] md:group-hover/img1:-translate-y-[calc(100%_-_300px)] lg:group-hover/img1:-translate-y-[calc(100%_-_402px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Desktop image 2: full width on mobile / left half row 2 on md+ */}
              <div className="group/img2 col-span-2 h-[160px] sm:h-[220px] md:h-[300px] lg:h-[402px] overflow-hidden rounded-[2px] border border-hairline md:col-start-1 md:col-end-3 md:row-start-2">
                <img
                  src={marquisDesktopBottom}
                  alt="Marquis community topics layout"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img2:-translate-y-[calc(100%_-_160px)] sm:group-hover/img2:-translate-y-[calc(100%_-_220px)] md:group-hover/img2:-translate-y-[calc(100%_-_300px)] lg:group-hover/img2:-translate-y-[calc(100%_-_402px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Mobile image 1: half width on mobile / right col spanning rows 1–2 on md+ */}
              <div className="group/img3 col-span-1 h-[250px] sm:h-[320px] md:h-[620px] lg:h-[824px] overflow-hidden rounded-[2px] border border-hairline md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3">
                <img
                  src={marquisMobileTop}
                  alt="Marquis mobile help center"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img3:-translate-y-[calc(100%_-_250px)] sm:group-hover/img3:-translate-y-[calc(100%_-_320px)] md:group-hover/img3:-translate-y-[calc(100%_-_620px)] lg:group-hover/img3:-translate-y-[calc(100%_-_824px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Mobile image 2: half width on mobile / rightmost col spanning rows 1–2 on md+ */}
              <div className="group/img4 col-span-1 h-[250px] sm:h-[320px] md:h-[620px] lg:h-[824px] overflow-hidden rounded-[2px] border border-hairline md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3">
                <img
                  src={marquisMobileBottom}
                  alt="Marquis mobile article experience"
                  className="w-full transition-transform duration-[2500ms] linear group-hover/img4:-translate-y-[calc(100%_-_250px)] sm:group-hover/img4:-translate-y-[calc(100%_-_320px)] md:group-hover/img4:-translate-y-[calc(100%_-_620px)] lg:group-hover/img4:-translate-y-[calc(100%_-_824px)] object-cover object-top"
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
                  <p className="mt-1 text-[13px] italic sand md:text-sm">{t.subtitle}</p>
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
                src={marquisLanding}
                alt="Marquis help center landing page"
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
        <WantToSeeMore />

    </div>
  )
}
