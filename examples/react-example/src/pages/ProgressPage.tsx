import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'


export function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Progress</h1>
        <p className="text-muted-foreground mt-2">
          Progress component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Progress value={33} className="w-[60%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
