<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import type { ToasterProps } from 'vue-sonner'

interface Props extends /* @vue-ignore */ ToasterProps {
  theme?: 'light' | 'dark' | 'system'
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'light',
})
</script>

<template>
  <Toaster
    class="toaster group"
    :toast-options="{
      classes: {
        toast:
          'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton:
          'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton:
          'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      },
    }"
    v-bind="props"
  />
</template>
