// ─── ParallaxGallery ──────────────────────────────────────────────────────────
// Overlapping parallax showcase with a center browser mockup, a smaller
// browser on the left, and a phone on the right. Drop into any case study
// before the footer CTA.
//
// Usage:
//   <ParallaxGallery
//     main={landingScreenshot}
//     left={interiorScreenshot}
//     phone={mobileScreenshot}
//   />

import { useEffect, useRef, useState } from 'react'

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.1) {
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
      setOffset(Math.round((rect.top + rect.height / 2 - window.innerHeight / 2) * speed * -1))
    }
    window.addEventListener('scroll', handle, { passive: true })
    handle()
    return () => window.removeEventListener('scroll', handle)
  }, [speed])
  return { ref, offset }
}

// ── ScrollingMockup ───────────────────────────────────────────────────────────

function ScrollingMockup({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="mock-browser">
      <div className="mock-browser__chrome">
        <div className="mock-browser__traffic-lights">
          <div className="mock-dot mock-dot--coral" />
          <div className="mock-dot mock-dot--yellow" />
          <div className="mock-dot mock-dot--purple" />
        </div>
        <div className="mock-browser__urlbar-wrap">
          <div className="mock-browser__urlbar" />
        </div>
      </div>
      <div className="mock-browser__viewport">
        <div className="mock-screen__scroll-content">
          {imageSrc
            ? <img src={imageSrc} alt="" className="mock-screen__img" />
            : <div className="mock-browser__fallback" />
          }
        </div>
      </div>
    </div>
  )
}

// ── PhoneMockup ───────────────────────────────────────────────────────────────

function PhoneMockup({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="mock-phone">
      <div className="mock-phone__notch-bar">
        <div className="mock-phone__notch rounded-full" />
      </div>
      <div className="mock-phone__screen">
        <div className="mock-screen__scroll-content">
          {imageSrc
            ? <img src={imageSrc} alt="" className="mock-screen__img" />
            : <div className="mock-phone__fallback" />
          }
        </div>
      </div>
      <div className="mock-phone__home-bar">
        <div className="mock-phone__home-pill rounded-full" />
      </div>
    </div>
  )
}

// ── ParallaxGallery ───────────────────────────────────────────────────────────

interface ParallaxGalleryProps {
  eyebrow?: string
  title?: string
  main?: string               // center browser mockup
  left?: string               // left browser mockup
  phone?: string              // right phone mockup
}

export function ParallaxGallery({
  eyebrow = 'Key Screens',
  title = 'The Final Product',
  main,
  left,
  phone,
}: ParallaxGalleryProps) {
  const { ref: r1, offset: o1 } = useParallax(0.15)
  const { ref: r2, offset: o2 } = useParallax(0.25)
  const { ref: r3, offset: o3 } = useParallax(0.10)
  const { ref: revealRef, isVisible } = useScrollReveal(0.1)

  if (!main && !left && !phone) return null

  return (
    <section className="parallax-gallery">
      <div ref={revealRef} className={`parallax-gallery__inner reveal${isVisible ? ' is-visible' : ''}`}>
        <p className="text-coral font-bold uppercase tracking-[0.15em] text-[0.8rem] mb-3">{eyebrow}</p>
        <h2 className="parallax-gallery__title font-condensed font-bold text-cream mb-16">{title}</h2>

        <div className="parallax-gallery__stage">
          {main && (
            <div ref={r1} className="parallax-gallery__center" style={{ transform: `translateX(-50%) translateY(${o1}px)` }}>
              <ScrollingMockup imageSrc={main} />
            </div>
          )}
          {phone && (
            <div ref={r2} className="parallax-gallery__right" style={{ transform: `translateY(${o2}px)` }}>
              <PhoneMockup imageSrc={phone} />
            </div>
          )}
          {left && (
            <div ref={r3} className="parallax-gallery__left" style={{ transform: `translateY(${o3}px)` }}>
              <ScrollingMockup imageSrc={left} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
