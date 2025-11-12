<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-vue-next'

interface Props {
  /**
   * CSS class
   */
  class?: string
  /**
   * Current page number (1-indexed)
   */
  currentPage?: number
  /**
   * Total number of pages
   */
  totalPages?: number
  /**
   * Number of page buttons to show
   * @default 1
   */
  siblingCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  totalPages: 1,
  siblingCount: 1,
})

const emit = defineEmits<{
  pageChange: [page: number]
}>()

const pages = computed(() => {
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  const totalPageNumbers = props.siblingCount + 5

  if (totalPageNumbers >= props.totalPages) {
    return range(1, props.totalPages)
  }

  const leftSiblingIndex = Math.max(props.currentPage - props.siblingCount, 1)
  const rightSiblingIndex = Math.min(
    props.currentPage + props.siblingCount,
    props.totalPages
  )

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < props.totalPages - 1

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * props.siblingCount
    const leftRange = range(1, leftItemCount)
    return [...leftRange, 'dots', props.totalPages]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * props.siblingCount
    const rightRange = range(props.totalPages - rightItemCount + 1, props.totalPages)
    return [1, 'dots', ...rightRange]
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [1, 'dots', ...middleRange, 'dots', props.totalPages]
  }

  return []
})

const handlePageChange = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('pageChange', page)
  }
}
</script>

<template>
  <nav
    role="navigation"
    aria-label="pagination"
    :class="cn('flex items-center justify-center', props.class)"
  >
    <ul class="flex items-center gap-1">
      <li>
        <button
          type="button"
          :class="
            cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
              currentPage === 1 && 'opacity-50 cursor-not-allowed'
            )
          "
          :disabled="currentPage === 1"
          @click="handlePageChange(currentPage - 1)"
          aria-label="Go to previous page"
        >
          <ChevronLeft class="h-4 w-4" />
        </button>
      </li>

      <li v-for="(page, index) in pages" :key="index">
        <span
          v-if="page === 'dots'"
          class="flex h-9 w-9 items-center justify-center text-sm"
        >
          <MoreHorizontal class="h-4 w-4" />
        </span>
        <button
          v-else
          type="button"
          :class="
            cn(
              'inline-flex h-9 min-w-[36px] items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              currentPage === page &&
                'border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
            )
          "
          @click="handlePageChange(page as number)"
          :aria-label="`Go to page ${page}`"
          :aria-current="currentPage === page ? 'page' : undefined"
        >
          {{ page }}
        </button>
      </li>

      <li>
        <button
          type="button"
          :class="
            cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
              currentPage === totalPages && 'opacity-50 cursor-not-allowed'
            )
          "
          :disabled="currentPage === totalPages"
          @click="handlePageChange(currentPage + 1)"
          aria-label="Go to next page"
        >
          <ChevronRight class="h-4 w-4" />
        </button>
      </li>
    </ul>
  </nav>
</template>
