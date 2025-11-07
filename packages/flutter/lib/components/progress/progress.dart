import 'package:flutter/material.dart';

class GalaxyProgress extends StatelessWidget {
  final double? value;
  final Color? backgroundColor;
  final Color? valueColor;
  final double height;

  const GalaxyProgress({
    Key? key,
    this.value,
    this.backgroundColor,
    this.valueColor,
    this.height = 4.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return SizedBox(
      height: height,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(height / 2),
        child: LinearProgressIndicator(
          value: value,
          backgroundColor: backgroundColor ?? theme.colorScheme.surfaceVariant,
          valueColor: AlwaysStoppedAnimation<Color>(
            valueColor ?? theme.colorScheme.primary,
          ),
        ),
      ),
    );
  }
}
