<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { cn } from '@/lib/utils'
import type { LineChartProps } from './types'
import {
  buildEChartsOption,
  getResponsiveDimensions,
  transformDataToSeries,
} from './utils'

// Register ECharts components
use([
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  CanvasRenderer,
])

interface Props extends LineChartProps {
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
  smooth: true,
  showPoints: true,
  pointSize: 6,
  area: false,
  stack: false,
  zoom: false,
  dataLabels: false,
  loading: false,
  emptyText: 'No data available',
})

// Build ECharts option
const chartOption = computed(() => {
  // Check for empty data
  if (!props.data || !props.data.datasets || props.data.datasets.length === 0) {
    return null
  }

  const baseOption = buildEChartsOption({
    ...props,
    chartType: 'line',
  })

  // Apply line-specific configurations
  const series = transformDataToSeries(props.data, 'line', {
    smooth: props.smooth,
    showSymbol: props.showPoints,
    symbolSize: props.pointSize,
    stack: props.stack ? 'total' : undefined,
    areaStyle: props.area
      ? {
          opacity: 0.3,
        }
      : undefined,
    label: props.dataLabels
      ? {
          show: true,
          position: 'top',
        }
      : undefined,
  })

  return {
    ...baseOption,
    series,
  }
})

// Get responsive dimensions
const dimensions = computed(() => getResponsiveDimensions(props.width, props.height))

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
  <div :class="cn('galaxy-line-chart w-full', props.class)">
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
.galaxy-line-chart {
  position: relative;
}

/* Dark mode support */
:deep(.dark) .galaxy-line-chart {
  color-scheme: dark;
}
</style>
