// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Empty component - Empty state hiển thị khi không có dữ liệu

import 'package:flutter/material.dart';

/// GalaxyEmpty - Component empty state hiển thị khi không có dữ liệu
/// 
/// ## Props:
/// - [icon] - Icon hiển thị
/// - [title] - Tiêu đề của empty state
/// - [description] - Mô tả của empty state
/// - [action] - Action button tùy chỉnh
/// - [padding] - Padding của empty state (default: EdgeInsets.all(32))
/// - [iconSize] - Kích thước icon (default: 64)
/// - [spacing] - Khoảng cách giữa các phần (default: 16)
class GalaxyEmpty extends StatelessWidget {
  const GalaxyEmpty({
    Key? key,
    this.icon,
    this.title,
    this.description,
    this.action,
    this.padding = const EdgeInsets.all(32),
    this.iconSize = 64,
    this.spacing = 16,
  }) : super(key: key);

  /// Icon hiển thị
  final Widget? icon;

  /// Tiêu đề của empty state
  final String? title;

  /// Mô tả của empty state
  final String? description;

  /// Action button tùy chỉnh
  final Widget? action;

  /// Padding của empty state
  final EdgeInsets padding;

  /// Kích thước icon
  final double iconSize;

  /// Khoảng cách giữa các phần
  final double spacing;

  /// Creates an empty state with default "no data" icon
  factory GalaxyEmpty.noData({
    Key? key,
    String? title = 'No data',
    String? description = 'There is no data to display',
    Widget? action,
  }) {
    return GalaxyEmpty(
      key: key,
      icon: const Icon(Icons.inbox_outlined),
      title: title,
      description: description,
      action: action,
    );
  }

  /// Creates an empty state for no search results
  factory GalaxyEmpty.noResults({
    Key? key,
    String? title = 'No results found',
    String? description = 'Try adjusting your search or filters',
    Widget? action,
  }) {
    return GalaxyEmpty(
      key: key,
      icon: const Icon(Icons.search_off_outlined),
      title: title,
      description: description,
      action: action,
    );
  }

  /// Creates an empty state for errors
  factory GalaxyEmpty.error({
    Key? key,
    String? title = 'Something went wrong',
    String? description = 'An error occurred while loading data',
    Widget? action,
  }) {
    return GalaxyEmpty(
      key: key,
      icon: const Icon(Icons.error_outline),
      title: title,
      description: description,
      action: action,
    );
  }

  /// Creates an empty state for no connection
  factory GalaxyEmpty.offline({
    Key? key,
    String? title = 'No connection',
    String? description = 'Please check your internet connection',
    Widget? action,
  }) {
    return GalaxyEmpty(
      key: key,
      icon: const Icon(Icons.wifi_off_outlined),
      title: title,
      description: description,
      action: action,
    );
  }

  /// Creates an empty state for empty list
  factory GalaxyEmpty.emptyList({
    Key? key,
    String? title = 'Nothing here yet',
    String? description = 'Items you add will appear here',
    Widget? action,
  }) {
    return GalaxyEmpty(
      key: key,
      icon: const Icon(Icons.list_alt_outlined),
      title: title,
      description: description,
      action: action,
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Center(
      child: Padding(
        padding: padding,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: [
            // Icon
            if (icon != null) ...[
              IconTheme(
                data: IconThemeData(
                  size: iconSize,
                  color: theme.colorScheme.onSurface.withOpacity(0.4),
                ),
                child: icon!,
              ),
              SizedBox(height: spacing),
            ],

            // Title
            if (title != null) ...[
              Text(
                title!,
                style: theme.textTheme.titleLarge?.copyWith(
                  fontWeight: FontWeight.w600,
                  color: theme.colorScheme.onSurface,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: spacing / 2),
            ],

            // Description
            if (description != null) ...[
              Text(
                description!,
                style: theme.textTheme.bodyMedium?.copyWith(
                  color: theme.colorScheme.onSurface.withOpacity(0.6),
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: spacing),
            ],

            // Action button
            if (action != null) action!,
          ],
        ),
      ),
    );
  }
}
