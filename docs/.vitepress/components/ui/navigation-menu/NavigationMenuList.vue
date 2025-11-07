<script setup lang="ts">
import { NavigationMenuList, type NavigationMenuListProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ NavigationMenuListProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuList
    :class="cn('group flex flex-1 list-none items-center justify-center space-x-1', props.class)"
    v-bind="$props"
  >
    <slot />
  </NavigationMenuList>
</template>
