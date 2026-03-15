/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Badge component - Displays a badge or a component that looks like a badge
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Badge variants configuration
 * Defines the visual style variants for the Badge component
 */
const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Badge Props interface
 * @extends React.HTMLAttributes<HTMLDivElement> - All standard div HTML attributes
 * @extends VariantProps<typeof badgeVariants> - Variant configuration
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  /**
   * Badge size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the badge can be dismissed
   * @default false
   */
  dismissable?: boolean
  /**
   * Callback when badge is dismissed
   */
  onDismiss?: () => void
}

/**
 * Badge Component
 * 
 * Displays a badge with customizable variants.
 * Used for status indicators, labels, or tags.
 * 
 * @param {BadgeProps} props - Badge component props
 * @param {string} [props.className] - CSS class names for the badge
 * @param {BadgeProps['variant']} [props.variant='default'] - Visual style variant (default, secondary, destructive, outline, success, warning, info)
 * @param {BadgeProps['size']} [props.size='md'] - Badge size (sm, md, lg)
 * @param {boolean} [props.dismissable] - Whether the badge can be dismissed
 * @param {() => void} [props.onDismiss] - Callback when badge is dismissed
 * @param {React.ReactNode} [props.children] - Badge content
 * @returns {JSX.Element} Badge element
 */
function Badge({ className, variant, size, dismissable, onDismiss, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {props.children}
      {dismissable && (
        <button
          type="button"
          className="ml-1 hover:bg-black/5 rounded p-0.5"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export { Badge, badgeVariants };
