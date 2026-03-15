// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Accordion component - accordion có thể mở rộng thu gọn với multiple items

import 'package:flutter/material.dart';

/// GalaxyAccordion - Component accordion có thể mở rộng/thu gọn với multiple items
/// 
/// ## Props:
/// - [items] - Danh sách các item accordion hiển thị
/// - [allowMultipleExpanded] - Cho phép nhiều items mở rộng cùng lúc (default: false)
class GalaxyAccordion extends StatefulWidget {
  /// Danh sách các item accordion
  final List<GalaxyAccordionItem> items;
  
  /// Cho phép nhiều items mở rộng cùng lúc
  final bool allowMultipleExpanded;

  const GalaxyAccordion({
    Key? key,
    required this.items,
    this.allowMultipleExpanded = false,
  }) : super(key: key);

  @override
  State<GalaxyAccordion> createState() => _GalaxyAccordionState();
}

class _GalaxyAccordionState extends State<GalaxyAccordion> {
  final Set<int> _expandedIndices = {};

  void _handleExpansion(int index, bool isExpanded) {
    setState(() {
      if (isExpanded) {
        if (!widget.allowMultipleExpanded) {
          _expandedIndices.clear();
        }
        _expandedIndices.add(index);
      } else {
        _expandedIndices.remove(index);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: List.generate(widget.items.length, (index) {
        final item = widget.items[index];
        final isExpanded = _expandedIndices.contains(index);

        return Container(
          decoration: BoxDecoration(
            border: Border(
              bottom: BorderSide(
                color: Theme.of(context).dividerColor,
                width: 1,
              ),
            ),
          ),
          child: ExpansionTile(
            title: item.title,
            initiallyExpanded: isExpanded,
            onExpansionChanged: (expanded) => _handleExpansion(index, expanded),
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                child: item.content,
              ),
            ],
          ),
        );
      }),
    );
  }
}

// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc AccordionItem - Item trong accordion với title và content

/// GalaxyAccordionItem - Item trong accordion với title và content
/// 
/// ## Props:
/// - [title] - Widget tiêu đề hiển thị khi accordion đóng/mở
/// - [content] - Widget nội dung hiển thị khi accordion mở
class GalaxyAccordionItem {
  /// Widget tiêu đề hiển thị
  final Widget title;
  
  /// Widget nội dung hiển thị khi accordion mở
  final Widget content;

  const GalaxyAccordionItem({
    required this.title,
    required this.content,
  });
}
