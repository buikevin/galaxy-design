// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Avatar component - Hiển thị avatar với image hoặc fallback text

import 'package:flutter/material.dart';

/// Avatar size options
enum AvatarSize {
  sm,
  md,
  lg,
  xl,
}

/// GalaxyAvatar - Component hiển thị avatar với image hoặc fallback text
/// 
/// ## Props:
/// - [imageUrl] - URL của ảnh avatar
/// - [fallbackText] - Văn bản hiển thị khi không có ảnh
/// - [size] - Kích thước avatar (default: AvatarSize.md)
/// - [backgroundColor] - Màu nền tùy chỉnh
/// - [foregroundColor] - Màu chữ tùy chỉnh
class GalaxyAvatar extends StatelessWidget {
  const GalaxyAvatar({
    Key? key,
    this.imageUrl,
    this.fallbackText,
    this.size = AvatarSize.md,
    this.backgroundColor,
    this.foregroundColor,
  }) : super(key: key);

  /// URL của ảnh avatar
  final String? imageUrl;

  /// Văn bản hiển thị khi không có ảnh
  final String? fallbackText;

  /// Kích thước của avatar
  final AvatarSize size;

  /// Màu nền tùy chỉnh
  final Color? backgroundColor;

  /// Màu chữ tùy chỉnh
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
