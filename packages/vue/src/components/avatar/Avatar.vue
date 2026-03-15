<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Avatar component - User profile image with fallback support
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AvatarRoot, type AvatarRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * Avatar Props
 * @prop delayMs - Delay before showing fallback
 * @prop src - Image source URL
 * @prop alt - Image alt text
 * @prop class - CSS class names for the avatar
 */
interface Props extends AvatarRootProps {
  /** Delay before showing fallback. */
  delayMs?: number
  /** Image source URL. */
  src?: string
  /** Image alt text. */
  alt?: string
  /** CSS class names for the avatar. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AvatarRoot
    :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', props.class)"
    v-bind="delegatedProps"
  ><slot /></AvatarRoot>
</template>
