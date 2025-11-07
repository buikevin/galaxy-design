import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'


export function HoverCardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">HoverCard</h1>
        <p className="text-muted-foreground mt-2">
          HoverCard component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <HoverCard><HoverCardTrigger><Button>Hover me</Button></HoverCardTrigger><HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent></HoverCard>
          </div>
        </div>
      </div>
    </div>
  )
}
