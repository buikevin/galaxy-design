# Flutter

Build beautiful mobile applications with Galaxy UI components for Flutter.

## Overview

Galaxy UI for Flutter provides 37 production-ready components styled with **Material Design 3**. All components are fully typed with Dart and follow Flutter best practices with StatelessWidget patterns.

## Prerequisites

Before you begin, make sure you have:

- **Flutter** 3.24+ (latest stable)
- **Dart** 3.5+
- Material Design 3 configured
- An existing Flutter project

## Installation

### Step 1: Initialize Galaxy UI

```bash
# Using npx
npx galaxy-ui-cli@latest init

# Using bunx
bunx galaxy-ui-cli@latest init
```

The CLI will:
1. ✅ Detect Flutter automatically
2. ✅ Add required dependencies to `pubspec.yaml`
3. ✅ Create `components.json` configuration
4. ✅ Set up Material Design 3 theme
5. ✅ Create utility functions

### Step 2: Add Components

```bash
# Add a single component
npx galaxy-ui-cli@latest add button

# Add multiple components
npx galaxy-ui-cli@latest add button input dialog
```

## Configuration

Galaxy UI creates a `components.json` file in your project root:

```json
{
  "$schema": "https://ui.galaxy.com/schema.json",
  "framework": "flutter",
  "language": "dart",
  "styling": "material3",
  "material": {
    "version": "3",
    "theme": "lib/theme/theme.dart"
  },
  "aliases": {
    "components": "lib/components"
  }
}
```

## Material Design 3 Setup

Make sure Material 3 is properly configured in your Flutter app:

### pubspec.yaml

```yaml
name: your_app
description: A beautiful Flutter application with Galaxy UI

dependencies:
  flutter:
    sdk: flutter

  # Material Design 3 is included in Flutter SDK
  # Additional dependencies added by Galaxy UI CLI:
  intl: ^0.19.0

flutter:
  uses-material-design: true

  # Optional: Add custom fonts
  fonts:
    - family: Inter
      fonts:
        - asset: fonts/Inter-Regular.ttf
        - asset: fonts/Inter-Medium.ttf
          weight: 500
        - asset: fonts/Inter-Bold.ttf
          weight: 700
```

### lib/theme/theme.dart

```dart
import 'package:flutter/material.dart';

class AppTheme {
  // Light Theme
  static ThemeData lightTheme = ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF6366F1), // Indigo
      brightness: Brightness.light,
    ),
    textTheme: const TextTheme(
      displayLarge: TextStyle(
        fontSize: 57,
        fontWeight: FontWeight.bold,
      ),
      titleLarge: TextStyle(
        fontSize: 22,
        fontWeight: FontWeight.w500,
      ),
      bodyLarge: TextStyle(
        fontSize: 16,
      ),
    ),
  );

  // Dark Theme
  static ThemeData darkTheme = ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF6366F1), // Indigo
      brightness: Brightness.dark,
    ),
    textTheme: const TextTheme(
      displayLarge: TextStyle(
        fontSize: 57,
        fontWeight: FontWeight.bold,
      ),
      titleLarge: TextStyle(
        fontSize: 22,
        fontWeight: FontWeight.w500,
      ),
      bodyLarge: TextStyle(
        fontSize: 16,
      ),
    ),
  );
}
```

### lib/main.dart

```dart
import 'package:flutter/material.dart';
import 'package:your_app/theme/theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Galaxy UI App',
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
      home: const HomePage(),
    );
  }
}
```

## Usage Examples

### Button Component

```dart
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/button.dart';

class ButtonExample extends StatelessWidget {
  const ButtonExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // Default button
        GalaxyButton(
          variant: ButtonVariant.defaultVariant,
          onPressed: () {
            print('Button pressed!');
          },
          child: const Text('Default Button'),
        ),

        const SizedBox(height: 16),

        // Secondary button
        GalaxyButton(
          variant: ButtonVariant.secondary,
          onPressed: () {},
          child: const Text('Secondary Button'),
        ),

        const SizedBox(height: 16),

        // Outline button
        GalaxyButton(
          variant: ButtonVariant.outline,
          onPressed: () {},
          child: const Text('Outline Button'),
        ),

        const SizedBox(height: 16),

        // Disabled button
        GalaxyButton(
          variant: ButtonVariant.defaultVariant,
          onPressed: null,
          child: const Text('Disabled Button'),
        ),
      ],
    );
  }
}
```

### Input Component

```dart
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/input.dart';

class LoginForm extends StatefulWidget {
  const LoginForm({super.key});

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Email input
          const Text(
            'Email',
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w500,
            ),
          ),
          const SizedBox(height: 8),
          GalaxyInput(
            controller: _emailController,
            hintText: 'Enter your email',
            keyboardType: TextInputType.emailAddress,
          ),

          const SizedBox(height: 16),

          // Password input
          const Text(
            'Password',
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w500,
            ),
          ),
          const SizedBox(height: 8),
          GalaxyInput(
            controller: _passwordController,
            hintText: 'Enter your password',
            obscureText: true,
          ),
        ],
      ),
    );
  }
}
```

### Dialog Component

