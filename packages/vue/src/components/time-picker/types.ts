export interface TimePickerProps {
  /** Selected time string: "HH:mm" (24h) or "hh:mm AM/PM" (12h) (v-model). */
  modelValue?: string
  /** Placeholder text. */
  placeholder?: string
  /** Time format. */
  format?: '12h' | '24h'
  /** Popover alignment. */
  align?: 'start' | 'center' | 'end'
  /** CSS class names. */
  class?: string
  /** Disables the picker. */
  disabled?: boolean
}
