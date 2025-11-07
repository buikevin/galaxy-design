import 'package:flutter/material.dart';

enum ToggleVariant {
  default_,
  outline,
}

enum ToggleSize {
  default_,
  sm,
  lg,
}

class GalaxyToggle extends StatelessWidget {
  final bool value;
  final ValueChanged<bool>? onPressed;
  final Widget child;
  final ToggleVariant variant;
  final ToggleSize size;
  final bool disabled;

  const GalaxyToggle({
    Key? key,
    required this.value,
    required this.onPressed,
    required this.child,
    this.variant = ToggleVariant.default_,
    this.size = ToggleSize.default_,
    this.disabled = false,
  }) : super(key: key);

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
