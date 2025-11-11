/**
 * Galaxy UI Charts - Unified Type Definitions
 *
 * These types are shared across all frameworks (Vue, React, Angular, React Native, Flutter)
 * to ensure consistent API across platforms.
 */

/**
 * Chart dataset configuration
 */
export interface ChartDataset {
  /** Label for the dataset (shown in legend) */
  label: string
  /** Data points for the dataset */
  data: number[]
  /** Chart type for this dataset (used in mixed charts) */
  type?: 'line' | 'bar' | 'area'
  /** Color for the line/bar/area */
  color?: string
  /** Alternative color specification (for compatibility) */
  borderColor?: string
  backgroundColor?: string | string[]
  /** Line/border width */
  borderWidth?: number
  /** Fill area under line (for line/area charts) */
  fill?: boolean
  /** Smooth curve for line charts */
  smooth?: boolean
}

/**
 * Chart data structure
 */
export interface ChartData {
  /** X-axis labels */
  labels: string[]
  /** Array of datasets to display */
  datasets: ChartDataset[]
}

/**
 * Chart types supported by Galaxy UI
 */
export type ChartType =
  | 'line'      // Line chart
  | 'bar'       // Bar chart (vertical)
  | 'pie'       // Pie chart
  | 'donut'     // Donut chart
  | 'area'      // Area chart (filled line)
  | 'radar'     // Radar/Spider chart
  | 'scatter'   // Scatter plot

/**
 * Theme mode
 */
export type ChartTheme = 'light' | 'dark'

/**
 * Legend position
 */
export type LegendPosition = 'top' | 'bottom' | 'left' | 'right'

/**
 * Tooltip configuration
 */
export interface TooltipConfig {
  /** Enable/disable tooltip */
  enabled?: boolean
  /** Trigger type */
  trigger?: 'axis' | 'item'
  /** Custom formatter function */
  formatter?: string | ((params: any) => string)
}

/**
 * Grid configuration
 */
export interface GridConfig {
  /** Show/hide grid lines */
  show?: boolean
  /** Grid left margin */
  left?: string | number
  /** Grid right margin */
  right?: string | number
  /** Grid top margin */
  top?: string | number
  /** Grid bottom margin */
  bottom?: string | number
  /** Contain label in grid */
  containLabel?: boolean
}

/**
 * Axis configuration
 */
export interface AxisConfig {
  /** Show/hide axis */
  show?: boolean
  /** Axis type */
  type?: 'category' | 'value' | 'time' | 'log'
  /** Axis name */
  name?: string
  /** Min value */
  min?: number | string
  /** Max value */
  max?: number | string
  /** Axis line style */
  axisLine?: {
    show?: boolean
    lineStyle?: {
      color?: string
      width?: number
    }
  }
}

/**
 * Base chart component props
 * All chart components should extend this interface
 */
export interface BaseChartProps {
  /** Chart data */
  data: ChartData

  /** Chart height in pixels */
  height?: number

  /** Chart width (string for responsive, number for fixed) */
  width?: number | string

  /** Theme mode */
  theme?: ChartTheme

  /** Enable/disable legend */
  legend?: boolean

  /** Legend position */
  legendPosition?: LegendPosition

  /** Enable/disable grid lines */
  grid?: boolean | GridConfig

  /** Enable/disable animation */
  animation?: boolean

  /** Tooltip configuration */
  tooltip?: boolean | TooltipConfig

  /** Enable/disable zoom */
  zoom?: boolean

  /** Enable/disable data labels on points */
  dataLabels?: boolean

  /** Custom CSS class name */
  className?: string

  /** Loading state */
  loading?: boolean

  /** Empty state message */
  emptyText?: string

  /** Framework-specific advanced options */
  options?: Record<string, any>
}

/**
 * Line chart specific props
 */
export interface LineChartProps extends BaseChartProps {
  /** Smooth curve lines */
  smooth?: boolean

  /** Show points on line */
  showPoints?: boolean

  /** Point size */
  pointSize?: number

  /** Enable area fill */
  area?: boolean

  /** Stack multiple datasets */
  stack?: boolean
}

/**
 * Bar chart specific props
 */
export interface BarChartProps extends BaseChartProps {
  /** Horizontal bars */
  horizontal?: boolean

  /** Stack multiple datasets */
  stack?: boolean

