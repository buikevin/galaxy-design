/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Separator component - Visually separates content in either horizontal or vertical orientation
 */

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '@/lib/utils'

/**
 * Separator Component
 * 
 * Visually separates content in either horizontal or vertical orientation.
 * Built on top of Radix UI Separator primitive.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>} props - Separator props
 * @param {string} [props.className] - CSS class names for the separator
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - Orientation of the separator
 * @param {boolean} [props.decorative=true] - Whether the separator is purely decorative (for accessibility)
 * @param {React.RefObject<React.ElementRef<typeof SeparatorPrimitive.Root>>} ref - Reference to the separator element
 * @returns {JSX.Element} Separator element
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
