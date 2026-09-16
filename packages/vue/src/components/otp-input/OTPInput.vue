<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc OTP Input component - One-time password input
-->
<script setup lang="ts">
import { ref, watch } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'UiOTPInput',
});

const props = withDefaults(
  defineProps<{
    length?: number;
    modelValue?: string;
    disabled?: boolean;
    class?: string;
  }>(),
  {
    length: 6,
    disabled: false,
  }
);

const emit = defineEmits<{
  'update:modelValue': [value: string];
  complete: [value: string];
}>();

const inputs = ref<(HTMLInputElement | null)[]>([]);
const digits = ref<string[]>([]);

watch(
  () => props.modelValue,
  (val) => {
    digits.value = (val || '').split('').slice(0, props.length);
  },
  { immediate: true }
);

function setInputRef(index: number) {
  return (el: unknown) => {
    inputs.value[index] = el as HTMLInputElement | null;
  };
}

function handleChange(index: number, inputValue: string) {
  const digit = inputValue.replace(/\D/g, '').slice(-1);
  digits.value[index] = digit;
  const newValue = digits.value.join('');
  emit('update:modelValue', newValue);
  if (newValue.length === props.length) emit('complete', newValue);
  if (digit && index < props.length - 1) inputs.value[index + 1]?.focus();
}

function handleKeydown(index: number, e: KeyboardEvent) {
  if (e.key === 'Backspace' && !digits.value[index] && index > 0) {
    digits.value[index - 1] = '';
    emit('update:modelValue', digits.value.join(''));
    inputs.value[index - 1]?.focus();
  }
}

function handlePaste(e: ClipboardEvent) {
  e.preventDefault();
  const pasted =
    e.clipboardData
      ?.getData('text')
      .replace(/\D/g, '')
      .slice(0, props.length) || '';
  digits.value = pasted.split('');
  emit('update:modelValue', pasted);
  if (pasted.length === props.length) emit('complete', pasted);
  inputs.value[Math.min(pasted.length, props.length - 1)]?.focus();
}
</script>

<template>
  <div
    :class="cn('flex items-center gap-2', props.class)"
    role="group"
    aria-label="One-time password input"
  >
    <input
      v-for="(_, index) in length"
      :key="index"
      :ref="setInputRef(index)"
      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
      maxlength="1"
      :value="digits[index] || ''"
      :disabled="disabled"
      :class="
        cn(
          'h-12 w-12 rounded-md border border-input bg-background text-center text-lg font-semibold',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring',
          'disabled:cursor-not-allowed disabled:opacity-50'
        )
      "
      :aria-label="'Digit ' + (index + 1)"
      @input="handleChange(index, ($event.target as HTMLInputElement).value)"
      @keydown="handleKeydown(index, $event)"
      @paste="handlePaste"
      @focus="($event.target as HTMLInputElement).select()"
    />
  </div>
</template>
