import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxEchartsModule } from 'ngx-echarts'
import type { EChartsOption } from 'echarts'
import type { RadarChartProps, ChartData } from './types'
import { getThemeColors } from './utils'

@Component({
  selector: 'ui-radar-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  template: `
    <div [ngStyle]="{ height: (height || 300) + 'px', width: width || '100%' }">
      <div *ngIf="loading" class="flex items-center justify-center h-full">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
      <div *ngIf="!loading && (!data || !data.datasets.length)" class="flex items-center justify-center h-full text-gray-500">
        {{ emptyText || 'No data available' }}
      </div>
      <div *ngIf="!loading && data && data.datasets.length" echarts [options]="chartOption" class="w-full h-full"></div>
    </div>
  `,
})
export class RadarChartComponent implements OnInit, OnChanges, RadarChartProps {
  @Input() data!: ChartData
  @Input() height?: number = 300
  @Input() width?: number | string = '100%'
  @Input() theme?: 'light' | 'dark' = 'light'
  @Input() legend?: boolean = true
  @Input() legendPosition?: 'top' | 'bottom' | 'left' | 'right' = 'top'
  @Input() loading?: boolean = false
  @Input() emptyText?: string = 'No data available'
  @Input() shape?: 'polygon' | 'circle' = 'polygon'
  @Input() splitNumber?: number = 4
  @Input() maxValue?: number
  @Input() fill?: boolean = true
  @Input() opacity?: number = 0.3

  chartOption: EChartsOption = {}

  ngOnInit(): void {
    this.updateChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['theme'] || changes['shape'] || changes['splitNumber'] ||
        changes['maxValue'] || changes['fill'] || changes['opacity'] || changes['legend'] ||
        changes['legendPosition']) {
      this.updateChart()
    }
  }

  private updateChart(): void {
    if (!this.data || !this.data.datasets.length) {
      this.chartOption = {}
      return
    }

    const colors = getThemeColors(this.theme || 'light')

    // Build radar indicators from labels
    const indicator = this.data.labels.map((label) => ({
      name: label,
      max: this.maxValue || Math.max(...this.data.datasets.flatMap(d => d.data)),
    }))

    // Transform datasets to radar series
    const seriesData = this.data.datasets.map((dataset, index) => ({
      name: dataset.label,
      value: dataset.data,
      itemStyle: {
        color: dataset.color || colors[index % colors.length],
      },
      areaStyle: this.fill ? {
        opacity: this.opacity || 0.3,
      } : undefined,
    }))

    this.chartOption = {
      tooltip: {
        trigger: 'item',
        confine: true,
        textStyle: {
          fontSize: 12,
        },
      },
      legend: this.legend !== false ? {
        show: true,
        orient: this.legendPosition === 'left' || this.legendPosition === 'right' ? 'vertical' : 'horizontal',
        left: this.legendPosition === 'left' ? '5%' : this.legendPosition === 'right' ? 'auto' : 'center',
        right: this.legendPosition === 'right' ? '5%' : 'auto',
        top: this.legendPosition === 'top' ? '5%' : this.legendPosition === 'bottom' ? 'auto' : 'auto',
        bottom: this.legendPosition === 'bottom' ? '5%' : 'auto',
        textStyle: {
          fontSize: 12,
          color: this.theme === 'dark' ? '#e5e7eb' : '#374151',
        },
      } : {
        show: false,
      },
      radar: {
        indicator,
        shape: this.shape || 'polygon',
        splitNumber: this.splitNumber || 4,
        axisName: {
          color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
          fontSize: 11,
        },
        splitLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#374151' : '#e5e7eb',
          },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: this.theme === 'dark'
              ? ['rgba(31, 41, 55, 0.3)', 'rgba(17, 24, 39, 0.3)']
              : ['rgba(249, 250, 251, 0.5)', 'rgba(243, 244, 246, 0.5)'],
          },
        },
        axisLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },
      },
      series: [
        {
          type: 'radar',
          data: seriesData,
          emphasis: {
            lineStyle: {
              width: 3,
            },
          },
        },
      ],
    }
  }
}
