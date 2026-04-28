// ─── LovableCaseStudy ─────────────────────────────────────────────────────────
// Reusable Lovable-style case study layout.
// Used for: St. Paul, Life360, Accion, MEF
// Navbar rendered inside component (no WithNav wrapper needed in App.tsx)

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'

// ── Types ────────────────────────────────────────────────────────────────────

export interface LovableStudyData {
  slug:        string
  client:      string
  title:       string
  subtitle:    string
  role:        string
  timeline:    string
  technologies: string[]
  heroGradient: string
  liveUrl?:    string
  star: {
    situation: string
    task:      string
    action:    string
    result:    string
  }
  // Up to 4 images — situation, task, action, result (in that order)
  images: {
    situation?: string
    task?:      string
    action?:    string
    result?:    string
    mobile?:    string   // for the parallax gallery phone mockup
    gallery?:   string[] // extra screens for the parallax gallery
  }
}

// ── Hooks ────────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); ob.unobserve(el) } },
      { threshold }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [threshold])
  return { ref, isVisible }
}

function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const handle = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setOffset((rect.top + rect.height / 2 - window.innerHeight / 2) * speed * -1)
    }
    window.addEventListener('scroll', handle, { passive: true })
    handle()
    return () => window.removeEventListener('scroll', handle)
  }, [speed])
  return { ref, offset }
}

// ── Sub-components ───────────────────────────────────────────────────────────

