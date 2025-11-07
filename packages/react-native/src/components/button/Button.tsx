import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { type ButtonVariants, buttonVariants, buttonTextVariants } from './variants';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonVariants {
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, textClassName, variant, size, children, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text className={cn(buttonTextVariants({ variant, size, className: textClassName }))}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    );
  }
);

Button.displayName = 'Button';

export { Button };
