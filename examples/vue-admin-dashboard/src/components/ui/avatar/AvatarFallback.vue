<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AvatarFallback, type AvatarFallbackProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends AvatarFallbackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AvatarFallback
    :class="cn('flex h-full w-full items-center justify-center rounded-full bg-muted', props.class)"
    v-bind="delegatedProps"
  ><slot /></AvatarFallback>
</template>
