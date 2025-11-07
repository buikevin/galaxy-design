import 'package:flutter/material.dart';

class GalaxyDropdownMenu<T> extends StatelessWidget {
  final Widget trigger;
  final List<GalaxyDropdownMenuItem<T>> items;
  final ValueChanged<T>? onSelected;

  const GalaxyDropdownMenu({
    Key? key,
    required this.trigger,
    required this.items,
    this.onSelected,
  }) : super(key: key);

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

class GalaxyDropdownMenuItem<T> {
  final T value;
  final Widget child;
  final Widget? leading;
  final Widget? trailing;
  final bool disabled;

  const GalaxyDropdownMenuItem({
    required this.value,
    required this.child,
    this.leading,
    this.trailing,
    this.disabled = false,
  });
}
