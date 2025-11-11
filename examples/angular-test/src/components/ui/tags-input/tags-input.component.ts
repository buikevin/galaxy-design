import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-tags-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      [class]="containerClass"
      (click)="inputElement.focus()"
    >
      <span
        *ngFor="let tag of value"
        class="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground"
      >
        {{ tag }}
        <button
          type="button"
          class="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          (click)="removeTag(tag); $event.stopPropagation()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-3 w-3"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span class="sr-only">Remove {{ tag }}</span>
        </button>
      </span>
      <input
        #inputElement
        [(ngModel)]="inputValue"
        type="text"
        [placeholder]="value.length === 0 ? placeholder : ''"
        class="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
        (keydown)="handleKeyDown($event)"
      />
    </div>
  `,
})
export class TagsInputComponent {
  @Input() class?: string
  @Input() value: string[] = []
  @Input() placeholder: string = 'Add tag...'
  @Output() valueChange = new EventEmitter<string[]>()
  @Output() tagAdd = new EventEmitter<string>()
  @Output() tagRemove = new EventEmitter<string>()

  inputValue: string = ''

  get containerClass() {
    return cn(
      'flex min-h-10 w-full flex-wrap gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
      this.class
    )
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && this.inputValue.trim()) {
      e.preventDefault()
      const newTag = this.inputValue.trim()
      if (!this.value.includes(newTag)) {
        const newTags = [...this.value, newTag]
        this.valueChange.emit(newTags)
        this.tagAdd.emit(newTag)
      }
      this.inputValue = ''
    } else if (e.key === 'Backspace' && !this.inputValue && this.value.length > 0) {
      const lastTag = this.value[this.value.length - 1]
      const newTags = this.value.slice(0, -1)
      this.valueChange.emit(newTags)
      this.tagRemove.emit(lastTag)
    }
  }

  removeTag(tagToRemove: string) {
    const newTags = this.value.filter((tag) => tag !== tagToRemove)
    this.valueChange.emit(newTags)
    this.tagRemove.emit(tagToRemove)
  }
}
