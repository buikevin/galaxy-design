<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc SheetContent component - Side panel content with overlay and close button
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { DialogPortal, DialogOverlay, DialogContent } from 'radix-vue'
import { X } from 'lucide-vue-next'
import { computed } from 'vue'

defineOptions({
  name: 'UiSheetContent',
})

/**
 * SheetContent Props
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop side - Side position (top, right, bottom, left)
 * @prop class - CSS class names for the content
 */
interface Props {
  /** Element or component to render. */
  as?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** Side position (top, right, bottom, left). */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /** CSS class names for the content. */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'right',
})

const sideClasses = {
  top: 'inset-x-0 top-0 border-b data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',
  bottom: 'inset-x-0 bottom-0 border-t data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom',
  left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
  right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right',
}

const contentClass = computed(() =>
  cn(
    'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
    sideClasses[props.side],
    props.class
  )
)
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogContent :class="contentClass">
      <slot />
      <button
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        @click="$emit('close')"
      >
        <X class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </button>
    </DialogContent>
  </DialogPortal>
</template>
