import 'package:flutter/material.dart';

class GalaxyLabel extends StatelessWidget {
  final String text;
  final bool required;
  final TextStyle? style;
  final Color? color;

  const GalaxyLabel({
    Key? key,
    required this.text,
    this.required = false,
    this.style,
    this.color,
  }) : super(key: key);

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
