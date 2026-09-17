import type { DateValue } from '@internationalized/date'

export interface DatePickerProps {
  /** Selected date (v-model). Radix `DateValue` (e.g. `CalendarDate`). */
  modelValue?: DateValue
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
