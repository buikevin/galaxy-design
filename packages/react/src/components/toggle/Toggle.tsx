/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Toggle component - A button that can be toggled on or off
 */

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Toggle variants configuration
 * Defines the visual style variants for the Toggle component
 */
const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

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

export { Toggle, toggleVariants }
