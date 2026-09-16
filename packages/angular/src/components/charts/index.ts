/**
 * Galaxy UI Charts - Angular (compatibility barrel)
 *
 * The chart implementations now live in their own component directories
 * (`<chart-name>/`), matching every other component. This barrel keeps
 * `@/components/charts` imports working. Do not add new chart code here.
 */

export { LineChartComponent } from '../line-chart'
export { BarChartComponent } from '../bar-chart'
export { PieChartComponent } from '../pie-chart'
export { DonutChartComponent } from '../donut-chart'
export { AreaChartComponent } from '../area-chart'
export { RadarChartComponent } from '../radar-chart'
export { ScatterChartComponent } from '../scatter-chart'
export { MixedChartComponent } from '../mixed-chart'
export { GaugeChartComponent } from '../gauge-chart'

// Shared chart types + utilities live with the canonical line-chart tree.
export * from '../line-chart/types'
export * from '../line-chart/utils'
