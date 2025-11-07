import * as React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import { cn } from '@/lib/utils';

export interface TextareaProps extends Omit<TextInputProps, 'multiline'> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const Textarea = React.forwardRef<React.ElementRef<typeof TextInput>, TextareaProps>(
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
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          className={cn(
            'min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground',
            'focus:border-ring focus:ring-2 focus:ring-ring focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus:border-destructive focus:ring-destructive',
            className
          )}
          placeholderTextColor="rgb(156 163 175)"
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

Textarea.displayName = 'Textarea';

export { Textarea };
