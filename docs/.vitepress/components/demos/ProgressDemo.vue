<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(13)
let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(() => {
    progress.value = (progress.value + 10) % 100
  }, 500)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div class="w-full max-w-md space-y-2">
    <div class="h-2 w-full overflow-hidden rounded-full bg-secondary">
      <div
        class="h-full bg-primary transition-all duration-300 ease-in-out"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
    <p class="text-sm text-muted-foreground text-center">{{ progress }}%</p>
  </div>
</template>
