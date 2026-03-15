/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Separator component for visual dividers between content sections
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { cn } from '@/lib/utils';

export interface SeparatorProps extends ViewProps {
  /** Separator orientation (horizontal or vertical) */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the separator is decorative only */
  decorative?: boolean;
  /** CSS class names for the separator */
  className?: string;
}

const Separator = React.forwardRef<View, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => {
    return (
      <View
        ref={ref}
        role={decorative ? 'none' : 'separator'}
        className={cn(
          'bg-border',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export { Separator };
