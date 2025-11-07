import 'package:flutter/material.dart';

// Note: Hover is not available on mobile devices
// This implementation uses tap as alternative for mobile
// and MouseRegion for web/desktop
class GalaxyHoverCard extends StatefulWidget {
  final Widget trigger;
  final Widget content;
  final double? width;
  final EdgeInsets padding;
  final Duration? openDelay;

  const GalaxyHoverCard({
    Key? key,
    required this.trigger,
    required this.content,
    this.width,
    this.padding = const EdgeInsets.all(16),
    this.openDelay = const Duration(milliseconds: 200),
  }) : super(key: key);

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
