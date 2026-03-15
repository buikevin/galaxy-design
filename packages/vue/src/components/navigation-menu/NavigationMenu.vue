<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc NavigationMenu component - Horizontal navigation with dropdown support
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { NavigationMenuRoot, type NavigationMenuRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * NavigationMenu Props
 * @prop modelValue - Controlled value of the active menu item
 * @prop defaultValue - Initial active item for uncontrolled usage
 * @prop dir - Reading direction (ltr, rtl)
 * @prop orientation - Layout orientation (horizontal, vertical)
 * @prop delayDuration - Delay before content opens
 * @prop skipDelayDuration - Skip delay for keyboard users
 * @prop disableMenuItemTrigger - Disable menu item trigger
 * @prop class - CSS class names for the navigation menu
 */
interface Props extends NavigationMenuRootProps {
  /** Controlled value of the active menu item. */
  modelValue?: string
  /** Initial active item for uncontrolled usage. */
  defaultValue?: string
  /** Reading direction (ltr, rtl). */
  dir?: 'ltr' | 'rtl'
  /** Layout orientation (horizontal, vertical). */
  orientation?: 'horizontal' | 'vertical'
  /** Delay before content opens. */
  delayDuration?: number
  /** Skip delay for keyboard users. */
  skipDelayDuration?: number
  /** Disable menu item trigger. */
  disableMenuItemTrigger?: boolean
  /** CSS class names for the navigation menu. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <NavigationMenuRoot
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </NavigationMenuRoot>
</template>
