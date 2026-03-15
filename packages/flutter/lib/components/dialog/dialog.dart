// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Dialog component - Modal dialog với title, content, actions

import 'package:flutter/material.dart';

/// GalaxyDialog - Component modal dialog với title, content, actions
/// 
/// ## Props:
/// - [title] - Tiêu đề của dialog
/// - [content] - Nội dung của dialog
/// - [actions] - Danh sách các action buttons
/// - [contentPadding] - Padding của content
class GalaxyDialog extends StatelessWidget {
  const GalaxyDialog({
    Key? key,
    this.title,
    this.content,
    this.actions,
    this.contentPadding,
  }) : super(key: key);

  /// Tiêu đề của dialog
  final Widget? title;

  /// Nội dung của dialog
  final Widget? content;

  /// Danh sách các action buttons
  final List<Widget>? actions;

  /// Padding của content
  final EdgeInsetsGeometry? contentPadding;

  @override
  Widget build(BuildContext context) {
    return Dialog(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (title != null) ...[
              DefaultTextStyle(
                style: Theme.of(context).textTheme.titleLarge!,
                child: title!,
              ),
              const SizedBox(height: 16),
            ],
            if (content != null) ...[
              Flexible(
                child: SingleChildScrollView(
                  child: DefaultTextStyle(
                    style: Theme.of(context).textTheme.bodyMedium!.copyWith(
                          color: Theme.of(context).textTheme.bodySmall?.color,
                        ),
                    child: Padding(
                      padding: contentPadding ?? EdgeInsets.zero,
                      child: content!,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 24),
            ],
            if (actions != null && actions!.isNotEmpty) ...[
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: actions!.map((action) {
                  return Padding(
                    padding: const EdgeInsets.only(left: 8),
                    child: action,
                  );
                }).toList(),
              ),
            ],
          ],
        ),
      ),
    );
  }

  static Future<T?> show<T>({
    required BuildContext context,
    Widget? title,
    Widget? content,
    List<Widget>? actions,
    bool barrierDismissible = true,
  }) {
    return showDialog<T>(
      context: context,
      barrierDismissible: barrierDismissible,
      builder: (context) => GalaxyDialog(
        title: title,
        content: content,
        actions: actions,
      ),
    );
  }
}
