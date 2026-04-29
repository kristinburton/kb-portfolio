// ─── src/pages/projectsIndex.tsx (refactored) ─────────────────────────────────
// Changes:
//  • Uses new image-forward <ProjectsCard/> (see components/projectsCard.tsx)
//  • Hero, CTA, section headers use <SectionHeader/>
//  • CTA buttons use <Button variant="pill-*">
//  • Footer removed — mount once in App.tsx
//  • Raw rgba() replaced with brand-fg-* tokens

import { useState } from 'react'
import { motion } from 'motion/react'
import { caseStudies } from '@/data/caseStudies'
import { ProjectsCard } from '@/components/ProjectsCard'
import { WorkTogetherCTA } from '@/components/WorkTogetherCTA'

// ── Logo imports (for marquee) ──
import logoLife360   from '@/assets/logos/life360-logo.png'
import logoMarquis   from '@/assets/logos/marquis-logo.png'
import logoStPaul    from '@/assets/logos/stpaul-logo.png'
import logoAccion    from '@/assets/logos/accion-opportunity-fund-logo.svg'
import logoMEF       from '@/assets/logos/MEF-gala-logo.png'
import logoFedlogic  from '@/assets/logos/fedlogic-logo.png'
import logoHonest    from '@/assets/logos/honest-logo.svg'
import logoStaples   from '@/assets/logos/staples-canada-logo.png'
import logoAdopt     from '@/assets/logos/adopt-a-pet-logo.png'
import logoMongo     from '@/assets/logos/mongoDB-logo.png'
import logoImperva   from '@/assets/logos/imperva-logo.png'
import logoLightBurn from '@/assets/logos/lightBurn-logo.png'
import logoMalware   from '@/assets/logos/malwarebytes-logo.png'
import logoTerra     from '@/assets/logos/terradotta-logo.png'
import logoJersey    from '@/assets/logos/all-jersey-MLS-logo.png'
import logoSmart     from '@/assets/logos/smartsimple-logo.png'
import logoInTapp     from '@/assets/logos/intapp-logo.svg'
import logoAirstream    from '@/assets/logos/airstream-logo.svg'


// ── Cover images (from /assets) ──
import life360Mobile from '@/assets/Life360-mobile-home.png'
import marquisMobile from '@/assets/Marquis-mobile-home.png'
import adoptapetMobile from '@/assets/Adoptapet-mobile-home.png'
import MEFMobile from '@/assets/MEF-mobile-home.png'
import DashboardMobile from '@/assets/Dashboard-mobile-home.png'
import portfolioMobile from '@/assets/Portfolio-mobile-home.png'

// Per-card art direction — cover image, brand bg, logo
const cardArt: Record<string, { cover?: string; coverBg: string; logo?: string }> = {
  life360:   { cover: life360Mobile, coverBg: 'linear-gradient(135deg, #c4b5f7, #9b85e8)' },
  marquis:   { cover: marquisMobile, coverBg: 'linear-gradient(135deg, #4a1a6e, #2a0050)' },
  adoptapet:    { cover: adoptapetMobile, coverBg: 'linear-gradient(135deg, #6dccc8, #3da098)' },
  mef:       { cover: MEFMobile, coverBg: 'linear-gradient(135deg, #c9a55c, #DBB065)' },
  dashboard:  { cover: DashboardMobile, coverBg: 'linear-gradient(135deg, #A3BECC, #3F5768)'},
  portfolio: {cover: portfolioMobile,  coverBg: 'linear-gradient(135deg, #BC4230, #733864)' },
}

const marqueeLogos = [
  { name: 'FEDlogic', src: logoFedlogic }, { name: 'Honest', src: logoHonest },
  { name: 'Staples', src: logoStaples }, { name: 'Adopt a Pet', src: logoAdopt },
  { name: 'MongoDB', src: logoMongo }, { name: 'Accion', src: logoAccion },
  { name: 'Imperva', src: logoImperva }, { name: 'LightBurn', src: logoLightBurn },
  { name: 'Malwarebytes', src: logoMalware }, { name: 'TerraDotta', src: logoTerra },
  { name: 'All Jersey MLS', src: logoJersey }, { name: 'SmartSimple', src: logoSmart },
  { name: 'Life360', src: logoLife360 }, { name: 'Marquis', src: logoMarquis },
  { name: 'St. Paul', src: logoStPaul }, { name: 'Airstream', src: logoAirstream },
  { name: 'InTapp', src: logoInTapp }, { name: 'MEF', src: logoMEF }
]

function ClientMarquee() {
  const [paused, setPaused] = useState(false)
  const items = [...marqueeLogos, ...marqueeLogos]
  return (
    <div className="bg-black/20 border-y border-white/[0.06] py-14">
      <h3 className="text-center font-condensed font-bold text-2xl text-cream mb-8 tracking-tight">
        More Clients I've Worked With
      </h3>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="marquee__fade-left absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" />
        <div className="marquee__fade-right absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" />
        <div className={`marquee__track flex gap-12 items-center py-2 px-8${paused ? ' marquee__track--paused' : ''}`}>
          {items.map((client, i) => (
            <img key={i} src={client.src} alt={client.name}
              className="logo-filter shrink-0 h-11 max-w-[130px] object-contain opacity-75" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function PortfolioIndex() {
  return (
    <div className="font-sans bg-plum min-h-screen">
      {/* ── HERO ── */}
      <section className="portfolio-hero px-8 pt-36 pb-20 text-center md:pt-44">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="portfolio-hero__title font-condensed font-bold text-cream leading-none tracking-[-0.02em] mb-0">
            Featured <em className="font-sans italic text-coral">projects</em>
          </h1>
          <p className="portfolio-hero__dek mt-6 text-cream-muted max-w-[500px] mx-auto leading-[1.6]">
            Design and development projects — from help center redesigns to custom-built sites.
          </p>
        </motion.div>
      </section>

      {/* ── CARD GRID ── */}
      <section className="px-8 pt-16 pb-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((study, index) => {
            const art = cardArt[study.id] ?? { coverBg: '#2a1f35' }
            return (
              <ProjectsCard
                key={study.id}
                study={study}
                index={index}
                cover={art.cover}
                coverBg={art.coverBg}
              />
            )
          })}
        </div>
      </section>

      <ClientMarquee />

      <WorkTogetherCTA />
    </div>
  )
}
