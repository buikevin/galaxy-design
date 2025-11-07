<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ContextMenuRoot, type ContextMenuRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <ContextMenuRoot v-bind="delegatedProps">
    <slot />
  </ContextMenuRoot>
</template>
