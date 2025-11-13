import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      [class]="checkboxClasses"
      [disabled]="disabled"
      (click)="toggle()"
    >
      @if (checked) {
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      }
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() class?: string;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

  toggle(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
      this.cdr.markForCheck();
    }
  }

  get checkboxClasses(): string {
    return cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.checked && 'bg-primary text-primary-foreground',
      this.class
    );
  }
}
