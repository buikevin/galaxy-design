<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
const totalPages = 10

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages) {
    currentPage.value = page
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-center gap-2">
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-3 py-2 text-sm border rounded-md disabled:opacity-50"
      >
        Previous
      </button>

      <button
        v-for="page in 5"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-3 py-2 text-sm border rounded-md',
          currentPage === page ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
        ]"
      >
        {{ page }}
      </button>

      <span class="px-3 py-2 text-sm text-muted-foreground">...</span>

      <button
        @click="goToPage(totalPages)"
        :class="[
          'px-3 py-2 text-sm border rounded-md',
          currentPage === totalPages ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
        ]"
      >
        {{ totalPages }}
      </button>

      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-3 py-2 text-sm border rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>

    <div class="text-center text-sm text-muted-foreground">
      Page {{ currentPage }} of {{ totalPages }}
    </div>
  </div>
</template>
