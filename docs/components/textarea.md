# Textarea

Displays a form textarea for longer text input.

<ComponentPreview name="TextareaDemo">
  <template #preview>
    <DemoContainer>
      <TextareaDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <Textarea placeholder="Type your message here." />
</template>
```

```tsx [React]
import { Textarea } from "@/components/ui/textarea"

export default function App() {
  return <Textarea placeholder="Type your message here." />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TextareaComponent } from '@/components/ui/textarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextareaComponent],
  template: `<ui-textarea placeholder="Type your message here."></ui-textarea>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Textarea } from '@/components/ui/textarea'

export default function App() {
  return (
    <Textarea
      placeholder="Type your message here"
      numberOfLines={4}
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/textarea.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyTextarea(
      hintText: 'Type your message here',
      maxLines: 4,
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
npx galaxy-ui-cli@latest add textarea
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add textarea
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add textarea
```

```bash [bun]
bunx galaxy-ui-cli@latest add textarea
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add textarea
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
import { Textarea } from '@/components/ui'
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <Textarea v-model="message" placeholder="Type your message here." />
</template>
```

### React

```tsx
import { Textarea } from '@/components/ui'

export default function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TextareaComponent } from '@/components/ui';

@Component({
  selector: 'app-textarea-demo',
  standalone: true,
  imports: [TextareaComponent],
  template: `
    <ui-textarea
      [(ngModel)]="message"
      placeholder="Type your message here."
    />
  `
})
export class TextareaDemoComponent {
  message = '';
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
