<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from 'radix-vue'
import { X } from 'lucide-vue-next'

interface Props {
  class?: string
  open?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
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
  <Dialog :open="open" @update:open="emit('update:open', $event)">
    <DialogContent
      :class="
        cn(
          'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
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
  </Dialog>
</template>
