import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker, type DateRange } from 'react-day-picker'
import 'react-day-picker/style.css'
import { cn } from '@/lib/utils'

export interface CalendarRangeProps extends Omit<React.ComponentProps<typeof DayPicker>, 'mode'> {
  selected?: DateRange
  onSelect?: (range: DateRange | undefined) => void
}

function CalendarRange({
  className,
  classNames,
  showOutsideDays = true,
  selected,
  onSelect,
  ...props
}: CalendarRangeProps) {
  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={onSelect}
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
  )
}
CalendarRange.displayName = 'CalendarRange'

export { CalendarRange }
