<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <button
      @click="isOpen = true"
      class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Open Dialog (Simple Test)
    </button>

    <!-- Dialog Overlay -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center"
        @click="isOpen = false"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- Dialog Content -->
        <div
          class="relative z-[10000] bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
          @click.stop
        >
          <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Edit Profile (Test)
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Make changes to your profile here. Click save when you're done.
          </p>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div class="mt-6 flex justify-end gap-2">
            <button
              @click="isOpen = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              @click="isOpen = false"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
