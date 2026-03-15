<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Input component - Displays a form input field or a component that looks like an input field
-->
<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

/**
 * Input Props
 * @prop type - Input type
 * @prop modelValue - Controlled value
 * @prop class - CSS class names for the input
 * @prop disabled - Disables the input
 * @prop placeholder - Placeholder text
 * @event update:modelValue - Emitted when the value changes
 */
interface InputProps {
  /** Input type. */
  type?: string
  /** Controlled value. */
  modelValue?: string | number
  /** CSS class names for the input. */
  class?: HTMLAttributes['class']
  /** Disables the input. */
  disabled?: boolean
  /** Placeholder text. */
  placeholder?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
})

const emits = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: '',
})
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :class="cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>
