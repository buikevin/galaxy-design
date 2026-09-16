<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc TimePicker component - Hour/minute (and AM/PM) selection popover
-->
<script setup lang="ts">
import { computed } from 'vue'
import { Clock } from 'lucide-vue-next'
import { PopoverRoot, PopoverTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'
import { PopoverContent } from '@/components/popover'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/select'
import type { TimePickerProps } from './types'

defineOptions({
  name: 'UiTimePicker',
})

const props = withDefaults(defineProps<TimePickerProps>(), {
  placeholder: 'Pick a time',
  format: '24h',
  align: 'start',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | undefined]
}>()

const parsed = computed(() => {
  const value = props.modelValue
  if (!value) return { hour: '', minute: '', period: 'AM' as 'AM' | 'PM' }

  if (props.format === '24h') {
    const [hour = '', minute = ''] = value.split(':')
    return { hour, minute, period: 'AM' as 'AM' | 'PM' }
  }

  const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return { hour: '', minute: '', period: 'AM' as 'AM' | 'PM' }

  return {
    hour: match[1],
    minute: match[2],
    period: match[3].toUpperCase() as 'AM' | 'PM',
  }
})

const hourOptions =
  props.format === '24h'
    ? Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
    : Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))

const minuteOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

function handleTimeChange(newHour: string, newMinute: string, newPeriod: 'AM' | 'PM') {
  if (!newHour || !newMinute) {
    emit('update:modelValue', undefined)
    return
  }

  if (props.format === '24h') {
    emit('update:modelValue', `${newHour}:${newMinute}`)
  } else {
    emit('update:modelValue', `${newHour}:${newMinute} ${newPeriod}`)
  }
}

const displayTime = computed(() => {
  if (!parsed.value.hour || !parsed.value.minute) return props.placeholder
  if (props.format === '24h') return `${parsed.value.hour}:${parsed.value.minute}`
  return `${parsed.value.hour}:${parsed.value.minute} ${parsed.value.period}`
})

function handleHourChange(value: string) {
  handleTimeChange(value, parsed.value.minute, parsed.value.period)
}

function handleMinuteChange(value: string) {
  handleTimeChange(parsed.value.hour, value, parsed.value.period)
}

function handlePeriodChange(value: string | number | boolean) {
  handleTimeChange(parsed.value.hour, parsed.value.minute, value === 'PM' ? 'PM' : 'AM')
}
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
        <span>{{ displayTime }}</span>
        <Clock class="ml-2 h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-3" :align="align">
      <div class="flex items-center gap-2">
        <div class="flex-1">
          <Select
            :model-value="parsed.hour || undefined"
            @update:model-value="handleHourChange"
          >
            <SelectTrigger class="w-[70px]">
              <SelectValue placeholder="HH" />
            </SelectTrigger>
            <SelectContent class="max-h-[200px] overflow-y-auto">
              <SelectItem v-for="hour in hourOptions" :key="hour" :value="hour">
                {{ hour }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <span class="text-lg font-semibold">:</span>

        <div class="flex-1">
          <Select
            :model-value="parsed.minute || undefined"
            @update:model-value="handleMinuteChange"
          >
            <SelectTrigger class="w-[70px]">
              <SelectValue placeholder="MM" />
            </SelectTrigger>
            <SelectContent class="max-h-[200px] overflow-y-auto">
              <SelectItem v-for="minute in minuteOptions" :key="minute" :value="minute">
                {{ minute }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <template v-if="format === '12h'">
          <span class="text-lg font-semibold">-</span>
          <div class="flex-1">
            <Select
              :model-value="parsed.period"
              @update:model-value="handlePeriodChange"
            >
              <SelectTrigger class="w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AM">AM</SelectItem>
                <SelectItem value="PM">PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </template>
      </div>
    </PopoverContent>
  </PopoverRoot>
</template>
