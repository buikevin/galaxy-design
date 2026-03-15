<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SplitterPanel, type SplitterPanelProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends SplitterPanelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _class, ...delegated } = props
  return delegated
})
</script>

<template>
  <SplitterPanel
    v-bind="delegatedProps"
    :class="cn('relative', props.class)"
  >
    <slot />
  </SplitterPanel>
</template>
