// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc HoverCard component - Card hiển thị khi hover (desktop) hoặc tap (mobile)

import 'package:flutter/material.dart';

/// GalaxyHoverCard - Component card hiển thị khi hover (desktop) hoặc tap (mobile)
/// 
/// ## Props:
/// - [trigger] - Widget kích hoạt hover card
/// - [content] - Nội dung hiển thị trong hover card
/// - [width] - Chiều rộng của hover card (default: 256)
/// - [padding] - Padding của hover card content (default: EdgeInsets.all(16))
/// - [openDelay] - Độ trễ khi mở card (default: Duration(milliseconds: 200))
class GalaxyHoverCard extends StatefulWidget {
  const GalaxyHoverCard({
    Key? key,
    required this.trigger,
    required this.content,
    this.width,
    this.padding = const EdgeInsets.all(16),
    this.openDelay = const Duration(milliseconds: 200),
  }) : super(key: key);

  /// Widget kích hoạt hover card
  final Widget trigger;

  /// Nội dung hiển thị trong hover card
  final Widget content;

  /// Chiều rộng của hover card
  final double? width;

  /// Padding của hover card content
  final EdgeInsets padding;

  /// Độ trễ khi mở card
  final Duration? openDelay;

  @override
  State<GalaxyHoverCard> createState() => _GalaxyHoverCardState();
}

class _GalaxyHoverCardState extends State<GalaxyHoverCard> {
  bool _isOpen = false;

  void _show() {
    setState(() => _isOpen = true);
  }

  void _hide() {
    setState(() => _isOpen = false);
  }

  void _toggle(BuildContext context) {
    if (_isOpen) {
      _hide();
    } else {
      _show();
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return MouseRegion(
      onEnter: (_) => _show(),
      onExit: (_) => _hide(),
      child: GestureDetector(
        onTap: () => _toggle(context),
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            widget.trigger,
            if (_isOpen)
              Positioned(
                top: 0,
                left: 0,
                child: Material(
                  elevation: 8,
                  borderRadius: BorderRadius.circular(8),
                  child: Container(
                    width: widget.width ?? 256,
                    padding: widget.padding,
                    decoration: BoxDecoration(
                      color: theme.colorScheme.surface,
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(
                        color: theme.colorScheme.outline,
                      ),
                    ),
                    child: widget.content,
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
