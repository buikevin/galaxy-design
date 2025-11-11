<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart, BarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { cn } from '@/lib/utils'
import type { MixedChartProps } from './types'
import { getDefaultColors } from './utils'

// Register ECharts components
use([
  LineChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  CanvasRenderer,
])

export interface Props extends MixedChartProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
  theme: 'light',
  legend: true,
  legendPosition: 'top',
  grid: true,
  tooltip: true,
  animation: true,
  loading: false,
  emptyText: 'No data available',
})

// Build ECharts option
const chartOption = computed(() => {
  if (!props.data || !props.data.datasets || props.data.datasets.length === 0) {
    return null
  }

  const colors = getDefaultColors()

  // Build series with mixed types
  const series = props.data.datasets.map((dataset, index) => {
    const chartType = dataset.type || 'line'
    const color = dataset.color || colors[index % colors.length]

    const baseSeries = {
      name: dataset.label,
      type: chartType,
      data: dataset.data,
      itemStyle: {
        color: color,
      },
    }

    // Add type-specific configurations
    if (chartType === 'line') {
      return {
        ...baseSeries,
        smooth: dataset.smooth !== false,
        showSymbol: true,
        symbolSize: 6,
        lineStyle: {
          width: 2,
        },
      }
    } else if (chartType === 'bar') {
      return {
        ...baseSeries,
        barMaxWidth: 50,
      }
    } else if (chartType === 'area') {
      return {
        ...baseSeries,
        type: 'line',
        smooth: true,
        showSymbol: true,
        symbolSize: 6,
        areaStyle: {
          opacity: 0.3,
        },
      }
    }

    return baseSeries
  })

  return {
    backgroundColor: 'transparent',
    color: colors,
    tooltip: props.tooltip
      ? {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
            },
          },
          backgroundColor: props.theme === 'dark' ? '#18181b' : '#ffffff',
          borderColor: props.theme === 'dark' ? '#27272a' : '#e4e4e7',
          textStyle: {
            color: props.theme === 'dark' ? '#fafafa' : '#0a0a0a',
          },
        }
      : undefined,
    legend: props.legend
      ? {
          data: props.data.datasets.map((d) => d.label),
          [props.legendPosition]: props.legendPosition === 'top' || props.legendPosition === 'bottom' ? 'center' : '5%',
          [props.legendPosition === 'left' || props.legendPosition === 'right' ? 'top' : props.legendPosition]: props.legendPosition === 'left' || props.legendPosition === 'right' ? 'middle' : '5%',
          orient: props.legendPosition === 'left' || props.legendPosition === 'right' ? 'vertical' : 'horizontal',
          textStyle: {
            color: props.theme === 'dark' ? '#fafafa' : '#0a0a0a',
          },
        }
      : undefined,
    grid: props.grid
      ? {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: props.legend && props.legendPosition === 'top' ? '15%' : '10%',
          containLabel: true,
        }
      : undefined,
    xAxis: {
      type: 'category',
      data: props.data.labels,
      boundaryGap: true,
      axisLine: {
        lineStyle: {
          color: props.theme === 'dark' ? '#4b5563' : '#d1d5db',
        },
      },
      axisLabel: {
        color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: props.theme === 'dark' ? '#4b5563' : '#d1d5db',
        },
      },
      axisLabel: {
        color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
      },
      splitLine: {
        lineStyle: {
          color: props.theme === 'dark' ? '#374151' : '#e5e7eb',
        },
      },
    },
    series,
  }
})

// Get responsive dimensions
const dimensions = computed(() => ({
  height: `${props.height}px`,
  width: typeof props.width === 'number' ? `${props.width}px` : props.width || '100%',
}))

// Loading option for ECharts
const loadingOption = computed(() => ({
  text: 'Loading...',
  color: '#3b82f6',
  textColor: '#666',
  maskColor: 'rgba(255, 255, 255, 0.8)',
  zlevel: 0,
}))
</script>

<template>
  <div :class="cn('galaxy-mixed-chart w-full', props.class)">
    <!-- Empty State -->
    <div
      v-if="!chartOption && !loading"
      class="flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
      :style="{ height: dimensions.height }"
    >
      <p class="text-gray-500 dark:text-gray-400">{{ emptyText }}</p>
    </div>

    <!-- Chart -->
    <VChart
      v-else-if="chartOption"
      :option="chartOption"
      :style="dimensions"
      :theme="theme"
      :loading="loading"
      :loading-options="loadingOption"
      autoresize
    />
  </div>
</template>

<style scoped>
.galaxy-mixed-chart {
  position: relative;
}

/* Dark mode support */
:deep(.dark) .galaxy-mixed-chart {
  color-scheme: dark;
}
</style>
