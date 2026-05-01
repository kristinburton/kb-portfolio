import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

export function WorkTogetherCTA() {
  return (
    <section className="border-t border-hairline bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,90,74,0.08),transparent_60%)] px-6 py-[120px] text-center sm:px-14">
      <h2 className="font-condensed text-[56px] font-bold leading-[1.05] tracking-[-0.015em] text-cream">
        Let's Work Together
      </h2>
      <p className="mx-auto mt-5 max-w-md text-[17px] text-cream">
        Have a project in mind? I'd love to hear about it.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button variant="pill-coral" size="pill-lg" asChild>
          <a href="mailto:kristin@kristin-burton.com">Contact me</a>
        </Button>
        <Button variant="pill-ghost" size="pill-lg" asChild>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </Button>
      </div>
    </section>
  )
}
