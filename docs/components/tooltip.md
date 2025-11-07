# Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

<ComponentPreview name="TooltipDemo">
  <template #preview>
    <DemoContainer>
      <TooltipDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

```tsx [React]
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

export default function App() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TooltipComponent } from '@/components/ui/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <ui-tooltip>
      <button trigger>Hover me</button>
      <div content>Add to library</div>
    </ui-tooltip>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Tooltip } from '@/components/ui/tooltip'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Tooltip content="Add to library">
      <Button>
        <ButtonText>Press me</ButtonText>
      </Button>
    </Tooltip>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: 'Add to library',
      child: ElevatedButton(
        onPressed: () {},
        child: const Text('Press me'),
      ),
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
npx galaxy-design@latest add tooltip
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add tooltip
```

```bash [yarn]
yarn dlx galaxy-design@latest add tooltip
```

```bash [bun]
bunx galaxy-design@latest add tooltip
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add tooltip
```

:::

## Usage


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

### Vue

```vue
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

### React

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui'

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TooltipComponent } from '@/components/ui';

@Component({
  selector: 'app-tooltip-demo',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <ui-tooltip>
      <button trigger>Hover me</button>
      <div content>Add to library</div>
    </ui-tooltip>
  `
})
export class TooltipDemoComponent {}
```


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
