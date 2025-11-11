import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxEchartsModule } from 'ngx-echarts'
import type { EChartsOption } from 'echarts'
import type { BarChartProps, ChartData } from './types'
import {
  buildEChartsOption,
  getResponsiveDimensions,
  transformDataToSeries,
} from './utils'

@Component({
  selector: 'ui-bar-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  template: `
    <div [class]="containerClass">
      <!-- Loading state -->
      <div
        *ngIf="loading"
        [style.height]="dimensions.height"
        class="flex items-center justify-center"
      >
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>

      <!-- Empty state -->
      <div
        *ngIf="!chartOption && !loading"
        [style.height]="dimensions.height"
        class="flex items-center justify-center border border-border rounded-md"
      >
        <p class="text-muted-foreground text-sm">{{ emptyText }}</p>
      </div>

      <!-- Chart -->
      <div
        *ngIf="chartOption && !loading"
        echarts
        [options]="chartOption"
        [theme]="theme"
        [loading]="loading"
        [style.height]="dimensions.height"
        [style.width]="dimensions.width"
        class="galaxy-bar-chart"
      ></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class BarChartComponent implements OnInit, OnChanges, BarChartProps {
  @Input({ required: true }) data!: ChartData
  @Input() height: number = 300
  @Input() width?: number | string = '100%'
  @Input() theme: 'light' | 'dark' = 'light'
  @Input() legend: boolean = true
  @Input() legendPosition: 'top' | 'bottom' | 'left' | 'right' = 'top'
  @Input() grid?: boolean | any
  @Input() tooltip?: boolean | any
  @Input() animation: boolean = true
  @Input() horizontal: boolean = false
  @Input() stacked: boolean = false
  @Input() showDataLabels: boolean = false
  @Input() loading: boolean = false
  @Input() emptyText: string = 'No data available'
  @Input() class?: string
  @Input() options?: any = {}

  chartOption: EChartsOption | null = null
  dimensions: { width: string; height: string } = { width: '100%', height: '300px' }

  get containerClass(): string {
    return `galaxy-bar-chart-container w-full ${this.class || ''}`
  }

  ngOnInit(): void {
    this.updateChart()
    this.updateDimensions()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['theme'] || changes['horizontal'] || changes['stacked']) {
      this.updateChart()
    }
    if (changes['width'] || changes['height']) {
      this.updateDimensions()
    }
  }

  private updateChart(): void {
    if (!this.data || !this.data.datasets || this.data.datasets.length === 0) {
      this.chartOption = null
      return
    }

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
      options: this.options,
      chartType: 'bar',
    })

    // Transform data to bar series with additional config
    const series = transformDataToSeries(this.data, 'bar', {
      stack: this.stacked ? 'total' : undefined,
      label: this.showDataLabels
        ? {
            show: true,
            position: this.horizontal ? 'right' : 'top',
          }
        : undefined,
    })

    // Swap axes for horizontal bar chart
    if (this.horizontal) {
      this.chartOption = {
        ...baseOption,
        xAxis: baseOption.yAxis as any,
        yAxis: {
          type: 'category',
          data: this.data.labels,
          axisLine: {
            lineStyle: {
              color: this.theme === 'dark' ? '#52525b' : '#e4e4e7',
            },
          },
          axisLabel: {
            color: this.theme === 'dark' ? '#a1a1aa' : '#71717a',
            fontSize: 12,
          },
        },
        series,
      }
    } else {
      this.chartOption = {
        ...baseOption,
        series,
      }
    }
  }

  private updateDimensions(): void {
    this.dimensions = getResponsiveDimensions(this.width, this.height)
  }
}
