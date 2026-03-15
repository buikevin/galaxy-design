// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc DropdownMenu component - Menu dropdown với các items selectable

import 'package:flutter/material.dart';

/// GalaxyDropdownMenu - Component menu dropdown với các items selectable
/// 
/// ## Props:
/// - [trigger] - Widget kích hoạt dropdown menu
/// - [items] - Danh sách các items trong menu
/// - [onSelected] - Callback khi item được chọn
class GalaxyDropdownMenu<T> extends StatelessWidget {
  const GalaxyDropdownMenu({
    Key? key,
    required this.trigger,
    required this.items,
    this.onSelected,
  }) : super(key: key);

  /// Widget kích hoạt dropdown menu
  final Widget trigger;

  /// Danh sách các items trong menu
  final List<GalaxyDropdownMenuItem<T>> items;

  /// Callback khi item được chọn
  final ValueChanged<T>? onSelected;

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton<T>(
      onSelected: onSelected,
      itemBuilder: (context) {
        return items.map((item) {
          return PopupMenuItem<T>(
            value: item.value,
            enabled: !item.disabled,
            child: Row(
              children: [
                if (item.leading != null) ...[
                  item.leading!,
                  const SizedBox(width: 8),
                ],
                Expanded(child: item.child),
                if (item.trailing != null) ...[
                  const SizedBox(width: 8),
                  item.trailing!,
                ],
              ],
            ),
          );
        }).toList();
      },
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
      child: trigger,
    );
  }
}

/// GalaxyDropdownMenuItem - Item trong dropdown menu
/// 
/// ## Props:
/// - [value] - Giá trị của item
/// - [child] - Widget con hiển thị
/// - [leading] - Widget leading (icon bên trái)
/// - [trailing] - Widget trailing (icon bên phải)
/// - [disabled] - Trạng thái disabled của item (default: false)
class GalaxyDropdownMenuItem<T> {
  /// Giá trị của item
  final T value;

  /// Widget con hiển thị
  final Widget child;

  /// Widget leading (icon bên trái)
  final Widget? leading;

  /// Widget trailing (icon bên phải)
  final Widget? trailing;

  /// Trạng thái disabled của item
  final bool disabled;

  const GalaxyDropdownMenuItem({
    required this.value,
    required this.child,
    this.leading,
    this.trailing,
    this.disabled = false,
  });
}
