<script setup lang="ts">
import { cn } from '@/lib/utils'
import { RangeCalendar } from 'radix-vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface Props {
  class?: string
  modelValue?: { start: Date; end: Date }
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: { start: Date; end: Date }]
}>()
</script>

<template>
  <RangeCalendar
    v-bind="props"
    :class="cn('p-3', props.class)"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #default="{ grid, weekDays }">
      <div class="space-y-4">
        <div class="flex justify-center pt-1 relative items-center">
          <button
            type="button"
            class="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
          >
            <ChevronLeft class="h-4 w-4" />
          </button>
          <div class="text-sm font-medium">
            {{ grid.month }} {{ grid.year }}
          </div>
          <button
            type="button"
            class="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
          >
            <ChevronRight class="h-4 w-4" />
          </button>
        </div>
        <table class="w-full border-collapse">
          <thead>
            <tr class="flex">
              <th
                v-for="day in weekDays"
                :key="day"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
              >
                {{ day }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(week, i) in grid.weeks" :key="i" class="flex w-full mt-2">
              <td
                v-for="day in week"
                :key="day.date"
                class="h-9 w-9 text-center text-sm p-0"
              >
                <button
                  type="button"
                  :class="
                    cn(
                      'h-9 w-9 p-0 font-normal inline-flex items-center justify-center rounded-md text-sm hover:bg-accent hover:text-accent-foreground',
                      day.isInRange &&
                        'bg-accent text-accent-foreground',
                      (day.isRangeStart || day.isRangeEnd) &&
                        'bg-primary text-primary-foreground hover:bg-primary'
                    )
                  "
                >
                  {{ day.date.getDate() }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </RangeCalendar>
</template>
