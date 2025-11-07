<script setup lang="ts">
import { ContextMenuLabel, type ContextMenuLabelProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuLabelProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <ContextMenuLabel
    :class="cn('px-2 py-1.5 text-sm font-semibold', props.class)"
    v-bind="$props"
  >
    <slot />
  </ContextMenuLabel>
</template>
