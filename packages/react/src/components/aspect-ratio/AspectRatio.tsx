/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AspectRatio component - Displays content within a desired ratio
 */

import * as React from 'react'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

/**
 * AspectRatio Component
 * 
 * Maintains a specific aspect ratio for its child content.
 * Useful for responsive images, videos, or other media.
 * Built on top of Radix UI Aspect Ratio primitive.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>} props - AspectRatio props
 * @param {string} [props.className] - CSS class names for the container
 * @param {number} [props.ratio] - The desired aspect ratio (e.g., 16/9, 4/3)
 * @param {boolean} [props.forceMount] - Force mount the component
 * @param {React.ReactNode} [props.children] - Content to display within the ratio
 * @param {React.RefObject<React.ElementRef<typeof AspectRatioPrimitive.Root>>} ref - Reference to the container element
 * @returns {JSX.Element} Aspect ratio container element
 */
const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ ...props }, ref) => <AspectRatioPrimitive.Root ref={ref} {...props} />)
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName

export { AspectRatio }
