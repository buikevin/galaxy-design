<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { NavigationMenuRoot, type NavigationMenuRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends NavigationMenuRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <NavigationMenuRoot
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </NavigationMenuRoot>
</template>
