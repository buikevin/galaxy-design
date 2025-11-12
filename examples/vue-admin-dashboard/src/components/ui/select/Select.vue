<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SelectRoot, type SelectRootProps } from 'radix-vue'

interface Props extends SelectRootProps {
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
