import 'package:flutter/material.dart';

class GalaxyTooltip extends StatelessWidget {
  final Widget child;
  final String message;
  final EdgeInsetsGeometry? padding;
  final EdgeInsetsGeometry? margin;
  final double? height;
  final bool? preferBelow;
  final Duration? waitDuration;
  final Duration? showDuration;

  const GalaxyTooltip({
    Key? key,
    required this.child,
    required this.message,
    this.padding,
    this.margin,
    this.height,
    this.preferBelow,
    this.waitDuration,
    this.showDuration,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: message,
      padding: padding ?? const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      margin: margin,
      height: height,
      preferBelow: preferBelow,
      waitDuration: waitDuration ?? const Duration(milliseconds: 500),
      showDuration: showDuration ?? const Duration(milliseconds: 1500),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.inverseSurface,
        borderRadius: BorderRadius.circular(6),
        border: Border.all(
          color: Theme.of(context).colorScheme.outline.withOpacity(0.2),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      textStyle: TextStyle(
        color: Theme.of(context).colorScheme.onInverseSurface,
        fontSize: 13,
      ),
      child: child,
    );
  }
}
