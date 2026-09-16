/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc OTP Input component - One-time password input
 */

import { Component, Input, Output, EventEmitter, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-otp-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cn('flex items-center gap-2', class)" role="group" aria-label="One-time password input">
      <input
        *ngFor="let _ of inputArray; let i = index"
        #otpInput
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        maxlength="1"
        [value]="digits[i] || ''"
        [disabled]="disabled"
        [class]="inputClasses"
        [attr.aria-label]="'Digit ' + (i + 1)"
        (input)="handleChange(i, $any($event.target).value)"
        (keydown)="handleKeydown(i, $event)"
        (paste)="handlePaste($event)"
        (focus)="$any($event.target).select()"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OTPInputComponent {
  @Input() length = 6;
  @Input() disabled = false;
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<string>();
  @Output() complete = new EventEmitter<string>();

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  digits: string[] = [];
  cn = cn;
  private static nextId = 1;

  get inputClasses(): string {
    return cn(
      'h-12 w-12 rounded-md border border-input bg-background text-center text-lg font-semibold',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring',
      'disabled:cursor-not-allowed disabled:opacity-50',
    );
  }

  handleChange(index: number, inputValue: string): void {
    const digit = inputValue.replace(/\D/g, '').slice(-1);
    while (this.digits.length < this.length) this.digits.push('');
    this.digits[index] = digit;
    const newValue = this.digits.join('');

    this.valueChange.emit(newValue);
    if (newValue.length === this.length) {
      this.complete.emit(newValue);
    }
    if (digit && index < this.length - 1) {
      this.otpInputs.toArray()[index + 1]?.nativeElement.focus();
    }
  }

  handleKeydown(index: number, e: KeyboardEvent): void {
    if (e.key === 'Backspace') {
      if (!this.digits[index] && index > 0) {
        this.digits[index - 1] = '';
        this.valueChange.emit(this.digits.join(''));
        this.otpInputs.toArray()[index - 1]?.nativeElement.focus();
      }
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      this.otpInputs.toArray()[index - 1]?.nativeElement.focus();
    }
    if (e.key === 'ArrowRight' && index < this.length - 1) {
      this.otpInputs.toArray()[index + 1]?.nativeElement.focus();
    }
  }

  handlePaste(e: ClipboardEvent): void {
    e.preventDefault();
    const pasted = e.clipboardData?.getData('text').replace(/\D/g, '').slice(0, this.length) || '';
    this.digits = pasted.split('');
    this.valueChange.emit(pasted);
    if (pasted.length === this.length) this.complete.emit(pasted);
  }

  get otpInputs(): QueryList<ElementRef<HTMLInputElement>> {
    return (this as any)._otpInputs;
  }

  set otpInputs(value: QueryList<ElementRef<HTMLInputElement>>) {
    (this as any)._otpInputs = value;
  }
}
OTPINPUT
echo angular-otp-done