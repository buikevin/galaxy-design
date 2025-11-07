import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'


export function SliderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Slider</h1>
        <p className="text-muted-foreground mt-2">
          Slider component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
