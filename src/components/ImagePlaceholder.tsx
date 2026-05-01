import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  label: string
  src?: string
  alt?: string
  className?: string
  tall?: boolean
}

export function ImagePlaceholder({
  label,
  src,
  alt,
  className,
  tall = false,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        className={cn(
          'w-full object-cover rounded-lg',
          tall ? 'h-52' : 'h-44',
          className
        )}
      />
    )
  }

  return (
    <div
      className={cn(
        'bg-brand-off border border-brand-border rounded-lg flex flex-col items-center justify-center gap-2',
        tall ? 'h-52' : 'h-44',
        className
      )}
    >
      {/* Placeholder icon */}
      <div className="w-8 h-6 bg-brand-border rounded opacity-60" />
      <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-muted/70">
        {label}
      </span>
    </div>
  )
}
