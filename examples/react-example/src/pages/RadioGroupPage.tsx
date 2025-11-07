import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function RadioGroupPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">RadioGroup</h1>
        <p className="text-muted-foreground mt-2">
          RadioGroup component examples and usage.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border p-6 bg-card">
          <h2 className="text-xl font-semibold mb-4">Basic Example</h2>
          <RadioGroup defaultValue="option-one" className="gap-3">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one" className="cursor-pointer font-normal">
                Option One
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two" className="cursor-pointer font-normal">
                Option Two
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three" className="cursor-pointer font-normal">
                Option Three
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}
