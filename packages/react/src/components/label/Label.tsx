/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Label component - Renders an accessible label associated with controls
 */

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@/lib/utils'

/**
 * Label Component
 * 
 * Renders an accessible label associated with controls.
 * Built on top of Radix UI Label primitive.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>} props - Label props
 * @param {string} [props.className] - CSS class names for the label
 * @param {string} [props.htmlFor] - ID of the associated control
 * @param {React.ReactNode} [props.children] - Label content
 * @param {React.RefObject<React.ElementRef<typeof LabelPrimitive.Root>>} ref - Reference to the label element
 * @returns {JSX.Element} Label element
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
