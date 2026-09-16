// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Time Picker component - Wraps Flutter's showTimePicker

import 'package:flutter/material.dart';

class GalaxyTimePicker {
  final String? selected;
  final ValueChanged<String?>? onChanged;

  const GalaxyTimePicker({
    Key? key,
    this.selected,
    this.onChanged,
  });

  static Future<void> show(
    BuildContext context, {
    required ValueChanged<String?> onChanged,
  }) async {
    final TimeOfDay? result = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.now(),
    );

    if (result != null) {
      onChanged('${result.hour.toString().padLeft(2, '0')}:${result.minute.toString().padLeft(2, '0')}');
    }
  }
}
