/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Menu Bar components - A navigation bar with dropdown menus
 */

import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { cn } from '@/lib/utils'

/**
 * Menubar Component
 * 
 * Root component for the menu bar. Renders as a horizontal navigation bar.
 * Built on top of Radix UI Menubar primitive.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>} props - Menubar props
 * @param {string} [props.className] - CSS class names for the menubar
 * @param {React.RefObject<React.ElementRef<typeof MenubarPrimitive.Root>>} ref - Reference to the menubar element
 * @returns {JSX.Element} Menu bar element
 */
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

/**
 * MenubarMenu Component
 * 
 * A menu within the menubar. Wraps the trigger and content.
 */
const MenubarMenu = MenubarPrimitive.Menu

/**
 * MenubarTrigger Component
 * 
 * The trigger element that opens a menu within the menubar.
 * Typically rendered as a button or link.
 */
const MenubarTrigger = MenubarPrimitive.Trigger

/**
 * MenubarContent Component
 * 
 * The content area of a menu within the menubar.
 * Renders positioned relative to the trigger.
 */
const MenubarContent = MenubarPrimitive.Content

/**
 * MenubarItem Component
 * 
 * An individual selectable item within a menubar menu.
 */
const MenubarItem = MenubarPrimitive.Item

/**
 * MenubarSeparator Component
 * 
 * A visual divider between menu item groups in the menubar.
 */
const MenubarSeparator = MenubarPrimitive.Separator

export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator }
