<script setup lang="ts">
import { AlertDialogDescription, type AlertDialogDescriptionProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ AlertDialogDescriptionProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogDescription
    :class="cn('text-sm text-slate-500 dark:text-slate-400', props.class)"
    v-bind="$props"
  >
    <slot />
  </AlertDialogDescription>
</template>
