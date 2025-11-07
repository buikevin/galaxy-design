import 'package:flutter/material.dart';

enum AlertDialogVariant {
  default_,
  destructive,
}

class GalaxyAlertDialog extends StatelessWidget {
  final String? title;
  final String? description;
  final String? cancelText;
  final String? confirmText;
  final VoidCallback? onCancel;
  final VoidCallback? onConfirm;
  final AlertDialogVariant variant;

  const GalaxyAlertDialog({
    Key? key,
    this.title,
    this.description,
    this.cancelText,
    this.confirmText,
    this.onCancel,
    this.onConfirm,
    this.variant = AlertDialogVariant.default_,
  }) : super(key: key);

  Color _getConfirmButtonColor(BuildContext context) {
    switch (variant) {
      case AlertDialogVariant.destructive:
        return Theme.of(context).colorScheme.error;
      case AlertDialogVariant.default_:
      default:
        return Theme.of(context).colorScheme.primary;
    }
  }

  Color _getConfirmButtonTextColor(BuildContext context) {
    switch (variant) {
      case AlertDialogVariant.destructive:
        return Theme.of(context).colorScheme.onError;
      case AlertDialogVariant.default_:
      default:
        return Theme.of(context).colorScheme.onPrimary;
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
      title: title != null ? Text(title!) : null,
      content: description != null
          ? Text(
              description!,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Theme.of(context).textTheme.bodySmall?.color,
                  ),
            )
          : null,
      actions: [
        if (cancelText != null && onCancel != null)
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              onCancel?.call();
            },
            style: TextButton.styleFrom(
              foregroundColor: Theme.of(context).textTheme.bodyMedium?.color,
            ),
            child: Text(cancelText!),
          ),
        if (confirmText != null && onConfirm != null)
          ElevatedButton(
            onPressed: () {
              Navigator.of(context).pop();
              onConfirm?.call();
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: _getConfirmButtonColor(context),
              foregroundColor: _getConfirmButtonTextColor(context),
            ),
            child: Text(confirmText!),
          ),
      ],
    );
  }

  static Future<bool?> show({
    required BuildContext context,
    String? title,
    String? description,
    String cancelText = 'Cancel',
    String confirmText = 'Continue',
    VoidCallback? onCancel,
    VoidCallback? onConfirm,
    AlertDialogVariant variant = AlertDialogVariant.default_,
    bool barrierDismissible = true,
  }) {
    return showDialog<bool>(
      context: context,
      barrierDismissible: barrierDismissible,
      builder: (context) => GalaxyAlertDialog(
        title: title,
        description: description,
        cancelText: cancelText,
        confirmText: confirmText,
        onCancel: onCancel,
        onConfirm: onConfirm,
        variant: variant,
      ),
    );
  }
}
