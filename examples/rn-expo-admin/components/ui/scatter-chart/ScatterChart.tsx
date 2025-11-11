import React, { useMemo } from 'react'
import { View, Text, ActivityIndicator, useWindowDimensions } from 'react-native'
import { SkiaChart } from '@wuba/react-native-echarts'
import type { EChartsOption } from 'echarts'
import type { ScatterChartProps } from './types'
import { getThemeColors } from './utils'

export interface ScatterChartComponentProps extends ScatterChartProps {
  style?: any
}

export const ScatterChart: React.FC<ScatterChartComponentProps> = ({
  data,
  height = 300,
  width,
  theme = 'light',
  legend = true,
  legendPosition = 'top',
  loading = false,
  emptyText = 'No data available',
  symbolSize = 8,
  opacity = 0.8,
  xAxisLabel,
  yAxisLabel,
  style,
}) => {
  const { width: windowWidth } = useWindowDimensions()
  const chartWidth = width || windowWidth - 32

  const chartOption = useMemo<EChartsOption | null>(() => {
    if (!data || !data.datasets.length) {
      return null
    }

    const colors = getThemeColors(theme)

    // Transform datasets to scatter series
    const series = data.datasets.map((dataset, index) => {
      const seriesData = dataset.data.map((value: any, i) => {
        // Support both simple array [x, y] or object {x, y, value}
        if (Array.isArray(value)) {
          return value
        } else if (typeof value === 'object' && 'x' in value && 'y' in value) {
          return [value.x, value.y, value.value || 1]
        }
        // Fallback: use index as x, value as y
        return [i, value]
      })

      return {
        name: dataset.label,
        type: 'scatter',
        data: seriesData,
        symbolSize: (dataItem: number[]) => {
          // If third value exists, use it for size scaling
          if (dataItem[2]) {
            return Math.sqrt(dataItem[2]) * symbolSize / 5
          }
          return symbolSize
        },
        itemStyle: {
          color: dataset.color || colors[index % colors.length],
          opacity: opacity,
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            borderColor: '#333',
            borderWidth: 1,
          },
        },
      }
    })

    return {
      tooltip: {
        trigger: 'item',
        confine: true,
        textStyle: {
          fontSize: 11,
        },
        formatter: (params: any) => {
          const dataPoint = params.data
          return `${params.seriesName}<br/>X: ${dataPoint[0]}<br/>Y: ${dataPoint[1]}${dataPoint[2] ? `<br/>Value: ${dataPoint[2]}` : ''}`
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
        bottom: '18%',
        top: legend ? '18%' : '12%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        name: xAxisLabel,
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: {
          fontSize: 10,
          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
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
      yAxis: {
        type: 'value',
        name: yAxisLabel,
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          fontSize: 10,
          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
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
  }, [data, theme, legend, legendPosition, symbolSize, opacity, xAxisLabel, yAxisLabel])

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
