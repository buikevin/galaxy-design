<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SelectRoot, type SelectRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ SelectRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <SelectRoot v-bind="delegatedProps">
    <slot />
  </SelectRoot>
</template>
