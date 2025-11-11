<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { Label as RadixLabel, type LabelProps as RadixLabelProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface LabelProps extends RadixLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<LabelProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadixLabel
    :class="cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      props.class
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </RadixLabel>
</template>
