// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Textarea component - Ô nhập liệu đa dòng với label, placeholder, validation

import 'package:flutter/material.dart';

/// GalaxyTextarea - Component ô nhập liệu đa dòng với label, placeholder và validation
/// 
/// ## Props:
/// - [controller] - TextEditingController để quản lý giá trị textarea
/// - [label] - Nhãn hiển thị phía trên textarea
/// - [placeholder] - Văn bản giữ chỗ khi textarea trống
/// - [error] - Thông báo lỗi hiển thị phía dưới textarea
/// - [enabled] - Trạng thái enabled của textarea (default: true)
/// - [maxLines] - Số dòng tối đa hiển thị
/// - [minLines] - Số dòng tối thiểu hiển thị (default: 3)
/// - [maxLength] - Độ dài ký tự tối đa
/// - [keyboardType] - Loại bàn phím hiển thị
/// - [onChanged] - Callback khi giá trị thay đổi
/// - [onSubmitted] - Callback khi submit (nhấn Enter)
class GalaxyTextarea extends StatefulWidget {
  const GalaxyTextarea({
    Key? key,
    this.controller,
    this.label,
    this.placeholder,
    this.error,
    this.enabled = true,
    this.maxLines,
    this.minLines = 3,
    this.maxLength,
    this.keyboardType,
    this.onChanged,
    this.onSubmitted,
  }) : super(key: key);

  /// TextEditingController để quản lý giá trị textarea
  final TextEditingController? controller;

  /// Nhãn hiển thị phía trên textarea
  final String? label;

  /// Văn bản giữ chỗ khi textarea trống
  final String? placeholder;

  /// Thông báo lỗi hiển thị phía dưới textarea
  final String? error;

  /// Trạng thái enabled của textarea
  final bool enabled;

  /// Số dòng tối đa hiển thị
  final int? maxLines;

  /// Số dòng tối thiểu hiển thị
  final int? minLines;

  /// Độ dài ký tự tối đa
  final int? maxLength;

  /// Loại bàn phím hiển thị
  final TextInputType? keyboardType;

  /// Callback khi giá trị thay đổi
  final ValueChanged<String>? onChanged;

  /// Callback khi submit (nhấn Enter)
  final ValueChanged<String>? onSubmitted;

  @override
  State<GalaxyTextarea> createState() => _GalaxyTextareaState();
}

class _GalaxyTextareaState extends State<GalaxyTextarea> {
  late TextEditingController _controller;
  bool _isFocused = false;

  @override
  void initState() {
    super.initState();
    _controller = widget.controller ?? TextEditingController();
  }

  @override
  void dispose() {
    if (widget.controller == null) {
      _controller.dispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final hasError = widget.error != null && widget.error!.isNotEmpty;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (widget.label != null)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Text(
              widget.label!,
              style: theme.textTheme.bodySmall?.copyWith(
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        Focus(
          onFocusChange: (hasFocus) {
            setState(() {
              _isFocused = hasFocus;
            });
          },
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(6),
              border: Border.all(
                color: hasError
                    ? theme.colorScheme.error
                    : _isFocused
                        ? theme.colorScheme.primary
                        : theme.colorScheme.outline,
                width: _isFocused ? 2 : 1,
              ),
            ),
            child: TextField(
              controller: _controller,
              enabled: widget.enabled,
              maxLines: widget.maxLines,
              minLines: widget.minLines,
              maxLength: widget.maxLength,
              keyboardType: widget.keyboardType ?? TextInputType.multiline,
              onChanged: widget.onChanged,
              onSubmitted: widget.onSubmitted,
              decoration: InputDecoration(
                hintText: widget.placeholder,
                border: InputBorder.none,
                contentPadding: const EdgeInsets.all(12),
                counterText: '',
              ),
            ),
          ),
        ),
        if (hasError)
          Padding(
            padding: const EdgeInsets.only(top: 6),
            child: Text(
              widget.error!,
              style: theme.textTheme.bodySmall?.copyWith(
                color: theme.colorScheme.error,
              ),
            ),
          ),
      ],
    );
  }
}
