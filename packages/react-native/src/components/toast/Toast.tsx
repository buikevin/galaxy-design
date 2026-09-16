/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Toast component - Brief, auto-dismissing notification
 */

import * as React from 'react';
import { Animated, Easing, StyleSheet, Text, View, Pressable } from 'react-native';
import { cn } from '@/lib/utils';

export interface ToastProps {
  /** Toast message text */
  message: string;
  /** Toast variant */
  variant?: 'default' | 'destructive' | 'success';
  /** Auto-dismiss duration in ms (default 3000) */
  duration?: number;
  /** Called when toast is dismissed */
  onClose?: () => void;
  /** CSS class names */
  className?: string;
}

export function Toast({ message, variant = 'default', duration = 3000, onClose }: ToastProps) {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.delay(duration - 300),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.in(Easing.ease),
      }),
    ]).start(() => onClose?.());

    return () => opacity.setValue(0);
  }, [duration]);

  const bgColors = {
    default: 'bg-popover text-popover-foreground',
    success: 'bg-green-600 text-white',
    destructive: 'bg-red-600 text-white',
  };

  return (
    <Animated.View
      style={[{ opacity }, styles.container]}
      className={cn(
        'absolute bottom-4 left-4 right-4 rounded-lg border border-border px-4 py-3 shadow-lg',
        bgColors[variant],
      )}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-medium">{message}</Text>
        {onClose && (
          <Pressable onPress={onClose} className="ml-2 opacity-60">
            <Text className="text-sm">✕</Text>
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
}

export { Toast as default };
