/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Date picker - Popover-triggered button with calendar
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { format } from 'date-fns'
import { buttonVariants } from '../button'
import { CalendarComponent } from '../calendar'
import { PopoverComponent, PopoverContentComponent, PopoverTriggerComponent } from '../popover'
import { cn } from '../../lib/utils'

@Component({
  selector: 'ui-date-picker',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent,
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
        <ui-calendar
          [selectedDate]="date"
          (dateChange)="dateChange.emit($event)"
        ></ui-calendar>
      </ui-popover-content>
    </ui-popover>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {
  @Input() date?: Date
  @Input() placeholder = 'Pick a date'
  @Input() dateFormat = 'PPP'
  @Input() class?: string
  @Input() disabled = false
  @Output() dateChange = new EventEmitter<Date>()

  get displayText(): string {
    return this.date ? format(this.date, this.dateFormat) : this.placeholder
  }

  get triggerClasses(): string {
    return cn(
      buttonVariants({ variant: 'outline' }),
      'w-full justify-between text-left font-normal',
      !this.date && 'text-muted-foreground',
      this.class,
    )
  }
}
