/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Slider component - An input where the user selects a value from within a given range
 */

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

/**
 * Slider Props interface
 * @extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> - All standard slider root attributes
 */
export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /**
   * Controlled slider values
   */
  value?: number[]
  /**
   * Uncontrolled initial slider values
   */
  defaultValue?: number[]
  /**
   * Called when the slider values change
   */
  onValueChange?: (value: number[]) => void
  /**
   * Called when the interaction ends and the slider values are committed
   */
  onValueCommit?: (value: number[]) => void
  /**
   * Name used for the hidden inputs in form submission
   */
  name?: string
  /**
   * Disables the slider
   * @default false
   */
  disabled?: boolean
  /**
   * Slider orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Reading direction
   */
  dir?: 'ltr' | 'rtl'
  /**
   * Whether the slider is visually inverted
   * @default false
   */
  inverted?: boolean
  /**
   * Minimum value
   * @default 0
   */
  min?: number
  /**
   * Maximum value
   * @default 100
   */
  max?: number
  /**
   * Stepping interval
   * @default 1
   */
  step?: number
  /**
   * Minimum permitted steps between thumbs
   * @default 0
   */
  minStepsBetweenThumbs?: number
  /**
   * Associates the slider inputs with a form
   */
  form?: string
  /**
   * CSS class names for the slider root
   */
  className?: string
}

/**
 * Slider Component
 * 
 * An input where the user selects a value from within a given range.
 * Built on top of Radix UI Slider primitive.
 * 
 * @param {SliderProps} props - Slider component props
 * @param {string} [props.className] - CSS class names for the slider
 * @param {number[]} [props.value] - Current value(s) of the slider (controlled)
 * @param {number[]} [props.defaultValue] - Default value(s) of the slider (uncontrolled)
 * @param {number} [props.min=0] - Minimum value
 * @param {number} [props.max=100] - Maximum value
 * @param {number} [props.step=1] - Step interval
 * @param {boolean} [props.disabled=false] - Disables the slider
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - Orientation of the slider
 * @param {(value: number[]) => void} [props.onValueChange] - Value change handler
 * @param {(value: number[]) => void} [props.onValueCommit] - Value commit handler
 * @param {React.RefObject<React.ElementRef<typeof SliderPrimitive.Root>>} ref - Reference to the slider element
 * @returns {JSX.Element} Slider element
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
