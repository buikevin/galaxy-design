# Aspect Ratio

Hiển thị nội dung trong tỷ lệ khung hình mong muốn.

<ComponentPreview name="AspectRatioDemo">
  <template #preview>
    <DemoContainer>
      <AspectRatioDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <AspectRatio :ratio="16 / 9">
    <img src="..." alt="Image" />
  </AspectRatio>
</template>
```

```tsx [React]
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function App() {
  return (
    <AspectRatio ratio={16 / 9}>
      <img src="..." alt="Image" />
    </AspectRatio>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AspectRatioComponent } from '@/components/ui/aspect-ratio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AspectRatioComponent],
  template: `
    <ui-aspect-ratio [ratio]="16 / 9">
      <img src="..." alt="Image" />
    </ui-aspect-ratio>
  `
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add aspect-ratio
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add aspect-ratio
```

```bash [yarn]
yarn dlx galaxy-design@latest add aspect-ratio
```

```bash [bun]
bunx galaxy-design@latest add aspect-ratio
```

:::

## Sử dụng

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <AspectRatio :ratio="16 / 9" class="bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      class="rounded-md object-cover"
    />
  </AspectRatio>
</template>
```

```tsx [React]
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function App() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AspectRatioComponent } from '@/components/ui/aspect-ratio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AspectRatioComponent],
  template: `
    <ui-aspect-ratio [ratio]="16 / 9" class="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        class="rounded-md object-cover"
      />
    </ui-aspect-ratio>
  `
})
export class AppComponent {}
```

:::

## API Reference

### AspectRatio

| Prop | Type | Default | Mô tả |
| --- | --- | --- | --- |
| `ratio` | `number` | `1` | Tỷ lệ khung hình mong muốn (width / height) |
| `class` | `string` | - | Class CSS tùy chỉnh |

## Ví dụ

### Tỷ lệ 16:9

::: code-group

```vue [Vue]
<AspectRatio :ratio="16 / 9">
  <img src="..." alt="16:9 aspect ratio" />
</AspectRatio>
```

```tsx [React]
<AspectRatio ratio={16 / 9}>
  <img src="..." alt="16:9 aspect ratio" />
</AspectRatio>
```

```typescript [Angular]
<ui-aspect-ratio [ratio]="16 / 9">
  <img src="..." alt="16:9 aspect ratio" />
</ui-aspect-ratio>
```

:::

### Tỷ lệ 4:3

::: code-group

```vue [Vue]
<AspectRatio :ratio="4 / 3">
  <img src="..." alt="4:3 aspect ratio" />
</AspectRatio>
```

```tsx [React]
<AspectRatio ratio={4 / 3}>
  <img src="..." alt="4:3 aspect ratio" />
</AspectRatio>
```

```typescript [Angular]
<ui-aspect-ratio [ratio]="4 / 3">
  <img src="..." alt="4:3 aspect ratio" />
</ui-aspect-ratio>
```

:::

### Tỷ lệ 1:1 (Vuông)

::: code-group

```vue [Vue]
<AspectRatio :ratio="1">
  <img src="..." alt="Square aspect ratio" />
</AspectRatio>
```

```tsx [React]
<AspectRatio ratio={1}>
  <img src="..." alt="Square aspect ratio" />
</AspectRatio>
```

```typescript [Angular]
<ui-aspect-ratio [ratio]="1">
  <img src="..." alt="Square aspect ratio" />
</ui-aspect-ratio>
```

:::


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
