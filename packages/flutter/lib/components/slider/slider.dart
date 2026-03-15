// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Slider component - Thanh trượt chọn giá trị trong range

import 'package:flutter/material.dart';

/// GalaxySlider - Component thanh trượt chọn giá trị trong range
/// 
/// ## Props:
/// - [value] - Giá trị hiện tại của slider
/// - [onChanged] - Callback khi giá trị thay đổi
/// - [min] - Giá trị tối thiểu (default: 0.0)
/// - [max] - Giá trị tối đa (default: 100.0)
/// - [divisions] - Số chia của slider
/// - [label] - Nhãn hiển thị phía trên slider
/// - [disabled] - Trạng thái disabled của slider (default: false)
class GalaxySlider extends StatelessWidget {
  const GalaxySlider({
    Key? key,
    required this.value,
    required this.onChanged,
    this.min = 0.0,
    this.max = 100.0,
    this.divisions,
    this.label,
    this.disabled = false,
  }) : super(key: key);

  /// Giá trị hiện tại của slider
  final double value;

  /// Callback khi giá trị thay đổi
  final ValueChanged<double>? onChanged;

  /// Giá trị tối thiểu
  final double min;

  /// Giá trị tối đa
  final double max;

  /// Số chia của slider
  final int? divisions;

  /// Nhãn hiển thị phía trên slider
  final String? label;

  /// Trạng thái disabled của slider
  final bool disabled;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Text(
              label!,
              style: theme.textTheme.bodySmall?.copyWith(
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        SliderTheme(
          data: SliderTheme.of(context).copyWith(
            activeTrackColor: theme.colorScheme.primary,
            inactiveTrackColor: theme.colorScheme.secondary,
            thumbColor: theme.colorScheme.primary,
            overlayColor: theme.colorScheme.primary.withOpacity(0.2),
            trackHeight: 4.0,
            thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 8.0),
            overlayShape: const RoundSliderOverlayShape(overlayRadius: 16.0),
          ),
          child: Slider(
            value: value.clamp(min, max),
            min: min,
            max: max,
            divisions: divisions,
            onChanged: disabled ? null : onChanged,
          ),
        ),
      ],
    );
  }
}
