import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-sheet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="open"
      class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      (click)="close()"
    ></div>
    <div
      *ngIf="open"
      [class]="sheetClass"
    >
      <ng-content />
      <button
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        (click)="close()"
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <span class="sr-only">Close</span>
      </button>
    </div>
  `,
})
export class SheetComponent {
  @Input() class?: string
  @Input() open: boolean = false
  @Input() side: 'top' | 'right' | 'bottom' | 'left' = 'right'
  @Output() openChange = new EventEmitter<boolean>()

  get sheetClass() {
    const sideClasses = {
      top: 'inset-x-0 top-0 border-b',
      bottom: 'inset-x-0 bottom-0 border-t',
      left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
      right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
    }

    return cn(
      'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
      sideClasses[this.side],
      this.class
    )
  }

  close() {
    this.openChange.emit(false)
  }
}
