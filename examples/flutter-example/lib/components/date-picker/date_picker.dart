import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

/// Mode for date picker
enum DatePickerMode {
  single,
  range,
}

/// A date picker component that allows users to select a single date or date range
class GalaxyDatePicker extends StatefulWidget {
  final DateTime? selected;
  final DateTime? minDate;
  final DateTime? maxDate;
  final ValueChanged<DateTime?>? onChanged;
  final String? format;
  final String? placeholder;
  final Widget? header;
  final DatePickerMode mode;

  /// Creates a single date picker
  const GalaxyDatePicker({
    Key? key,
    this.selected,
    this.minDate,
    this.maxDate,
    this.onChanged,
    this.format,
    this.placeholder,
    this.header,
  })  : mode = DatePickerMode.single,
        super(key: key);

  /// Creates a date range picker (not yet implemented in this version)
  const GalaxyDatePicker.range({
    Key? key,
    this.selected,
    this.minDate,
    this.maxDate,
    this.onChanged,
    this.format,
    this.placeholder,
    this.header,
  })  : mode = DatePickerMode.range,
        super(key: key);

  @override
  State<GalaxyDatePicker> createState() => _GalaxyDatePickerState();
}

class _GalaxyDatePickerState extends State<GalaxyDatePicker> {
  DateTime? _selectedDate;

  @override
  void initState() {
    super.initState();
    _selectedDate = widget.selected;
  }

  String get _displayText {
    if (_selectedDate == null) {
      return widget.placeholder ?? 'Pick a date';
    }

    final format = widget.format ?? 'MMM dd, yyyy';
    return DateFormat(format).format(_selectedDate!);
  }

