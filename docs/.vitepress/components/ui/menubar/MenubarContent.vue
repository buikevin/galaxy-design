<script setup lang="ts">
import { MenubarContent, type MenubarContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ MenubarContentProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <MenubarContent
    :class="cn('z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md', props.class)"
    v-bind="$props"
  >
    <slot />
  </MenubarContent>
</template>
