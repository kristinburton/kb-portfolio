// ─── src/components/ui/SectionHeader.tsx ──────────────────────────────────────
// Canonical section header: eyebrow + h2 + dek. Drop in before any section body.

import { SectionEyebrow } from './SectionEyebrow'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  dek?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, dek, align = 'left', className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 max-w-[720px]',
        align === 'center' && 'mx-auto text-center items-center',
        className
      )}
    >
      {eyebrow && <SectionEyebrow bar={align !== 'center'}>{eyebrow}</SectionEyebrow>}
      <h2
        className="font-condensed font-bold text-[clamp(2rem,5vw,2.75rem)] leading-[1.05] tracking-[-0.01em] text-cream m-0"
      >
        {title}
      </h2>
      {dek && (
        <p className="section-header__dek text-base leading-[1.65]  m-0">
          {dek}
        </p>
      )}
    </div>
  )
}
