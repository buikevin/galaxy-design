import 'package:flutter/material.dart';

enum AlertVariant {
  default_,
  destructive,
}

class GalaxyAlert extends StatelessWidget {
  const GalaxyAlert({
    Key? key,
    required this.child,
    this.variant = AlertVariant.default_,
    this.padding = const EdgeInsets.all(16),
  }) : super(key: key);

  final Widget child;
  final AlertVariant variant;
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

class GalaxyAlertTitle extends StatelessWidget {
  const GalaxyAlertTitle({
    Key? key,
    required this.title,
    this.style,
  }) : super(key: key);

  final String title;
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

class GalaxyAlertDescription extends StatelessWidget {
  const GalaxyAlertDescription({
    Key? key,
    required this.description,
    this.style,
  }) : super(key: key);

  final String description;
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
