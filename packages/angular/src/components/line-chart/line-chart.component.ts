/**
 * Galaxy UI Charts - Angular LineChart Component
 *
 * A responsive line chart component powered by ECharts
 */

import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxEchartsModule, NgxEchartsDirective } from 'ngx-echarts'
import type { EChartsOption } from 'echarts'
import { cn } from '@/lib/utils'
import type { LineChartProps, ChartData } from './types'
import {
  buildEChartsOption,
  getResponsiveDimensions,
  transformDataToSeries,
} from './utils'

@Component({
  selector: 'ui-line-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="containerClass">
      <!-- Empty State -->
      <div
        *ngIf="!chartOption && !loading"
        class="flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
        [style.height]="dimensions.height"
      >
        <p class="text-gray-500 dark:text-gray-400">{{ emptyText }}</p>
      </div>

      <!-- Chart -->
      <div
        *ngIf="chartOption"
        echarts
        [options]="chartOption"
        [theme]="theme"
        [loading]="loading"
        [loadingOpts]="loadingOption"
        [style.height]="dimensions.height"
        [style.width]="dimensions.width"
        class="echarts-container"
      ></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }

      .echarts-container {
        position: relative;
      }

      /* Dark mode support */
      :host-context(.dark) {
        color-scheme: dark;
      }
    `,
  ],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input({ required: true }) data!: ChartData
  @Input() height: number = 300
  @Input() width?: number | string
  @Input() theme: 'light' | 'dark' = 'light'
  @Input() legend: boolean = true
  @Input() legendPosition: 'top' | 'bottom' | 'left' | 'right' = 'top'
  @Input() grid: boolean | any = true
  @Input() tooltip: boolean | any = true
  @Input() animation: boolean = true
  @Input() smooth: boolean = true
  @Input() showPoints: boolean = true
  @Input() pointSize: number = 6
  @Input() area: boolean = false
  @Input() stack: boolean = false
  @Input() zoom: boolean = false
  @Input() dataLabels: boolean = false
  @Input() loading: boolean = false
  @Input() emptyText: string = 'No data available'
  @Input() className?: string
  @Input() options: Record<string, any> = {}

  chartOption: EChartsOption | null = null
  dimensions: { width: string; height: string } = { width: '100%', height: '300px' }

  loadingOption = {
    text: 'Loading...',
    color: '#3b82f6',
    textColor: '#666',
    maskColor: 'rgba(255, 255, 255, 0.8)',
    zlevel: 0,
  }

  get containerClass(): string {
    return cn('galaxy-line-chart w-full', this.className)
  }

  ngOnInit(): void {
    this.updateChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['data'] ||
      changes['height'] ||
      changes['width'] ||
      changes['theme'] ||
      changes['smooth'] ||
      changes['area'] ||
      changes['options']
    ) {
      this.updateChart()
    }
  }

  private updateChart(): void {
    // Update dimensions
    this.dimensions = getResponsiveDimensions(this.width, this.height)

    // Check for empty data
    if (!this.data || !this.data.datasets || this.data.datasets.length === 0) {
      this.chartOption = null
      return
    }

    // Build base option
    const baseOption = buildEChartsOption({
      data: this.data,
      height: this.height,
      width: this.width,
      theme: this.theme,
      legend: this.legend,
      legendPosition: this.legendPosition,
      grid: this.grid,
      tooltip: this.tooltip,
      animation: this.animation,
      zoom: this.zoom,
      options: this.options,
      chartType: 'line',
    })

    // Apply line-specific configurations
    const series = transformDataToSeries(this.data, 'line', {
      smooth: this.smooth,
      showSymbol: this.showPoints,
      symbolSize: this.pointSize,
      stack: this.stack ? 'total' : undefined,
      areaStyle: this.area
        ? {
            opacity: 0.3,
          }
        : undefined,
      label: this.dataLabels
        ? {
            show: true,
            position: 'top',
          }
        : undefined,
    })

    this.chartOption = {
      ...baseOption,
      series,
    }
  }
}
