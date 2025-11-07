<script setup lang="ts">
import { NavigationMenuLink, type NavigationMenuLinkProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ NavigationMenuLinkProps {}

defineProps<Props>()
</script>

<template>
  <NavigationMenuLink v-bind="$props">
    <slot />
  </NavigationMenuLink>
</template>
