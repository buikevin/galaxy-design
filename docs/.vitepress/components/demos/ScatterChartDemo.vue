<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { ScatterChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Register ECharts components
use([
  ScatterChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer,
])

const chartData = ref({
  datasets: [
    {
      label: 'Group A',
      data: [
        [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
        [35, 45], [40, 50], [45, 55], [50, 60]
      ],
      color: '#3b82f6',
    },
    {
      label: 'Group B',
      data: [
        [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
        [38, 25], [42, 20], [48, 15], [52, 10]
      ],
      color: '#10b981',
    },
  ],
})

const option = ref({
  tooltip: {
    trigger: 'item',
    confine: true,
    formatter: (params: any) => {
      return `${params.seriesName}<br/>X: ${params.value[0]}<br/>Y: ${params.value[1]}`
    },
  },
  legend: {
    data: chartData.value.datasets.map(d => d.label),
    top: 10,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    name: 'X Axis',
  },
  yAxis: {
    type: 'value',
    name: 'Y Axis',
  },
  series: chartData.value.datasets.map(dataset => ({
    name: dataset.label,
    type: 'scatter',
    data: dataset.data,
    symbolSize: 8,
    itemStyle: {
      color: dataset.color,
      opacity: 0.8,
    },
    emphasis: {
      itemStyle: {
        borderColor: '#333',
        borderWidth: 1,
      },
    },
  })),
})
</script>

<template>
  <div class="w-full" style="height: 300px;">
    <VChart :option="option" autoresize style="height: 100%; width: 100%;" />
  </div>
</template>
