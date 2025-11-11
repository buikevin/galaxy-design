import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-command',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      [class]="
        cn(
          'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
          class
        )
      "
    >
      <div class="flex items-center border-b px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="mr-2 h-4 w-4 shrink-0 opacity-50"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          [(ngModel)]="searchTerm"
          [placeholder]="placeholder"
          (ngModelChange)="search.emit(searchTerm)"
          class="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div class="max-h-[300px] overflow-y-auto overflow-x-hidden p-1">
        <ng-content />
      </div>
    </div>
  `,
})
export class CommandComponent {
  @Input() class?: string
  @Input() placeholder: string = 'Type a command or search...'
  @Output() search = new EventEmitter<string>()

  searchTerm: string = ''
  cn = cn
}
