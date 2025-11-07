import 'package:flutter/material.dart';

/// Navigation item model
class NavigationMenuItem {
  final String id;
  final String label;
  final IconData icon;
  final String? badge;
  final bool disabled;

  const NavigationMenuItem({
    required this.id,
    required this.label,
    required this.icon,
    this.badge,
    this.disabled = false,
  });
}

/// Variant for navigation menu
enum NavigationMenuVariant {
  bottom,
  drawer,
}

/// A unified navigation menu component for mobile
/// Supports bottom navigation and drawer navigation
class GalaxyNavigationMenu extends StatelessWidget {
  final List<NavigationMenuItem> items;
  final String? selectedId;
  final ValueChanged<String>? onSelect;
  final NavigationMenuVariant variant;
  final Widget? header; // For drawer
  final Widget? footer; // For drawer

  const GalaxyNavigationMenu({
    Key? key,
    required this.items,
    this.selectedId,
    this.onSelect,
    this.variant = NavigationMenuVariant.bottom,
    this.header,
    this.footer,
  }) : super(key: key);

  /// Creates a bottom navigation menu
  const GalaxyNavigationMenu.bottom({
    Key? key,
    required this.items,
    this.selectedId,
    this.onSelect,
  })  : variant = NavigationMenuVariant.bottom,
        header = null,
        footer = null,
        super(key: key);

  /// Creates a drawer navigation menu
  const GalaxyNavigationMenu.drawer({
    Key? key,
    required this.items,
    this.selectedId,
    this.onSelect,
    this.header,
    this.footer,
  })  : variant = NavigationMenuVariant.drawer,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return variant == NavigationMenuVariant.bottom
        ? _buildBottomNavigation(context)
        : _buildDrawerNavigation(context);
  }

  Widget _buildBottomNavigation(BuildContext context) {
    final theme = Theme.of(context);
    final currentIndex = items.indexWhere((item) => item.id == selectedId);

    return BottomNavigationBar(
      currentIndex: currentIndex >= 0 ? currentIndex : 0,
      onTap: (index) {
        if (!items[index].disabled) {
          onSelect?.call(items[index].id);
        }
      },
      type: BottomNavigationBarType.fixed,
      selectedItemColor: theme.colorScheme.primary,
      unselectedItemColor: theme.colorScheme.onSurface.withOpacity(0.6),
      backgroundColor: theme.colorScheme.surface,
      elevation: 8,
      items: items.map((item) {
        return BottomNavigationBarItem(
          icon: _buildIcon(item, context),
          label: item.label,
        );
      }).toList(),
    );
  }

  Widget _buildIcon(NavigationMenuItem item, BuildContext context) {
    final icon = Icon(item.icon);

    if (item.badge != null) {
      return Stack(
        clipBehavior: Clip.none,
        children: [
          icon,
          Positioned(
            top: -4,
            right: -8,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.error,
                borderRadius: BorderRadius.circular(10),
              ),
              constraints: const BoxConstraints(
                minWidth: 18,
                minHeight: 18,
              ),
              child: Text(
                item.badge!,
                style: TextStyle(
                  color: Theme.of(context).colorScheme.onError,
                  fontSize: 10,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
            ),
          ),
        ],
      );
    }

    return icon;
  }

  Widget _buildDrawerNavigation(BuildContext context) {
    final theme = Theme.of(context);

    return Drawer(
      child: SafeArea(
        child: Column(
          children: [
            if (header != null) ...[
              header!,
              Divider(color: theme.colorScheme.outline),
            ],
            Expanded(
              child: ListView(
                padding: EdgeInsets.zero,
                children: items.map((item) {
                  final isSelected = item.id == selectedId;

                  return ListTile(
                    leading: Icon(
                      item.icon,
                      color: isSelected
                          ? theme.colorScheme.primary
                          : theme.colorScheme.onSurface.withOpacity(0.6),
                    ),
                    title: Text(
                      item.label,
                      style: TextStyle(
                        color: isSelected
                            ? theme.colorScheme.primary
                            : theme.colorScheme.onSurface,
                        fontWeight:
                            isSelected ? FontWeight.w600 : FontWeight.normal,
                      ),
                    ),
                    trailing: item.badge != null
                        ? Container(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: theme.colorScheme.error,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(
                              item.badge!,
                              style: TextStyle(
                                color: theme.colorScheme.onError,
                                fontSize: 12,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          )
                        : null,
                    selected: isSelected,
                    selectedTileColor:
                        theme.colorScheme.primary.withOpacity(0.1),
                    enabled: !item.disabled,
                    onTap: item.disabled
                        ? null
                        : () {
                            onSelect?.call(item.id);
                            Navigator.pop(context); // Close drawer
                          },
                  );
                }).toList(),
              ),
            ),
            if (footer != null) ...[
              Divider(color: theme.colorScheme.outline),
              footer!,
            ],
          ],
        ),
      ),
    );
  }
}

/// Helper to show drawer
void showGalaxyDrawer(
  BuildContext context, {
  required List<NavigationMenuItem> items,
  String? selectedId,
  ValueChanged<String>? onSelect,
  Widget? header,
  Widget? footer,
}) {
  showModalBottomSheet(
    context: context,
    builder: (context) => GalaxyNavigationMenu.drawer(
      items: items,
      selectedId: selectedId,
      onSelect: onSelect,
      header: header,
      footer: footer,
    ),
  );
}
