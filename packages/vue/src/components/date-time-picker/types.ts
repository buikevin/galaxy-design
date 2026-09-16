export interface DateTimePickerProps {
  /** Selected date-time (v-model). */
  modelValue?: Date
  /** Date picker placeholder. */
  datePlaceholder?: string
  /** Time picker placeholder. */
  timePlaceholder?: string
  /** Time format. */
  timeFormat?: '12h' | '24h'
  /** date-fns date format string. */
  dateFormat?: string
  /** CSS class names. */
  class?: string
  /** Disables both pickers. */
  disabled?: boolean
}
