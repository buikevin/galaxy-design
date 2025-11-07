import 'package:flutter/material.dart';

class GalaxyAccordion extends StatefulWidget {
  final List<GalaxyAccordionItem> items;
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

class GalaxyAccordionItem {
  final Widget title;
  final Widget content;

  const GalaxyAccordionItem({
    required this.title,
    required this.content,
  });
}
