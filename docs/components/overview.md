# Components Overview

Galaxy UI provides **197 production-ready components** across **5 platforms**: Vue, React, Angular, React Native, and Flutter.

## Platform Coverage

| Platform | Components | Styling | Status |
|----------|-----------|---------|--------|
| **Vue 3** | 41 | Tailwind CSS + Radix Vue | ✅ Complete |
| **React 18+** | 41 | Tailwind CSS + Radix UI | ✅ Complete |
| **Angular 20+** | 41 | Tailwind CSS + Radix NG | ✅ Complete |
| **React Native** | 37 | NativeWind v4 | ✅ Complete |
| **Flutter** | 37 | Material Design 3 | ✅ Complete |

**Total: 197 components** with **100% practical coverage** for mobile-suitable components.

## Installation

Install components individually using the CLI:

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add button
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add button
```

```bash [bun]
bunx galaxy-ui-cli@latest add button
```

```bash [global]
galaxy-ui-cli add button
```

:::

Or install multiple components at once:

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add button input dialog
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add button input dialog
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add button input dialog
```

```bash [bun]
bunx galaxy-ui-cli@latest add button input dialog
```

```bash [global]
galaxy-ui-cli add button input dialog
```

:::

## Component Categories

### Form Components

Essential form controls for user input:

- **[Button](./button)** - Clickable button with multiple variants
- **[Input](./input)** - Text input field
- **[Checkbox](./checkbox)** - Checkbox for binary choices
- **[Radio Group](./radio-group)** - Radio button group for exclusive choices
- **[Select](./select)** - Dropdown selection menu
- **[Slider](./slider)** - Range slider input
- **[Switch](./switch)** - Toggle switch
- **[Textarea](./textarea)** - Multi-line text input
- **[Label](./label)** - Form field label
- **[Calendar](./calendar)** - Date picker calendar
- **[Calendar Range](./calendar-range)** - Date range picker
- **[Tags Input](./tags-input)** - Multi-value tag input

### Layout Components

Components for organizing content:

- **[Separator](./separator)** - Visual divider
- **[Accordion](./accordion)** - Expandable content sections
- **[Collapsible](./collapsible)** - Collapsible content area
- **[Tabs](./tabs)** - Tabbed interface
- **[Aspect Ratio](./aspect-ratio)** - Maintain aspect ratio for media content
- **[Resizable](./resizable)** - Resizable panel groups with keyboard support
- **[Sheet](./sheet)** - Slide-over panel from screen edge
- **[Toolbar](./toolbar)** - Container for grouping controls

### Navigation Components

Components for navigation and menus:

- **[Navigation Menu](./navigation-menu)** - Navigation menu with submenus
- **[Menubar](./menubar)** - Menu bar with dropdown menus
- **[Context Menu](./context-menu)** - Right-click context menu
- **[Dropdown Menu](./dropdown-menu)** - Dropdown menu
- **[Pagination](./pagination)** - Page navigation with numbers
- **[Command](./command)** - Command palette for keyboard navigation

### Interactive Components

Interactive UI elements:

- **[Toggle](./toggle)** - Two-state toggle button
- **[Toggle Group](./toggle-group)** - Set of toggle buttons for single or multiple selection

### Overlay Components

Modal dialogs and popups:

- **[Dialog](./dialog)** - Modal dialog
- **[Alert Dialog](./alert-dialog)** - Alert confirmation dialog
- **[Popover](./popover)** - Floating popover content
- **[Tooltip](./tooltip)** - Hover tooltip
- **[Hover Card](./hover-card)** - Rich hover card

### Data Display Components

Components for displaying data and feedback:

- **[Avatar](./avatar)** - User avatar with fallback
- **[Progress](./progress)** - Progress bar indicator
- **[Table](./table)** - Responsive data table
- **[Kbd](./kbd)** - Keyboard key display
- **[Typography](./typography)** - Text formatting components
- **[Empty](./empty)** - Empty state placeholder
- **[Skeleton](./skeleton)** - Loading placeholder

## Platform Support

### Web Frameworks

All web components are available for:

- **Vue 3** - Composition API with `<script setup>`
- **React 18+** - Hooks with `forwardRef`
- **Angular 20+** - Standalone components with Signals

### Mobile Platforms

Mobile components (37 per platform) are available for:

- **React Native** - Functional components with NativeWind v4 styling
- **Flutter** - StatelessWidget with Material Design 3

> **Note**: Not all web components are suitable for mobile (e.g., Hover Card, Context Menu). Mobile platforms include 37 practically applicable components.

## Features

- **Accessible** - Built on Radix primitives (WAI-ARIA compliant)
- **Customizable** - Full control with Tailwind CSS
- **Type-safe** - TypeScript support for all frameworks
- **Dark mode** - Built-in dark mode support
- **Copy & Paste** - No npm dependencies, copy components directly to your project
- **Consistent API** - Similar API across all frameworks

## Usage Example

Each component works similarly across frameworks:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="default">Click me</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button variant="default">Click me</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button variant="default">Click me</ui-button>`
})
export class AppComponent {}
```

:::


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Next Steps

- Browse the [components](#component-categories) to find what you need
- Check the [CLI Usage](/guide/cli-usage) guide to learn more about the CLI
- Read the [Theming](/guide/theming) guide to customize the appearance


## Accessibility

- **Keyboard Navigation**: [TODO]
- **Screen Reader**: [TODO]
- **Focus Management**: [TODO]
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
