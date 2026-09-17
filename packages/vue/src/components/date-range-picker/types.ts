import type { DateValue, DateRange } from '@internationalized/date'

export interface DateRangeValue {
  start?: DateValue
  end?: DateValue
}

export interface DateRangePickerProps {
  /** Selected range (v-model). Radix `DateRange` — `{ start, end }` of `DateValue`. */
  modelValue?: DateRange
  /** Placeholder text. */
  placeholder?: string
  /** date-fns format string. */
  dateFormat?: string
  /** Popover alignment. */
  align?: 'start' | 'center' | 'end'
  /** CSS class names. */
  class?: string
  /** Disables the picker. */
  disabled?: boolean
}
