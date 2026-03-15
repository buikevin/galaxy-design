import 'dart:math' as math;

import 'package:flutter/material.dart';

enum SpinnerSize {
  sm,
  defaultSize,
  lg,
}

class GalaxySpinner extends StatefulWidget {
  const GalaxySpinner({
    super.key,
    this.size = SpinnerSize.defaultSize,
    this.label = 'Loading...',
    this.color,
  });

  final SpinnerSize size;
  final String label;
  final Color? color;

  @override
  State<GalaxySpinner> createState() => _GalaxySpinnerState();
}

class _GalaxySpinnerState extends State<GalaxySpinner>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 900),
    )..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final spinnerColor = widget.color ?? theme.colorScheme.onSurfaceVariant;
    final dimension = switch (widget.size) {
      SpinnerSize.sm => 16.0,
      SpinnerSize.defaultSize => 24.0,
      SpinnerSize.lg => 32.0,
    };
    final strokeWidth = switch (widget.size) {
      SpinnerSize.lg => 3.0,
      _ => 2.0,
    };

    return Semantics(
      label: widget.label,
      child: AnimatedBuilder(
        animation: _controller,
        builder: (context, child) {
          return Transform.rotate(
            angle: _controller.value * 2 * math.pi,
            child: SizedBox(
              width: dimension,
              height: dimension,
              child: CustomPaint(
                painter: _SpinnerPainter(
                  color: spinnerColor,
                  strokeWidth: strokeWidth,
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _SpinnerPainter extends CustomPainter {
  const _SpinnerPainter({
    required this.color,
    required this.strokeWidth,
  });

  final Color color;
  final double strokeWidth;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..strokeWidth = strokeWidth
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;

    final radius = (size.shortestSide - strokeWidth) / 2;
    final center = Offset(size.width / 2, size.height / 2);
    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius),
      -math.pi / 2,
      math.pi * 1.6,
      false,
      paint,
    );
  }

  @override
  bool shouldRepaint(covariant _SpinnerPainter oldDelegate) {
    return oldDelegate.color != color || oldDelegate.strokeWidth != strokeWidth;
  }
}
