<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="rounded-lg border p-12 text-center max-w-md">
      <div class="mx-auto mb-4 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-muted-foreground"
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold mb-2">No content yet</h3>
      <p class="text-sm text-muted-foreground mb-4">
        You haven't created any content. Get started by creating your first item.
      </p>
      <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
        Create Item
      </button>
    </div>
  </div>
</template>
