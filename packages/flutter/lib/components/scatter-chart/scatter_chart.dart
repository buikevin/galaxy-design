import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart' as fl;
import 'types.dart';
import 'utils.dart';

class GalaxyScatterChart extends StatelessWidget {
  final ChartData data;
  final double height;
  final double? width;
  final ChartTheme theme;
  final bool legend;
  final LegendPosition legendPosition;
  final bool loading;
  final String emptyText;
  final double symbolSize;
  final double opacity;
  final String? xAxisLabel;
  final String? yAxisLabel;

  const GalaxyScatterChart({
    Key? key,
    required this.data,
    this.height = 300,
    this.width,
    this.theme = ChartTheme.light,
    this.legend = true,
    this.legendPosition = LegendPosition.top,
    this.loading = false,
    this.emptyText = 'No data available',
    this.symbolSize = 8.0,
    this.opacity = 0.8,
    this.xAxisLabel,
    this.yAxisLabel,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: height,
      width: width ?? double.infinity,
      child: _buildContent(),
    );
  }

  Widget _buildContent() {
    if (loading) {
      return const Center(
        child: CircularProgressIndicator(
          valueColor: AlwaysStoppedAnimation<Color>(Color(0xFF3b82f6)),
        ),
      );
    }

    if (data.datasets.isEmpty) {
      return Center(
        child: Text(
          emptyText,
          style: const TextStyle(color: Color(0xFF6b7280), fontSize: 14),
        ),
      );
    }

    return Column(
      children: [
        if (legend && legendPosition == LegendPosition.top) _buildLegend(),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: fl.ScatterChart(
              fl.ScatterChartData(
                scatterSpots: _buildScatterSpots(),
                minX: _getMinX(),
                maxX: _getMaxX(),
                minY: _getMinY(),
                maxY: _getMaxY(),
                titlesData: fl.FlTitlesData(
                  show: true,
                  bottomTitles: fl.AxisTitles(
                    axisNameWidget: xAxisLabel != null
                        ? Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: Text(
                              xAxisLabel!,
                              style: TextStyle(
                                color: theme == ChartTheme.dark
                                    ? const Color(0xFF9ca3af)
                                    : const Color(0xFF6b7280),
                                fontSize: 11,
                              ),
                            ),
                          )
                        : null,
                    sideTitles: fl.SideTitles(
                      showTitles: true,
                      reservedSize: 30,
                      getTitlesWidget: (value, meta) {
                        return Text(
                          value.toStringAsFixed(0),
                          style: TextStyle(
                            color: theme == ChartTheme.dark
                                ? const Color(0xFF9ca3af)
                                : const Color(0xFF6b7280),
                            fontSize: 10,
                          ),
                        );
                      },
                    ),
                  ),
                  leftTitles: fl.AxisTitles(
                    axisNameWidget: yAxisLabel != null
                        ? Padding(
                            padding: const EdgeInsets.only(right: 8.0),
                            child: Text(
                              yAxisLabel!,
                              style: TextStyle(
                                color: theme == ChartTheme.dark
                                    ? const Color(0xFF9ca3af)
                                    : const Color(0xFF6b7280),
                                fontSize: 11,
                              ),
                            ),
                          )
                        : null,
                    sideTitles: fl.SideTitles(
                      showTitles: true,
                      reservedSize: 40,
                      getTitlesWidget: (value, meta) {
                        return Text(
                          value.toStringAsFixed(0),
                          style: TextStyle(
                            color: theme == ChartTheme.dark
                                ? const Color(0xFF9ca3af)
                                : const Color(0xFF6b7280),
                            fontSize: 10,
                          ),
                        );
                      },
                    ),
                  ),
                  topTitles: fl.AxisTitles(
                    sideTitles: fl.SideTitles(showTitles: false),
                  ),
                  rightTitles: fl.AxisTitles(
                    sideTitles: fl.SideTitles(showTitles: false),
                  ),
                ),
                borderData: fl.FlBorderData(
                  show: true,
                  border: Border.all(
                    color: theme == ChartTheme.dark
                        ? const Color(0xFF4b5563)
                        : const Color(0xFFd1d5db),
                  ),
                ),
                gridData: fl.FlGridData(
                  show: true,
                  drawVerticalLine: true,
                  getDrawingHorizontalLine: (value) {
                    return fl.FlLine(
                      color: theme == ChartTheme.dark
                          ? const Color(0xFF374151)
                          : const Color(0xFFe5e7eb),
                      strokeWidth: 1,
                    );
                  },
                  getDrawingVerticalLine: (value) {
                    return fl.FlLine(
                      color: theme == ChartTheme.dark
                          ? const Color(0xFF374151)
                          : const Color(0xFFe5e7eb),
                      strokeWidth: 1,
                    );
                  },
                ),
                scatterTouchData: fl.ScatterTouchData(
                  touchTooltipData: fl.ScatterTouchTooltipData(
                    getTooltipItems: (fl.ScatterSpot touchedBarSpot) {
                      return fl.ScatterTooltipItem(
                        'X: ${touchedBarSpot.x.toStringAsFixed(1)}\nY: ${touchedBarSpot.y.toStringAsFixed(1)}',
                        TextStyle(
                          color: Colors.white,
                          fontSize: 11,
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),
          ),
        ),
        if (legend && legendPosition == LegendPosition.bottom) _buildLegend(),
      ],
    );
  }

  List<fl.ScatterSpot> _buildScatterSpots() {
    final colors = getThemeColors(theme);
    final List<fl.ScatterSpot> spots = [];

    for (var i = 0; i < data.datasets.length; i++) {
      final dataset = data.datasets[i];
      final color = parseColor(dataset.color) ?? colors[i % colors.length];

      for (var j = 0; j < dataset.data.length; j++) {
        final value = dataset.data[j];
        double x, y;

        // Handle different data formats
        if (value is List && value.length >= 2) {
          x = value[0].toDouble();
          y = value[1].toDouble();
        } else if (value is Map && value.containsKey('x') && value.containsKey('y')) {
          x = (value['x'] as num).toDouble();
          y = (value['y'] as num).toDouble();
        } else {
          x = j.toDouble();
          y = value.toDouble();
        }

        spots.add(
          fl.ScatterSpot(
            x,
            y,
            color: color.withOpacity(opacity),
            radius: symbolSize,
          ),
        );
      }
    }

    return spots;
  }

  double _getMinX() {
    double min = double.infinity;
    for (var dataset in data.datasets) {
      for (var i = 0; i < dataset.data.length; i++) {
        final value = dataset.data[i];
        double x;
        if (value is List && value.length >= 2) {
          x = value[0].toDouble();
        } else if (value is Map && value.containsKey('x')) {
          x = (value['x'] as num).toDouble();
        } else {
          x = i.toDouble();
        }
        if (x < min) min = x;
      }
    }
    return min == double.infinity ? 0 : min;
  }

  double _getMaxX() {
    double max = double.negativeInfinity;
    for (var dataset in data.datasets) {
      for (var i = 0; i < dataset.data.length; i++) {
        final value = dataset.data[i];
        double x;
        if (value is List && value.length >= 2) {
          x = value[0].toDouble();
        } else if (value is Map && value.containsKey('x')) {
          x = (value['x'] as num).toDouble();
        } else {
          x = i.toDouble();
        }
        if (x > max) max = x;
      }
    }
    return max == double.negativeInfinity ? 10 : max;
  }

  double _getMinY() {
    double min = double.infinity;
    for (var dataset in data.datasets) {
      for (var value in dataset.data) {
        double y;
        if (value is List && value.length >= 2) {
          y = value[1].toDouble();
        } else if (value is Map && value.containsKey('y')) {
          y = (value['y'] as num).toDouble();
        } else {
          y = value.toDouble();
        }
        if (y < min) min = y;
      }
    }
    return min == double.infinity ? 0 : min;
  }

  double _getMaxY() {
    double max = double.negativeInfinity;
    for (var dataset in data.datasets) {
      for (var value in dataset.data) {
        double y;
        if (value is List && value.length >= 2) {
          y = value[1].toDouble();
        } else if (value is Map && value.containsKey('y')) {
          y = (value['y'] as num).toDouble();
        } else {
          y = value.toDouble();
        }
        if (y > max) max = y;
      }
    }
    return max == double.negativeInfinity ? 10 : max;
  }

  Widget _buildLegend() {
    final colors = getThemeColors(theme);

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Wrap(
        alignment: WrapAlignment.center,
        spacing: 16,
        runSpacing: 8,
        children: data.datasets.asMap().entries.map((entry) {
          final index = entry.key;
          final dataset = entry.value;
          final color = parseColor(dataset.color) ?? colors[index % colors.length];

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
                dataset.label,
                style: TextStyle(
                  color: theme == ChartTheme.dark
                      ? const Color(0xFFe5e7eb)
                      : const Color(0xFF374151),
                  fontSize: 12,
                ),
              ),
            ],
          );
        }).toList(),
      ),
    );
  }
}
