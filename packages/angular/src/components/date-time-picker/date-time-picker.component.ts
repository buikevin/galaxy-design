/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Date-time picker - Date picker and time picker side by side
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { format, isValid } from 'date-fns'
import { DatePickerComponent } from '../date-picker'
import { TimePickerComponent } from '../time-picker'
import { cn } from '../../lib/utils'

@Component({
  selector: 'ui-date-time-picker',
  standalone: true,
  imports: [CommonModule, DatePickerComponent, TimePickerComponent],
  template: `
    <div [class]="cn('flex gap-2', class)">
      <div class="flex-1">
        <ui-date-picker
          [date]="currentDate"
          [placeholder]="datePlaceholder"
          [dateFormat]="dateFormat"
          [disabled]="disabled"
          (dateChange)="handleDateChange($event)"
        ></ui-date-picker>
      </div>
      <div class="flex-1">
        <ui-time-picker
          [time]="currentTime"
          [placeholder]="timePlaceholder"
          [format]="timeFormat"
          [disabled]="disabled"
          (timeChange)="handleTimeChange($event)"
        ></ui-time-picker>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent implements OnChanges {
  @Input() dateTime?: Date
  @Input() datePlaceholder = 'Pick a date'
  @Input() timePlaceholder = 'Pick a time'
  @Input() timeFormat: '12h' | '24h' = '24h'
  @Input() dateFormat = 'PPP'
  @Input() class?: string
  @Input() disabled = false
  @Output() dateTimeChange = new EventEmitter<Date | undefined>()

  private readonly cdr = inject(ChangeDetectorRef)
  private internalDate?: Date
  private internalTime?: string

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateTime']) {
      this.internalTime = formatTimeFromDate(this.dateTime, this.timeFormat)
    }
  }

  private get isControlled(): boolean {
    return this.dateTime !== undefined
  }

  get currentDate(): Date | undefined {
    return this.isControlled ? this.dateTime : this.internalDate
  }

  get currentTime(): string | undefined {
    return this.isControlled
      ? formatTimeFromDate(this.dateTime, this.timeFormat)
      : this.internalTime
  }

  get cn(): typeof cn {
    return cn
  }

  handleDateChange(newDate: Date | undefined): void {
    if (!this.isControlled) {
      this.internalDate = newDate
    }
    this.combineDateAndTime(newDate, this.currentTime)
  }

  handleTimeChange(newTime: string | undefined): void {
    if (!this.isControlled) {
      this.internalTime = newTime
    }
    this.combineDateAndTime(this.currentDate, newTime)
  }

  private combineDateAndTime(selectedDate?: Date, selectedTime?: string): void {
    if (!selectedDate) {
      this.dateTimeChange.emit(undefined)
      return
    }

    if (!selectedTime) {
      const combined = new Date(selectedDate)
      combined.setHours(0, 0, 0, 0)
      this.dateTimeChange.emit(combined)
      return
    }

    try {
      const combined = new Date(selectedDate)

      if (this.timeFormat === '24h') {
        const [hours = 0, minutes = 0] = selectedTime.split(':').map(Number)
        combined.setHours(hours, minutes, 0, 0)
      } else {
        const match = selectedTime.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
        if (match) {
          let hours = parseInt(match[1], 10)
          const minutes = parseInt(match[2], 10)
          const period = match[3].toUpperCase()

          if (period === 'PM' && hours !== 12) {
            hours += 12
          } else if (period === 'AM' && hours === 12) {
            hours = 0
          }

          combined.setHours(hours, minutes, 0, 0)
        }
      }

      if (isValid(combined)) {
        this.dateTimeChange.emit(combined)
      }
    } catch (error) {
      console.error('Error combining date and time:', error)
      this.dateTimeChange.emit(undefined)
    }

    this.cdr.markForCheck()
  }
}

function formatTimeFromDate(value: Date | undefined, timeFormat: '12h' | '24h') {
  if (!value || !isValid(value)) {
    return undefined
  }

  return timeFormat === '24h' ? format(value, 'HH:mm') : format(value, 'hh:mm a')
}
