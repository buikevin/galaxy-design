<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed, ref } from 'vue'
import { Search } from 'lucide-vue-next'

interface Props {
  class?: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Type a command or search...',
})

const searchTerm = ref('')
const emit = defineEmits<{
  select: [value: string]
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
        props.class
      )
    "
  >
    <div class="flex items-center border-b px-3">
      <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        v-model="searchTerm"
        :placeholder="placeholder"
        class="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
    <div class="max-h-[300px] overflow-y-auto overflow-x-hidden p-1">
      <slot :search="searchTerm" />
    </div>
  </div>
</template>
