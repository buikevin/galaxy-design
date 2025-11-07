import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'
import { Button } from '@/components/ui/button'


export function ContextMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">ContextMenu</h1>
        <p className="text-muted-foreground mt-2">
          ContextMenu component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <ContextMenu><ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">Right click here</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Back</ContextMenuItem><ContextMenuItem>Forward</ContextMenuItem><ContextMenuItem>Reload</ContextMenuItem></ContextMenuContent></ContextMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
