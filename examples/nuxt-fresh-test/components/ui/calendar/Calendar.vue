<script setup lang="ts">
import { cn } from '@/lib/utils'
import { CalendarRoot } from 'radix-vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface Props {
  class?: string
  modelValue?: Date
  placeholder?: Date
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: Date]
}>()
</script>

<template>
  <CalendarRoot
    v-bind="props as any"
    :class="cn('p-3', props.class)"
    @update:model-value="emit('update:modelValue', $event as any)"
  >
    <template #default="{ grid, weekDays }">
      <div class="space-y-4">
        <div class="flex justify-center pt-1 relative items-center">
          <button
            type="button"
            class="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <ChevronLeft class="h-4 w-4" />
          </button>
          <div class="text-sm font-medium">
            {{ (grid as any)[0]?.month }} {{ (grid as any)[0]?.year }}
          </div>
          <button
            type="button"
            class="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <ChevronRight class="h-4 w-4" />
          </button>
        </div>
        <table class="w-full border-collapse space-y-1">
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
            <tr v-for="(week, i) in (grid as any)[0]?.weeks || []" :key="i" class="flex w-full mt-2">
              <td
                v-for="day in week"
                :key="day.date"
                class="h-9 w-9 text-center text-sm p-0 relative"
              >
                <button
                  type="button"
                  :class="
                    cn(
                      'h-9 w-9 p-0 font-normal inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                      day.isSelected &&
                        'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                      day.isToday && 'bg-accent text-accent-foreground',
                      !day.isCurrentMonth && 'text-muted-foreground opacity-50'
                    )
                  "
                  :disabled="day.isDisabled"
                >
                  {{ day.date.getDate() }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </CalendarRoot>
</template>
