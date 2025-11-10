<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  GaugeChart,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer,
])

const option = computed(() => ({
  series: [
    {
      type: 'gauge',
      startAngle: 225,
      endAngle: -45,
      min: 0,
      max: 100,
      splitNumber: 5,
      progress: {
        show: true,
        width: 18,
      },
      pointer: {
        show: true,
        length: '60%',
        width: 6,
      },
      axisLine: {
        lineStyle: {
          width: 18,
          color: [
            [0.5, '#10b981'],
            [0.8, '#f59e0b'],
            [1, '#ef4444']
          ],
        },
      },
      axisTick: {
        show: true,
        distance: -18,
        length: 5,
        lineStyle: {
          color: '#d1d5db',
          width: 1,
        },
      },
      splitLine: {
        show: true,
        distance: -18,
        length: 10,
        lineStyle: {
          color: '#d1d5db',
          width: 2,
        },
      },
      axisLabel: {
        show: true,
        distance: 25,
        color: '#6b7280',
        fontSize: 11,
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 15,
        itemStyle: {
          borderWidth: 2,
          borderColor: '#d1d5db',
        },
      },
      title: {
        show: true,
        offsetCenter: [0, '80%'],
        fontSize: 14,
        color: '#6b7280',
      },
      detail: {
        valueAnimation: true,
        formatter: (value: number) => `${value}%`,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0a0a0a',
        offsetCenter: [0, '10%'],
      },
      data: [
        {
          value: 75,
          name: 'CPU Usage',
        },
      ],
    },
  ],
}))
</script>

<template>
  <div class="w-full" style="height: 300px;">
    <VChart :option="option" autoresize style="height: 100%; width: 100%;" />
  </div>
</template>
