/// Galaxy UI Charts - LineChart
///
/// Line chart component with smooth curves and area fills

import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import 'types.dart';
import 'utils.dart';

class GalaxyLineChart extends StatelessWidget {
  final ChartData data;
  final double height;
  final double? width;
  final ChartTheme theme;
  final bool legend;
  final LegendPosition legendPosition;
  final GridConfig? grid;
  final TooltipConfig? tooltip;
  final bool animation;
  final bool smooth;
  final bool showPoints;
  final double pointSize;
  final bool area;
  final bool loading;
  final String emptyText;
  final EdgeInsets? padding;

  const GalaxyLineChart({
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
    this.smooth = true,
    this.showPoints = true,
    this.pointSize = 6,
    this.area = false,
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
        lineBarsData: _buildLineBars(themeColors),
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

  List<LineChartBarData> _buildLineBars(ThemeColors themeColors) {
    final colors = getDefaultColors();
    return data.datasets.asMap().entries.map((entry) {
      final index = entry.key;
      final dataset = entry.value;
      final color = dataset.color ?? getColorAtIndex(colors, index);

      return LineChartBarData(
        spots: _buildSpots(dataset),
        isCurved: smooth,
        curveSmoothness: 0.3,
        color: color,
        barWidth: dataset.borderWidth ?? 2,
        isStrokeCapRound: true,
        dotData: FlDotData(
          show: showPoints,
          getDotPainter: (spot, percent, barData, index) {
            return FlDotCirclePainter(
              radius: pointSize / 2,
              color: color,
              strokeWidth: 2,
              strokeColor: themeColors.background,
            );
          },
        ),
        belowBarData: BarAreaData(
          show: area,
          gradient: createGradient(color, opacity: 0.2),
        ),
      );
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

        return Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 12,
              height: 12,
              decoration: BoxDecoration(
                color: color,
                borderRadius: BorderRadius.circular(2),
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
