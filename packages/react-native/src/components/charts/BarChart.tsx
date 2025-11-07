import React, { useMemo } from 'react'
import { View, Text, Dimensions, ActivityIndicator } from 'react-native'
import { SkiaChart, SVGRenderer } from '@wuba/react-native-echarts'
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components'
import type { EChartsOption } from 'echarts'
import type { BarChartProps } from './types'
import {
  buildEChartsOption,
  getResponsiveDimensions,
  transformDataToSeries,
} from './utils'

// Register ECharts components
echarts.use([
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  SVGRenderer,
])

export interface BarChartComponentProps extends BarChartProps {
  className?: string
}

export const BarChart: React.FC<BarChartComponentProps> = ({
  data,
  height = 300,
  width,
  theme = 'light',
  legend = true,
  legendPosition = 'top',
  grid,
  tooltip,
  animation = true,
  horizontal = false,
  stacked = false,
  showDataLabels = false,
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

    const baseOption = buildEChartsOption({
      data,
      height,
      width: chartWidth,
      theme,
      legend,
      legendPosition,
      grid,
      tooltip,
      animation,
      options,
      chartType: 'bar',
    })

    // Transform data to bar series with additional config
    const series = transformDataToSeries(data, 'bar', {
      stack: stacked ? 'total' : undefined,
      label: showDataLabels
        ? {
            show: true,
            position: horizontal ? 'right' : 'top',
            fontSize: 10, // Smaller for mobile
          }
        : undefined,
    })

    // Swap axes for horizontal bar chart
    if (horizontal) {
      return {
        ...baseOption,
        xAxis: baseOption.yAxis,
        yAxis: {
          type: 'category',
          data: data.labels,
          axisLine: {
            lineStyle: {
              color: theme === 'dark' ? '#52525b' : '#e4e4e7',
            },
          },
          axisLabel: {
            color: theme === 'dark' ? '#a1a1aa' : '#71717a',
            fontSize: 11,
            rotate: data.labels.length > 6 ? 45 : 0,
          },
        },
        series,
      }
    }

    return {
      ...baseOption,
      series,
    }
  }, [
    data,
    height,
    chartWidth,
    theme,
    legend,
    legendPosition,
    grid,
    tooltip,
    animation,
    horizontal,
    stacked,
    showDataLabels,
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
