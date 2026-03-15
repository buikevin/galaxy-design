<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AccordionItem component - Individual accordion section with expandable content
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AccordionItem, type AccordionItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * AccordionItem Props
 * @prop value - Unique value for the item
 * @prop disabled - Disables the item
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop class - CSS class names for the item
 */
interface Props extends AccordionItemProps {
  /** Unique value for the item. */
  value: string
  /** Disables the item. */
  disabled?: boolean
  /** Element or component to render. */
  as?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** CSS class names for the item. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AccordionItem
    :class="cn('border-b', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </AccordionItem>
</template>
