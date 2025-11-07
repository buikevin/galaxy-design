<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Register ECharts components
use([
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer,
])

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 45, 35, 50, 45, 60],
      color: '#3b82f6',
    },
    {
      label: 'Revenue',
      data: [20, 35, 30, 45, 55, 50],
      color: '#10b981',
    },
  ],
})

const option = ref({
  tooltip: {
    trigger: 'axis',
    confine: true,
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
    type: 'category',
    data: chartData.value.labels,
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
  },
  series: chartData.value.datasets.map(dataset => ({
    name: dataset.label,
    type: 'line',
    data: dataset.data,
    smooth: true,
    lineStyle: {
      color: dataset.color,
      width: 2,
    },
    itemStyle: {
      color: dataset.color,
    },
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: dataset.color },
          { offset: 1, color: dataset.color + '20' },
        ],
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
