import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import { CalendarRange } from '../calendar-range/CalendarRange';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/Popover';
import { Button } from '../button/Button';
import { cn } from '@/lib/utils';

export interface DateRangePickerProps {
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  dateFormat?: string;
  align?: 'start' | 'center' | 'end';
  className?: string;
  disabled?: boolean;
  numberOfMonths?: number;
}

function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = 'Pick a date range',
  dateFormat = 'LLL dd, y',
  align = 'start',
  className,
  disabled = false,
  numberOfMonths = 2,
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-full justify-between text-left font-normal',
            !dateRange && 'text-muted-foreground',
            className
          )}
        >
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, dateFormat)} -{' '}
                {format(dateRange.to, dateFormat)}
              </>
            ) : (
              format(dateRange.from, dateFormat)
            )
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <CalendarRange
          selected={dateRange}
          onSelect={onDateRangeChange}
          numberOfMonths={numberOfMonths}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
DateRangePicker.displayName = 'DateRangePicker';

export { DateRangePicker };
