// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Label component - Nhãn hiển thị với tùy chọn required marker

import 'package:flutter/material.dart';

/// GalaxyLabel - Component label hiển thị với tùy chọn required marker
/// 
/// ## Props:
/// - [text] - Văn bản của label
/// - [required] - Hiển thị dấu * required (default: false)
/// - [style] - TextStyle tùy chỉnh
/// - [color] - Màu chữ tùy chỉnh
class GalaxyLabel extends StatelessWidget {
  const GalaxyLabel({
    Key? key,
    required this.text,
    this.required = false,
    this.style,
    this.color,
  }) : super(key: key);

  /// Văn bản của label
  final String text;

  /// Hiển thị dấu * required
  final bool required;

  /// TextStyle tùy chỉnh
  final TextStyle? style;

  /// Màu chữ tùy chỉnh
  final Color? color;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final defaultStyle = theme.textTheme.bodySmall?.copyWith(
      fontWeight: FontWeight.w500,
      color: color ?? theme.colorScheme.onSurface,
    );

    return RichText(
      text: TextSpan(
        text: text,
        style: style ?? defaultStyle,
        children: required
            ? [
                TextSpan(
                  text: ' *',
                  style: TextStyle(
                    color: theme.colorScheme.error,
                  ),
                ),
              ]
            : null,
      ),
    );
  }
}
