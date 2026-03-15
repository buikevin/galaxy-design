// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Separator component - Đường phân cách ngang hoặc dọc

import 'package:flutter/material.dart';

/// Separator orientation options
enum SeparatorOrientation {
  horizontal,
  vertical,
}

/// GalaxySeparator - Component đường phân cách ngang hoặc dọc
/// 
/// ## Props:
/// - [orientation] - Hướng của separator (default: SeparatorOrientation.horizontal)
/// - [thickness] - Độ dày của đường
/// - [color] - Màu của đường
/// - [indent] - Khoảng cách thụt vào đầu
/// - [endIndent] - Khoảng cách thụt vào cuối
class GalaxySeparator extends StatelessWidget {
  const GalaxySeparator({
    Key? key,
    this.orientation = SeparatorOrientation.horizontal,
    this.thickness,
    this.color,
    this.indent,
    this.endIndent,
  }) : super(key: key);

  /// Hướng của separator
  final SeparatorOrientation orientation;

  /// Độ dày của đường
  final double? thickness;

  /// Màu của đường
  final Color? color;

  /// Khoảng cách thụt vào đầu
  final double? indent;

  /// Khoảng cách thụt vào cuối
  final double? endIndent;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final dividerColor = color ?? theme.dividerColor;
    final dividerThickness = thickness ?? 1.0;

    if (orientation == SeparatorOrientation.horizontal) {
      return Divider(
        thickness: dividerThickness,
        color: dividerColor,
        indent: indent,
        endIndent: endIndent,
        height: dividerThickness,
      );
    } else {
      return VerticalDivider(
        thickness: dividerThickness,
        color: dividerColor,
        indent: indent,
        endIndent: endIndent,
        width: dividerThickness,
      );
    }
  }
}
