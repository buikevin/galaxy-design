/**
 * Galaxy UI Charts - React Native
 *
 * Unified chart components powered by ECharts (react-native-echarts)
 */

export { LineChart } from './LineChart'
export { BarChart } from './BarChart'
export { PieChart } from './PieChart'
export { DonutChart } from './DonutChart'
export { AreaChart } from './AreaChart'
export { RadarChart } from './RadarChart'
export { ScatterChart } from './ScatterChart'
export { MixedChart } from './MixedChart'
export { GaugeChart } from './GaugeChart'

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
