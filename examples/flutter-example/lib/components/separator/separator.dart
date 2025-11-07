import 'package:flutter/material.dart';

enum SeparatorOrientation {
  horizontal,
  vertical,
}

class GalaxySeparator extends StatelessWidget {
  final SeparatorOrientation orientation;
  final double? thickness;
  final Color? color;
  final double? indent;
  final double? endIndent;

  const GalaxySeparator({
    Key? key,
    this.orientation = SeparatorOrientation.horizontal,
    this.thickness,
    this.color,
    this.indent,
    this.endIndent,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final dividerColor = color ?? theme.dividerColor;
    final dividerThickness = thickness ?? 1.0;

    if (orientation == SeparatorOrientation.horizontal) {
      return Divider(
        thickness: dividerThickness,
        color: dividerColor,
        indent: indent,
        endIndent: endIndent,
        height: dividerThickness,
      );
    } else {
      return VerticalDivider(
        thickness: dividerThickness,
        color: dividerColor,
        indent: indent,
        endIndent: endIndent,
        width: dividerThickness,
      );
    }
  }
}
