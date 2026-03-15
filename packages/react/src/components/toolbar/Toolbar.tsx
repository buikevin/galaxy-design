/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Toolbar components - A container for grouping action buttons and controls
 */

import * as React from 'react'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { cn } from '@/lib/utils'

/**
 * Toolbar Component
 * 
 * Root container for a toolbar. Groups action buttons and controls horizontally.
 * Built on top of Radix UI Toolbar primitive.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>} props - Toolbar props
 * @param {string} [props.className] - CSS class names for the toolbar
 * @param {string} [props.orientation] - Orientation (horizontal, vertical)
 * @param {string} [props.aria-label] - Accessible label for the toolbar
 * @param {React.ReactNode} [props.children] - Toolbar content (buttons, separators, etc.)
 * @param {React.RefObject<React.ElementRef<typeof ToolbarPrimitive.Root>>} ref - Reference to the toolbar element
 * @returns {JSX.Element} Toolbar container element
 */
const Toolbar = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Root
    ref={ref}
    className={cn(
      'flex w-full min-w-max items-center gap-1 rounded-md bg-background p-1',
      className
    )}
    {...props}
  />
))
Toolbar.displayName = ToolbarPrimitive.Root.displayName

/**
 * ToolbarButton Component
 * 
 * A button within a toolbar. Styled for toolbar use.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button>} props - ToolbarButton props
 * @param {string} [props.className] - CSS class names for the button
 * @param {boolean} [props.disabled] - Disables the button
 * @param {string} [props.type] - Button type (button, submit, reset)
 * @param {React.ReactNode} [props.children] - Button content
 * @param {React.RefObject<React.ElementRef<typeof ToolbarPrimitive.Button>>} ref - Reference to the button element
 * @returns {JSX.Element} Toolbar button element
 */
const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Button>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Button
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
      className
    )}
    {...props}
  />
))
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName

/**
 * ToolbarSeparator Component
 * 
 * A vertical separator line within a toolbar.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>} props - ToolbarSeparator props
 * @param {string} [props.className] - CSS class names for the separator
 * @param {boolean} [props.decorative] - Whether the separator is purely decorative
 * @param {React.RefObject<React.ElementRef<typeof ToolbarPrimitive.Separator>>} ref - Reference to the separator element
 * @returns {JSX.Element} Toolbar separator element
 */
const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Separator
    ref={ref}
    className={cn('mx-2 h-4 w-px bg-border', className)}
    {...props}
  />
))
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName

/**
 * ToolbarLink Component
 * 
 * A link within a toolbar. Styled for toolbar use.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link>} props - ToolbarLink props
 * @param {string} [props.className] - CSS class names for the link
 * @param {string} props.href - URL to navigate to
 * @param {string} [props.target] - Link target (_self, _blank, etc.)
 * @param {React.ReactNode} [props.children] - Link content
 * @param {React.RefObject<React.ElementRef<typeof ToolbarPrimitive.Link>>} ref - Reference to the link element
 * @returns {JSX.Element} Toolbar link element
 */
const ToolbarLink = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Link
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
ToolbarLink.displayName = ToolbarPrimitive.Link.displayName

/**
 * ToolbarToggleGroup Component
 * 
 * A toggle group within a toolbar.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleGroup>} props - ToolbarToggleGroup props
 * @param {string} [props.className] - CSS class names for the toggle group
 * @param {string} [props.type] - Selection type (single, multiple)
 * @param {string | string[]} [props.value] - Current selected value(s)
 * @param {(value: string | string[]) => void} [props.onValueChange] - Value change handler
 * @param {React.RefObject<React.ElementRef<typeof ToolbarPrimitive.ToggleGroup>>} ref - Reference to the toggle group element
 * @returns {JSX.Element} Toolbar toggle group element
 */
const ToolbarToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleGroup>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleGroup>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.ToggleGroup
    ref={ref}
    className={cn('flex items-center gap-1', className)}
    {...props}
  />
))
ToolbarToggleGroup.displayName = ToolbarPrimitive.ToggleGroup.displayName

/**
 * ToolbarToggleItem Component
 * 
 * A toggle item within a toolbar toggle group.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem>} props - ToolbarToggleItem props
 * @param {string} [props.className] - CSS class names for the toggle item
 * @param {string} props.value - The value associated with the item
 * @param {boolean} [props.disabled] - Disables the item
 * @param {React.ReactNode} [props.children] - Item content
 * @param {React.RefObject<React.ElementRef<typeof ToolbarPrimitive.ToggleItem>>} ref - Reference to the toggle item element
 * @returns {JSX.Element} Toolbar toggle item element
 */
const ToolbarToggleItem = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleItem>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.ToggleItem
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
      className
    )}
    {...props}
  />
))
ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName

export {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
}
