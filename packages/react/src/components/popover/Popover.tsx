/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Popover components - Displays rich content in a portal, triggered by a button
 */

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '@/lib/utils'

/**
 * Popover Component
 * 
 * Root component for the popover. Manages the open/close state.
 * Built on top of Radix UI Popover primitive.
 */
const Popover = PopoverPrimitive.Root

/**
 * PopoverTrigger Component
 * 
 * The trigger element that opens the popover.
 * Can be any element (button, link, etc.).
 */
const PopoverTrigger = PopoverPrimitive.Trigger

/**
 * PopoverContent Component
 * 
 * The main content area of the popover.
 * Renders in a portal for proper z-index layering.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>} props - PopoverContent props
 * @param {string} [props.className] - CSS class names for the content
 * @param {'start' | 'center' | 'end'} [props.align='center'] - Alignment along the trigger
 * @param {number} [props.sideOffset=4] - Offset from the trigger edge
 * @param {boolean} [props.forceMount] - Force mount the content
 * @param {string} [props.side] - Side of the trigger to appear on (top, right, bottom, left)
 * @param {React.RefObject<React.ElementRef<typeof PopoverPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Popover content element
 */
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn('z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none', className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
