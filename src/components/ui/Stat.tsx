// ─── src/components/ui/Stat.tsx ────────────────────────────────────────────────
// Canonical stat card. Used on Home and About — reads from data/profile.ts.

import { cn } from '@/lib/utils'

interface StatProps {
  value: string
  label: string
  className?: string
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div
      className={cn(
        'bg-white/[0.04] border border-white/[0.08] rounded-md p-6 text-center',
        className
      )}
    >
      <p className="font-condensed font-bold text-[44px] leading-none text-coral m-0 mb-1.5">
        {value}
      </p>
      <p className="text-[13px] text-cream-subtle m-0">{label}</p>
    </div>
  )
}

// Convenience wrapper: render all three profile stats
import { profileStats } from '@/data/profile'
export function StatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {profileStats.map(s => (
        <Stat key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  )
}
