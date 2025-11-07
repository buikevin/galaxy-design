# Skeleton

Use to show a placeholder while content is loading.


<ComponentPreview name="SkeletonDemo">
  <template #preview>
    <DemoContainer>
      <SkeletonDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex items-center space-x-4">
    <Skeleton variant="circle" class="h-12 w-12" />
    <div class="space-y-2">
      <Skeleton variant="text" class="h-4 w-[250px]" />
      <Skeleton variant="text" class="h-4 w-[200px]" />
    </div>
  </div>
</template>
```

```tsx [React]
import { Skeleton } from "@/components/ui/skeleton"

export default function App() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton variant="circle" className="h-12 w-12" />
      <div className="space-y-2">
        <Skeleton variant="text" className="h-4 w-[250px]" />
        <Skeleton variant="text" className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SkeletonComponent } from '@/components/ui/skeleton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SkeletonComponent],
  template: `
    <div class="flex items-center space-x-4">
      <ui-skeleton variant="circle" class="h-12 w-12" />
      <div class="space-y-2">
        <ui-skeleton variant="text" class="h-4 w-[250px]" />
        <ui-skeleton variant="text" class="h-4 w-[200px]" />
      </div>
    </div>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { View } from 'react-native'
import { Skeleton } from '@/components/ui/skeleton'

export default function App() {
  return (
    <View className="flex-row items-center gap-4">
      <Skeleton variant="circle" className="h-12 w-12" />
      <View className="gap-2">
        <Skeleton variant="text" className="h-4 w-[250px]" />
        <Skeleton variant="text" className="h-4 w-[200px]" />
      </View>
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/skeleton.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const GalaxySkeleton(
          variant: SkeletonVariant.circle,
          width: 48,
          height: 48,
        ),
        const SizedBox(width: 16),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            GalaxySkeleton(
              variant: SkeletonVariant.text,
              width: 250,
              height: 16,
            ),
            SizedBox(height: 8),
            GalaxySkeleton(
              variant: SkeletonVariant.text,
              width: 200,
              height: 16,
            ),
          ],
        ),
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
```bash [React]
npx galaxy-ui-cli add skeleton
```

```bash [Vue]
npx galaxy-ui-cli add skeleton
```

```bash [Angular]
npx galaxy-ui-cli add skeleton
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add skeleton
```
:::

## Usage

::: code-group
```tsx [React]
import { Skeleton } from '@/components/skeleton'

export default function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton variant="circle" className="h-12 w-12" />
      <div className="space-y-2">
        <Skeleton variant="text" className="h-4 w-[250px]" />
        <Skeleton variant="text" className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Skeleton } from '@/components/skeleton'
</script>

<template>
  <div class="flex items-center space-x-4">
    <Skeleton variant="circle" class="h-12 w-12" />
    <div class="space-y-2">
      <Skeleton variant="text" class="h-4 w-[250px]" />
      <Skeleton variant="text" class="h-4 w-[200px]" />
    </div>
  </div>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { SkeletonComponent } from '@/components/skeleton'

@Component({
  selector: 'app-skeleton-demo',
  standalone: true,
  imports: [SkeletonComponent],
  template: `
    <div class="flex items-center space-x-4">
      <ui-skeleton variant="circle" class="h-12 w-12" />
      <div class="space-y-2">
        <ui-skeleton variant="text" class="h-4 w-[250px]" />
        <ui-skeleton variant="text" class="h-4 w-[200px]" />
      </div>
    </div>
  `
})
export class SkeletonDemo {}
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
| `variant` | `'default' \| 'circle' \| 'text'` | `'default'` | Shape variant |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Card Skeleton

::: code-group
```tsx [React]
<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
```
:::

### Avatar with Text

::: code-group
```tsx [React]
<div className="flex items-center space-x-4">
  <Skeleton variant="circle" className="h-12 w-12" />
  <div className="space-y-2">
    <Skeleton variant="text" className="h-4 w-[250px]" />
    <Skeleton variant="text" className="h-4 w-[200px]" />
  </div>
</div>
```
:::

## Accessibility

- Uses `animate-pulse` for smooth loading animation
- Muted colors to indicate loading state

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
