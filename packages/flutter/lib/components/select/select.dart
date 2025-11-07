import 'package:flutter/material.dart';

class GalaxySelect<T> extends StatelessWidget {
  const GalaxySelect({
    Key? key,
    required this.value,
    required this.items,
    required this.onChanged,
    this.label,
    this.placeholder = 'Select an option',
    this.enabled = true,
  }) : super(key: key);

  final T? value;
  final List<GalaxySelectItem<T>> items;
  final ValueChanged<T?>? onChanged;
  final String? label;
  final String placeholder;
  final bool enabled;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Text(
              label!,
              style: theme.textTheme.bodySmall?.copyWith(
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        Container(
          height: 40,
          padding: const EdgeInsets.symmetric(horizontal: 12),
          decoration: BoxDecoration(
            border: Border.all(color: theme.colorScheme.outline),
            borderRadius: BorderRadius.circular(6),
          ),
          child: DropdownButtonHideUnderline(
            child: DropdownButton<T>(
              value: value,
              onChanged: enabled ? onChanged : null,
              isExpanded: true,
              hint: Text(
                placeholder,
                style: theme.textTheme.bodyMedium?.copyWith(
                  color: theme.colorScheme.onSurface.withOpacity(0.5),
                ),
              ),
              items: items.map((GalaxySelectItem<T> item) {
                return DropdownMenuItem<T>(
                  value: item.value,
                  child: Text(item.label),
                );
              }).toList(),
            ),
          ),
        ),
      ],
    );
  }
}

class GalaxySelectItem<T> {
  const GalaxySelectItem({
    required this.value,
    required this.label,
  });

  final T value;
  final String label;
}
