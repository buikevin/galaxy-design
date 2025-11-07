import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'


export function TextareaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Textarea</h1>
        <p className="text-muted-foreground mt-2">
          Textarea component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Textarea placeholder="Type your message here." />
          </div>
        </div>
      </div>
    </div>
  )
}
