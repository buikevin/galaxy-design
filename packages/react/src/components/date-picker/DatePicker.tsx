import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '../calendar/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/Popover';
import { Button } from '../button/Button';
import { cn } from '@/lib/utils';

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  dateFormat?: string;
  align?: 'start' | 'center' | 'end';
  className?: string;
  disabled?: boolean;
}

function DatePicker({
  date,
  onDateChange,
  placeholder = 'Pick a date',
  dateFormat = 'PPP',
  align = 'start',
  className,
  disabled = false,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-full justify-between text-left font-normal',
            !date && 'text-muted-foreground',
            className
          )}
        >
          {date ? format(date, dateFormat) : <span>{placeholder}</span>}
          <CalendarIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
DatePicker.displayName = 'DatePicker';

export { DatePicker };
