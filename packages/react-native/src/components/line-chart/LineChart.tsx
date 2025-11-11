/**
 * Galaxy UI Charts - React Native LineChart Component
 *
 * A responsive line chart component powered by ECharts (react-native-echarts)
 */

import React, { useMemo } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { SkiaChart, SVGRenderer } from '@wuba/react-native-echarts'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components'
import type { EChartsOption } from 'echarts'
import type { LineChartProps as BaseLineChartProps } from './types'
import {
  buildEChartsOption,
  transformDataToSeries,
} from './utils'

// Register ECharts components
echarts.use([
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  SVGRenderer,
])

export interface LineChartProps extends Omit<BaseLineChartProps, 'width'> {
  /**
   * Chart width (defaults to screen width - 32)
   */
  width?: number
  /**
   * Custom className (NativeWind support)
   */
  className?: string
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 300,
  width,
  theme = 'light',
  legend = true,
  legendPosition = 'top',
  grid = true,
  tooltip = true,
  animation = true,
  smooth = true,
  showPoints = true,
  pointSize = 6,
  area = false,
  stack = false,
  zoom = false,
  dataLabels = false,
  loading = false,
  emptyText = 'No data available',
  className,
  options = {},
}) => {
  // Get screen width if not provided
  const chartWidth = width || Dimensions.get('window').width - 32

  // Build ECharts option
  const chartOption = useMemo<EChartsOption | null>(() => {
    // Check for empty data
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
      zoom,
      options,
      chartType: 'line',
    })

    // Apply line-specific configurations
    const series = transformDataToSeries(data, 'line', {
      smooth,
      showSymbol: showPoints,
      symbolSize: pointSize,
      stack: stack ? 'total' : undefined,
      areaStyle: area
        ? {
            opacity: 0.3,
          }
        : undefined,
      label: dataLabels
        ? {
            show: true,
            position: 'top',
          }
        : undefined,
    })

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
    smooth,
    showPoints,
    pointSize,
    area,
    stack,
    zoom,
    dataLabels,
    options,
  ])

  // Empty state
  if (!chartOption && !loading) {
    return (
      <View
        className={className}
        style={[
          styles.emptyContainer,
          {
            height,
            width: chartWidth,
          },
        ]}
      >
        <Text style={styles.emptyText}>{emptyText}</Text>
      </View>
    )
  }

  // Loading state
  if (loading) {
    return (
      <View
        className={className}
        style={[
          styles.loadingContainer,
          {
            height,
            width: chartWidth,
          },
        ]}
      >
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  // Render chart
  return (
    <View className={className} style={styles.container}>
      {chartOption && (
        <SkiaChart
          option={chartOption}
          width={chartWidth}
          height={height}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  emptyText: {
    color: '#6b7280',
    fontSize: 14,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
  },
  loadingText: {
    color: '#3b82f6',
    fontSize: 14,
  },
})

export default LineChart
