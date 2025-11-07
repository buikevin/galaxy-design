<script setup lang="ts">
import { NavigationMenuItem, type NavigationMenuItemProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ NavigationMenuItemProps {}

defineProps<Props>()
</script>

<template>
  <NavigationMenuItem v-bind="$props">
    <slot />
  </NavigationMenuItem>
</template>
