# Empty

Displays an empty state placeholder when there is no content.

<ComponentPreview name="EmptyDemo">
  <template #preview>
    <DemoContainer>
      <EmptyDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<script setup lang="ts">
import { Empty } from '@/components/ui/empty'
</script>

<template>
  <Empty title="No content" description="Get started by creating your first item" />
</template>
```

```tsx [React]
import { Empty } from '@/components/ui/empty'

export default function App() {
  return <Empty title="No content" description="Get started by creating your first item" />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { EmptyComponent } from '@/components/ui/empty';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmptyComponent],
  template: `<ui-empty title="No content" description="Get started by creating your first item"></ui-empty>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Empty } from '@/components/ui/empty'
import { View } from 'react-native'

export default function App() {
  return (
    <View>
      <Empty
        title="No content"
        description="Get started by creating your first item"
      />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/empty.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const GalaxyEmpty(
      title: 'No content',
      description: 'Get started by creating your first item',
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
npx galaxy-design add empty
```

```bash [Vue]
npx galaxy-design add empty
```

```bash [Angular]
npx galaxy-design add empty
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add empty
```
:::

## Usage

::: code-group
```tsx [React]
import { Empty } from '@/components/empty'
import { Button } from '@/components/button'

export default function EmptyDemo() {
  return (
    <Empty description="No data available">
      <Button>Create New</Button>
    </Empty>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Empty } from '@/components/empty'
import { Button } from '@/components/button'
</script>

<template>
  <Empty description="No data available">
    <Button>Create New</Button>
  </Empty>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { EmptyComponent } from '@/components/empty'
import { ButtonDirective } from '@/components/button'

@Component({
  selector: 'app-empty-demo',
  standalone: true,
  imports: [EmptyComponent, ButtonDirective],
  template: `
    <ui-empty description="No data available">
      <button gButton>Create New</button>
    </ui-empty>
  `
})
export class EmptyDemo {}
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
| `description` | `string` | - | Description text to display |
| `image` | `ReactNode` | - | Custom image/icon (React) |
| `imageAlt` | `string` | `'Empty'` | Alt text for image |

## Examples

### Custom Image

::: code-group
```tsx [React]
<Empty
  image={<img src="/empty.svg" alt="No data" className="w-32 h-32" />}
  description="No items found"
/>
```
:::

### With Action Button

::: code-group
```tsx [React]
<Empty description="No projects yet">
  <Button onClick={() => navigate('/create')}>
    Create First Project
  </Button>
</Empty>
```
:::


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
