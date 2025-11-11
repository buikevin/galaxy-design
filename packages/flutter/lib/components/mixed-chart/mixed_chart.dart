/// Galaxy UI Charts - MixedChart
///
/// Mixed chart component that combines line, bar, and area visualizations
/// Note: Flutter's fl_chart has limitations - true bar/line mixing isn't supported.
/// This implementation uses LineChart with different styling for each type.

import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import 'types.dart';
import 'utils.dart';

class GalaxyMixedChart extends StatelessWidget {
  final ChartData data;
  final double height;
  final double? width;
  final ChartTheme theme;
  final bool legend;
  final LegendPosition legendPosition;
  final GridConfig? grid;
  final TooltipConfig? tooltip;
  final bool animation;
  final bool loading;
  final String emptyText;
  final EdgeInsets? padding;

  const GalaxyMixedChart({
    Key? key,
    required this.data,
    this.height = 300,
    this.width,
    this.theme = ChartTheme.light,
    this.legend = true,
    this.legendPosition = LegendPosition.top,
    this.grid,
    this.tooltip,
    this.animation = true,
    this.loading = false,
    this.emptyText = 'No data available',
    this.padding,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final themeColors = ThemeColors.fromTheme(theme);
    final dimensions = getResponsiveDimensions(width, height);

    // Show loading state
    if (loading) {
      return Container(
        width: dimensions['width'],
        height: dimensions['height'],
        alignment: Alignment.center,
        child: const CircularProgressIndicator(),
      );
    }

    // Show empty state
    if (data.datasets.isEmpty) {
      return Container(
        width: dimensions['width'],
        height: dimensions['height'],
        alignment: Alignment.center,
        decoration: BoxDecoration(
          border: Border.all(color: themeColors.border),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Text(
          emptyText,
          style: TextStyle(
            color: themeColors.mutedForeground,
            fontSize: 14,
          ),
        ),
      );
    }

    return Container(
      width: dimensions['width'],
      height: dimensions['height'],
      padding: padding ?? const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Legend at top
          if (legend && legendPosition == LegendPosition.top)
            _buildLegend(themeColors),
          if (legend && legendPosition == LegendPosition.top)
            const SizedBox(height: 16),

          // Chart
          Expanded(
            child: Row(
              children: [
                // Legend at left
                if (legend && legendPosition == LegendPosition.left) ...[
                  _buildLegend(themeColors),
                  const SizedBox(width: 16),
                ],

                // Main chart
                Expanded(
                  child: _buildChart(themeColors),
                ),

                // Legend at right
                if (legend && legendPosition == LegendPosition.right) ...[
                  const SizedBox(width: 16),
                  _buildLegend(themeColors),
                ],
              ],
            ),
          ),

          // Legend at bottom
          if (legend && legendPosition == LegendPosition.bottom)
            const SizedBox(height: 16),
          if (legend && legendPosition == LegendPosition.bottom)
            _buildLegend(themeColors),
        ],
      ),
    );
  }

  Widget _buildChart(ThemeColors themeColors) {
    final gridConfig = grid ?? const GridConfig();
    final tooltipConfig = tooltip ?? const TooltipConfig();

    return LineChart(
      LineChartData(
        lineBarsData: _buildMixedBars(themeColors),
        titlesData: _buildTitlesData(themeColors),
        gridData: _buildGridData(gridConfig, themeColors),
        borderData: _buildBorderData(themeColors),
        lineTouchData: _buildTouchData(tooltipConfig, themeColors),
        minY: 0,
        maxY: _calculateMaxY(),
      ),
      duration: animation ? const Duration(milliseconds: 300) : Duration.zero,
    );
  }

  List<LineChartBarData> _buildMixedBars(ThemeColors themeColors) {
    final colors = getDefaultColors();
    return data.datasets.asMap().entries.map((entry) {
      final index = entry.key;
      final dataset = entry.value;
      final color = dataset.color ?? getColorAtIndex(colors, index);
      final chartType = dataset.type ?? 'line';

      // Base configuration
      final baseBar = LineChartBarData(
        spots: _buildSpots(dataset),
        color: color,
        barWidth: chartType == 'bar' ? 4 : 2,
        isStrokeCapRound: true,
      );

      // Type-specific configurations
      if (chartType == 'line') {
        return baseBar.copyWith(
          isCurved: true,
          curveSmoothness: 0.3,
          dotData: FlDotData(
            show: true,
            getDotPainter: (spot, percent, barData, index) {
              return FlDotCirclePainter(
                radius: 3,
                color: color,
                strokeWidth: 2,
                strokeColor: themeColors.background,
              );
            },
          ),
          belowBarData: BarAreaData(show: false),
        );
      } else if (chartType == 'bar') {
        // Bar type: thicker line with prominent dots (simulates bars)
        return baseBar.copyWith(
          isCurved: false,
          dotData: FlDotData(
            show: true,
            getDotPainter: (spot, percent, barData, index) {
              return FlDotCirclePainter(
                radius: 5,
                color: color,
                strokeWidth: 0,
              );
            },
          ),
          belowBarData: BarAreaData(
            show: true,
            gradient: createGradient(color, opacity: 0.5),
          ),
        );
      } else if (chartType == 'area') {
        // Area type: curved line with filled area
        return baseBar.copyWith(
          isCurved: true,
          curveSmoothness: 0.3,
          dotData: FlDotData(
            show: true,
            getDotPainter: (spot, percent, barData, index) {
              return FlDotCirclePainter(
                radius: 3,
                color: color,
                strokeWidth: 2,
                strokeColor: themeColors.background,
              );
            },
          ),
          belowBarData: BarAreaData(
            show: true,
            gradient: createGradient(color, opacity: 0.3),
          ),
        );
      }

      return baseBar;
    }).toList();
  }

