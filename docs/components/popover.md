# Popover

Displays rich content in a portal, triggered by a button.

<ComponentPreview name="PopoverDemo">
  <template #preview>
    <DemoContainer>
      <PopoverDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
</script>

<template>
  <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>
      <div class="space-y-2">
        <h4 class="font-medium">Dimensions</h4>
        <p class="text-sm">Set the dimensions for the layer.</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
```

```tsx [React]
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export default function App() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Dimensions</h4>
          <p className="text-sm">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { PopoverComponent } from '@/components/ui/popover';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PopoverComponent],
  template: `
    <ui-popover>
      <button trigger>Open</button>
      <div content>
        <h4>Dimensions</h4>
        <p>Set the dimensions for the layer.</p>
      </div>
    </ui-popover>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Button, ButtonText } from '@/components/ui/button'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <ButtonText>Open</ButtonText>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <View className="gap-2">
          <Text className="font-medium">Dimensions</Text>
          <Text className="text-sm">Set the dimensions for the layer.</Text>
        </View>
      </PopoverContent>
    </Popover>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/popover.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyPopover(
      trigger: GalaxyButton(
        onPressed: () {},
        child: const Text('Open'),
      ),
      content: const Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Dimensions',
              style: TextStyle(fontWeight: FontWeight.w500),
            ),
            SizedBox(height: 8),
            Text(
              'Set the dimensions for the layer.',
              style: TextStyle(fontSize: 14),
            ),
          ],
        ),
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
npx galaxy-ui-cli@latest add popover
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add popover
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add popover
```

```bash [bun]
bunx galaxy-ui-cli@latest add popover
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add popover
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
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui'
</script>

<template>
  <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>
      <div class="space-y-2">
        <h4 class="font-medium">Dimensions</h4>
        <p class="text-sm">Set the dimensions for the layer.</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
```

### React

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui'

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Dimensions</h4>
          <p className="text-sm">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { PopoverComponent } from '@/components/ui';

@Component({
  selector: 'app-popover-demo',
  standalone: true,
  imports: [PopoverComponent],
  template: `
    <ui-popover>
      <button trigger>Open</button>
      <div content>
        <h4>Dimensions</h4>
        <p>Set the dimensions for the layer.</p>
      </div>
    </ui-popover>
  `
})
export class PopoverDemoComponent {}
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
