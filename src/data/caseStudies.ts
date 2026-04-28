// ─── Image imports ─────────────────────────────────────────────────────────────

// Life360
import life360Landing  from '@/assets/Life360-CaseStudy-Top-Landing.png'
import life360Category from '@/assets/Life360-CaseStudy-Top-Interior.png'
import life360Flow     from '@/assets/Life360-CaseStudy-Grid-Desktop-One.png'
import life360Mobile   from '@/assets/Life360-CaseStudy-Grid-Mobile-One.png'

// Marquis
import marquisLanding         from '@/assets/Marquis-CaseStudy-Top-Landing.png'
import marquisFlow            from '@/assets/Marquis-CaseStudy-Grid-Desktop-One.png'
import marquisMobile          from '@/assets/Marquis-CaseStudy-Grid-Mobile-One.png'
import marquisArticle3col     from '@/assets/Marquis-CaseStudy-Grid-Desktop-Two.png'
import marquisCommunityPosts  from '@/assets/Marquis-CaseStudy-Grid-Mobile-Two.png'
import marquisCommunityTopics from '@/assets/Marquis-CaseStudy-Grid-Desktop-Two.png'

// MEF Gala
import mefLanding       from '@/assets/MEF-CaseStudy-Top-Landing.png'
import mefDetails       from '@/assets/MEF-CaseStudy-Top-Interior.png'
import mefAuction       from '@/assets/MEF-CaseStudy-Grid-Desktop-One.png'
import mefFaqs          from '@/assets/MEF-CaseStudy-Grid-Desktop-Two.png'
import mefMobileLanding from '@/assets/MEF-CaseStudy-Grid-Mobile-One.png'
import mefSlidedeck     from '@/assets/MEF-CaseStudy-Grid-Mobile-Two.png'

// FedLogic Dashboard
import fedlogicV1 from '@/assets/Dashboard-CaseStudy-Top-Landing.png'
import fedlogicV2 from '@/assets/Dashboard-CaseStudy-Top-Interior.png'
import fedlogicV3 from '@/assets/Dashboard-CaseStudy-Grid-Desktop-One.png'
import fedlogicV4 from '@/assets/Dashboard-CaseStudy-Grid-Desktop-Two.png'

// Portfolio redesign — before (add screenshots when ready)
// import oldPortfolioHome    from '@/assets/old-portfolio-home.png'
// import oldPortfolioIndex   from '@/assets/old-portfolio-index.png'
// import oldPortfolioLife360 from '@/assets/old-portfolio-life360.png'

// ─── Types ────────────────────────────────────────────────────────────────────

export type LayoutType = 'hero-split' | 'bento-grid' | 'before-after'

export interface StarContent {
  situation: string
  task: string
  action: string
  result: string
}

export type FrameType = 'browser' | 'phone' | 'none'

export interface ScreenPlaceholder {
  label: string
  src?: string
  frame?: FrameType
  hero?: boolean
}

export interface OutcomeItem {
  text: string
  metric?: string
  metricLabel?: string
}

export interface CaseStudyBase {
  id: string
  slug: string
  client: string
  title: string
  subtitle: string
  layout: LayoutType
  role: string
  timeline: string
  technologies: string[]
  coverImage?: string
  heroGradient?: string
}

export interface HeroSplitCaseStudy extends CaseStudyBase {
  layout: 'hero-split'
  star: StarContent
  screens: ScreenPlaceholder[]
  outcomes: OutcomeItem[]
}

export interface BentoCellData {
  label: string
  heading: string
  body: string
  stat?: string
  statLabel?: string
  tags?: string[]
  screen?: ScreenPlaceholder
  accent?: boolean
  wide?: boolean
  tall?: boolean
}

export interface BentoCaseStudy extends CaseStudyBase {
  layout: 'bento-grid'
  cells: BentoCellData[]
}

export interface BeforeAfterCaseStudy extends CaseStudyBase {
  layout: 'before-after'
  star: StarContent
  beforeScreens: ScreenPlaceholder[]
  afterScreens: ScreenPlaceholder[]
  outcomes: OutcomeItem[]
}

