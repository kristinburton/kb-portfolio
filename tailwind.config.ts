// ─── tailwind.config.ts ────────────────────────────────────────────────────────
// Consolidates brand tokens. Delete the --pp/--pm/--pd vars from index.css
// once pages stop referencing them.

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── New design-system tokens (2026 redesign) ──
        plum: {
          deep:    '#1e1530',
          DEFAULT: '#2a1f35',
          card:    '#33243D',
          mid:     '#3d2650',
        },
        coral: {
          DEFAULT: '#c85a4a',
          soft:    '#e8806e',
        },
        teal: {
          DEFAULT: '#5a8a8a',
          soft:    '#7eb0b0',
        },
        gold: '#c9a55c',
        sand: '#d4b896',
        cream: {
          DEFAULT: '#f5ebe6',
          muted:   'rgba(245,235,230,0.72)',
          subtle:  'rgba(245,235,230,0.55)',
          faint:   'rgba(245,235,230,0.35)',
        },
        surf: {
          1: 'rgba(245,235,230,0.04)',
          2: 'rgba(245,235,230,0.06)',
          3: 'rgba(245,235,230,0.10)',
        },
        hairline: {
          DEFAULT: 'rgba(245,235,230,0.08)',
          2:       'rgba(245,235,230,0.14)',
        },

        // ── Legacy brand tokens (used in Navbar, Footer, button.tsx compat variants) ──
        brand: {
          // ── Purple ramp — button.tsx compat variants ──
          purple:        '#A2519E',
          'purple-mid':  '#7d4e7a',
          'purple-dark': '#6d4070',

          // ── Accents — button.tsx compat variants (warm orange, differs from coral) ──
          coral:         '#E89C79',

          // ── Foreground tiers — Navbar, Footer, LovableCaseStudy ──
          off:           '#F8F5F9',
          fg:            '#F8F5F9',
          'fg-muted':    'rgba(248,245,249,0.70)',
          'fg-subtle':   'rgba(248,245,249,0.50)',
          'fg-faint':    'rgba(248,245,249,0.30)',

          // ── Text on light surfaces — button.tsx compat variants ──
          text:          '#1a1025',
          'text-mid':    '#3d2f48',
          muted:         '#6b5c75',
          border:        '#F8F5F9',

          // ── Haze gradient (hero light mode) ──
          'haze-cool':   '#9a90b2',
          'haze-rose':   '#bf7c8e',
          'haze-light':  '#eeddd5',
        },
      },
      fontFamily: {
        sans:      ['"Fira Sans"', 'sans-serif'],
        condensed: ['"Fira Sans Condensed"', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        'elev-1':  '0 2px 12px rgba(0,0,0,0.25)',
        'elev-2':  '0 8px 32px rgba(0,0,0,0.35)',
        'elev-3':  '0 16px 48px rgba(0,0,0,0.45)',
        'card':    '0 30px 60px rgba(0,0,0,0.4)',
        'phone':   '0 30px 60px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.1)',
        'phone-lg':'0 40px 80px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
