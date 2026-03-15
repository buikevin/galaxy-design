/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Tooltip components - A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it
 */

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'

/**
 * TooltipProvider Component
 * 
 * Root provider component for tooltips. Wraps the application or section that uses tooltips.
 * Manages tooltip context and delays.
 */
const TooltipProvider = TooltipPrimitive.Provider

/**
 * Tooltip Component
 * 
 * Root component for a tooltip. Manages the open/close state.
 */
const Tooltip = TooltipPrimitive.Root

/**
 * TooltipTrigger Component
 * 
 * The trigger element that the tooltip is associated with.
 * Tooltip appears when this element is hovered or focused.
 */
const TooltipTrigger = TooltipPrimitive.Trigger

/**
 * TooltipContent Component
 * 
 * The actual tooltip content that appears on hover/focus.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>} props - TooltipContent props
 * @param {string} [props.className] - CSS class names for the tooltip content
 * @param {number} [props.sideOffset=4] - Offset from the trigger element
 * @param {'top' | 'right' | 'bottom' | 'left'} [props.side] - Side of the trigger to appear on
 * @param {'start' | 'center' | 'end'} [props.align] - Alignment along the side
 * @param {number} [props.alignOffset] - Offset from the alignment position
 * @param {boolean} [props.hideWhenDetached] - Hide when detached from trigger
 * @param {React.RefObject<React.ElementRef<typeof TooltipPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Tooltip content element
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn('z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md', className)}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
