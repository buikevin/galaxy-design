<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { cn } from '@/lib/utils'
import type { BarChartProps } from './types'
import {
  buildEChartsOption,
  getResponsiveDimensions,
  transformDataToSeries,
} from './utils'

// Register ECharts components
use([
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  CanvasRenderer,
])

export interface Props extends BarChartProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
  width: '100%',
  theme: 'light',
  legend: true,
  legendPosition: 'top',
  animation: true,
  horizontal: false,
  stacked: false,
  showDataLabels: false,
  loading: false,
  emptyText: 'No data available',
})

const chartOption = computed(() => {
  if (!props.data || !props.data.datasets || props.data.datasets.length === 0) {
    return null
  }

  const baseOption = buildEChartsOption({
    ...props,
    chartType: 'bar',
  })

  // Transform data to bar series with additional config
  const series = transformDataToSeries(props.data, 'bar', {
    stack: props.stacked ? 'total' : undefined,
    label: props.showDataLabels
      ? {
          show: true,
          position: props.horizontal ? 'right' : 'top',
        }
      : undefined,
  })

  // Swap axes for horizontal bar chart
  if (props.horizontal) {
    return {
      ...baseOption,
      xAxis: baseOption.yAxis,
      yAxis: {
        type: 'category',
        data: props.data.labels,
        axisLine: {
          lineStyle: {
            color: props.theme === 'dark' ? '#52525b' : '#e4e4e7',
          },
        },
        axisLabel: {
          color: props.theme === 'dark' ? '#a1a1aa' : '#71717a',
          fontSize: 12,
        },
      },
      series,
    }
  }

  return {
    ...baseOption,
    series,
  }
})

const dimensions = computed(() => {
  return getResponsiveDimensions(props.width, props.height)
})
</script>

<template>
  <div :class="cn('galaxy-bar-chart w-full', props.class)">
    <!-- Loading state -->
    <div
      v-if="loading"
      :style="{ height: `${height}px` }"
      class="flex items-center justify-center"
    >
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>

    <!-- Empty state -->
    <div
      v-else-if="!chartOption"
      :style="{ height: `${height}px` }"
      class="flex items-center justify-center border border-border rounded-md"
    >
      <p class="text-muted-foreground text-sm">{{ emptyText }}</p>
    </div>

    <!-- Chart -->
    <VChart
      v-else
      :option="chartOption"
      :style="dimensions"
      :theme="theme"
      :loading="loading"
      autoresize
    />
  </div>
</template>
