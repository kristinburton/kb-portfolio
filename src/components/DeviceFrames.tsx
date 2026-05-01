// ─── Device Frame Components ──────────────────────────────────────────────────
// Drop screenshots into BrowserFrame (desktop) or PhoneFrame (mobile)
// Usage:
//   <BrowserFrame src={img} alt="Landing page" />
//   <PhoneFrame src={img} alt="Mobile view" />

interface FrameProps {
  src?: string
  alt?: string
  label?: string
}

// ── Browser / Desktop Frame ───────────────────────────────────────────────────
export function BrowserFrame({ src, alt, label }: FrameProps) {
  return (
    <div className="browser-frame">
      {/* Chrome bar */}
      <div className="browser-frame__chrome">
        <div className="browser-frame__traffic-lights">
          <div className="browser-frame__dot browser-frame__dot--red" />
          <div className="browser-frame__dot browser-frame__dot--yellow" />
          <div className="browser-frame__dot browser-frame__dot--green" />
        </div>
        <div className="browser-frame__urlbar" />
      </div>
      {/* Screenshot */}
      {src ? (
        <img src={src} alt={alt ?? label ?? ''} className="device-frame__img" />
      ) : (
        <div className="browser-frame__fallback">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
          {label && <span className="device-frame__label">{label}</span>}
        </div>
      )}
    </div>
  )
}

// ── Phone Frame ───────────────────────────────────────────────────────────────
export function PhoneFrame({ src, alt, label }: FrameProps) {
  return (
    <div className="phone-frame">
      <div className="phone-frame__shell">
        {/* Dynamic island / notch */}
        <div className="phone-frame__island" />

        {/* Screen */}
        <div className="phone-frame__screen">
          {src ? (
            <img src={src} alt={alt ?? label ?? ''} className="device-frame__img" />
          ) : (
            <div className="phone-frame__fallback">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
              {label && <span className="device-frame__label">{label}</span>}
            </div>
          )}
        </div>

        {/* Side button */}
        <div className="phone-frame__btn-side" />
        {/* Volume buttons */}
        <div className="phone-frame__btn-vol phone-frame__btn-vol--top" />
        <div className="phone-frame__btn-vol phone-frame__btn-vol--bot" />
      </div>
    </div>
  )
}
