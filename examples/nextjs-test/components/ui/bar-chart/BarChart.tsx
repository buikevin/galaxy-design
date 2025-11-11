import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import { cn } from '@/lib/utils'
import type { BarChartProps } from './types'
import {
  buildEChartsOption,
  getResponsiveDimensions,
  transformDataToSeries,
} from './utils'

export interface BarChartComponentProps extends BarChartProps {
  className?: string
}

export const BarChart = React.forwardRef<ReactECharts, BarChartComponentProps>(
  (props, ref) => {
    const {
      data,
      height = 300,
      width = '100%',
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
    } = props

    const chartOption = useMemo<EChartsOption | null>(() => {
      if (!data || !data.datasets || data.datasets.length === 0) {
        return null
      }

      const baseOption = buildEChartsOption({
        data,
        height,
        width,
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
              fontSize: 12,
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
      width,
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

    const dimensions = useMemo(() => {
      return getResponsiveDimensions(width, height)
    }, [width, height])

    // Loading state
    if (loading) {
      return (
        <div className={cn('galaxy-bar-chart w-full', className)}>
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
        <div className={cn('galaxy-bar-chart w-full', className)}>
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
      <div className={cn('galaxy-bar-chart w-full', className)}>
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

BarChart.displayName = 'BarChart'
