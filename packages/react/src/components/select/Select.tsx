/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Select components - A select box component for choosing an option from a list
 */

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Select Props interface
 * @extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> - All standard select root attributes
 */
export type SelectProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Root
> & {
  /**
   * Controlled selected value
   */
  value?: string
  /**
   * Uncontrolled initial selected value
   */
  defaultValue?: string
  /**
   * Called when the value changes
   */
  onValueChange?: (value: string) => void
  /**
   * Disables the select
   * @default false
   */
  disabled?: boolean
  /**
   * Requires a value before form submission
   */
  required?: boolean
  /**
   * Name for form submission
   */
  name?: string
  /**
   * Reading direction
   */
  dir?: 'ltr' | 'rtl'
}

/**
 * SelectTrigger Props interface
 * @extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> - All standard select trigger attributes
 */
export type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
> & {
  /**
   * CSS class names for the trigger
   */
  className?: string
  /**
   * Disables the trigger
   * @default false
   */
  disabled?: boolean
}

/**
 * SelectContent Props interface
 * @extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> - All standard select content attributes
 */
export type SelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
> & {
  /**
   * Positioning strategy
   * @default 'popper'
   */
  position?: 'popper' | 'item-aligned'
  /**
   * CSS class names for the content
   */
  className?: string
  /**
   * Side offset from the trigger
   */
  sideOffset?: number
}

/**
 * SelectItem Props interface
 * @extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> - All standard select item attributes
 */
export type SelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
> & {
  /**
   * Item value
   */
  value?: string
  /**
   * Disables the item
   * @default false
   */
  disabled?: boolean
  /**
   * CSS class names for the item
   */
  className?: string
}

/**
 * SelectLabel Props interface
 * @extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> - All standard select label attributes
 */
export type SelectLabelProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Label
> & {
  /**
   * CSS class names for the label
   */
  className?: string
}

/**
 * SelectSeparator Props interface
 * @extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> - All standard select separator attributes
 */
export type SelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
> & {
  /**
   * CSS class names for the separator
   */
  className?: string
}

/**
 * Select Component
 * 
 * Root component for the select box. Manages the state of the select.
 * Built on top of Radix UI Select primitive.
 * 
 * @param {SelectProps} props - Select component props
 * @param {string} [props.value] - Controlled selected value
 * @param {string} [props.defaultValue] - Uncontrolled initial selected value
 * @param {(value: string) => void} [props.onValueChange] - Called when the value changes
 * @param {boolean} [props.disabled=false] - Disables the select
 * @param {boolean} [props.required] - Requires a value before form submission
 * @param {string} [props.name] - Name for form submission
 * @param {'ltr' | 'rtl'} [props.dir] - Reading direction
 */
const Select = SelectPrimitive.Root

/**
 * SelectGroup Component
 * 
 * Groups multiple select items together.
 * Use this to logically group related options.
 */
const SelectGroup = SelectPrimitive.Group

/**
 * SelectValue Component
 * 
 * Displays the currently selected value.
 * Typically used within the SelectTrigger.
 */
const SelectValue = SelectPrimitive.Value

/**
 * SelectTrigger Component
 * 
 * The trigger element that opens the select dropdown.
 * Displays the current selection and a dropdown icon.
 * 
 * @param {SelectTriggerProps} props - SelectTrigger component props
 * @param {string} [props.className] - CSS class names for the trigger
 * @param {React.ReactNode} [props.children] - Trigger content (usually SelectValue)
 * @param {boolean} [props.disabled=false] - Disables the trigger
 * @param {React.RefObject<React.ElementRef<typeof SelectPrimitive.Trigger>>} ref - Reference to the trigger element
 * @returns {JSX.Element} Select trigger element
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

/**
 * SelectContent Component
 * 
 * The dropdown content containing select items.
 * Renders in a portal for proper z-index layering.
 * 
 * @param {SelectContentProps} props - SelectContent component props
 * @param {string} [props.className] - CSS class names for the content
 * @param {React.ReactNode} [props.children] - Content items (SelectItem components)
 * @param {'popper' | 'item-aligned'} [props.position='popper'] - Positioning strategy
 * @param {number} [props.sideOffset] - Offset from the trigger
 * @param {React.RefObject<React.ElementRef<typeof SelectPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Select dropdown content element
 */
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

/**
 * SelectLabel Component
 * 
 * A label for a group of select items.
 * 
 * @param {SelectLabelProps} props - SelectLabel component props
 * @param {string} [props.className] - CSS class names for the label
 * @param {React.ReactNode} [props.children] - Label content
 * @param {React.RefObject<React.ElementRef<typeof SelectPrimitive.Label>>} ref - Reference to the label element
 * @returns {JSX.Element} Select label element
 */
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

/**
 * SelectItem Component
 * 
 * An option within the select dropdown.
 * Displays a checkmark when selected.
 * 
 * @param {SelectItemProps} props - SelectItem component props
 * @param {string} [props.className] - CSS class names for the item
 * @param {string} [props.value] - The value of the option
 * @param {boolean} [props.disabled=false] - Disables the item
 * @param {React.ReactNode} [props.children] - Item content
 * @param {React.RefObject<React.ElementRef<typeof SelectPrimitive.Item>>} ref - Reference to the item element
 * @returns {JSX.Element} Select item element
 */
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

/**
 * SelectSeparator Component
 * 
 * A visual separator between groups of select items.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>} props - SelectSeparator props
 * @param {string} [props.className] - CSS class names for the separator
 * @param {React.RefObject<React.ElementRef<typeof SelectPrimitive.Separator>>} ref - Reference to the separator element
 * @returns {JSX.Element} Select separator element
 */
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
