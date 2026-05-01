import { Button } from '@/components/ui/button'

type MidCTAProps = {
  title: string
  dek: string
  buttonLabel: string
  href: string
}

export function MidCTA({ title, dek, buttonLabel, href }: MidCTAProps) {
  return (
    <div className="flex flex-col gap-5 rounded-md border border-teal bg-[rgba(90,138,138,0.06)] px-12 py-9 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-condensed text-[22px] font-bold leading-tight tracking-[-0.015em] text-cream">{title}</p>
        <p className="mt-2 text-[15px] ">{dek}</p>
      </div>
      <Button variant="pill-teal" size="pill-md" asChild className="shrink-0">
        <a href={href}>{buttonLabel}</a>
      </Button>
    </div>
  )
}
