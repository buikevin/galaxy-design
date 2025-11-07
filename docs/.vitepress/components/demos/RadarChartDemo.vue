<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { RadarChart } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
  RadarComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Register ECharts components
use([
  RadarChart,
  TooltipComponent,
  LegendComponent,
  RadarComponent,
  CanvasRenderer,
])

const chartData = ref({
  labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
  datasets: [
    {
      label: 'Product A',
      data: [80, 90, 70, 85, 75],
      color: '#3b82f6',
    },
    {
      label: 'Product B',
      data: [70, 75, 85, 80, 90],
      color: '#10b981',
    },
  ],
})

const option = ref({
  tooltip: {
    trigger: 'item',
    confine: true,
  },
  legend: {
    data: chartData.value.datasets.map(d => d.label),
    top: 10,
  },
  radar: {
    indicator: chartData.value.labels.map(label => ({
      name: label,
      max: 100,
    })),
    shape: 'polygon',
    splitNumber: 4,
  },
  series: [
    {
      type: 'radar',
      data: chartData.value.datasets.map(dataset => ({
        name: dataset.label,
        value: dataset.data,
        areaStyle: {
          color: dataset.color + '40',
        },
        lineStyle: {
          color: dataset.color,
          width: 2,
        },
        itemStyle: {
          color: dataset.color,
        },
      })),
    },
  ],
})
</script>

<template>
  <div class="w-full" style="height: 300px;">
    <VChart :option="option" autoresize style="height: 100%; width: 100%;" />
  </div>
</template>
