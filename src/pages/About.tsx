import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Heart, Wine, Activity, Coffee, Music, Trees, Plane, BookOpen, Sprout, type LucideIcon } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { SectionTitle } from '@/components/SectionTitle'
import { MidCTA } from '@/components/MidCTA'
import { WorkTogetherCTA } from '@/components/WorkTogetherCTA'

import headshot   from '@/assets/about-headshot.jpg'
import outdoorPhoto from '@/assets/about-outdoor.jpg'

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [isVisible, setIsVisible] = useState(prefersReduced)
  useEffect(() => {
    if (prefersReduced) return
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); ob.unobserve(el) } },
      { threshold }
    )
    ob.observe(el); return () => ob.disconnect()
  }, [threshold, prefersReduced])
  return { ref, isVisible }
}

const hobbies = [
  { icon: 'Heart',    text: 'Time with my two kids and family' },
  { icon: 'Wine',     text: 'Catching up with friends over a glass of wine' },
  { icon: 'Activity', text: 'Yoga and Peloton bike' },
  { icon: 'Coffee',   text: 'Sipping strong coffee — always' },
  { icon: 'Music',    text: 'Curating playlists, attending concerts' },
  { icon: 'Trees',    text: 'Hiking, camping, getting outside' },
  { icon: 'Plane',    text: 'Planning my next adventure' },
  { icon: 'BookOpen', text: 'Getting lost in a good book' },
  { icon: 'Sprout',   text: 'Constantly learning & leveling up' },
]

const stats = [
  { value: '14+', label: 'Years experience' },
  { value: '50+', label: 'Projects delivered' },
  { value: '50+', label: 'Happy clients' },
]

function PhotoBox({ src, alt, label }: { src?: string; alt?: string; label: string }) {
  return (
    <div className="photo-box">
      <div className="photo-box__glow" />
      {src ? (
        <img src={src} alt={alt ?? label} className="photo-box__img" />
      ) : (
        <div className="photo-box__fallback">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          <p className="photo-box__label">{label}</p>
        </div>
      )}
    </div>
  )
}

export function About() {
  const { ref: heroRef,  isVisible: heroVisible }  = useScrollReveal(0.05)
  const { ref: hobbyRef, isVisible: hobbyVisible } = useScrollReveal(0.1)

  return (
    <div className="min-h-screen bg-plum pt-16 font-sans">
      <Navbar />

      {/* ── HERO: Headshot + name + stats ── */}
      <section className="about__section pb-16">
        <div className="about__glow about__glow--coral-left" />

        <div ref={heroRef} className={`about__grid reveal${heroVisible ? ' is-visible' : ''}`}>

          {/* Left — headshot */}
          <div className="col-span-12 md:col-span-5">
            <div className="about__photo-sticky">
              <div className="about__photo-glow-wrap">
                <div className="about__photo-glow" />
                <div className="relative">
                  <PhotoBox src={headshot} alt="Kristin Burton" label="Kristin Burton portrait" />
                </div>
              </div>
            </div>
          </div>

          {/* Right — name, dek, stats */}
          <div className="col-span-12 md:col-span-7 about__bio-col">
            <div className="about__name-group">
              <h1 className="about__headline-name font-condensed font-bold text-cream">
                Kristin <em className="font-sans italic text-coral">Burton.</em>
              </h1>
              <div className="mt-3 h-[3px] w-16 rounded-full bg-coral" />
              <p className="mt-5 text-[1.05rem] leading-[1.6] text-cream-muted italic">
                Design-driven development, based in California. I build branded help centers,
                marketing sites, and web apps where every detail earns its place.
              </p>
            </div>

            {/* Stats with teal vertical dividers */}
            <div className="about__stats flex items-center gap-0">
              {stats.map(({ value, label }, i) => (
                <motion.div key={label} className="flex items-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  {i > 0 && <div className="mx-8 h-12 w-px shrink-0 bg-teal opacity-50" />}
                  <div>
                    <p className="about__stat-value font-condensed font-bold text-coral mb-1">{value}</p>
                    <p className="about__stat-label text-cream-subtle text-[0.78rem]">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[760px]">

          <SectionTitle size="md">14 years writing code. Then I followed the design.</SectionTitle>
          <p className="mt-5 mb-14 text-[17px] leading-[1.75] text-cream-muted">
            I started as a front-end developer building B2C websites, then moved into the B2B space
            at Zendesk. Code gave me a unique balance — flexing the logical, problem-solving side
            while watching creative ideas take shape on screen. Designing custom help centers at
            Zendesk deepened my love for UX and visual storytelling, and eventually led me to shift
            my focus fully into design.
          </p>

          {/* Pull quote */}
          <blockquote className="mb-16 border-l-[3px] border-coral pl-7">
            <p className="font-condensed italic text-[28px] leading-[1.3] tracking-[-0.005em] text-coral-soft">
              "I know how it is built, and I know how it should feel."
            </p>
          </blockquote>

          <SectionTitle size="md">Websites and apps as a creative playground.</SectionTitle>
          <p className="mt-5 mb-14 text-[17px] leading-[1.75] text-cream-muted">
            I love crafting experiences that feel intuitive, beautiful, and purposeful — whether
            I'm laying out a page, choosing a palette, or pairing typography that just clicks.
            What drives me is thinking about how a site makes someone feel the moment they land on it.
          </p>

          <SectionTitle size="md">A developer's brain in every design.</SectionTitle>
          <p className="mt-5 text-[17px] leading-[1.75] text-cream-muted">
            Good designers never stop evolving. I'm constantly learning, pushing myself to create
            work that is both technically sharp and visually compelling. Years on both sides of the
            process means I bring something a little different to every project.
          </p>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <div className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MidCTA
            title="Want to see the work?"
            dek="Six selected projects with the full story behind each."
            buttonLabel="Browse portfolio →"
            href="/projects"
          />
        </div>
      </div>

      {/* ── OUTSIDE OF WORK ── */}
      <section className="about__section border-t border-hairline bg-plum-deep">
        <div ref={hobbyRef} className={`about__grid reveal${hobbyVisible ? ' is-visible' : ''}`}>

          {/* Left — outdoor photo */}
          <div className="col-span-12 md:col-span-5">
            <PhotoBox src={outdoorPhoto} label="Outdoor photo" />
          </div>

          {/* Right — hobby list */}
          <div className="col-span-12 md:col-span-7 about__approach-col">
            <h2 className="about__headline-section font-condensed font-bold text-cream">
              Off the clock.
            </h2>
            <ul className="about__hobby-list">
              {hobbies.map(({ icon, text }, i) => {
                const icons: Record<string, LucideIcon> = { Heart, Wine, Activity, Coffee, Music, Trees, Plane, BookOpen, Sprout }
                const Icon = icons[icon]
                return (
                  <motion.li key={text}
                    initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3">
                    <Icon size={16} className="text-coral shrink-0 mt-[3px]" />
                    <span className="about__hobby-text text-cream-muted text-[0.925rem]">{text}</span>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <WorkTogetherCTA />
    </div>
  )
}
