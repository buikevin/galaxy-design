/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Time Picker component - Hour/minute selection with scrollable wheels
 */

import * as React from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import { cn } from '@/lib/utils';

export interface TimePickerProps {
  value?: string;
  onValueChange?: (time: string | undefined) => void;
  placeholder?: string;
  format?: '12h' | '24h';
  className?: string;
}

export function TimePicker({ value, onValueChange, placeholder = 'Pick a time', format = '24h', className }: TimePickerProps) {
  const [open, setOpen] = React.useState(false);

  const hourOptions =
    format === '24h'
      ? Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
      : Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));

  const minuteOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  const parsed = React.useMemo(() => {
    if (!value) return { hour: '', minute: '', period: 'AM' };
    if (format === '24h') {
      const [hour = '', minute = ''] = value.split(':');
      return { hour, minute, period: 'AM' };
    }
    const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return { hour: '', minute: '', period: 'AM' };
    return { hour: match[1], minute: match[2], period: match[3].toUpperCase() };
  }, [value, format]);

  const handleTimeChange = (hour: string, minute: string, period: string) => {
    if (!hour || !minute) {
      onValueChange?.(undefined);
      return;
    }
    onValueChange?.(format === '24h' ? `${hour}:${minute}` : `${hour}:${minute} ${period}`);
  };

  const displayTime = () => {
    if (!parsed.hour || !parsed.minute) return placeholder;
    return format === '24h' ? `${parsed.hour}:${parsed.minute}` : `${parsed.hour}:${parsed.minute} ${parsed.period}`;
  };

  return (
    <View className="relative">
      <Pressable
        className={cn(
          'flex h-10 w-full flex-row items-center justify-between rounded-md border border-input bg-background px-3 py-2',
          !value && 'opacity-60',
          className,
        )}
        onPress={() => setOpen(!open)}
      >
        <Text className={cn('text-sm', !value && 'text-muted-foreground')}>{displayTime()}</Text>
        <Text className="text-sm text-muted-foreground">🕐</Text>
      </Pressable>

      {open && (
        <View className="absolute z-50 mt-1 w-full rounded-md border border-border bg-popover p-3 shadow-md">
          <View className="flex-row items-center gap-2">
            <View className="flex-1">
              <Text className="mb-1 text-xs text-muted-foreground">Hour</Text>
              <View className="max-h-[120px] flex-wrap flex-row gap-1">
                {hourOptions.map((hour) => (
                  <Pressable
                    key={hour}
                    className={cn(
                      'h-8 w-11 items-center justify-center rounded-md border',
                      parsed.hour === hour ? 'bg-primary border-primary' : 'border-border',
                    )}
                    onPress={() => handleTimeChange(hour, parsed.minute, parsed.period)}
                  >
                    <Text className={cn('text-sm', parsed.hour === hour && 'text-primary-foreground')}>{hour}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
            <Text className="text-lg font-bold">:</Text>
            <View className="flex-1">
              <Text className="mb-1 text-xs text-muted-foreground">Minute</Text>
              <View className="max-h-[120px] flex-wrap flex-row gap-1">
                {minuteOptions.map((minute) => (
                  <Pressable
                    key={minute}
                    className={cn(
                      'h-8 w-11 items-center justify-center rounded-md border',
                      parsed.minute === minute ? 'bg-primary border-primary' : 'border-border',
                    )}
                    onPress={() => handleTimeChange(parsed.hour, minute, parsed.period)}
                  >
                    <Text className={cn('text-sm', parsed.minute === minute && 'text-primary-foreground')}>{minute}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
