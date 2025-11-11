/// Galaxy UI Charts - Utilities
///
/// Helper functions for chart styling and formatting

import 'package:flutter/material.dart';
import 'types.dart';

/// Chart color schemes
class ChartColorSchemes {
  static const List<Color> defaultColors = [
    Color(0xFF3B82F6), // Blue
    Color(0xFF10B981), // Green
    Color(0xFFF59E0B), // Amber
    Color(0xFFEF4444), // Red
    Color(0xFF8B5CF6), // Purple
    Color(0xFFEC4899), // Pink
    Color(0xFF06B6D4), // Cyan
    Color(0xFFF97316), // Orange
  ];

  static const List<Color> pastel = [
    Color(0xFF93C5FD), // Blue
    Color(0xFF86EFAC), // Green
    Color(0xFFFBBF24), // Amber
    Color(0xFFFCA5A5), // Red
    Color(0xFFC4B5FD), // Purple
    Color(0xFFF9A8D4), // Pink
    Color(0xFF67E8F9), // Cyan
    Color(0xFFFDAA76), // Orange
  ];

  static const List<Color> vivid = [
    Color(0xFF2563EB), // Blue
    Color(0xFF059669), // Green
    Color(0xFFD97706), // Amber
    Color(0xFFDC2626), // Red
    Color(0xFF7C3AED), // Purple
    Color(0xFFDB2777), // Pink
    Color(0xFF0891B2), // Cyan
    Color(0xFFEA580C), // Orange
  ];

  static const List<Color> monochrome = [
    Color(0xFF1F2937), // Gray 800
    Color(0xFF374151), // Gray 700
    Color(0xFF4B5563), // Gray 600
    Color(0xFF6B7280), // Gray 500
    Color(0xFF9CA3AF), // Gray 400
    Color(0xFFD1D5DB), // Gray 300
    Color(0xFFE5E7EB), // Gray 200
    Color(0xFFF3F4F6), // Gray 100
  ];

  static List<Color> getScheme(String scheme) {
    switch (scheme) {
      case 'pastel':
        return pastel;
      case 'vivid':
        return vivid;
      case 'monochrome':
        return monochrome;
      default:
        return defaultColors;
    }
  }
}

/// Get default colors
List<Color> getDefaultColors([String scheme = 'default']) {
  return ChartColorSchemes.getScheme(scheme);
}

/// Format number for display
String formatNumber(double value, {int decimals = 0}) {
  if (value.abs() >= 1000000) {
    return '${(value / 1000000).toStringAsFixed(decimals)}M';
  } else if (value.abs() >= 1000) {
    return '${(value / 1000).toStringAsFixed(decimals)}K';
  }
  return value.toStringAsFixed(decimals);
}

/// Calculate percentage
double calculatePercentage(double value, double total) {
  if (total == 0) return 0;
  return (value / total) * 100;
}

/// Generate gradient colors
List<Color> generateGradient(Color startColor, Color endColor, int steps) {
  List<Color> gradient = [];
  for (int i = 0; i < steps; i++) {
    final t = i / (steps - 1);
    gradient.add(Color.lerp(startColor, endColor, t)!);
  }
  return gradient;
}

/// Get theme colors based on ChartTheme
class ThemeColors {
  final Color background;
  final Color foreground;
  final Color border;
  final Color muted;
  final Color mutedForeground;
  final Color gridColor;
  final Color tooltipBackground;
  final Color tooltipForeground;

  const ThemeColors({
    required this.background,
    required this.foreground,
    required this.border,
    required this.muted,
    required this.mutedForeground,
    required this.gridColor,
    required this.tooltipBackground,
    required this.tooltipForeground,
  });

  static ThemeColors light() {
    return const ThemeColors(
      background: Color(0xFFFFFFFF),
      foreground: Color(0xFF0A0A0A),
      border: Color(0xFFE4E4E7),
      muted: Color(0xFFF4F4F5),
      mutedForeground: Color(0xFF71717A),
      gridColor: Color(0xFFE4E4E7),
      tooltipBackground: Color(0xFF18181B),
      tooltipForeground: Color(0xFFFAFAFA),
    );
  }

  static ThemeColors dark() {
    return const ThemeColors(
      background: Color(0xFF0A0A0A),
      foreground: Color(0xFFFAFAFA),
      border: Color(0xFF27272A),
      muted: Color(0xFF27272A),
      mutedForeground: Color(0xFFA1A1AA),
      gridColor: Color(0xFF27272A),
      tooltipBackground: Color(0xFFFAFAFA),
      tooltipForeground: Color(0xFF0A0A0A),
    );
  }

  static ThemeColors fromTheme(ChartTheme theme) {
    return theme == ChartTheme.dark ? dark() : light();
  }
}

/// Get color at index with wrapping
Color getColorAtIndex(List<Color> colors, int index) {
  return colors[index % colors.length];
}

/// Parse hex color string to Color
Color parseColor(String hexColor) {
  hexColor = hexColor.replaceAll('#', '');
  if (hexColor.length == 6) {
    hexColor = 'FF$hexColor';
  }
  return Color(int.parse(hexColor, radix: 16));
}

/// Create gradient from color
LinearGradient createGradient(Color color, {double opacity = 0.3}) {
  return LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [
      color.withOpacity(opacity),
      color.withOpacity(0.0),
    ],
  );
}

/// Get responsive dimensions
Map<String, double> getResponsiveDimensions(double? width, double height) {
  return {
    'width': width ?? double.infinity,
    'height': height,
  };
}
