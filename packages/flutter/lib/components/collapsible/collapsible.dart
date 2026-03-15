// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Collapsible component - Component có thể mở rộng/thu gọn với trigger

import 'package:flutter/material.dart';

/// GalaxyCollapsible - Component có thể mở rộng/thu gọn với trigger
/// 
/// ## Props:
/// - [trigger] - Widget kích hoạt collapsible
/// - [content] - Nội dung hiển thị khi mở rộng
/// - [initiallyExpanded] - Trạng thái mở rộng ban đầu (default: false)
/// - [onExpansionChanged] - Callback khi trạng thái mở rộng thay đổi
class GalaxyCollapsible extends StatefulWidget {
  const GalaxyCollapsible({
    Key? key,
    required this.trigger,
    required this.content,
    this.initiallyExpanded = false,
    this.onExpansionChanged,
  }) : super(key: key);

  /// Widget kích hoạt collapsible
  final Widget trigger;

  /// Nội dung hiển thị khi mở rộng
  final Widget content;

  /// Trạng thái mở rộng ban đầu
  final bool initiallyExpanded;

  /// Callback khi trạng thái mở rộng thay đổi
  final ValueChanged<bool>? onExpansionChanged;

  @override
  State<GalaxyCollapsible> createState() => _GalaxyCollapsibleState();
}

class _GalaxyCollapsibleState extends State<GalaxyCollapsible>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;
  bool _isExpanded = false;

  @override
  void initState() {
    super.initState();
    _isExpanded = widget.initiallyExpanded;
    _controller = AnimationController(
      duration: const Duration(milliseconds: 200),
      vsync: this,
    );
    _animation = CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    );
    if (_isExpanded) {
      _controller.value = 1.0;
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _toggleExpansion() {
    setState(() {
      _isExpanded = !_isExpanded;
      if (_isExpanded) {
        _controller.forward();
      } else {
        _controller.reverse();
      }
      widget.onExpansionChanged?.call(_isExpanded);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        GestureDetector(
          onTap: _toggleExpansion,
          child: widget.trigger,
        ),
        SizeTransition(
          sizeFactor: _animation,
          child: widget.content,
        ),
      ],
    );
  }
}
