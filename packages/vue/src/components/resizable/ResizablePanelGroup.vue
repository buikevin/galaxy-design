<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SplitterGroup, type SplitterGroupProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends SplitterGroupProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
})

const delegatedProps = computed(() => {
  const { class: _class, ...delegated } = props
  return delegated
})
</script>

<template>
  <SplitterGroup
    v-bind="delegatedProps"
    :class="cn('flex h-full w-full data-[orientation=vertical]:flex-col', props.class)"
  >
    <slot />
  </SplitterGroup>
</template>
