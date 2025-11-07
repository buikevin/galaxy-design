import 'package:flutter/material.dart';

/// Side from which the sheet should slide in
enum SheetSide {
  top,
  bottom,
  left,
  right,
}

/// A sheet component that slides in from a specific side
/// Typically used as a bottom sheet on mobile
class GalaxySheet {
  /// Shows a modal sheet that slides from the specified side
  ///
  /// For mobile, [SheetSide.bottom] is the most common pattern
  static Future<T?> show<T>({
    required BuildContext context,
    required Widget Function(BuildContext) builder,
    SheetSide side = SheetSide.bottom,
    bool isDismissible = true,
    bool enableDrag = true,
    Color? backgroundColor,
    double? elevation,
    ShapeBorder? shape,
    BoxConstraints? constraints,
  }) {
    switch (side) {
      case SheetSide.bottom:
        return _showBottomSheet<T>(
          context: context,
          builder: builder,
          isDismissible: isDismissible,
          enableDrag: enableDrag,
          backgroundColor: backgroundColor,
          elevation: elevation,
          shape: shape,
          constraints: constraints,
        );
      case SheetSide.top:
      case SheetSide.left:
      case SheetSide.right:
        return _showSideSheet<T>(
          context: context,
          builder: builder,
          side: side,
          isDismissible: isDismissible,
          backgroundColor: backgroundColor,
          elevation: elevation,
        );
    }
  }

  static Future<T?> _showBottomSheet<T>({
    required BuildContext context,
    required Widget Function(BuildContext) builder,
    bool isDismissible = true,
    bool enableDrag = true,
    Color? backgroundColor,
    double? elevation,
    ShapeBorder? shape,
    BoxConstraints? constraints,
  }) {
    final theme = Theme.of(context);

    return showModalBottomSheet<T>(
      context: context,
      builder: builder,
      isDismissible: isDismissible,
      enableDrag: enableDrag,
      backgroundColor: backgroundColor ?? theme.colorScheme.surface,
      elevation: elevation ?? 8,
      shape: shape ??
          const RoundedRectangleBorder(
            borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
          ),
      constraints: constraints,
      isScrollControlled: true,
    );
  }

  static Future<T?> _showSideSheet<T>({
    required BuildContext context,
    required Widget Function(BuildContext) builder,
    required SheetSide side,
    bool isDismissible = true,
    Color? backgroundColor,
    double? elevation,
  }) {
    final theme = Theme.of(context);

    return showGeneralDialog<T>(
      context: context,
      barrierDismissible: isDismissible,
      barrierLabel: MaterialLocalizations.of(context).modalBarrierDismissLabel,
      barrierColor: Colors.black54,
      transitionDuration: const Duration(milliseconds: 300),
      pageBuilder: (context, animation, secondaryAnimation) {
        return Align(
          alignment: _getAlignment(side),
          child: Material(
            color: backgroundColor ?? theme.colorScheme.surface,
            elevation: elevation ?? 8,
            child: Container(
              width: side == SheetSide.left || side == SheetSide.right
                  ? MediaQuery.of(context).size.width * 0.75
                  : null,
              height: side == SheetSide.top
                  ? MediaQuery.of(context).size.height * 0.5
                  : null,
              child: builder(context),
            ),
          ),
        );
      },
      transitionBuilder: (context, animation, secondaryAnimation, child) {
        final offset = _getOffset(side);
        final slideAnimation = Tween<Offset>(
          begin: offset,
          end: Offset.zero,
        ).animate(CurvedAnimation(
          parent: animation,
          curve: Curves.easeInOut,
        ));

        return SlideTransition(
          position: slideAnimation,
          child: child,
        );
      },
    );
  }

  static AlignmentGeometry _getAlignment(SheetSide side) {
    switch (side) {
      case SheetSide.top:
        return Alignment.topCenter;
      case SheetSide.bottom:
        return Alignment.bottomCenter;
      case SheetSide.left:
        return Alignment.centerLeft;
      case SheetSide.right:
        return Alignment.centerRight;
    }
  }

  static Offset _getOffset(SheetSide side) {
    switch (side) {
      case SheetSide.top:
        return const Offset(0, -1);
      case SheetSide.bottom:
        return const Offset(0, 1);
      case SheetSide.left:
        return const Offset(-1, 0);
      case SheetSide.right:
        return const Offset(1, 0);
    }
  }
}

/// A pre-built sheet content widget with header, body, and footer
class GalaxySheetContent extends StatelessWidget {
  final Widget? header;
  final Widget body;
  final Widget? footer;
  final EdgeInsets padding;
  final bool showCloseButton;
  final VoidCallback? onClose;

  const GalaxySheetContent({
    Key? key,
    this.header,
    required this.body,
    this.footer,
    this.padding = const EdgeInsets.all(16),
    this.showCloseButton = true,
    this.onClose,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: padding,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (header != null || showCloseButton)
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  if (header != null) Expanded(child: header!),
                  if (showCloseButton)
                    IconButton(
                      icon: const Icon(Icons.close),
                      onPressed: onClose ?? () => Navigator.of(context).pop(),
                    ),
                ],
              ),
            Flexible(child: body),
            if (footer != null) ...[
              const SizedBox(height: 16),
              footer!,
            ],
          ],
        ),
      ),
    );
  }
}

/// A sheet header with title and optional description
class GalaxySheetHeader extends StatelessWidget {
  final String title;
  final String? description;

  const GalaxySheetHeader({
    Key? key,
    required this.title,
    this.description,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: theme.textTheme.titleLarge?.copyWith(
            fontWeight: FontWeight.w600,
          ),
        ),
        if (description != null) ...[
          const SizedBox(height: 8),
          Text(
            description!,
            style: theme.textTheme.bodyMedium?.copyWith(
              color: theme.colorScheme.onSurface.withOpacity(0.7),
            ),
          ),
        ],
      ],
    );
  }
}

/// A sheet footer with action buttons
class GalaxySheetFooter extends StatelessWidget {
  final List<Widget> children;
  final MainAxisAlignment mainAxisAlignment;

  const GalaxySheetFooter({
    Key? key,
    required this.children,
    this.mainAxisAlignment = MainAxisAlignment.end,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: mainAxisAlignment,
      children: children
          .map((child) => Padding(
                padding: const EdgeInsets.only(left: 8),
                child: child,
              ))
          .toList(),
    );
  }
}
