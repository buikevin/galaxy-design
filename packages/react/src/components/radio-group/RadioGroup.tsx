/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc RadioGroup components - A set of checkable buttons, known as radio buttons, where no more than one of the buttons at a time can be checked
 */

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * RadioGroup Props interface
 * @extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> - All standard radio group root attributes
 */
export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /**
   * Current selected value (controlled)
   */
  value?: string
  /**
   * Uncontrolled initial value
   */
  defaultValue?: string
  /**
   * Called when the value changes
   */
  onValueChange?: (value: string) => void
  /**
   * Disables the entire group
   * @default false
   */
  disabled?: boolean
  /**
   * Name for form submission
   */
  name?: string
  /**
   * Requires a value before form submission
   */
  required?: boolean
  /**
   * CSS class names for the radio group
   */
  className?: string
}

/**
 * RadioGroupItem Props interface
 * @extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> - All standard radio item attributes
 */
export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  /**
   * Value of this radio item
   */
  value?: string
  /**
   * Disables the radio item
   * @default false
   */
  disabled?: boolean
  /**
   * Name for form submission
   */
  name?: string
  /**
   * CSS class names for the radio item
   */
  className?: string
}

/**
 * RadioGroup Component
 * 
 * A set of checkable buttons (radio buttons) where only one can be checked at a time.
 * Built on top of Radix UI RadioGroup primitive.
 * 
 * @param {RadioGroupProps} props - RadioGroup component props
 * @param {string} [props.className] - CSS class names for the radio group container
 * @param {string} [props.value] - Current selected value (controlled)
 * @param {string} [props.defaultValue] - Default selected value (uncontrolled)
 * @param {(value: string) => void} [props.onValueChange] - Value change handler
 * @param {boolean} [props.disabled=false] - Disables the radio group
 * @param {string} [props.name] - Name for form submission
 * @param {boolean} [props.required] - Makes the radio group required
 * @param {React.RefObject<React.ElementRef<typeof RadioGroupPrimitive.Root>>} ref - Reference to the radio group element
 * @returns {JSX.Element} Radio group container element
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

/**
 * RadioGroupItem Component
 * 
 * An individual radio button item within the radio group.
 * 
 * @param {RadioGroupItemProps} props - RadioGroupItem component props
 * @param {string} [props.className] - CSS class names for the radio button
 * @param {string} [props.value] - Value of this radio item
 * @param {boolean} [props.disabled=false] - Disables the radio item
 * @param {string} [props.name] - Name for form submission
 * @param {React.RefObject<React.ElementRef<typeof RadioGroupPrimitive.Item>>} ref - Reference to the radio item element
 * @returns {JSX.Element} Radio button item element
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
