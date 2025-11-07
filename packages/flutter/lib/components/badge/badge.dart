import 'package:flutter/material.dart';

/// Variants for the badge component
enum BadgeVariant {
  default_,
  secondary,
  destructive,
  outline,
}

/// A badge component for displaying short pieces of information
/// like notification counts, status indicators, or labels.
class GalaxyBadge extends StatelessWidget {
  final String? text;
  final Widget? child;
  final BadgeVariant variant;
  final EdgeInsets? padding;

  const GalaxyBadge({
    Key? key,
    this.text,
    this.child,
    this.variant = BadgeVariant.default_,
    this.padding,
  })  : assert(text != null || child != null, 'Either text or child must be provided'),
        super(key: key);

  /// Creates a badge with text
  const GalaxyBadge.text(
    String text, {
    Key? key,
    BadgeVariant variant = BadgeVariant.default_,
    EdgeInsets? padding,
  }) : this(
          key: key,
          text: text,
          variant: variant,
          padding: padding,
        );

  /// Creates a default variant badge
  const GalaxyBadge.primary(
    String text, {
    Key? key,
    EdgeInsets? padding,
  }) : this(
          key: key,
          text: text,
          variant: BadgeVariant.default_,
          padding: padding,
        );

  /// Creates a secondary variant badge
  const GalaxyBadge.secondary(
    String text, {
    Key? key,
    EdgeInsets? padding,
  }) : this(
          key: key,
          text: text,
          variant: BadgeVariant.secondary,
          padding: padding,
        );

  /// Creates a destructive variant badge
  const GalaxyBadge.destructive(
    String text, {
    Key? key,
    EdgeInsets? padding,
  }) : this(
          key: key,
          text: text,
          variant: BadgeVariant.destructive,
          padding: padding,
        );

  /// Creates an outline variant badge
  const GalaxyBadge.outline(
    String text, {
    Key? key,
    EdgeInsets? padding,
  }) : this(
          key: key,
          text: text,
          variant: BadgeVariant.outline,
          padding: padding,
        );

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    // Determine colors based on variant
    Color backgroundColor;
    Color textColor;
    Color? borderColor;

    switch (variant) {
      case BadgeVariant.default_:
        backgroundColor = colorScheme.primary;
        textColor = colorScheme.onPrimary;
        borderColor = null;
        break;
      case BadgeVariant.secondary:
        backgroundColor = colorScheme.secondary;
        textColor = colorScheme.onSecondary;
        borderColor = null;
        break;
      case BadgeVariant.destructive:
        backgroundColor = colorScheme.error;
        textColor = colorScheme.onError;
        borderColor = null;
        break;
      case BadgeVariant.outline:
        backgroundColor = Colors.transparent;
        textColor = colorScheme.onSurface;
        borderColor = colorScheme.outline;
        break;
    }

    return Container(
      padding: padding ??
          const EdgeInsets.symmetric(
            horizontal: 10,
            vertical: 2,
          ),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(100),
        border: borderColor != null
            ? Border.all(
                color: borderColor,
                width: 1,
              )
            : null,
      ),
      child: child ??
          Text(
            text!,
            style: theme.textTheme.labelSmall?.copyWith(
              color: textColor,
              fontWeight: FontWeight.w600,
              fontSize: 12,
            ),
          ),
    );
  }
}

/// A badge that displays a count, typically used for notifications
class GalaxyBadgeCount extends StatelessWidget {
  final int count;
  final int? maxCount;
  final BadgeVariant variant;

  const GalaxyBadgeCount({
    Key? key,
    required this.count,
    this.maxCount = 99,
    this.variant = BadgeVariant.destructive,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final displayText = maxCount != null && count > maxCount!
        ? '$maxCount+'
        : count.toString();

    return GalaxyBadge.text(
      displayText,
      variant: variant,
      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
    );
  }
}

/// A badge that can be positioned on top of another widget
/// Useful for notification badges on icons
class GalaxyBadgePositioned extends StatelessWidget {
  final Widget child;
  final Widget badge;
  final AlignmentGeometry alignment;
  final EdgeInsets? offset;

  const GalaxyBadgePositioned({
    Key? key,
    required this.child,
    required this.badge,
    this.alignment = Alignment.topRight,
    this.offset,
  }) : super(key: key);

  /// Creates a notification count badge on top of a widget
  factory GalaxyBadgePositioned.count({
    Key? key,
    required Widget child,
    required int count,
    int? maxCount,
    BadgeVariant variant = BadgeVariant.destructive,
    AlignmentGeometry alignment = Alignment.topRight,
  }) {
    return GalaxyBadgePositioned(
      key: key,
      child: child,
      alignment: alignment,
      badge: GalaxyBadgeCount(
        count: count,
        maxCount: maxCount,
        variant: variant,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        child,
        Positioned(
          top: offset?.top ?? -4,
          right: offset?.right ?? -4,
          child: badge,
        ),
      ],
    );
  }
}
