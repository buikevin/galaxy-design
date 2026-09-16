<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc DateTimePicker component - Date picker and time picker side by side
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { format, isValid } from 'date-fns'
import { cn } from '@/lib/utils'
import { DatePicker } from '@/components/date-picker'
import { TimePicker } from '@/components/time-picker'
import type { DateTimePickerProps } from './types'

defineOptions({
  name: 'UiDateTimePicker',
})

const props = withDefaults(defineProps<DateTimePickerProps>(), {
  datePlaceholder: 'Pick a date',
  timePlaceholder: 'Pick a time',
  timeFormat: '24h',
  dateFormat: 'PPP',
})

const emit = defineEmits<{
  'update:modelValue': [value: Date | undefined]
}>()

const isControlled = computed(() => props.modelValue !== undefined)
const internalDate = ref<Date | undefined>(props.modelValue)
const internalTime = ref<string | undefined>(formatTimeFromDate(props.modelValue, props.timeFormat))

watch(
  () => props.modelValue,
  (value) => {
    if (isControlled.value) {
      internalTime.value = formatTimeFromDate(value, props.timeFormat)
    }
  },
)

const currentDate = computed(() => (isControlled.value ? props.modelValue : internalDate.value))
const currentTime = computed(() =>
  isControlled.value ? formatTimeFromDate(props.modelValue, props.timeFormat) : internalTime.value,
)

function handleDateChange(newDate: Date | undefined) {
  if (!isControlled.value) {
    internalDate.value = newDate
  }
  combineDateAndTime(newDate, currentTime.value)
}

function handleTimeChange(newTime: string | undefined) {
  if (!isControlled.value) {
    internalTime.value = newTime
  }
  combineDateAndTime(currentDate.value, newTime)
}

function combineDateAndTime(selectedDate: Date | undefined, selectedTime: string | undefined) {
  if (!selectedDate) {
    emit('update:modelValue', undefined)
    return
  }

  if (!selectedTime) {
    const combined = new Date(selectedDate)
    combined.setHours(0, 0, 0, 0)
    emit('update:modelValue', combined)
    return
  }

  try {
    const combined = new Date(selectedDate)

    if (props.timeFormat === '24h') {
      const [hours = 0, minutes = 0] = selectedTime.split(':').map(Number)
      combined.setHours(hours, minutes, 0, 0)
    } else {
      const match = selectedTime.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
      if (match) {
        let hours = parseInt(match[1], 10)
        const minutes = parseInt(match[2], 10)
        const period = match[3].toUpperCase()

        if (period === 'PM' && hours !== 12) {
          hours += 12
        } else if (period === 'AM' && hours === 12) {
          hours = 0
        }

        combined.setHours(hours, minutes, 0, 0)
      }
    }

    if (isValid(combined)) {
      emit('update:modelValue', combined)
    }
  } catch (error) {
    console.error('Error combining date and time:', error)
    emit('update:modelValue', undefined)
  }
}

function formatTimeFromDate(value: Date | undefined, timeFormat: '12h' | '24h') {
  if (!value || !isValid(value)) {
    return undefined
  }

  return timeFormat === '24h' ? format(value, 'HH:mm') : format(value, 'hh:mm a')
}
</script>

<template>
  <div :class="cn('flex gap-2', props.class)">
    <div class="flex-1">
      <DatePicker
        :model-value="currentDate"
        :placeholder="datePlaceholder"
        :date-format="dateFormat"
        :disabled="disabled"
        @update:model-value="handleDateChange"
      />
    </div>
    <div class="flex-1">
      <TimePicker
        :model-value="currentTime"
        :placeholder="timePlaceholder"
        :format="timeFormat"
        :disabled="disabled"
        @update:model-value="handleTimeChange"
      />
    </div>
  </div>
</template>
