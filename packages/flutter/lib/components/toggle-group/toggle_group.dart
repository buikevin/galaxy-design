// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc ToggleGroup component - Nhóm các toggle buttons với single/multi selection

import 'package:flutter/material.dart';
import '../toggle/toggle.dart';

/// GalaxyToggleGroup - Component nhóm các toggle buttons với single/multi selection
/// 
/// ## Props:
/// - [value] - Giá trị được chọn hiện tại
/// - [onValueChanged] - Callback khi giá trị thay đổi
/// - [items] - Danh sách các toggle items
/// - [variant] - Biến thể toggle (default: ToggleVariant.default_)
/// - [size] - Kích thước toggle (default: ToggleSize.default_)
/// - [allowDeselect] - Cho phép bỏ chọn (default: false)
class GalaxyToggleGroup<T> extends StatelessWidget {
  const GalaxyToggleGroup({
    Key? key,
    required this.value,
    required this.onValueChanged,
    required this.items,
    this.variant = ToggleVariant.default_,
    this.size = ToggleSize.default_,
    this.allowDeselect = false,
  }) : super(key: key);

  /// Giá trị được chọn hiện tại
  final T? value;

  /// Callback khi giá trị thay đổi
  final ValueChanged<T?>? onValueChanged;

  /// Danh sách các toggle items
  final List<GalaxyToggleGroupItem<T>> items;

  /// Biến thể toggle
  final ToggleVariant variant;

  /// Kích thước toggle
  final ToggleSize size;

  /// Cho phép bỏ chọn
  final bool allowDeselect;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: items.map((item) {
        final isSelected = value == item.value;
        return Padding(
          padding: const EdgeInsets.only(right: 4),
          child: GalaxyToggle(
            value: isSelected,
            onPressed: (newValue) {
              if (newValue) {
                onValueChanged?.call(item.value);
              } else if (allowDeselect) {
                onValueChanged?.call(null);
              }
            },
            variant: variant,
            size: size,
            disabled: item.disabled,
            child: item.child,
          ),
        );
      }).toList(),
    );
  }
}

/// GalaxyToggleGroupItem - Item trong toggle group
/// 
/// ## Props:
/// - [value] - Giá trị của item
/// - [child] - Widget con hiển thị
/// - [disabled] - Trạng thái disabled của item (default: false)
class GalaxyToggleGroupItem<T> {
  /// Giá trị của item
  final T value;

  /// Widget con hiển thị
  final Widget child;

  /// Trạng thái disabled của item
  final bool disabled;

  const GalaxyToggleGroupItem({
    required this.value,
    required this.child,
    this.disabled = false,
  });
}
