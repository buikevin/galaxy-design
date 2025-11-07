<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart, BarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Register ECharts components
use([
  LineChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer,
])

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [30, 45, 35, 50, 45, 60],
      type: 'line',
      color: '#3b82f6',
    },
    {
      label: 'Sales',
      data: [20, 35, 30, 45, 55, 50],
      type: 'bar',
      color: '#10b981',
    },
    {
      label: 'Profit',
      data: [15, 25, 22, 30, 35, 40],
      type: 'area',
      color: '#f59e0b',
    },
  ],
})

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
    confine: true,
  },
  legend: {
    data: chartData.value.datasets.map((d) => d.label),
    top: '5%',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: chartData.value.labels,
    boundaryGap: true,
  },
  yAxis: {
    type: 'value',
  },
  series: chartData.value.datasets.map((dataset) => {
    const baseConfig = {
      name: dataset.label,
      type: dataset.type === 'area' ? 'line' : dataset.type,
      data: dataset.data,
      itemStyle: {
        color: dataset.color,
      },
    }

    if (dataset.type === 'line') {
      return {
        ...baseConfig,
        smooth: true,
        showSymbol: true,
        symbolSize: 6,
      }
    } else if (dataset.type === 'bar') {
      return {
        ...baseConfig,
        barMaxWidth: 50,
      }
    } else if (dataset.type === 'area') {
      return {
        ...baseConfig,
        smooth: true,
        areaStyle: {
          opacity: 0.3,
        },
      }
    }

    return baseConfig
  }),
})
</script>

<template>
  <div class="w-full" style="height: 350px;">
    <VChart :option="option" autoresize style="height: 100%; width: 100%;" />
  </div>
</template>
