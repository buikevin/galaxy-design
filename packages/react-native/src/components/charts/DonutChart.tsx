import React, { useMemo } from 'react'
import { View, Text, Dimensions, ActivityIndicator } from 'react-native'
import { SkiaChart, SVGRenderer } from '@wuba/react-native-echarts'
import * as echarts from 'echarts/core'
import { DonutChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import type { EChartsOption } from 'echarts'
import type { DonutChartProps } from './types'
import { getDefaultColors, formatNumber } from './utils'

// Register ECharts components
echarts.use([
  DonutChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  SVGRenderer,
])

export interface DonutChartComponentProps extends DonutChartProps {
  className?: string
}

export const DonutChart: React.FC<DonutChartComponentProps> = ({
  data,
  height = 300,
  width,
  theme = 'light',
  legend = true,
  legendPosition = 'bottom', // Mobile default to bottom
  animation = true,
  innerRadius = 50,
  outerRadius = 60, // Smaller for mobile
  showPercentage = true,
  labelPosition = 'outside',
  loading = false,
  emptyText = 'No data available',
  className,
  options = {},
}) => {
  const chartWidth = width || Dimensions.get('window').width - 32

  const chartOption = useMemo<EChartsOption | null>(() => {
    if (!data || !data.datasets || data.datasets.length === 0) {
      return null
    }

    const colors = getDefaultColors()
    const dataset = data.datasets[0]
    const total = dataset.data.reduce((sum, val) => sum + val, 0)

    const pieData = data.labels.map((label, index) => ({
      name: label,
      value: dataset.data[index],
      itemStyle: {
        color: dataset.backgroundColor?.[index] || colors[index % colors.length],
      },
    }))

    return {
      backgroundColor: 'transparent',
      color: colors,
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const percent = ((params.value / total) * 100).toFixed(1)
          return `${params.name}: ${formatNumber(params.value)} (${percent}%)`
        },
        backgroundColor: theme === 'dark' ? '#18181b' : '#ffffff',
        borderColor: theme === 'dark' ? '#27272a' : '#e4e4e7',
        textStyle: {
          color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
          fontSize: 12,
        },
        confine: true,
      },
      legend: legend
        ? {
            orient: legendPosition === 'left' || legendPosition === 'right'
              ? 'vertical'
              : 'horizontal',
            [legendPosition]: legendPosition === 'top' || legendPosition === 'bottom'
              ? 'center'
              : '0',
            [legendPosition === 'top' || legendPosition === 'bottom'
              ? legendPosition
              : 'middle']: '0',
            textStyle: {
              color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
              fontSize: 11, // Smaller for mobile
            },
          }
        : undefined,
      series: [
        {
          type: 'pie',
          radius: [`${innerRadius}%`, `${outerRadius}%`],
          center: ['50%', '50%'],
          data: pieData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            show: labelPosition !== 'center',
            position: labelPosition === 'inside' ? 'inside' : 'outside',
            formatter: showPercentage
              ? (params: any) => {
                  const percent = ((params.value / total) * 100).toFixed(1)
                  return `${params.name}\n${percent}%`
                }
              : '{b}',
            color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
            fontSize: 10, // Smaller for mobile
          },
          labelLine: {
            show: labelPosition === 'outside',
            length: 15,
            length2: 10,
          },
        },
      ],
      ...options,
    }
  }, [
    data,
    theme,
    legend,
    legendPosition,
    innerRadius,
    outerRadius,
    showPercentage,
    labelPosition,
    options,
  ])

  // Loading state
  if (loading) {
    return (
      <View
        className={className}
        style={{
          height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    )
  }

  // Empty state
  if (!chartOption) {
    return (
      <View
        className={className}
        style={{
          height,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: theme === 'dark' ? '#27272a' : '#e4e4e7',
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: theme === 'dark' ? '#a1a1aa' : '#71717a',
            fontSize: 14,
          }}
        >
          {emptyText}
        </Text>
      </View>
    )
  }

  return (
    <View className={className}>
      <SkiaChart option={chartOption} width={chartWidth} height={height} />
    </View>
  )
}
