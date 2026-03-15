/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Alert components - Displays a callout for user attention
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Alert variants configuration
 * Defines the visual style variants for the Alert component
 */
const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/**
 * Alert Component
 * 
 * Displays a callout for user attention with customizable variants.
 * Typically used for warnings, errors, or important information.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>} props - Alert props
 * @param {string} [props.className] - CSS class names for the alert
 * @param {VariantProps<typeof alertVariants>['variant']} [props.variant='default'] - Visual style variant (default, destructive)
 * @param {boolean} [props.dismissable] - Whether the alert can be dismissed
 * @param {() => void} [props.onDismiss] - Callback when alert is dismissed
 * @param {boolean} [props.showIcon] - Whether to show the variant icon (default: true)
 * @param {React.RefObject<HTMLDivElement>} ref - Reference to the alert element
 * @returns {JSX.Element} Alert container element
 */
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & {
    dismissable?: boolean
    onDismiss?: () => void
    showIcon?: boolean
  }
>(({ className, variant, dismissable, onDismiss, showIcon = true, ...props }, ref) => {
  const iconMap = {
    default: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 1.14h16.94a2 2 0 0 0 1.71-1.14L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    destructive: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  }

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {showIcon && <div className="alert-icon">{iconMap[variant || 'default']}</div>}
      {dismissable && (
        <button
          type="button"
          className="absolute top-4 right-4 p-1 hover:bg-black/5 rounded"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      )}
      {props.children}
    </div>
  )
});
Alert.displayName = 'Alert';

/**
 * AlertTitle Component
 * 
 * The title text of an alert. Renders as an h5 element.
 * 
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - AlertTitle props
 * @param {string} [props.className] - CSS class names for the title
 * @param {React.RefObject<HTMLParagraphElement>} ref - Reference to the title element
 * @returns {JSX.Element} Alert title element
 */
const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

/**
 * AlertDescription Component
 * 
 * The description text of an alert. Renders as a paragraph with relaxed leading.
 * 
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - AlertDescription props
 * @param {string} [props.className] - CSS class names for the description
 * @param {React.RefObject<HTMLParagraphElement>} ref - Reference to the description element
 * @returns {JSX.Element} Alert description element
 */
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
