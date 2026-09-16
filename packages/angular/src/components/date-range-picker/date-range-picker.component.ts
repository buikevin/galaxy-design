/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Date range picker - Popover with range calendar
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { format } from 'date-fns'
import { buttonVariants } from '../button'
import { CalendarRangeComponent, type DateRange } from '../calendar-range'
import { PopoverComponent, PopoverContentComponent, PopoverTriggerComponent } from '../popover'
import { cn } from '../../lib/utils'

@Component({
  selector: 'ui-date-range-picker',
  standalone: true,
  imports: [
    CommonModule,
    CalendarRangeComponent,
    PopoverComponent,
    PopoverTriggerComponent,
    PopoverContentComponent,
  ],
  template: `
    <ui-popover>
      <ui-popover-trigger [class]="triggerClasses" [disabled]="disabled">
        <span>{{ displayText }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="ml-2 h-4 w-4"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
      </ui-popover-trigger>
      <ui-popover-content class="w-auto p-0">
        <ui-calendar-range
          [range]="range"
          (rangeChange)="rangeChange.emit($event)"
        ></ui-calendar-range>
      </ui-popover-content>
    </ui-popover>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangePickerComponent {
  @Input() range: DateRange = { start: null, end: null }
  @Input() placeholder = 'Pick a date range'
  @Input() dateFormat = 'LLL dd, y'
  @Input() class?: string
  @Input() disabled = false
  @Output() rangeChange = new EventEmitter<DateRange>()

  get displayText(): string {
    const { start, end } = this.range
    if (!start) return this.placeholder
    if (!end) return format(start, this.dateFormat)
    return `${format(start, this.dateFormat)} - ${format(end, this.dateFormat)}`
  }

  get triggerClasses(): string {
    return cn(
      buttonVariants({ variant: 'outline' }),
      'w-full justify-between text-left font-normal',
      !this.range.start && 'text-muted-foreground',
      this.class,
    )
  }
}
