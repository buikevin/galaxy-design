/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Skeleton component - Display a placeholder while content is loading
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Skeleton variant
   * @default "default"
   */
  variant?: 'default' | 'circle' | 'text'
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'animate-pulse bg-muted',
          {
            'rounded-md': variant === 'default',
            'rounded-full': variant === 'circle',
            'h-4 rounded': variant === 'text',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Skeleton.displayName = 'Skeleton'

export { Skeleton }
