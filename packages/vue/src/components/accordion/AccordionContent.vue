<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AccordionContent component - Collapsible content panel with animation support
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiAccordionContent',
})

/**
 * AccordionContent Props
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop forceMount - Force mount content even when closed
 * @prop class - CSS class names for the content
 */
interface Props extends AccordionContentProps {
  /** Element or component to render. */
  as?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** Force mount content even when closed. */
  forceMount?: boolean
  /** CSS class names for the content. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AccordionContent
    :class="cn(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      props.class
    )"
    v-bind="delegatedProps"
  >
    <div class="pb-4 pt-0">
      <slot />
    </div>
  </AccordionContent>
</template>
