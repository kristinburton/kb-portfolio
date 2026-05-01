import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/Navbar'
import { CaseStudyBack } from '@/components/CaseStudyBack'
import { WantToSeeMore } from '@/components/WantToSeeMore'
import { Button } from '@/components/ui/button'
import dashboardOne from '@/assets/Dashboard-One-Reporting.png'
import dashboardTwo from '@/assets/Dashboard-Two-Reporting.png'
import dashboardThree from '@/assets/Dashboard-Three-Reporting.png'
// import dashboardMobile from '@/assets/Dashboard-mobile-home.png'
// import dashboardPrintPdf from '@/downloads/Dashboard-Three-Reporting-Print.pdf'


export function DashboardCaseStudy() {

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans text-cream">
      <Helmet>
        <title>Reporting Dashboard — Kristin Burton</title>
        <meta name="description" content="Designed and developed a suite of internal data reporting dashboards for a federal benefits platform — from Figma mockups to fully coded, API-integrated dashboards with print-to-PDF export." />
      </Helmet>
      <Navbar />
      <CaseStudyBack />
      <header id="dashboard-hero" className="px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[1100px]">
          <h1 className="font-condensed text-[34px] font-bold leading-tight tracking-[-0.01em] text-cream min-[390px]:text-[40px] md:text-[56px] lg:text-[64px]">
            Internal Reporting Dashboard Design and Development
          </h1>
        </div>
      </header>

      {/* 4-item stats bar */}
      <section className="border-y border-hairline bg-plum-card px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center md:flex-nowrap">
          {[
            { label: 'Role',     value: 'Lead Designer & Developer', highlight: false },
            { label: 'Timeline', value: '3 months', highlight: false },
            { label: 'Tech Stack',   value: 'HTML, CSS, JavaScript', highlight: true  },
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

      <main id="dashboard-content" className="px-4 pb-16 pt-10 sm:px-6 sm:pt-12 md:px-10 md:pb-20 md:pt-14 lg:px-20">
        <section id="dashboard-overview" className="mx-auto max-w-[1280px]">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Overview</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-[14px] leading-6  min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            Designed and built a suite of data reporting dashboards for a federal benefits navigation platform, taking the project from Figma mockups to fully coded, API-integrated dashboards with print-to-PDF export. The structure, layout, and data visualization were approved on the first pass with one change requested: an expanded color palette.          </p>
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-hairline bg-surf-1 px-5 py-4 text-left">
            <span className="material-symbols-rounded mt-0.5 shrink-0 text-[18px] text-sand">lock</span>
            <p className="text-[13px] leading-6 text-sand md:text-sm">
              <span className="font-semibold text-cream">Content anonymized for client confidentiality.</span>{' '}<br/ >
              All data, names, and identifying information shown in these screenshots have been replaced with placeholder values. The design, layout, and component structure are real.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
            <div className="group/img1 h-[250px] sm:h-[320px] md:h-[624px] lg:h-[824px] overflow-hidden rounded-[2px] border border-hairline">
              <img
                src={dashboardOne}
                alt="Dashboard reporting view one"
                className="w-full transition-transform duration-[2500ms] linear group-hover/img1:-translate-y-[calc(100%_-_250px)] sm:group-hover/img1:-translate-y-[calc(100%_-_320px)] md:group-hover/img1:-translate-y-[calc(100%_-_624px)] lg:group-hover/img1:-translate-y-[calc(100%_-_824px)] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="group/img2 h-[250px] sm:h-[320px] md:h-[624px] lg:h-[824px] overflow-hidden rounded-[2px] border border-hairline">
              <img
                src={dashboardTwo}
                alt="Dashboard reporting view two"
                className="w-full transition-transform duration-[2500ms] linear group-hover/img2:-translate-y-[calc(100%_-_250px)] sm:group-hover/img2:-translate-y-[calc(100%_-_320px)] md:group-hover/img2:-translate-y-[calc(100%_-_624px)] lg:group-hover/img2:-translate-y-[calc(100%_-_824px)] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="group/img3 h-[250px] sm:h-[320px] md:h-[624px] lg:h-[824px] overflow-hidden rounded-[2px] border border-hairline">
              <img
                src={dashboardThree}
                alt="Dashboard reporting view three"
                className="w-full transition-transform duration-[2500ms] linear group-hover/img3:-translate-y-[calc(100%_-_250px)] sm:group-hover/img3:-translate-y-[calc(100%_-_320px)] md:group-hover/img3:-translate-y-[calc(100%_-_624px)] lg:group-hover/img3:-translate-y-[calc(100%_-_824px)] object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="pill-ghost" size="pill-lg" asChild>
              <a href="/downloads/Dashboard-Three-Reporting-Print-Example.pdf" target="_blank" rel="noreferrer">
                View print report
              </a>
            </Button>
          </div>
        </section>

        <section id="dashboard-solution" className="mx-auto mt-16 max-w-[1280px] sm:mt-20 md:mt-24">
          <h2 className="text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">A scope shift I ran with</h2>
          <p className="mx-auto max-w-4xl mt-4 text-center text-[14px] leading-6 min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
         I was brought in expecting to deliver Figma mockups for three dashboard types surfacing Zendesk and Monday.com data. As the project developed it became clear the expectation was fully coded dashboards with live API integration, charts, graphs, and all. I clarified the direction, regrouped, and got to work.
          </p>
          <p className="mx-auto max-w-4xl mt-4 text-center text-[14px] leading-6 min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            I made a strategic call to tackle the most complex dashboard first. Client approval on the hardest one would make the remaining two straightforward. The biggest technical challenge turned out to be rendering the dashboards correctly in PDF print view, which required extensive custom print CSS including media queries, page break control, and chart re-layout for the print pipeline. I tested internally before any client-facing demo and led the presentation myself.
          </p>

          <h2 className="mt-12 text-center font-condensed text-[34px] font-bold text-cream min-[390px]:text-[40px] md:text-[44px]">Nailed the hard parts on the first pass</h2>
          <p className="mx-auto max-w-4xl mt-4  text-center text-[14px] leading-6  min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            The client's only substantive feedback was a color palette swap. Structure, layout, and data visualization were signed off immediately. The project went on to become a foundational product, turning what had been hundreds of individual manual reports into a scalable, data-powered reporting system.          </p>
          <p className="mx-auto max-w-4xl mt-4 text-center text-[14px] leading-6 min-[390px]:text-sm sm:mt-5 sm:leading-7 md:text-base md:leading-8">
            Internal feedback from the team: "She crushed this so hard on the first pass I was worried we'd not have anything solid to improve on as we moved forward."
          </p>
        </section>
              {/* What I'd do differently */}
      <section className="mt-20 md:mt-28">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-condensed text-center font-condensed text-[30px] font-bold text-cream min-[390px]:text-[36px] md:text-[44px]">
            What I'd do differently
          </h2>
          <h3 className="text-center  text-[18px] text-cream min-[390px]:text-[20px] md:text-[28px]">Show a Figma mockup before writing a single line of code.</h3>
          <p className="mt-5 max-w-4xl mx-auto text-center  text-[14px] leading-7 min-[390px]:text-sm md:text-base md:leading-8">
           I made a calculated risk jumping straight into development, reasoning it would be faster than designing in Figma first. It worked out, but it was a gamble. If the client had wanted a fundamentally different layout, I would have lost far more time than the 5 to 10 hours I was trying to save.
            the brand into slides instead of letting the deck inform site rhythm.
          </p>
          <p className="mt-4 max-w-4xl mx-auto text-center text-[14px] leading-7 min-[390px]:text-sm md:text-base md:leading-8">
            Now with tools like Claude Design and Figma Make, spinning up a quick mockup for client approval before touching code takes almost no time at all. That is what I would do differently today.
          </p>
        </div>
      </section>
      </main>    

      <WantToSeeMore />
    </div>
  )
}
