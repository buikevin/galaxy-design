<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { Toggle as TogglePrimitive, type ToggleProps } from 'radix-vue'
import { type ToggleVariants, toggleVariants } from './variants'
import { cn } from '@/lib/utils'

interface Props extends ToggleProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props
  return delegated
})
</script>

<template>
  <TogglePrimitive
    :class="cn(toggleVariants({ variant, size }), props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TogglePrimitive>
</template>
