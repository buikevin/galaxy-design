/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Checkbox component - A control that allows the user to toggle between checked and not checked
 */

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Checkbox Props interface
 * @extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> - All standard checkbox root attributes
 */
export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  /**
   * Checked state (controlled)
   */
  checked?: boolean | 'indeterminate'
  /**
   * Uncontrolled initial checked state
   */
  defaultChecked?: boolean | 'indeterminate'
  /**
   * Called when the checked state changes
   */
  onCheckedChange?: (checked: boolean | 'indeterminate') => void
  /**
   * Disables the checkbox
   * @default false
   */
  disabled?: boolean
  /**
   * Requires a value before form submission
   */
  required?: boolean
  /**
   * Name for form submission
   */
  name?: string
  /**
   * Value for form submission
   * @default 'on'
   */
  value?: string
  /**
   * CSS class names for the checkbox
   */
  className?: string
}

/**
 * Checkbox Component
 * 
 * A control that allows the user to toggle between checked and not checked state.
 * Built on top of Radix UI Checkbox primitive.
 * 
 * @param {CheckboxProps} props - Checkbox component props
 * @param {string} [props.className] - CSS class names for the checkbox
 * @param {boolean|'indeterminate'} [props.checked] - Checked state (controlled)
 * @param {boolean|'indeterminate'} [props.defaultChecked] - Uncontrolled initial checked state
 * @param {(checked: boolean | 'indeterminate') => void} [props.onCheckedChange] - Checked state change handler
 * @param {boolean} [props.disabled=false] - Disables the checkbox
 * @param {boolean} [props.required] - Requires a value before form submission
 * @param {string} [props.name] - Name for form submission
 * @param {string} [props.value='on'] - Value for form submission
 * @param {React.RefObject<React.ElementRef<typeof CheckboxPrimitive.Root>>} ref - Reference to the checkbox element
 * @returns {JSX.Element} Checkbox element
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
