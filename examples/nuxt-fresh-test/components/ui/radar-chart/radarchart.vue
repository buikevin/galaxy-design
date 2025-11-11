<script setup lang="ts">
import { computed, type PropType } from 'vue'
import VChart from 'vue-echarts'
import type { EChartsOption } from 'echarts'
import type { RadarChartProps, ChartData } from './types'
import { getDefaultColors } from './utils'

const props = defineProps<RadarChartProps>()

const chartOption = computed<EChartsOption>(() => {
  if (!props.data || !props.data.datasets.length) {
    return {}
  }

  const colors = getDefaultColors()

  // Build radar indicators from labels
  const indicator = props.data.labels.map((label) => ({
    name: label,
    max: props.maxValue || Math.max(...props.data.datasets.flatMap(d => d.data)),
  }))

  // Transform datasets to radar series
  const seriesData = props.data.datasets.map((dataset, index) => ({
    name: dataset.label,
    value: dataset.data,
    itemStyle: {
      color: dataset.color || colors[index % colors.length],
    },
    areaStyle: props.fill ? {
      opacity: props.opacity || 0.3,
    } : undefined,
  }))

  return {
    tooltip: {
      trigger: 'item',
      confine: true,
      textStyle: {
        fontSize: 12,
      },
    },
    legend: props.legend !== false ? {
      show: true,
      orient: props.legendPosition === 'left' || props.legendPosition === 'right' ? 'vertical' : 'horizontal',
      left: props.legendPosition === 'left' ? '5%' : props.legendPosition === 'right' ? 'auto' : 'center',
      right: props.legendPosition === 'right' ? '5%' : 'auto',
      top: props.legendPosition === 'top' ? '5%' : props.legendPosition === 'bottom' ? 'auto' : 'auto',
      bottom: props.legendPosition === 'bottom' ? '5%' : 'auto',
      textStyle: {
        fontSize: 12,
        color: props.theme === 'dark' ? '#e5e7eb' : '#374151',
      },
    } : {
      show: false,
    },
    radar: {
      indicator,
      shape: props.shape || 'polygon',
      splitNumber: props.splitNumber || 4,
      axisName: {
        color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
        fontSize: 11,
      },
      splitLine: {
        lineStyle: {
          color: props.theme === 'dark' ? '#374151' : '#e5e7eb',
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: props.theme === 'dark'
            ? ['rgba(31, 41, 55, 0.3)', 'rgba(17, 24, 39, 0.3)']
            : ['rgba(249, 250, 251, 0.5)', 'rgba(243, 244, 246, 0.5)'],
        },
      },
      axisLine: {
        lineStyle: {
          color: props.theme === 'dark' ? '#4b5563' : '#d1d5db',
        },
      },
    },
    series: [
      {
        type: 'radar',
        data: seriesData,
        emphasis: {
          lineStyle: {
            width: 3,
          },
        },
      },
    ],
  }
})
</script>

<template>
  <div :style="{ height: `${height || 300}px`, width: width || '100%' }">
    <div v-if="loading" class="flex items-center justify-center h-full">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
    <div v-else-if="!data || !data.datasets.length" class="flex items-center justify-center h-full text-gray-500">
      {{ emptyText || 'No data available' }}
    </div>
    <VChart v-else :option="chartOption" :autoresize="true" class="w-full h-full" />
  </div>
</template>
