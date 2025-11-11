<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

interface InputProps {
  type?: string
  modelValue?: string | number
  class?: HTMLAttributes['class']
  disabled?: boolean
  placeholder?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
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
