# Button

A clickable button component with multiple variants and sizes.

<ComponentPreview name="ButtonDemo">
  <template #preview>
    <DemoContainer>
      <ButtonDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Example content</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button>Example content</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button>Example content</ui-button>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Button>
      <ButtonText>Example content</ButtonText>
    </Button>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () {},
      child: const Text('Example content'),
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-design@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add button
```

```bash [yarn]
yarn dlx galaxy-design@latest add button
```

```bash [bun]
bunx galaxy-design@latest add button
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add button
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `@radix-ui/react-slot`, `class-variance-authority`
- **Vue**: `radix-vue`, `class-variance-authority`
- **Angular**: `@radix-ng/primitives`, `class-variance-authority`
- **React Native**: `nativewind`, `tailwindcss`
- **Flutter**: No additional dependencies (uses Material Design 3)

No manual installation needed!
:::

## Usage

### Basic Example

Basic usage examples will be added here.

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `variant` | `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'` | `'default'` | The visual style of the button | All |
| `size` | `'default' | 'sm' | 'lg' | 'icon'` | `'default'` | The size of the button | All |
| `asChild` | `boolean` | `false` | Render as child element using Radix Slot | React, Vue only |
| `disabled` | `boolean` | `false` | Whether the button is disabled | All |


## Accessibility

- **Keyboard Navigation**: Space/Enter to activate
- **Screen Reader**: Uses semantic `<button>` element with proper ARIA attributes
- **Focus Management**: Focus visible with ring styles
- **WCAG Compliance**: WCAG 2.1 Level AA compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)