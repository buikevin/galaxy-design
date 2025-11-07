<script setup lang="ts">
import { ref } from 'vue'

interface DateRange {
  start: Date | null
  end: Date | null
}

const range = ref<DateRange>({
  start: new Date(),
  end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="rounded-lg border p-4 max-w-md">
      <div class="text-sm text-muted-foreground mb-4">
        Selected Range:
        <span v-if="range.start && range.end">
          {{ range.start.toLocaleDateString() }} - {{ range.end.toLocaleDateString() }}
        </span>
        <span v-else>No range selected</span>
      </div>
      <div class="border rounded-md">
        <!-- Calendar Range component placeholder -->
        <div class="p-4 text-center text-sm text-muted-foreground">
          Calendar Range Component
        </div>
      </div>
    </div>
  </div>
</template>
