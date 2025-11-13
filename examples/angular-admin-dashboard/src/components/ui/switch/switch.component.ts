import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      [class]="switchClasses"
      [disabled]="disabled"
      (click)="toggle()"
    >
      <span [class]="thumbClasses"></span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
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

  get switchClasses(): string {
    return cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.checked ? 'bg-primary' : 'bg-input',
      this.class
    );
  }

  get thumbClasses(): string {
    return cn(
      'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
      this.checked ? 'translate-x-5' : 'translate-x-0'
    );
  }
}
