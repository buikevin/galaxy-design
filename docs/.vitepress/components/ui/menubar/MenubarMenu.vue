<script setup lang="ts">
import { MenubarMenu, type MenubarMenuProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ MenubarMenuProps {}

defineProps<Props>()
</script>

<template>
  <MenubarMenu v-bind="$props">
    <slot />
  </MenubarMenu>
</template>
