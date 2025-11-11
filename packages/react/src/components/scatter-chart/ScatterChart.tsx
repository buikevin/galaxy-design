import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import type { ScatterChartProps } from './types'
import { getDefaultColors } from './utils'

export interface ScatterChartComponentProps extends ScatterChartProps {
  className?: string
}

export const ScatterChart = React.forwardRef<ReactECharts, ScatterChartComponentProps>(
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
      symbolSize = 10,
      opacity = 0.8,
      xAxisLabel,
      yAxisLabel,
      className,
    } = props

    const chartOption = useMemo<EChartsOption | null>(() => {
      if (!data || !data.datasets.length) {
        return null
      }

      const colors = getDefaultColors()

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
          type: 'scatter' as const,
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
            focus: 'series' as const,
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
            fontSize: 12,
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
            fontSize: 12,
            color: theme === 'dark' ? '#e5e7eb' : '#374151',
          },
        } : {
          show: false,
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%',
          top: legend ? '15%' : '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          name: xAxisLabel,
          nameLocation: 'middle',
          nameGap: 30,
          nameTextStyle: {
            fontSize: 12,
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          },
          axisLine: {
            lineStyle: {
              color: theme === 'dark' ? '#4b5563' : '#d1d5db',
            },
          },
          axisLabel: {
            fontSize: 11,
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
          nameGap: 50,
          nameTextStyle: {
            fontSize: 12,
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          },
          axisLine: {
            lineStyle: {
              color: theme === 'dark' ? '#4b5563' : '#d1d5db',
            },
          },
          axisLabel: {
            fontSize: 11,
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

ScatterChart.displayName = 'ScatterChart'
