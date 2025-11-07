import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import type { AreaChartProps } from './types';
import { getDefaultColors, transformDataToSeries, getThemeColors } from './utils';

@Component({
  selector: 'ui-area-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  template: `
    <div class="galaxy-area-chart w-full">
      <!-- Loading state -->
      <div
        *ngIf="loading"
        [style.height.px]="height"
        class="flex items-center justify-center"
      >
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>

      <!-- Empty state -->
      <div
        *ngIf="!loading && !chartOption"
        [style.height.px]="height"
        class="flex items-center justify-center border border-border rounded-md"
      >
        <p class="text-muted-foreground text-sm">{{ emptyText }}</p>
      </div>

      <!-- Chart -->
      <div
        *ngIf="!loading && chartOption"
        echarts
        [options]="chartOption"
        [style.height.px]="height"
        [style.width]="widthStyle"
        [theme]="theme"
        [loading]="loading"
      ></div>
    </div>
  `,
})
export class AreaChartComponent implements OnInit, OnChanges, AreaChartProps {
  @Input() data!: AreaChartProps['data'];
  @Input() height: number = 300;
  @Input() width: number | string = '100%';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() legend: boolean = true;
  @Input() legendPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() grid: boolean | any = true;
  @Input() tooltip: boolean | any = true;
  @Input() animation: boolean = true;
  @Input() smooth: boolean = true;
  @Input() showPoints: boolean = true;
  @Input() pointSize: number = 6;
  @Input() stack: boolean = false;
  @Input() opacity: number = 0.6;
  @Input() gradient: boolean = false;
  @Input() loading: boolean = false;
  @Input() emptyText: string = 'No data available';
  @Input() zoom: boolean = false;
  @Input() options: Record<string, any> = {};

  chartOption: EChartsOption | null = null;
  widthStyle: string = '100%';

  ngOnInit(): void {
    this.widthStyle = typeof this.width === 'number' ? `${this.width}px` : this.width;
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['theme'] || changes['smooth'] || changes['stack']) {
      this.updateChart();
    }
    if (changes['width']) {
      this.widthStyle = typeof this.width === 'number' ? `${this.width}px` : this.width;
    }
  }

  private updateChart(): void {
    if (!this.data || !this.data.datasets || this.data.datasets.length === 0) {
      this.chartOption = null;
      return;
    }

    const colors = getDefaultColors();
    const themeColors = getThemeColors(this.theme);

    // Transform datasets with area fill enabled
    const series = transformDataToSeries(this.data, 'line', {
      smooth: this.smooth,
      showSymbol: this.showPoints,
      symbolSize: this.pointSize,
      stack: this.stack ? 'total' : undefined,
      areaStyle: {
        opacity: this.opacity,
      },
    });

    // Add gradient if enabled
    if (this.gradient) {
      series.forEach((s: any, index: number) => {
        const color = s.itemStyle?.color || colors[index % colors.length];
        s.areaStyle = {
          ...s.areaStyle,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: color },
              { offset: 1, color: 'rgba(255, 255, 255, 0.1)' },
            ],
          },
        };
      });
    }

    this.chartOption = {
      backgroundColor: 'transparent',
      color: colors,
      tooltip: this.tooltip
        ? {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: themeColors.primary,
              },
            },
            backgroundColor: themeColors.tooltipBg,
            borderColor: themeColors.tooltipBorder,
            textStyle: {
              color: themeColors.tooltipText,
            },
          }
        : undefined,
      legend: this.legend
        ? {
            orient: this.legendPosition === 'left' || this.legendPosition === 'right'
              ? 'vertical'
              : 'horizontal',
            [this.legendPosition]: '0',
            textStyle: {
              color: themeColors.text,
            },
          }
        : undefined,
      grid: typeof this.grid === 'object'
        ? { ...this.grid, containLabel: true }
        : this.grid
          ? {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true,
            }
          : undefined,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.data.labels,
        axisLine: { lineStyle: { color: themeColors.axis } },
        axisLabel: { color: themeColors.axisLabel },
      },
      yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: themeColors.axis } },
        axisLabel: { color: themeColors.axisLabel },
        splitLine: {
          lineStyle: { color: themeColors.gridLine, type: 'dashed' },
        },
      },
      dataZoom: this.zoom
        ? [
            {
              type: 'inside',
              start: 0,
              end: 100,
            },
            {
              start: 0,
              end: 100,
            },
          ]
        : undefined,
      series,
      ...this.options,
    } as EChartsOption;
  }
}
