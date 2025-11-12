<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { CollapsibleRoot, type CollapsibleRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends CollapsibleRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <CollapsibleRoot
    :class="cn('', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </CollapsibleRoot>
</template>
