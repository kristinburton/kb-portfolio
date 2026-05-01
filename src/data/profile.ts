// ─── src/data/profile.ts ───────────────────────────────────────────────────────
// Single source of truth for the stats shown on Home + About.
// Home said "5+ years", About said "12+ years" — this fixes that.

export const profileStats = [
  { value: '14+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
] as const

export const profile = {
  name: 'Kristin Burton',
  title: 'Designer & Developer',
  location: 'California',
  tagline: 'Design-driven development.',
  email: 'kristin@kristin-burton.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/kristin-burton/',
    github:   'https://github.com/kristinburton',
    instagram:'https://www.instagram.com/kristinburtoncreative/',
  },
} as const