function ScrollingMockup({
  imageSrc, scrollDistance = '-60%', className = '',
}: { imageSrc?: string; scrollDistance?: string; className?: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className={className}>
      <div 
        className="mock-browser"
        style={{
          boxShadow: hovered ? '0 35px 70px rgba(139,90,135,0.3)' : '0 25px 50px rgba(0,0,0,0.4)',
          transform: hovered ? 'scale(1.02)' : 'scale(1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Browser chrome */}
        <div className="mock-browser__chrome">
          <div className="mock-browser__traffic-lights">
            {['rgba(200,90,74,0.7)', 'rgba(200,160,74,0.7)', 'rgba(139,90,135,0.7)'].map((c, i) => (
              <div key={i} className="mock-dot" style={{ background: c }} />
            ))}
          </div>
          <div className="mock-browser__urlbar-wrap">
            <div className="mock-browser__urlbar" />
          </div>
        </div>
        {/* Scrolling screenshot */}
        <div className="mock-browser__viewport">
          <div className="mock-screen__scroll-content" style={{ ['--scroll-distance' as string]: scrollDistance }}>
            {imageSrc
              ? <img src={imageSrc} alt="" className="mock-screen__img" />
              : <div className="mock-browser__fallback" />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneMockup({ imageSrc }: { imageSrc?: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div>
      <div 
        className="mock-phone"
        style={{
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="mock-phone__notch-bar">
          <div className="mock-phone__notch rounded-full" />
        </div>
        <div className="mock-phone__screen">
          <div className="mock-screen__scroll-content" style={{ ['--scroll-distance' as string]: '-50%' }}>
            {imageSrc
              ? <img src={imageSrc} alt="" className="mock-screen__img" />
              : <div className="mock-phone__fallback" />
            }
          </div>
        </div>
        <div className="mock-phone__home-bar">
          <div className="mock-phone__home-pill" />
        </div>
      </div>
    </div>
  )
}

function StarSection({
  label, title, description, reversed = false, imageSrc,
}: { label: string; title: string; description: string; reversed?: boolean; imageSrc?: string }) {
  const { ref, isVisible } = useScrollReveal(0.15)
  return (
    <section 
      ref={ref} 
      className={`star-section ${reversed ? 'star-section__row--reversed' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div className="star-section__inner">
        <div className={`star-section__row ${reversed ? 'star-section__row--reversed' : ''}`}>
          <div className="star-section__text">
            <p className="text-brand-coral font-bold uppercase tracking-[0.15em] text-[0.8rem]">{label}</p>
            <h2 className="font-condensed font-bold text-brand-fg star-section__title">
              {title}
            </h2>
            <p className="text-brand-fg-muted star-section__desc">{description}</p>
          </div>
          <div className={`star-section__mockup ${reversed ? 'star-section__mockup--reversed' : ''}`}>
            <ScrollingMockup imageSrc={imageSrc} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ParallaxGallery({ images }: { images: LovableStudyData['images'] }) {
  const { ref: r1, offset: o1 } = useParallax(0.15)
  const { ref: r2, offset: o2 } = useParallax(0.25)
  const { ref: r3, offset: o3 } = useParallax(0.10)
  const { ref: revealRef, isVisible } = useScrollReveal(0.1)

  const main    = images.situation ?? images.gallery?.[0]
  const left    = images.task      ?? images.gallery?.[1]
  const right   = images.mobile
  const hasGallery = main || left || right

  if (!hasGallery) return null

  return (
    <section className="parallax-gallery">
      <div 
        ref={revealRef} 
        className="parallax-gallery__inner"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <p className="text-brand-coral font-bold uppercase tracking-[0.15em] text-[0.8rem] mb-3">Key Screens</p>
        <h2 className="font-condensed font-bold text-brand-fg mb-16 parallax-gallery__title">The Final Product</h2>

        <div className="parallax-gallery__stage">
          {main && (
            <div ref={r1} className="parallax-gallery__center" style={{ transform: `translateX(-50%) translateY(${o1}px)` }}>
              <ScrollingMockup imageSrc={main} />
            </div>
          )}
          {right && (
            <div ref={r2} className="parallax-gallery__right" style={{ transform: `translateY(${o2}px)` }}>
              <PhoneMockup imageSrc={right} />
            </div>
          )}
          {left && (
            <div ref={r3} className="parallax-gallery__left" style={{ transform: `translateY(${o3}px)` }}>
              <ScrollingMockup imageSrc={left} scrollDistance="-50%" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ── Main exported component ───────────────────────────────────────────────────

export function LovableCaseStudy({ data }: { data: LovableStudyData }) {
  const navigate = useNavigate()
  const { ref: heroRef,  isVisible: heroVisible }  = useScrollReveal(0.1)
  const { ref: infoRef,  isVisible: infoVisible }  = useScrollReveal(0.1)

  const starSections = [
    { label: 'Situation', title: 'Identifying the Gap',      text: data.star.situation, img: data.images.situation, reversed: false },
    { label: 'Task',      title: 'Defining the Objective',   text: data.star.task,      img: data.images.task,      reversed: true  },
    { label: 'Action',    title: 'Crafting the Solution',    text: data.star.action,    img: data.images.action,    reversed: false },
    { label: 'Result',    title: 'Measuring the Impact',     text: data.star.result,    img: data.images.result,    reversed: true  },
  ]

  return (
    <div className="min-h-screen bg-brand-footer-dark pt-16 font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <header className="cs-hero" ref={heroRef}>
        <div className="cs-hero__gradient-base" style={{ background: data.heroGradient.replace('linear-gradient(135deg,', 'linear-gradient(135deg, rgba(').replace(')', ', 0.4)') }} />
        <div className="cs-hero__gradient-base" style={{ background: data.heroGradient, opacity: 0.25 }} />
        <div className="cs-hero__gradient-fade" />

        <div 
          className="cs-hero__content"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p className="text-brand-coral font-bold uppercase tracking-[0.18em] text-[0.78rem]">
            Case Study
          </p>
          <h1 className="font-condensed font-bold text-brand-fg cs-hero__title">
            {data.title}
          </h1>
          <p className="text-brand-fg-muted max-w-[600px] cs-hero__dek">
            {data.subtitle}
          </p>
          {data.liveUrl && (
            <a href={data.liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-brand-coral text-white rounded-sm font-semibold text-[0.95rem] no-underline transition-colors hover:bg-[#b04a3a]"
            >
              View Live Project
            </a>
          )}
        </div>
      </header>

      {/* ── PROJECT INFO BAR ── */}
      <section 
        ref={infoRef} 
        className="cs-infobar"
        style={{
          opacity: infoVisible ? 1 : 0,
          transform: infoVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div className="cs-infobar__inner">
          {[
            { label: 'Role',         value: data.role },
            { label: 'Timeline',     value: data.timeline },
            { label: 'Technologies', value: data.technologies.join(' · ') },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p className="text-brand-coral font-bold uppercase tracking-[0.16em] text-[0.7rem] mb-1">{label}</p>
              <p className="text-brand-fg font-medium text-[0.95rem]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STAR SECTIONS ── */}
      {starSections.map(({ label, title, text, img, reversed }) => (
        <StarSection key={label} label={label} title={title} description={text} reversed={reversed} imageSrc={img} />
      ))}

      {/* ── PARALLAX GALLERY ── */}
      <ParallaxGallery images={data.images} />

      {/* ── FOOTER CTA ── */}
      <section className="cs-cta">
        <div className="cs-cta__inner">
          <h2 className="font-condensed font-bold text-brand-fg cs-cta__title">Want to see more?</h2>
          <p className="text-brand-fg-muted text-[1.05rem]" style={{ lineHeight: 1.6 }}>
            Check out my other case studies or get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="pill-purple" size="pill-md" onClick={() => navigate('/projects')}>
              View All Work
            </Button>
            <Button asChild variant="pill-ghost-dark" size="pill-md">
              <a href="kristin@kristin-burton.com">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
