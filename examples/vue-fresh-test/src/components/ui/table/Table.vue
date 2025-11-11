<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const className = computed(() => cn('w-full caption-bottom text-sm', props.class))
</script>

<template>
  <div class="relative w-full overflow-auto">
    <table :class="className">
      <slot />
    </table>
  </div>
</template>

<script lang="ts">
export const TableHeader = {
  name: 'TableHeader',
  props: { class: String },
  template: `
    <thead :class="cn('[&_tr]:border-b', $props.class)">
      <slot />
    </thead>
  `,
}

export const TableBody = {
  name: 'TableBody',
  props: { class: String },
  template: `
    <tbody :class="cn('[&_tr:last-child]:border-0', $props.class)">
      <slot />
    </tbody>
  `,
}

export const TableFooter = {
  name: 'TableFooter',
  props: { class: String },
  template: `
    <tfoot :class="cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', $props.class)">
      <slot />
    </tfoot>
  `,
}

export const TableRow = {
  name: 'TableRow',
  props: { class: String },
  template: `
    <tr :class="cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', $props.class)">
      <slot />
    </tr>
  `,
}

export const TableHead = {
  name: 'TableHead',
  props: { class: String },
  template: `
    <th :class="cn('h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', $props.class)">
      <slot />
    </th>
  `,
}

export const TableCell = {
  name: 'TableCell',
  props: { class: String },
  template: `
    <td :class="cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', $props.class)">
      <slot />
    </td>
  `,
}

export const TableCaption = {
  name: 'TableCaption',
  props: { class: String },
  template: `
    <caption :class="cn('mt-4 text-sm text-muted-foreground', $props.class)">
      <slot />
    </caption>
  `,
}
</script>