export type CaseStudy = HeroSplitCaseStudy | BentoCaseStudy | BeforeAfterCaseStudy

// ─── Case Studies ─────────────────────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [

  // ── ST PAUL ──────────────────────────────────────────────────────────────
  {
    id: 'stpaul',
    slug: 'stpaul-help-center-design',
    client: 'City of St. Paul · Envoy Project',
    title: 'Zendesk Help Center Redesign',
    subtitle: 'Comprehensive redesign of the city\'s Zendesk help center, focusing on customer-facing content and enhanced user experience.',
    layout: 'hero-split',
    role: 'Lead Designer',
    timeline: '1 Month',
    technologies: ['Figma'],
    heroGradient: 'linear-gradient(135deg, #1a3a6b 0%, #2557a7 60%, #1e4d8c 100%)',
    star: {
      situation: 'The City of St. Paul had an internal, minimally designed Zendesk help center containing basic knowledge articles. With a newly revamped main site, they wanted to transition the help center to be customer-facing and visually aligned with their updated brand identity.',
      task: 'Our goal was to redesign key visual components of the Zendesk help center — specifically the landing page and the back page hero and navigation areas — to reflect the city\'s brand, improve usability, and make the platform welcoming for public users.',
      action: 'We incorporated visual elements from the city\'s main site, using cityscape photography for the hero section with a prominently placed search bar to drive self-service. Category sections were displayed using tile layouts, each with a custom hover state that changed color to align with the primary site\'s color palette. Navigation was refined to be intuitive and visually clean, supporting ease of use across devices.',
      result: 'The redesigned Zendesk help center presented a cohesive, branded experience that made support content more approachable and accessible for residents. By integrating city imagery and interaction design consistent with their main site, the new layout improved user confidence and engagement with the platform.',
    },
    screens: [
      { label: 'Landing Page — Hero + Search', frame: 'browser', hero: true },
      { label: 'Complete Flow Overview',       frame: 'browser', hero: false },
      { label: 'Mobile — Landing',             frame: 'phone',   hero: false },
    ],
    outcomes: [
      { text: 'Transformed an internal knowledge base into a fully public-facing, branded support platform ready for resident use.', metric: '✓', metricLabel: 'Launched' },
      { text: 'Cityscape photography and consistent hover interactions increased visual cohesion with the city\'s main website.' },
      { text: 'Improved self-service capability through a prominent hero search bar and intuitive category tile navigation.' },
    ],
  },

  // ── MARQUIS ──────────────────────────────────────────────────────────────
  {
    id: 'marquis',
    slug: 'marquis-help-center-design',
    client: 'Marquis · Property Management',
    title: 'Help Center Design & Community Platform',
    subtitle: 'Designed and coded a branded, user-friendly Zendesk help center to enhance client engagement and internal efficiency.',
    layout: 'hero-split',
    role: 'Lead Designer & Developer',
    timeline: '2 Months',
    technologies: ['HTML/CSS', 'JavaScript', 'Zendesk Guide', 'Figma'],
    coverImage: marquisLanding,
    heroGradient: 'linear-gradient(135deg, #1a0030 0%, #3a0060 45%, #5a0090 100%)',
    star: {
      situation: 'Our team was tasked with developing a help center to support users in accessing relevant support content. We recognized that the existing support structure lacked engagement, consistency with branding, and clear content management for internal agents.',
      task: 'Our objective was to create a help center that not only matched the visual identity of the main website but also encouraged client interaction, offered intuitive navigation, and allowed for streamlined internal content management.',
      action: 'We designed the help center as an extension of the main site, focusing on a user-friendly interface and content strategy aligned with UX best practices. Key features included easy article accessibility, a clear content hierarchy, and role-based visibility settings. This allowed support agents to publish and manage internal/external articles while maintaining overall content control.',
      result: 'The result was a cohesive, branded help center that increased client engagement through accessible articles and improved internal efficiency by enabling agents to manage content with the appropriate visibility. The platform now serves as both a public resource and a private knowledge base, enhancing support delivery for both users and internal teams.',
    },
    screens: [
      { label: 'Help Center Landing',        src: marquisLanding,         frame: 'browser', hero: true },
      { label: 'Article — 3 Column',         src: marquisArticle3col,     frame: 'browser', hero: false },
      { label: 'Community Posts',            src: marquisCommunityPosts,  frame: 'browser', hero: false },
      { label: 'Community Topics',           src: marquisCommunityTopics, frame: 'browser', hero: false },
      { label: 'Mobile View',                src: marquisMobile,          frame: 'phone',   hero: false },
      { label: 'Complete Flow Overview',     src: marquisFlow,            frame: 'none',    hero: false },
    ],
    outcomes: [
      { text: 'Cohesive branded help center that increased client engagement through accessible articles.', metric: '✓', metricLabel: 'Delivered' },
      { text: 'Role-based visibility settings enabled agents to manage public and private content independently.' },
      { text: 'Platform serves as both a public resource and a private knowledge base, enhancing support delivery.' },
    ],
  },

  // ── LIFE360 ──────────────────────────────────────────────────────────────
  {
    id: 'life360',
    slug: 'life360-help-center-design',
    client: 'Life360 · Family Safety App',
    title: 'Life360 Envoy Project',
    subtitle: 'Leading the mobile-first unification of Life360 and Tile help centers to deliver a seamless, consistent customer experience.',
    layout: 'hero-split',
    role: 'Lead Designer',
    timeline: '2 Months',
    technologies: ['Figma'],
    coverImage: life360Landing,
    heroGradient: 'linear-gradient(135deg, #1e1040 0%, #2d1a60 45%, #4a2d90 100%)',
    star: {
      situation: 'Tile had recently acquired Life360, and both brands were operating separate help centers with differing designs, tone, and user experiences. This created customer confusion, fragmented brand perception, and an overwhelming support journey — especially for users engaging with both products.',
      task: 'The goal was to merge the two help centers into a single, cohesive platform that delivered a unified brand experience. This included creating a consistent visual language, improving usability across devices (especially mobile), and guiding Life360 users through the transition into the Tile ecosystem without friction.',
      action: 'To address the fragmented support experience, I led a mobile-first redesign strategy with a strong focus on optimizing for the majority of users who accessed help resources via mobile devices. The redesigned help center was built to be fully responsive and reflect the newly unified Life360 brand, while still acknowledging and incorporating familiar elements from the Tile brand to ease the transition for existing users. A key part of this process involved restructuring the content to ensure intuitive navigation and a more streamlined information architecture. Additionally, I developed a new branded email template to bring lifecycle communications in line with the updated visual and tonal identity.',
      result: 'The result was a fully unified, mobile-optimized help center that delivered a seamless experience across devices and products. The new platform significantly reduced brand confusion, improved content accessibility for both Life360 and Tile customers, and established a stronger, more consistent brand presence across all support touchpoints.',
    },
    screens: [
      { label: 'Help Center Landing',    src: life360Landing,  frame: 'browser', hero: true },
      { label: 'Category Page',          src: life360Category, frame: 'browser', hero: false },
      { label: 'Complete Flow Overview', src: life360Flow,     frame: 'browser', hero: false },
      { label: 'Mobile Landing',         src: life360Mobile,   frame: 'phone',   hero: false },
    ],
    outcomes: [
      { text: 'Fully unified, mobile-optimized help center delivering a seamless experience across Life360 and Tile products.', metric: '2', metricLabel: 'Brands unified' },
      { text: 'Significantly reduced brand confusion and improved content accessibility for both Life360 and Tile customers.' },
      { text: 'New branded email template brought lifecycle communications in line with updated visual identity.' },
    ],
  },

  // ── MEF GALA ─────────────────────────────────────────────────────────────
  {
    id: 'mef',
    slug: 'mef-gala-design',
    client: 'MEF · Moraga Education Foundation',
    title: '2026 MEF Auction Gala — Viva Moraga',
    subtitle: 'Full event website design and development for a major fundraising gala — invitation, event details, live auction, FAQ, and on-site slide deck.',
    layout: 'hero-split',
    role: 'Lead Designer & Developer',
    timeline: '[Add Timeline]',
    technologies: ['Figma', 'Webflow'],
    coverImage: mefLanding,
    heroGradient: 'linear-gradient(135deg, #0a0505 0%, #1a0505 40%, #2a0808 100%)',
    star: {
      situation: 'The Moraga Education Foundation needed a complete digital presence for their 2026 Auction Gala — "Viva Moraga" — their largest annual fundraiser. The event required a cohesive website covering invitations, event details, live auction previews, online auction, FAQ, and sponsor recognition, all consistent with the Vegas-meets-Moraga theme.',
      task: 'Design and build a multi-page event website that captured the glamour of the evening, drove ticket sales and auction participation, and provided attendees with all the information they needed before and during the event.',
      action: 'I designed the full site around the "Viva Moraga" brand — a Las Vegas-inspired theme with a black and gold palette, custom typography, and casino imagery. Pages included the invitation with schedule of events, event details with the venue, a live auction preview page with photography and item descriptions, an FAQ with accordion interactions, and a 29-slide Canva presentation for the evening\'s program used on-site.',
      result: '[How did the event go? Ticket sales, donation amounts, attendee feedback, client satisfaction? The site supported 200+ expected guests.]',
    },
    screens: [
      { label: 'Invitation Page',       src: mefLanding,       frame: 'browser', hero: true },
      { label: 'Event Details',         src: mefDetails,       frame: 'browser', hero: false },
      { label: 'Live Auction Previews', src: mefAuction,       frame: 'browser', hero: false },
      { label: 'FAQ Page',              src: mefFaqs,          frame: 'browser', hero: false },
      { label: 'Mobile — Invitation',   src: mefMobileLanding, frame: 'phone',   hero: false },
      { label: 'On-Site Slide Deck',    src: mefSlidedeck,     frame: 'none',    hero: false },
    ],
    outcomes: [
      { text: '6-page event website supporting 200+ expected guests across invitation, auction, FAQ, and details.', metric: '6', metricLabel: 'Pages designed' },
      { text: '29-slide on-site presentation designed in Canva for the evening program.' },
      { text: '[Fundraising outcome — add the final raised amount or ticket sales figure]' },
    ],
  },

  // ── FEDLOGIC ─────────────────────────────────────────────────────────────
  {
    id: 'fedlogic',
    slug: 'fedlogic-dashboard-design',
    client: 'Internal Project · Client Reporting Dashboard',
    title: 'Reporting Dashboard Design & Development',
    subtitle: 'Designed and built a fully functional benefits reporting dashboard from scratch — two versions, print-perfect PDF export, and a tight delivery timeline.',
    layout: 'bento-grid',
    role: 'Lead Designer & Developer',
    timeline: 'Tight deadline — transition deadline driven',
    technologies: ['Figma', 'HTML/CSS', 'JavaScript', 'Custom Print CSS'],
    heroGradient: 'linear-gradient(135deg, #0d1f35 0%, #1a3050 50%, #1e3a5f 100%)',
    cells: [
      {
        label: 'Overview', heading: 'The Project', wide: true,
        body: 'Built a fully functional reporting dashboard for a federal benefits navigation platform, making all design and coding decisions independently. The platform needed to be delivered on a critical timeline to support a system transition — there was no runway for iteration once it went live.',
        tags: ['Data Dashboard', 'Benefits Navigation', 'Design & Code'],
      },
      {
        label: 'Key Constraint', heading: 'Timeline Pressure',
        body: 'The client was transitioning off an existing system. The new dashboard had to be ready and stable before that window closed — making clean, maintainable code and fast load times non-negotiable.',
        stat: '2', statLabel: 'Dashboard versions', accent: true,
      },
      {
        label: 'Version 1 → Final', heading: 'Design Evolution', body: '', screen: { label: 'Initial concept', src: fedlogicV1 }, wide: true,
      },
      {
        label: 'Design Decisions', heading: 'What I Prioritized',
        body: 'Clear information hierarchy for quick scanning. Minimal external libraries to ensure fast load and long-term maintainability. Reusable component patterns across both dashboard versions, which were similar but served different organizational contexts.',
      },
      {
        label: 'Technical Challenge', heading: 'PDF Export',
        body: 'A critical requirement was a downloadable PDF version that looked nearly identical to the browser view. This required extensive custom print CSS — media queries, page break control, and re-laying out chart components to survive the print rendering pipeline.',
        tags: ['Custom Print CSS', 'PDF Export', 'Cross-browser'],
      },
      {
        label: 'Dashboard One', heading: 'Browser View', body: '', screen: { label: 'Dashboard One — browser', src: fedlogicV2 },
      },
      {
        label: 'Color Evolution', heading: 'Client Feedback Loop', wide: true,
        body: 'My initial delivery used a single blue palette — clean, data-forward, intentional. After client review, they requested additional color differentiation across chart segments to improve at-a-glance readability. I introduced a controlled multi-color system that maintained the professional tone while meeting their usability needs.',
      },
      {
        label: 'Dashboard Two', heading: 'Multi-color Version', body: '', screen: { label: 'Dashboard Two — added color', src: fedlogicV3 },
      },
      {
        label: 'PDF Output', heading: 'Print CSS Result', body: '', screen: { label: 'Dashboard — PDF version', src: fedlogicV4 },
      },
    ],
  },

  // ── PORTFOLIO REDESIGN ────────────────────────────────────────────────────
  {
    id: 'portfolio',
    slug: 'portfolio-redesign',
    client: 'Kristin Burton · Personal Brand',
    title: 'Portfolio Redesign',
    subtitle: 'From a static Webflow site to a dynamic, animated React application — rebuilding my portfolio with custom case study layouts, brand animations, and a scalable component system.',
    layout: 'before-after',
    role: 'Designer & Developer',
    timeline: '2026',
    technologies: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    heroGradient: 'linear-gradient(135deg, #2a1f35 0%, #4a2a5a 50%, #6d4070 100%)',
    star: {
      situation: 'My previous portfolio was a static Webflow site — minimal, functional, but limited. Case studies were single pages with a circular STAR layout and screenshots below. There was no routing between case studies, no animations, and no way to showcase the variety and depth of my work in a visually compelling way.',
      task: 'Redesign and rebuild the portfolio as a React SPA with a proper routing system, animated home page, multiple case study layout templates, and a scalable component architecture that could grow with new work.',
      action: 'I used Figma Make as a design and prototyping base, then exported and rebuilt the full codebase in React + TypeScript + Tailwind. I created three distinct case study layout templates — HeroSplit for help center work, BentoGrid for dashboard work, and BeforeAfter for the portfolio itself. Animations were transplanted directly from the Figma Make export using the Motion library.',
      result: 'The new portfolio is a fully routed React SPA with 7 case studies, animated transitions, client-sampled color palettes, real project screenshots, and a draggable before/after comparison slider. It demonstrates both design and development capability in a single deliverable.',
    },
    beforeScreens: [
      { label: 'Old Home Page' },
      { label: 'Old Portfolio Index' },
      { label: 'Old Case Study Page' },
    ],
    afterScreens: [
      { label: 'New Home — Animated Hero' },
      { label: 'New Portfolio — Card Grid' },
      { label: 'New Case Study — HeroSplit' },
    ],
    outcomes: [
      { text: 'Rebuilt from static Webflow to a fully routed React SPA with TypeScript, Tailwind, and Framer Motion.', metric: '7', metricLabel: 'Case studies' },
      { text: '3 distinct case study layout templates — HeroSplit, BentoGrid, and BeforeAfter — all driven from a single data file.' },
      { text: 'Client-sampled muted color palettes replace generic gradients, making each project feel intentional and brand-accurate.' },
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug)
}
