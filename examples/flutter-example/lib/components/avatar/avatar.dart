import 'package:flutter/material.dart';

enum AvatarSize {
  sm,
  md,
  lg,
  xl,
}

class GalaxyAvatar extends StatelessWidget {
  const GalaxyAvatar({
    Key? key,
    this.imageUrl,
    this.fallbackText,
    this.size = AvatarSize.md,
    this.backgroundColor,
    this.foregroundColor,
  }) : super(key: key);

  final String? imageUrl;
  final String? fallbackText;
  final AvatarSize size;
  final Color? backgroundColor;
  final Color? foregroundColor;

  double get _size {
    switch (size) {
      case AvatarSize.sm:
        return 32;
      case AvatarSize.md:
        return 40;
      case AvatarSize.lg:
        return 48;
      case AvatarSize.xl:
        return 64;
    }
  }

  double get _fontSize {
    switch (size) {
      case AvatarSize.sm:
        return 12;
      case AvatarSize.md:
        return 14;
      case AvatarSize.lg:
        return 16;
      case AvatarSize.xl:
        return 20;
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final bgColor = backgroundColor ?? theme.colorScheme.secondaryContainer;
    final fgColor = foregroundColor ?? theme.colorScheme.onSecondaryContainer;

    return Container(
      width: _size,
      height: _size,
      decoration: BoxDecoration(
        color: bgColor,
        shape: BoxShape.circle,
      ),
      child: ClipOval(
        child: imageUrl != null && imageUrl!.isNotEmpty
            ? Image.network(
                imageUrl!,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) => _buildFallback(fgColor),
              )
            : _buildFallback(fgColor),
      ),
    );
  }

  Widget _buildFallback(Color color) {
    final text = fallbackText?.isNotEmpty == true
        ? fallbackText![0].toUpperCase()
        : '?';

    return Center(
      child: Text(
        text,
        style: TextStyle(
          fontSize: _fontSize,
          fontWeight: FontWeight.w500,
          color: color,
        ),
      ),
    );
  }
}
