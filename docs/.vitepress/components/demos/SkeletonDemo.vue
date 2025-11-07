<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="space-y-3 max-w-md">
      <!-- Header skeleton -->
      <div class="flex items-center space-x-4">
        <div class="h-12 w-12 rounded-full bg-muted animate-pulse"></div>
        <div class="space-y-2 flex-1">
          <div class="h-4 w-3/4 bg-muted rounded animate-pulse"></div>
          <div class="h-3 w-1/2 bg-muted rounded animate-pulse"></div>
        </div>
      </div>

      <!-- Content skeleton -->
      <div class="space-y-2 pt-4">
        <div class="h-4 w-full bg-muted rounded animate-pulse"></div>
        <div class="h-4 w-5/6 bg-muted rounded animate-pulse"></div>
        <div class="h-4 w-4/6 bg-muted rounded animate-pulse"></div>
      </div>

      <!-- Image skeleton -->
      <div class="h-48 w-full bg-muted rounded-md animate-pulse"></div>

      <!-- Footer skeleton -->
      <div class="flex space-x-2 pt-2">
        <div class="h-8 w-20 bg-muted rounded animate-pulse"></div>
        <div class="h-8 w-20 bg-muted rounded animate-pulse"></div>
      </div>
    </div>
  </div>
</template>
