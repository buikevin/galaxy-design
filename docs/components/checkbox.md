# Checkbox

A control that allows the user to toggle between checked and not checked.

<ComponentPreview name="CheckboxDemo">
  <template #preview>
    <DemoContainer>
      <CheckboxDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label for="terms">Accept terms and conditions</label>
  </div>
</template>
```

```tsx [React]
import { Checkbox } from "@/components/ui/checkbox"

export default function App() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CheckboxComponent } from '@/components/ui/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="flex items-center space-x-2">
      <ui-checkbox id="terms"></ui-checkbox>
      <label for="terms">Accept terms and conditions</label>
    </div>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { View } from 'react-native'
import { Checkbox } from '@/components/ui/checkbox'
import { Text } from '@/components/ui/text'

export default function App() {
  return (
    <View className="flex-row items-center gap-2">
      <Checkbox />
      <Text>Accept terms and conditions</Text>
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/checkbox.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        GalaxyCheckbox(
          value: false,
          onChanged: (value) {},
        ),
        const SizedBox(width: 8),
        const Text('Accept terms and conditions'),
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

```bash [npm]
npx galaxy-design@latest add checkbox
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add checkbox
```

```bash [yarn]
yarn dlx galaxy-design@latest add checkbox
```

```bash [bun]
bunx galaxy-design@latest add checkbox
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add checkbox
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
import { Checkbox } from '@/components/ui'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" v-model="checked" />
    <label for="terms">Accept terms and conditions</label>
  </div>
</template>
```

### React

```tsx
import { Checkbox } from '@/components/ui'

export default function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { CheckboxComponent } from '@/components/ui';

@Component({
  selector: 'app-checkbox-demo',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="flex items-center space-x-2">
      <ui-checkbox [(ngModel)]="checked" id="terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>
  `
})
export class CheckboxDemoComponent {
  checked = false;
}
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
