import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxEchartsModule } from 'ngx-echarts'
import type { EChartsOption } from 'echarts'
import type { MixedChartProps, ChartData } from './types'
import { getDefaultColors } from './utils'

@Component({
  selector: 'ui-mixed-chart',
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
        class="galaxy-mixed-chart"
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
export class MixedChartComponent implements OnInit, OnChanges, MixedChartProps {
  @Input({ required: true }) data!: ChartData
  @Input() height: number = 300
  @Input() width?: number | string = '100%'
  @Input() theme: 'light' | 'dark' = 'light'
  @Input() legend: boolean = true
  @Input() legendPosition: 'top' | 'bottom' | 'left' | 'right' = 'top'
  @Input() grid: boolean = true
  @Input() tooltip: boolean = true
  @Input() animation: boolean = true
  @Input() loading: boolean = false
  @Input() emptyText: string = 'No data available'
  @Input() class?: string
  @Input() options?: any = {}

  chartOption: EChartsOption | null = null
  dimensions: { width: string; height: string } = { width: '100%', height: '300px' }

  get containerClass(): string {
    return `galaxy-mixed-chart-container w-full ${this.class || ''}`
  }

  ngOnInit(): void {
    this.updateChart()
    this.updateDimensions()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['theme']) {
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

    const colors = getDefaultColors()

    // Build series with mixed types
    const series = this.data.datasets.map((dataset: any, index: number) => {
      const chartType = dataset.type || 'line'
      const color = dataset.color || colors[index % colors.length]

      const baseSeries: any = {
        name: dataset.label,
        type: chartType === 'area' ? 'line' : chartType,
        data: dataset.data,
        itemStyle: {
          color: color,
        },
      }

      // Add type-specific configurations
      if (chartType === 'line') {
        return {
          ...baseSeries,
          smooth: dataset.smooth !== false,
          showSymbol: true,
          symbolSize: 6,
          lineStyle: {
            width: 2,
          },
        }
      } else if (chartType === 'bar') {
        return {
          ...baseSeries,
          barMaxWidth: 50,
        }
      } else if (chartType === 'area') {
        return {
          ...baseSeries,
          smooth: true,
          showSymbol: true,
          symbolSize: 6,
          areaStyle: {
            opacity: 0.3,
          },
        }
      }

      return baseSeries
    })

    this.chartOption = {
      backgroundColor: 'transparent',
      color: colors,
      tooltip: this.tooltip
        ? {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
              },
            },
            backgroundColor: this.theme === 'dark' ? '#18181b' : '#ffffff',
            borderColor: this.theme === 'dark' ? '#27272a' : '#e4e4e7',
            textStyle: {
              color: this.theme === 'dark' ? '#fafafa' : '#0a0a0a',
            },
          }
        : undefined,
      legend: this.legend
        ? {
            data: this.data.datasets.map((d: any) => d.label),
            [this.legendPosition]:
              this.legendPosition === 'top' || this.legendPosition === 'bottom' ? 'center' : '5%',
            [this.legendPosition === 'left' || this.legendPosition === 'right' ? 'top' : this.legendPosition]:
              this.legendPosition === 'left' || this.legendPosition === 'right' ? 'middle' : '5%',
            orient: this.legendPosition === 'left' || this.legendPosition === 'right' ? 'vertical' : 'horizontal',
            textStyle: {
              color: this.theme === 'dark' ? '#fafafa' : '#0a0a0a',
            },
          }
        : undefined,
      grid: this.grid
        ? {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: this.legend && this.legendPosition === 'top' ? '15%' : '10%',
            containLabel: true,
          }
        : undefined,
      xAxis: {
        type: 'category',
        data: this.data.labels,
        boundaryGap: true,
        axisLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },
        axisLabel: {
          color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },
        axisLabel: {
          color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
        splitLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#374151' : '#e5e7eb',
          },
        },
      },
      series,
      ...this.options,
    }
  }

  private updateDimensions(): void {
    this.dimensions = {
      height: `${this.height}px`,
      width: typeof this.width === 'number' ? `${this.width}px` : this.width,
    }
  }
}
