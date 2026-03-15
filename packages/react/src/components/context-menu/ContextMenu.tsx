/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Context Menu components - A menu that appears on right-click or keyboard trigger
 */

import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { cn } from '@/lib/utils'

/**
 * ContextMenu Component
 * 
 * Root component for the context menu. Manages the menu state.
 * Built on top of Radix UI ContextMenu primitive.
 */
const ContextMenu = ContextMenuPrimitive.Root

/**
 * ContextMenuTrigger Component
 * 
 * The trigger element that opens the context menu on right-click or keyboard action.
 */
const ContextMenuTrigger = ContextMenuPrimitive.Trigger

/**
 * ContextMenuGroup Component
 * 
 * A group of context menu items. Provides semantic grouping.
 */
const ContextMenuGroup = ContextMenuPrimitive.Group

/**
 * ContextMenuPortal Component
 * 
 * Renders context menu content in a portal for proper layering.
 */
const ContextMenuPortal = ContextMenuPrimitive.Portal

/**
 * ContextMenuSub Component
 * 
 * A submenu within the context menu.
 */
const ContextMenuSub = ContextMenuPrimitive.Sub

/**
 * ContextMenuRadioGroup Component
 * 
 * A group of radio menu items within the context menu.
 */
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

/**
 * ContextMenuContent Component
 * 
 * The main content area of the context menu.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>} props - ContextMenuContent props
 * @param {string} [props.className] - CSS class names for the content
 * @param {number} [props.sideOffset] - Offset from the trigger side
 * @param {number} [props.alignOffset] - Offset from the align start
 * @param {React.ReactNode} [props.children] - Menu content
 * @param {React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Context menu content element
 */
const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

/**
 * ContextMenuItem Component
 * 
 * An individual item within the context menu.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & { inset?: boolean }} props - ContextMenuItem props
 * @param {string} [props.className] - CSS class names for the item
 * @param {boolean} [props.inset] - Adds left padding for icon alignment
 * @param {boolean} [props.disabled] - Disables the item
 * @param {string} [props.value] - Item value for radio groups
 * @param {React.ReactNode} [props.children] - Item content
 * @param {React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.Item>>} ref - Reference to the item element
 * @returns {JSX.Element} Context menu item element
 */
const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

/**
 * ContextMenuSeparator Component
 * 
 * A visual separator between context menu items.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>} props - ContextMenuSeparator props
 * @param {string} [props.className] - CSS class names for the separator
 * @param {React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.Separator>>} ref - Reference to the separator element
 * @returns {JSX.Element} Context menu separator element
 */
const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuRadioGroup,
}
