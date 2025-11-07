import 'package:flutter/material.dart';

class GalaxyCheckbox extends StatelessWidget {
  const GalaxyCheckbox({
    Key? key,
    required this.value,
    required this.onChanged,
    this.label,
    this.disabled = false,
  }) : super(key: key);

  final bool value;
  final ValueChanged<bool?>? onChanged;
  final String? label;
  final bool disabled;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    if (label != null) {
      return InkWell(
        onTap: disabled ? null : () => onChanged?.call(!value),
        borderRadius: BorderRadius.circular(4),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 8),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              _buildCheckbox(theme),
              const SizedBox(width: 8),
              Text(
                label!,
                style: theme.textTheme.bodyMedium?.copyWith(
                  color: disabled
                      ? theme.colorScheme.onSurface.withOpacity(0.38)
                      : theme.colorScheme.onSurface,
                ),
              ),
            ],
          ),
        ),
      );
    }

    return _buildCheckbox(theme);
  }

  Widget _buildCheckbox(ThemeData theme) {
    return SizedBox(
      width: 20,
      height: 20,
      child: Checkbox(
        value: value,
        onChanged: disabled ? null : onChanged,
        activeColor: theme.colorScheme.primary,
        checkColor: theme.colorScheme.onPrimary,
        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        visualDensity: VisualDensity.compact,
      ),
    );
  }
}
