<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner, type ScrollAreaRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import ScrollBar from './ScrollBar.vue'

interface Props extends ScrollAreaRootProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <ScrollAreaRoot :class="cn('relative overflow-hidden', props.class)" v-bind="props">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
