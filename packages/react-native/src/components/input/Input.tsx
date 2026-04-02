/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Text input component with label, placeholder, and error states
 */

import * as React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import { cn } from '@/lib/utils';

export interface InputProps extends TextInputProps {
  /** Controlled value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the input is editable */
  editable?: boolean;
  /** Change handler */
  onChangeText?: (text: string) => void;
  /** Blur handler */
  onBlur?: TextInputProps['onBlur'];
  /** Focus handler */
  onFocus?: TextInputProps['onFocus'];
  /** CSS class names for the input */
  className?: string;
  /** Label text */
  label?: string;
  /** Error text */
  error?: string;
  /** Wrapper class name */
  containerClassName?: string;
  /** Label class name */
  labelClassName?: string;
  /** Error text class name */
  errorClassName?: string;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, containerClassName, label, error, labelClassName, errorClassName, ...props }, ref) => {
    return (
      <View className={cn('flex flex-col gap-1.5', containerClassName)}>
        {label && (
          <Text className={cn('text-sm font-medium text-foreground', labelClassName)}>
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          className={cn(
            'h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground',
            'focus:border-ring focus:ring-2 focus:ring-ring focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus:border-destructive focus:ring-destructive',
            className
          )}
          placeholderTextColor="rgb(156 163 175)" // text-muted-foreground
          {...props}
        />
        {error && (
          <Text className={cn('text-sm text-destructive', errorClassName)}>
            {error}
          </Text>
        )}
      </View>
    );
  }
);

Input.displayName = 'Input';

export { Input };
