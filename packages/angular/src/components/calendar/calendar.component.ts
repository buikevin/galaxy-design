import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cn('p-3', class)">
      <div class="space-y-4">
        <div class="flex justify-center pt-1 relative items-center">
          <button
            type="button"
            class="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            (click)="previousMonth()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div class="text-sm font-medium">
            {{ monthNames[currentMonth] }} {{ currentYear }}
          </div>
          <button
            type="button"
            class="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            (click)="nextMonth()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        <table class="w-full border-collapse space-y-1">
          <thead>
            <tr class="flex">
              <th
                *ngFor="let day of weekDays"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
              >
                {{ day }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let week of weeks" class="flex w-full mt-2">
              <td
                *ngFor="let day of week"
                class="h-9 w-9 text-center text-sm p-0 relative"
              >
                <button
                  *ngIf="day"
                  type="button"
                  [class]="getDayClass(day)"
                  (click)="selectDate(day)"
                >
                  {{ day.getDate() }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class CalendarComponent {
  @Input() class?: string
  @Input() selectedDate?: Date
  @Output() dateChange = new EventEmitter<Date>()

  currentMonth: number = new Date().getMonth()
  currentYear: number = new Date().getFullYear()

  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  cn = cn

  get weeks(): (Date | null)[][] {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1)
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const weeks: (Date | null)[][] = []
    let week: (Date | null)[] = []

    for (let i = 0; i < startingDayOfWeek; i++) {
      week.push(null)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(new Date(this.currentYear, this.currentMonth, day))
      if (week.length === 7) {
        weeks.push(week)
        week = []
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null)
      }
      weeks.push(week)
    }

    return weeks
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11
      this.currentYear--
    } else {
      this.currentMonth--
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0
      this.currentYear++
    } else {
      this.currentMonth++
    }
  }

  selectDate(date: Date) {
    this.selectedDate = date
    this.dateChange.emit(date)
  }

  getDayClass(day: Date): string {
    const today = new Date()
    const isToday =
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear()
    const isSelected =
      this.selectedDate &&
      day.getDate() === this.selectedDate.getDate() &&
      day.getMonth() === this.selectedDate.getMonth() &&
      day.getFullYear() === this.selectedDate.getFullYear()

    return cn(
      'h-9 w-9 p-0 font-normal inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      isSelected &&
        'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
      isToday && !isSelected && 'bg-accent text-accent-foreground'
    )
  }
}
