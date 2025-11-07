import React, { useMemo } from 'react'
import { View, Text, ActivityIndicator, useWindowDimensions } from 'react-native'
import { SkiaChart } from '@wuba/react-native-echarts'
import type { EChartsOption } from 'echarts'
import type { RadarChartProps } from './types'
import { getThemeColors } from './utils'

export interface RadarChartComponentProps extends RadarChartProps {
  style?: any
}

export const RadarChart: React.FC<RadarChartComponentProps> = ({
  data,
  height = 300,
  width,
  theme = 'light',
  legend = true,
  legendPosition = 'top',
  loading = false,
  emptyText = 'No data available',
  shape = 'polygon',
  splitNumber = 4,
  maxValue,
  fill = true,
  opacity = 0.3,
  style,
}) => {
  const { width: windowWidth } = useWindowDimensions()
  const chartWidth = width || windowWidth - 32

  const chartOption = useMemo<EChartsOption | null>(() => {
    if (!data || !data.datasets.length) {
      return null
    }

    const colors = getThemeColors(theme)

    // Build radar indicators from labels
    const indicator = data.labels.map((label) => ({
      name: label,
      max: maxValue || Math.max(...data.datasets.flatMap(d => d.data)),
    }))

    // Transform datasets to radar series
    const seriesData = data.datasets.map((dataset, index) => ({
      name: dataset.label,
      value: dataset.data,
      itemStyle: {
        color: dataset.color || colors[index % colors.length],
      },
      areaStyle: fill ? {
        opacity: opacity,
      } : undefined,
    }))

    return {
      tooltip: {
        trigger: 'item',
        confine: true,
        textStyle: {
          fontSize: 11,
        },
      },
      legend: legend ? {
        show: true,
        orient: legendPosition === 'left' || legendPosition === 'right' ? 'vertical' : 'horizontal',
        left: legendPosition === 'left' ? '5%' : legendPosition === 'right' ? 'auto' : 'center',
        right: legendPosition === 'right' ? '5%' : 'auto',
        top: legendPosition === 'top' ? '5%' : legendPosition === 'bottom' ? 'auto' : 'auto',
        bottom: legendPosition === 'bottom' ? '5%' : 'auto',
        textStyle: {
          fontSize: 10,
          color: theme === 'dark' ? '#e5e7eb' : '#374151',
        },
      } : {
        show: false,
      },
      radar: {
        indicator,
        shape,
        splitNumber,
        axisName: {
          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          fontSize: 10,
        },
        splitLine: {
          lineStyle: {
            color: theme === 'dark' ? '#374151' : '#e5e7eb',
          },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: theme === 'dark'
              ? ['rgba(31, 41, 55, 0.3)', 'rgba(17, 24, 39, 0.3)']
              : ['rgba(249, 250, 251, 0.5)', 'rgba(243, 244, 246, 0.5)'],
          },
        },
        axisLine: {
          lineStyle: {
            color: theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },
      },
      series: [
        {
          type: 'radar',
          data: seriesData,
          emphasis: {
            lineStyle: {
              width: 2,
            },
          },
        },
      ],
    }
  }, [data, theme, legend, legendPosition, shape, splitNumber, maxValue, fill, opacity])

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

  if (!data || !data.datasets.length || !chartOption) {
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
