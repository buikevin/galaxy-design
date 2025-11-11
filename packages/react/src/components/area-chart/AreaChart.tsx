import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import { cn } from '@/lib/utils'
import type { AreaChartProps } from './types'
import { getDefaultColors, transformDataToSeries, getThemeColors, formatNumber } from './utils'

export interface AreaChartComponentProps extends AreaChartProps {
  className?: string
}

export const AreaChart = React.forwardRef<ReactECharts, AreaChartComponentProps>(
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
      smooth = true,
      showPoints = true,
      pointSize = 6,
      stack = false,
      opacity = 0.6,
      gradient = false,
      loading = false,
      emptyText = 'No data available',
      zoom = false,
      className,
      options = {},
    } = props

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
                label: {
                  backgroundColor: themeColors.primary,
                },
              },
              backgroundColor: themeColors.tooltipBg,
              borderColor: themeColors.tooltipBorder,
              textStyle: {
                color: themeColors.tooltipText,
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
                color: themeColors.text,
              },
            }
          : undefined,
        grid: typeof grid === 'object'
          ? { ...grid, containLabel: true }
          : grid
            ? {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
              }
            : undefined,
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.labels,
          axisLine: { lineStyle: { color: themeColors.axis } },
          axisLabel: { color: themeColors.axisLabel },
        },
        yAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: themeColors.axis } },
          axisLabel: { color: themeColors.axisLabel },
          splitLine: {
            lineStyle: { color: themeColors.gridLine, type: 'dashed' },
          },
        },
        dataZoom: zoom
          ? [
              {
                type: 'inside',
                start: 0,
                end: 100,
              },
              {
                start: 0,
                end: 100,
              },
            ]
          : undefined,
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
      zoom,
      options,
    ])

    const dimensions = useMemo(() => {
      return {
        height: `${height}px`,
        width: typeof width === 'number' ? `${width}px` : width,
      }
    }, [width, height])

    // Loading state
    if (loading) {
      return (
        <div className={cn('galaxy-area-chart w-full', className)}>
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
        <div className={cn('galaxy-area-chart w-full', className)}>
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
      <div className={cn('galaxy-area-chart w-full', className)}>
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

AreaChart.displayName = 'AreaChart'
