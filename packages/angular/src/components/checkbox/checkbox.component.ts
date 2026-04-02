/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Checkbox with indeterminate state and full keyboard support
 */

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, ViewChild, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/utils';

type CheckedState = boolean | 'indeterminate';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input
      #hiddenInput
      type="checkbox"
      class="sr-only"
      [attr.name]="name || null"
      [attr.value]="value || null"
      [attr.form]="form || null"
      [attr.required]="required ? '' : null"
      [checked]="checked === true"
      [disabled]="disabled"
    />
    <button
      type="button"
      [class]="checkboxClasses"
      [disabled]="disabled"
      role="checkbox"
      [attr.id]="id || null"
      [attr.aria-checked]="ariaChecked"
      [attr.aria-label]="ariaLabel || null"
      [attr.data-state]="dataState"
      [attr.data-disabled]="disabled ? '' : null"
      [attr.aria-readonly]="readonly ? 'true' : null"
      (click)="toggle()"
      (keydown)="onKeyDown($event)"
    >
      @if (checked === true) {
        <svg data-radix-checkbox-indicator class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      }
      @if (checked === 'indeterminate') {
        <svg data-radix-checkbox-indicator class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      }
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CheckboxComponent implements OnChanges {
  @Input() checked: CheckedState = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() name?: string;
  @Input() form?: string;
  @Input() value?: string;
  @Input() id?: string;
  @Input() ariaLabel?: string;
  @Input() class?: string;
  @Output() checkedChange = new EventEmitter<CheckedState>();

  @ViewChild('hiddenInput', { static: true })
  hiddenInput?: ElementRef<HTMLInputElement>;

  private cdr = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['checked']) {
      this.syncIndeterminate();
    }
  }

  toggle(): void {
    if (this.disabled || this.readonly) return;

    const next: CheckedState =
      this.checked === 'indeterminate' ? true : !this.checked;

    this.checked = next;
    this.checkedChange.emit(next);
    this.syncIndeterminate();
    this.cdr.markForCheck();
  }

  get checkboxClasses(): string {
    return cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.checked !== false && 'bg-primary text-primary-foreground',
      this.class
    );
  }

  get dataState(): 'checked' | 'unchecked' | 'indeterminate' {
    if (this.checked === 'indeterminate') return 'indeterminate';
    return this.checked ? 'checked' : 'unchecked';
  }

  get ariaChecked(): 'true' | 'false' | 'mixed' {
    if (this.checked === 'indeterminate') return 'mixed';
    return this.checked ? 'true' : 'false';
  }

  private syncIndeterminate(): void {
    if (this.hiddenInput?.nativeElement) {
      this.hiddenInput.nativeElement.indeterminate = this.checked === 'indeterminate';
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggle();
    }
  }
}
