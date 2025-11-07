import * as React from 'react';
import { View, Animated, Easing } from 'react-native';
import { cn } from '@/lib/utils';

export interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
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

    const style: any = {};
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
