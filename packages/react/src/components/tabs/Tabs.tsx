/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Tabs components - A set of layered sections of content—known as tab panels—that are displayed one at a time
 */

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

/**
 * Tabs Props interface
 * @extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> - All standard tabs root attributes
 */
export type TabsProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
> & {
  /**
   * Controlled active tab value
   */
  value?: string
  /**
   * Uncontrolled initial active tab value
   */
  defaultValue?: string
  /**
   * Called when the active tab changes
   */
  onValueChange?: (value: string) => void
  /**
   * Disables the tabs
   * @default false
   */
  disabled?: boolean
  /**
   * Tabs orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Reading direction
   * @default 'ltr'
   */
  dir?: 'ltr' | 'rtl'
  /**
   * Whether to activate tab on focus
   * @default false
   */
  activateOnFocus?: boolean
  /**
   * CSS class names for the tabs container
   */
  className?: string
}

/**
 * TabsList Props interface
 * @extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> - All standard tabs list attributes
 */
export type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
> & {
  /**
   * CSS class names for the list container
   */
  className?: string
}

/**
 * TabsTrigger Props interface
 * @extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> - All standard tabs trigger attributes
 */
export type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  /**
   * The value associated with the tab
   */
  value?: string
  /**
   * Disables the trigger
   * @default false
   */
  disabled?: boolean
  /**
   * CSS class names for the trigger button
   */
  className?: string
}

/**
 * TabsContent Props interface
 * @extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> - All standard tabs content attributes
 */
export type TabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
> & {
  /**
   * The value matching the trigger to associate this content with
   */
  value?: string
  /**
   * Force mount the content
   */
  forceMount?: boolean
  /**
   * CSS class names for the content panel
   */
  className?: string
}

/**
 * Tabs Component
 * 
 * Root component for the tabs. Manages the state of the tabs (active tab).
 * Built on top of Radix UI Tabs primitive.
 * 
 * @param {TabsProps} props - Tabs component props
 * @param {string} [props.value] - Current active tab value (controlled)
 * @param {string} [props.defaultValue] - Default active tab value (uncontrolled)
 * @param {(value: string) => void} [props.onValueChange] - Active tab change handler
 * @param {boolean} [props.disabled=false] - Disables the tabs
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - Orientation of the tabs
 * @param {'ltr' | 'rtl'} [props.dir='ltr'] - Reading direction
 * @param {boolean} [props.activateOnFocus=false] - Whether to activate tab on focus
 * @param {React.RefObject<React.ElementRef<typeof TabsPrimitive.Root>>} ref - Reference to the tabs element
 * @returns {JSX.Element} Tabs container element
 */
const Tabs = TabsPrimitive.Root

/**
 * TabsList Component
 * 
 * A container for the tab triggers. Renders as a horizontal or vertical list.
 * 
 * @param {TabsListProps} props - TabsList component props
 * @param {string} [props.className] - CSS class names for the list container
 * @param {React.ReactNode} [props.children] - Tab trigger components
 * @param {React.RefObject<React.ElementRef<typeof TabsPrimitive.List>>} ref - Reference to the list element
 * @returns {JSX.Element} Tabs list container element
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

/**
 * TabsTrigger Component
 * 
 * A button that activates a tab. When clicked, displays the associated tab panel.
 * 
 * @param {TabsTriggerProps} props - TabsTrigger component props
 * @param {string} [props.className] - CSS class names for the trigger button
 * @param {string} [props.value] - The value associated with the tab
 * @param {boolean} [props.disabled=false] - Disables the trigger
 * @param {React.ReactNode} [props.children] - Trigger content (tab label)
 * @param {React.RefObject<React.ElementRef<typeof TabsPrimitive.Trigger>>} ref - Reference to the trigger element
 * @returns {JSX.Element} Tab trigger button element
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

/**
 * TabsContent Component
 * 
 * The content panel for a tab. Displays when the associated trigger is activated.
 * 
 * @param {TabsContentProps} props - TabsContent component props
 * @param {string} [props.className] - CSS class names for the content panel
 * @param {string} [props.value] - The value matching the trigger to associate this content with
 * @param {boolean} [props.forceMount] - Force mount the content
 * @param {React.ReactNode} [props.children] - Tab panel content
 * @param {React.RefObject<React.ElementRef<typeof TabsPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Tab content panel element
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
