/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Time picker - Hour/minute (and AM/PM) selection popover
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { buttonVariants } from '../button'
import { SelectComponent, SelectItemComponent } from '../select'
import { PopoverComponent, PopoverContentComponent, PopoverTriggerComponent } from '../popover'
import { cn } from '../../lib/utils'

@Component({
  selector: 'ui-time-picker',
  standalone: true,
  imports: [
    CommonModule,
    SelectComponent,
    SelectItemComponent,
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
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </ui-popover-trigger>
      <ui-popover-content class="w-auto p-3">
        <div class="flex items-center gap-2">
          <ui-select
            [value]="parsed.hour || undefined"
            placeholder="HH"
            (valueChange)="handleHourChange($event)"
          >
            <ui-select-item *ngFor="let hour of hourOptions" [value]="hour">
              {{ hour }}
            </ui-select-item>
          </ui-select>

          <span class="text-lg font-semibold">:</span>

          <ui-select
            [value]="parsed.minute || undefined"
            placeholder="MM"
            (valueChange)="handleMinuteChange($event)"
          >
            <ui-select-item *ngFor="let minute of minuteOptions" [value]="minute">
              {{ minute }}
            </ui-select-item>
          </ui-select>

          <ng-container *ngIf="format === '12h'">
            <span class="text-lg font-semibold">-</span>
            <ui-select [value]="parsed.period" (valueChange)="handlePeriodChange($event)">
              <ui-select-item value="AM">AM</ui-select-item>
              <ui-select-item value="PM">PM</ui-select-item>
            </ui-select>
          </ng-container>
        </div>
      </ui-popover-content>
    </ui-popover>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimePickerComponent {
  @Input() time?: string
  @Input() placeholder = 'Pick a time'
  @Input() format: '12h' | '24h' = '24h'
  @Input() class?: string
  @Input() disabled = false
  @Output() timeChange = new EventEmitter<string | undefined>()
  private static nextId = 1

  readonly hourOptions =
    this.format === '24h'
      ? Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
      : Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))

  readonly minuteOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

  get parsed(): { hour: string; minute: string; period: 'AM' | 'PM' } {
    const value = this.time
    if (!value) return { hour: '', minute: '', period: 'AM' }

    if (this.format === '24h') {
      const [hour = '', minute = ''] = value.split(':')
      return { hour, minute, period: 'AM' }
    }

    const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
    if (!match) return { hour: '', minute: '', period: 'AM' }

    return {
      hour: match[1],
      minute: match[2],
      period: match[3].toUpperCase() as 'AM' | 'PM',
    }
  }

  get displayText(): string {
    const { hour, minute, period } = this.parsed
    if (!hour || !minute) return this.placeholder
    return this.format === '24h' ? `${hour}:${minute}` : `${hour}:${minute} ${period}`
  }

  get triggerClasses(): string {
    return cn(
      buttonVariants({ variant: 'outline' }),
      'w-full justify-between text-left font-normal',
      !this.time && 'text-muted-foreground',
      this.class,
    )
  }

  handleHourChange(hour: string): void {
    this.emitTime(hour, this.parsed.minute, this.parsed.period)
  }

  handleMinuteChange(minute: string): void {
    this.emitTime(this.parsed.hour, minute, this.parsed.period)
  }

  handlePeriodChange(period: string): void {
    this.emitTime(this.parsed.hour, this.parsed.minute, period === 'PM' ? 'PM' : 'AM')
  }

  private emitTime(hour: string, minute: string, period: 'AM' | 'PM'): void {
    if (!hour || !minute) {
      this.timeChange.emit(undefined)
      return
    }
    this.timeChange.emit(this.format === '24h' ? `${hour}:${minute}` : `${hour}:${minute} ${period}`)
  }
}
