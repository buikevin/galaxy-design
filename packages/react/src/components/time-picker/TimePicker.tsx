import { Clock } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../popover';
import { Button } from '../button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';
import { cn } from '@/lib/utils';

export interface TimePickerProps {
  time?: string; // Format: "HH:mm" (24-hour) or "hh:mm AM/PM" (12-hour)
  onTimeChange?: (time: string | undefined) => void;
  placeholder?: string;
  format?: '12h' | '24h';
  align?: 'start' | 'center' | 'end';
  className?: string;
  disabled?: boolean;
}

function TimePicker({
  time,
  onTimeChange,
  placeholder = 'Pick a time',
  format = '24h',
  align = 'start',
  className,
  disabled = false,
}: TimePickerProps) {
  const parsedTime = parseTimeValue(time, format);
  const hour = parsedTime.hour;
  const minute = parsedTime.minute;
  const period = parsedTime.period;

  // Generate hour options based on format
  const hourOptions =
    format === '24h'
      ? Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
      : Array.from({ length: 12 }, (_, i) =>
          (i + 1).toString().padStart(2, '0')
        );

  // Generate minute options (00-59)
  const minuteOptions = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  );

  const handleTimeChange = (
    newHour: string,
    newMinute: string,
    newPeriod: 'AM' | 'PM'
  ) => {
    if (!newHour || !newMinute) {
      onTimeChange?.(undefined);
      return;
    }

    if (format === '24h') {
      onTimeChange?.(`${newHour}:${newMinute}`);
    } else {
      onTimeChange?.(`${newHour}:${newMinute} ${newPeriod}`);
    }
  };

  const displayTime = () => {
    if (!hour || !minute) return placeholder;

    if (format === '24h') {
      return `${hour}:${minute}`;
    }
    return `${hour}:${minute} ${period}`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-full justify-between text-left font-normal',
            !time && 'text-muted-foreground',
            className
          )}
        >
          <span>{displayTime()}</span>
          <Clock className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3" align={align}>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Select
              value={hour || undefined}
              onValueChange={(value: string) => {
                handleTimeChange(value, minute, period);
              }}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="HH" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto">
                {hourOptions.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <span className="text-lg font-semibold">:</span>

          <div className="flex-1">
            <Select
              value={minute || undefined}
              onValueChange={(value: string) => {
                handleTimeChange(hour, value, period);
              }}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto">
                {minuteOptions.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {format === '12h' && (
            <>
              <span className="text-lg font-semibold">-</span>
              <div className="flex-1">
                <Select
                  value={period}
                  onValueChange={(value: 'AM' | 'PM') => {
                    handleTimeChange(hour, minute, value);
                  }}
                >
                  <SelectTrigger className="w-[70px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="PM">PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function parseTimeValue(
  value: string | undefined,
  format: '12h' | '24h'
): { hour: string; minute: string; period: 'AM' | 'PM' } {
  if (!value) {
    return { hour: '', minute: '', period: 'AM' };
  }

  if (format === '24h') {
    const [hour = '', minute = ''] = value.split(':');
    return { hour, minute, period: 'AM' };
  }

  const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    return { hour: '', minute: '', period: 'AM' };
  }

  return {
    hour: match[1],
    minute: match[2],
    period: match[3].toUpperCase() as 'AM' | 'PM',
  };
}

TimePicker.displayName = 'TimePicker';

export { TimePicker };
