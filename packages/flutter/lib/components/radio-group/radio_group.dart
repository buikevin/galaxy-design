// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc RadioGroup component - Nhóm radio buttons với options

import 'package:flutter/material.dart';

/// GalaxyRadioGroup - Component nhóm radio buttons với options
/// 
/// ## Props:
/// - [value] - Giá trị được chọn hiện tại
/// - [onChanged] - Callback khi giá trị thay đổi
/// - [options] - Danh sách các radio options
/// - [direction] - Hướng layout (default: Axis.vertical)
class GalaxyRadioGroup<T> extends StatelessWidget {
  const GalaxyRadioGroup({
    Key? key,
    required this.value,
    required this.onChanged,
    required this.options,
    this.direction = Axis.vertical,
  }) : super(key: key);

  /// Giá trị được chọn hiện tại
  final T? value;

  /// Callback khi giá trị thay đổi
  final ValueChanged<T?>? onChanged;

  /// Danh sách các radio options
  final List<GalaxyRadioOption<T>> options;

  /// Hướng layout
  final Axis direction;

  @override
  Widget build(BuildContext context) {
    return direction == Axis.vertical
        ? Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: _buildOptions(),
          )
        : Row(
            children: _buildOptions(),
          );
  }

  List<Widget> _buildOptions() {
    return options.map((option) {
      return GalaxyRadioItem<T>(
        value: option.value,
        groupValue: value,
        onChanged: onChanged,
        label: option.label,
        disabled: option.disabled,
      );
    }).toList();
  }
}

/// GalaxyRadioOption - Option trong radio group
/// 
/// ## Props:
/// - [value] - Giá trị của option
/// - [label] - Nhãn hiển thị
/// - [disabled] - Trạng thái disabled của option (default: false)
class GalaxyRadioOption<T> {
  /// Giá trị của option
  final T value;

  /// Nhãn hiển thị
  final String label;

  /// Trạng thái disabled của option
  final bool disabled;

  const GalaxyRadioOption({
    required this.value,
    required this.label,
    this.disabled = false,
  });
}

/// GalaxyRadioItem - Radio button item trong group
/// 
/// ## Props:
/// - [value] - Giá trị của radio item
/// - [groupValue] - Giá trị được chọn của group
/// - [onChanged] - Callback khi thay đổi
/// - [label] - Nhãn hiển thị
/// - [disabled] - Trạng thái disabled (default: false)
class GalaxyRadioItem<T> extends StatelessWidget {
  const GalaxyRadioItem({
    Key? key,
    required this.value,
    required this.groupValue,
    required this.onChanged,
    required this.label,
    this.disabled = false,
  }) : super(key: key);

  /// Giá trị của radio item
  final T value;

  /// Giá trị được chọn của group
  final T? groupValue;

  /// Callback khi thay đổi
  final ValueChanged<T?>? onChanged;

  /// Nhãn hiển thị
  final String label;

  /// Trạng thái disabled
  final bool disabled;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: disabled ? null : () => onChanged?.call(value),
      borderRadius: BorderRadius.circular(4),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 8),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Radio<T>(
              value: value,
              groupValue: groupValue,
              onChanged: disabled ? null : onChanged,
            ),
            const SizedBox(width: 8),
            Text(
              label,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: disabled
                        ? Theme.of(context).disabledColor
                        : Theme.of(context).colorScheme.onSurface,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}
