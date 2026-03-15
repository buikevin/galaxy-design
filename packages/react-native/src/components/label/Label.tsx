/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Label component for form field labels with required indicator support
 */

import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { cn } from '@/lib/utils';

export interface LabelProps extends TextProps {
  /** Label content */
  children?: React.ReactNode;
  /** Marks label as required and appends an asterisk */
  required?: boolean;
  /** CSS class names for the label */
  className?: string;
}

const Label = React.forwardRef<React.ElementRef<typeof Text>, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn(
          'text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          className
        )}
        {...props}
      >
        {children}
        {required && <Text className="text-destructive ml-1">*</Text>}
      </Text>
    );
  }
);

Label.displayName = 'Label';

export { Label };
