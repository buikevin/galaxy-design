<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Accordion component - Collapsible content sections with single or multiple mode
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AccordionRoot, type AccordionRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiAccordion',
})

/**
 * Accordion Props
 * @prop type - Single or multiple accordion mode
 * @prop modelValue - Controlled value (single: string | multiple: string[])
 * @prop defaultValue - Default value
 * @prop collapsible - Allows all items to be closed
 * @prop disabled - Disables the accordion
 * @prop class - CSS class names for the accordion
 */
interface Props extends AccordionRootProps {
  /** Single or multiple accordion mode. */
  type?: 'single' | 'multiple'
  /** Controlled value (single: string | multiple: string[]). */
  modelValue?: string | string[]
  /** Default value. */
  defaultValue?: string | string[]
  /** Allows all items to be closed. */
  collapsible?: boolean
  /** Disables the accordion. */
  disabled?: boolean
  /** CSS class names for the accordion. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AccordionRoot
    :class="cn('', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </AccordionRoot>
</template>
