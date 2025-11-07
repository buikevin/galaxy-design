<script setup lang="ts">
import { AlertDialogRoot, type AlertDialogRootProps } from 'radix-vue'
interface Props extends /* @vue-ignore */ AlertDialogRootProps {}
defineProps<Props>()
</script>

<template>
  <AlertDialogRoot v-bind="$props"><slot /></AlertDialogRoot>
</template>
