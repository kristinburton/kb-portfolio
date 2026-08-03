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
    title:  'Adopt a Pet — three Zendesk help centers',
    role:   'Web Designer',
  },
  {
    id:     'marquis',
    slug:   'marquis-help-center-design',
    client: 'Marquis',
    title:  'Marquis help center & community',
    role:   'Web Designer + Developer',
  },
  {
    id:     'life360',
    slug:   'life360-help-center-design',
    client: 'Life360 · Family Safety App',
    title:  'Life360 help center unification',
    role:   'Web Designer',
  },
  {
    id:     'mef',
    slug:   'mef-gala-design',
    client: 'Moraga Education Foundation',
    title:  '2026 MEF auction gala',
    role:   'Web Designer + Developer',
  },
  {
    id:     'dashboard',
    slug:   'dashboard-design',
    client: 'Internal Project',
    title:  'Reporting dashboard design & development',
    role:   'Web Designer + Developer',
  },
  {
    id:     'portfolio',
    slug:   'portfolio-redesign',
    client: 'Kristin Burton · Personal Brand',
    title:  'Portfolio redesign',
    role:   'Web Designer + Developer',
  },
]
