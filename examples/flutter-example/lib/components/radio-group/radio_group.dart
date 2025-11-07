import 'package:flutter/material.dart';

class GalaxyRadioGroup<T> extends StatelessWidget {
  final T? value;
  final ValueChanged<T?>? onChanged;
  final List<GalaxyRadioOption<T>> options;
  final Axis direction;

  const GalaxyRadioGroup({
    Key? key,
    required this.value,
    required this.onChanged,
    required this.options,
    this.direction = Axis.vertical,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return direction == Axis.vertical
        ? Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: _buildOptions(),
          )
        : Row(
            children: _buildOptions(),
          );
  }

  List<Widget> _buildOptions() {
    return options.map((option) {
      return GalaxyRadioItem<T>(
        value: option.value,
        groupValue: value,
        onChanged: onChanged,
        label: option.label,
        disabled: option.disabled,
      );
    }).toList();
  }
}

class GalaxyRadioOption<T> {
  final T value;
  final String label;
  final bool disabled;

  const GalaxyRadioOption({
    required this.value,
    required this.label,
    this.disabled = false,
  });
}

class GalaxyRadioItem<T> extends StatelessWidget {
  final T value;
  final T? groupValue;
  final ValueChanged<T?>? onChanged;
  final String label;
  final bool disabled;

  const GalaxyRadioItem({
    Key? key,
    required this.value,
    required this.groupValue,
    required this.onChanged,
    required this.label,
    this.disabled = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: disabled ? null : () => onChanged?.call(value),
      borderRadius: BorderRadius.circular(4),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 8),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Radio<T>(
              value: value,
              groupValue: groupValue,
              onChanged: disabled ? null : onChanged,
            ),
            const SizedBox(width: 8),
            Text(
              label,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: disabled
                        ? Theme.of(context).disabledColor
                        : Theme.of(context).colorScheme.onSurface,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}
