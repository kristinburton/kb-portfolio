// ─── src/components/ui/SectionEyebrow.tsx ──────────────────────────────────────
// One eyebrow to rule them all. Coral, 11px, 0.18em tracking, uppercase.
// Optional left bar (24×2px).

import { cn } from '@/lib/utils'

interface SectionEyebrowProps {
  children: React.ReactNode
  bar?: boolean
  className?: string
}

export function SectionEyebrow({ children, bar = true, className }: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        'section-eyebrow inline-flex items-center gap-[10px] font-sans text-[11px] font-bold uppercase text-coral',
        className
      )}
    >
      {bar && <span className="h-[2px] w-6 rounded-sm bg-coral" aria-hidden />}
      {children}
    </p>
  )
}
