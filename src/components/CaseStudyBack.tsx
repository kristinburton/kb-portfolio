import { Link } from 'react-router-dom'

export function CaseStudyBack() {
  return (
    <div className="px-4 pt-20 sm:px-6 md:px-10 lg:px-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-cream-subtle transition-colors hover:text-cream"
      >
        <span className="material-symbols-rounded text-[16px]" aria-hidden="true">arrow_back</span>
        Portfolio
      </Link>
    </div>
  )
}
