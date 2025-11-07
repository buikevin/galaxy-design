class DrawerItem {
  final String id;
  final String label;
  final IconData? icon;
  final VoidCallback? onTap;
  final String? badge;
  final bool active;

  DrawerItem({
    required this.id,
    required this.label,
    this.icon,
    this.onTap,
    this.badge,
    this.active = false,
  });
}
