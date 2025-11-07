<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ DialogDescriptionProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-slate-500 dark:text-slate-400', props.class)"
    v-bind="$props"
  >
    <slot />
  </DialogDescription>
</template>
