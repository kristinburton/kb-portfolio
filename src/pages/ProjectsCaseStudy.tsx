import { Navbar } from '@/components/Navbar'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import { ParallaxGallery } from '@/components/ParallaxGallery'
import { WantToSeeMore } from '@/components/WantToSeeMore'
import portfolioLanding from '@/assets/Portfolio-CaseStudy-Grid-Desktop-One.png'
import portfolioInterior from '@/assets/Portfolio-CaseStudy-Top-Interior.png'
import portfolioDesktopTop from '@/assets/Portfolio-CaseStudy-Grid-Desktop-One.png'
import portfolioDesktopBottom from '@/assets/Portfolio-CaseStudy-Grid-Desktop-Two.png'
import portfolioMobileTop from '@/assets/Portfolio-CaseStudy-Grid-Mobile-One.png'
import portfolioMobileBottom from '@/assets/Portfolio-CaseStudy-Grid-Mobile-Two.png'

export function PortfolioCaseStudy() {
  const overviewCards = [
    { id: 'overview-left', src: portfolioLanding, alt: 'New portfolio home page — animated hero' },
    { id: 'overview-right', src: portfolioInterior, alt: 'New portfolio case study page' },
  ]

  const buildRows = [
    {
      id: 'build-row-one',
      cards: [
        { id: 'build-desktop-top', src: portfolioDesktopTop, alt: 'Portfolio card grid', wide: true },
        { id: 'build-mobile-top', src: portfolioMobileTop, alt: 'Portfolio mobile view', wide: false },
      ],
    },
    {
      id: 'build-row-two',
      cards: [
        { id: 'build-mobile-bottom', src: portfolioMobileBottom, alt: 'Portfolio mobile case study', wide: false },
        { id: 'build-desktop-bottom', src: portfolioDesktopBottom, alt: 'Portfolio desktop case study detail', wide: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Navbar />
      <CaseStudyBack />
      <header id="portfolio-hero" className="px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[1100px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
            Portfolio Redesign
          </h1>
        </div>
      </header>

      <section id="portfolio-meta" className="border-y border-hairline px-4 py-7 sm:px-6 md:px-10 md:py-8 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center">
          {[
            { label: 'Role', value: 'Designer & Developer' },
            { label: 'Timeline', value: '2026' },
            { label: 'Tech Stack', value: 'Figma, React, TypeScript, Tailwind, Vite' },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center">
              {i > 0 && <div className="mx-10 hidden h-12 w-px shrink-0 bg-teal opacity-50 md:block" />}
              <div className="px-6 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cream-faint">{item.label}</p>
                <p className="mt-2 text-sm text-cream md:text-base">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main id="portfolio-content" className="px-4 pb-16 pt-10 sm:px-6 sm:pt-12 md:px-10 md:pb-20 md:pt-14 lg:px-20">
        <section id="portfolio-overview" className="mx-auto max-w-[1280px]">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Overview</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-[14px] leading-6 text-cream-muted min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            My previous portfolio was a static Webflow site — minimal, functional, but limited. Case studies
            were single pages with no routing, no animations, and no way to showcase the variety and depth
            of my work in a visually compelling way. I needed a full rebuild.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
            {overviewCards.map(card => (
              <article key={card.id} className="overflow-hidden p-2 min-[390px]:p-3">
                <div className="overflow-hidden p-2 min-[390px]:p-3">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="h-[230px] w-full rounded-lg object-cover object-top min-[390px]:h-[270px] sm:h-[320px] md:h-[420px] lg:h-[500px]"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio-solution" className="mx-auto mt-16 max-w-[1280px] sm:mt-20 md:mt-24">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Building the Solution</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[14px] leading-6 text-cream-muted min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            I rebuilt the portfolio as a React SPA with React Router, Framer Motion animations, and a
            scalable component architecture. Three distinct case study layout templates — HeroSplit,
            BentoGrid, and BeforeAfter — are all driven from a single data file. Client-sampled color
            palettes replace generic gradients to make each project feel intentional.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5">
            {buildRows.map(row => (
              <div key={row.id} className="grid gap-4 sm:gap-5 md:grid-cols-12">
                {row.cards.map(card => (
                  <article
                    key={card.id}
                    className={`overflow-hidden p-2 min-[390px]:p-3 ${card.wide ? 'md:col-span-8' : 'md:col-span-4'}`}
                  >
                    <div className="overflow-hidden rounded-xl p-2 min-[390px]:p-3">
                      <img
                        src={card.src}
                        alt={card.alt}
                        className="h-[220px] w-full rounded-lg object-cover object-top min-[390px]:h-[250px] sm:h-[280px] md:h-[300px] lg:h-[470px]"
                        loading="lazy"
                      />
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <ParallaxGallery
        main={portfolioLanding}
        left={portfolioInterior}
        phone={portfolioMobileTop}
      />

      <WantToSeeMore />
    </div>
  )
}
