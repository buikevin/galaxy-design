import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { cn } from '@/lib/utils';

export interface LabelProps extends TextProps {
  required?: boolean;
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
