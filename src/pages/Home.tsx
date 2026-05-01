import { useMemo, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { SectionTitle } from '@/components/SectionTitle'
import { WorkTogetherCTA } from '@/components/WorkTogetherCTA'
import life360MobileHome from '@/assets/life360-mobile-home.png'
import marquisMobileHome from '@/assets/marquis-mobile-home.png'
import adoptAPetMobileHome from '@/assets/Adoptapet-mobile-home.png'


type HomeFeaturedProject = {
  id: string
  client: string
  title: string
  imageSrc: string
  imageAlt: string
  linkTo: string
  imagePanelClass: string
  textLeft: boolean
}

export function Home() {
  const navigate = useNavigate()
  const featuredProjects = useMemo<HomeFeaturedProject[]>(
    () => [
      {
        id: 'life360',
        client: 'Life360',
        title: 'Mobile-First Unification of 2 Brands',
        imageSrc: life360MobileHome,
        imageAlt: 'Life360 mobile help center mockup',
        linkTo: '/projects/life360-help-center-design',
        imagePanelClass: 'home-featured-card--life360',
        textLeft: false,
      },
      {
        id: 'marquis',
        client: 'Marquis',
        title: 'Redesign to Engage Users',
        imageSrc: marquisMobileHome,
        imageAlt: 'Marquis mobile help center mockup',
        linkTo: '/projects/marquis-help-center-design',
        imagePanelClass: 'home-featured-card--marquis',
        textLeft: true,
      },
      {
        id: 'adopt',
        client: 'Adopt a Pet',
        title: '3 help centers with a single brand guide',
        imageSrc: adoptAPetMobileHome,
        imageAlt: 'Adopt a Pet mobile help center mockup',
        linkTo: '/projects',
        imagePanelClass: 'home-featured-card--adopt',
        textLeft: false,
      },
    ],
    [],
  )

  const [heroScrolled, setHeroScrolled] = useState(false)
  useEffect(() => {
    const target = document.getElementById('featured-work')
    if (!target) return
    const ob = new IntersectionObserver(
      ([entry]) => setHeroScrolled(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0 }
    )
    ob.observe(target)
    return () => ob.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-plum font-sans text-cream">
      <section
        id="home-hero"
        className="home-hero home-hero--with-glows relative isolate overflow-hidden px-6 pb-50 pt-60 md:px-12 md:pt-[17.5rem] lg:px-20 lg:pb-[15rem]"
      >
        <div aria-hidden="true" className="home-hero__coral-glow" />
        <div aria-hidden="true" className="home-hero__bottom-fade" />
        <div className="home-hero-content relative mx-auto max-w-[1280px]">
          <motion.h1
            className="max-w-3xl font-condensed text-[52px] font-bold leading-[1.1] tracking-[0.01em] text-cream sm:text-[68px] md:text-[92px] lg:text-[120px]"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Kristin <em className="font-sans italic text-coral">Burton</em>
          </motion.h1>
          <motion.p
            className="mt-7 max-w-[790px] text-lg leading-8 text-cream md:text-2xl md:leading-10"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.18 }}
          >
            I blend code and creativity - a web designer and developer who cares about color,
            layout, and every pixel in between.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.34 }}
          >
            <Button variant="pill-coral" size="pill-md" asChild>
              <a href="#featured-work">See my recent work</a>
            </Button>
            <Button variant="pill-ghost" size="pill-md" onClick={() => navigate('/about')}>
              About me
            </Button>
          </motion.div>
        </div>
        <motion.div
          className={heroScrolled ? 'hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2' : 'hidden sm:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.56 }}
        >
          <button
            id="hero-scroll-button"
            type="button"
            onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cream-subtle transition-colors hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:rounded-sm"
          >
            Scroll to explore
            <span className="material-symbols-rounded text-base" aria-hidden="true">south</span>
          </button>
        </motion.div>
      </section>

      <section id="featured-work" className="px-4 pb-16 sm:px-5 md:px-8 pt-[8.5rem] lg:pt-[11rem] lg:px-8 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 md:gap-12 lg:gap-0">
          <SectionTitle size="xl">Featured projects</SectionTitle>
          {featuredProjects.map((project) => {
            return (
              <article
                key={project.id}
                id={`featured-card-${project.id}`}
                className={`grid w-full gap-6 py-4 sm:gap-7 md:gap-8 md:py-6 lg:min-h-[719.95px] lg:items-center lg:gap-12 lg:py-10 xl:gap-16 ${project.textLeft ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] xl:grid-cols-[486.4px,729.6px]' : 'lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:grid-cols-[729.6px,486.4px]'}`}
              >
                <motion.div
                  className={project.textLeft ? 'order-1 lg:order-2' : 'order-1'}
                  initial={{ opacity: 0, y: 56, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div
                    role="link"
                    tabIndex={0}
                    aria-label={`View ${project.client} case study`}
                    onClick={() => navigate(project.linkTo)}
                    onKeyDown={e => e.key === 'Enter' && navigate(project.linkTo)}
                    className={`home-featured-card relative mx-auto flex h-[280px] w-full max-w-[730px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl px-3 ${project.imagePanelClass} min-[390px]:h-[300px] sm:h-[420px] sm:px-5 md:h-[500px] lg:h-[547.2px] lg:px-6`}
                  >
                    <div
                      className="home-featured-card__phone-frame relative h-[244px] w-[136px] overflow-hidden rounded-[20px] min-[390px]:h-[258px] min-[390px]:w-[146px] min-[390px]:rounded-[22px] sm:h-[384px] sm:w-[220px] sm:rounded-[24px] md:h-[456px] md:w-[264px] lg:h-[508.35px] lg:w-[294px] lg:rounded-[28px]"
                    >
                      {project.id === 'adopt' ? (
                        <>
                          <img src={project.imageSrc} alt={project.imageAlt} className="h-full w-full object-cover object-top" loading="lazy" />
                        </>
                      ) : (
                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className={project.textLeft ? 'order-2 lg:order-1' : 'order-2'}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1], delay: 0.18 }}
                >
                  <div className="mx-auto w-full max-w-[486px]">
                    <h2 className="font-condensed text-[34px] font-semibold leading-[1.02] tracking-[-0.01em] text-cream min-[390px]:text-[38px] sm:text-[44px] md:text-[52px] md:leading-[1.06] lg:text-[60px] lg:leading-[75px]">
                      {project.client}
                    </h2>
                    <p className="mt-2 text-[14px] leading-6 text-cream min-[390px]:text-[15px] sm:mt-3 sm:text-[17px] md:leading-7 lg:mt-[14px] lg:text-2xl lg:leading-8">{project.title}</p>
                    <button
                      id={`featured-link-${project.id}`}
                      type="button"
                      onClick={() => navigate(project.linkTo)}
                      className="mt-4 text-[14px] leading-5 tracking-[0.04em] text-coral transition-colors hover:text-cream min-[390px]:mt-5 min-[390px]:text-[15px] sm:mt-6 lg:mt-[26px] lg:text-[16px]"
                    >
                      View Project &nbsp;&rarr;
                    </button>
                  </div>
                </motion.div>
              </article>
            )
          })}
        </div>
        <div className="mx-auto mt-16 flex justify-center md:mt-20">
          <Button variant="pill-ghost" size="pill-lg" asChild>
            <a href="/projects">View all work →</a>
          </Button>
        </div>
      </section>

      <WorkTogetherCTA />
    </div>
  )
}
