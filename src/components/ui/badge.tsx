import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase transition-colors',
  {
    variants: {
      variant: {
        purple: 'bg-brand-purple/10 text-brand-purple-mid border border-brand-purple/20',
        coral:  'bg-brand-coral/10 text-coral border border-brand-coral/20',
        dark:   'bg-plum/10 text-plum border border-plum/20',
        white:  'bg-white/10 text-white border border-white/20',
      },
    },
    defaultVariants: { variant: 'purple' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
