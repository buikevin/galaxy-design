<script setup lang="ts">
import { MenubarItem, type MenubarItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ MenubarItemProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <MenubarItem
    :class="cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class)"
    v-bind="$props"
  >
    <slot />
  </MenubarItem>
</template>
