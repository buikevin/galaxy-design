<script setup lang="ts">
import Separator from '@/components/ui/separator/Separator.vue'
</script>

<template>
  <div class="w-full max-w-sm space-y-4">
    <div>
      <h4 class="text-sm font-medium">Radix Primitives</h4>
      <p class="text-sm text-slate-500 dark:text-slate-400">An open-source UI component library.</p>
    </div>
    <Separator />
    <div class="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
</template>
