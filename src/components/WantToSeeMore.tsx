import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function WantToSeeMore() {
  const navigate = useNavigate()
  return (
    <section className="bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,90,74,0.08),transparent_60%)] px-4 pb-20 pt-8 text-center sm:px-6 md:px-10 md:pb-24 lg:px-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="font-condensed text-[36px] font-bold text-cream min-[390px]:text-5xl md:text-7xl">
          Want to see more?
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button variant="pill-coral" size="pill-md" onClick={() => navigate('/projects')}>
            View all work
          </Button>
          <Button asChild variant="pill-ghost" size="pill-md">
            <a href="mailto:kristin@kristin-burton.com">Contact me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
