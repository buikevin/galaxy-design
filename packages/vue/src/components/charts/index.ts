/**
 * Galaxy UI Charts - Vue 3
 *
 * Unified chart components powered by ECharts
 */

export { default as LineChart } from './LineChart.vue'
export { default as BarChart } from './BarChart.vue'
export { default as PieChart } from './PieChart.vue'
export { default as DonutChart } from './DonutChart.vue'
export { default as AreaChart } from './AreaChart.vue'
export { default as RadarChart } from './RadarChart.vue'
export { default as ScatterChart } from './ScatterChart.vue'
export { default as MixedChart } from './MixedChart.vue'

// Export types
export type {
  ChartData,
  ChartDataset,
  ChartType,
  ChartTheme,
  BaseChartProps,
  LineChartProps,
  BarChartProps,
  PieChartProps,
  DonutChartProps,
  AreaChartProps,
  RadarChartProps,
  ScatterChartProps,
  MixedChartProps,
  ColorScheme,
  LegendPosition,
  TooltipConfig,
  GridConfig,
  AxisConfig,
} from './types'

// Export utilities
export {
  getDefaultColors,
  formatNumber,
  calculatePercentage,
  generateGradient,
  ChartColorSchemes,
} from './utils'
