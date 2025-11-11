/**
 * Galaxy UI Charts - Utility Functions
 *
 * Helper functions to transform unified API to ECharts options format
 */

import {
  ChartData,
  BaseChartProps,
  GridConfig,
  TooltipConfig,
  ChartColorSchemes,
  ColorScheme,
} from './types'

/**
 * Transform unified ChartData to ECharts series format
 */
export function transformDataToSeries(
  data: ChartData,
  chartType: string,
  additionalConfig: Record<string, any> = {}
) {
  return data.datasets.map((dataset, index) => ({
    name: dataset.label,
    type: chartType,
    data: dataset.data,
    smooth: dataset.smooth,
    lineStyle: dataset.borderColor
      ? {
          color: dataset.borderColor,
          width: dataset.borderWidth || 2,
        }
      : undefined,
    itemStyle: {
      color: dataset.color || dataset.borderColor || undefined,
    },
    areaStyle: dataset.fill
      ? {
          color: dataset.backgroundColor || dataset.color || undefined,
        }
      : undefined,
    ...additionalConfig,
  }))
}

/**
 * Get default colors for charts
 */
export function getDefaultColors(scheme: ColorScheme = 'default'): string[] {
  return [...ChartColorSchemes[scheme]] as string[]
}

/**
 * Build ECharts tooltip configuration
 */
export function buildTooltipConfig(
  tooltip?: boolean | TooltipConfig
): Record<string, any> | undefined {
  if (tooltip === false) {
    return undefined
  }

  if (tooltip === true || tooltip === undefined) {
    return {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    }
  }

  return {
    show: tooltip.enabled !== false,
    trigger: tooltip.trigger || 'axis',
    formatter: tooltip.formatter,
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
    },
  }
}

/**
 * Build ECharts grid configuration
 */
export function buildGridConfig(grid?: boolean | GridConfig): Record<string, any> {
  if (grid === false) {
    return {
      show: false,
    }
  }

  if (grid === true || grid === undefined) {
    return {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    }
  }

  return {
    show: grid.show !== false,
    left: grid.left || '3%',
    right: grid.right || '4%',
    bottom: grid.bottom || '3%',
    top: grid.top || '15%',
    containLabel: grid.containLabel !== false,
  }
}

/**
 * Build ECharts legend configuration
 */
export function buildLegendConfig(
  legend?: boolean,
  legendPosition: 'top' | 'bottom' | 'left' | 'right' = 'top',
  data?: string[]
): Record<string, any> | undefined {
  if (legend === false) {
    return undefined
  }

  const positionMap = {
    top: { top: '5%', left: 'center' },
    bottom: { bottom: '5%', left: 'center' },
    left: { left: '5%', top: 'middle', orient: 'vertical' },
    right: { right: '5%', top: 'middle', orient: 'vertical' },
  }

  return {
    data: data || [],
    ...positionMap[legendPosition],
  }
}

/**
 * Build ECharts X-axis configuration
 */
export function buildXAxisConfig(labels: string[], type: 'category' | 'value' = 'category') {
  return {
    type,
    data: type === 'category' ? labels : undefined,
    boundaryGap: type === 'category',
    axisLine: {
      lineStyle: {
        color: '#ddd',
      },
    },
    axisLabel: {
      color: '#666',
    },
  }
}

/**
 * Build ECharts Y-axis configuration
 */
export function buildYAxisConfig(type: 'value' | 'category' = 'value') {
  return {
    type,
    axisLine: {
      lineStyle: {
        color: '#ddd',
      },
    },
    axisLabel: {
      color: '#666',
    },
    splitLine: {
      lineStyle: {
        color: '#eee',
        type: 'dashed',
      },
    },
  }
}

/**
 * Build complete ECharts option from unified props
 */
export function buildEChartsOption(props: BaseChartProps & { chartType: string }) {
  const {
    data,
    chartType,
    theme = 'light',
    legend = true,
    legendPosition = 'top',
    grid = true,
    tooltip = true,
    animation = true,
    zoom = false,
    options = {},
  } = props

  const baseOption = {
    color: getDefaultColors('default'),
    tooltip: buildTooltipConfig(tooltip),
    legend: buildLegendConfig(legend, legendPosition, data.datasets.map((d) => d.label)),
    grid: buildGridConfig(grid),
    xAxis: buildXAxisConfig(data.labels),
    yAxis: buildYAxisConfig(),
    series: transformDataToSeries(data, chartType),
    animation: animation,
    animationDuration: animation ? 1000 : 0,
    animationEasing: 'cubicOut',
  }

  // Add zoom/dataZoom if enabled
  if (zoom) {
    Object.assign(baseOption, {
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100,
        },
        {
          start: 0,
          end: 100,
        },
      ],
    })
  }

  // Merge with custom options (user can override anything)
  return {
    ...baseOption,
    ...options,
  }
}

/**
 * Get responsive chart dimensions
 */
export function getResponsiveDimensions(
  width?: number | string,
  height?: number
): { width: string; height: string } {
  return {
    width: typeof width === 'number' ? `${width}px` : width || '100%',
    height: `${height || 300}px`,
  }
}

/**
 * Format number with commas (for tooltips)
 */
export function formatNumber(num: number, decimals = 0): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

/**
 * Calculate percentage
 */
export function calculatePercentage(value: number, total: number): string {
  return ((value / total) * 100).toFixed(1) + '%'
}

/**
 * Generate gradient colors
 */
export function generateGradient(color: string, direction: 'vertical' | 'horizontal' = 'vertical') {
  return {
    type: 'linear',
    x: 0,
    y: direction === 'vertical' ? 0 : 1,
    x2: direction === 'vertical' ? 0 : 1,
    y2: direction === 'vertical' ? 1 : 0,
    colorStops: [
      {
        offset: 0,
        color: color,
      },
      {
        offset: 1,
        color: color + '20', // Add transparency
      },
    ],
  }
}
/**
 * Get theme-specific colors
 */
export function getThemeColors(theme: 'light' | 'dark' = 'light') {
  if (theme === 'dark') {
    return {
      primary: '#3b82f6',
      text: '#e5e7eb',
      tooltipBg: '#1f2937',
      tooltipBorder: '#374151',
      tooltipText: '#f3f4f6',
      grid: '#374151',
      gridLine: '#374151',
      axisLabel: '#9ca3af',
      axis: '#9ca3af',
    }
  }
  return {
    primary: '#3b82f6',
    text: '#374151',
    tooltipBg: '#ffffff',
    tooltipBorder: '#e5e7eb',
    tooltipText: '#111827',
    grid: '#e5e7eb',
    gridLine: '#e5e7eb',
    axisLabel: '#6b7280',
    axis: '#6b7280',
  }
}
