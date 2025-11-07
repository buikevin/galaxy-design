import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'


export function LabelPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Label</h1>
        <p className="text-muted-foreground mt-2">
          Label component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" placeholder="Email" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
