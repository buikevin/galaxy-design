import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { cn } from '@/lib/utils';

export interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  labelClassName?: string;
}

const Checkbox = React.forwardRef<View, CheckboxProps>(
  ({ checked = false, onCheckedChange, disabled, label, className, labelClassName }, ref) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        className={cn('flex-row items-center gap-2', disabled && 'opacity-50')}
      >
        <View
          ref={ref}
          className={cn(
            'h-5 w-5 rounded border-2 border-primary items-center justify-center',
            checked && 'bg-primary',
            disabled && 'opacity-50',
            className
          )}
        >
          {checked && (
            <View className="h-3 w-3 bg-primary-foreground rounded-sm" />
          )}
        </View>
        {label && (
          <Text className={cn('text-sm text-foreground', labelClassName)}>
            {label}
          </Text>
        )}
      </Pressable>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
