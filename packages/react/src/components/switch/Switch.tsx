/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Switch component - A control that allows the user to toggle between checked and not checked
 */

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

/**
 * Switch Props interface
 * @extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> - All standard switch root attributes
 */
export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  /**
   * Checked state (controlled)
   */
  checked?: boolean
  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean
  /**
   * Called when the checked state changes
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * Disables the switch
   * @default false
   */
  disabled?: boolean
  /**
   * Name for form submission
   */
  name?: string
  /**
   * Value for form submission
   */
  value?: string
  /**
   * Required attribute for form validation
   */
  required?: boolean
  /**
   * CSS class names for the switch
   */
  className?: string
}

/**
 * Switch Component
 * 
 * A control that allows the user to toggle between checked and not checked state.
 * Built on top of Radix UI Switch primitive.
 * 
 * @param {SwitchProps} props - Switch component props
 * @param {string} [props.className] - CSS class names for the switch
 * @param {boolean} [props.checked] - Checked state (controlled)
 * @param {boolean} [props.defaultChecked] - Default checked state (uncontrolled)
 * @param {(checked: boolean) => void} [props.onCheckedChange] - Checked state change handler
 * @param {boolean} [props.disabled=false] - Disables the switch
 * @param {string} [props.name] - Name for form submission
 * @param {string} [props.value] - Value for form submission
 * @param {boolean} [props.required] - Required attribute for form validation
 * @param {React.RefObject<React.ElementRef<typeof SwitchPrimitives.Root>>} ref - Reference to the switch element
 * @returns {JSX.Element} Switch element
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
