import { useState } from 'react';
import { format, isValid } from 'date-fns';
import { DatePicker } from '../date-picker';
import { TimePicker } from '../time-picker';
import { cn } from '@/lib/utils';

export interface DateTimePickerProps {
  dateTime?: Date;
  onDateTimeChange?: (dateTime: Date | undefined) => void;
  datePlaceholder?: string;
  timePlaceholder?: string;
  timeFormat?: '12h' | '24h';
  dateFormat?: string;
  className?: string;
  disabled?: boolean;
}

function DateTimePicker({
  dateTime,
  onDateTimeChange,
  datePlaceholder = 'Pick a date',
  timePlaceholder = 'Pick a time',
  timeFormat = '24h',
  dateFormat = 'PPP',
  className,
  disabled = false,
}: DateTimePickerProps) {
  const [internalDate, setInternalDate] = useState<Date | undefined>(dateTime);
  const [internalTime, setInternalTime] = useState<string | undefined>(
    formatTimeFromDate(dateTime, timeFormat)
  );

  const isControlled = typeof dateTime !== 'undefined';
  const date = isControlled ? dateTime : internalDate;
  const time = isControlled
    ? formatTimeFromDate(dateTime, timeFormat)
    : internalTime;

  // Combine date and time into a single Date object
  const handleDateChange = (newDate: Date | undefined) => {
    if (!isControlled) {
      setInternalDate(newDate);
    }
    combineDateAndTime(newDate, time);
  };

  const handleTimeChange = (newTime: string | undefined) => {
    if (!isControlled) {
      setInternalTime(newTime);
    }
    combineDateAndTime(date, newTime);
  };

  const combineDateAndTime = (
    selectedDate: Date | undefined,
    selectedTime: string | undefined
  ) => {
    if (!selectedDate) {
      onDateTimeChange?.(undefined);
      return;
    }

    if (!selectedTime) {
      // If no time selected, use 00:00
      const combined = new Date(selectedDate);
      combined.setHours(0, 0, 0, 0);
      onDateTimeChange?.(combined);
      return;
    }

    try {
      const combined = new Date(selectedDate);

      if (timeFormat === '24h') {
        // Parse 24h format: "HH:mm"
        const [hours, minutes] = selectedTime.split(':').map(Number);
        combined.setHours(hours, minutes, 0, 0);
      } else {
        // Parse 12h format: "hh:mm AM/PM"
        const match = selectedTime.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
        if (match) {
          let hours = parseInt(match[1], 10);
          const minutes = parseInt(match[2], 10);
          const period = match[3].toUpperCase();

          // Convert to 24h
          if (period === 'PM' && hours !== 12) {
            hours += 12;
          } else if (period === 'AM' && hours === 12) {
            hours = 0;
          }

          combined.setHours(hours, minutes, 0, 0);
        }
      }

      if (isValid(combined)) {
        onDateTimeChange?.(combined);
      }
    } catch (error) {
      console.error('Error combining date and time:', error);
      onDateTimeChange?.(undefined);
    }
  };

  return (
    <div className={cn('flex gap-2', className)}>
      <div className="flex-1">
        <DatePicker
          date={date}
          onDateChange={handleDateChange}
          placeholder={datePlaceholder}
          dateFormat={dateFormat}
          disabled={disabled}
        />
      </div>
      <div className="flex-1">
        <TimePicker
          time={time}
          onTimeChange={handleTimeChange}
          placeholder={timePlaceholder}
          format={timeFormat}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

function formatTimeFromDate(
  value: Date | undefined,
  timeFormat: '12h' | '24h'
) {
  if (!value || !isValid(value)) {
    return undefined;
  }

  return timeFormat === '24h'
    ? format(value, 'HH:mm')
    : format(value, 'hh:mm a');
}

DateTimePicker.displayName = 'DateTimePicker';

export { DateTimePicker };
