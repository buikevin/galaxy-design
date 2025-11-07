<script setup lang="ts">
import { AlertDialogTitle, type AlertDialogTitleProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ AlertDialogTitleProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogTitle
    :class="cn('text-lg font-semibold', props.class)"
    v-bind="$props"
  >
    <slot />
  </AlertDialogTitle>
</template>
