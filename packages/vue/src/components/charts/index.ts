/**
 * Galaxy UI Charts - Vue 3 (compatibility barrel)
 *
 * The chart implementations now live in their own component directories
 * (`<chart-name>/`), matching every other component. This barrel keeps
 * `@/components/charts` imports working. Do not add new chart code here.
 */

export { LineChart } from '../line-chart'
export { BarChart } from '../bar-chart'
export { PieChart } from '../pie-chart'
export { DonutChart } from '../donut-chart'
export { AreaChart } from '../area-chart'
export { RadarChart } from '../radar-chart'
export { ScatterChart } from '../scatter-chart'
export { MixedChart } from '../mixed-chart'
export { GaugeChart } from '../gauge-chart'

// Shared chart types + utilities live with the canonical line-chart tree.
export * from '../line-chart/types'
export * from '../line-chart/utils'
