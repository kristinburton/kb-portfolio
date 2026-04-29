import { Navbar } from '@/components/Navbar'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import { ParallaxGallery } from '@/components/ParallaxGallery'
import { WantToSeeMore } from '@/components/WantToSeeMore'
import marquisProject from '@/assets/Marquis-CaseStudy-Top-Landing.png'
import marquisInterior from '@/assets/Marquis-CaseStudy-Top-Interior.png'
import marquisDesktopTop from '@/assets/Marquis-CaseStudy-Grid-Desktop-One.png'
import marquisDesktopBottom from '@/assets/Marquis-CaseStudy-Grid-Desktop-Two.png'
import marquisMobileTop from '@/assets/Marquis-CaseStudy-Grid-Mobile-One.png'
import marquisMobileBottom from '@/assets/Marquis-CaseStudy-Grid-Mobile-Two.png'
import { Button } from '@/components/ui/button'

export function MarquisCaseStudy() {

  const overviewCards = [
    { id: 'overview-left', src: marquisProject, alt: 'Marquis help center landing page' },
    { id: 'overview-right', src: marquisInterior, alt: 'Marquis interior page' },
  ]

  const buildRows = [
    {
      id: 'build-row-one',
      cards: [
        { id: 'build-desktop-top', src: marquisDesktopTop, alt: 'Marquis support post flow', wide: true },
        { id: 'build-mobile-top', src: marquisMobileTop, alt: 'Marquis mobile help center', wide: false },
      ],
    },
    {
      id: 'build-row-two',
      cards: [
        { id: 'build-mobile-bottom', src: marquisMobileBottom, alt: 'Marquis mobile article experience', wide: false },
        { id: 'build-desktop-bottom', src: marquisDesktopBottom, alt: 'Marquis community topics layout', wide: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Navbar />
      <CaseStudyBack />
      <header id="marquis-hero" className="px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[1100px]">
          <h1 className="portfolio-hero__title font-condensed font-bold text-cream leading-none tracking-[-0.02em] mb-0">
            Marquis Envoy Project
          </h1>
          <div className="mt-5 sm:mt-6">
            <Button asChild variant="pill-coral" size="pill-lg">
              <a href="https://help.gomarquis.com/hc/en-us" target="_blank" rel="noreferrer">See it in the wild</a>
            </Button>
          </div>
        </div>
      </header>

      <section id="marquis-meta" className="border-y border-hairline px-4 py-7 sm:px-6 md:px-10 md:py-8 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center">
          {[
            { label: 'Role', value: 'Web Designer / Web Developer' },
            { label: 'Timeline', value: '2 months' },
            { label: 'Tech Stack', value: 'Figma, HTML, CSS, JavaScript, Zendesk' },
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

      <main id="marquis-content" className="px-4 pb-16 pt-10 sm:px-6 sm:pt-12 md:px-10 md:pb-20 md:pt-14 lg:px-20">
        <section id="marquis-overview" className="mx-auto max-w-[1280px]">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Overview</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-[14px] leading-6 text-cream-muted min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            Our team was tasked with developing a help center to support users in accessing relevant
            support content. We recognized that the existing support structure lacked engagement,
            consistency with branding, and clear content management for internal agents.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
            {overviewCards.map(card => (
              <article key={card.id} className="overflow-hidden p-2 min-[390px]:p-3">
                <div className="overflow-hidden p-2 min-[390px]:p-3">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="h-[230px] w-full rounded-lg object-cover object-top min-[390px]:h-[270px] sm:h-[320px] md:h-[420px] lg:h-[800px]"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="marquis-solution" className="mx-auto mt-16 max-w-[1280px] sm:mt-20 md:mt-24">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Building the Solution</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[14px] leading-6 text-cream-muted min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            I started by analyzing user support tickets to identify common pain points and questions.
            This data informed the information architecture and helped prioritize content. The design
            system was built mobile-first with a focus on clarity and progressive disclosure.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5">
            {buildRows.map(row => (
              <div key={row.id} className="grid gap-4 sm:gap-5 md:grid-cols-12">
                {row.cards.map(card => (
                  <article
                    key={card.id}
                    className={`overflow-hidden  p-2 min-[390px]:p-3 ${card.wide ? 'md:col-span-8' : 'md:col-span-4'}`}
                  >
                    <div className="overflow-hidden rounded-xl  p-2 min-[390px]:p-3">
                      <img
                        src={card.src}
                        alt={card.alt}
                        className={`w-full rounded-lg object-cover object-top ${card.wide ? 'h-[220px] min-[390px]:h-[250px] sm:h-[280px] md:h-[300px] lg:h-[470px]' : 'h-[220px] min-[390px]:h-[250px] sm:h-[280px] md:h-[300px] lg:h-[470px]'}`}
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
        main={marquisProject}
        left={marquisInterior}
        phone={marquisMobileTop}
      />

      <WantToSeeMore />
    </div>
  )
}
