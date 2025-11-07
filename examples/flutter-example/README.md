# Galaxy UI Flutter Example

A comprehensive showcase of all **37 Galaxy UI components** for Flutter.

## 📱 What's Included

This example app demonstrates all Galaxy UI components available for Flutter:

### Components List
1. Accordion
2. Alert
3. Alert Dialog
4. Aspect Ratio
5. Avatar
6. Badge ⭐
7. Button
8. Card
9. Checkbox
10. Collapsible
11. Context Menu
12. Date Picker ⭐
13. Dialog
14. Dropdown Menu
15. Empty ⭐
16. Hover Card
17. Input
18. Label
19. Menubar
20. Navigation Menu ⭐
21. Pagination ⭐
22. Popover
23. Progress
24. Radio Group
25. Select
26. Separator
27. Sheet ⭐
28. Skeleton
29. Slider
30. Switch
31. Table
32. Tabs
33. Textarea
34. Toggle
35. Toggle Group
36. Tooltip
37. Typography ⭐

⭐ = Recently added with unified API across platforms

## 🚀 Getting Started

### Prerequisites

- Flutter SDK >= 3.0.0
- Dart SDK >= 3.0.0
- iOS Simulator or Android Emulator

### Installation

1. Navigate to the example directory:
```bash
cd examples/flutter-example
```

2. Get dependencies:
```bash
flutter pub get
```

3. Run the app:
```bash
# iOS
flutter run -d ios

# Android
flutter run -d android

# Web
flutter run -d chrome
```

## 📁 Project Structure

```
flutter-example/
├── lib/
│   ├── main.dart              # App entry point with navigation
│   ├── components/            # All 37 Galaxy UI components
│   │   ├── accordion/
│   │   ├── alert/
│   │   ├── badge/
│   │   ├── date-picker/
│   │   ├── empty/
│   │   ├── navigation-menu/
│   │   ├── pagination/
│   │   ├── sheet/
│   │   ├── typography/
│   │   └── ...
│   └── pages/                 # 37 showcase pages
│       ├── accordion_page.dart
│       ├── alert_page.dart
│       ├── badge_page.dart
│       ├── date_picker_page.dart
│       ├── empty_page.dart
│       ├── navigation_menu_page.dart
│       ├── pagination_page.dart
│       ├── sheet_page.dart
│       ├── typography_page.dart
│       └── ...
├── pubspec.yaml
└── README.md
```

## 🎨 Features

- **37 Production-Ready Components** - Complete mobile UI toolkit
- **Material Design 3** - Modern, beautiful design system
- **Dark Mode Support** - Automatic theme switching
- **Type Safe** - Full Dart type safety
- **Easy Navigation** - Browse all components from home screen
- **Live Examples** - Each component has its own showcase page

## 🔧 Development

### Adding Component Examples

Each page in `lib/pages/` has a template with placeholders:

```dart
Widget _buildBasicExample() {
  // TODO: Implement basic example
  return const Placeholder(fallbackHeight: 100);
}

Widget _buildVariants() {
  // TODO: Implement variants showcase
  return const Placeholder(fallbackHeight: 200);
}
```

Replace the placeholders with actual component usage:

```dart
Widget _buildBasicExample() {
  return GalaxyButton.primary(
    onPressed: () {},
    child: const Text('Click Me'),
  );
}

Widget _buildVariants() {
  return Column(
    children: [
      GalaxyButton.secondary(
        onPressed: () {},
        child: const Text('Secondary'),
      ),
      const SizedBox(height: 8),
      GalaxyButton.outline(
        onPressed: () {},
        child: const Text('Outline'),
      ),
    ],
  );
}
```

### Testing Components

Run tests:
```bash
flutter test
```

## 📚 Documentation

For detailed component documentation, see:
- [Badge + Sheet Implementation](../../BADGE_SHEET_IMPLEMENTATION_REPORT.md)
- [Date Picker Implementation](../../DATE_PICKER_IMPLEMENTATION_REPORT.md)
- [Navigation + Pagination Implementation](../../NAVIGATION_PAGINATION_IMPLEMENTATION_REPORT.md)
- [Empty + Typography Implementation](../../EMPTY_TYPOGRAPHY_IMPLEMENTATION_REPORT.md)
- [Quick Reference Guide](../../QUICK_REFERENCE.md)

## 🌟 Highlights

### Recently Added Components (100% Platform Parity)

All components now have **unified APIs** between React Native and Flutter:

- **Badge** - Variants, count badges, positioned badges
- **Sheet** - Bottom sheets, side sheets with header/footer
- **Date Picker** - Single date, date range, min/max dates
- **Navigation Menu** - Bottom nav, drawer menu
- **Pagination** - Compact, full, load more variants
- **Empty States** - 5 presets (noData, noResults, error, offline, emptyList)
- **Typography** - 11 variants (h1-h4, p, lead, large, small, muted, blockquote, code)

### Example Usage

```dart
// Badge
GalaxyBadge.primary('New')
GalaxyBadge.count(count: 42, maxCount: 99)

// Empty State
GalaxyEmpty.noResults(
  title: 'No products found',
  description: 'Try adjusting your filters',
)

// Typography
GalaxyTypography.h1('Main Heading')
GalaxyTypography.p('Body text content')

// Date Picker
GalaxyDatePicker(
  selected: _selectedDate,
  onChanged: (date) => setState(() => _selectedDate = date),
)

// Pagination
GalaxyPagination.compact(
  currentPage: _page,
  totalPages: 20,
  onPageChange: (page) => _loadPage(page),
)
```

## 🤝 Contributing

To regenerate this example:

```bash
cd examples
bash setup-flutter-example.sh
```

## 📄 License

This example is part of Galaxy UI CLI.

## 🔗 Links

- [Main Repository](../../)
- [Flutter Package](../../packages/flutter/)
- [React Native Package](../../packages/react-native/)
- [Web Package](../../packages/react/)

---

**Galaxy UI CLI** - Build beautiful, consistent mobile apps with Flutter 🚀
