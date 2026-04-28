import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Navbar } from '@/components/Navbar'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { PortfolioIndex } from '@/pages/projectsIndex'
import { MarquisCaseStudy } from '@/pages/MarquisCaseStudy'
// import { StPaulCaseStudy } from '@/pages/StPaulCaseStudy'
import { Life360CaseStudy } from '@/pages/Life360CaseStudy'
import { MEFCaseStudy } from '@/pages/MEFCaseStudy'
import { PortfolioCaseStudy } from '@/pages/projectsCaseStudy'
import { FedlogicCaseStudy } from '@/pages/FedlogicCaseStudy'
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
        {/* <Route path="/projects/stpaul-help-center-design"   element={<StPaulCaseStudy />} /> */}
        <Route path="/projects/life360-help-center-design"  element={<Life360CaseStudy />} />
        <Route path="/projects/mef-gala-design"             element={<MEFCaseStudy />} />

        <Route path="/projects/projects-redesign"          element={<PortfolioCaseStudy />} />
        <Route path="/projects/fedlogic-dashboard-design"   element={<FedlogicCaseStudy />} />

        <Route path="*" element={<WithNav><Home /></WithNav>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </MotionConfig>
  )
}