  /** Bar width percentage */
  barWidth?: string | number

  /** Gap between bars */
  barGap?: string | number

  /** Enable gradient fill */
  gradient?: boolean
}

/**
 * Pie/Donut chart specific props
 */
export interface PieChartProps extends BaseChartProps {
  /** Inner radius for donut chart (0-100) */
  innerRadius?: number

  /** Outer radius */
  outerRadius?: number

  /** Start angle */
  startAngle?: number

  /** Show percentage labels */
  showPercentage?: boolean

  /** Label position */
  labelPosition?: 'inside' | 'outside' | 'center'
}

/**
 * Donut chart specific props (extends PieChartProps with different defaults)
 */
export interface DonutChartProps extends PieChartProps {
  // Donut chart uses the same props as Pie chart
  // but with a default innerRadius of 50% instead of 0%
}

/**
 * Area chart specific props
 */
export interface AreaChartProps extends LineChartProps {
  /** Always fill area (override dataset settings) */
  fillArea?: boolean

  /** Fill opacity (0-1) */
  fillOpacity?: number
}

/**
 * Radar chart specific props
 */
export interface RadarChartProps extends BaseChartProps {
  /** Radar grid shape */
  shape?: 'polygon' | 'circle'

  /** Number of split lines */
  splitNumber?: number

  /** Maximum value for indicators */
  maxValue?: number

  /** Enable area fill */
  fill?: boolean

  /** Area fill opacity (0-1) */
  opacity?: number
}

/**
 * Scatter chart specific props
 */
export interface ScatterChartProps extends BaseChartProps {
  /** Symbol size for scatter points */
  symbolSize?: number

  /** Point opacity (0-1) */
  opacity?: number

  /** X-axis label */
  xAxisLabel?: string

  /** Y-axis label */
  yAxisLabel?: string
}

/**
 * Mixed/Combo chart specific props
 * Allows combining multiple chart types (line, bar, area) in one chart
 */
export interface MixedChartProps extends BaseChartProps {
  // Mixed chart uses base props
  // Each dataset can specify its own type via ChartDataset.type
}

/**
 * Gauge chart specific props
 * For displaying KPIs, progress, and metrics with a gauge visualization
 */
export interface GaugeChartProps extends Omit<BaseChartProps, 'data'> {
  /** Current value to display */
  value: number

  /** Minimum value */
  min?: number

  /** Maximum value */
  max?: number

  /** Start angle in degrees (0 = right, 90 = bottom, 180 = left, 270 = top) */
  startAngle?: number

  /** End angle in degrees */
  endAngle?: number

  /** Number of split lines */
  splitNumber?: number

  /** Show progress arc */
  showProgress?: boolean

  /** Show pointer/needle */
  showPointer?: boolean

  /** Gauge title */
  title?: string

  /** Unit text (e.g., '%', 'km/h', 'MB') */
  unit?: string

  /** Color zones for different value ranges */
  zones?: Array<{
    from: number
    to: number
    color: string
  }>

  /** Single color or gradient colors */
  color?: string | string[]

  /** Format function for displayed value */
  formatter?: (value: number) => string
}

/**
 * Chart color schemes
 */
export const ChartColorSchemes = {
  default: [
    '#3b82f6', // blue
    '#10b981', // green
    '#f59e0b', // amber
    '#ef4444', // red
    '#8b5cf6', // violet
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#f97316', // orange
  ],
  pastel: [
    '#93c5fd',
    '#86efac',
    '#fcd34d',
    '#fca5a5',
    '#c4b5fd',
    '#f9a8d4',
    '#67e8f9',
    '#fdba74',
  ],
  vivid: [
    '#2563eb',
    '#059669',
    '#d97706',
    '#dc2626',
    '#7c3aed',
    '#db2777',
    '#0891b2',
    '#ea580c',
  ],
  monochrome: [
    '#1f2937',
    '#374151',
    '#4b5563',
    '#6b7280',
    '#9ca3af',
    '#d1d5db',
    '#e5e7eb',
    '#f3f4f6',
  ],
} as const

/**
 * Chart utility type for color scheme
 */
export type ColorScheme = keyof typeof ChartColorSchemes

/**
 * Helper function to get colors from scheme
 */
export function getColorScheme(scheme: ColorScheme = 'default'): string[] {
  return [...ChartColorSchemes[scheme]] as string[]
}