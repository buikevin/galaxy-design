import 'package:flutter/material.dart';

class GalaxySwitch extends StatelessWidget {
  final bool value;
  final ValueChanged<bool>? onChanged;
  final Color? activeColor;
  final Color? inactiveColor;
  final Color? trackColor;
  final bool disabled;

  const GalaxySwitch({
    Key? key,
    required this.value,
    required this.onChanged,
    this.activeColor,
    this.inactiveColor,
    this.trackColor,
    this.disabled = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Switch(
      value: value,
      onChanged: disabled ? null : onChanged,
      activeColor: activeColor ?? theme.colorScheme.primary,
      inactiveThumbColor: inactiveColor ?? theme.colorScheme.outline,
      activeTrackColor: trackColor ?? theme.colorScheme.primary.withOpacity(0.5),
      inactiveTrackColor: theme.colorScheme.surfaceVariant,
    );
  }
}
