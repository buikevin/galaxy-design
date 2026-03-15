// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Skeleton component - Placeholder loading với shimmer effect

import 'package:flutter/material.dart';

/// GalaxySkeleton - Component placeholder loading với shimmer effect
/// 
/// ## Props:
/// - [width] - Chiều rộng của skeleton
/// - [height] - Chiều cao của skeleton (default: 16)
/// - [borderRadius] - Bo góc của skeleton (default: 4)
/// - [baseColor] - Màu cơ bản
/// - [highlightColor] - Màu highlight cho shimmer effect
class GalaxySkeleton extends StatefulWidget {
  const GalaxySkeleton({
    Key? key,
    this.width,
    this.height = 16,
    this.borderRadius = 4,
    this.baseColor,
    this.highlightColor,
  }) : super(key: key);

  /// Chiều rộng của skeleton
  final double? width;

  /// Chiều cao của skeleton
  final double? height;

  /// Bo góc của skeleton
  final double borderRadius;

  /// Màu cơ bản
  final Color? baseColor;

  /// Màu highlight cho shimmer effect
  final Color? highlightColor;

  @override
  State<GalaxySkeleton> createState() => _GalaxySkeletonState();
}

class _GalaxySkeletonState extends State<GalaxySkeleton>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    )..repeat();

    _animation = Tween<double>(begin: -1.0, end: 2.0).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final baseColor = widget.baseColor ??
        theme.colorScheme.surfaceVariant.withOpacity(0.3);
    final highlightColor = widget.highlightColor ??
        theme.colorScheme.surface.withOpacity(0.8);

    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Container(
          width: widget.width,
          height: widget.height,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(widget.borderRadius),
            gradient: LinearGradient(
              begin: Alignment.centerLeft,
              end: Alignment.centerRight,
              colors: [
                baseColor,
                highlightColor,
                baseColor,
              ],
              stops: [
                _animation.value - 1,
                _animation.value,
                _animation.value + 1,
              ],
            ),
          ),
        );
      },
    );
  }
}
