# Avatar

An image element with a fallback for representing the user.

<ComponentPreview name="AvatarDemo">
  <template #preview>
    <DemoContainer>
      <AvatarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</template>
```

```tsx [React]
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function App() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AvatarComponent } from '@/components/ui/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <ui-avatar src="https://github.com/shadcn.png" alt="@shadcn">
      CN
    </ui-avatar>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function App() {
  return (
    <Avatar>
      <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/avatar.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const GalaxyAvatar(
      imageUrl: 'https://github.com/shadcn.png',
      fallback: Text('CN'),
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
npx galaxy-ui-cli@latest add avatar
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add avatar
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add avatar
```

```bash [bun]
bunx galaxy-ui-cli@latest add avatar
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add avatar
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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui'
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</template>
```

### React

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui'

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { AvatarComponent } from '@/components/ui';

@Component({
  selector: 'app-avatar-demo',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <ui-avatar src="https://github.com/shadcn.png" alt="@shadcn">
      CN
    </ui-avatar>
  `
})
export class AvatarDemoComponent {}
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
