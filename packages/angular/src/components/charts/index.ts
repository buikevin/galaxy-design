/**
 * Galaxy UI Charts - Angular
 *
 * Unified chart components powered by ECharts
 */

export { LineChartComponent } from './line-chart.component'
export { BarChartComponent } from './bar-chart.component'
export { PieChartComponent } from './pie-chart.component'
export { DonutChartComponent } from './donut-chart.component'
export { AreaChartComponent } from './area-chart.component'
export { RadarChartComponent } from './radar-chart.component'
export { ScatterChartComponent } from './scatter-chart.component'
export { MixedChartComponent } from './mixed-chart.component'
export { GaugeChartComponent } from './gauge-chart.component'

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
