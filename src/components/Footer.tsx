// ─── src/components/Footer.tsx ─────────────────────────────────────────────────
// Single canonical footer. Replaces duplicates in Home.tsx, PortfolioIndex.tsx,
// BentoGridLayout.tsx, and HeroSplitLayout.tsx.
//
// Mount once in App.tsx (or a layout wrapper), not per-page.

import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

function LinkedIn()  { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> }
function Instagram() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> }
function Github()    { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> }

export function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="bg-brand-footer-dark border-t border-white/[0.08] px-6 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate('/')}
          className="font-condensed font-bold text-[22px] text-brand-off tracking-[0.06em] cursor-pointer bg-transparent border-0 p-0"
        >
          KB
        </button>
        <span className="text-xs text-brand-off">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
           className="text-brand-off hover:text-brand-purple transition-colors"><LinkedIn /></a>
        <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
           className="text-brand-off hover:text-brand-purple transition-colors"><Instagram /></a>
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
           className="text-brand-off hover:text-brand-purple transition-colors"><Github /></a>
      </div>
    </footer>
  )
}
