<script setup lang="ts">
import { type HTMLAttributes, inject, computed, type ComputedRef } from 'vue'
import { ToggleGroupItem as ToggleGroupItemPrimitive, type ToggleGroupItemProps } from 'radix-vue'
import { toggleVariants, type ToggleVariants } from '../toggle'
import { cn } from '@/lib/utils'

interface Props extends ToggleGroupItemProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const groupVariant = inject<ComputedRef<ToggleVariants['variant']>>('toggleGroupVariant')
const groupSize = inject<ComputedRef<ToggleVariants['size']>>('toggleGroupSize')

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props
  return delegated
})
</script>

<template>
  <ToggleGroupItemPrimitive
    :class="cn(
      toggleVariants({
        variant: ((groupVariant as any)?.value) || props.variant,
        size: ((groupSize as any)?.value) || props.size,
      }),
      props.class
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </ToggleGroupItemPrimitive>
</template>
