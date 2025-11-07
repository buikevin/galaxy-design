# Switch

A control that allows users to toggle between checked and unchecked.

<ComponentPreview name="SwitchDemo">
  <template #preview>
    <DemoContainer>
      <SwitchDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
</script>

<template>
  <Switch />
</template>
```

```tsx [React]
import { Switch } from "@/components/ui/switch"

export default function App() {
  return <Switch />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SwitchComponent } from '@/components/ui/switch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SwitchComponent],
  template: `<ui-switch></ui-switch>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Switch } from '@/components/ui/switch'

export default function App() {
  return <Switch />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/switch.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxySwitch(
      value: true,
      onChanged: (value) {},
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
npx galaxy-design@latest add switch
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add switch
```

```bash [yarn]
yarn dlx galaxy-design@latest add switch
```

```bash [bun]
bunx galaxy-design@latest add switch
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add switch
```

:::

## Usage

```vue
<Switch v-model:checked="enabled" />
```

```tsx
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

```html
<ui-switch [(checked)]="enabled" />
```

**Bùi Trọng Hiếu (kevinbui)** - MIT © 2025


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |


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
