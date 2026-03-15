/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Progress bar component for showing completion percentage
 */

import * as React from 'react';
import { View, Animated } from 'react-native';
import { cn } from '@/lib/utils';

export interface ProgressProps {
  /** Current progress value */
  value?: number;
  /** Maximum progress value */
  max?: number;
  /** CSS class names for the progress root */
  className?: string;
  /** CSS class names for the progress indicator */
  indicatorClassName?: string;
}

const Progress = React.forwardRef<View, ProgressProps>(
  ({ value = 0, max = 100, className, indicatorClassName }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const animatedWidth = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
      Animated.spring(animatedWidth, {
        toValue: percentage,
        useNativeDriver: false,
        friction: 8,
        tension: 40,
      }).start();
    }, [percentage, animatedWidth]);

    return (
      <View
        ref={ref}
        className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
      >
        <Animated.View
          className={cn('h-full bg-primary transition-all', indicatorClassName)}
          style={{
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          }}
        />
      </View>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress };
