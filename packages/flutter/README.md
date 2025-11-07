# galaxy_ui_flutter

Flutter components for Galaxy UI CLI.

## Overview

This package contains Flutter component templates that are copied into your project when you run `galaxy-design add [component]` in a Flutter project.

## Prerequisites

- Flutter >= 3.0.0
- Dart >= 3.0.0

## Components

See [COMPONENT_COMPATIBILITY_MATRIX.md](../../COMPONENT_COMPATIBILITY_MATRIX.md) for the complete list of supported components.

### Priority 1 Components (Fully Supported)

- Button
- Input
- Checkbox
- Select
- Slider
- Accordion
- Dialog
- Alert Dialog
- Tabs
- Avatar
- Tooltip

### Flutter-Specific Components

- Calendar
- Date Picker
- Time Picker
- Form
- Sheet
- Table

## Usage

Components are designed to be copied into your project, not installed as dependencies.

```bash
# Initialize Galaxy UI in your Flutter project
galaxy-design init

# Add components
galaxy-design add button input
```

## Styling

All components use Flutter's theme system with ShadTheme for design tokens.

## Architecture

- **Widgets**: Built with Flutter Material widgets
- **Theme**: ShadTheme system for consistent design tokens
- **Variants**: Enum-based variant system similar to CVA
- **Design Tokens**: Shared color scheme with web components

## License

MIT
