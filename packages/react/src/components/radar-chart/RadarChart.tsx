import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import type { RadarChartProps } from './types'
import { getDefaultColors, getThemeColors } from './utils'

export interface RadarChartComponentProps extends RadarChartProps {
  className?: string
}

export const RadarChart = React.forwardRef<ReactECharts, RadarChartComponentProps>(
  (props, ref) => {
    const {
      data,
      height = 300,
      width = '100%',
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
      className,
    } = props

    const chartOption = useMemo<EChartsOption | null>(() => {
      if (!data || !data.datasets.length) {
        return null
      }

      const colors = getDefaultColors()

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
            fontSize: 12,
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
            fontSize: 12,
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
            fontSize: 11,
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
                width: 3,
              },
            },
          },
        ],
      }
    }, [data, theme, legend, legendPosition, shape, splitNumber, maxValue, fill, opacity])

    if (loading) {
      return (
        <div
          style={{ height: typeof height === 'number' ? `${height}px` : height, width }}
          className={`flex items-center justify-center ${className || ''}`}
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )
    }

    if (!data || !data.datasets.length || !chartOption) {
      return (
        <div
          style={{ height: typeof height === 'number' ? `${height}px` : height, width }}
          className={`flex items-center justify-center text-gray-500 ${className || ''}`}
        >
          {emptyText}
        </div>
      )
    }

    return (
      <ReactECharts
        ref={ref}
        option={chartOption}
        style={{ height: typeof height === 'number' ? `${height}px` : height, width }}
        className={className}
      />
    )
  }
)

RadarChart.displayName = 'RadarChart'
