# Toolbar

A container for grouping a set of controls, such as buttons, toggle groups, or dropdown menus.


<ComponentPreview name="ToolbarDemo">
  <template #preview>
    <DemoContainer>
      <ToolbarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem } from '@/components/ui/toolbar'
</script>

<template>
  <Toolbar>
    <ToolbarButton>Undo</ToolbarButton>
    <ToolbarButton>Redo</ToolbarButton>
    <ToolbarSeparator />
    <ToolbarToggleGroup type="single">
      <ToolbarToggleItem value="bold">Bold</ToolbarToggleItem>
      <ToolbarToggleItem value="italic">Italic</ToolbarToggleItem>
    </ToolbarToggleGroup>
  </Toolbar>
</template>
```

```tsx [React]
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem } from '@/components/ui/toolbar'

export default function App() {
  return (
    <Toolbar>
      <ToolbarButton>Undo</ToolbarButton>
      <ToolbarButton>Redo</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single">
        <ToolbarToggleItem value="bold">Bold</ToolbarToggleItem>
        <ToolbarToggleItem value="italic">Italic</ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToolbarComponent } from '@/components/ui/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent],
  template: `
    <ui-toolbar>
      <ui-toolbar-button>Undo</ui-toolbar-button>
      <ui-toolbar-button>Redo</ui-toolbar-button>
      <ui-toolbar-separator />
      <ui-toolbar-toggle-group type="single">
        <ui-toolbar-toggle-item value="bold">Bold</ui-toolbar-toggle-item>
        <ui-toolbar-toggle-item value="italic">Italic</ui-toolbar-toggle-item>
      </ui-toolbar-toggle-group>
    </ui-toolbar>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem } from '@/components/ui/toolbar'
import { Text } from 'react-native'

export default function App() {
  return (
    <Toolbar>
      <ToolbarButton><Text>Undo</Text></ToolbarButton>
      <ToolbarButton><Text>Redo</Text></ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single">
        <ToolbarToggleItem value="bold"><Text>Bold</Text></ToolbarToggleItem>
        <ToolbarToggleItem value="italic"><Text>Italic</Text></ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/toolbar.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyToolbar(
      children: [
        ToolbarButton(
          label: 'Undo',
          onPressed: () {},
        ),
        ToolbarButton(
          label: 'Redo',
          onPressed: () {},
        ),
        const ToolbarSeparator(),
        ToolbarToggleGroup(
          type: ToggleType.single,
          children: [
            ToolbarToggleItem(
              value: 'bold',
              label: 'Bold',
              onPressed: () {},
            ),
            ToolbarToggleItem(
              value: 'italic',
              label: 'Italic',
              onPressed: () {},
            ),
          ],
        ),
      ],
    );
  }
}
```
:::

  </template>
</ComponentPreview>
## Installation

::: code-group
```bash [React]
npx galaxy-design add toolbar
```

```bash [Vue]
npx galaxy-design add toolbar
```

```bash [Angular]
npx galaxy-design add toolbar
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add toolbar
```
:::

## Usage

::: code-group
```tsx [React]
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@/components/toolbar'

export default function ToolbarDemo() {
  return (
    <Toolbar>
      <ToolbarButton>Undo</ToolbarButton>
      <ToolbarButton>Redo</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single">
        <ToolbarToggleItem value="bold">Bold</ToolbarToggleItem>
        <ToolbarToggleItem value="italic">Italic</ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
  )
}
```
:::


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Components

- `Toolbar` - Main toolbar container
- `ToolbarButton` - Clickable button
- `ToolbarSeparator` - Visual separator
- `ToolbarLink` - Link button
- `ToolbarToggleGroup` - Group of toggle items
- `ToolbarToggleItem` - Individual toggle button


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
