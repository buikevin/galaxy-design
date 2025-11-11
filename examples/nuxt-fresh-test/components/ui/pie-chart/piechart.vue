<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { cn } from '@/lib/utils'
import type { PieChartProps } from './types'
import { getDefaultColors, formatNumber } from './utils'

// Register ECharts components
use([
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer,
])

export interface Props extends PieChartProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
  width: '100%',
  theme: 'light',
  legend: true,
  legendPosition: 'right',
  animation: true,
  innerRadius: 0,
  outerRadius: 70,
  showPercentage: true,
  labelPosition: 'outside',
  loading: false,
  emptyText: 'No data available',
})

const chartOption = computed(() => {
  if (!props.data || !props.data.datasets || props.data.datasets.length === 0) {
    return null
  }

  const colors = getDefaultColors()
  const dataset = props.data.datasets[0] // Pie charts typically use first dataset
  if (!dataset) return {}

  const total = dataset.data.reduce((sum, val) => sum + val, 0)

  const pieData = props.data.labels.map((label, index) => ({
    name: label,
    value: dataset.data[index],
    itemStyle: {
      color: dataset.backgroundColor?.[index] || colors[index % colors.length],
    },
  }))

  return {
    backgroundColor: 'transparent',
    color: colors,
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const percent = ((params.value / total) * 100).toFixed(1)
        return `${params.name}: ${formatNumber(params.value)} (${percent}%)`
      },
      backgroundColor: props.theme === 'dark' ? '#18181b' : '#ffffff',
      borderColor: props.theme === 'dark' ? '#27272a' : '#e4e4e7',
      textStyle: {
        color: props.theme === 'dark' ? '#fafafa' : '#0a0a0a',
      },
    },
    legend: props.legend
      ? {
          orient: props.legendPosition === 'left' || props.legendPosition === 'right'
            ? 'vertical'
            : 'horizontal',
          [props.legendPosition]: props.legendPosition === 'top' || props.legendPosition === 'bottom'
            ? 'center'
            : '0',
          [props.legendPosition === 'top' || props.legendPosition === 'bottom'
            ? props.legendPosition
            : 'middle']: '0',
          textStyle: {
            color: props.theme === 'dark' ? '#fafafa' : '#0a0a0a',
          },
        }
      : undefined,
    series: [
      {
        type: 'pie',
        radius: [`${props.innerRadius}%`, `${props.outerRadius}%`],
        center: ['50%', '50%'],
        data: pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          show: props.labelPosition !== 'center',
          position: props.labelPosition === 'inside' ? 'inside' : 'outside',
          formatter: props.showPercentage
            ? (params: any) => {
                const percent = ((params.value / total) * 100).toFixed(1)
                return `${params.name}\n${percent}%`
              }
            : '{b}',
          color: props.theme === 'dark' ? '#fafafa' : '#0a0a0a',
        },
        labelLine: {
          show: props.labelPosition === 'outside',
        },
      },
    ],
  }
})

const dimensions = computed(() => {
  return {
    height: `${props.height}px`,
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  }
})
</script>

<template>
  <div :class="cn('galaxy-pie-chart w-full', props.class)">
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
