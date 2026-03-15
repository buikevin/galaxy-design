<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SplitterResizeHandle, type SplitterResizeHandleProps } from 'radix-vue'
import { GripVertical } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

interface Props extends SplitterResizeHandleProps {
  withHandle?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  withHandle: false,
})

const delegatedProps = computed(() => {
  const { withHandle: _withHandle, class: _class, ...delegated } = props
  return delegated
})
</script>

<template>
  <SplitterResizeHandle
    v-bind="delegatedProps"
    :class="cn(
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0',
      props.class
    )"
  >
    <div v-if="withHandle" class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
      <GripVertical class="h-2.5 w-2.5 data-[orientation=vertical]:rotate-90" />
    </div>
  </SplitterResizeHandle>
</template>
