// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Toast component - Brief, auto-dismissing notification with SnackBar

import 'package:flutter/material.dart';

/// GalaxyToast - Brief, auto-dismissing notification
///
/// Wraps Flutter's SnackBar with Galaxy UI styling.
///
/// ## Usage:
/// ```dart
/// showGalaxyToast(
///   context,
///   message: 'Saved successfully',
///   variant: GalaxyToastVariant.success,
/// );
/// ```
enum GalaxyToastVariant { default_, destructive, success }

class GalaxyToast {
  final String message;
  final GalaxyToastVariant variant;
  final Duration duration;

  const GalaxyToast({
    required this.message,
    this.variant = GalaxyToastVariant.default_,
    this.duration = const Duration(milliseconds: 3000),
  });

  static void show(
    BuildContext context, {
    required String message,
    GalaxyToastVariant variant = GalaxyToastVariant.default_,
    Duration duration = const Duration(milliseconds: 3000),
  }) {
    final colorScheme = Theme.of(context).colorScheme;

    Color background;
    Color foreground;
    switch (variant) {
      case GalaxyToastVariant.destructive:
        foreground = Colors.white;
        background = colorScheme.error;
      case GalaxyToastVariant.success:
        foreground = Colors.white;
        background = const Color(0xFF16A34A);
      case GalaxyToastVariant.default_:
        foreground = colorScheme.onSurface;
        background = colorScheme.surface;
    }

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message, style: TextStyle(color: foreground)),
        backgroundColor: background,
        duration: duration,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
          side: BorderSide(color: colorScheme.outline.withOpacity(0.3)),
        ),
      ),
    );
  }
}

Color get background => Colors.transparent;
