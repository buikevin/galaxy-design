/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Toggle component - A button that can be toggled on or off
 */

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { toggleVariants } from './variants'

/**
 * Toggle Component
 * 
 * A button that can be toggled on or off. Built on top of Radix UI Toggle primitive.
 * Commonly used for formatting buttons, filters, or selection controls.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>} props - Toggle props
 * @param {string} [props.className] - CSS class names for the toggle
 * @param {'default' | 'outline'} [props.variant] - Visual style variant
 * @param {'default' | 'sm' | 'lg'} [props.size] - Size variant
 * @param {boolean} [props.disabled] - Disables the toggle
 * @param {boolean} [props.pressed] - Pressed state (controlled)
 * @param {(pressed: boolean) => void} [props.onPressedChange] - Pressed state change handler
 * @param {string} [props.name] - Name for form submission
 * @param {string} [props.value] - Value for form submission
 * @param {React.RefObject<React.ElementRef<typeof TogglePrimitive.Root>>} ref - Reference to the toggle element
 * @returns {JSX.Element} Toggle button element
 */
const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle }
