<script setup lang="ts">
import { AlertDialogRoot, type AlertDialogProps } from 'radix-vue'
interface Props extends AlertDialogProps {}
defineProps<Props>()
</script>

<template>
  <AlertDialogRoot v-bind="$props"><slot /></AlertDialogRoot>
</template>
