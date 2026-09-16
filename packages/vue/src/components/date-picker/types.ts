export interface DatePickerProps {
  /** Selected date (v-model). */
  modelValue?: Date
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
