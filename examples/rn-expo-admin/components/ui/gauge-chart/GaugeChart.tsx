import React, { useMemo } from 'react'
import { View, Text, ActivityIndicator, useWindowDimensions } from 'react-native'
import { SkiaChart } from '@wuba/react-native-echarts'
import type { EChartsOption } from 'echarts'
import type { GaugeChartProps } from './types'

export interface GaugeChartComponentProps extends GaugeChartProps {
  style?: any
}

export const GaugeChart: React.FC<GaugeChartComponentProps> = ({
  value,
  height = 300,
  width,
  theme = 'light',
  min = 0,
  max = 100,
  startAngle = 225,
  endAngle = -45,
  splitNumber = 5,
  showProgress = true,
  showPointer = true,
  title,
  unit,
  zones,
  color,
  formatter,
  animation = true,
  loading = false,
  emptyText = 'No data available',
  style,
}) => {
  const { width: windowWidth } = useWindowDimensions()
  const chartWidth = width || windowWidth - 32

  const chartOption = useMemo<EChartsOption | null>(() => {
    if (value === null || value === undefined) {
      return null
    }

    // Build color zones or use default color
    let axisLineColors: Array<[number, string]>

    if (zones && zones.length > 0) {
      // Convert zones to ECharts format
      axisLineColors = zones.map(zone => [
        (zone.to - min) / (max - min),
        zone.color
      ])
    } else if (Array.isArray(color)) {
      // Gradient colors
      const step = 1 / color.length
      axisLineColors = color.map((c, index) => [
        (index + 1) * step,
        c
      ])
    } else {
      // Single color or default
      const c = color || '#3b82f6'
      axisLineColors = [[1, c]]
    }

    const valueFormatter = formatter || ((v: number) => `${v}${unit || ''}`)

    return {
      series: [
        {
          type: 'gauge',
          startAngle,
          endAngle,
          min,
          max,
          splitNumber,

          // Progress arc
          progress: showProgress ? {
            show: true,
            width: 15,
          } : undefined,

          // Pointer
          pointer: showPointer ? {
            show: true,
            length: '55%',
            width: 5,
          } : {
            show: false,
          },

          // Axis line (background arc)
          axisLine: {
            lineStyle: {
              width: 15,
              color: axisLineColors,
            },
          },

          // Axis tick
          axisTick: {
            show: true,
            distance: -15,
            length: 4,
            lineStyle: {
              color: theme === 'dark' ? '#4b5563' : '#d1d5db',
              width: 1,
            },
          },

          // Split line
          splitLine: {
            show: true,
            distance: -15,
            length: 8,
            lineStyle: {
              color: theme === 'dark' ? '#4b5563' : '#d1d5db',
              width: 2,
            },
          },

          // Axis label
          axisLabel: {
            show: true,
            distance: 22,
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
            fontSize: 9,
          },

          // Anchor (center circle)
          anchor: {
            show: showPointer,
            showAbove: true,
            size: 12,
            itemStyle: {
              borderWidth: 2,
              borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db',
            },
          },

          // Title
          title: {
            show: !!title,
            offsetCenter: [0, '75%'],
            fontSize: 12,
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          },

          // Detail (value display)
          detail: {
            valueAnimation: animation,
            formatter: valueFormatter,
            fontSize: 24,
            fontWeight: 'bold',
            color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
            offsetCenter: [0, '5%'],
          },

          data: [
            {
              value,
              name: title || '',
            },
          ],
        },
      ],
    }
  }, [value, min, max, startAngle, endAngle, splitNumber, showProgress, showPointer, title, unit, zones, color, formatter, animation, theme])

  if (loading) {
    return (
      <View
        style={[
          { height, width: chartWidth, justifyContent: 'center', alignItems: 'center' },
          style,
        ]}
      >
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    )
  }

  if (!chartOption) {
    return (
      <View
        style={[
          { height, width: chartWidth, justifyContent: 'center', alignItems: 'center' },
          style,
        ]}
      >
        <Text style={{ color: '#6b7280', fontSize: 14 }}>{emptyText}</Text>
      </View>
    )
  }

  return (
    <View style={[{ height, width: chartWidth }, style]}>
      <SkiaChart option={chartOption} width={chartWidth} height={height} />
    </View>
  )
}
