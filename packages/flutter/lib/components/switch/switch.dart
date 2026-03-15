// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Switch component - Công tắc bật/tắt

import 'package:flutter/material.dart';

/// GalaxySwitch - Component công tắc bật/tắt
/// 
/// ## Props:
/// - [value] - Trạng thái bật/tắt của switch
/// - [onChanged] - Callback khi trạng thái thay đổi
/// - [activeColor] - Màu khi active
/// - [inactiveColor] - Màu khi inactive
/// - [trackColor] - Màu của track
/// - [disabled] - Trạng thái disabled của switch (default: false)
class GalaxySwitch extends StatelessWidget {
  const GalaxySwitch({
    Key? key,
    required this.value,
    required this.onChanged,
    this.activeColor,
    this.inactiveColor,
    this.trackColor,
    this.disabled = false,
  }) : super(key: key);

  /// Trạng thái bật/tắt của switch
  final bool value;

  /// Callback khi trạng thái thay đổi
  final ValueChanged<bool>? onChanged;

  /// Màu khi active
  final Color? activeColor;

  /// Màu khi inactive
  final Color? inactiveColor;

  /// Màu của track
  final Color? trackColor;

  /// Trạng thái disabled của switch
  final bool disabled;

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
