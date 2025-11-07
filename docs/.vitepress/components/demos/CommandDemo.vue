<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const commands = [
  { name: 'Calendar', shortcut: 'Ctrl+C' },
  { name: 'Search Emoji', shortcut: 'Ctrl+E' },
  { name: 'Calculator', shortcut: 'Ctrl+K' },
]

const filteredCommands = ref(commands)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="rounded-lg border max-w-md">
      <div class="border-b p-3">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Type a command or search..."
          class="w-full bg-transparent outline-none text-sm"
        />
      </div>
      <div class="p-2">
        <div class="text-xs text-muted-foreground px-2 py-1.5">Suggestions</div>
        <div
          v-for="cmd in filteredCommands"
          :key="cmd.name"
          class="flex items-center justify-between px-2 py-1.5 rounded-sm hover:bg-accent cursor-pointer"
        >
          <span class="text-sm">{{ cmd.name }}</span>
          <kbd class="text-xs bg-muted px-1.5 py-0.5 rounded">{{ cmd.shortcut }}</kbd>
        </div>
      </div>
    </div>
  </div>
</template>
