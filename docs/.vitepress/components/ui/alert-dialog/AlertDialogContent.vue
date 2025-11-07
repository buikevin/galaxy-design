<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AlertDialogContent, AlertDialogPortal, AlertDialogOverlay, type AlertDialogContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ AlertDialogContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay class="fixed inset-0 z-50 bg-black/80" />
    <AlertDialogContent
      :class="cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg', props.class)"
      v-bind="delegatedProps"
    ><slot /></AlertDialogContent>
  </AlertDialogPortal>
</template>
