<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { cn } from '@/lib/utils'
import type { GaugeChartProps } from './types'

// Register ECharts components
use([
  GaugeChart,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer,
])

export interface Props extends GaugeChartProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
  width: '100%',
  theme: 'light',
  min: 0,
  max: 100,
  startAngle: 225,
  endAngle: -45,
  splitNumber: 5,
  showProgress: true,
  showPointer: true,
  loading: false,
  emptyText: 'No data available',
})

// Build ECharts option
const chartOption = computed(() => {
  if (props.value === null || props.value === undefined) {
    return null
  }

  // Build color zones or use default color
  let axisLineColors: Array<[number, string]>

  if (props.zones && props.zones.length > 0) {
    // Convert zones to ECharts format
    axisLineColors = props.zones.map(zone => [
      (zone.to - props.min!) / (props.max! - props.min!),
      zone.color
    ])
  } else if (Array.isArray(props.color)) {
    // Gradient colors
    const step = 1 / props.color.length
    axisLineColors = props.color.map((color, index) => [
      (index + 1) * step,
      color
    ])
  } else {
    // Single color or default
    const color = props.color || '#3b82f6'
    axisLineColors = [[1, color]]
  }

  const formatter = props.formatter || ((value: number) => `${value}${props.unit || ''}`)

  return {
    series: [
      {
        type: 'gauge',
        startAngle: props.startAngle,
        endAngle: props.endAngle,
        min: props.min,
        max: props.max,
        splitNumber: props.splitNumber,

        // Progress arc
        progress: props.showProgress ? {
          show: true,
          width: 18,
        } : undefined,

        // Pointer
        pointer: props.showPointer ? {
          show: true,
          length: '60%',
          width: 6,
        } : {
          show: false,
        },

        // Axis line (background arc)
        axisLine: {
          lineStyle: {
            width: 18,
            color: axisLineColors,
          },
        },

        // Axis tick
        axisTick: {
          show: true,
          distance: -18,
          length: 5,
          lineStyle: {
            color: props.theme === 'dark' ? '#4b5563' : '#d1d5db',
            width: 1,
          },
        },

        // Split line
        splitLine: {
          show: true,
          distance: -18,
          length: 10,
          lineStyle: {
            color: props.theme === 'dark' ? '#4b5563' : '#d1d5db',
            width: 2,
          },
        },

        // Axis label
        axisLabel: {
          show: true,
          distance: 25,
          color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
          fontSize: 11,
        },

        // Anchor (center circle)
        anchor: {
          show: props.showPointer,
          showAbove: true,
          size: 15,
          itemStyle: {
            borderWidth: 2,
            borderColor: props.theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },

        // Title
        title: {
          show: !!props.title,
          offsetCenter: [0, '80%'],
          fontSize: 14,
          color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
        },

        // Detail (value display)
        detail: {
          valueAnimation: props.animation !== false,
          formatter: formatter,
          fontSize: 28,
          fontWeight: 'bold',
          color: props.theme === 'dark' ? '#fafafa' : '#0a0a0a',
          offsetCenter: [0, '10%'],
        },

        data: [
          {
            value: props.value,
            name: props.title || '',
          },
        ],
      },
    ],
  }
})

// Get responsive dimensions
const dimensions = computed(() => ({
  height: `${props.height}px`,
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
}))
</script>

<template>
  <div :class="cn('galaxy-gauge-chart w-full', props.class)">
    <!-- Loading State -->
    <div
      v-if="loading"
      class="flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
      :style="{ height: dimensions.height }"
    >
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>

    <!-- Empty State -->
    <div
      v-else-if="!chartOption"
      class="flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
      :style="{ height: dimensions.height }"
    >
      <p class="text-gray-500 dark:text-gray-400">{{ emptyText }}</p>
    </div>

    <!-- Chart -->
    <VChart
      v-else
      :option="chartOption"
      :style="dimensions"
      :theme="theme"
      autoresize
    />
  </div>
</template>

<style scoped>
.galaxy-gauge-chart {
  position: relative;
}

/* Dark mode support */
:deep(.dark) .galaxy-gauge-chart {
  color-scheme: dark;
}
</style>
