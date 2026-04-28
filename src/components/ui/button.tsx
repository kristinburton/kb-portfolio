// ─── src/components/ui/button.tsx ──────────────────────────────────────────────
// Adds pill variants (the shape every hand-rolled CTA on the site is trying to be).
// Usage:
//   <Button variant="pill-primary">Send Email</Button>
//   <Button variant="pill-outline-dark" size="pill-md">View Project</Button>
//
// Works with framer motion via asChild:
//   <Button asChild variant="pill-primary">
//     <motion.a whileHover={{ scale: 1.03 }} href={...}>Send Email</motion.a>
//   </Button>

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // ── Square / shadcn defaults (existing — kept for compatibility) ──
        default:   'rounded-md bg-brand-purple text-white hover:bg-brand-purple-mid',
        outline:   'rounded-md border border-brand-border bg-transparent hover:bg-brand-border/30 text-brand-text',
        ghost:     'rounded-md hover:bg-brand-border/30 text-brand-muted',
        coral:     'rounded-md bg-brand-coral text-white hover:opacity-90',
        dark:      'rounded-md bg-plum text-white hover:opacity-90',

        // ── Pill family (NEW — the canonical CTA shapes) ──
        'pill-primary':      'rounded-full bg-brand-coral text-white border-[1.5px] border-brand-coral hover:bg-[#b04a3a] hover:border-[#b04a3a]',
        'pill-purple':       'rounded-full bg-brand-purple text-white border-[1.5px] border-brand-purple hover:bg-brand-purple-mid hover:border-brand-purple-mid',
        'pill-outline-dark': 'rounded-full bg-transparent text-coral-soft border-[1.5px] border-brand-coral/70 hover:bg-brand-coral/10',
        'pill-ghost-dark':   'rounded-full bg-transparent text-cream border-[1.5px] border-white/50 hover:bg-white/10 hover:border-white/80',
        'pill-ghost-light':  'rounded-full bg-transparent text-brand-text border-[1.5px] border-brand-text/30 hover:bg-brand-text/8 hover:border-brand-text/50',
        'pill-light':        'rounded-full bg-white text-brand-purple-mid border-[1.5px] border-white hover:bg-white/90',
        'pill-link':         'rounded-none px-0 border-b-[1.5px] border-transparent text-coral-soft hover:border-brand-coral',

        // ── 2026 redesign variants ──
        'pill-coral':  'rounded-full bg-coral text-white border-[1.5px] border-coral hover:bg-[#a84840] hover:border-[#a84840] hover:-translate-y-px transition-all duration-300 ease-out',
        'pill-ghost':  'rounded-full bg-transparent text-cream border-[1.5px] border-cream/40 hover:bg-cream/10 hover:border-cream/60 hover:-translate-y-px transition-all duration-300 ease-out',
        'pill-teal':   'rounded-full bg-transparent text-teal-soft border-[1.5px] border-teal hover:bg-teal/10 hover:-translate-y-px transition-all duration-300 ease-out',
      },
      size: {
        default:   'h-10 px-5 py-2 text-sm',
        sm:        'h-8  px-3 text-xs',
        lg:        'h-12 px-8 text-base',
        icon:      'h-10 w-10',

        // ── Pill sizes ──
        'pill-sm': 'px-4 py-2 text-[13px]',
        'pill-md': 'px-[22px] py-3 text-sm',
        'pill-lg': 'px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
