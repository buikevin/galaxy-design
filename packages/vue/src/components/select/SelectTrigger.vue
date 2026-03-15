<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc SelectTrigger component - Button that opens select dropdown with chevron icon
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SelectTrigger, SelectIcon, type SelectTriggerProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * SelectTrigger Props
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop class - CSS class names for the trigger
 */
interface Props extends SelectTriggerProps {
  /** Element or component to render. */
  as?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** CSS class names for the trigger. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <SelectTrigger
    :class="cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
    v-bind="delegatedProps"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="h-4 w-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
