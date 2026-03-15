<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Tabs component - Tabbed navigation with content panels
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsRoot, type TabsRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * Tabs Props
 * @prop modelValue - Controlled tab value
 * @prop defaultValue - Default tab value
 * @prop orientation - Tab orientation (horizontal or vertical)
 * @prop class - CSS class names for the tabs
 */
interface Props extends TabsRootProps {
  /** Controlled tab value. */
  modelValue?: string
  /** Default tab value. */
  defaultValue?: string
  /** Tab orientation (horizontal or vertical). */
  orientation?: 'horizontal' | 'vertical'
  /** CSS class names for the tabs. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TabsRoot
    :class="cn('', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsRoot>
</template>
