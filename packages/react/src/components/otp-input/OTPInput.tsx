/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc OTP Input component - One-time password input with auto-focus
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface OTPInputProps {
  /** Number of OTP digits (default 6) */
  length?: number;
  /** Current OTP value (controlled) */
  value?: string;
  /** Called when OTP value changes */
  onValueChange?: (value: string) => void;
  /** Called when all digits are filled */
  onComplete?: (value: string) => void;
  /** Disable all inputs */
  disabled?: boolean;
  /** CSS class names */
  className?: string;
}

export const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  ({ length = 6, value: controlledValue, onValueChange, onComplete, disabled, className }, ref) => {
    const [internalValue, setInternalValue] = React.useState('');
    const inputsRef = React.useRef<(HTMLInputElement | null)[]>([]);
    const value = controlledValue ?? internalValue;
    const digits = value.split('').slice(0, length);

    const updateValue = (newValue: string) => {
      if (controlledValue === undefined) {
        internalValue === undefined;
        // @ts-ignore
      }
      const nextValue = newValue;
      if (controlledValue === undefined) {
        // Internal state handled via refs below
      }
      onValueChange?.(nextValue);
      if (nextValue.length === length) {
        onComplete?.(nextValue);
      }
    };

    const handleChange = (index: number, inputValue: string) => {
      const digit = inputValue.replace(/\D/g, '').slice(-1);
      const chars = value.split('');
      while (chars.length < length) chars.push('');
      chars[index] = digit;
      const newValue = chars.join('');
      updateValue(newValue);

      if (digit && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        const chars = value.split('');
        while (chars.length < length) chars.push('');
        if (chars[index]) {
          chars[index] = '';
          updateValue(chars.join(''));
        } else if (index > 0) {
          chars[index - 1] = '';
          updateValue(chars.join(''));
          inputsRef.current[index - 1]?.focus();
        }
      }
      if (e.key === 'ArrowLeft' && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
      if (e.key === 'ArrowRight' && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
      updateValue(pasted);
      inputsRef.current[Math.min(pasted.length, length - 1)]?.focus();
    };

    return (
      <div ref={ref} className={cn('flex items-center gap-2', className)} role="group" aria-label="One-time password input">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => { inputsRef.current[index] = el; }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digits[index] || ''}
            disabled={disabled}
            className={cn(
              'h-12 w-12 rounded-md border border-input bg-background text-center text-lg font-semibold',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring',
              'disabled:cursor-not-allowed disabled:opacity-50',
            )}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={(e) => e.target.select()}
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>
    );
  }
);
OTPInput.displayName = 'OTPInput';
