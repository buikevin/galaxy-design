<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc DatePicker component - Popover-triggered button with calendar
-->
<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { getLocalTimeZone } from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { PopoverRoot, PopoverTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'
import { PopoverContent } from '@/components/popover'
import { Calendar } from '@/components/calendar'
import type { DatePickerProps } from './types'

defineOptions({
  name: 'UiDatePicker',
})

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: 'Pick a date',
  dateFormat: 'PPP',
  align: 'start',
})

const emit = defineEmits<{
  'update:modelValue': [value: Date | undefined]
}>()

const displayText = computed(() =>
  props.modelValue
    ? format(props.modelValue.toDate(getLocalTimeZone()), props.dateFormat)
    : props.placeholder,
)
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
            !props.modelValue && 'text-muted-foreground',
            props.class
          )
        "
      >
        {{ displayText }}
        <CalendarIcon class="ml-2 h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" :align="align">
      <Calendar
        :model-value="modelValue"
        @update:model-value="emit('update:modelValue', $event)"
      />
    </PopoverContent>
  </PopoverRoot>
</template>
