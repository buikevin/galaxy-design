/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Hover Card components - A card that appears when hovering over a trigger
 */

import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { cn } from '@/lib/utils'

/**
 * HoverCard Component
 * 
 * Root component for the hover card. Manages the open/close state.
 * Built on top of Radix UI Hover Card primitive.
 */
const HoverCard = HoverCardPrimitive.Root

/**
 * HoverCardTrigger Component
 * 
 * The trigger element that opens the hover card when hovered.
 * Can be any element (button, link, text, etc.).
 */
const HoverCardTrigger = HoverCardPrimitive.Trigger

/**
 * HoverCardContent Component
 * 
 * The main content area of the hover card.
 * Renders positioned relative to the trigger when hovered.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>} props - HoverCardContent props
 * @param {string} [props.className] - CSS class names for the content
 * @param {string} [props.align='center'] - Alignment of the content relative to trigger
 * @param {number} [props.sideOffset=4] - Offset from the trigger edge
 * @param {boolean} [props.forceMount] - Force mount the content
 * @param {React.RefObject<React.ElementRef<typeof HoverCardPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Hover card content element
 */
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
