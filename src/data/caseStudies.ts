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
    title:  'Adopt-a-Pet envoy project',
    role:   'Web Designer / Web Developer',
  },
  {
    id:     'marquis',
    slug:   'marquis-help-center-design',
    client: 'Marquis',
    title:  'Marquis envoy project',
    role:   'Web Designer / Web Developer',
  },
  {
    id:     'life360',
    slug:   'life360-help-center-design',
    client: 'Life360 · Family Safety App',
    title:  'Life360 envoy project',
    role:   'Lead Designer',
  },
  {
    id:     'mef',
    slug:   'mef-gala-design',
    client: 'Moraga Education Foundation',
    title:  '2026 MEF auction gala',
    role:   'Designer + Dev',
  },
  {
    id:     'dashboard',
    slug:   'dashboard-design',
    client: 'Internal Project',
    title:  'Reporting dashboard design & development',
    role:   'Lead Designer & Developer',
  },
  {
    id:     'portfolio',
    slug:   'portfolio-redesign',
    client: 'Kristin Burton · Personal Brand',
    title:  'Portfolio redesign',
    role:   'Designer & Developer',
  },
]
