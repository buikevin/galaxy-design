// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Select component - Dropdown select với label và placeholder

import 'package:flutter/material.dart';

/// GalaxySelect - Component dropdown select với label và placeholder
/// 
/// ## Props:
/// - [value] - Giá trị được chọn hiện tại
/// - [items] - Danh sách các items selectable
/// - [onChanged] - Callback khi giá trị thay đổi
/// - [label] - Nhãn hiển thị phía trên select
/// - [placeholder] - Văn bản giữ chỗ khi chưa chọn (default: 'Select an option')
/// - [enabled] - Trạng thái enabled của select (default: true)
class GalaxySelect<T> extends StatelessWidget {
  const GalaxySelect({
    Key? key,
    required this.value,
    required this.items,
    required this.onChanged,
    this.label,
    this.placeholder = 'Select an option',
    this.enabled = true,
  }) : super(key: key);

  /// Giá trị được chọn hiện tại
  final T? value;

  /// Danh sách các items selectable
  final List<GalaxySelectItem<T>> items;

  /// Callback khi giá trị thay đổi
  final ValueChanged<T?>? onChanged;

  /// Nhãn hiển thị phía trên select
  final String? label;

  /// Văn bản giữ chỗ khi chưa chọn
  final String placeholder;

  /// Trạng thái enabled của select
  final bool enabled;

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
        Container(
          height: 40,
          padding: const EdgeInsets.symmetric(horizontal: 12),
          decoration: BoxDecoration(
            border: Border.all(color: theme.colorScheme.outline),
            borderRadius: BorderRadius.circular(6),
          ),
          child: DropdownButtonHideUnderline(
            child: DropdownButton<T>(
              value: value,
              onChanged: enabled ? onChanged : null,
              isExpanded: true,
              hint: Text(
                placeholder,
                style: theme.textTheme.bodyMedium?.copyWith(
                  color: theme.colorScheme.onSurface.withOpacity(0.5),
                ),
              ),
              items: items.map((GalaxySelectItem<T> item) {
                return DropdownMenuItem<T>(
                  value: item.value,
                  child: Text(item.label),
                );
              }).toList(),
            ),
          ),
        ),
      ],
    );
  }
}

/// GalaxySelectItem - Item trong select dropdown
/// 
/// ## Props:
/// - [value] - Giá trị của item
/// - [label] - Nhãn hiển thị của item
class GalaxySelectItem<T> {
  const GalaxySelectItem({
    required this.value,
    required this.label,
  });

  /// Giá trị của item
  final T value;

  /// Nhãn hiển thị của item
  final String label;
}
