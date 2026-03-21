/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Skeleton component for loading placeholders with animation
 */

import * as React from 'react';
import { View, Animated, Easing } from 'react-native';
import { cn } from '@/lib/utils';

export interface SkeletonProps {
  /** CSS class names for the skeleton */
  className?: string;
  /** Explicit width for the skeleton */
  width?: number | string;
  /** Explicit height for the skeleton */
  height?: number | string;
  /** Render the skeleton with a circular shape */
  circle?: boolean;
}

const Skeleton = React.forwardRef<View, SkeletonProps>(
  ({ className, width, height, circle = false }, ref) => {
    const opacity = React.useRef(new Animated.Value(0.5)).current;

    React.useEffect(() => {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.5,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
        ])
      );
      animation.start();

      return () => animation.stop();
    }, [opacity]);

    const style: Record<string, unknown> = {};
    if (width) style.width = width;
    if (height) style.height = height;

    return (
      <Animated.View
        ref={ref}
        style={[
          style,
          {
            opacity,
          },
        ]}
        className={cn(
          'bg-muted',
          circle ? 'rounded-full' : 'rounded-md',
          !width && 'w-full',
          !height && 'h-4',
          className
        )}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
