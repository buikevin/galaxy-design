/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Button component - Displays a button or a component that looks like a button
 */

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type ButtonVariants, buttonVariants } from './variants'
import { cn } from '@/lib/utils'

/**
 * Button Props interface
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement> - All standard button HTML attributes
 * @extends ButtonVariants - Variant and size configuration
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  /**
   * Render as child using Radix Slot
   * @default false
   */
  asChild?: boolean
}

/**
 * Button Component
 * 
 * Displays a button with customizable variants and sizes.
 * Supports rendering as a different element using the `asChild` prop.
 * 
 * @param {ButtonProps} props - Button component props
 * @param {string} [props.className] - CSS class names for the button
 * @param {ButtonVariants['variant']} [props.variant='default'] - Visual style variant (default, destructive, outline, secondary, ghost, link)
 * @param {ButtonVariants['size']} [props.size='default'] - Size variant (default, sm, lg, icon)
 * @param {boolean} [props.asChild=false] - Render as child using Radix Slot
 * @param {HTMLButtonElement['type']} [props.type='button'] - Native button type (button, submit, reset)
 * @param {boolean} [props.disabled=false] - Disables the button
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Click handler
 * @param {React.ReactNode} [props.children] - Button content
 * @param {React.RefObject<HTMLButtonElement>} ref - Reference to the button element
 * @returns {JSX.Element} Button element
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
