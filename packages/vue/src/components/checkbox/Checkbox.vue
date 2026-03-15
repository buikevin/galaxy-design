<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Checkbox component - Accessible checkbox with Radix Vue primitive
-->
<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { CheckboxIndicator, CheckboxRoot, type CheckboxRootEmits, type CheckboxRootProps } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * Checkbox Props
 * @prop checked - Controlled checked state
 * @prop defaultChecked - Default checked state
 * @prop disabled - Disables the checkbox
 * @prop required - Makes the checkbox required
 * @prop name - Name attribute for form submission
 * @prop value - Value attribute for form submission
 * @prop class - CSS class names for the checkbox
 * @event update:checked - Emitted when the checked state changes
 */
const props = defineProps<CheckboxRootProps & {
  /** Controlled checked state. */
  checked?: boolean
  /** Default checked state. */
  defaultChecked?: boolean
  /** Disables the checkbox. */
  disabled?: boolean
  /** Makes the checkbox required. */
  required?: boolean
  /** Name attribute for form submission. */
  name?: string
  /** Value attribute for form submission. */
  value?: string
  /** CSS class names for the checkbox. */
  class?: HTMLAttributes['class']
}>()
const emits = defineEmits<CheckboxRootEmits>()
</script>

<template>
  <CheckboxRoot
    v-bind="props"
    :class="cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      props.class
    )"
    @update:checked="emits('update:checked', $event)"
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <Check class="h-4 w-4" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
