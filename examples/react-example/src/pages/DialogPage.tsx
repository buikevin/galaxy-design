import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'


export function DialogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dialog</h1>
        <p className="text-muted-foreground mt-2">
          Dialog component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Dialog><DialogTrigger><Button>Open Dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Are you absolutely sure?</DialogTitle><DialogDescription>This action cannot be undone.</DialogDescription></DialogHeader></DialogContent></Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}
