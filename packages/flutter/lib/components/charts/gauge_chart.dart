/// Galaxy UI Charts - GaugeChart
///
/// Gauge chart for displaying KPIs and metrics with a gauge visualization
/// Note: Custom implementation as fl_chart doesn't have built-in gauge support

import 'package:flutter/material.dart';
import 'dart:math' as math;
import 'types.dart';
import 'utils.dart';

class GalaxyGaugeChart extends StatelessWidget {
  final double value;
  final double? min;
  final double? max;
  final double height;
  final double? width;
  final ChartTheme theme;
  final double? startAngle;
  final double? endAngle;
  final bool showProgress;
  final bool showPointer;
  final String? title;
  final String? unit;
  final List<GaugeZone>? zones;
  final Color? color;
  final bool loading;
  final String emptyText;
  final EdgeInsets? padding;

  const GalaxyGaugeChart({
    Key? key,
    required this.value,
    this.min = 0,
    this.max = 100,
    this.height = 300,
    this.width,
    this.theme = ChartTheme.light,
    this.startAngle,
    this.endAngle,
    this.showProgress = true,
    this.showPointer = true,
    this.title,
    this.unit,
    this.zones,
    this.color,
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

    // Calculate percentage
    final percentage = ((value - (min ?? 0)) / ((max ?? 100) - (min ?? 0))).clamp(0.0, 1.0);

    // Determine color based on zones or use default
    Color gaugeColor = color ?? const Color(0xFF3b82f6);
    if (zones != null && zones!.isNotEmpty) {
      for (final zone in zones!) {
        if (value >= zone.from && value <= zone.to) {
          gaugeColor = zone.color;
          break;
        }
      }
    }

    return Container(
      width: dimensions['width'],
      height: dimensions['height'],
      padding: padding ?? const EdgeInsets.all(16),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Title
          if (title != null) ...[
            Text(
              title!,
              style: TextStyle(
                color: themeColors.mutedForeground,
                fontSize: 14,
              ),
            ),
            const SizedBox(height: 20),
          ],

          // Gauge visualization
          Expanded(
            child: Center(
              child: Stack(
                alignment: Alignment.center,
                children: [
                  // Background circle
                  SizedBox(
                    width: 200,
                    height: 200,
                    child: CustomPaint(
                      painter: _GaugePainter(
                        percentage: percentage,
                        color: gaugeColor,
                        backgroundColor: themeColors.gridColor,
                        startAngle: startAngle ?? 225,
                        endAngle: endAngle ?? -45,
                        showProgress: showProgress,
                        strokeWidth: 18,
                      ),
                    ),
                  ),

                  // Value display
                  Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        '${value.toStringAsFixed(0)}${unit ?? ''}',
                        style: TextStyle(
                          fontSize: 40,
                          fontWeight: FontWeight.bold,
                          color: themeColors.foreground,
                        ),
                      ),
                      Text(
                        '${(percentage * 100).toStringAsFixed(0)}%',
                        style: TextStyle(
                          fontSize: 16,
                          color: themeColors.mutedForeground,
                        ),
                      ),
                    ],
                  ),

                  // Pointer (optional)
                  if (showPointer)
                    Positioned(
                      child: Transform.rotate(
                        angle: _calculatePointerAngle(percentage, startAngle ?? 225, endAngle ?? -45),
                        child: CustomPaint(
                          painter: _PointerPainter(
                            color: gaugeColor,
                          ),
                          size: const Size(100, 100),
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),

          // Min/Max labels
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '${min ?? 0}${unit ?? ''}',
                style: TextStyle(
                  color: themeColors.mutedForeground,
                  fontSize: 12,
                ),
              ),
              Text(
                '${max ?? 100}${unit ?? ''}',
                style: TextStyle(
                  color: themeColors.mutedForeground,
                  fontSize: 12,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  double _calculatePointerAngle(double percentage, double start, double end) {
    // Convert angles to radians and calculate pointer angle
    final startRad = start * math.pi / 180;
    final endRad = end * math.pi / 180;
    final range = endRad - startRad;
    return startRad + (range * percentage);
  }
}

/// Gauge zone configuration
class GaugeZone {
  final double from;
  final double to;
  final Color color;

  const GaugeZone({
    required this.from,
    required this.to,
    required this.color,
  });
}

/// Custom painter for gauge arc
class _GaugePainter extends CustomPainter {
  final double percentage;
  final Color color;
  final Color backgroundColor;
  final double startAngle;
  final double endAngle;
  final bool showProgress;
  final double strokeWidth;

  _GaugePainter({
    required this.percentage,
    required this.color,
    required this.backgroundColor,
    required this.startAngle,
    required this.endAngle,
    required this.showProgress,
    required this.strokeWidth,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = math.min(size.width, size.height) / 2 - strokeWidth;

    // Convert angles to radians
    final startRad = startAngle * math.pi / 180;
    final endRad = endAngle * math.pi / 180;
    final sweepAngle = endRad - startRad;

    // Draw background arc
    final bgPaint = Paint()
      ..color = backgroundColor.withOpacity(0.3)
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..strokeCap = StrokeCap.round;

    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius),
      startRad,
      sweepAngle,
      false,
      bgPaint,
    );

    // Draw progress arc
    if (showProgress && percentage > 0) {
      final progressPaint = Paint()
        ..color = color
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeWidth
        ..strokeCap = StrokeCap.round;

      canvas.drawArc(
        Rect.fromCircle(center: center, radius: radius),
        startRad,
        sweepAngle * percentage,
        false,
        progressPaint,
      );
    }
  }

  @override
  bool shouldRepaint(_GaugePainter oldDelegate) {
    return oldDelegate.percentage != percentage ||
        oldDelegate.color != color ||
        oldDelegate.backgroundColor != backgroundColor;
  }
}

/// Custom painter for gauge pointer
class _PointerPainter extends CustomPainter {
  final Color color;

  _PointerPainter({required this.color});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.fill;

    // Draw pointer triangle
    final path = Path();
    path.moveTo(size.width / 2, 10);
    path.lineTo(size.width / 2 - 5, 20);
    path.lineTo(size.width / 2 + 5, 20);
    path.close();

    canvas.drawPath(path, paint);

    // Draw center circle
    canvas.drawCircle(
      Offset(size.width / 2, size.height / 2),
      8,
      paint,
    );
  }

  @override
  bool shouldRepaint(_PointerPainter oldDelegate) => false;
}
