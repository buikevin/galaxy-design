<script setup lang="ts">
import { ref } from 'vue'

const date = ref<Date>(new Date())
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="rounded-lg border p-4 max-w-sm">
      <div class="text-sm text-muted-foreground mb-4">
        Selected: {{ date?.toLocaleDateString() || 'No date selected' }}
      </div>
      <div class="border rounded-md">
        <!-- Calendar component placeholder -->
        <div class="p-4 text-center text-sm text-muted-foreground">
          Calendar Component
        </div>
      </div>
    </div>
  </div>
</template>
