import { useState, useEffect } from 'react';
import { format, isValid } from 'date-fns';
import { DatePicker } from '@/components/ui/date-picker';
import { TimePicker } from '@/components/ui/time-picker';
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
  const [date, setDate] = useState<Date | undefined>(dateTime);
  const [time, setTime] = useState<string | undefined>();

  // Initialize date and time from dateTime prop
  useEffect(() => {
    if (dateTime && isValid(dateTime)) {
      setDate(dateTime);

      if (timeFormat === '24h') {
        setTime(format(dateTime, 'HH:mm'));
      } else {
        setTime(format(dateTime, 'hh:mm a'));
      }
    } else {
      setDate(undefined);
      setTime(undefined);
    }
  }, [dateTime, timeFormat]);

  // Combine date and time into a single Date object
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    combineDateAndTime(newDate, time);
  };

  const handleTimeChange = (newTime: string | undefined) => {
    setTime(newTime);
    combineDateAndTime(date, newTime);
  };

  const combineDateAndTime = (selectedDate: Date | undefined, selectedTime: string | undefined) => {
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

DateTimePicker.displayName = 'DateTimePicker';

export { DateTimePicker };
