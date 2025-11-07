# Button

Component nút bấm với nhiều biến thể và kích thước khác nhau.

<ComponentPreview name="ButtonDemo">
  <template #preview>
    <DemoContainer>
      <ButtonDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Example content</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button>Example content</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button>Example content</ui-button>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Button>
      <ButtonText>Example content</ButtonText>
    </Button>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () {},
      child: const Text('Example content'),
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add button
```

```bash [yarn]
yarn dlx galaxy-design@latest add button
```

```bash [bun]
bunx galaxy-design@latest add button
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add button
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `@radix-ui/react-slot`, `class-variance-authority`
- **Vue**: `radix-vue`, `class-variance-authority`
- **Angular**: `@radix-ng/primitives`, `class-variance-authority`
- **React Native**: `nativewind`, `tailwindcss`
- **Flutter**: Không cần dependencies bổ sung (sử dụng Material Design 3)

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

Ví dụ sử dụng cơ bản sẽ được thêm vào đây.

## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Hỗ trợ Framework |
|------|------|---------|-------------|-------------------|
| `variant` | `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'` | `'default'` | Kiểu hiển thị của nút | Tất cả |
| `size` | `'default' | 'sm' | 'lg' | 'icon'` | `'default'` | Kích thước của nút | Tất cả |
| `asChild` | `boolean` | `false` | Render như phần tử con sử dụng Radix Slot | Chỉ React, Vue |
| `disabled` | `boolean` | `false` | Nút có bị vô hiệu hóa hay không | Tất cả |


## Khả năng truy cập

- **Điều hướng bàn phím**: Space/Enter để kích hoạt
- **Đọc màn hình**: Sử dụng thẻ `<button>` ngữ nghĩa với thuộc tính ARIA phù hợp
- **Quản lý focus**: Focus được hiển thị với viền ring
- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA



## Khả năng truy cập

- **Điều hướng bàn phím**: [TODO]
- **Đọc màn hình**: [TODO]
- **Quản lý focus**: [TODO]
- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
