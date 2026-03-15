/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Dropdown Menu components - A menu that appears when a user activates a trigger
 */

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'

/**
 * Dropdown Menu Component
 * 
 * Root component for the dropdown menu. Manages the open/close state.
 * Built on top of Radix UI Dropdown Menu primitive.
 */
const DropdownMenu = DropdownMenuPrimitive.Root

/**
 * DropdownMenuTrigger Component
 * 
 * The trigger element that opens the dropdown menu.
 * Can be any element (button, link, etc.).
 */
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

/**
 * DropdownMenuGroup Component
 * 
 * A group of menu items within the dropdown menu.
 * Provides semantic grouping for screen readers.
 */
const DropdownMenuGroup = DropdownMenuPrimitive.Group

/**
 * DropdownMenuPortal Component
 * 
 * Renders menu content in a portal for proper z-index layering.
 */
const DropdownMenuPortal = DropdownMenuPrimitive.Portal

/**
 * DropdownMenuSub Component
 * 
 * A submenu within the dropdown menu.
 * Allows for nested menu structures.
 */
const DropdownMenuSub = DropdownMenuPrimitive.Sub

/**
 * DropdownMenuRadioGroup Component
 * 
 * A group of radio menu items within the dropdown menu.
 * Only one radio item can be selected at a time.
 */
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/**
 * DropdownMenuContent Component
 * 
 * The main content area of the dropdown menu.
 * Renders positioned relative to the trigger.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>} props - DropdownMenuContent props
 * @param {string} [props.className] - CSS class names for the content
 * @param {number} [props.sideOffset=4] - Offset from the trigger edge
 * @param {boolean} [props.forceMount] - Force mount the content
 * @param {React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Dropdown menu content element
 */
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

/**
 * DropdownMenuItem Component
 * 
 * An individual selectable item within the dropdown menu.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }} props - DropdownMenuItem props
 * @param {string} [props.className] - CSS class names for the item
 * @param {boolean} [props.inset] - Adds left padding for nested items
 * @param {boolean} [props.disabled] - Disables the item
 * @param {React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Item>>} ref - Reference to the item element
 * @returns {JSX.Element} Dropdown menu item element
 */
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/**
 * DropdownMenuSeparator Component
 * 
 * A visual divider between menu item groups.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>} props - DropdownMenuSeparator props
 * @param {string} [props.className] - CSS class names for the separator
 * @param {React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Separator>>} ref - Reference to the separator element
 * @returns {JSX.Element} Dropdown menu separator element
 */
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/**
 * DropdownMenuLabel Component
 * 
 * A non-interactive label for a group of menu items.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }} props - DropdownMenuLabel props
 * @param {string} [props.className] - CSS class names for the label
 * @param {boolean} [props.inset] - Adds left padding for nested labels
 * @param {React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Label>>} ref - Reference to the label element
 * @returns {JSX.Element} Dropdown menu label element
 */
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
}
