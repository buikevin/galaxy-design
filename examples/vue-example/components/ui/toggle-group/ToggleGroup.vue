<script setup lang="ts">
import { type HTMLAttributes, provide, computed } from 'vue'
import { ToggleGroupRoot, type ToggleGroupRootProps } from 'radix-vue'
import { type ToggleVariants } from '../toggle'
import { cn } from '@/lib/utils'

interface Props extends ToggleGroupRootProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

provide('toggleGroupVariant', computed(() => props.variant))
provide('toggleGroupSize', computed(() => props.size))

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props
  return delegated
})
</script>

<template>
  <ToggleGroupRoot
    :class="cn('flex items-center justify-center gap-1', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </ToggleGroupRoot>
</template>
