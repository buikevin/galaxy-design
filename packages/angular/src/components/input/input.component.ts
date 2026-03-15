/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Text input with label, hints, and error messages
 */

import { Component, Input, Output, EventEmitter, HostBinding, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input
      [attr.type]="type"
      [value]="value"
      [attr.disabled]="disabled ? '' : null"
      [attr.readonly]="readonly ? '' : null"
      [attr.maxlength]="maxlength ?? null"
      [attr.autocomplete]="autocomplete ?? null"
      [attr.aria-invalid]="ariaInvalidAttr"
      [attr.name]="name ?? null"
      [attr.id]="id ?? null"
      [attr.required]="required ? '' : null"
      [placeholder]="placeholder"
      (input)="onInput($event)"
      (focus)="onFocus()"
      (blur)="onBlur()"
      [class]="inputClasses"
    />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder?: string;
  @Input() class?: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() maxlength?: number;
  @Input() autocomplete?: string;
  @Input() ariaInvalid?: string | boolean;
  @Input() name?: string;
  @Input() id?: string;
  @Input() required: boolean = false;

  @Output() valueChange = new EventEmitter<string | number>();
  @Output() inputFocus = new EventEmitter<void>();
  @Output() inputBlur = new EventEmitter<void>();

  value: string | number = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  get inputClasses(): string {
    return cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.class
    );
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onFocus(): void {
    this.inputFocus.emit();
  }

  onBlur(): void {
    this.onTouched();
    this.inputBlur.emit();
  }

  get ariaInvalidAttr(): string | null {
    if (this.ariaInvalid === undefined || this.ariaInvalid === null) return null;
    return String(this.ariaInvalid);
  }
}
