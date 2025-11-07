import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'


export function CollapsiblePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Collapsible</h1>
        <p className="text-muted-foreground mt-2">
          Collapsible component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Collapsible><CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger><CollapsibleContent>Yes. Free to use for personal and commercial projects.</CollapsibleContent></Collapsible>
          </div>
        </div>
      </div>
    </div>
  )
}
