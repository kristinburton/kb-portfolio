import { Navbar } from '@/components/Navbar'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import { ParallaxGallery } from '@/components/ParallaxGallery'
import { WantToSeeMore } from '@/components/WantToSeeMore'
import mefLanding from '@/assets/MEF-CaseStudy-Top-Landing.png'
import mefInterior from '@/assets/MEF-CaseStudy-Top-Interior.png'
import mefDesktopTop from '@/assets/MEF-CaseStudy-Grid-Desktop-One.png'
import mefDesktopBottom from '@/assets/MEF-CaseStudy-Grid-Desktop-Two.png'
import mefMobileTop from '@/assets/MEF-CaseStudy-Grid-Mobile-One.png'
import mefMobileBottom from '@/assets/MEF-CaseStudy-Grid-Mobile-Two.png'

export function MEFCaseStudy() {
  const overviewCards = [
    { id: 'overview-left', src: mefLanding, alt: 'MEF Gala invitation page' },
    { id: 'overview-right', src: mefInterior, alt: 'MEF Gala event details page' },
  ]

  const buildRows = [
    {
      id: 'build-row-one',
      cards: [
        { id: 'build-desktop-top', src: mefDesktopTop, alt: 'MEF live auction preview page', wide: true },
        { id: 'build-mobile-top', src: mefMobileTop, alt: 'MEF mobile invitation page', wide: false },
      ],
    },
    {
      id: 'build-row-two',
      cards: [
        { id: 'build-mobile-bottom', src: mefMobileBottom, alt: 'MEF on-site slide deck', wide: false },
        { id: 'build-desktop-bottom', src: mefDesktopBottom, alt: 'MEF FAQ page', wide: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Navbar />
      <CaseStudyBack />
      <header id="mef-hero" className="px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[1100px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
            2026 MEF Auction Gala
          </h1>
        </div>
      </header>

      <section id="mef-meta" className="border-y border-hairline px-4 py-7 sm:px-6 md:px-10 md:py-8 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center">
          {[
            { label: 'Role', value: 'Lead Designer & Developer' },
            { label: 'Timeline', value: '6 weeks' },
            { label: 'Tech Stack', value: 'Figma, Webflow, Canva' },
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

      <main id="mef-content" className="px-4 pb-16 pt-10 sm:px-6 sm:pt-12 md:px-10 md:pb-20 md:pt-14 lg:px-20">
        <section id="mef-overview" className="mx-auto max-w-[1280px]">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Overview</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-[14px] leading-6 text-cream-muted min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            The Moraga Education Foundation needed a complete digital presence for their 2026 Auction Gala —
            "Viva Moraga" — their largest annual fundraiser. The event required a cohesive website covering
            invitations, event details, live auction previews, an online auction, FAQ, and sponsor recognition,
            all consistent with a Vegas-meets-Moraga theme.
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

        <section id="mef-solution" className="mx-auto mt-16 max-w-[1280px] sm:mt-20 md:mt-24">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Building the Solution</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[14px] leading-6 text-cream-muted min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            I designed the full site around the "Viva Moraga" brand — a Las Vegas-inspired theme with a
            black and gold palette, custom typography, and casino imagery. The project included 6 web pages
            and a 29-slide Canva presentation used on-site during the evening's program.
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
        main={mefLanding}
        left={mefInterior}
        phone={mefMobileTop}
      />

      <WantToSeeMore />
    </div>
  )
}
