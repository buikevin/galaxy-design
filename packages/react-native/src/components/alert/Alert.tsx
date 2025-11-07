import * as React from 'react';
import { View, Text, ViewProps, TextProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive bg-destructive/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps extends ViewProps, VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<View, AlertProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <View
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Alert.displayName = 'Alert';

export interface AlertTitleProps extends TextProps {}

const AlertTitle = React.forwardRef<Text, AlertTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn('mb-1 font-medium leading-none tracking-tight', className)}
        {...props}
      />
    );
  }
);

AlertTitle.displayName = 'AlertTitle';

export interface AlertDescriptionProps extends TextProps {}

const AlertDescription = React.forwardRef<Text, AlertDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn('text-sm opacity-90', className)}
        {...props}
      />
    );
  }
);

AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, alertVariants };
