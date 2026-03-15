/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Textarea component - A multi-line text input field
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Textarea Props interface
 * @extends React.TextareaHTMLAttributes<HTMLTextAreaElement> - All standard textarea HTML attributes
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Controlled textarea value
   */
  value?: string | number
  /**
   * Uncontrolled initial textarea value
   */
  defaultValue?: string | number
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * Disables the textarea
   * @default false
   */
  disabled?: boolean
  /**
   * Visible number of text rows
   */
  rows?: number
  /**
   * Field name for form submission
   */
  name?: string
  /**
   * Marks the textarea as required
   * @default false
   */
  required?: boolean
  /**
   * Makes the textarea read-only
   * @default false
   */
  readOnly?: boolean
  /**
   * Maximum number of characters allowed
   */
  maxLength?: number
  /**
   * Minimum number of characters allowed
   */
  minLength?: number
  /**
   * Called when the textarea value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  /**
   * CSS class names for the textarea
   */
  className?: string
}

/**
 * Textarea Component
 * 
 * A multi-line text input field for entering longer text content.
 * Supports all standard HTML textarea attributes.
 * 
 * @param {TextareaProps} props - Textarea component props
 * @param {string} [props.className] - CSS class names for the textarea
 * @param {string|number} [props.value] - Current value (controlled)
 * @param {string|number} [props.defaultValue] - Default value (uncontrolled)
 * @param {string} [props.placeholder] - Placeholder text
 * @param {boolean} [props.disabled=false] - Disables the textarea
 * @param {number} [props.rows] - Number of visible text lines
 * @param {string} [props.name] - Field name for form submission
 * @param {boolean} [props.required=false] - Marks the textarea as required
 * @param {boolean} [props.readOnly=false] - Makes the textarea read-only
 * @param {number} [props.maxLength] - Maximum number of characters allowed
 * @param {number} [props.minLength] - Minimum number of characters allowed
 * @param {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} [props.onChange] - Value change handler
 * @param {React.RefObject<HTMLTextAreaElement>} ref - Reference to the textarea element
 * @returns {JSX.Element} Textarea element
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
