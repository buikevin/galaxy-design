import { useState } from 'react'
import { format } from 'date-fns'
import type { DateRange } from 'react-day-picker'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { DatePicker } from '@/components/ui/date-picker'
import { DateRangePicker } from '@/components/ui/date-range-picker'

export function FormsPage() {
  const [inputValue, setInputValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [radioValue, setRadioValue] = useState('option1')
  const [switchValue, setSwitchValue] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])
  const [date, setDate] = useState<Date>()
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [timeValue, setTimeValue] = useState('')
  const [dateTimeValue, setDateTimeValue] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Form Components</h1>
        <p className="text-gray-500 mt-2">Interactive form components from Galaxy UI</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Button Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>Different button variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Input Fields */}
        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
            <CardDescription>Text input examples</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text-input">Text Input</Label>
              <Input
                id="text-input"
                type="text"
                placeholder="Enter text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-input">Email Input</Label>
              <Input
                id="email-input"
                type="email"
                placeholder="Enter email..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-input">Password Input</Label>
              <Input
                id="password-input"
                type="password"
                placeholder="Enter password..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled Input</Label>
              <Input
                id="disabled-input"
                type="text"
                placeholder="Disabled..."
                disabled
              />
            </div>
          </CardContent>
        </Card>

        {/* Textarea */}
        <Card>
          <CardHeader>
            <CardTitle>Textarea</CardTitle>
            <CardDescription>Multi-line text input</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="textarea-default">Default Textarea</Label>
              <Textarea
                id="textarea-default"
                placeholder="Enter your message here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                rows={4}
              />
              <p className="text-sm text-gray-500">
                Character count: {textareaValue.length}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="textarea-disabled">Disabled Textarea</Label>
              <Textarea
                id="textarea-disabled"
                placeholder="This is disabled..."
                disabled
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Select */}
        <Card>
          <CardHeader>
            <CardTitle>Select</CardTitle>
            <CardDescription>Dropdown select component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="select-default">Select Option</Label>
              <Select value={selectValue} onValueChange={setSelectValue}>
                <SelectTrigger id="select-default">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                  <SelectItem value="option4">Option 4</SelectItem>
                </SelectContent>
              </Select>
              {selectValue && (
                <p className="text-sm text-gray-500">
                  Selected: {selectValue}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="select-fruits">Select Fruit</Label>
              <Select>
                <SelectTrigger id="select-fruits">
                  <SelectValue placeholder="Choose a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                  <SelectItem value="mango">Mango</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Checkbox */}
        <Card>
          <CardHeader>
            <CardTitle>Checkbox</CardTitle>
            <CardDescription>Checkbox examples</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-1"
                checked={checked}
                onCheckedChange={(value) => setChecked(value as boolean)}
              />
              <Label htmlFor="checkbox-1">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox-2" />
              <Label htmlFor="checkbox-2">Subscribe to newsletter</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox-3" defaultChecked />
              <Label htmlFor="checkbox-3">Remember me</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkbox-4" disabled />
              <Label htmlFor="checkbox-4" className="text-gray-400">Disabled checkbox</Label>
            </div>
          </CardContent>
        </Card>

        {/* Radio Group */}
        <Card>
          <CardHeader>
            <CardTitle>Radio Group</CardTitle>
            <CardDescription>Radio button selection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Choose your plan</Label>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="radio-1" />
                  <Label htmlFor="radio-1">Free Plan - $0/month</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="radio-2" />
                  <Label htmlFor="radio-2">Pro Plan - $9/month</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="radio-3" />
                  <Label htmlFor="radio-3">Enterprise Plan - $29/month</Label>
                </div>
              </RadioGroup>
              <p className="text-sm text-gray-500">
                Selected: {radioValue}
              </p>
            </div>
            <div className="space-y-2">
              <Label>Notification preferences</Label>
              <RadioGroup defaultValue="email">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="notify-email" />
                  <Label htmlFor="notify-email">Email notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sms" id="notify-sms" />
                  <Label htmlFor="notify-sms">SMS notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="push" id="notify-push" />
                  <Label htmlFor="notify-push">Push notifications</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Switch */}
        <Card>
          <CardHeader>
            <CardTitle>Switch</CardTitle>
            <CardDescription>Toggle switch component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="switch-1">Enable notifications</Label>
                <p className="text-sm text-gray-500">Receive notifications about updates</p>
              </div>
              <Switch
                id="switch-1"
                checked={switchValue}
                onCheckedChange={setSwitchValue}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="switch-2">Marketing emails</Label>
                <p className="text-sm text-gray-500">Receive emails about new features</p>
              </div>
              <Switch id="switch-2" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="switch-3">Security updates</Label>
                <p className="text-sm text-gray-500">Critical security notifications</p>
              </div>
              <Switch id="switch-3" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="switch-4" className="text-gray-400">Beta features</Label>
                <p className="text-sm text-gray-400">Access experimental features</p>
              </div>
              <Switch id="switch-4" disabled />
            </div>
          </CardContent>
        </Card>

        {/* Slider */}
        <Card>
          <CardHeader>
            <CardTitle>Slider</CardTitle>
            <CardDescription>Range slider component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="slider-1">Volume</Label>
                <span className="text-sm text-gray-500">{sliderValue[0]}%</span>
              </div>
              <Slider
                id="slider-1"
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="slider-2">Brightness</Label>
                <span className="text-sm text-gray-500">75%</span>
              </div>
              <Slider
                id="slider-2"
                defaultValue={[75]}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="slider-3">Price range</Label>
                <span className="text-sm text-gray-500">$0 - $1000</span>
              </div>
              <Slider
                id="slider-3"
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="slider-4" className="text-gray-400">Disabled</Label>
                <span className="text-sm text-gray-400">50%</span>
              </div>
              <Slider
                id="slider-4"
                defaultValue={[50]}
                max={100}
                step={1}
                className="w-full"
                disabled
              />
            </div>
          </CardContent>
        </Card>

        {/* Date & Time */}
        <Card>
          <CardHeader>
            <CardTitle>Date & Time</CardTitle>
            <CardDescription>Date picker with calendar component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Date Picker</Label>
              <DatePicker
                date={date}
                onDateChange={setDate}
                placeholder="Pick a date"
              />
              {date && (
                <p className="text-sm text-gray-500">
                  Selected: {format(date, "PPP")}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Date Range Picker</Label>
              <DateRangePicker
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
                placeholder="Pick a date range"
                numberOfMonths={2}
              />
              {dateRange?.from && (
                <p className="text-sm text-gray-500">
                  {dateRange.to
                    ? `Selected: ${format(dateRange.from, "PPP")} - ${format(dateRange.to, "PPP")}`
                    : `Selected: ${format(dateRange.from, "PPP")}`}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="time-input">Time Picker (Native)</Label>
              <Input
                id="time-input"
                type="time"
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value)}
              />
              {timeValue && (
                <p className="text-sm text-gray-500">
                  Selected: {timeValue}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="datetime-input">Date & Time (Native)</Label>
              <Input
                id="datetime-input"
                type="datetime-local"
                value={dateTimeValue}
                onChange={(e) => setDateTimeValue(e.target.value)}
              />
              {dateTimeValue && (
                <p className="text-sm text-gray-500">
                  Selected: {new Date(dateTimeValue).toLocaleString()}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Complete Form Example */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
            <CardDescription>Full form with all components</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="form-name">Full Name *</Label>
                  <Input id="form-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="form-email">Email *</Label>
                  <Input id="form-email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-country">Country</Label>
                <Select>
                  <SelectTrigger id="form-country">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="vn">Vietnam</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-message">Message</Label>
                <Textarea
                  id="form-message"
                  placeholder="Tell us what you think..."
                  rows={4}
                />
              </div>

              <div className="space-y-3">
                <Label>Account Type</Label>
                <RadioGroup defaultValue="personal">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personal" id="form-personal" />
                    <Label htmlFor="form-personal">Personal Account</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="form-business" />
                    <Label htmlFor="form-business">Business Account</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="form-terms" />
                  <Label htmlFor="form-terms">I agree to the terms and conditions *</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="form-newsletter" />
                  <Label htmlFor="form-newsletter">Subscribe to newsletter</Label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="form-notifications">Email notifications</Label>
                  <p className="text-sm text-gray-500">Receive email updates</p>
                </div>
                <Switch id="form-notifications" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-priority">Priority Level</Label>
                <Slider
                  id="form-priority"
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">Submit Form</Button>
                <Button type="button" variant="outline">Reset</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
