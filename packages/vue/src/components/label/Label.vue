<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Label component - Renders an accessible label associated with controls
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { Label as RadixLabel, type LabelProps as RadixLabelProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * Label Props
 * @prop for - Id of the element the label is associated with
 * @prop asChild - Render as child via Radix Primitive
 * @prop as - Element or component to render
 * @prop class - CSS class names for the label
 */
interface LabelProps extends RadixLabelProps {
  /** Id of the element the label is associated with. */
  htmlFor?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** Element or component to render. */
  as?: string
  /** CSS class names for the label. */
  class?: HTMLAttributes['class']
}

const props = defineProps<LabelProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadixLabel
    :class="cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      props.class
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </RadixLabel>
</template>
