import React, { useMemo } from 'react'
import { View, Text, ActivityIndicator, useWindowDimensions } from 'react-native'
import { SkiaChart } from '@wuba/react-native-echarts'
import type { EChartsOption } from 'echarts'
import type { AreaChartProps } from './types'
import { getDefaultColors, transformDataToSeries, getThemeColors } from './utils'

export interface AreaChartComponentProps extends AreaChartProps {
  className?: string
}

export const AreaChart: React.FC<AreaChartComponentProps> = ({
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
  pointSize = 4,
  stack = false,
  opacity = 0.6,
  gradient = false,
  loading = false,
  emptyText = 'No data available',
  options = {},
}) => {
  const { width: screenWidth } = useWindowDimensions()
  const chartWidth = width || screenWidth - 32

  const chartOption = useMemo<EChartsOption | null>(() => {
    if (!data || !data.datasets || data.datasets.length === 0) {
      return null
    }

    const colors = getDefaultColors()
    const themeColors = getThemeColors(theme)

    // Transform datasets with area fill enabled
    const series = transformDataToSeries(data, 'line', {
      smooth,
      showSymbol: showPoints,
      symbolSize: pointSize,
      stack: stack ? 'total' : undefined,
      areaStyle: {
        opacity,
      },
    })

    // Add gradient if enabled
    if (gradient) {
      series.forEach((s: any, index: number) => {
        const color = s.itemStyle?.color || colors[index % colors.length]
        s.areaStyle = {
          ...s.areaStyle,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: color },
              { offset: 1, color: 'rgba(255, 255, 255, 0.1)' },
            ],
          },
        }
      })
    }

    return {
      backgroundColor: 'transparent',
      color: colors,
      tooltip: tooltip
        ? {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
            },
            confine: true,
            textStyle: {
              fontSize: 12,
            },
          }
        : undefined,
      legend: legend
        ? {
            orient: legendPosition === 'left' || legendPosition === 'right'
              ? 'vertical'
              : 'horizontal',
            [legendPosition]: '0',
            textStyle: {
              fontSize: 11,
              color: themeColors.text,
            },
          }
        : undefined,
      grid: typeof grid === 'object'
        ? { ...grid, containLabel: true }
        : grid
          ? {
              left: '5%',
              right: '5%',
              bottom: '5%',
              top: '15%',
              containLabel: true,
            }
          : undefined,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.labels,
        axisLabel: {
          fontSize: 10,
          color: themeColors.axisLabel,
          rotate: data.labels.length > 6 ? 45 : 0,
        },
        axisLine: { lineStyle: { color: themeColors.axis } },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          fontSize: 10,
          color: themeColors.axisLabel,
        },
        axisLine: { lineStyle: { color: themeColors.axis } },
        splitLine: {
          lineStyle: { color: themeColors.gridLine, type: 'dashed' },
        },
      },
      series,
      ...options,
    }
  }, [
    data,
    theme,
    legend,
    legendPosition,
    grid,
    tooltip,
    smooth,
    showPoints,
    pointSize,
    stack,
    opacity,
    gradient,
    options,
  ])

  // Loading state
  if (loading) {
    return (
      <View style={{ height, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  // Empty state
  if (!chartOption) {
    return (
      <View
        style={{
          height,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#e5e7eb',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#6b7280', fontSize: 14 }}>{emptyText}</Text>
      </View>
    )
  }

  return <SkiaChart option={chartOption} width={chartWidth} height={height} />
}
