// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc DateTimePicker - date + time picker composition

import 'package:flutter/material.dart';

class GalaxyDateTimePicker {
  final DateTime? value;
  final ValueChanged<DateTime?> onChanged;

  const GalaxyDateTimePicker({super.key, this.value, required this.onChanged});

  Future<void> show(BuildContext context) async {
    final date = await showDatePicker(
      context: context,
      initialDate: value ?? DateTime.now(),
      firstDate: DateTime(2020),
      lastDate: DateTime(2030),
    );
    if (date == null) return;

    final time = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.fromDateTime(value ?? DateTime.now()),
    );

    if (time == null) {
      onChanged(DateTime(date.year, date.month, date.day));
      return;
    }
    onChanged(DateTime(date.year, date.month, date.day, time.hour, time.minute));
  }
}
