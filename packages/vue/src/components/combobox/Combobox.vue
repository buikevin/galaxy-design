<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Combobox component - Searchable select with filtering
-->
<script setup lang="ts">
import { computed, ref } from 'vue';
import { cn } from '@/lib/utils';
import type { ComboboxProps } from './types';

defineOptions({
  name: 'UiCombobox',
});

const props = withDefaults(defineProps<ComboboxProps>(), {
  placeholder: 'Select...',
  searchPlaceholder: 'Search...',
  emptyText: 'No results found.',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | undefined];
}>();

const open = ref(false);
const search = ref('');

const filtered = computed(() => {
  const query = search.value.toLowerCase();
  return props.options.filter(
    (option) => !query || option.label.toLowerCase().includes(query)
  );
});

const displayText = computed(() => {
  const selected = props.options.find((o) => o.value === props.modelValue);
  return selected?.label || props.placeholder;
});

const hasSelection = computed(() => Boolean(props.modelValue));
</script>

<template>
  <div class="relative">
    <button
      type="button"
      :disabled="disabled"
      :class="
        cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          !hasSelection && 'text-muted-foreground',
          props.class
        )
      "
      @click="open = !open"
    >
      {{ displayText }}
      <svg
        class="h-4 w-4 opacity-50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
      </svg>
    </button>
    <div
      v-if="open"
      class="absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md"
    >
      <input
        v-model="search"
        :placeholder="searchPlaceholder"
        class="flex h-9 w-full rounded-md bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground border-b"
        @keydown.escape="open = false"
      />
      <div class="max-h-[200px] overflow-y-auto p-1">
        <div
          v-if="filtered.length === 0"
          class="py-6 text-center text-sm text-muted-foreground"
        >
          {{ emptyText }}
        </div>
        <button
          v-for="option in filtered"
          :key="option.value"
          type="button"
          :class="
            cn(
              'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground',
              option.value === modelValue && 'bg-accent text-accent-foreground'
            )
          "
          @click="
            emit('update:modelValue', option.value);
            open = false;
          "
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>
