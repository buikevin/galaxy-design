// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Checkbox component - Hộp kiểm với label tùy chọn

import 'package:flutter/material.dart';

/// GalaxyCheckbox - Hộp kiểm với label tùy chọn
/// 
/// ## Props:
/// - [value] - Trạng thái được chọn của checkbox
/// - [onChanged] - Callback khi trạng thái thay đổi
/// - [label] - Nhãn hiển thị bên cạnh checkbox
/// - [disabled] - Trạng thái disabled của checkbox (default: false)
class GalaxyCheckbox extends StatelessWidget {
  const GalaxyCheckbox({
    Key? key,
    required this.value,
    required this.onChanged,
    this.label,
    this.disabled = false,
  }) : super(key: key);

  /// Trạng thái được chọn của checkbox
  final bool value;

  /// Callback khi trạng thái thay đổi
  final ValueChanged<bool?>? onChanged;

  /// Nhãn hiển thị bên cạnh checkbox
  final String? label;

  /// Trạng thái disabled của checkbox
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
