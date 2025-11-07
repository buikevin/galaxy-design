import 'package:flutter/material.dart';

// Note: Flutter mobile doesn't have native context menu support like desktop
// This implementation uses long-press gesture as alternative
class GalaxyContextMenu<T> extends StatelessWidget {
  final Widget child;
  final List<GalaxyContextMenuItem<T>> items;
  final ValueChanged<T>? onSelected;

  const GalaxyContextMenu({
    Key? key,
    required this.child,
    required this.items,
    this.onSelected,
  }) : super(key: key);

  void _showContextMenu(BuildContext context, TapDownDetails details) {
    final RenderBox overlay = Overlay.of(context).context.findRenderObject() as RenderBox;

    showMenu(
      context: context,
      position: RelativeRect.fromRect(
        details.globalPosition & const Size(1, 1),
        Offset.zero & overlay.size,
      ),
      items: items.map((item) {
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
      }).toList(),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
    ).then((value) {
      if (value != null) {
        onSelected?.call(value);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onLongPressStart: (details) => _showContextMenu(context, details),
      onSecondaryTapDown: (details) => _showContextMenu(context, details), // For desktop/web
      child: child,
    );
  }
}

class GalaxyContextMenuItem<T> {
  final T value;
  final Widget child;
  final Widget? leading;
  final Widget? trailing;
  final bool disabled;

  const GalaxyContextMenuItem({
    required this.value,
    required this.child,
    this.leading,
    this.trailing,
    this.disabled = false,
  });
}
