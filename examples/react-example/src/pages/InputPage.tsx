import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


export function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Input</h1>
        <p className="text-muted-foreground mt-2">
          Input component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Input placeholder="Type something..." />
          </div>
        </div>
      </div>
    </div>
  )
}
