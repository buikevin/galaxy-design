<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { HoverCardRoot, type HoverCardRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ HoverCardRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <HoverCardRoot v-bind="delegatedProps">
    <slot />
  </HoverCardRoot>
</template>
