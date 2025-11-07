import 'package:flutter/material.dart';
import '../toggle/toggle.dart';

class GalaxyToggleGroup<T> extends StatelessWidget {
  final T? value;
  final ValueChanged<T?>? onValueChanged;
  final List<GalaxyToggleGroupItem<T>> items;
  final ToggleVariant variant;
  final ToggleSize size;
  final bool allowDeselect;

  const GalaxyToggleGroup({
    Key? key,
    required this.value,
    required this.onValueChanged,
    required this.items,
    this.variant = ToggleVariant.default_,
    this.size = ToggleSize.default_,
    this.allowDeselect = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: items.map((item) {
        final isSelected = value == item.value;
        return Padding(
          padding: const EdgeInsets.only(right: 4),
          child: GalaxyToggle(
            value: isSelected,
            onPressed: (newValue) {
              if (newValue) {
                onValueChanged?.call(item.value);
              } else if (allowDeselect) {
                onValueChanged?.call(null);
              }
            },
            variant: variant,
            size: size,
            disabled: item.disabled,
            child: item.child,
          ),
        );
      }).toList(),
    );
  }
}

class GalaxyToggleGroupItem<T> {
  final T value;
  final Widget child;
  final bool disabled;

  const GalaxyToggleGroupItem({
    required this.value,
    required this.child,
    this.disabled = false,
  });
}
