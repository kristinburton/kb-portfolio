import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Heart, Wine, Activity, Coffee, Music, Trees, Plane, BookOpen, Sprout, type LucideIcon } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { SectionTitle } from '@/components/SectionTitle'
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
  { value: '150+', label: 'Projects delivered' },
  { value: '145+', label: 'Happy clients' },
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
              <p className="mt-5 text-[1.05rem] leading-[1.6] text-cream italic">
                Designer and developer based in Petaluma, California. I build branded help centers, marketing sites, and web apps where every pixel earns its place.
              </p>
            </div>

            {/* Stats — case-study bar style */}
            <div className="mt-8 flex rounded-sm border border-hairline bg-plum-card overflow-hidden">
              {stats.map(({ value, label }, i) => (
                <motion.div key={label} className="flex flex-1 items-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  {i > 0 && <div className="w-px self-stretch bg-hairline-2" />}
                  <div className="flex flex-1 flex-col items-center justify-center px-4 py-6 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sand">{label}</p>
                    <p className="mt-2 font-condensed text-[28px] font-bold leading-none text-cream">{value}</p>
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

          <SectionTitle size="md">Self-taught, curious, and hooked from day one.</SectionTitle>
          <p className="mt-5 mb-14 text-[17px] leading-[1.75] text-cream">
            I fell into front-end development at my first job out of college, taught on the job through books, tutorials, Stack Overflow, and a patient manager. I grew a real passion for it fast. There was something addictive about the challenge, watching code come to life on screen, solving problems, finding the best path forward. What I loved most was that it still let me be creative, not just in what I built, but in how I built it.
          </p>

          <SectionTitle size="md">Empathy is the best design tool.</SectionTitle>
          <p className="mt-5 mb-14 text-[17px] leading-[1.75] text-cream">
            That appreciation for craft naturally led me to start thinking about the people on the other side of the screen. I became genuinely fascinated by how people navigate the web and apps, what feels intuitive, what causes friction, what paths they take that you never expected. Watching someone else use something I built made me a more thoughtful, empathetic designer and developer.
          </p>

          <SectionTitle size="md">AI changed how I build. In the best way.</SectionTitle>
          <p className="mt-5 text-[17px] leading-[1.75] text-cream">
            These days I still write code, leaning on AI to move faster and experiment more freely. It has been a fun playground, ideas come to life quicker, and there is more room to explore animations and interactions that would have once eaten up too much dev time. I am constantly pushing myself, learning, and figuring out what works and what really does not.
          </p>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      {/* <div className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MidCTA
            title="Want to see the work?"
            dek="Six selected projects with the full story behind each."
            buttonLabel="Browse portfolio →"
            href="/projects"
          />
        </div>
      </div> */}

      {/* ── OUTSIDE OF WORK ── */}
      <section className="about__section border-t border-hairline">
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
            <ul className="about__hobby-list text-cream">
              {hobbies.map(({ icon, text }, i) => {
                const icons: Record<string, LucideIcon> = { Heart, Wine, Activity, Coffee, Music, Trees, Plane, BookOpen, Sprout }
                const Icon = icons[icon]
                return (
                  <motion.li key={text}
                    initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3">
                    <Icon size={16} className="text-coral shrink-0 mt-[3px]" />
                    <span className="about__hobby-text  text-[0.925rem]">{text}</span>
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
