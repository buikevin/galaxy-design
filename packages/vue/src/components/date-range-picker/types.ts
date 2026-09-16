export interface DateRangeValue {
  start?: Date
  end?: Date
}

export interface DateRangePickerProps {
  /** Selected range (v-model). */
  modelValue?: { start: Date; end: Date }
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
