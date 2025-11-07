import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'


export function PopoverPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Popover</h1>
        <p className="text-muted-foreground mt-2">
          Popover component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Popover><PopoverTrigger><Button>Open popover</Button></PopoverTrigger><PopoverContent>Place content for the popover here.</PopoverContent></Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
