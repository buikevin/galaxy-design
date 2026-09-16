// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Sidebar block - Navigation drawer for dashboard layout

import 'package:flutter/material.dart';

/// GalaxySidebar - Navigation drawer with items
class GalaxySidebar extends StatelessWidget {
  const GalaxySidebar({
    Key? key,
    required this.items,
    this.selectedIndex,
    this.onItemTap,
  }) : super(key: key);

  final List<NavigationRailDestination> items;
  final int? selectedIndex;
  final ValueChanged<int>? onItemTap;

  @override
  Widget build(BuildContext context) {
    return NavigationRail(
      selectedIndex: selectedIndex,
      onDestinationSelected: onItemTap,
      destinations: [
        NavigationRailDestination(
          icon: Icon(Icons.home),
          label: Text('Home'),
        ),
      ],
    );
  }
}
