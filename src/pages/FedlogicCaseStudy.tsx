import { useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import { Button } from '@/components/ui/button'
import { ParallaxGallery } from '@/components/ParallaxGallery'
import dashboardLanding from '@/assets/Dashboard-CaseStudy-Top-Landing.png'
import dashboardInterior from '@/assets/Dashboard-CaseStudy-Top-Interior.png'
import dashboardDesktopTop from '@/assets/Dashboard-CaseStudy-Grid-Desktop-One.png'
import dashboardDesktopBottom from '@/assets/Dashboard-CaseStudy-Grid-Desktop-Two.png'
import dashboardMobileTop from '@/assets/Dashboard-CaseStudy-Grid-Mobile-One.png'
import dashboardMobileBottom from '@/assets/Dashboard--CaseStudy-Grid-Mobile-Two.png'

export function FedlogicCaseStudy() {
  const navigate = useNavigate()
  const overviewCards = [
    { id: 'overview-left', src: dashboardLanding, alt: 'Dashboard version 1 — initial design' },
    { id: 'overview-right', src: dashboardInterior, alt: 'Dashboard version 2 — final design' },
  ]

  const buildRows = [
    {
      id: 'build-row-one',
      cards: [
        { id: 'build-desktop-top', src: dashboardDesktopTop, alt: 'Dashboard one — browser view', wide: true },
        { id: 'build-mobile-top', src: dashboardMobileTop, alt: 'Dashboard mobile view', wide: false },
      ],
    },
    {
      id: 'build-row-two',
      cards: [
        { id: 'build-mobile-bottom', src: dashboardMobileBottom, alt: 'Dashboard PDF export version', wide: false },
        { id: 'build-desktop-bottom', src: dashboardDesktopBottom, alt: 'Dashboard two — multi-color version', wide: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Navbar />
      <CaseStudyBack />
      <header id="fedlogic-hero" className="px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[1100px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
            Reporting Dashboard Design & Development
          </h1>
        </div>
      </header>

      <section id="fedlogic-meta" className="border-y border-hairline px-4 py-7 sm:px-6 md:px-10 md:py-8 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center">
          {[
            { label: 'Role', value: 'Lead Designer & Developer' },
            { label: 'Timeline', value: 'Tight deadline — transition driven' },
            { label: 'Tech Stack', value: 'Figma, HTML, CSS, JavaScript' },
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

      <main id="fedlogic-content" className="px-4 pb-16 pt-10 sm:px-6 sm:pt-12 md:px-10 md:pb-20 md:pt-14 lg:px-20">
        <section id="fedlogic-overview" className="mx-auto max-w-[1280px]">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Overview</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-[14px] leading-6 text-cream-muted min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            Built a fully functional reporting dashboard for a federal benefits navigation platform,
            making all design and coding decisions independently. The platform needed to be delivered
            on a critical timeline to support a system transition — there was no runway for iteration
            once it went live.
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

        <section id="fedlogic-solution" className="mx-auto mt-16 max-w-[1280px] sm:mt-20 md:mt-24">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Building the Solution</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[14px] leading-6 text-cream-muted min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            I prioritized a clear information hierarchy for quick scanning, minimal external libraries
            for fast load times, and reusable component patterns across both dashboard versions.
            A critical requirement was a print-perfect PDF export — built with extensive custom print
            CSS including media queries, page break control, and chart re-layout for the print pipeline.
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
        main={dashboardLanding}
        left={dashboardInterior}
        phone={dashboardMobileTop}
      />

      <section id="fedlogic-cta" className="px-4 pb-20 pt-8 text-center sm:px-6 md:px-10 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-condensed text-[36px] font-bold text-cream min-[390px]:text-5xl md:text-7xl">Want to see more?</h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button variant="pill-coral" size="pill-md" onClick={() => navigate('/projects')}>View all work</Button>
            <Button asChild variant="pill-ghost" size="pill-md">
              <a href="mailto:kristin@kristin-burton.com">Contact me</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