  List<FlSpot> _buildSpots(ChartDataset dataset) {
    return dataset.data.asMap().entries.map((entry) {
      return FlSpot(entry.key.toDouble(), entry.value);
    }).toList();
  }

  FlTitlesData _buildTitlesData(ThemeColors themeColors) {
    return FlTitlesData(
      leftTitles: AxisTitles(
        sideTitles: SideTitles(
          showTitles: true,
          reservedSize: 40,
          getTitlesWidget: (value, meta) {
            return Text(
              formatNumber(value),
              style: TextStyle(
                color: themeColors.mutedForeground,
                fontSize: 11,
              ),
            );
          },
        ),
      ),
      bottomTitles: AxisTitles(
        sideTitles: SideTitles(
          showTitles: true,
          reservedSize: 30,
          getTitlesWidget: (value, meta) {
            final index = value.toInt();
            if (index >= 0 && index < data.labels.length) {
              return Padding(
                padding: const EdgeInsets.only(top: 8),
                child: Text(
                  data.labels[index],
                  style: TextStyle(
                    color: themeColors.mutedForeground,
                    fontSize: 11,
                  ),
                ),
              );
            }
            return const SizedBox.shrink();
          },
        ),
      ),
      rightTitles: const AxisTitles(
        sideTitles: SideTitles(showTitles: false),
      ),
      topTitles: const AxisTitles(
        sideTitles: SideTitles(showTitles: false),
      ),
    );
  }

  FlGridData _buildGridData(GridConfig gridConfig, ThemeColors themeColors) {
    if (!gridConfig.show) {
      return const FlGridData(show: false);
    }

    return FlGridData(
      show: true,
      drawVerticalLine: true,
      drawHorizontalLine: true,
      horizontalInterval: _calculateGridInterval(),
      getDrawingHorizontalLine: (value) {
        return FlLine(
          color: gridConfig.color ?? themeColors.gridColor,
          strokeWidth: gridConfig.strokeWidth ?? 1,
        );
      },
      getDrawingVerticalLine: (value) {
        return FlLine(
          color: gridConfig.color ?? themeColors.gridColor,
          strokeWidth: gridConfig.strokeWidth ?? 1,
        );
      },
    );
  }

  FlBorderData _buildBorderData(ThemeColors themeColors) {
    return FlBorderData(
      show: true,
      border: Border.all(
        color: themeColors.border,
        width: 1,
      ),
    );
  }

  LineTouchData _buildTouchData(
      TooltipConfig tooltipConfig, ThemeColors themeColors) {
    if (!tooltipConfig.show) {
      return LineTouchData(enabled: false);
    }

    return LineTouchData(
      enabled: true,
      touchTooltipData: LineTouchTooltipData(
        getTooltipItems: (List<LineBarSpot> touchedSpots) {
          return touchedSpots.map((spot) {
            final dataset = data.datasets[spot.barIndex];
            return LineTooltipItem(
              '${dataset.label}\n${formatNumber(spot.y, decimals: 1)}',
              TextStyle(
                color: tooltipConfig.textColor ?? themeColors.tooltipForeground,
                fontSize: tooltipConfig.fontSize ?? 12,
                fontWeight: FontWeight.w500,
              ),
            );
          }).toList();
        },
        tooltipBgColor:
            tooltipConfig.backgroundColor ?? themeColors.tooltipBackground,
        tooltipRoundedRadius: 8,
        tooltipPadding: const EdgeInsets.all(8),
      ),
    );
  }

  Widget _buildLegend(ThemeColors themeColors) {
    final colors = getDefaultColors();
    final isVertical = legendPosition == LegendPosition.left ||
        legendPosition == LegendPosition.right;

    return Wrap(
      direction: isVertical ? Axis.vertical : Axis.horizontal,
      spacing: 16,
      runSpacing: 8,
      children: data.datasets.asMap().entries.map((entry) {
        final index = entry.key;
        final dataset = entry.value;
        final color = dataset.color ?? getColorAtIndex(colors, index);
        final chartType = dataset.type ?? 'line';

        return Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 12,
              height: 12,
              decoration: BoxDecoration(
                color: color,
                borderRadius: BorderRadius.circular(
                  chartType == 'bar' ? 2 : 6,
                ),
              ),
            ),
            const SizedBox(width: 6),
            Text(
              dataset.label,
              style: TextStyle(
                color: themeColors.foreground,
                fontSize: 12,
              ),
            ),
          ],
        );
      }).toList(),
    );
  }

  double _calculateMaxY() {
    double max = 0;
    for (final dataset in data.datasets) {
      for (final value in dataset.data) {
        if (value > max) max = value;
      }
    }
    // Add 10% padding to the top
    return max * 1.1;
  }

  double _calculateGridInterval() {
    final maxY = _calculateMaxY();
    if (maxY <= 10) return 2;
    if (maxY <= 100) return 20;
    if (maxY <= 1000) return 200;
    return maxY / 5;
  }
}
