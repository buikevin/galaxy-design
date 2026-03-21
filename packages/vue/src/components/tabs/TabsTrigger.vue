<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc TabsTrigger component - Clickable tab button that activates tab content
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsTrigger, type TabsTriggerProps } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiTabsTrigger',
})

/**
 * TabsTrigger Props
 * @prop value - Value of the tab to match a trigger
 * @prop disabled - Disables the trigger
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop class - CSS class names for the trigger
 */
interface Props extends TabsTriggerProps {
  /** Value of the tab to match a trigger. */
  value: string
  /** Disables the trigger. */
  disabled?: boolean
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
  <TabsTrigger
    :class="cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      props.class
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsTrigger>
</template>
