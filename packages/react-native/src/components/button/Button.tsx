/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Button component with multiple variants, sizes, and states
 */

import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { type ButtonVariants, buttonVariants, buttonTextVariants } from './variants';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonVariants {
  /** Visual style variant (default, destructive, outline, secondary, ghost, link) */
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  /** Size variant (default, sm, lg, icon) */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /** Press handler */
  onPress?: () => void;
  /** Disables the button */
  disabled?: boolean;
  /** Button content */
  children?: React.ReactNode;
  /** CSS class names for the button */
  className?: string;
  /** CSS class names for the button text */
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
