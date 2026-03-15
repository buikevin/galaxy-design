// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Toggle component - Nút bật/tắt với variants và sizes

import 'package:flutter/material.dart';

/// Toggle variant options
enum ToggleVariant {
  default_,
  outline,
}

/// Toggle size options
enum ToggleSize {
  default_,
  sm,
  lg,
}

/// GalaxyToggle - Component nút bật/tắt với variants và sizes
/// 
/// ## Props:
/// - [value] - Trạng thái bật/tắt của toggle
/// - [onPressed] - Callback khi trạng thái thay đổi
/// - [child] - Widget con hiển thị bên trong toggle
/// - [variant] - Biến thể toggle (default: ToggleVariant.default_)
/// - [size] - Kích thước toggle (default: ToggleSize.default_)
/// - [disabled] - Trạng thái disabled của toggle (default: false)
class GalaxyToggle extends StatelessWidget {
  const GalaxyToggle({
    Key? key,
    required this.value,
    required this.onPressed,
    required this.child,
    this.variant = ToggleVariant.default_,
    this.size = ToggleSize.default_,
    this.disabled = false,
  }) : super(key: key);

  /// Trạng thái bật/tắt của toggle
  final bool value;

  /// Callback khi trạng thái thay đổi
  final ValueChanged<bool>? onPressed;

  /// Widget con hiển thị bên trong toggle
  final Widget child;

  /// Biến thể toggle
  final ToggleVariant variant;

  /// Kích thước toggle
  final ToggleSize size;

  /// Trạng thái disabled của toggle
  final bool disabled;

  double _getHeight() {
    switch (size) {
      case ToggleSize.sm:
        return 36;
      case ToggleSize.lg:
        return 44;
      case ToggleSize.default_:
      default:
        return 40;
    }
  }

  EdgeInsets _getPadding() {
    switch (size) {
      case ToggleSize.sm:
        return const EdgeInsets.symmetric(horizontal: 10);
      case ToggleSize.lg:
        return const EdgeInsets.symmetric(horizontal: 20);
      case ToggleSize.default_:
      default:
        return const EdgeInsets.symmetric(horizontal: 12);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    Color backgroundColor;
    Color foregroundColor;
    Border? border;

    if (value) {
      backgroundColor = theme.colorScheme.secondaryContainer;
      foregroundColor = theme.colorScheme.onSecondaryContainer;
    } else {
      backgroundColor = Colors.transparent;
      foregroundColor = theme.colorScheme.onSurface;
    }

    if (variant == ToggleVariant.outline) {
      border = Border.all(
        color: value
            ? theme.colorScheme.secondaryContainer
            : theme.colorScheme.outline,
      );
      if (!value) {
        backgroundColor = Colors.transparent;
      }
    }

    return SizedBox(
      height: _getHeight(),
      child: Material(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(6),
        child: InkWell(
          onTap: disabled ? null : () => onPressed?.call(!value),
          borderRadius: BorderRadius.circular(6),
          child: Container(
            padding: _getPadding(),
            decoration: BoxDecoration(
              border: border,
              borderRadius: BorderRadius.circular(6),
            ),
            child: Center(
              child: DefaultTextStyle(
                style: theme.textTheme.bodyMedium!.copyWith(
                  color: foregroundColor,
                  fontWeight: FontWeight.w500,
                ),
                child: child,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
