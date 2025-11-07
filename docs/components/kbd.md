# Kbd

Display keyboard shortcuts and key combinations with proper styling.

<ComponentPreview name="KbdDemo">
  <template #preview>
    <DemoContainer>
      <KbdDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template>
  <div class="flex gap-2">
    <Kbd>Ctrl</Kbd>
    <span>+</span>
    <Kbd>K</Kbd>
  </div>
</template>
```

```tsx [React]
import { Kbd } from '@/components/ui/kbd'
export default function App() {
  return <Kbd>Ctrl</Kbd>
}
```

```typescript [Angular]
@Component({
  template: `<ui-kbd>Ctrl</ui-kbd>`
})
export class DemoComponent {}
```

```tsx [React Native]
import { Kbd } from '@/components/ui/kbd'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View className="flex-row gap-2">
      <Kbd><Text>Ctrl</Text></Kbd>
      <Text>+</Text>
      <Kbd><Text>K</Text></Kbd>
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/kbd.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: const [
        GalaxyKbd(child: Text('Ctrl')),
        SizedBox(width: 8),
        Text('+'),
        SizedBox(width: 8),
        GalaxyKbd(child: Text('K')),
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
npx galaxy-design add kbd
```

```bash [Vue]
npx galaxy-design add kbd
```

```bash [Angular]
npx galaxy-design add kbd
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add kbd
```
:::

## Usage

::: code-group
```tsx [React]
import { Kbd } from '@/components/ui/kbd'

export default function KbdDemo() {
  return <Kbd>Ctrl</Kbd>
}
```

```vue [Vue]
<script setup lang="ts">
import { Kbd } from '@/components/ui/kbd'
</script>

<template>
  <Kbd>Ctrl</Kbd>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { KbdComponent } from '@/components/ui/kbd'

@Component({
  selector: 'app-kbd-demo',
  standalone: true,
  imports: [KbdComponent],
  template: `
    <ui-kbd>Ctrl</ui-kbd>
  `
})
export class KbdDemo {}
```
:::


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` | Size of the kbd element |
| `class` | `string` | - | Additional CSS classes |

## Examples

### Basic Kbd

Display individual keyboard keys:

::: code-group
```tsx [React]
<div className="flex gap-2">
  <Kbd>Shift</Kbd>
  <Kbd>Ctrl</Kbd>
  <Kbd>Alt</Kbd>
  <Kbd>Cmd</Kbd>
</div>
```

```vue [Vue]
<template>
  <div class="flex gap-2">
    <Kbd>Shift</Kbd>
    <Kbd>Ctrl</Kbd>
    <Kbd>Alt</Kbd>
    <Kbd>Cmd</Kbd>
  </div>
</template>
```

```html [Angular]
<div class="flex gap-2">
  <ui-kbd>Shift</ui-kbd>
  <ui-kbd>Ctrl</ui-kbd>
  <ui-kbd>Alt</ui-kbd>
  <ui-kbd>Cmd</ui-kbd>
</div>
```
:::

### Key Combinations

Display keyboard shortcuts with multiple keys:

::: code-group
```tsx [React]
<div className="flex flex-col gap-3">
  <div className="flex items-center gap-1">
    <Kbd>Ctrl</Kbd>
    <span className="text-muted-foreground">+</span>
    <Kbd>C</Kbd>
    <span className="ml-2 text-sm text-muted-foreground">Copy</span>
  </div>

  <div className="flex items-center gap-1">
    <Kbd>Ctrl</Kbd>
    <span className="text-muted-foreground">+</span>
    <Kbd>V</Kbd>
    <span className="ml-2 text-sm text-muted-foreground">Paste</span>
  </div>

  <div className="flex items-center gap-1">
    <Kbd>Cmd</Kbd>
    <span className="text-muted-foreground">+</span>
    <Kbd>Shift</Kbd>
    <span className="text-muted-foreground">+</span>
    <Kbd>P</Kbd>
    <span className="ml-2 text-sm text-muted-foreground">Command palette</span>
  </div>
</div>
```

```vue [Vue]
<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-1">
      <Kbd>Ctrl</Kbd>
      <span class="text-muted-foreground">+</span>
      <Kbd>C</Kbd>
      <span class="ml-2 text-sm text-muted-foreground">Copy</span>
    </div>

    <div class="flex items-center gap-1">
      <Kbd>Ctrl</Kbd>
      <span class="text-muted-foreground">+</span>
      <Kbd>V</Kbd>
      <span class="ml-2 text-sm text-muted-foreground">Paste</span>
    </div>

    <div class="flex items-center gap-1">
      <Kbd>Cmd</Kbd>
      <span class="text-muted-foreground">+</span>
      <Kbd>Shift</Kbd>
      <span class="text-muted-foreground">+</span>
      <Kbd>P</Kbd>
      <span class="ml-2 text-sm text-muted-foreground">Command palette</span>
    </div>
  </div>
</template>
```

```html [Angular]
<div class="flex flex-col gap-3">
  <div class="flex items-center gap-1">
    <ui-kbd>Ctrl</ui-kbd>
    <span class="text-muted-foreground">+</span>
    <ui-kbd>C</ui-kbd>
    <span class="ml-2 text-sm text-muted-foreground">Copy</span>
  </div>

  <div class="flex items-center gap-1">
    <ui-kbd>Ctrl</ui-kbd>
    <span class="text-muted-foreground">+</span>
    <ui-kbd>V</ui-kbd>
    <span class="ml-2 text-sm text-muted-foreground">Paste</span>
  </div>

  <div class="flex items-center gap-1">
    <ui-kbd>Cmd</ui-kbd>
    <span class="text-muted-foreground">+</span>
    <ui-kbd>Shift</ui-kbd>
    <span class="text-muted-foreground">+</span>
    <ui-kbd>P</ui-kbd>
    <span class="ml-2 text-sm text-muted-foreground">Command palette</span>
  </div>
</div>
```
:::

### Different Sizes

::: code-group
```tsx [React]
<div className="flex items-center gap-3">
  <Kbd size="sm">Esc</Kbd>
  <Kbd size="default">Ctrl</Kbd>
  <Kbd size="lg">Enter</Kbd>
</div>
```

```vue [Vue]
<template>
  <div class="flex items-center gap-3">
    <Kbd size="sm">Esc</Kbd>
    <Kbd size="default">Ctrl</Kbd>
    <Kbd size="lg">Enter</Kbd>
  </div>
</template>
```

```html [Angular]
<div class="flex items-center gap-3">
  <ui-kbd size="sm">Esc</ui-kbd>
  <ui-kbd size="default">Ctrl</ui-kbd>
  <ui-kbd size="lg">Enter</ui-kbd>
</div>
```
:::

### Special Keys

::: code-group
```tsx [React]
<div className="flex flex-wrap gap-2">
  <Kbd>Enter</Kbd>
  <Kbd>Tab</Kbd>
  <Kbd>Space</Kbd>
  <Kbd>Esc</Kbd>
  <Kbd>Delete</Kbd>
  <Kbd>Backspace</Kbd>
  <Kbd>↑</Kbd>
  <Kbd>↓</Kbd>
  <Kbd>←</Kbd>
  <Kbd>→</Kbd>
</div>
```

```vue [Vue]
<template>
  <div class="flex flex-wrap gap-2">
    <Kbd>Enter</Kbd>
    <Kbd>Tab</Kbd>
    <Kbd>Space</Kbd>
    <Kbd>Esc</Kbd>
    <Kbd>Delete</Kbd>
    <Kbd>Backspace</Kbd>
    <Kbd>↑</Kbd>
    <Kbd>↓</Kbd>
    <Kbd>←</Kbd>
    <Kbd>→</Kbd>
  </div>
</template>
```

```html [Angular]
<div class="flex flex-wrap gap-2">
  <ui-kbd>Enter</ui-kbd>
  <ui-kbd>Tab</ui-kbd>
  <ui-kbd>Space</ui-kbd>
  <ui-kbd>Esc</ui-kbd>
  <ui-kbd>Delete</ui-kbd>
  <ui-kbd>Backspace</ui-kbd>
  <ui-kbd>↑</ui-kbd>
  <ui-kbd>↓</ui-kbd>
  <ui-kbd>←</ui-kbd>
  <ui-kbd>→</ui-kbd>
</div>
```
:::

## Accessibility

- Uses semantic `<kbd>` element for keyboard input
- Properly styled to distinguish from regular text
- Maintains good contrast ratios for readability

## Author

**Bui Trong Hieu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bui Trong Hieu (kevinbui)
