<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Register ECharts components
use([
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer,
])

const chartData = ref({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Sales',
      data: [120, 200, 150, 80, 170, 110, 130],
      color: '#3b82f6',
    },
    {
      label: 'Revenue',
      data: [100, 180, 130, 90, 150, 120, 140],
      color: '#10b981',
    },
  ],
})

const option = ref({
  tooltip: {
    trigger: 'axis',
    confine: true,
    axisPointer: {
      type: 'shadow',
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
    type: 'category',
    data: chartData.value.labels,
  },
  yAxis: {
    type: 'value',
  },
  series: chartData.value.datasets.map(dataset => ({
    name: dataset.label,
    type: 'bar',
    data: dataset.data,
    itemStyle: {
      color: dataset.color,
    },
  })),
})
</script>

<template>
  <div class="w-full" style="height: 300px;">
    <VChart :option="option" autoresize style="height: 100%; width: 100%;" />
  </div>
</template>
