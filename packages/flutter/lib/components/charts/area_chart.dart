// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc AreaChart component - Biểu đồ diện tích hiển thị xu hướng tích lũy

/// Galaxy UI Charts - AreaChart
///
/// Area chart component for showing cumulative trends with filled areas

import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart' as fl;
import 'types.dart';
import 'utils.dart';

/// GalaxyAreaChart - Component biểu đồ diện tích hiển thị xu hướng tích lũy
/// 
/// ## Props:
/// - [data] - Dữ liệu biểu đồ
/// - [height] - Chiều cao biểu đồ (default: 300)
/// - [width] - Chiều rộng biểu đồ
/// - [theme] - Chủ đề biểu đồ (default: ChartTheme.light)
/// - [legend] - Hiển thị chú thích (default: true)
/// - [legendPosition] - Vị trí chú thích (default: LegendPosition.top)
/// - [animation] - Hiệu ứng animation (default: true)
/// - [smooth] - Đường cong mượt (default: true)
/// - [showPoints] - Hiển thị các điểm (default: true)
/// - [pointSize] - Kích thước điểm (default: 4)
/// - [stack] - Chế độ xếp chồng (default: false)
/// - [opacity] - Độ trong suốt (default: 0.6)
/// - [gradient] - Hiệu ứng gradient (default: false)
/// - [loading] - Trạng thái đang tải (default: false)
/// - [emptyText] - Văn bản khi không có dữ liệu (default: 'No data available')
/// - [padding] - Padding của biểu đồ
class GalaxyAreaChart extends StatelessWidget {
  const GalaxyAreaChart({
    Key? key,
    required this.data,
    this.height = 300,
    this.width,
    this.theme = ChartTheme.light,
    this.legend = true,
    this.legendPosition = LegendPosition.top,
    this.animation = true,
    this.smooth = true,
    this.showPoints = true,
    this.pointSize = 4,
    this.stack = false,
    this.opacity = 0.6,
    this.gradient = false,
    this.loading = false,
    this.emptyText = 'No data available',
    this.padding,
  }) : super(key: key);

  /// Dữ liệu biểu đồ
  final ChartData data;

  /// Chiều cao biểu đồ
  final double height;

  /// Chiều rộng biểu đồ
  final double? width;

  /// Chủ đề biểu đồ
  final ChartTheme theme;

  /// Hiển thị chú thích
  final bool legend;

  /// Vị trí chú thích
  final LegendPosition legendPosition;

  /// Hiệu ứng animation
  final bool animation;

  /// Đường cong mượt
  final bool smooth;

  /// Hiển thị các điểm
  final bool showPoints;

  /// Kích thước điểm
  final double pointSize;

  /// Chế độ xếp chồng
  final bool stack;

  /// Độ trong suốt
  final double opacity;

  /// Hiệu ứng gradient
  final bool gradient;

  /// Trạng thái đang tải
  final bool loading;

  /// Văn bản khi không có dữ liệu
  final String emptyText;

  /// Padding của biểu đồ
  final EdgeInsets? padding;

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

    return fl.LineChart(
      fl.LineChartData(
        lineBarsData: _buildLineBars(colors, themeColors),
        titlesData: fl.FlTitlesData(
          leftTitles: fl.AxisTitles(
            sideTitles: fl.SideTitles(
              showTitles: true,
              reservedSize: 40,
              getTitlesWidget: (value, meta) {
                return Text(
                  value.toInt().toString(),
                  style: TextStyle(
                    color: themeColors.axisLabel,
                    fontSize: 12,
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
                    padding: const EdgeInsets.only(top: 8.0),
                    child: Text(
                      data.labels[index],
                      style: TextStyle(
                        color: themeColors.axisLabel,
                        fontSize: 12,
                      ),
                    ),
                  );
                }
                return const SizedBox.shrink();
              },
            ),
          ),
          topTitles: fl.AxisTitles(sideTitles: fl.SideTitles(showTitles: false)),
          rightTitles: fl.AxisTitles(sideTitles: fl.SideTitles(showTitles: false)),
        ),
        gridData: fl.FlGridData(
          show: true,
          drawVerticalLine: false,
          getDrawingHorizontalLine: (value) {
            return fl.FlLine(
              color: themeColors.gridLine,
              strokeWidth: 1,
              dashArray: [5, 5],
            );
          },
        ),
        borderData: fl.FlBorderData(
          show: true,
          border: Border(
            left: BorderSide(color: themeColors.axis),
            bottom: BorderSide(color: themeColors.axis),
          ),
        ),
        lineTouchData: fl.LineTouchData(
          enabled: true,
          touchTooltipData: fl.LineTouchTooltipData(
            getTooltipItems: (touchedSpots) {
              return touchedSpots.map((spot) {
                final dataset = data.datasets[spot.barIndex];
                return fl.LineTooltipItem(
                  '${dataset.label}: ${spot.y.toStringAsFixed(1)}',
                  TextStyle(
                    color: themeColors.background,
                    fontWeight: FontWeight.bold,
                  ),
                );
              }).toList();
            },
          ),
        ),
      ),
      duration: animation ? const Duration(milliseconds: 300) : Duration.zero,
    );
  }

  List<fl.LineChartBarData> _buildLineBars(
    List<Color> colors,
    ThemeColors themeColors,
  ) {
    return data.datasets.asMap().entries.map((entry) {
      final index = entry.key;
      final dataset = entry.value;
      final color = dataset.color != null
          ? parseColor(dataset.color!)
          : getColorAtIndex(colors, index);

      final spots = dataset.data.asMap().entries.map((dataEntry) {
        return fl.FlSpot(dataEntry.key.toDouble(), dataEntry.value);
      }).toList();

      return fl.LineChartBarData(
        spots: spots,
        isCurved: smooth,
        color: color,
        barWidth: 3,
        dotData: fl.FlDotData(
          show: showPoints,
          getDotPainter: (spot, percent, barData, index) {
            return fl.FlDotCirclePainter(
              radius: pointSize,
              color: color,
              strokeWidth: 2,
              strokeColor: themeColors.background,
            );
          },
        ),
        belowBarData: fl.BarAreaData(
          show: true,
          color: gradient
              ? null
              : color.withOpacity(opacity),
          gradient: gradient
              ? LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [
                    color.withOpacity(opacity),
                    color.withOpacity(0.1),
                  ],
                )
              : null,
        ),
      );
    }).toList();
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
        final color = dataset.color != null
            ? parseColor(dataset.color!)
            : getColorAtIndex(colors, index);

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
}