```dart
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/dialog.dart';
import 'package:your_app/components/ui/button.dart';

class DialogExample extends StatelessWidget {
  const DialogExample({super.key});

  void _showDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return GalaxyDialog(
          title: 'Confirm Action',
          content: const Text(
            'Are you sure you want to continue? This action cannot be undone.',
          ),
          actions: [
            GalaxyButton(
              variant: ButtonVariant.outline,
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('Cancel'),
            ),
            GalaxyButton(
              variant: ButtonVariant.defaultVariant,
              onPressed: () {
                Navigator.of(context).pop();
                // Handle confirmation
              },
              child: const Text('Confirm'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () => _showDialog(context),
      child: const Text('Open Dialog'),
    );
  }
}
```

## Available Components

Galaxy UI for Flutter includes 37 mobile-optimized components:

### Form & Input
- Button
- Input
- Checkbox
- Radio Group
- Select (Dropdown)
- Slider
- Switch
- Textarea
- Label

### Layout
- Separator (Divider)
- Accordion (ExpansionPanel)
- Collapsible
- Tabs (TabBar)
- Aspect Ratio
- Sheet (BottomSheet)
- Toolbar

### Navigation
- Navigation Menu
- Pagination

### Data Display
- Avatar
- Progress (LinearProgressIndicator)
- Badge
- Typography
- Empty State
- Skeleton (Shimmer)

### Overlays
- Dialog
- Alert Dialog
- Popover (Menu)
- Tooltip

### Date & Time
- Calendar (DatePicker)
- Calendar Range (DateRangePicker)

### Interactive
- Toggle
- Toggle Group (SegmentedButton)

## Dark Mode

Galaxy UI supports dark mode automatically with Flutter's ThemeMode:

```dart
import 'package:flutter/material.dart';

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  ThemeMode _themeMode = ThemeMode.system;

  void _toggleTheme() {
    setState(() {
      _themeMode = _themeMode == ThemeMode.light
          ? ThemeMode.dark
          : ThemeMode.light;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: _themeMode,
      home: Scaffold(
        appBar: AppBar(
          actions: [
            IconButton(
              icon: Icon(
                _themeMode == ThemeMode.light
                    ? Icons.dark_mode
                    : Icons.light_mode,
              ),
              onPressed: _toggleTheme,
            ),
          ],
        ),
        body: const HomePage(),
      ),
    );
  }
}
```

## State Management

Galaxy UI components work with any Flutter state management solution:

### Provider

```dart
import 'package:provider/provider.dart';

class CounterProvider extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// Usage
GalaxyButton(
  onPressed: () {
    context.read<CounterProvider>().increment();
  },
  child: Text('Count: ${context.watch<CounterProvider>().count}'),
)
```

### Riverpod

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';

final counterProvider = StateProvider<int>((ref) => 0);

// Usage
Consumer(
  builder: (context, ref, child) {
    final count = ref.watch(counterProvider);
    return GalaxyButton(
      onPressed: () {
        ref.read(counterProvider.notifier).state++;
      },
      child: Text('Count: $count'),
    );
  },
)
```

## Best Practices

### 1. Use const constructors

```dart
// ✅ Good - uses const
const GalaxyButton(
  child: Text('Click Me'),
)

// ❌ Bad - no const
GalaxyButton(
  child: Text('Click Me'),
)
```

### 2. Extract widgets for reusability

```dart
class CustomCard extends StatelessWidget {
  final String title;
  final String subtitle;

  const CustomCard({
    super.key,
    required this.title,
    required this.subtitle,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(title, style: Theme.of(context).textTheme.titleLarge),
            Text(subtitle),
          ],
        ),
      ),
    );
  }
}
```

### 3. Use Theme.of(context)

```dart
Text(
  'Hello World',
  style: Theme.of(context).textTheme.headlineSmall,
)
```

## Performance Tips

1. **Use const constructors whenever possible**
```dart
const Padding(
  padding: EdgeInsets.all(8.0),
  child: Text('Hello'),
)
```

2. **Use ListView.builder for long lists**
```dart
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(title: Text(items[index]));
  },
)
```

3. **Cache complex calculations**
```dart
@override
Widget build(BuildContext context) {
  final filteredItems = useMemoized(
    () => items.where((item) => item.isActive).toList(),
    [items],
  );

  return ListView(children: filteredItems.map(...));
}
```

## Troubleshooting

### Material 3 colors not working

Make sure you have `useMaterial3: true` in your ThemeData:
```dart
ThemeData(
  useMaterial3: true,
  colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
)
```

### Components not importing correctly

Check your import paths match the configuration in `components.json`:
```dart
import 'package:your_app/components/ui/button.dart';
```

### Hot reload not working

Try:
1. Hot restart (`R` in terminal)
2. Stop and restart the app
3. Run `flutter clean` then `flutter pub get`

## Next Steps

- [Components Overview](/components/overview) - Browse all available components
- [CLI Usage](/guide/cli-usage) - Learn more about the CLI
- [Theming](/guide/theming) - Customize your theme

## Resources

- [Flutter Documentation](https://docs.flutter.dev/)
- [Material Design 3](https://m3.material.io/)
- [Dart Language Tour](https://dart.dev/language)

## Support

Having issues? Check our [GitHub Issues](https://github.com/buikevin/galaxy-design/issues) or contact kevinbui210191@gmail.com
