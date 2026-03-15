/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Progress component - Displays an indicator showing the completion progress of a task
 */

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Progress variants configuration
 * Defines the visual style variants for the Progress component
 */
const progressVariants = cva(
  'relative h-2 w-full overflow-hidden rounded-full bg-secondary transition-all',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        destructive: 'bg-destructive',
        success: 'bg-success',
        warning: 'bg-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/**
 * Progress Props interface
 * @extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> - All standard progress root attributes
 * @extends VariantProps<typeof progressVariants> - Variant configuration
 */
interface ProgressProps extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, 'className'>, VariantProps<typeof progressVariants> {
  /**
   * Current progress value
   * @default 0
   */
  value?: number
  /**
   * Maximum progress value
   * @default 100
   */
  max?: number
  /**
   * CSS class names for the progress bar
   */
  className?: string
  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: 'default' | 'destructive' | 'success' | 'warning'
}

/**
 * Progress Component
 * 
 * Displays an indicator showing the completion progress of a task.
 * Built on top of Radix UI Progress primitive.
 * 
 * @param {ProgressProps} props - Progress component props
 * @param {string} [props.className] - CSS class names for the progress bar
 * @param {number} [props.value=0] - Current progress value (0-100)
 * @param {number} [props.max=100] - Maximum progress value
 * @param {ProgressProps['variant']} [props.variant='default'] - Visual style variant (default, destructive, success, warning)
 * @param {boolean} [props.disabled] - Disables the progress indicator
 * @param {string} [props.name] - Name for form submission
 * @param {React.RefObject<React.ElementRef<typeof ProgressPrimitive.Root>>} ref - Reference to the progress element
 * @returns {JSX.Element} Progress bar element
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, max = 100, variant = 'default', ...props }, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        progressVariants({ variant }),
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full w-full flex-1 transition-all',
          progressVariants({ variant })
        )}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = 'Progress';

export { Progress };
