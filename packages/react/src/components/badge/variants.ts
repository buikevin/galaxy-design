/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Badge component variants and types
 */

import { cva, type VariantProps } from 'class-variance-authority';

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

export { badgeVariants };
