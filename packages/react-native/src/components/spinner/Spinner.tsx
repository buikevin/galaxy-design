/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Animated spinner component for indicating loading state
 */

import * as React from 'react';
import {
  AccessibilityProps,
  Animated,
  Easing,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { cn } from '@/lib/utils';

export type SpinnerSize = 'sm' | 'default' | 'lg';

export interface SpinnerProps extends AccessibilityProps {
  /** Visual size of the spinner (sm, default, lg) */
  size?: SpinnerSize;
  /** Accessible label announced to assistive technology */
  label?: string;
  /** NativeWind class names for the spinner */
  className?: string;
  /** Additional React Native style for the spinner */
  style?: StyleProp<ViewStyle>;
}

const sizeStyles: Record<SpinnerSize, ViewStyle> = {
  sm: { width: 16, height: 16, borderWidth: 2 },
  default: { width: 24, height: 24, borderWidth: 2 },
  lg: { width: 32, height: 32, borderWidth: 3 },
};

const Spinner = React.forwardRef<React.ElementRef<typeof Animated.View>, SpinnerProps>(
  ({ size = 'default', label = 'Loading...', className, style, ...props }, ref) => {
    const rotation = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
      const animation = Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 900,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      );

      animation.start();
      return () => animation.stop();
    }, [rotation]);

    const spin = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Animated.View
        ref={ref}
        accessibilityRole="progressbar"
        accessibilityLabel={label}
        className={cn('rounded-full border-slate-400 border-t-transparent', className)}
        style={[
          sizeStyles[size],
          {
            transform: [{ rotate: spin }],
          },
          style,
        ]}
        {...props}
      />
    );
  },
);

Spinner.displayName = 'Spinner';

export { Spinner };
