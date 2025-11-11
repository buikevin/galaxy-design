/// Galaxy UI Charts - PieChart
///
/// Pie/Donut chart component for showing proportions

import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart' as fl;
import 'types.dart';
import 'utils.dart';

class GalaxyPieChart extends StatelessWidget {
  final ChartData data;
  final double height;
  final double? width;
  final ChartTheme theme;
  final bool legend;
  final LegendPosition legendPosition;
  final bool animation;
  final double innerRadius;
  final double outerRadius;
  final bool showPercentage;
  final bool loading;
  final String emptyText;
  final EdgeInsets? padding;

  const GalaxyPieChart({
    Key? key,
    required this.data,
    this.height = 300,
    this.width,
    this.theme = ChartTheme.light,
    this.legend = true,
    this.legendPosition = LegendPosition.right,
    this.animation = true,
    this.innerRadius = 0,
    this.outerRadius = 70,
    this.showPercentage = true,
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
    final colors = getDefaultColors();
    final dataset = data.datasets[0]; // Pie charts use first dataset
    final total = dataset.data.fold<double>(0, (sum, value) => sum + value);

    return fl.PieChart(
      fl.PieChartData(
        sections: _buildSections(colors, dataset, total, themeColors),
        sectionsSpace: 2,
        centerSpaceRadius: innerRadius,
        pieTouchData: fl.PieTouchData(
          touchCallback: (fl.FlTouchEvent event, fl.PieTouchResponse? response) {
            // Handle touch events if needed
          },
        ),
      ),
      swapAnimationDuration: animation ? const Duration(milliseconds: 300) : Duration.zero,
    );
  }

  List<fl.PieChartSectionData> _buildSections(
    List<Color> colors,
    ChartDataset dataset,
    double total,
    ThemeColors themeColors,
  ) {
    return List.generate(data.labels.length, (index) {
      final value = dataset.data[index];
      final percent = (value / total * 100).toStringAsFixed(1);
      final color = dataset.backgroundColor != null && dataset.backgroundColor is List
          ? parseColor(dataset.backgroundColor![index])
          : getColorAtIndex(colors, index);

      return fl.PieChartSectionData(
        value: value,
        title: showPercentage ? '$percent%' : '',
        color: color,
        radius: outerRadius,
        titleStyle: TextStyle(
          fontSize: 12,
          fontWeight: FontWeight.bold,
          color: themeColors.background,
        ),
        titlePositionPercentageOffset: 0.6,
      );
    });
  }

  Widget _buildLegend(ThemeColors themeColors) {
    final colors = getDefaultColors();
    final dataset = data.datasets[0];
    final isVertical = legendPosition == LegendPosition.left ||
        legendPosition == LegendPosition.right;

    return Wrap(
      direction: isVertical ? Axis.vertical : Axis.horizontal,
      spacing: 16,
      runSpacing: 8,
      children: List.generate(data.labels.length, (index) {
        final label = data.labels[index];
        final color = dataset.backgroundColor != null && dataset.backgroundColor is List
            ? parseColor(dataset.backgroundColor![index])
            : getColorAtIndex(colors, index);

        return Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 12,
              height: 12,
              decoration: BoxDecoration(
                color: color,
                shape: BoxShape.circle,
              ),
            ),
            const SizedBox(width: 6),
            Text(
              label,
              style: TextStyle(
                color: themeColors.foreground,
                fontSize: 12,
              ),
            ),
          ],
        );
      }),
    );
  }
}
