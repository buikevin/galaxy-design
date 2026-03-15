/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Spinner component - Displays a loading spinner animation
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Spinner size variant type
 */
export type SpinnerSize = 'sm' | 'default' | 'lg'

/**
 * Spinner Props interface
 * @extends React.HTMLAttributes<HTMLSpanElement> - All standard span HTML attributes
 */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Size of the spinner
   * @default "default"
   */
  size?: SpinnerSize
  /**
   * Accessible label for screen readers
   * @default "Loading..."
   */
  label?: string
}

/**
 * Size CSS class mapping
 */
const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'h-4 w-4 border-2',
  default: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-[3px]',
}

/**
 * Spinner Component
 * 
 * Displays a loading spinner animation to indicate loading state.
 * Accessible with role="status" and aria-label for screen readers.
 * 
 * @param {SpinnerProps} props - Spinner component props
 * @param {string} [props.className] - CSS class names for the spinner
 * @param {SpinnerSize} [props.size] - Size variant (sm, default, lg)
 * @param {string} [props.label] - Accessible label for screen readers
 * @param {React.RefObject<HTMLSpanElement>} ref - Reference to the spinner element
 * @returns {JSX.Element} Spinner element
 */
const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size = 'default', label = 'Loading...', ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        className={cn(
          'inline-block shrink-0 animate-spin rounded-full border-solid border-current border-t-transparent text-muted-foreground',
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Spinner.displayName = 'Spinner'

export { Spinner }
