/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Calendar component - A date picker component that displays a calendar
 */

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { cn } from '@/lib/utils';

/**
 * Calendar Props interface
 * @extends React.ComponentProps<typeof DayPicker> - All standard DayPicker props
 */
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/**
 * Calendar Component
 * 
 * Displays a calendar for date selection.
 * Built on top of react-day-picker with custom styling.
 * 
 * @param {CalendarProps} props - Calendar component props
 * @param {string} [props.className] - CSS class names for the calendar
 * @param {Record<string, string>} [props.classNames] - Custom class names for internal elements
 * @param {boolean} [props.showOutsideDays=true] - Whether to show days from previous/next month
 * @param {number} [props.months] - Number of months to display
 * @param {Date} [props.month] - Controlled month
 * @param {(month: Date) => void} [props.onMonthChange] - Month change handler
 * @param {Date | Date[]} [props.selected] - Selected date(s)
 * @param {(date: Date | Date[]) => void} [props.onSelect] - Selection change handler
 * @param {Date} [props.today] - Custom today date
 * @param {boolean} [props.disabled] - Whether the calendar is disabled
 * @returns {JSX.Element} Calendar element
 */
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
