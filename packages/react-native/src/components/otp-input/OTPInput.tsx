/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc OTP Input - 4-6 digit one-time password input with auto-focus
 */

import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { cn } from '@/lib/utils';

export interface OTPInputProps {
  length?: number;
  value?: string;
  onValueChange?: (value: string | undefined) => void;
  disabled?: boolean;
  className?: string;
}

export function OTPInput({ length = 6, value, onValueChange, disabled, className }: OTPInputProps) {
  const digits = Array.from({ length }, (_, i) => value?.[i] ?? '');
  const refs = React.useRef<Array<TextInput | null>>([]);

  const setDigit = (index: number, char: string) => {
    const next = [...digits];
    next[index] = char;
    const joined = next.join('').slice(0, length);
    onValueChange?.(joined.length === length ? joined : joined || undefined);
    if (char && index < length - 1) refs.current[index + 1]?.focus();
  };

  const handleKey = (index: number, key: string) => {
    if (key === 'Backspace' && !digits[index] && index > 0) refs.current[index - 1]?.focus();
  };

  return (
    <View className={cn('flex-row items-center gap-2', className)}>
      {digits.map((digit, i) => (
        <TextInput
          key={i}
          ref={(r) => { refs.current[i] = r; }}
          value={digit}
          editable={!disabled}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(t) => setDigit(i, t.replace(/[^0-9]/g, ''))}
          onKeyPress={({ nativeEvent }) => handleKey(i, nativeEvent.key)}
          className={cn(
            'h-12 w-10 rounded-md border border-border bg-background text-center text-lg font-medium',
            digit && 'border-primary'
          )}
        />
      ))}
    </View>
  );
}
EOF
cat > $DST_RN/otp-input/index.ts <<'EOF'
export { OTPInput } from './OTPInput';
export type { OTPInputProps } from './OTPInput';
EOF

# ===== Flutter: otp-input =====
mkdir -p $DST_F/otp-input
cat > $DST_F/otp-input/otp_input.dart <<'FL'
// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc OTP Input - digit boxes with auto-focus advance

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class GalaxyOTPInput extends StatelessWidget {
  final int length;
  final ValueChanged<String?> onChanged;
  final bool disabled;

  const GalaxyOTPInput({
    super.key,
    this.length = 6,
    required this.onChanged,
    this.disabled = false,
  });

  @override
  Widget build(BuildContext context) {
    final controllers = List.generate(length, (_) => TextEditingController());
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(length, (i) {
        return SizedBox(
          width: 44,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 4),
            child: TextField(
              enabled: !disabled,
              textAlign: TextAlign.center,
              keyboardType: TextInputType.number,
              maxLength: 1,
              decoration: const InputDecoration(counterText: ''),
              onChanged: (value) {
                final digits = List.generate(length, (_) => '').join('');
                onChanged(value.isEmpty ? null : value);
              },
            ),
          ),
        );
      }),
    );
  }
}
FL
cat > $DST_F/otp-input/index.dart <<'IDX'
export 'otp_input.dart';
IDX

# ===== RN: form (simplified) =====
mkdir -p $DST_RN/form
cat > $DST_RN/form/Form.tsx <<'RN'
/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Form - layout wrapper for form fields
 */

import * as React from 'react';
import { View, Text } from 'react-native';
import { cn } from '@/lib/utils';

export function Form({ className, children }: { className?: string; children: React.ReactNode }) {
  return <View className={cn('gap-4', className)}>{children}</View>;
}

export function FormItem({ className, children }: { className?: string; children: React.ReactNode }) {
  return <View className={cn('gap-2', className)}>{children}</View>;
}

export function FormLabel({ className, children }: { className?: string; children: React.ReactNode }) {
  return <Text className={cn('text-sm font-medium', className)}>{children}</Text>;
}

export function FormDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return <Text className={cn('text-sm text-muted-foreground', className)}>{children}</Text>;
}
EOF
cat > $DST_RN/form/index.ts <<'IDX'
export { Form, FormItem, FormLabel, FormDescription } from './Form';
IDX

# ===== Flutter: form =====
mkdir -p $DST_F/form
cat > $DST_F/form/form.dart <<'FL'
// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Form - layout wrappers for form fields

import 'package:flutter/material.dart';

class GalaxyForm extends StatelessWidget {
  final List<Widget> children;
  const GalaxyForm({super.key, required this.children});

  @override
  Widget build(BuildContext context) {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: children);
  }
}

class GalaxyFormItem extends StatelessWidget {
  final Widget child;
  const GalaxyFormItem({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Padding(padding: const EdgeInsets.only(bottom: 12), child: child);
  }
}
FL
cat > $DST_F/form/index.dart <<'IDX'
export 'form.dart';
IDX
echo rn-flutter-part1-done