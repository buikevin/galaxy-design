// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Input component - Ô nhập liệu với label, placeholder, validation

import 'package:flutter/material.dart';

/// GalaxyInput - Ô nhập liệu với label, placeholder và validation
/// 
/// ## Props:
/// - [controller] - TextEditingController để quản lý giá trị input
/// - [label] - Nhãn hiển thị phía trên input
/// - [placeholder] - Văn bản giữ chỗ khi input trống
/// - [error] - Thông báo lỗi hiển thị phía dưới input
/// - [enabled] - Trạng thái enabled của input (default: true)
/// - [obscureText] - Chế độ ẩn văn bản (password) (default: false)
/// - [keyboardType] - Loại bàn phím hiển thị
/// - [maxLines] - Số dòng hiển thị (default: 1)
/// - [onChanged] - Callback khi giá trị thay đổi
/// - [onSubmitted] - Callback khi submit (nhấn Enter)
class GalaxyInput extends StatefulWidget {
  const GalaxyInput({
    Key? key,
    this.controller,
    this.label,
    this.placeholder,
    this.error,
    this.enabled = true,
    this.obscureText = false,
    this.keyboardType,
    this.maxLines = 1,
    this.onChanged,
    this.onSubmitted,
  }) : super(key: key);

  /// TextEditingController để quản lý giá trị input
  final TextEditingController? controller;

  /// Nhãn hiển thị phía trên input
  final String? label;

  /// Văn bản giữ chỗ khi input trống
  final String? placeholder;

  /// Thông báo lỗi hiển thị phía dưới input
  final String? error;

  /// Trạng thái enabled của input
  final bool enabled;

  /// Chế độ ẩn văn bản (password)
  final bool obscureText;

  /// Loại bàn phím hiển thị
  final TextInputType? keyboardType;

  /// Số dòng hiển thị
  final int? maxLines;

  /// Callback khi giá trị thay đổi
  final ValueChanged<String>? onChanged;

  /// Callback khi submit (nhấn Enter)
  final ValueChanged<String>? onSubmitted;

  @override
  State<GalaxyInput> createState() => _GalaxyInputState();
}

class _GalaxyInputState extends State<GalaxyInput> {
  late FocusNode _focusNode;
  bool _isFocused = false;

  @override
  void initState() {
    super.initState();
    _focusNode = FocusNode();
    _focusNode.addListener(_onFocusChange);
  }

  @override
  void dispose() {
    _focusNode.removeListener(_onFocusChange);
    _focusNode.dispose();
    super.dispose();
  }

  void _onFocusChange() {
    setState(() {
      _isFocused = _focusNode.hasFocus;
    });
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
        Container(
          height: widget.maxLines == 1 ? 40 : null,
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
            controller: widget.controller,
            focusNode: _focusNode,
            enabled: widget.enabled,
            obscureText: widget.obscureText,
            keyboardType: widget.keyboardType,
            maxLines: widget.maxLines,
            onChanged: widget.onChanged,
            onSubmitted: widget.onSubmitted,
            style: theme.textTheme.bodyMedium,
            decoration: InputDecoration(
              hintText: widget.placeholder,
              hintStyle: theme.textTheme.bodyMedium?.copyWith(
                color: theme.colorScheme.onSurface.withOpacity(0.5),
              ),
              contentPadding: const EdgeInsets.symmetric(
                horizontal: 12,
                vertical: 8,
              ),
              border: InputBorder.none,
              enabledBorder: InputBorder.none,
              focusedBorder: InputBorder.none,
              errorBorder: InputBorder.none,
              disabledBorder: InputBorder.none,
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
