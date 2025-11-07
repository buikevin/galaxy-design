import 'package:flutter/material.dart';

class GalaxyMenubar extends StatelessWidget {
  final List<GalaxyMenubarMenu> menus;

  const GalaxyMenubar({
    Key? key,
    required this.menus,
  }) : super(key: key);

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

class GalaxyMenubarMenu {
  final String label;
  final List<PopupMenuEntry> items;
  final ValueChanged? onSelected;

  const GalaxyMenubarMenu({
    required this.label,
    required this.items,
    this.onSelected,
  });
}
