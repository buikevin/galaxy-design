<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { cn } from '@/lib/utils'
import type { AreaChartProps } from './types'
import { getDefaultColors, transformDataToSeries, getThemeColors } from './utils'

// Register ECharts components
use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  CanvasRenderer,
])

export interface Props extends AreaChartProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
  width: '100%',
  theme: 'light',
  legend: true,
  legendPosition: 'top',
  grid: true,
  tooltip: true,
  animation: true,
  smooth: true,
  showPoints: true,
  pointSize: 6,
  stack: false,
  opacity: 0.6,
  gradient: false,
  loading: false,
  emptyText: 'No data available',
  zoom: false,
})

const chartOption = computed(() => {
  if (!props.data || !props.data.datasets || props.data.datasets.length === 0) {
    return null
  }

  const colors = getDefaultColors()
  const themeColors = getThemeColors(props.theme)

  // Transform datasets with area fill enabled
  const series = transformDataToSeries(props.data, 'line', {
    smooth: props.smooth,
    showSymbol: props.showPoints,
    symbolSize: props.pointSize,
    stack: props.stack ? 'total' : undefined,
    areaStyle: {
      opacity: props.opacity,
    },
  })

  // Add gradient if enabled
  if (props.gradient) {
    series.forEach((s: any, index: number) => {
      const color = s.itemStyle?.color || colors[index % colors.length]
      s.areaStyle = {
        ...s.areaStyle,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: color },
            { offset: 1, color: 'rgba(255, 255, 255, 0.1)' },
          ],
        },
      }
    })
  }

  const baseOption = {
    backgroundColor: 'transparent',
    color: colors,
    tooltip: props.tooltip
      ? {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: themeColors.primary,
            },
          },
          backgroundColor: themeColors.tooltipBg,
          borderColor: themeColors.tooltipBorder,
          textStyle: {
            color: themeColors.tooltipText,
          },
        }
      : undefined,
    legend: props.legend
      ? {
          orient: props.legendPosition === 'left' || props.legendPosition === 'right'
            ? 'vertical'
            : 'horizontal',
          [props.legendPosition]: '0',
          textStyle: {
            color: themeColors.text,
          },
        }
      : undefined,
    grid: typeof props.grid === 'object'
      ? { ...props.grid, containLabel: true }
      : props.grid
        ? {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          }
        : undefined,
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.data.labels,
      axisLine: { lineStyle: { color: themeColors.axis } },
      axisLabel: { color: themeColors.axisLabel },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: themeColors.axis } },
      axisLabel: { color: themeColors.axisLabel },
      splitLine: {
        lineStyle: { color: themeColors.gridLine, type: 'dashed' },
      },
    },
    dataZoom: props.zoom
      ? [
          {
            type: 'inside',
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
          },
        ]
      : undefined,
    series,
  }

  return baseOption
})

const dimensions = computed(() => {
  return {
    height: `${props.height}px`,
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  }
})
</script>

<template>
  <div :class="cn('galaxy-area-chart w-full', props.class)">
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
