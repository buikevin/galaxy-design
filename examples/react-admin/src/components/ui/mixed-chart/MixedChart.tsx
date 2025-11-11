import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import { cn } from '@/lib/utils'
import type { MixedChartProps } from './types'
import { getDefaultColors } from './utils'

export interface MixedChartComponentProps extends MixedChartProps {
  className?: string
}

export const MixedChart = React.forwardRef<ReactECharts, MixedChartComponentProps>(
  (props, ref) => {
    const {
      data,
      height = 300,
      width = '100%',
      theme = 'light',
      legend = true,
      legendPosition = 'top',
      grid = true,
      tooltip = true,
      animation = true,
      loading = false,
      emptyText = 'No data available',
      className,
      options = {},
    } = props

    const chartOption = useMemo<EChartsOption | null>(() => {
      if (!data || !data.datasets || data.datasets.length === 0) {
        return null
      }

      const colors = getDefaultColors()

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
            smooth: dataset.smooth !== false,
            showSymbol: true,
            symbolSize: 6,
            lineStyle: {
              width: 2,
            },
          }
        } else if (chartType === 'bar') {
          return {
            ...baseSeries,
            barMaxWidth: 50,
          }
        } else if (chartType === 'area') {
          return {
            ...baseSeries,
            smooth: true,
            showSymbol: true,
            symbolSize: 6,
            areaStyle: {
              opacity: 0.3,
            },
          }
        }

        return baseSeries
      })

      return {
        backgroundColor: 'transparent',
        color: colors,
        tooltip: tooltip
          ? {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: theme === 'dark' ? '#9ca3af' : '#6b7280',
                },
              },
              backgroundColor: theme === 'dark' ? '#18181b' : '#ffffff',
              borderColor: theme === 'dark' ? '#27272a' : '#e4e4e7',
              textStyle: {
                color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
              },
            }
          : undefined,
        legend: legend
          ? {
              data: data.datasets.map((d) => d.label),
              [legendPosition]: legendPosition === 'top' || legendPosition === 'bottom' ? 'center' : '5%',
              [legendPosition === 'left' || legendPosition === 'right' ? 'top' : legendPosition]:
                legendPosition === 'left' || legendPosition === 'right' ? 'middle' : '5%',
              orient: legendPosition === 'left' || legendPosition === 'right' ? 'vertical' : 'horizontal',
              textStyle: {
                color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
              },
            }
          : undefined,
        grid: grid
          ? {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: legend && legendPosition === 'top' ? '15%' : '10%',
              containLabel: true,
            }
          : undefined,
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
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
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
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          },
          splitLine: {
            lineStyle: {
              color: theme === 'dark' ? '#374151' : '#e5e7eb',
            },
          },
        },
        series,
        ...options,
      }
    }, [data, theme, legend, legendPosition, grid, tooltip, options])

    const dimensions = useMemo(() => {
      return {
        height: `${height}px`,
        width: typeof width === 'number' ? `${width}px` : width,
      }
    }, [width, height])

    // Loading state
    if (loading) {
      return (
        <div className={cn('galaxy-mixed-chart w-full', className)}>
          <div
            style={{ height: `${height}px` }}
            className="flex items-center justify-center"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      )
    }

    // Empty state
    if (!chartOption) {
      return (
        <div className={cn('galaxy-mixed-chart w-full', className)}>
          <div
            style={{ height: `${height}px` }}
            className="flex items-center justify-center border border-border rounded-md"
          >
            <p className="text-muted-foreground text-sm">{emptyText}</p>
          </div>
        </div>
      )
    }

    return (
      <div className={cn('galaxy-mixed-chart w-full', className)}>
        <ReactECharts
          ref={ref}
          option={chartOption}
          style={dimensions}
          theme={theme}
          showLoading={loading}
          opts={{ renderer: 'canvas' }}
        />
      </div>
    )
  }
)

MixedChart.displayName = 'MixedChart'
