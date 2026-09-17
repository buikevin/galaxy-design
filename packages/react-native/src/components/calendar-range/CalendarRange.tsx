/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Calendar Range - start/end date selection
 */

import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { cn } from '@/lib/utils';

export interface CalendarRangeValue {
  start?: Date;
  end?: Date;
}

export interface CalendarRangeProps {
  value?: CalendarRangeValue;
  onChange?: (value: CalendarRangeValue) => void;
  className?: string;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function CalendarRange({ value, onChange, className }: CalendarRangeProps) {
  const [month, setMonth] = React.useState(new Date());
  const [pendingStart, setPendingStart] = React.useState<Date | undefined>(value?.start);

  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();

  const cells: Array<Date | null> = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(month.getFullYear(), month.getMonth(), d));

  const inRange = (d: Date) =>
    value?.start && value?.end && d >= value.start && d <= value.end;

  const pick = (d: Date) => {
    if (!pendingStart || (value?.start && value?.end)) {
      setPendingStart(d);
      onChange?.({ start: d });
      return;
    }
    if (d < pendingStart) {
      setPendingStart(d);
      onChange?.({ start: d });
      return;
    }
    onChange?.({ start: pendingStart, end: d });
ec  };
  return (
    <View className={cn('p-3 rounded-lg border border-border', className)}>
      <View className="flex-row items-center justify-between mb-3">
        <Pressable className="h-7 w-7 items-center justify-center rounded-md" onPress={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}>
          <Text className="text-muted-foreground">‹</Text>
        </Pressable>
        <Text className="text-sm font-semibold">{MONTHS[month.getMonth()]} {month.getFullYear()}</Text>
        <Pressable className="h-7 w-7 items-center justify-center rounded-md" onPress={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}>
          <Text className="text-muted-foreground">›</Text>
        </Pressable>
      </View>
      <View className="flex-row mb-1">
        {WEEKDAYS.map((d) => (
          <Text key={d} className="w-[14.28%] text-center text-xs text-muted-foreground">{d}</Text>
        ))}
      </View>
      <View className="flex-row flex-wrap">
        {cells.map((d, i) =>
          d ? (
            <Pressable
              key={d.toISOString()}
              onPress={() => pick(d)}
              className={cn(
                'w-[14.28%] h-9 items-center justify-center',
                inRange(d) || d.getTime() === pendingStart?.getTime() ? 'bg-primary rounded-md' : undefined
              )}
            >
              <Text className={cn('text-sm', inRange(d) && 'text-primary-foreground')}>{d.getDate()}</Text>
            </Pressable>
          ) : (
            <View key={`e${i}`} className="w-[14.28%] h-9" />
          )
        )}
      </View>
    </View>
  );
}
EOF
sed -i '' '/^ec  ;$/d' $DST_RN/calendar-range/CalendarRange.tsx
cat > $DST_RN/calendar-range/index.ts <<'IDX'
export { CalendarRange } from './CalendarRange';
export type { CalendarRangeProps, CalendarRangeValue } from './CalendarRange';
IDX

# ===== Flutter: calendar-range =====
mkdir -p $DST_F/calendar-range
cat > $DST_F/calendar-range/calendar_range.dart <<'FL'
// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Calendar Range - start/end selection using showDateRangePicker

import 'package:flutter/material.dart';

class GalaxyCalendarRange {
  final DateTimeRange? value;
  final ValueChanged<DateTimeRange?> onChanged;

  const GalaxyCalendarRange({super.key, this.value, required this.onChanged});

  Future<void> show(BuildContext context) async {
    final result = await showDateRangePicker(
      context: context,
      firstDate: DateTime(2020),
      lastDate: DateTime(2030),
      initialDateRange: value ?? DateTimeRange(start: DateTime.now(), end: DateTime.now()),
    );
    if (result != null) onChanged(result);
  }
}
FL
cat > $DST_F/calendar-range/index.dart <<'IDX'
export 'calendar_range.dart';
IDX

# ===== RN: date-range-picker (popover button + range calendar) =====
mkdir -p $DST_RN/date-range-picker
cat > $DST_RN/date-range-picker/DateRangePicker.tsx <<'RN'
/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc DateRangePicker - range picker built on CalendarRange
 */

import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { cn } from '@/lib/utils';
import { CalendarRange, type CalendarRangeValue } from '../calendar-range';

export interface DateRangePickerProps {
  value?: CalendarRangeValue;
  onChange?: (value: CalendarRangeValue) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DateRangePicker({ value, onChange, placeholder = 'Pick a range', disabled, className }: DateRangePickerProps) {
  const fmt = (d?: Date) => (d ? d.toLocaleDateString() : null);
  const label = value?.start
    ? `${fmt(value.start)} - ${fmt(value.end) ?? '...'}`
    : placeholder;

  return (
    <View className={cn('w-full', className)}>
      <CalendarRange value={value} onChange={onChange} />
    </View>
  );
}
EOF
cat > $DST_RN/date-range-picker/index.ts <<'IDX'
export { DateRangePicker } from './DateRangePicker';
export type { DateRangePickerProps } from './DateRangePicker';
IDX

# ===== Flutter: date-range-picker =====
mkdir -p $DST_F/date-range-picker
cat > $DST_F/date-range-picker/date_range_picker.dart <<'FL'
// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc DateRangePicker - reuses showDateRangePicker

import 'package:flutter/material.dart';

class GalaxyDateRangePicker {
  final DateTimeRange? value;
  final ValueChanged<DateTimeRange?> onChanged;

  const GalaxyDateRangePicker({super.key, this.value, required this.onChanged});

  Future<void> show(BuildContext context) async {
    final result = await showDateRangePicker(
      context: context,
      firstDate: DateTime(2020),
      lastDate: DateTime(2030),
      initialDateRange: value ?? DateTimeRange(start: DateTime.now(), end: DateTime.now()),
    );
    if (result != null) onChanged(result);
  }
}
FL
cat > $DST_F/date-range-picker/index.dart <<'IDX'
export 'date_range_picker.dart';
IDX
echo part2-done