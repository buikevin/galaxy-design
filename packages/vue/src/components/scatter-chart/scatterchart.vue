<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import type { EChartsOption } from 'echarts'
import type { ScatterChartProps } from './types'
import { getDefaultColors } from './utils'

const props = defineProps<ScatterChartProps>()

const chartOption = computed<EChartsOption>(() => {
  if (!props.data || !props.data.datasets.length) {
    return {}
  }

  const colors = getDefaultColors()

  // Transform datasets to scatter series
  const series = props.data.datasets.map((dataset, index) => {
    const seriesData = dataset.data.map((value, i) => {
      // Support both simple array [x, y] or object {x, y, value}
      if (Array.isArray(value)) {
        return value
      } else if (typeof value === 'object' && 'x' in value && 'y' in value) {
        return [value.x, value.y, value.value || 1]
      }
      // Fallback: use index as x, value as y
      return [i, value]
    })

    return {
      name: dataset.label,
      type: 'scatter',
      data: seriesData,
      symbolSize: (data: number[]) => {
        // If third value exists, use it for size scaling
        if (data[2]) {
          return Math.sqrt(data[2]) * (props.symbolSize || 10) / 5
        }
        return props.symbolSize || 10
      },
      itemStyle: {
        color: dataset.color || colors[index % colors.length],
        opacity: props.opacity || 0.8,
      },
      emphasis: {
        focus: 'series',
        itemStyle: {
          borderColor: '#333',
          borderWidth: 1,
        },
      },
    }
  })

  return {
    tooltip: {
      trigger: 'item',
      confine: true,
      textStyle: {
        fontSize: 12,
      },
      formatter: (params: any) => {
        const data = params.data
        return `${params.seriesName}<br/>X: ${data[0]}<br/>Y: ${data[1]}${data[2] ? `<br/>Value: ${data[2]}` : ''}`
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
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: props.legend !== false ? '15%' : '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      name: props.xAxisLabel,
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        fontSize: 12,
        color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
      },
      axisLine: {
        lineStyle: {
          color: props.theme === 'dark' ? '#4b5563' : '#d1d5db',
        },
      },
      axisLabel: {
        fontSize: 11,
        color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
      },
      splitLine: {
        lineStyle: {
          color: props.theme === 'dark' ? '#374151' : '#e5e7eb',
        },
      },
    },
    yAxis: {
      type: 'value',
      name: props.yAxisLabel,
      nameLocation: 'middle',
      nameGap: 50,
      nameTextStyle: {
        fontSize: 12,
        color: props.theme === 'dark' ? '#9ca3af' : '#6b7280',
      },
      axisLine: {
        lineStyle: {
          color: props.theme === 'dark' ? '#4b5563' : '#d1d5db',
        },
      },
      axisLabel: {
        fontSize: 11,
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
