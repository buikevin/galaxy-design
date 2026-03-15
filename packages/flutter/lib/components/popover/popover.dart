// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Popover component - Popup hiển thị content khi click trigger

import 'package:flutter/material.dart';

/// GalaxyPopover - Component popup hiển thị content khi click trigger
/// 
/// ## Props:
/// - [trigger] - Widget kích hoạt popover
/// - [content] - Nội dung hiển thị trong popover
/// - [width] - Chiều rộng của popover (default: 288)
/// - [padding] - Padding của popover content (default: EdgeInsets.all(16))
class GalaxyPopover extends StatelessWidget {
  const GalaxyPopover({
    Key? key,
    required this.trigger,
    required this.content,
    this.width,
    this.padding = const EdgeInsets.all(16),
  }) : super(key: key);

  /// Widget kích hoạt popover
  final Widget trigger;

  /// Nội dung hiển thị trong popover
  final Widget content;

  /// Chiều rộng của popover
  final double? width;

  /// Padding của popover content
  final EdgeInsets padding;

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
