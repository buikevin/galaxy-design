<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Register ECharts components
use([
  PieChart,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer,
])

const chartData = ref({
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  datasets: [
    {
      label: 'Browser Usage',
      data: [45, 25, 15, 10, 5],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
    },
  ],
})

const option = ref({
  tooltip: {
    trigger: 'item',
    confine: true,
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: chartData.value.labels,
  },
  series: [
    {
      name: chartData.value.datasets[0].label,
      type: 'pie',
      radius: '60%',
      center: ['60%', '50%'],
      data: chartData.value.labels.map((label, index) => ({
        name: label,
        value: chartData.value.datasets[0].data[index],
        itemStyle: {
          color: chartData.value.datasets[0].backgroundColor![index],
        },
      })),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
</script>

<template>
  <div class="w-full" style="height: 300px;">
    <VChart :option="option" autoresize style="height: 100%; width: 100%;" />
  </div>
</template>
