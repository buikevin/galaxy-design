export interface ComboboxOption {
  value: string
  label: string
}

export interface ComboboxProps {
  /** Available options */
  options: ComboboxOption[]
  /** Selected value (v-model) */
  modelValue?: string
  /** Trigger placeholder */
  placeholder?: string
  /** Search input placeholder */
  searchPlaceholder?: string
  /** Empty state text */
  emptyText?: string
  /** CSS class names */
  class?: string
  /** Disables the combobox */
  disabled?: boolean
}
