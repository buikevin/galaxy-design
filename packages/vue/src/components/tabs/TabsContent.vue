<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc TabsContent component - Panel content displayed when corresponding tab is active
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiTabsContent',
})

/**
 * TabsContent Props
 * @prop value - Value of the content panel to match a trigger
 * @prop forceMount - Force-mount the panel even when inactive
 * @prop as - Element or component to render
 * @prop asChild - Render the content as a child element
 * @prop class - CSS class names for the content panel
 */
interface Props extends TabsContentProps {
  /** Value of the content panel to match a trigger. */
  value: string
  /** Force-mount the panel even when inactive. */
  forceMount?: boolean
  /** Element or component to render. */
  as?: string
  /** Render the content as a child element. */
  asChild?: boolean
  /** CSS class names for the content panel. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TabsContent
    :class="cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      props.class
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
