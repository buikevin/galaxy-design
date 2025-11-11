import React, { useMemo } from 'react'
import { View, Text, ActivityIndicator, useWindowDimensions } from 'react-native'
import { SkiaChart } from '@wuba/react-native-echarts'
import type { EChartsOption } from 'echarts'
import type { MixedChartProps } from './types'
import { getThemeColors } from './utils'

export interface MixedChartComponentProps extends MixedChartProps {
  style?: any
}

export const MixedChart: React.FC<MixedChartComponentProps> = ({
  data,
  height = 300,
  width,
  theme = 'light',
  legend = true,
  legendPosition = 'top',
  loading = false,
  emptyText = 'No data available',
  style,
}) => {
  const { width: windowWidth } = useWindowDimensions()
  const chartWidth = width || windowWidth - 32

  const chartOption = useMemo<EChartsOption | null>(() => {
    if (!data || !data.datasets.length) {
      return null
    }

    const colors = getThemeColors(theme)

    // Build series with mixed types
    const series = data.datasets.map((dataset, index) => {
      const chartType = dataset.type || 'line'
      const color = dataset.color || colors[index % colors.length]

      const baseSeries: any = {
        name: dataset.label,
        type: chartType === 'area' ? 'line' : chartType,
        data: dataset.data,
        itemStyle: {
          color: color,
        },
      }

      // Add type-specific configurations
      if (chartType === 'line') {
        return {
          ...baseSeries,
          smooth: true,
          showSymbol: true,
          symbolSize: 5,
          lineStyle: {
            width: 2,
          },
        }
      } else if (chartType === 'bar') {
        return {
          ...baseSeries,
          barMaxWidth: 40,
        }
      } else if (chartType === 'area') {
        return {
          ...baseSeries,
          smooth: true,
          showSymbol: true,
          symbolSize: 5,
          areaStyle: {
            opacity: 0.3,
          },
        }
      }

      return baseSeries
    })

    return {
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
          type: 'cross',
        },
        textStyle: {
          fontSize: 10,
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
      grid: {
        left: '12%',
        right: '8%',
        bottom: '15%',
        top: legend ? '18%' : '12%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: data.labels,
        boundaryGap: true,
        axisLine: {
          lineStyle: {
            color: theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },
        axisLabel: {
          fontSize: 9,
          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          rotate: data.labels.length > 8 ? 45 : 0,
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },
        axisLabel: {
          fontSize: 9,
          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
        splitLine: {
          lineStyle: {
            color: theme === 'dark' ? '#374151' : '#e5e7eb',
          },
        },
      },
      series,
    }
  }, [data, theme, legend, legendPosition])

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
