import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Side = 'left' | 'right' | 'top' | 'bottom'

export function SheetPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [side, setSide] = useState<Side>('right')

  const openSheet = (newSide: Side) => {
    setSide(newSide)
    setIsOpen(true)
  }

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Sheet</h1>
        <p className="text-muted-foreground mt-2">
          Extends the Dialog component to display content that complements the main content.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add sheet</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Sides</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => openSheet('left')}>Open Left</Button>
            <Button onClick={() => openSheet('right')}>Open Right</Button>
            <Button onClick={() => openSheet('top')}>Open Top</Button>
            <Button onClick={() => openSheet('bottom')}>Open Bottom</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          <div className="border rounded-lg p-6 bg-muted/50 relative min-h-[400px]">
            {isOpen && (
              <>
                <div
                  className="absolute inset-0 bg-black/50 z-40"
                  onClick={() => setIsOpen(false)}
                />
                <div
                  className={`absolute bg-background border shadow-lg z-50 p-6 ${
                    side === 'left'
                      ? 'left-0 top-0 bottom-0 w-80 animate-in slide-in-from-left'
                      : side === 'right'
                      ? 'right-0 top-0 bottom-0 w-80 animate-in slide-in-from-right'
                      : side === 'top'
                      ? 'top-0 left-0 right-0 h-80 animate-in slide-in-from-top'
                      : 'bottom-0 left-0 right-0 h-80 animate-in slide-in-from-bottom'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Sheet Title</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Make changes to your profile here. Click save when you're done.
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                    <Button className="w-full">Save Changes</Button>
                  </div>
                </div>
              </>
            )}
            {!isOpen && (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Click a button above to open a sheet
              </div>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Navigation Menu</h3>
              <p className="text-sm text-muted-foreground">
                Use sheets for mobile navigation menus that slide in from the left or right.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Filter Panel</h3>
              <p className="text-sm text-muted-foreground">
                Display filtering options in a sheet without losing context of the main content.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Form Editing</h3>
              <p className="text-sm text-muted-foreground">
                Show detailed forms or editing interfaces in a side panel.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
