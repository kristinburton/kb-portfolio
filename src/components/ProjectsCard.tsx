// ─── src/components/projectsCard.tsx ──────────────────────────────────────────
// Image-forward portfolio card. Replaces the text-heavy version in PortfolioIndex.
// ~60% of the card is cover image; logo becomes a small mark below.

import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import type { CaseStudy } from '@/data/caseStudies'

interface ProjectsCardProps {
  study: CaseStudy
  index?: number
  cover?: string        // recommended: pass the mobile-home screenshot
  coverBg?: string      // background color that matches the brand (e.g. '#1e1040')
  logo?: string
}

export function ProjectsCard({ study, index = 0, cover, coverBg = '#1e1530', logo }: ProjectsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/projects/${study.slug}`}
        className="group block h-full no-underline"
      >
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-surf-1 border border-hairline rounded-md p-[22px] flex flex-col gap-3.5 h-full transition-colors group-hover:bg-surf-2 group-hover:border-hairline-2 group-hover:shadow-elev-2"
        >
          {/* Cover — the hero of the card */}
          <div
            className="aspect-[4/3] rounded-sm overflow-hidden flex items-center justify-center"
            style={{ background: coverBg }}
          >
            {cover ? (
              <img
                src={cover}
                alt={study.client}
                className="max-w-[62%] max-h-[88%] object-contain"
              />
            ) : (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
              </svg>
            )}
          </div>

          {/* Logo mark */}
          {logo && (
            <img
              src={logo}
              alt=""
              className="logo-filter h-5 max-w-[110px] object-contain object-left opacity-90"
            />
          )}

          {/* Title + role */}
          <div className="flex flex-col gap-0.5 flex-1">
            <h4 className="font-condensed font-bold text-[19px] leading-[1.3] text-cream m-0">
              {study.title}
            </h4>
            <p className="text-[12px] text-cream-subtle m-0">{study.role}</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
