import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxEchartsModule } from 'ngx-echarts'
import type { EChartsOption } from 'echarts'
import type { GaugeChartProps } from './types'

@Component({
  selector: 'ui-gauge-chart',
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
        class="galaxy-gauge-chart"
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
export class GaugeChartComponent implements OnInit, OnChanges, GaugeChartProps {
  @Input({ required: true }) value!: number
  @Input() height: number = 300
  @Input() width?: number | string = '100%'
  @Input() theme: 'light' | 'dark' = 'light'
  @Input() min: number = 0
  @Input() max: number = 100
  @Input() startAngle: number = 225
  @Input() endAngle: number = -45
  @Input() splitNumber: number = 5
  @Input() showProgress: boolean = true
  @Input() showPointer: boolean = true
  @Input() title?: string
  @Input() unit?: string
  @Input() zones?: Array<{ from: number; to: number; color: string }>
  @Input() color?: string | string[]
  @Input() formatter?: (value: number) => string
  @Input() animation: boolean = true
  @Input() loading: boolean = false
  @Input() emptyText: string = 'No data available'
  @Input() class?: string

  chartOption: EChartsOption | null = null
  dimensions: { width: string; height: string } = { width: '100%', height: '300px' }

  get containerClass(): string {
    return `galaxy-gauge-chart-container w-full ${this.class || ''}`
  }

  ngOnInit(): void {
    this.updateChart()
    this.updateDimensions()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] || changes['theme'] || changes['zones'] || changes['color']) {
      this.updateChart()
    }
    if (changes['width'] || changes['height']) {
      this.updateDimensions()
    }
  }

  private updateChart(): void {
    if (this.value === null || this.value === undefined) {
      this.chartOption = null
      return
    }

    // Build color zones or use default color
    let axisLineColors: Array<[number, string]>

    if (this.zones && this.zones.length > 0) {
      // Convert zones to ECharts format
      axisLineColors = this.zones.map(zone => [
        (zone.to - this.min) / (this.max - this.min),
        zone.color
      ])
    } else if (Array.isArray(this.color)) {
      // Gradient colors
      const step = 1 / this.color.length
      axisLineColors = this.color.map((c, index) => [
        (index + 1) * step,
        c
      ])
    } else {
      // Single color or default
      const c = this.color || '#3b82f6'
      axisLineColors = [[1, c]]
    }

    const valueFormatter = this.formatter || ((v: number) => `${v}${this.unit || ''}`)

    this.chartOption = {
      series: [
        {
          type: 'gauge',
          startAngle: this.startAngle,
          endAngle: this.endAngle,
          min: this.min,
          max: this.max,
          splitNumber: this.splitNumber,

          // Progress arc
          progress: this.showProgress ? {
            show: true,
            width: 18,
          } : undefined,

          // Pointer
          pointer: this.showPointer ? {
            show: true,
            length: '60%',
            width: 6,
          } : {
            show: false,
          },

          // Axis line (background arc)
          axisLine: {
            lineStyle: {
              width: 18,
              color: axisLineColors,
            },
          },

          // Axis tick
          axisTick: {
            show: true,
            distance: -18,
            length: 5,
            lineStyle: {
              color: this.theme === 'dark' ? '#4b5563' : '#d1d5db',
              width: 1,
            },
          },

          // Split line
          splitLine: {
            show: true,
            distance: -18,
            length: 10,
            lineStyle: {
              color: this.theme === 'dark' ? '#4b5563' : '#d1d5db',
              width: 2,
            },
          },

          // Axis label
          axisLabel: {
            show: true,
            distance: 25,
            color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
            fontSize: 11,
          },

          // Anchor (center circle)
          anchor: {
            show: this.showPointer,
            showAbove: true,
            size: 15,
            itemStyle: {
              borderWidth: 2,
              borderColor: this.theme === 'dark' ? '#4b5563' : '#d1d5db',
            },
          },

          // Title
          title: {
            show: !!this.title,
            offsetCenter: [0, '80%'],
            fontSize: 14,
            color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
          },

          // Detail (value display)
          detail: {
            valueAnimation: this.animation,
            formatter: valueFormatter,
            fontSize: 28,
            fontWeight: 'bold',
            color: this.theme === 'dark' ? '#fafafa' : '#0a0a0a',
            offsetCenter: [0, '10%'],
          },

          data: [
            {
              value: this.value,
              name: this.title || '',
            },
          ],
        } as any,
      ],
    }
  }

  private updateDimensions(): void {
    this.dimensions = {
      height: `${this.height}px`,
      width: typeof this.width === 'number' ? `${this.width}px` : this.width,
    }
  }
}
