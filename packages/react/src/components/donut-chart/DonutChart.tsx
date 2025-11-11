import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import { cn } from '@/lib/utils'
import type { DonutChartProps } from './types'
import { getDefaultColors } from './utils'

export interface DonutChartComponentProps extends DonutChartProps {
  className?: string
}

export const DonutChart = React.forwardRef<ReactECharts, DonutChartComponentProps>(
  (props, ref) => {
    const {
      data,
      height = 300,
      width = '100%',
      theme = 'light',
      legend = true,
      legendPosition = 'right',
      innerRadius = 50,
      outerRadius = 70,
      showPercentage = true,
      labelPosition = 'outside',
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
      const dataset = data.datasets[0] // Donut charts typically use first dataset
      const total = dataset.data.reduce((sum, val) => sum + val, 0)

      const pieData = data.labels.map((label, index) => ({
        name: label,
        value: dataset.data[index],
        itemStyle: {
          color: dataset.backgroundColor?.[index] || colors[index % colors.length],
        },
      }))

      return {
        backgroundColor: 'transparent',
        color: colors,
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {
            const percent = ((params.value / total) * 100).toFixed(1)
            return `${params.name}: ${formatNumber(params.value)} (${percent}%)`
          },
          backgroundColor: theme === 'dark' ? '#18181b' : '#ffffff',
          borderColor: theme === 'dark' ? '#27272a' : '#e4e4e7',
          textStyle: {
            color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
          },
        },
        legend: legend
          ? {
              orient: legendPosition === 'left' || legendPosition === 'right'
                ? 'vertical'
                : 'horizontal',
              [legendPosition]: legendPosition === 'top' || legendPosition === 'bottom'
                ? 'center'
                : '0',
              [legendPosition === 'top' || legendPosition === 'bottom'
                ? legendPosition
                : 'middle']: '0',
              textStyle: {
                color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
              },
            }
          : undefined,
        series: [
          {
            type: 'pie',
            radius: [`${innerRadius}%`, `${outerRadius}%`],
            center: ['50%', '50%'],
            data: pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            label: {
              show: labelPosition !== 'center',
              position: labelPosition === 'inside' ? 'inside' : 'outside',
              formatter: showPercentage
                ? (params: any) => {
                    const percent = ((params.value / total) * 100).toFixed(1)
                    return `${params.name}\n${percent}%`
                  }
                : '{b}',
              color: theme === 'dark' ? '#fafafa' : '#0a0a0a',
            },
            labelLine: {
              show: labelPosition === 'outside',
            },
          },
        ],
        ...options,
      }
    }, [
      data,
      theme,
      legend,
      legendPosition,
      innerRadius,
      outerRadius,
      showPercentage,
      labelPosition,
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
        <div className={cn('galaxy-donut-chart w-full', className)}>
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
        <div className={cn('galaxy-donut-chart w-full', className)}>
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
      <div className={cn('galaxy-donut-chart w-full', className)}>
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

DonutChart.displayName = 'DonutChart'
