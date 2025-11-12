import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={{
        caption_label: 'text-sm px-2 py-1 flex items-center',
        button_previous: cn(
          'rdp-button_previous',
          'hover:bg-gray-100 rounded-md transition-colors'
        ),
        button_next: cn(
          'rdp-button_next',
          'hover:bg-gray-100 rounded-md transition-colors'
        ),
        day_button: 'rounded-md',
        selected:
          'bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white rounded-md !text-white',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          return orientation === 'left' ? (
            <ChevronLeft className="w-4 h-4 text-black" />
          ) : (
            <ChevronRight className="w-4 h-4 text-black" />
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
