/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Calendar component - Mobile calendar with date selection
 */

import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { cn } from '@/lib/utils';

export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function Calendar({ selected, onSelect, className }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  ).getDate();

  const firstDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  ).getDay();

  const days: Array<Date | null> = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d));
  }

  const isSameDay = (a: Date | null, b: Date | null) =>
    a && b && a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();

  return (
    <View className={cn('p-3 rounded-lg border border-border', className)}>
      <View className="flex-row items-center justify-between mb-3">
        <Pressable
          className="h-7 w-7 items-center justify-center rounded-md"
          onPress={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
        >
          <Text className="text-muted-foreground">‹</Text>
        </Pressable>
        <Text className="text-sm font-semibold">
          {MONTH_NAMES[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </Text>
        <Pressable
          className="h-7 w-7 items-center justify-center rounded-md"
          onPress={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
        >
          <Text className="text-muted-foreground">›</Text>
        </Pressable>
      </View>

      <View className="flex-row mb-1">
        {WEEKDAYS.map((day) => (
          <Text key={day} className="w-[14.28%] text-center text-xs text-muted-foreground">
            {day}
          </Text>
        ))}
      </View>

      <View className="flex-row flex-wrap">
        {days.map((date, index) => {
          if (!date) {
            return <View key={`empty-${index}`} className="w-[14.28%] h-9" />;
          }
          const isSelected = isSameDay(date, selected ?? null);
          const isToday = isSameDay(date, new Date());

          return (
            <Pressable
              key={date.toISOString()}
              onPress={() => onSelect?.(date)}
              className={cn(
                'w-[14.28%] h-9 items-center justify-center',
                isSelected && 'bg-primary rounded-md',
                !isSelected && isToday && 'bg-accent rounded-md',
              )}
            >
              <Text
                className={cn(
                  'text-sm',
                  isSelected && 'text-primary-foreground font-semibold',
                  isToday && !isSelected && 'text-accent-foreground',
                  !isSelected && !isToday && 'text-foreground',
                )}
              >
                {date.getDate()}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
