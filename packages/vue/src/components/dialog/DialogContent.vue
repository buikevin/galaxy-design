<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc DialogContent component - Modal dialog content with overlay and portal
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { DialogContent, DialogPortal, DialogOverlay, type DialogContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * DialogContent Props
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop forceMount - Force-mount the content even when closed
 * @prop class - CSS class names for the content
 */
interface Props extends DialogContentProps {
  /** Element or component to render. */
  as?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** Force-mount the content even when closed. */
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
  <DialogPortal>
    <DialogOverlay class="fixed inset-0 z-50 bg-black/80" />
    <DialogContent
      :class="cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg', props.class)"
      v-bind="delegatedProps"
    ><slot /></DialogContent>
  </DialogPortal>
</template>
