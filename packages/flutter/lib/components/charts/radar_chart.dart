// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc RadarChart component - Biểu đồ radar so sánh đa chiều

import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart' as fl;
import 'types.dart';
import 'utils.dart';

/// GalaxyRadarChart - Component biểu đồ radar so sánh đa chiều
/// 
/// ## Props:
/// - [data] - Dữ liệu biểu đồ
/// - [height] - Chiều cao biểu đồ (default: 300)
/// - [width] - Chiều rộng biểu đồ
/// - [theme] - Chủ đề biểu đồ (default: ChartTheme.light)
/// - [legend] - Hiển thị chú thích (default: true)
/// - [legendPosition] - Vị trí chú thích (default: LegendPosition.top)
/// - [loading] - Trạng thái đang tải (default: false)
/// - [emptyText] - Văn bản khi không có dữ liệu (default: 'No data available')
/// - [fill] - Chế độ fill (default: true)
/// - [opacity] - Độ trong suốt (default: 0.3)
/// - [numberOfConcentriccircles] - Số vòng đồng tâm (default: 4)
class GalaxyRadarChart extends StatelessWidget {
  const GalaxyRadarChart({
    Key? key,
    required this.data,
    this.height = 300,
    this.width,
    this.theme = ChartTheme.light,
    this.legend = true,
    this.legendPosition = LegendPosition.top,
    this.loading = false,
    this.emptyText = 'No data available',
    this.fill = true,
    this.opacity = 0.3,
    this.numberOfConcentriccircles = 4,
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

  /// Trạng thái đang tải
  final bool loading;

  /// Văn bản khi không có dữ liệu
  final String emptyText;

  /// Chế độ fill
  final bool fill;

  /// Độ trong suốt
  final double opacity;

  /// Số vòng đồng tâm
  final int numberOfConcentriccircles;

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
            child: fl.RadarChart(
              fl.RadarChartData(
                radarShape: fl.RadarShape.polygon,
                tickCount: numberOfConcentriccircles,
                ticksTextStyle: TextStyle(
                  color: theme == ChartTheme.dark
                      ? const Color(0xFF9ca3af)
                      : const Color(0xFF6b7280),
                  fontSize: 10,
                ),
                tickBorderData: fl.BorderSide(
                  color: theme == ChartTheme.dark
                      ? const Color(0xFF374151)
                      : const Color(0xFFe5e7eb),
                ),
                gridBorderData: fl.BorderSide(
                  color: theme == ChartTheme.dark
                      ? const Color(0xFF4b5563)
                      : const Color(0xFFd1d5db),
                ),
                radarBorderData: fl.BorderSide(
                  color: theme == ChartTheme.dark
                      ? const Color(0xFF4b5563)
                      : const Color(0xFFd1d5db),
                  width: 2,
                ),
                titleTextStyle: TextStyle(
                  color: theme == ChartTheme.dark
                      ? const Color(0xFF9ca3af)
                      : const Color(0xFF6b7280),
                  fontSize: 11,
                  fontWeight: FontWeight.w500,
                ),
                getTitle: (index, angle) {
                  if (index < data.labels.length) {
                    return fl.RadarChartTitle(
                      text: data.labels[index],
                      angle: angle,
                    );
                  }
                  return const fl.RadarChartTitle(text: '');
                },
                dataSets: _buildRadarDataSets(),
                radarBackgroundColor: Colors.transparent,
                borderData: fl.FlBorderData(show: false),
                radarTouchData: fl.RadarTouchData(
                  touchCallback: (FlTouchEvent event, response) {},
                ),
              ),
            ),
          ),
        ),
        if (legend && legendPosition == LegendPosition.bottom) _buildLegend(),
      ],
    );
  }

  List<fl.RadarDataSet> _buildRadarDataSets() {
    final colors = getThemeColors(theme);

    return data.datasets.asMap().entries.map((entry) {
      final index = entry.key;
      final dataset = entry.value;
      final color = parseColor(dataset.color) ?? colors[index % colors.length];

      return fl.RadarDataSet(
        fillColor: fill ? color.withOpacity(opacity) : Colors.transparent,
        borderColor: color,
        borderWidth: 2,
        entryRadius: 3,
        dataEntries: dataset.data.asMap().entries.map((e) {
          return fl.RadarEntry(value: e.value);
        }).toList(),
      );
    }).toList();
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
