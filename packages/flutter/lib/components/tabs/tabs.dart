// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Tabs component - Tab navigation với multiple tabs

import 'package:flutter/material.dart';

/// GalaxyTabs - Component tab navigation với multiple tabs
/// 
/// ## Props:
/// - [tabs] - Danh sách các tab hiển thị
/// - [initialIndex] - Index ban đầu được chọn (default: 0)
/// - [onTabChanged] - Callback khi tab thay đổi
class GalaxyTabs extends StatefulWidget {
  const GalaxyTabs({
    Key? key,
    required this.tabs,
    this.initialIndex = 0,
    this.onTabChanged,
  }) : super(key: key);

  /// Danh sách các tab hiển thị
  final List<GalaxyTab> tabs;

  /// Index ban đầu được chọn
  final int initialIndex;

  /// Callback khi tab thay đổi
  final ValueChanged<int>? onTabChanged;

  @override
  State<GalaxyTabs> createState() => _GalaxyTabsState();
}

class _GalaxyTabsState extends State<GalaxyTabs>
    with SingleTickerProviderStateMixin {
  late TabController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TabController(
      length: widget.tabs.length,
      vsync: this,
      initialIndex: widget.initialIndex,
    );
    _controller.addListener(() {
      if (_controller.indexIsChanging) {
        widget.onTabChanged?.call(_controller.index);
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.surfaceVariant.withOpacity(0.3),
            borderRadius: BorderRadius.circular(6),
          ),
          padding: const EdgeInsets.all(4),
          child: TabBar(
            controller: _controller,
            indicator: BoxDecoration(
              color: Theme.of(context).colorScheme.surface,
              borderRadius: BorderRadius.circular(4),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.1),
                  blurRadius: 2,
                  offset: const Offset(0, 1),
                ),
              ],
            ),
            indicatorSize: TabBarIndicatorSize.tab,
            labelColor: Theme.of(context).colorScheme.onSurface,
            unselectedLabelColor:
                Theme.of(context).colorScheme.onSurface.withOpacity(0.6),
            labelStyle: const TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w500,
            ),
            tabs: widget.tabs
                .map((tab) => Tab(
                      text: tab.label,
                      icon: tab.icon,
                    ))
                .toList(),
          ),
        ),
        const SizedBox(height: 16),
        Expanded(
          child: TabBarView(
            controller: _controller,
            children: widget.tabs.map((tab) => tab.content).toList(),
          ),
        ),
      ],
    );
  }
}

/// GalaxyTab - Tab item trong tabs
/// 
/// ## Props:
/// - [label] - Nhãn hiển thị của tab
/// - [content] - Nội dung hiển thị khi tab được chọn
/// - [icon] - Icon tùy chỉnh của tab
class GalaxyTab {
  /// Nhãn hiển thị của tab
  final String label;

  /// Nội dung hiển thị khi tab được chọn
  final Widget content;

  /// Icon tùy chỉnh của tab
  final Widget? icon;

  const GalaxyTab({
    required this.label,
    required this.content,
    this.icon,
  });
}
