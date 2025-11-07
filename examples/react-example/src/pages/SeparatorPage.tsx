import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'


export function SeparatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Separator</h1>
        <p className="text-muted-foreground mt-2">
          Separator component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <div><div className="space-y-1"><h4 className="text-sm font-medium">Radix Primitives</h4><p className="text-sm text-muted-foreground">An open-source UI component library.</p></div><Separator className="my-4" /><div className="flex h-5 items-center space-x-4 text-sm"><div>Blog</div><Separator orientation="vertical" /><div>Docs</div><Separator orientation="vertical" /><div>Source</div></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