  Future<void> _showDatePicker() async {
    final theme = Theme.of(context);

    final pickedDate = await showDatePicker(
      context: context,
      initialDate: _selectedDate ?? DateTime.now(),
      firstDate: widget.minDate ?? DateTime(1900),
      lastDate: widget.maxDate ?? DateTime(2100),
      builder: (context, child) {
        return Theme(
          data: theme.copyWith(
            colorScheme: theme.colorScheme.copyWith(
              primary: theme.colorScheme.primary,
              onPrimary: theme.colorScheme.onPrimary,
              surface: theme.colorScheme.surface,
              onSurface: theme.colorScheme.onSurface,
            ),
            dialogBackgroundColor: theme.colorScheme.surface,
          ),
          child: child!,
        );
      },
    );

    if (pickedDate != null) {
      setState(() {
        _selectedDate = pickedDate;
      });
      widget.onChanged?.call(pickedDate);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (widget.header != null) ...[
          widget.header!,
          const SizedBox(height: 8),
        ],
        InkWell(
          onTap: _showDatePicker,
          borderRadius: BorderRadius.circular(8),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            decoration: BoxDecoration(
              border: Border.all(
                color: theme.colorScheme.outline,
                width: 1,
              ),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Row(
              children: [
                Icon(
                  Icons.calendar_today,
                  size: 18,
                  color: theme.colorScheme.onSurface.withOpacity(0.7),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    _displayText,
                    style: theme.textTheme.bodyMedium?.copyWith(
                      color: _selectedDate == null
                          ? theme.colorScheme.onSurface.withOpacity(0.5)
                          : theme.colorScheme.onSurface,
                    ),
                  ),
                ),
                if (_selectedDate != null)
                  InkWell(
                    onTap: () {
                      setState(() {
                        _selectedDate = null;
                      });
                      widget.onChanged?.call(null);
                    },
                    child: Icon(
                      Icons.close,
                      size: 18,
                      color: theme.colorScheme.onSurface.withOpacity(0.5),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

/// A date range picker component
class GalaxyDateRangePicker extends StatefulWidget {
  final DateTimeRange? selected;
  final DateTime? minDate;
  final DateTime? maxDate;
  final ValueChanged<DateTimeRange?>? onChanged;
  final String? format;
  final String? placeholder;
  final Widget? header;

  const GalaxyDateRangePicker({
    Key? key,
    this.selected,
    this.minDate,
    this.maxDate,
    this.onChanged,
    this.format,
    this.placeholder,
    this.header,
  }) : super(key: key);

  @override
  State<GalaxyDateRangePicker> createState() => _GalaxyDateRangePickerState();
}

class _GalaxyDateRangePickerState extends State<GalaxyDateRangePicker> {
  DateTimeRange? _selectedRange;

  @override
  void initState() {
    super.initState();
    _selectedRange = widget.selected;
  }

  String get _displayText {
    if (_selectedRange == null) {
      return widget.placeholder ?? 'Pick a date range';
    }

    final format = widget.format ?? 'MMM dd, yyyy';
    final startText = DateFormat(format).format(_selectedRange!.start);
    final endText = DateFormat(format).format(_selectedRange!.end);
    return '$startText - $endText';
  }

  Future<void> _showDateRangePicker() async {
    final theme = Theme.of(context);

    final pickedRange = await showDateRangePicker(
      context: context,
      firstDate: widget.minDate ?? DateTime(1900),
      lastDate: widget.maxDate ?? DateTime(2100),
      initialDateRange: _selectedRange,
      builder: (context, child) {
        return Theme(
          data: theme.copyWith(
            colorScheme: theme.colorScheme.copyWith(
              primary: theme.colorScheme.primary,
              onPrimary: theme.colorScheme.onPrimary,
              surface: theme.colorScheme.surface,
              onSurface: theme.colorScheme.onSurface,
            ),
            dialogBackgroundColor: theme.colorScheme.surface,
          ),
          child: child!,
        );
      },
    );

    if (pickedRange != null) {
      setState(() {
        _selectedRange = pickedRange;
      });
      widget.onChanged?.call(pickedRange);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (widget.header != null) ...[
          widget.header!,
          const SizedBox(height: 8),
        ],
        InkWell(
          onTap: _showDateRangePicker,
          borderRadius: BorderRadius.circular(8),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            decoration: BoxDecoration(
              border: Border.all(
                color: theme.colorScheme.outline,
                width: 1,
              ),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Row(
              children: [
                Icon(
                  Icons.date_range,
                  size: 18,
                  color: theme.colorScheme.onSurface.withOpacity(0.7),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    _displayText,
                    style: theme.textTheme.bodyMedium?.copyWith(
                      color: _selectedRange == null
                          ? theme.colorScheme.onSurface.withOpacity(0.5)
                          : theme.colorScheme.onSurface,
                    ),
                  ),
                ),
                if (_selectedRange != null)
                  InkWell(
                    onTap: () {
                      setState(() {
                        _selectedRange = null;
                      });
                      widget.onChanged?.call(null);
                    },
                    child: Icon(
                      Icons.close,
                      size: 18,
                      color: theme.colorScheme.onSurface.withOpacity(0.5),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

/// Form field wrapper for date picker
class GalaxyDatePickerFormField extends FormField<DateTime> {
  GalaxyDatePickerFormField({
    Key? key,
    DateTime? initialValue,
    FormFieldSetter<DateTime>? onSaved,
    FormFieldValidator<DateTime>? validator,
    bool enabled = true,
    AutovalidateMode? autovalidateMode,
    String? format,
    String? placeholder,
    Widget? header,
    DateTime? minDate,
    DateTime? maxDate,
  }) : super(
          key: key,
          initialValue: initialValue,
          onSaved: onSaved,
          validator: validator,
          enabled: enabled,
          autovalidateMode: autovalidateMode,
          builder: (FormFieldState<DateTime> state) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                GalaxyDatePicker(
                  selected: state.value,
                  onChanged: (value) {
                    state.didChange(value);
                  },
                  format: format,
                  placeholder: placeholder,
                  header: header,
                  minDate: minDate,
                  maxDate: maxDate,
                ),
                if (state.hasError) ...[
                  const SizedBox(height: 4),
                  Text(
                    state.errorText!,
                    style: TextStyle(
                      color: Theme.of(state.context).colorScheme.error,
                      fontSize: 12,
                    ),
                  ),
                ],
              ],
            );
          },
        );
}

/// Form field wrapper for date range picker
class GalaxyDateRangePickerFormField extends FormField<DateTimeRange> {
  GalaxyDateRangePickerFormField({
    Key? key,
    DateTimeRange? initialValue,
    FormFieldSetter<DateTimeRange>? onSaved,
    FormFieldValidator<DateTimeRange>? validator,
    bool enabled = true,
    AutovalidateMode? autovalidateMode,
    String? format,
    String? placeholder,
    Widget? header,
    DateTime? minDate,
    DateTime? maxDate,
  }) : super(
          key: key,
          initialValue: initialValue,
          onSaved: onSaved,
          validator: validator,
          enabled: enabled,
          autovalidateMode: autovalidateMode,
          builder: (FormFieldState<DateTimeRange> state) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                GalaxyDateRangePicker(
                  selected: state.value,
                  onChanged: (value) {
                    state.didChange(value);
                  },
                  format: format,
                  placeholder: placeholder,
                  header: header,
                  minDate: minDate,
                  maxDate: maxDate,
                ),
                if (state.hasError) ...[
                  const SizedBox(height: 4),
                  Text(
                    state.errorText!,
                    style: TextStyle(
                      color: Theme.of(state.context).colorScheme.error,
                      fontSize: 12,
                    ),
                  ),
                ],
              ],
            );
          },
        );
}
