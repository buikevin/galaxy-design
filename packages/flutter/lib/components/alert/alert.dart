// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Alert component - Hiển thị thông báo quan trọng với variants

import 'package:flutter/material.dart';

/// Alert variant options
enum AlertVariant {
  default_,
  destructive,
}

/// GalaxyAlert - Component hiển thị thông báo quan trọng với variants
/// 
/// ## Props:
/// - [child] - Widget con hiển thị trong alert
/// - [variant] - Biến thể alert (default: AlertVariant.default_)
/// - [padding] - Padding của alert (default: EdgeInsets.all(16))
class GalaxyAlert extends StatelessWidget {
  const GalaxyAlert({
    Key? key,
    required this.child,
    this.variant = AlertVariant.default_,
    this.padding = const EdgeInsets.all(16),
  }) : super(key: key);

  /// Widget con hiển thị trong alert
  final Widget child;

  /// Biến thể alert
  final AlertVariant variant;

  /// Padding của alert
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    Color backgroundColor;
    Color borderColor;
    Color textColor;

    switch (variant) {
      case AlertVariant.default_:
        backgroundColor = theme.colorScheme.surface;
        borderColor = theme.colorScheme.outline;
        textColor = theme.colorScheme.onSurface;
        break;
      case AlertVariant.destructive:
        backgroundColor = theme.colorScheme.errorContainer.withOpacity(0.1);
        borderColor = theme.colorScheme.error.withOpacity(0.5);
        textColor = theme.colorScheme.error;
        break;
    }

    return Container(
      width: double.infinity,
      padding: padding,
      decoration: BoxDecoration(
        color: backgroundColor,
        border: Border.all(color: borderColor),
        borderRadius: BorderRadius.circular(8),
      ),
      child: DefaultTextStyle(
        style: theme.textTheme.bodyMedium!.copyWith(color: textColor),
        child: child,
      ),
    );
  }
}

/// GalaxyAlertTitle - Tiêu đề của alert
/// 
/// ## Props:
/// - [title] - Tiêu đề hiển thị
/// - [style] - TextStyle tùy chỉnh
class GalaxyAlertTitle extends StatelessWidget {
  const GalaxyAlertTitle({
    Key? key,
    required this.title,
    this.style,
  }) : super(key: key);

  /// Tiêu đề hiển thị
  final String title;

  /// TextStyle tùy chỉnh
  final TextStyle? style;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Text(
        title,
        style: style ??
            theme.textTheme.titleSmall?.copyWith(
              fontWeight: FontWeight.w600,
              letterSpacing: -0.5,
            ),
      ),
    );
  }
}

/// GalaxyAlertDescription - Mô tả của alert
/// 
/// ## Props:
/// - [description] - Mô tả hiển thị
/// - [style] - TextStyle tùy chỉnh
class GalaxyAlertDescription extends StatelessWidget {
  const GalaxyAlertDescription({
    Key? key,
    required this.description,
    this.style,
  }) : super(key: key);

  /// Mô tả hiển thị
  final String description;

  /// TextStyle tùy chỉnh
  final TextStyle? style;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Text(
      description,
      style: style ??
          theme.textTheme.bodySmall?.copyWith(
            opacity: 0.9,
          ),
    );
  }
}
