// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Menubar component - Menu bar ngang với multiple menus

import 'package:flutter/material.dart';

/// GalaxyMenubar - Component menu bar ngang với multiple menus
/// 
/// ## Props:
/// - [menus] - Danh sách các menus hiển thị trong menubar
class GalaxyMenubar extends StatelessWidget {
  const GalaxyMenubar({
    Key? key,
    required this.menus,
  }) : super(key: key);

  /// Danh sách các menus hiển thị trong menubar
  final List<GalaxyMenubarMenu> menus;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Container(
      height: 40,
      decoration: BoxDecoration(
        border: Border.all(color: theme.colorScheme.outline),
        borderRadius: BorderRadius.circular(6),
        color: theme.colorScheme.surface,
      ),
      padding: const EdgeInsets.all(4),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: menus.map((menu) {
          return Padding(
            padding: const EdgeInsets.only(right: 4),
            child: PopupMenuButton(
              itemBuilder: (context) => menu.items,
              onSelected: menu.onSelected,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(6),
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                child: Text(
                  menu.label,
                  style: theme.textTheme.bodyMedium?.copyWith(
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}

/// GalaxyMenubarMenu - Menu trong menubar
/// 
/// ## Props:
/// - [label] - Nhãn hiển thị của menu
/// - [items] - Danh sách các items trong menu
/// - [onSelected] - Callback khi item được chọn
class GalaxyMenubarMenu {
  /// Nhãn hiển thị của menu
  final String label;

  /// Danh sách các items trong menu
  final List<PopupMenuEntry> items;

  /// Callback khi item được chọn
  final ValueChanged? onSelected;

  const GalaxyMenubarMenu({
    required this.label,
    required this.items,
    this.onSelected,
  });
}
