import { useState, useRef, useCallback } from 'react'

interface ComparisonSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
}

export function ComparisonSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }

  const onPointerUp = () => { isDragging.current = false }

  return (
    <div
      ref={containerRef}
      className="relative cursor-ew-resize select-none overflow-hidden rounded-[2px] border border-hairline"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label={`${beforeLabel} vs ${afterLabel} comparison`}
    >
      {/* Before — full width base (drives container height) */}
      <img
        src={beforeSrc}
        alt={beforeLabel}
        className="block w-full"
        draggable={false}
      />

      {/* After — clipped to right portion */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img
          src={afterSrc}
          alt={afterLabel}
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-cream/70"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream shadow-elev-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7 4L2 10L7 16" stroke="#2a1f35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L18 10L13 16" stroke="#2a1f35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-plum/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-cream backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-plum/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-cream backdrop-blur-sm">
        {afterLabel}
      </span>
    </div>
  )
}
