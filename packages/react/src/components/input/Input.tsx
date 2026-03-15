/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Input component - Displays a form input field or a component that looks like an input field
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Input Props interface
 * @extends React.InputHTMLAttributes<HTMLInputElement> - All standard input HTML attributes
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input type
   * @default 'text'
   */
  type?: string
  /**
   * Controlled value
   */
  value?: string | number
  /**
   * Uncontrolled initial value
   */
  defaultValue?: string | number
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * Disables the input
   * @default false
   */
  disabled?: boolean
  /**
   * Makes the input read-only
   */
  readOnly?: boolean
  /**
   * Maximum input length
   */
  maxLength?: number
  /**
   * Autocomplete hint
   */
  autoComplete?: string
  /**
   * Aria invalid state
   */
  ariaInvalid?: boolean | 'true' | 'false'
}

/**
 * Input Component
 * 
 * Displays a form input field with customizable styling.
 * Supports all standard HTML input attributes.
 * 
 * @param {InputProps} props - Input component props
 * @param {string} [props.className] - CSS class names for the input
 * @param {string} [props.type='text'] - Input type (text, password, email, number, etc.)
 * @param {string|number} [props.value] - Controlled value
 * @param {string|number} [props.defaultValue] - Uncontrolled initial value
 * @param {string} [props.placeholder] - Placeholder text
 * @param {boolean} [props.disabled=false] - Disables the input
 * @param {boolean} [props.readOnly] - Makes the input read-only
 * @param {number} [props.maxLength] - Maximum input length
 * @param {string} [props.autoComplete] - Autocomplete hint
 * @param {React.RefObject<HTMLInputElement>} ref - Reference to the input element
 * @returns {JSX.Element} Input element
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
