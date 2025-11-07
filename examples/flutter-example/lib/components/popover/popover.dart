import 'package:flutter/material.dart';

class GalaxyPopover extends StatelessWidget {
  final Widget trigger;
  final Widget content;
  final double? width;
  final EdgeInsets padding;

  const GalaxyPopover({
    Key? key,
    required this.trigger,
    required this.content,
    this.width,
    this.padding = const EdgeInsets.all(16),
  }) : super(key: key);

  void _showPopover(BuildContext context) {
    final RenderBox renderBox = context.findRenderObject() as RenderBox;
    final position = renderBox.localToGlobal(Offset.zero);
    final size = renderBox.size;

    showMenu(
      context: context,
      position: RelativeRect.fromLTRB(
        position.dx,
        position.dy + size.height,
        position.dx + size.width,
        position.dy,
      ),
      items: [
        PopupMenuItem(
          enabled: false,
          child: Container(
            width: width ?? 288,
            padding: padding,
            child: content,
          ),
        ),
      ],
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
      elevation: 8,
    );
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _showPopover(context),
      child: trigger,
    );
  }
}
