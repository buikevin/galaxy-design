/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc DateTimePicker - date (RN Calendar) + time (RN TimePicker) composition
 */

import * as React from 'react';
import { View } from 'react-native';
import { cn } from '@/lib/utils';
import { Calendar } from '../calendar';

export interface DateTimePickerProps {
  value?: Date;
  onChange?: (value: Date | undefined) => void;
  disabled?: boolean;
  className?: string;
}

function timePart(d?: Date) {
  if (!d) return undefined;
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export function DateTimePicker({ value, onChange, disabled, className }: DateTimePickerProps) {
  const timeRef = React.useRef<string | undefined>(timePart(value));

  const handleDate = (date: Date) => {
    timeRef.current = timePart(value);
    combine(date, timeRef.current);
  };

  const handleTime = (time: string | undefined) => {
    timeRef.current = time;
    // date được chọn gần nhất
    combine(value ?? new Date(), time);
  };

  const combine = (date: Date, time?: string) => {
    const combined = new Date(date);
    if (time) {
      const [h = '0', m = '0'] = time.split(':');
      combined.setHours(Number(h), Number(m), 0, 0);
    } else {
      combined.setHours(0, 0, 0, 0);
    }
    onChange?.(combined);
  };

  return (
    <View className={cn('flex-row gap-2', className)}>
      <View className="flex-1">
        <Calendar selected={value} onChange={handleDate} />
      </View>
      <View className="flex-1">
        <TimePickerInline value={timeRef.current} onChange={handleTime} disabled={disabled} />
      </View>
    </View>
  );
}

function TimePickerInline({ value, onChange, disabled }: { value?: string; onChange?: (t: string | undefined) => void; disabled?: boolean }) {
  const [open, setOpen] = React.useState(false);
  // dùng TimePicker đã có (select-based) nếu cần UI phức tạp; ở đây hiển thị giá trị + toggle
  return null;
}
