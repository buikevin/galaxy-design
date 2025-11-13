import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxEchartsModule } from 'ngx-echarts'
import type { EChartsOption } from 'echarts'
import type { DonutChartProps, ChartData } from './types'
import { getDefaultColors, formatNumber } from './utils'

@Component({
  selector: 'ui-donut-chart',
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
        class="galaxy-donut-chart"
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
export class DonutChartComponent implements OnInit, OnChanges, DonutChartProps {
  @Input({ required: true }) data!: ChartData
  @Input() height: number = 300
  @Input() width?: number | string = '100%'
  @Input() theme: 'light' | 'dark' = 'light'
  @Input() legend: boolean = true
  @Input() legendPosition: 'top' | 'bottom' | 'left' | 'right' = 'right'
  @Input() animation: boolean = true
  @Input() innerRadius: number = 50
  @Input() outerRadius: number = 70
  @Input() showPercentage: boolean = true
  @Input() labelPosition: 'inside' | 'outside' | 'center' = 'outside'
  @Input() loading: boolean = false
  @Input() emptyText: string = 'No data available'
  @Input() class?: string
  @Input() options?: any = {}

  chartOption: EChartsOption | null = null
  dimensions: { width: string; height: string } = { width: '100%', height: '300px' }

  get containerClass(): string {
    return `galaxy-donut-chart-container w-full ${this.class || ''}`
  }

  ngOnInit(): void {
    this.updateChart()
    this.updateDimensions()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['theme'] || changes['innerRadius'] || changes['showPercentage']) {
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
    const dataset = this.data.datasets[0]
    const total = dataset.data.reduce((sum: number, val: number) => sum + val, 0)

    const pieData = this.data.labels.map((label: string, index: number) => ({
      name: label,
      value: dataset.data[index],
      itemStyle: {
        color: dataset.backgroundColor?.[index] || colors[index % colors.length],
      },
    }))

    this.chartOption = {
      backgroundColor: 'transparent',
      color: colors,
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const percent = ((params.value / total) * 100).toFixed(1)
          return `${params.name}: ${formatNumber(params.value)} (${percent}%)`
        },
        backgroundColor: this.theme === 'dark' ? '#18181b' : '#ffffff',
        borderColor: this.theme === 'dark' ? '#27272a' : '#e4e4e7',
        textStyle: {
          color: this.theme === 'dark' ? '#fafafa' : '#0a0a0a',
        },
      },
      legend: this.legend
        ? {
            orient: this.legendPosition === 'left' || this.legendPosition === 'right'
              ? 'vertical'
              : 'horizontal',
            [this.legendPosition]: this.legendPosition === 'top' || this.legendPosition === 'bottom'
              ? 'center'
              : '0',
            [this.legendPosition === 'top' || this.legendPosition === 'bottom'
              ? this.legendPosition
              : 'middle']: '0',
            textStyle: {
              color: this.theme === 'dark' ? '#fafafa' : '#0a0a0a',
            },
          }
        : undefined,
      series: [
        {
          type: 'pie',
          radius: [`${this.innerRadius}%`, `${this.outerRadius}%`],
          center: ['50%', '50%'],
          data: pieData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            show: this.labelPosition !== 'center',
            position: this.labelPosition === 'inside' ? 'inside' : 'outside',
            formatter: this.showPercentage
              ? (params: any) => {
                  const percent = ((params.value / total) * 100).toFixed(1)
                  return `${params.name}\n${percent}%`
                }
              : '{b}',
            color: this.theme === 'dark' ? '#fafafa' : '#0a0a0a',
          },
          labelLine: {
            show: this.labelPosition === 'outside',
          },
        },
      ],
      ...this.options,
    }
  }

  private updateDimensions(): void {
    this.dimensions = {
      height: `${this.height}px`,
      width: typeof this.width === 'number' ? `${this.width}px` : this.width || '100%',
    }
  }
}
