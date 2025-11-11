import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxEchartsModule } from 'ngx-echarts'
import type { EChartsOption } from 'echarts'
import type { ScatterChartProps, ChartData } from './types'
import { getThemeColors } from './utils'

@Component({
  selector: 'ui-scatter-chart',
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
export class ScatterChartComponent implements OnInit, OnChanges, ScatterChartProps {
  @Input() data!: ChartData
  @Input() height?: number = 300
  @Input() width?: number | string = '100%'
  @Input() theme?: 'light' | 'dark' = 'light'
  @Input() legend?: boolean = true
  @Input() legendPosition?: 'top' | 'bottom' | 'left' | 'right' = 'top'
  @Input() loading?: boolean = false
  @Input() emptyText?: string = 'No data available'
  @Input() symbolSize?: number = 10
  @Input() opacity?: number = 0.8
  @Input() xAxisLabel?: string
  @Input() yAxisLabel?: string

  chartOption: EChartsOption = {}

  ngOnInit(): void {
    this.updateChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['theme'] || changes['symbolSize'] ||
        changes['opacity'] || changes['legend'] || changes['legendPosition'] ||
        changes['xAxisLabel'] || changes['yAxisLabel']) {
      this.updateChart()
    }
  }

  private updateChart(): void {
    if (!this.data || !this.data.datasets.length) {
      this.chartOption = {}
      return
    }

    const colors = getThemeColors(this.theme || 'light')

    // Transform datasets to scatter series
    const series = this.data.datasets.map((dataset, index) => {
      const seriesData = dataset.data.map((value: any, i) => {
        // Support both simple array [x, y] or object {x, y, value}
        if (Array.isArray(value)) {
          return value
        } else if (typeof value === 'object' && 'x' in value && 'y' in value) {
          return [value.x, value.y, value.value || 1]
        }
        // Fallback: use index as x, value as y
        return [i, value]
      })

      return {
        name: dataset.label,
        type: 'scatter',
        data: seriesData,
        symbolSize: (dataItem: number[]) => {
          // If third value exists, use it for size scaling
          if (dataItem[2]) {
            return Math.sqrt(dataItem[2]) * (this.symbolSize || 10) / 5
          }
          return this.symbolSize || 10
        },
        itemStyle: {
          color: dataset.color || colors[index % colors.length],
          opacity: this.opacity || 0.8,
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            borderColor: '#333',
            borderWidth: 1,
          },
        },
      }
    })

    this.chartOption = {
      tooltip: {
        trigger: 'item',
        confine: true,
        textStyle: {
          fontSize: 12,
        },
        formatter: (params: any) => {
          const dataPoint = params.data
          return `${params.seriesName}<br/>X: ${dataPoint[0]}<br/>Y: ${dataPoint[1]}${dataPoint[2] ? `<br/>Value: ${dataPoint[2]}` : ''}`
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
      grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        top: this.legend !== false ? '15%' : '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        name: this.xAxisLabel,
        nameLocation: 'middle',
        nameGap: 30,
        nameTextStyle: {
          fontSize: 12,
          color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
        axisLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },
        axisLabel: {
          fontSize: 11,
          color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
        splitLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#374151' : '#e5e7eb',
          },
        },
      },
      yAxis: {
        type: 'value',
        name: this.yAxisLabel,
        nameLocation: 'middle',
        nameGap: 50,
        nameTextStyle: {
          fontSize: 12,
          color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
        axisLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
        },
        axisLabel: {
          fontSize: 11,
          color: this.theme === 'dark' ? '#9ca3af' : '#6b7280',
        },
        splitLine: {
          lineStyle: {
            color: this.theme === 'dark' ? '#374151' : '#e5e7eb',
          },
        },
      },
      series,
    }
  }
}
