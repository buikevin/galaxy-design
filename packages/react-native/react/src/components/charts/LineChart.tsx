/**
 * Galaxy UI Charts - React LineChart Component
 *
 * A responsive line chart component powered by ECharts
 */

import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import { cn } from '@/lib/utils'
import type { LineChartProps } from './types'
import {
  buildEChartsOption,
  getResponsiveDimensions,
  transformDataToSeries,
} from './utils'

export interface LineChartComponentProps extends LineChartProps {
  className?: string
}

export const LineChart = React.forwardRef<ReactECharts, LineChartComponentProps>(
  (props, ref) => {
    const {
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
    } = props

    // Build ECharts option
    const chartOption = useMemo<EChartsOption | null>(() => {
      // Check for empty data
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
      width,
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

    // Get responsive dimensions
    const dimensions = useMemo(
      () => getResponsiveDimensions(width, height),
      [width, height]
    )

    // Loading option
    const loadingOption = useMemo(
      () => ({
        text: 'Loading...',
        color: '#3b82f6',
        textColor: '#666',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        zlevel: 0,
      }),
      []
    )

    // Empty state
    if (!chartOption && !loading) {
      return (
        <div className={cn('galaxy-line-chart w-full', className)}>
          <div
            className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
            style={{ height: dimensions.height }}
          >
            <p className="text-gray-500 dark:text-gray-400">{emptyText}</p>
          </div>
        </div>
      )
    }

    // Render chart
    return (
      <div className={cn('galaxy-line-chart w-full', className)}>
        {chartOption && (
          <ReactECharts
            ref={ref}
            option={chartOption}
            style={dimensions}
            theme={theme}
            showLoading={loading}
            loadingOption={loadingOption}
            opts={{ renderer: 'canvas' }}
            notMerge
            lazyUpdate
          />
        )}
      </div>
    )
  }
)

LineChart.displayName = 'LineChart'

export default LineChart
