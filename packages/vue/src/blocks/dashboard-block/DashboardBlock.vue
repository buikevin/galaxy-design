<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Dashboard block - Sidebar navigation + stat cards + data table
-->
<script setup lang="ts">
import { computed, ref } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'UiDashboardBlock',
});

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface StatCard {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

interface DashboardTableColumn {
  key: string;
  header: string;
}

const props = withDefaults(
  defineProps<{
    navItems: NavItem[];
    stats: StatCard[];
    columns: DashboardTableColumn[];
    tableData: Record<string, unknown>[];
    title?: string;
    class?: string;
  }>(),
  {
    title: 'Dashboard',
  }
);

const sidebarOpen = ref(true);

const visibleData = computed(() => props.tableData.slice(0, 5));
</script>

<template>
  <div :class="cn('flex min-h-screen bg-background', props.class)">
    <aside
      :class="
        cn(
          'border-r bg-card transition-all duration-200',
          sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
        )
      "
    >
      <div class="flex h-16 items-center border-b px-4">
        <span class="text-lg font-semibold">{{ title }}</span>
      </div>
      <nav class="space-y-1 p-2">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          :class="
            cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent',
              item.active && 'bg-accent font-medium text-accent-foreground'
            )
          "
        >
          {{ item.label }}
        </a>
      </nav>
    </aside>

    <main class="flex-1 overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <button
          type="button"
          class="inline-flex h-8 w-8 items-center justify-center rounded-md border"
          @click="sidebarOpen = !sidebarOpen"
        >
          ☰
        </button>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-lg border bg-card p-6 shadow-sm"
        >
          <p class="text-sm font-medium text-muted-foreground">
            {{ stat.label }}
          </p>
          <p class="text-2xl font-semibold mt-2">{{ stat.value }}</p>
          <p
            :class="
              cn(
                'text-xs mt-1',
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              )
            "
          >
            {{ stat.trend === 'up' ? '↑' : '↓' }} {{ stat.change }}
          </p>
        </div>
      </div>

      <div class="rounded-lg border bg-card shadow-sm">
        <div class="border-b px-4 py-3">
          <h3 class="text-sm font-medium">Recent Activity</h3>
        </div>
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b bg-muted/50">
              <th
                v-for="col in columns"
                :key="col.key"
                class="h-10 px-4 text-left font-medium text-muted-foreground"
              >
                {{ col.header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in visibleData"
              :key="i"
              class="border-b hover:bg-muted/50"
            >
              <td v-for="col in columns" :key="col.key" class="p-4">
                {{ String(row[col.key] ?? '') }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>
