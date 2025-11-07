/// Galaxy UI Charts - BarChart
///
/// Bar chart component for comparing values across categories

import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart' as fl;
import 'types.dart';
import 'utils.dart';

class GalaxyBarChart extends StatelessWidget {
  final ChartData data;
  final double height;
  final double? width;
  final ChartTheme theme;
  final bool legend;
  final LegendPosition legendPosition;
  final GridConfig? grid;
  final TooltipConfig? tooltip;
  final bool animation;
  final bool horizontal;
  final bool stacked;
  final bool showDataLabels;
  final bool loading;
  final String emptyText;
  final EdgeInsets? padding;

  const GalaxyBarChart({
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
    this.horizontal = false,
    this.stacked = false,
    this.showDataLabels = false,
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

    return fl.BarChart(
      fl.BarChartData(
        barGroups: _buildBarGroups(themeColors),
        titlesData: _buildTitlesData(themeColors),
        gridData: _buildGridData(gridConfig, themeColors),
        borderData: _buildBorderData(themeColors),
        barTouchData: _buildTouchData(tooltip ?? const TooltipConfig(), themeColors),
        minY: 0,
        maxY: _calculateMaxY(),
        alignment: stacked ? fl.BarChartAlignment.center : fl.BarChartAlignment.spaceAround,
      ),
      swapAnimationDuration: animation ? const Duration(milliseconds: 300) : Duration.zero,
    );
  }

  List<fl.BarChartGroupData> _buildBarGroups(ThemeColors themeColors) {
    final colors = getDefaultColors();

    return List.generate(data.labels.length, (index) {
      final barRods = <fl.BarChartRodData>[];

      if (stacked) {
        // Stacked bars - all datasets in one rod
        double yOffset = 0;
        final rodStackItems = <fl.BarChartRodStackItem>[];

        for (int i = 0; i < data.datasets.length; i++) {
          final dataset = data.datasets[i];
          final value = dataset.data[index];
          final color = dataset.color ?? getColorAtIndex(colors, i);

          rodStackItems.add(fl.BarChartRodStackItem(
            yOffset,
            yOffset + value,
            color,
          ));
          yOffset += value;
        }

        barRods.add(fl.BarChartRodData(
          toY: yOffset,
          rodStackItems: rodStackItems,
          width: 20,
          borderRadius: BorderRadius.circular(4),
        ));
      } else {
        // Grouped bars - separate rods
        for (int i = 0; i < data.datasets.length; i++) {
          final dataset = data.datasets[i];
          final value = dataset.data[index];
          final color = dataset.color ?? getColorAtIndex(colors, i);

          barRods.add(fl.BarChartRodData(
            toY: value,
            color: color,
            width: 20 / data.datasets.length,
            borderRadius: BorderRadius.circular(4),
          ));
        }
      }

      return fl.BarChartGroupData(
        x: index,
        barRods: barRods,
        barsSpace: stacked ? 0 : 4,
      );
    });
  }

  fl.FlTitlesData _buildTitlesData(ThemeColors themeColors) {
    return fl.FlTitlesData(
      leftTitles: fl.AxisTitles(
        sideTitles: fl.SideTitles(
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
      bottomTitles: fl.AxisTitles(
        sideTitles: fl.SideTitles(
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
      rightTitles: const fl.AxisTitles(
        sideTitles: fl.SideTitles(showTitles: false),
      ),
      topTitles: const fl.AxisTitles(
        sideTitles: fl.SideTitles(showTitles: false),
      ),
    );
  }

  fl.FlGridData _buildGridData(GridConfig gridConfig, ThemeColors themeColors) {
    if (!gridConfig.show) {
      return const fl.FlGridData(show: false);
    }

    return fl.FlGridData(
      show: true,
      drawVerticalLine: true,
      drawHorizontalLine: true,
      horizontalInterval: _calculateGridInterval(),
      getDrawingHorizontalLine: (value) {
        return fl.FlLine(
          color: gridConfig.color ?? themeColors.gridColor,
          strokeWidth: gridConfig.strokeWidth ?? 1,
        );
      },
      getDrawingVerticalLine: (value) {
        return fl.FlLine(
          color: gridConfig.color ?? themeColors.gridColor,
          strokeWidth: gridConfig.strokeWidth ?? 1,
        );
      },
    );
  }

  fl.FlBorderData _buildBorderData(ThemeColors themeColors) {
    return fl.FlBorderData(
      show: true,
      border: Border.all(
        color: themeColors.border,
        width: 1,
      ),
    );
  }

  fl.BarTouchData _buildTouchData(
      TooltipConfig tooltipConfig, ThemeColors themeColors) {
    if (!tooltipConfig.show) {
      return fl.BarTouchData(enabled: false);
    }

    return fl.BarTouchData(
      enabled: true,
      touchTooltipData: fl.BarTouchTooltipData(
        getTooltipItem: (group, groupIndex, rod, rodIndex) {
          final dataset = data.datasets[rodIndex];
          return fl.BarTooltipItem(
            '${dataset.label}\n${formatNumber(rod.toY, decimals: 1)}',
            TextStyle(
              color: tooltipConfig.textColor ?? themeColors.tooltipForeground,
              fontSize: tooltipConfig.fontSize ?? 12,
              fontWeight: FontWeight.w500,
            ),
          );
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

    if (stacked) {
      // For stacked, sum all datasets at each point
      for (int i = 0; i < data.labels.length; i++) {
        double sum = 0;
        for (final dataset in data.datasets) {
          sum += dataset.data[i];
        }
        if (sum > max) max = sum;
      }
    } else {
      // For grouped, find max value across all datasets
      for (final dataset in data.datasets) {
        for (final value in dataset.data) {
          if (value > max) max = value;
        }
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
