// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Progress component - Thanh tiến trình linear

import 'package:flutter/material.dart';

/// GalaxyProgress - Component thanh tiến trình linear
/// 
/// ## Props:
/// - [value] - Giá trị tiến trình (0.0 - 1.0), null cho indeterminate
/// - [backgroundColor] - Màu nền của progress bar
/// - [valueColor] - Màu của progress value
/// - [height] - Chiều cao của progress bar (default: 4.0)
class GalaxyProgress extends StatelessWidget {
  const GalaxyProgress({
    Key? key,
    this.value,
    this.backgroundColor,
    this.valueColor,
    this.height = 4.0,
  }) : super(key: key);

  /// Giá trị tiến trình (0.0 - 1.0), null cho indeterminate
  final double? value;

  /// Màu nền của progress bar
  final Color? backgroundColor;

  /// Màu của progress value
  final Color? valueColor;

  /// Chiều cao của progress bar
  final double height;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return SizedBox(
      height: height,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(height / 2),
        child: LinearProgressIndicator(
          value: value,
          backgroundColor: backgroundColor ?? theme.colorScheme.surfaceVariant,
          valueColor: AlwaysStoppedAnimation<Color>(
            valueColor ?? theme.colorScheme.primary,
          ),
        ),
      ),
    );
  }
}
