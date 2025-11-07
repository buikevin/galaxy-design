# @galaxy-design/react-native

React Native components for Galaxy UI CLI.

## Overview

This package contains React Native component templates that are copied into your project when you run `galaxy-design add [component]` in a React Native project.

## Prerequisites

- React Native >= 0.70.0
- NativeWind v4
- rn-primitives

## Components

See [COMPONENT_COMPATIBILITY_MATRIX.md](../../COMPONENT_COMPATIBILITY_MATRIX.md) for the complete list of supported components.

### Priority 1 Components (Fully Supported)

- Button
- Input
- Checkbox
- Select
- Radio Group
- Switch
- Slider
- Label
- Separator
- Accordion
- Dialog
- Alert Dialog
- Tabs
- Avatar
- Progress
- Tooltip

## Usage

Components are designed to be copied into your project, not installed as dependencies.

```bash
# Initialize Galaxy UI in your React Native project
npx galaxy-design@latest init

# Add components
npx galaxy-design@latest add button input
```

## Styling

All components use NativeWind v4 for styling, which provides Tailwind CSS support for React Native.

## Architecture

- **Primitives**: Built on @rn-primitives/* for accessibility and behavior
- **Styling**: NativeWind v4 for Tailwind-like utility classes
- **Variants**: class-variance-authority for component variants
- **Design Tokens**: Shared with web components via Tailwind config

## License

MIT
