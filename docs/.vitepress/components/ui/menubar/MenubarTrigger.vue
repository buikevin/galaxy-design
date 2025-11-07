<script setup lang="ts">
import { MenubarTrigger, type MenubarTriggerProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ MenubarTriggerProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <MenubarTrigger
    :class="cn('flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground', props.class)"
    v-bind="$props"
  >
    <slot />
  </MenubarTrigger>
</template>
