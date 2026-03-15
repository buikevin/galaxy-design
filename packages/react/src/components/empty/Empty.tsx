/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Empty component - Displays an empty state when no data is available
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Empty Props interface
 * @extends React.HTMLAttributes<HTMLDivElement> - All standard div HTML attributes
 */
export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Empty state description text or component
   */
  description?: React.ReactNode
  /**
   * Icon or image to display above the description
   */
  image?: React.ReactNode
  /**
   * Alt text for the image
   * @default "Empty"
   */
  imageAlt?: string
}

/**
 * Empty Component
 * 
 * Displays an empty state when no data is available to show.
 * Commonly used in lists, tables, or search results.
 * 
 * @param {EmptyProps} props - Empty component props
 * @param {string} [props.className] - CSS class names for the empty container
 * @param {React.ReactNode} [props.description] - Description text or component to display
 * @param {React.ReactNode} [props.image] - Icon or image to display
 * @param {string} [props.imageAlt] - Alt text for the image
 * @param {React.ReactNode} [props.children] - Additional content (e.g., action buttons)
 * @param {React.RefObject<HTMLDivElement>} ref - Reference to the empty element
 * @returns {JSX.Element} Empty state container element
 */
const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, description, image, imageAlt = 'Empty', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col items-center justify-center p-8 text-center', className)}
        {...props}
      >
        {image ? (
          <div className="mb-4">{image}</div>
        ) : (
          <svg
            className="mb-4 h-16 w-16 text-muted-foreground/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label={imageAlt}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        )}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    )
  }
)
Empty.displayName = 'Empty'

export { Empty }
