import 'package:flutter/material.dart';
import 'button.dart';

class ButtonColors {
  const ButtonColors({
    required this.background,
    required this.foreground,
  });

  final Color background;
  final Color foreground;
}

class GalaxyButtonTheme extends InheritedWidget {
  const GalaxyButtonTheme({
    Key? key,
    required Widget child,
  }) : super(key: key, child: child);

  static GalaxyButtonTheme of(BuildContext context) {
    final result = context.dependOnInheritedWidgetOfExactType<GalaxyButtonTheme>();
    return result ?? const GalaxyButtonTheme(child: SizedBox.shrink());
  }

  ButtonColors getColors(ButtonVariant variant, ThemeData theme) {
    switch (variant) {
      case ButtonVariant.primary:
        return ButtonColors(
          background: theme.colorScheme.primary,
          foreground: theme.colorScheme.onPrimary,
        );
      case ButtonVariant.destructive:
        return ButtonColors(
          background: theme.colorScheme.error,
          foreground: theme.colorScheme.onError,
        );
      case ButtonVariant.outline:
        return ButtonColors(
          background: theme.colorScheme.surface,
          foreground: theme.colorScheme.onSurface,
        );
      case ButtonVariant.secondary:
        return ButtonColors(
          background: theme.colorScheme.secondary,
          foreground: theme.colorScheme.onSecondary,
        );
      case ButtonVariant.ghost:
        return ButtonColors(
          background: Colors.transparent,
          foreground: theme.colorScheme.onSurface,
        );
      case ButtonVariant.link:
        return ButtonColors(
          background: Colors.transparent,
          foreground: theme.colorScheme.primary,
        );
    }
  }

  EdgeInsets getPadding(ButtonSize size) {
    switch (size) {
      case ButtonSize.defaultSize:
        return const EdgeInsets.symmetric(horizontal: 16, vertical: 8);
      case ButtonSize.sm:
        return const EdgeInsets.symmetric(horizontal: 12, vertical: 6);
      case ButtonSize.lg:
        return const EdgeInsets.symmetric(horizontal: 32, vertical: 12);
      case ButtonSize.icon:
        return const EdgeInsets.all(8);
    }
  }

  double getHeight(ButtonSize size) {
    switch (size) {
      case ButtonSize.defaultSize:
        return 40;
      case ButtonSize.sm:
        return 36;
      case ButtonSize.lg:
        return 44;
      case ButtonSize.icon:
        return 40;
    }
  }

  @override
  bool updateShouldNotify(GalaxyButtonTheme oldWidget) => false;
}
