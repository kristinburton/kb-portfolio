import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { ScreenPlaceholder } from '@/data/caseStudies'

interface Props {
  screens: ScreenPlaceholder[]
}

export function InteractiveBrowserShowcase({ screens }: Props) {
  const browserScreens = screens.filter(s => s.frame !== 'phone' && s.frame !== 'none' && s.src)
  const phoneScreen    = screens.find(s => s.frame === 'phone')
  const [activeTab, setActiveTab] = useState(0)

  if (browserScreens.length === 0) return null
  const current = browserScreens[activeTab]

  return (
    <div className={`showcase-grid ${phoneScreen ? 'showcase-grid--with-phone' : 'showcase-grid--solo'}`}>

      {/* ── Browser mockup ── */}
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

        {/* Tab bar */}
        <div className="showcase__tabbar">
          {browserScreens.map((screen, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveTab(i)}
              whileTap={{ scale: 0.97 }}
              className={`showcase__tab${activeTab === i ? ' is-active' : ''}`}
            >
              {screen.label}
            </motion.button>
          ))}
        </div>

        {/* Browser chrome */}
        <div className="showcase__browser">
          {/* Traffic lights + URL bar */}
          <div className="showcase__chrome-bar">
            <div className="showcase__traffic-lights">
              <div className="showcase__traffic-dot showcase__traffic-dot--red" />
              <div className="showcase__traffic-dot showcase__traffic-dot--yellow" />
              <div className="showcase__traffic-dot showcase__traffic-dot--green" />
            </div>
            <div className="showcase__urlbar" />
          </div>

          {/* Screenshot — scrollable inside the frame */}
          <div className="showcase__viewport">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={current?.src}
                alt={current?.label}
                className="showcase__screenshot"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Progress dots */}
        <div className="showcase__prog-dots">
          {browserScreens.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`showcase__prog-dot ${activeTab === i ? 'showcase__prog-dot--active' : 'showcase__prog-dot--inactive'}`}
            />
          ))}
        </div>
      </motion.div>

      {/* ── Phone — sticky, manually scrollable ── */}
      {phoneScreen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="showcase__phone-sticky"
        >
          {/* Phone shell */}
          <div className="showcase__phone-shell">
            {/* Dynamic island */}
            <div className="showcase__phone-island" />
            {/* Side button */}
            <div className="showcase__phone-btn-side" />
            {/* Volume */}
            <div className="showcase__phone-vol showcase__phone-vol--top" />
            <div className="showcase__phone-vol showcase__phone-vol--bot" />

            {/* Scrollable screen */}
            <div className="showcase__phone-screen">
              <img
                src={phoneScreen.src}
                alt={phoneScreen.label ?? 'Mobile'}
                className="showcase__phone-screenshot"
              />
            </div>
          </div>

          <p className="showcase__phone-label">
            {phoneScreen.label ?? 'Mobile View'} · scroll to explore
          </p>
        </motion.div>
      )}
    </div>
  )
}
