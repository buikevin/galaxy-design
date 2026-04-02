/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Navigation Menu components - A collection of menus for navigating pages and links
 */

import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'

/**
 * NavigationMenu Props interface
 * @extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> - All standard navigation menu root attributes
 */
export type NavigationMenuProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> & {
  /**
   * Current active menu item value
   */
  value?: string
  /**
   * Uncontrolled initial active menu item value
   */
  defaultValue?: string
  /**
   * Called when the active item changes
   */
  onValueChange?: (value: string) => void
  /**
   * Delay duration before content closes
   */
  delayDuration?: number
  /**
   * Skip delay duration
   */
  skipDelayDuration?: number
  /**
   * Reading direction
   * @default 'ltr'
   */
  dir?: 'ltr' | 'rtl'
  /**
   * CSS class names for the navigation menu
   */
  className?: string
}

/**
 * NavigationMenu Component
 * 
 * Root component for the navigation menu. Manages the menu state and positioning.
 * Built on top of Radix UI NavigationMenu primitive.
 * 
 * @param {NavigationMenuProps} props - NavigationMenu component props
 * @param {string} [props.className] - CSS class names for the navigation menu
 * @param {string} [props.value] - Current active menu item value
 * @param {string} [props.defaultValue] - Uncontrolled initial active menu item value
 * @param {(value: string) => void} [props.onValueChange] - Active item change handler
 * @param {number} [props.delayDuration] - Delay before content closes
 * @param {number} [props.skipDelayDuration] - Skip delay duration
 * @param {'ltr' | 'rtl'} [props.dir='ltr'] - Reading direction
 * @param {React.RefObject<React.ElementRef<typeof NavigationMenuPrimitive.Root>>} ref - Reference to the menu element
 * @returns {JSX.Element} Navigation menu container element
 */
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
    {...props}
  />
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

/**
 * NavigationMenuList Component
 * 
 * A container for navigation menu items. Renders as a horizontal list.
 */
const NavigationMenuList = NavigationMenuPrimitive.List

/**
 * NavigationMenuItem Component
 * 
 * An individual item within the navigation menu.
 */
const NavigationMenuItem = NavigationMenuPrimitive.Item

/**
 * NavigationMenuTrigger Component
 * 
 * The trigger element that opens a navigation menu submenu.
 */
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger

/**
 * NavigationMenuContent Component
 * 
 * The content panel for a navigation menu item. Displays when triggered.
 */
const NavigationMenuContent = NavigationMenuPrimitive.Content

/**
 * NavigationMenuLink Component
 * 
 * A link within the navigation menu. Supports both internal and external links.
 */
const NavigationMenuLink = NavigationMenuPrimitive.Link

export { NavigationMenu }
export {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
}
