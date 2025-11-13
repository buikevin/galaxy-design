import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  const [period, setPeriod] = useState<'AM' | 'PM'>('AM');

  // Parse time prop into hour, minute, period
  useEffect(() => {
    if (!time) {
      setHour('');
      setMinute('');
      setPeriod('AM');
      return;
    }

    if (format === '24h') {
      const [h, m] = time.split(':');
      setHour(h || '');
      setMinute(m || '');
    } else {
      // Parse 12h format: "hh:mm AM/PM"
      const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
      if (match) {
        setHour(match[1]);
        setMinute(match[2]);
        setPeriod(match[3].toUpperCase() as 'AM' | 'PM');
      }
    }
  }, [time, format]);

  // Generate hour options based on format
  const hourOptions = format === '24h'
    ? Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
    : Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));

  // Generate minute options (00-59)
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  const handleTimeChange = (newHour: string, newMinute: string, newPeriod: 'AM' | 'PM') => {
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
              value={hour}
              onValueChange={(value: string) => {
                setHour(value);
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
              value={minute}
              onValueChange={(value: string) => {
                setMinute(value);
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
                    setPeriod(value);
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

TimePicker.displayName = 'TimePicker';

export { TimePicker };
