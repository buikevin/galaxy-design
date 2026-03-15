// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Button component - Nút bấm với các variants và sizes khác nhau

import 'package:flutter/material.dart';
import 'button_theme.dart';

/// Button variant options for visual styling
enum ButtonVariant {
  primary,
  destructive,
  outline,
  secondary,
  ghost,
  link,
}

/// Button size options
enum ButtonSize {
  defaultSize,
  sm,
  lg,
  icon,
}

/// GalaxyButton - Nút bấm với các variants và sizes khác nhau
/// 
/// ## Props:
/// - [onPressed] - Callback function khi button được nhấn
/// - [child] - Widget con hiển thị bên trong button
/// - [variant] - Biến thể hiển thị (default: ButtonVariant.primary)
/// - [size] - Kích thước button (default: ButtonSize.defaultSize)
/// - [disabled] - Trạng thái disabled của button (default: false)
class GalaxyButton extends StatelessWidget {
  const GalaxyButton({
    Key? key,
    required this.onPressed,
    required this.child,
    this.variant = ButtonVariant.primary,
    this.size = ButtonSize.defaultSize,
    this.disabled = false,
  }) : super(key: key);

  /// Callback function khi button được nhấn
  final VoidCallback? onPressed;

  /// Widget con hiển thị bên trong button
  final Widget child;

  /// Biến thể hiển thị của button
  final ButtonVariant variant;

  /// Kích thước của button
  final ButtonSize size;

  /// Trạng thái disabled của button
  final bool disabled;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final buttonTheme = GalaxyButtonTheme.of(context);

    final colors = buttonTheme.getColors(variant, theme);
    final padding = buttonTheme.getPadding(size);
    final height = buttonTheme.getHeight(size);

    return SizedBox(
      height: height,
      child: ElevatedButton(
        onPressed: disabled ? null : onPressed,
        style: ElevatedButton.styleFrom(
          backgroundColor: colors.background,
          foregroundColor: colors.foreground,
          padding: padding,
          elevation: variant == ButtonVariant.outline ? 0 : null,
          side: variant == ButtonVariant.outline
              ? BorderSide(color: theme.colorScheme.outline)
              : null,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(6),
          ),
        ),
        child: child,
      ),
    );
  }
}
