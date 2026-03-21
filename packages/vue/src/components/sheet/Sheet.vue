<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Sheet component - Side panel dialog with 4 side positions (top, right, bottom, left)
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { DialogRoot, DialogPortal, DialogOverlay, DialogContent } from 'radix-vue'
import { X } from 'lucide-vue-next'

defineOptions({
  name: 'UiSheet',
})

/**
 * Sheet Props
 * @prop open - Controlled open state
 * @prop defaultOpen - Initial open state for uncontrolled usage
 * @prop modal - Whether interaction outside is disabled while open
 * @prop side - Side position (top, right, bottom, left)
 * @prop class - CSS class names for the sheet
 */
interface Props {
  /** Controlled open state. */
  open?: boolean
  /** Initial open state for uncontrolled usage. */
  defaultOpen?: boolean
  /** Whether interaction outside is disabled while open. */
  modal?: boolean
  /** Side position (top, right, bottom, left). */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /** CSS class names for the sheet. */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'right',
  open: false,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const sideClasses = {
  top: 'inset-x-0 top-0 border-b',
  bottom: 'inset-x-0 bottom-0 border-t',
  left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
  right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
}
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-black/80" />
      <DialogContent
        :class="
          cn(
            'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out',
            sideClasses[side],
            props.class
          )
        "
      >
        <slot />
        <button
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          @click="emit('update:open', false)"
        >
          <X class="h-4 w-4" />
          <span class="sr-only">Close</span>
        </button>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
