<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { MenubarRoot, type MenubarRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ MenubarRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <MenubarRoot
    :class="cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </MenubarRoot>
</template>
