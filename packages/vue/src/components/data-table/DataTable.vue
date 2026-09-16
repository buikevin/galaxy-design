<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Data Table - Sortable, filterable, paginated table
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { cn } from '@/lib/utils';
import type { DataTableColumn, SortDirection } from './types';

defineOptions({
  name: 'UiDataTable',
});

const props = withDefaults(defineProps<{
  columns: DataTableColumn[];
  data: Record<string, unknown>[];
  searchable?: boolean;
  pageSize?: number;
  class?: string;
  emptyText?: string;
}>(), {
  searchable: true,
  pageSize: 10,
  emptyText: 'No results.',
});

const search = ref('');
const sortKey = ref<string | null>(null);
const sortDir = ref<SortDirection>(null);
const page = ref(0);

const filtered = computed(() => {
  if (!search.value) return props.data;
  const query = search.value.toLowerCase();
  return props.data.filter((row) =>
    props.columns.some((col) => {
      const val = row[col.key];
      return val != null && String(val).toLowerCase().includes(query);
    }),
  );
});

const sorted = computed(() => {
  if (!sortDir.value || !sortKey.value) return filtered.value;
  return [...filtered.value].sort((a, b) => {
    const av = a[sortKey.value!];
    const bv = b[sortKey.value!];
    if (av == null || bv == null) return 0;
    if (typeof av === 'number' && typeof bv === 'number') {
      return sortDir.value === 'asc' ? av - bv : bv - av;
    }
    const cmp = String(av).localeCompare(String(bv));
    return sortDir.value === 'asc' ? cmp : -cmp;
  });
});

const pageCount = computed(() => Math.max(1, Math.ceil(sorted.value.length / props.pageSize)));
const currentPage = computed(() => Math.min(page.value, pageCount.value - 1));
const paginated = computed(() =>
  sorted.value.slice(currentPage.value * props.pageSize, (currentPage.value + 1) * props.pageSize)
);

function handleSort(key: string) {
  if (sortKey.value === key) {
    if (sortDir.value === 'asc') { sortDir.value = 'desc'; }
    else if (sortDir.value === 'desc') { sortDir.value = null; sortKey.value = null; }
    else { sortDir.value = 'asc'; }
  } else {
    sortKey.value = key;
    sortDir.value = 'asc';
  }
}

watch(search, () => { page.value = 0; });
</script>

<template>
  <div :class="cn('space-y-4', props.class)">
    <input
      v-if="searchable"
      type="text"
      placeholder="Search..."
      v-model="search"
      class="flex h-10 w-full max-w-sm rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    />

    <div class="rounded-md border">
      <table class="w-full caption-bottom text-sm">
        <thead>
          <tr class="border-b bg-muted/50">
            <th
              v-for="col in columns"
              :key="col.key"
              :class="cn(
                'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
                col.sortable !== false && 'cursor-pointer select-none hover:text-foreground'
              )"
              @click="handleSort(col.key)"
            >
              {{ col.header }}
              <span v-if="sortKey === col.key" class="ml-1 inline-block">
                {{ sortDir === 'asc' ? '↑' : sortDir === 'desc' ? '↓' : '' }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="paginated.length === 0">
            <td :colspan="columns.length" class="h-24 text-center text-muted-foreground">
              {{ emptyText }}
            </td>
          </tr>
          <tr
            v-for="(row, rowIndex) in paginated"
            :key="rowIndex"
            class="border-b transition-colors hover:bg-muted/50"
          >
            <td v-for="col in columns" :key="col.key" class="p-4 align-middle text-sm">
              {{ String(row[col.key] ?? '') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="pageCount > 1" class="flex items-center justify-between px-2">
      <span class="text-sm text-muted-foreground">
        Page {{ currentPage + 1 }} of {{ pageCount }}
      </span>
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="inline-flex h-8 items-center justify-center rounded-md border px-3 text-sm font-medium disabled:pointer-events-none disabled:opacity-50"
          :disabled="currentPage === 0"
          @click="page = Math.max(0, currentPage - 1)"
        >
          Previous
        </button>
        <button
          type="button"
          class="inline-flex h-8 items-center justify-center rounded-md border px-3 text-sm font-medium"
          :disabled="currentPage >= pageCount - 1"
          @click="page = Math.min(pageCount - 1, currentPage + 1)"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
