import 'package:flutter/material.dart';
import 'button_theme.dart';

enum ButtonVariant {
  primary,
  destructive,
  outline,
  secondary,
  ghost,
  link,
}

enum ButtonSize {
  defaultSize,
  sm,
  lg,
  icon,
}

class GalaxyButton extends StatelessWidget {
  const GalaxyButton({
    Key? key,
    required this.onPressed,
    required this.child,
    this.variant = ButtonVariant.primary,
    this.size = ButtonSize.defaultSize,
    this.disabled = false,
  }) : super(key: key);

  final VoidCallback? onPressed;
  final Widget child;
  final ButtonVariant variant;
  final ButtonSize size;
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
