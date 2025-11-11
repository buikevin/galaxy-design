/// Galaxy UI Charts - Types
///
/// Unified chart types for consistent API across all frameworks

import 'package:flutter/material.dart';

/// Chart theme options
enum ChartTheme {
  light,
  dark,
}

/// Legend position options
enum LegendPosition {
  top,
  bottom,
  left,
  right,
}

/// Dataset for chart data
class ChartDataset {
  final String label;
  final List<double> data;
  final String? type; // Chart type for mixed charts: 'line', 'bar', 'area'
  final Color? color;
  final Color? borderColor;
  final Color? backgroundColor;
  final double? borderWidth;
  final bool? fill;
  final bool? smooth;

  const ChartDataset({
    required this.label,
    required this.data,
    this.type,
    this.color,
    this.borderColor,
    this.backgroundColor,
    this.borderWidth,
    this.fill,
    this.smooth,
  });
}

/// Chart data structure
class ChartData {
  final List<String> labels;
  final List<ChartDataset> datasets;

  const ChartData({
    required this.labels,
    required this.datasets,
  });
}

/// Grid configuration
class GridConfig {
  final bool show;
  final Color? color;
  final double? strokeWidth;

  const GridConfig({
    this.show = true,
    this.color,
    this.strokeWidth,
  });
}

/// Tooltip configuration
class TooltipConfig {
  final bool show;
  final Color? backgroundColor;
  final Color? textColor;
  final double? fontSize;

  const TooltipConfig({
    this.show = true,
    this.backgroundColor,
    this.textColor,
    this.fontSize,
  });
}

/// Axis configuration
class AxisConfig {
  final bool show;
  final String? label;
  final Color? color;
  final double? fontSize;

  const AxisConfig({
    this.show = true,
    this.label,
    this.color,
    this.fontSize,
  });
}

/// Base chart props
abstract class BaseChartProps {
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

  const BaseChartProps({
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
  });
}
