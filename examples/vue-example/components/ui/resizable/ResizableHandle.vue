<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { GripVertical } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

interface Props {
  withHandle?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  withHandle: false,
})
</script>

<template>
  <div
    :class="cn(
      'splitpanes__splitter relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1',
      props.class
    )"
  >
    <div v-if="withHandle" class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
      <GripVertical class="h-2.5 w-2.5" />
    </div>
  </div>
</template>
