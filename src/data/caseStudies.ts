export interface CaseStudy {
  id: string
  slug: string
  client: string
  title: string
  role: string
}

export const caseStudies: CaseStudy[] = [
  {
    id:     'adoptapet',
    slug:   'adoptapet-help-center-design',
    client: 'Adopt a Pet · Envoy Project',
    title:  'Adopt-a-Pet Envoy Project',
    role:   'Web Designer / Web Developer',
  },
  {
    id:     'marquis',
    slug:   'marquis-help-center-design',
    client: 'Marquis',
    title:  'Marquis Envoy Project',
    role:   'Web Designer / Web Developer',
  },
  {
    id:     'life360',
    slug:   'life360-help-center-design',
    client: 'Life360 · Family Safety App',
    title:  'Life360 Envoy Project',
    role:   'Lead Designer',
  },
  {
    id:     'mef',
    slug:   'mef-gala-design',
    client: 'Moraga Education Foundation',
    title:  '2026 MEF Auction Gala',
    role:   'Designer + Dev',
  },
  {
    id:     'dashboard',
    slug:   'dashboard-design',
    client: 'Internal Project',
    title:  'Reporting Dashboard Design & Development',
    role:   'Lead Designer & Developer',
  },
  {
    id:     'portfolio',
    slug:   'portfolio-redesign',
    client: 'Kristin Burton · Personal Brand',
    title:  'Portfolio Redesign',
    role:   'Designer & Developer',
  },
]
