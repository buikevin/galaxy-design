import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import { cn } from '@/lib/utils'
import type { GaugeChartProps } from './types'

export interface GaugeChartComponentProps extends GaugeChartProps {
  className?: string
}

export const GaugeChart = React.forwardRef<ReactECharts, GaugeChartComponentProps>(
  (props, ref) => {
    const {
      value,
      height = 300,
      width = '100%',
      theme = 'light',
      min = 0,
      max = 100,
      startAngle = 225,
      endAngle = -45,
      splitNumber = 5,
      showProgress = true,
      showPointer = true,
      title,
      unit,
      zones,
      color,
      formatter,
      animation = true,
      loading = false,
      emptyText = 'No data available',
      className,
    } = props

    const chartOption = useMemo<EChartsOption | null>(() => {
      if (value === null || value === undefined) {
        return null
      }

      // Build color zones or use default color
      let axisLineColors: Array<[number, string]>

      if (zones && zones.length > 0) {
        // Convert zones to ECharts format
        axisLineColors = zones.map(zone => [
          (zone.to - min) / (max - min),
          zone.color
        ])
      } else if (Array.isArray(color)) {
        // Gradient colors
        const step = 1 / color.length
        axisLineColors = color.map((c, index) => [
          (index + 1) * step,
          c
        ])
      } else {
        // Single color or default
        const c = color || '#3b82f6'
        axisLineColors = [[1, c]]
      }

      const valueFormatter = formatter || ((v: number) => `${v}${unit || ''}`)

      return {
        series: [
          {
            type: 'gauge',
            startAngle,
            endAngle,
            min,
            max,
            splitNumber,

            // Progress arc
            progress: showProgress ? {
              show: true,
              width: 18,
            } : undefined,

            // Pointer
            pointer: showPointer ? {
              show: true,
              length: '60%',
              width: 6,
            } : {
              show: false,
            },

            // Axis line (background arc)
            axisLine: {
              lineStyle: {
                width: 18,
                color: axisLineColors,
              },
            },

            // Axis tick
            axisTick: {
              show: true,
              distance: -18,
              length: 5,
              lineStyle: {
                color: theme === 'dark' ? '#4b5563' : '#d1d5db',
                width: 1,
              },
            },

            // Split line
            splitLine: {
              show: true,
              distance: -18,
              length: 10,
              lineStyle: {
                color: theme === 'dark' ? '#4b5563' : '#d1d5db',
                width: 2,
              },
            },

            // Axis label
            axisLabel: {
              show: true,
              distance: 25,
              color: theme === 'dark' ? '#9ca3af' : '#6b7280',
              fontSize: 11,
            },

            // Anchor (center circle)
            anchor: {
              show: showPointer,
              showAbove: true,
              size: 15,
              itemStyle: {
                borderWidth: 2,
                borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db',
              },
            },

            // Title
            title: {
              show: !!title,
              offsetCenter: [0, '80%'],
              fontSize: 14,
              color: theme === 'dark' ? '#9ca3af' : '#6b7280',
            },

            // Detail (value display)
            detail: {
              valueAnimation: animation,
              formatter: valueFormatter,
              fontSize: 28,
              fontWeight: 'bold',
              color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
              offsetCenter: [0, '10%'],
            },

            data: [
              {
                value,
                name: title || '',
              },
            ],
          },
        ],
      }
    }, [value, min, max, startAngle, endAngle, splitNumber, showProgress, showPointer, title, unit, zones, color, formatter, animation, theme])

    const dimensions = useMemo(() => {
      return {
        height: `${height}px`,
        width: typeof width === 'number' ? `${width}px` : width,
      }
    }, [width, height])

    // Loading state
    if (loading) {
      return (
        <div className={cn('galaxy-gauge-chart w-full', className)}>
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
        <div className={cn('galaxy-gauge-chart w-full', className)}>
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
      <div className={cn('galaxy-gauge-chart w-full', className)}>
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

GaugeChart.displayName = 'GaugeChart'
