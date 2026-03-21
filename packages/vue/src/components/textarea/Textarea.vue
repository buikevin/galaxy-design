<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Textarea component - Multi-line text input with auto-resize support
-->
<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiTextarea',
})

/**
 * Textarea Props
 * @prop modelValue - Controlled value
 * @prop class - CSS class names for the textarea
 * @prop placeholder - Placeholder text
 * @prop disabled - Disables the textarea
 * @prop rows - Number of visible rows
 * @event update:modelValue - Emitted when the value changes
 */
interface Props {
  /** Controlled value. */
  modelValue?: string | number
  /** CSS class names for the textarea. */
  class?: HTMLAttributes['class']
  /** Placeholder text. */
  placeholder?: string
  /** Disables the textarea. */
  disabled?: boolean
  /** Number of visible rows. */
  rows?: number
}

const props = defineProps<Props>()
const emits = defineEmits<{
  'update:modelValue': [string | number]
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: '',
})
</script>

<template>
  <textarea
    v-model="modelValue"
    :class="cn(
      'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
  ></textarea>
</template>
