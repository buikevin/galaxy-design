/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Combobox component - Searchable select with filtering
 */

import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cn } from '../../lib/utils';

export interface ComboboxOption {
  value: string;
  label: string;
}

@Component({
  selector: 'ui-combobox',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboboxComponent),
      multi: true,
    },
  ],
  template: `
    <div class="relative">
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        [attr.aria-expanded]="open"
        [attr.aria-label]="placeholder"
        [disabled]="disabled"
        (click)="open = !open"
        [class]="cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          buttonClass
        )"
      >
        <span [class]="selectedLabel ? '' : 'text-muted-foreground'">
          {{ selectedLabel || placeholder }}
        </span>
        <svg class="ml-2 h-4 w-4 shrink-0 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" />
        </svg>
      </button>

      <div
        *ngIf="open"
        class="absolute z-50 mt-1 w-full rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md"
        role="listbox"
      >
        <input
          type="text"
          [value]="query"
          (input)="query = $any($event.target).value"
          [placeholder]="searchPlaceholder"
          class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm focus:outline-none"
        />
        <div class="mt-1 max-h-[240px] overflow-y-auto">
          <div
            *ngFor="let option of filteredOptions"
            role="option"
            [attr.aria-selected]="option.value === value"
            (click)="select(option)"
            [class]="cn(
              'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground',
              option.value === value && 'bg-accent text-accent-foreground'
            )"
          >
            <svg *ngIf="option.value === value" class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ option.label }}
          </div>
          <div *ngIf="filteredOptions.length === 0" class="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxComponent implements ControlValueAccessor {
  @Input() options: ComboboxOption[] = [];
  @Input() placeholder = 'Select...';
  @Input() searchPlaceholder = 'Search...';
  @Input() buttonClass = '';
  @Input() disabled = false;

  @Output() selectionChange = new EventEmitter<string | undefined>();

  open = false;
  query = '';
  value: string | undefined = undefined;

  onChange: (value: string | undefined) => void = () => {};
  onTouched: () => void = () => {};

  cn = cn;

  get selectedLabel(): string | undefined {
    return this.options.find((o) => o.value === this.value)?.label;
  }

  get filteredOptions(): ComboboxOption[] {
    const q = this.query.toLowerCase().trim();
    if (!q) return this.options;
    return this.options.filter(
      (o) => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q),
    );
  }

  select(option: ComboboxOption): void {
    this.value = option.value;
    this.open = false;
    this.query = '';
    this.onChange(option.value);
    this.selectionChange.emit(option.value);
  }

  writeValue(value: string | undefined): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string | undefined) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
