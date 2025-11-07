import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'


export function TooltipPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tooltip</h1>
        <p className="text-muted-foreground mt-2">
          Tooltip component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <TooltipProvider><Tooltip><TooltipTrigger><Button>Hover me</Button></TooltipTrigger><TooltipContent><p>Tooltip content</p></TooltipContent></Tooltip></TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
