<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import {
  CalendarRoot,
  CalendarHeader,
  CalendarHeading,
  CalendarPrev,
  CalendarNext,
  CalendarGrid,
  CalendarGridHead,
  CalendarGridBody,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarCell,
  CalendarCellTrigger,
  type CalendarRootEmits,
  type CalendarRootProps,
} from 'radix-vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<CalendarRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CalendarRootEmits>()
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    v-bind="props"
    :class="cn('p-3', props.class)"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <CalendarHeader class="relative flex items-center justify-center pt-1">
      <CalendarPrev
        class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-transparent p-0 opacity-50 hover:opacity-100"
      >
        <ChevronLeft class="h-4 w-4" />
      </CalendarPrev>
      <CalendarHeading class="text-sm font-medium" />
      <CalendarNext
        class="absolute right-1 inline-flex h-7 w-7 items-center justify-center rounded-md bg-transparent p-0 opacity-50 hover:opacity-100"
      >
        <ChevronRight class="h-4 w-4" />
      </CalendarNext>
    </CalendarHeader>
    <div class="pt-4">
      <CalendarGrid>
        <CalendarGridHead>
          <CalendarGridRow>
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody class="mt-2">
          <template v-for="month in grid" :key="month.value.toString()">
            <CalendarGridRow v-for="week in month.rows" :key="`week-${week[0]}`" class="mt-2 w-full">
              <CalendarCell v-for="day in week" :key="day" :date="day" class="relative h-9 w-9 p-0 text-center text-sm">
                <CalendarCellTrigger
                  :day="day"
                  :month="month.value"
                  class="inline-flex h-9 w-9 items-center justify-center rounded-md p-0 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[selected]:bg-primary data-[selected]:font-medium data-[selected]:text-primary-foreground data-[today]:bg-accent data-[today]:text-accent-foreground data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 data-[disabled]:pointer-events-none data-[unavailable]:pointer-events-none data-[unavailable]:text-muted-foreground data-[unavailable]:line-through"
                />
              </CalendarCell>
            </CalendarGridRow>
          </template>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
