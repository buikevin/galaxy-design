# Input

A text input field with label and validation states.

<ComponentPreview name="InputDemo">
  <template #preview>
    <DemoContainer>
      <InputDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <Input>Example content</Input>
</template>
```

```tsx [React]
import { Input } from "@/components/ui/input"

export default function App() {
  return <Input>Example content</Input>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent],
  template: `<ui-input>Example content</ui-input>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Input } from '@/components/ui/input'

export default function App() {
  return (
    <Input
      placeholder="Enter your email"
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/input.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyInput(
      hintText: 'Enter your email',
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
npx galaxy-ui-cli@latest add input
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add input
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add input
```

```bash [bun]
bunx galaxy-ui-cli@latest add input
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add input
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:

No manual installation needed!
:::

## Usage

### Basic Example

Basic usage examples will be added here.

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `type` | `'text' | 'password' | 'email' | 'number' | ...` | `'text'` | The input type | All |
| `placeholder` | `string` | `""` | Placeholder text | All |
| `disabled` | `boolean` | `false` | Whether the input is disabled | All |


## Accessibility

- **Keyboard Navigation**: Standard input keyboard navigation
- **Screen Reader**: Uses semantic `<input>` element with labels
- **Focus Management**: Focus visible with ring styles
- **WCAG Compliance**: WCAG 2.1 Level AA compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)