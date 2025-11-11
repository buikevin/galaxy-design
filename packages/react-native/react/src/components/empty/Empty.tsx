import * as React from 'react'
import { cn } from '@/lib/utils'

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Empty state description
   */
  description?: React.ReactNode
  /**
   * Icon or image to display
   */
  image?: React.ReactNode
  /**
   * Custom image alt text
   */
  imageAlt?: string
}

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
