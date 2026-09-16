<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc DateRangePicker component - Range selection popover
-->
<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { PopoverRoot, PopoverTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'
import { PopoverContent } from '@/components/popover'
import { CalendarRange } from '@/components/calendar-range'
import type { DateRangePickerProps } from './types'

defineOptions({
  name: 'UiDateRangePicker',
})

const props = withDefaults(defineProps<DateRangePickerProps>(), {
  placeholder: 'Pick a date range',
  dateFormat: 'LLL dd, y',
  align: 'start',
})

const emit = defineEmits<{
  'update:modelValue': [value: { start: Date; end: Date } | undefined]
}>()

const displayText = computed(() => {
  if (!props.modelValue?.start) return props.placeholder
  if (!props.modelValue.end) {
    return format(props.modelValue.start, props.dateFormat)
  }
  return `${format(props.modelValue.start, props.dateFormat)} - ${format(props.modelValue.end, props.dateFormat)}`
})

const hasRange = computed(() => Boolean(props.modelValue?.start))
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :disabled="disabled"
        :class="
          cn(
            'w-full justify-between text-left font-normal',
            !hasRange && 'text-muted-foreground',
            props.class
          )
        "
      >
        {{ displayText }}
        <CalendarIcon class="ml-2 h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" :align="align">
      <CalendarRange
        :model-value="modelValue"
        @update:model-value="emit('update:modelValue', $event)"
      />
    </PopoverContent>
  </PopoverRoot>
</template>
