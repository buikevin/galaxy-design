// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Tooltip component - Hiển thị gợi ý khi hover

import 'package:flutter/material.dart';

/// GalaxyTooltip - Component hiển thị gợi ý khi hover
/// 
/// ## Props:
/// - [child] - Widget con cần hiển thị tooltip
/// - [message] - Nội dung tooltip hiển thị
/// - [padding] - Padding của tooltip
/// - [margin] - Margin của tooltip
/// - [height] - Chiều cao của tooltip
/// - [preferBelow] - Ưu tiên hiển thị bên dưới (default: true)
/// - [waitDuration] - Thời gian chờ trước khi hiển thị
/// - [showDuration] - Thời gian hiển thị tooltip
class GalaxyTooltip extends StatelessWidget {
  const GalaxyTooltip({
    Key? key,
    required this.child,
    required this.message,
    this.padding,
    this.margin,
    this.height,
    this.preferBelow,
    this.waitDuration,
    this.showDuration,
  }) : super(key: key);

  /// Widget con cần hiển thị tooltip
  final Widget child;

  /// Nội dung tooltip hiển thị
  final String message;

  /// Padding của tooltip
  final EdgeInsetsGeometry? padding;

  /// Margin của tooltip
  final EdgeInsetsGeometry? margin;

  /// Chiều cao của tooltip
  final double? height;

  /// Ưu tiên hiển thị bên dưới
  final bool? preferBelow;

  /// Thời gian chờ trước khi hiển thị
  final Duration? waitDuration;

  /// Thời gian hiển thị tooltip
  final Duration? showDuration;

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: message,
      padding: padding ?? const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      margin: margin,
      height: height,
      preferBelow: preferBelow,
      waitDuration: waitDuration ?? const Duration(milliseconds: 500),
      showDuration: showDuration ?? const Duration(milliseconds: 1500),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.inverseSurface,
        borderRadius: BorderRadius.circular(6),
        border: Border.all(
          color: Theme.of(context).colorScheme.outline.withOpacity(0.2),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      textStyle: TextStyle(
        color: Theme.of(context).colorScheme.onInverseSurface,
        fontSize: 13,
      ),
      child: child,
    );
  }
}
