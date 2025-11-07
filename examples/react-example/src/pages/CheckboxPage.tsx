import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'


export function CheckboxPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Checkbox</h1>
        <p className="text-muted-foreground mt-2">
          Checkbox component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2"><Checkbox id="terms" /><label htmlFor="terms">Accept terms</label></div>
          </div>
        </div>
      </div>
    </div>
  )
}
