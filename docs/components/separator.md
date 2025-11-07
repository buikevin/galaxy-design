# Separator

Visual separator line.

<ComponentPreview name="SeparatorDemo">
  <template #preview>
    <DemoContainer>
      <SeparatorDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <Separator />
</template>
```

```tsx [React]
import { Separator } from "@/components/ui/separator"

export default function App() {
  return <Separator />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SeparatorComponent } from '@/components/ui/separator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SeparatorComponent],
  template: `<ui-separator></ui-separator>`
})
export class AppComponent {}
```

```tsx [React Native]
import { View } from 'react-native'
import { Separator } from '@/components/ui/separator'

export default function App() {
  return <Separator />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const Divider();
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-design@latest add separator
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add separator
```

```bash [yarn]
yarn dlx galaxy-design@latest add separator
```

```bash [bun]
bunx galaxy-design@latest add separator
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add separator
```

:::

```vue
<Separator />
<Separator orientation="vertical" />
```

**Bùi Trọng Hiếu** - MIT © 2025


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
