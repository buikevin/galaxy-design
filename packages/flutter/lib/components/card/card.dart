// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Card component - Card container với header, title, description, content, footer

import 'package:flutter/material.dart';

/// GalaxyCard - Card container với header, title, description, content, footer
/// 
/// ## Props:
/// - [child] - Widget con hiển thị bên trong card
/// - [padding] - Padding tùy chỉnh (default: null)
/// - [elevation] - Độ cao shadow của card (default: 1)
class GalaxyCard extends StatelessWidget {
  const GalaxyCard({
    Key? key,
    required this.child,
    this.padding,
    this.elevation = 1,
  }) : super(key: key);

  /// Widget con hiển thị bên trong card
  final Widget child;

  /// Padding tùy chỉnh
  final EdgeInsetsGeometry? padding;

  /// Độ cao shadow của card
  final double elevation;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Card(
      elevation: elevation,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
        side: BorderSide(
          color: theme.colorScheme.outline.withOpacity(0.2),
          width: 1,
        ),
      ),
      child: padding != null
          ? Padding(padding: padding!, child: child)
          : child,
    );
  }
}

/// GalaxyCardHeader - Header section của card
/// 
/// ## Props:
/// - [child] - Widget con hiển thị trong header
/// - [padding] - Padding của header (default: EdgeInsets.all(24))
class GalaxyCardHeader extends StatelessWidget {
  const GalaxyCardHeader({
    Key? key,
    required this.child,
    this.padding = const EdgeInsets.all(24),
  }) : super(key: key);

  /// Widget con hiển thị trong header
  final Widget child;

  /// Padding của header
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: child,
    );
  }
}

/// GalaxyCardTitle - Title section của card
/// 
/// ## Props:
/// - [title] - Tiêu đề của card
/// - [style] - TextStyle tùy chỉnh
class GalaxyCardTitle extends StatelessWidget {
  const GalaxyCardTitle({
    Key? key,
    required this.title,
    this.style,
  }) : super(key: key);

  /// Tiêu đề của card
  final String title;

  /// TextStyle tùy chỉnh
  final TextStyle? style;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Text(
      title,
      style: style ??
          theme.textTheme.titleLarge?.copyWith(
            fontWeight: FontWeight.w600,
            letterSpacing: -0.5,
          ),
    );
  }
}

/// GalaxyCardDescription - Description section của card
/// 
/// ## Props:
/// - [description] - Mô tả của card
/// - [style] - TextStyle tùy chỉnh
class GalaxyCardDescription extends StatelessWidget {
  const GalaxyCardDescription({
    Key? key,
    required this.description,
    this.style,
  }) : super(key: key);

  /// Mô tả của card
  final String description;

  /// TextStyle tùy chỉnh
  final TextStyle? style;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Text(
      description,
      style: style ??
          theme.textTheme.bodySmall?.copyWith(
            color: theme.colorScheme.onSurface.withOpacity(0.7),
          ),
    );
  }
}

/// GalaxyCardContent - Content section của card
/// 
/// ## Props:
/// - [child] - Widget con hiển thị trong content
/// - [padding] - Padding của content (default: EdgeInsets.fromLTRB(24, 0, 24, 24))
class GalaxyCardContent extends StatelessWidget {
  const GalaxyCardContent({
    Key? key,
    required this.child,
    this.padding = const EdgeInsets.fromLTRB(24, 0, 24, 24),
  }) : super(key: key);

  /// Widget con hiển thị trong content
  final Widget child;

  /// Padding của content
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: child,
    );
  }
}

/// GalaxyCardFooter - Footer section của card
/// 
/// ## Props:
/// - [child] - Widget con hiển thị trong footer
/// - [padding] - Padding của footer (default: EdgeInsets.fromLTRB(24, 0, 24, 24))
class GalaxyCardFooter extends StatelessWidget {
  const GalaxyCardFooter({
    Key? key,
    required this.child,
    this.padding = const EdgeInsets.fromLTRB(24, 0, 24, 24),
  }) : super(key: key);

  /// Widget con hiển thị trong footer
  final Widget child;

  /// Padding của footer
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: child,
    );
  }
}
