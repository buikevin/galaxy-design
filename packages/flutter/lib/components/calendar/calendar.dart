// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Calendar component - Mobile calendar with date selection

import 'package:flutter/material.dart';

class GalaxyCalendar extends StatelessWidget {
  final DateTime? selected;
  final ValueChanged<DateTime?>? onSelect;

  const GalaxyCalendar({
    Key? key,
    this.selected,
    this.onSelect,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Card(
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          children: [
            CalendarDatePicker(
              initialDate: selected ?? DateTime.now(),
              firstDate: DateTime(2020),
              lastDate: DateTime(2030),
              onDateChanged: onSelect,
            ),
          ],
        ),
      ),
    );
  }
}
