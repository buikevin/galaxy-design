# Spinner

Spinner loading động cho các trạng thái tiến trình không xác định.

## Cài đặt

::: code-group
```bash [React]
npx galaxy-design add spinner
```

```bash [Vue]
npx galaxy-design add spinner
```

```bash [Angular]
npx galaxy-design add spinner
```

```bash [React Native]
npx galaxy-design add spinner
```

```bash [Flutter]
npx galaxy-design add spinner
```
:::

## Sử dụng

::: code-group
```tsx [React]
import { Spinner } from '@/components/ui/spinner'

export default function SpinnerDemo() {
  return <Spinner />
}
```

```vue [Vue]
<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <Spinner />
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SpinnerComponent } from '@/components/ui/spinner';

@Component({
  selector: 'app-spinner-demo',
  standalone: true,
  imports: [SpinnerComponent],
  template: `<ui-spinner />`,
})
export class SpinnerDemoComponent {}
```

```tsx [React Native]
import { View } from 'react-native';
import { Spinner } from '@/components/ui/spinner';

export default function SpinnerDemo() {
  return (
    <View className="items-center justify-center">
      <Spinner />
    </View>
  );
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/spinner.dart';

class SpinnerDemo extends StatelessWidget {
  const SpinnerDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: GalaxySpinner(),
    );
  }
}
```
:::

## Kích thước

::: code-group
```tsx [React]
import { Spinner } from '@/components/ui/spinner'

export default function SpinnerSizes() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <div class="flex items-center gap-4">
    <Spinner size="sm" />
    <Spinner size="default" />
    <Spinner size="lg" />
  </div>
</template>
```

```typescript [Angular]
<div class="flex items-center gap-4">
  <ui-spinner size="sm" />
  <ui-spinner size="default" />
  <ui-spinner size="lg" />
</div>
```

```tsx [React Native]
<View className="flex-row items-center gap-4">
  <Spinner size="sm" />
  <Spinner size="default" />
  <Spinner size="lg" />
</View>
```

```dart [Flutter]
const Row(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    GalaxySpinner(size: SpinnerSize.sm),
    SizedBox(width: 16),
    GalaxySpinner(size: SpinnerSize.defaultSize),
    SizedBox(width: 16),
    GalaxySpinner(size: SpinnerSize.lg),
  ],
)
```
:::

## Dùng trong Button

::: code-group
```tsx [React]
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

function LoadingButton({ loading }: { loading: boolean }) {
  return (
    <Button disabled={loading}>
      {loading && <Spinner size="sm" className="mr-2" />}
      Save changes
    </Button>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

defineProps<{ loading: boolean }>()
</script>

<template>
  <Button :disabled="loading">
    <Spinner v-if="loading" size="sm" class="mr-2" />
    Save changes
  </Button>
</template>
```

```typescript [Angular]
import { Component, input } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';
import { SpinnerComponent } from '@/components/ui/spinner';

@Component({
  selector: 'app-loading-button',
  standalone: true,
  imports: [ButtonComponent, SpinnerComponent],
  template: `
    <button ui-button [disabled]="loading()">
      <ui-spinner *ngIf="loading()" size="sm" class="mr-2" />
      Save changes
    </button>
  `,
})
export class LoadingButtonComponent {
  readonly loading = input(false);
}
```
:::

## Props

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------------|
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` | Kích thước hiển thị của spinner |
| `label` | `string` | `'Loading...'` | Nhãn truy cập cho công nghệ hỗ trợ |

## Accessibility

- Indicator loading không tương tác
- Đọc `label` cho công nghệ hỗ trợ
- Phù hợp cho các trạng thái loading không xác định tiến trình
