import 'package:flutter/material.dart';

class GalaxyTabs extends StatefulWidget {
  final List<GalaxyTab> tabs;
  final int initialIndex;
  final ValueChanged<int>? onTabChanged;

  const GalaxyTabs({
    Key? key,
    required this.tabs,
    this.initialIndex = 0,
    this.onTabChanged,
  }) : super(key: key);

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

class GalaxyTab {
  final String label;
  final Widget content;
  final Widget? icon;

  const GalaxyTab({
    required this.label,
    required this.content,
    this.icon,
  });
}
