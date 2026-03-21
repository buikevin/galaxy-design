/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Card container with header, content, and footer sections
 */

import * as React from 'react';
import { View, Text, ViewProps, TextProps } from 'react-native';
import { cn } from '@/lib/utils';

export interface CardProps extends ViewProps {
  /** CSS class names for the card container */
  className?: string;
  /** Card content */
  children: React.ReactNode;
}

const Card = React.forwardRef<View, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(
          'rounded-lg border border-border bg-card shadow-sm',
          className
        )}
        {...props}
      >
        {children}
      </View>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
      />
    );
  }
);

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<Text, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn('text-2xl font-semibold leading-none tracking-tight text-card-foreground', className)}
        {...props}
      />
    );
  }
);

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<Text, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      />
    );
  }
);

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
      />
    );
  }
);

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('flex flex-row items-center p-6 pt-0', className)}
        {...props}
      />
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
