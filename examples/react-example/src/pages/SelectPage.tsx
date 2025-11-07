import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'


export function SelectPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Select</h1>
        <p className="text-muted-foreground mt-2">
          Select component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Select><SelectTrigger className="w-[180px]"><SelectValue placeholder="Select a fruit" /></SelectTrigger><SelectContent><SelectItem value="apple">Apple</SelectItem><SelectItem value="banana">Banana</SelectItem><SelectItem value="orange">Orange</SelectItem></SelectContent></Select>
          </div>
        </div>
      </div>
    </div>
  )
}
