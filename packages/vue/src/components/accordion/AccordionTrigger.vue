<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AccordionTrigger component - Clickable header that toggles accordion content visibility
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * AccordionTrigger Props
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop class - CSS class names for the trigger
 */
interface Props extends AccordionTriggerProps {
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
  <AccordionHeader class="flex">
    <AccordionTrigger
      :class="cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        props.class
      )"
      v-bind="delegatedProps"
    >
      <slot />
      <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
