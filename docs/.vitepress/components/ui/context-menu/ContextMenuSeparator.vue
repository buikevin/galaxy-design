<script setup lang="ts">
import { ContextMenuSeparator, type ContextMenuSeparatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuSeparatorProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <ContextMenuSeparator
    :class="cn('-mx-1 my-1 h-px bg-muted', props.class)"
    v-bind="$props"
  />
</template>
