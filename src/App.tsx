import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Navbar } from '@/components/Navbar'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { PortfolioIndex } from '@/pages/ProjectsIndex'
import { MarquisCaseStudy } from '@/pages/MarquisCaseStudy'
import { AdoptapetCaseStudy } from '@/pages/AdoptapetCaseStudy'
import { Life360CaseStudy } from '@/pages/Life360CaseStudy'
import { MEFCaseStudy } from '@/pages/MEFCaseStudy'
import { PortfolioCaseStudy } from '@/pages/ProjectsCaseStudy'
import { DashboardCaseStudy } from '@/pages/DashboardCaseStudy'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

function WithNav({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"          element={<WithNav><Home /></WithNav>} />
        <Route path="/projects" element={<WithNav><PortfolioIndex /></WithNav>} />
        <Route path="/about" element={<About />} />

        {/* Lovable-layout case studies — must be BEFORE the generic :slug route */}
        <Route path="/projects/marquis-help-center-design"  element={<MarquisCaseStudy />} />
        <Route path="/projects/adoptapet-help-center-design"   element={<AdoptapetCaseStudy />} />
        <Route path="/projects/life360-help-center-design"  element={<Life360CaseStudy />} />
        <Route path="/projects/mef-gala-design"             element={<MEFCaseStudy />} />
        <Route path="/projects/portfolio-redesign"          element={<PortfolioCaseStudy />} />
        <Route path="/projects/dashboard-design"   element={<DashboardCaseStudy />} />

        <Route path="*" element={<WithNav><Home /></WithNav>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </MotionConfig>
  )
}
