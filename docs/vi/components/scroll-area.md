# Scroll Area

Tăng cường chức năng cuộn gốc để tạo kiểu tùy chỉnh, đa trình duyệt.

<ComponentPreview name="ScrollAreaDemo">
  <template #preview>
    <DemoContainer>
      <ScrollAreaDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-sm font-medium leading-none">Thẻ phiên bản</h4>
      <div v-for="tag in tags" :key="tag" class="text-sm">
        {{ tag }}
        <Separator class="my-2" />
      </div>
    </div>
  </ScrollArea>
</template>
```

```tsx [React]
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i) => `v1.2.0-beta.${i + 1}`
)

export default function App() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Thẻ phiên bản</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ScrollAreaComponent } from '@/components/ui/scroll-area';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollAreaComponent],
  template: `
    <ui-scroll-area class="h-72 w-48 rounded-md border">
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">Thẻ phiên bản</h4>
        @for (tag of tags; track tag) {
          <div class="text-sm">{{ tag }}</div>
        }
      </div>
    </ui-scroll-area>
  `
})
export class AppComponent {
  tags = Array.from({ length: 50 }).map((_, i) => `v1.2.0-beta.${i + 1}`)
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add scroll-area
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add scroll-area
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add scroll-area
```

```bash [bun]
bunx galaxy-ui-cli@latest add scroll-area
```

:::

## Sử dụng

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
</script>

<template>
  <ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
    Có một lần, một gã hề bắt đầu lẻn vào lâu đài vào giữa đêm khuya và để lại
    những câu đùa khắp nơi: dưới gối của nhà vua, trong súp của ông, thậm chí cả
    trong nhà vệ sinh hoàng gia. Nhà vua tức giận, nhưng ông dường như không thể
    ngăn được gã hề. Và rồi, một ngày nọ, người dân trong vương quốc phát hiện ra
    rằng những câu đùa mà gã hề để lại rất hài hước đến nỗi họ không thể nhịn cười.
    Và một khi họ bắt đầu cười, họ không thể dừng lại.
  </ScrollArea>
</template>
```

```tsx [React]
import { ScrollArea } from "@/components/ui/scroll-area"

export default function App() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      Có một lần, một gã hề bắt đầu lẻn vào lâu đài vào giữa đêm khuya và để lại
      những câu đùa khắp nơi: dưới gối của nhà vua, trong súp của ông, thậm chí cả
      trong nhà vệ sinh hoàng gia. Nhà vua tức giận, nhưng ông dường như không thể
      ngăn được gã hề. Và rồi, một ngày nọ, người dân trong vương quốc phát hiện ra
      rằng những câu đùa mà gã hề để lại rất hài hước đến nỗi họ không thể nhịn cười.
      Và một khi họ bắt đầu cười, họ không thể dừng lại.
    </ScrollArea>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ScrollAreaComponent } from '@/components/ui/scroll-area';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollAreaComponent],
  template: `
    <ui-scroll-area class="h-[200px] w-[350px] rounded-md border p-4">
      Có một lần, một gã hề bắt đầu lẻn vào lâu đài vào giữa đêm khuya và để lại
      những câu đùa khắp nơi: dưới gối của nhà vua, trong súp của ông, thậm chí cả
      trong nhà vệ sinh hoàng gia. Nhà vua tức giận, nhưng ông dường như không thể
      ngăn được gã hề. Và rồi, một ngày nọ, người dân trong vương quốc phát hiện ra
      rằng những câu đùa mà gã hề để lại rất hài hước đến nỗi họ không thể nhịn cười.
      Và một khi họ bắt đầu cười, họ không thể dừng lại.
    </ui-scroll-area>
  `
})
export class AppComponent {}
```

:::

## API Reference

### ScrollArea

| Prop | Type | Default | Mô tả |
| --- | --- | --- | --- |
| `class` | `string` | - | Class CSS tùy chỉnh |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Hướng thanh cuộn |

## Ví dụ

### Cuộn ngang

::: code-group

```vue [Vue]
<ScrollArea orientation="horizontal" class="w-96 whitespace-nowrap rounded-md border">
  <div class="flex w-max space-x-4 p-4">
    <div v-for="i in 10" :key="i" class="shrink-0">
      <div class="overflow-hidden rounded-md">
        <img
          :src="`https://images.unsplash.com/photo-${i}?w=250&h=330`"
          :alt="`Ảnh ${i}`"
          class="aspect-[3/4] h-fit w-fit object-cover"
        />
      </div>
    </div>
  </div>
</ScrollArea>
```

```tsx [React]
<ScrollArea orientation="horizontal" className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <img
            src={`https://images.unsplash.com/photo-${i}?w=250&h=330`}
            alt={`Ảnh ${i}`}
            className="aspect-[3/4] h-fit w-fit object-cover"
          />
        </div>
      </div>
    ))}
  </div>
</ScrollArea>
```

```typescript [Angular]
<ui-scroll-area orientation="horizontal" class="w-96 whitespace-nowrap rounded-md border">
  <div class="flex w-max space-x-4 p-4">
    @for (i of [1,2,3,4,5,6,7,8,9,10]; track i) {
      <div class="shrink-0">
        <div class="overflow-hidden rounded-md">
          <img
            [src]="'https://images.unsplash.com/photo-' + i + '?w=250&h=330'"
            [alt]="'Ảnh ' + i"
            class="aspect-[3/4] h-fit w-fit object-cover"
          />
        </div>
      </div>
    }
  </div>
</ui-scroll-area>
```

:::

## Khả năng tiếp cận

Tuân thủ [WAI-ARIA Scrollbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/scrollbar/).

- Cung cấp thanh cuộn tùy chỉnh có thể truy cập bằng bàn phím
- Duy trì quản lý focus đúng cách
- Hỗ trợ cả cuộn dọc và ngang
- Tương thích với screen readers


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
