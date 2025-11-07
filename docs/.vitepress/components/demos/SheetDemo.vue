<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const name = ref('')
const email = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <button
      @click="isOpen = true"
      class="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium max-w-fit"
    >
      Open Sheet
    </button>

    <!-- Sheet overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-50"
      @click="isOpen = false"
    >
      <!-- Sheet content -->
      <div
        class="fixed top-0 right-0 h-full w-80 bg-background border-l p-6 shadow-lg"
        @click.stop
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">Edit Profile</h2>
          <button
            @click="isOpen = false"
            class="rounded-sm opacity-70 hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              class="w-full mt-1.5 px-3 py-2 border rounded-md text-sm"
              v-model="name"
            />
          </div>

          <div>
            <label class="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full mt-1.5 px-3 py-2 border rounded-md text-sm"
              v-model="email"
            />
          </div>

          <button class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
