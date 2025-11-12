<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { DropdownMenuRoot, type DropdownMenuRootProps } from 'radix-vue'

interface Props extends DropdownMenuRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <DropdownMenuRoot v-bind="delegatedProps">
    <slot />
  </DropdownMenuRoot>
</template>
