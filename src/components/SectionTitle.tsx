import { cn } from '@/lib/utils'

type SectionTitleProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: 'xl' | 'lg' | 'md'
  align?: 'left' | 'center'
  underline?: boolean
  className?: string
}

const sizeClasses = {
  xl: 'text-[54px]',
  lg: 'text-[42px]',
  md: 'text-[34px]',
}

export function SectionTitle({ children, as: Tag = 'h2', size = 'lg', align = 'center', underline = false, className }: SectionTitleProps) {
  return (
    <Tag className={cn('font-condensed font-bold leading-[1.05] tracking-[-0.015em] text-cream', sizeClasses[size], align === 'center' && 'text-center', className)}>
      {children}
      {underline && (
        <div className={cn('mt-3 h-[3px] w-[60px] rounded-full bg-teal', align === 'center' && 'mx-auto')} />
      )}
    </Tag>
  )
}
