/**
 * Galaxy UI Charts - React Native Utility Functions
 *
 * Helper functions optimized for mobile (React Native)
 */

import type {
  ChartData,
  BaseChartProps,
  GridConfig,
  TooltipConfig,
  ChartColorSchemes,
  ColorScheme,
} from './types'

/**
 * Chart color schemes (same as web)
 */
export { ChartColorSchemes } from './types'

/**
 * Transform unified ChartData to ECharts series format
 */
export function transformDataToSeries(
  data: ChartData,
  chartType: string,
  additionalConfig: Record<string, any> = {}
) {
  return data.datasets.map((dataset) => ({
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
  return ChartColorSchemes[scheme]
}

/**
 * Build ECharts tooltip configuration (mobile-optimized)
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
      confine: true, // Keep tooltip within chart area on mobile
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#999',
          width: 1,
        },
      },
    }
  }

  return {
    show: tooltip.enabled !== false,
    trigger: tooltip.trigger || 'axis',
    formatter: tooltip.formatter,
    confine: true,
    axisPointer: {
      type: 'line',
    },
  }
}

/**
 * Build ECharts grid configuration (mobile-optimized with more padding)
 */
export function buildGridConfig(grid?: boolean | GridConfig): Record<string, any> {
  if (grid === false) {
    return {
      show: false,
    }
  }

  if (grid === true || grid === undefined) {
    return {
      left: '5%',
      right: '5%',
      bottom: '8%',
      top: '20%',
      containLabel: true,
    }
  }

  return {
    show: grid.show !== false,
    left: grid.left || '5%',
    right: grid.right || '5%',
    bottom: grid.bottom || '8%',
    top: grid.top || '20%',
    containLabel: grid.containLabel !== false,
  }
}

/**
 * Build ECharts legend configuration (mobile-optimized)
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
    textStyle: {
      fontSize: 12, // Slightly smaller on mobile
    },
  }
}

/**
 * Build ECharts X-axis configuration (mobile-optimized)
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
      fontSize: 11, // Smaller font for mobile
      rotate: labels.length > 6 ? 45 : 0, // Rotate if many labels
    },
  }
}

/**
 * Build ECharts Y-axis configuration (mobile-optimized)
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
      fontSize: 11, // Smaller font for mobile
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
 * Build complete ECharts option from unified props (mobile-optimized)
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
    animationDuration: animation ? 800 : 0, // Slightly faster on mobile
    animationEasing: 'cubicOut',
  }

  // Add zoom/dataZoom if enabled (less common on mobile)
  if (zoom) {
    Object.assign(baseOption, {
      dataZoom: [
        {
          type: 'inside', // Inside zoom is better for mobile
          start: 0,
          end: 100,
        },
      ],
    })
  }

  // Merge with custom options
  return {
    ...baseOption,
    ...options,
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
