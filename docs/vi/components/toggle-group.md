# Toggle Group

Một tập hợp các nút toggle hai trạng thái có thể bật hoặc tắt.

<ComponentPreview name="ToggleGroupDemo">
  <template #preview>
    <DemoContainer>
      <ToggleGroupDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Bold, Italic, Underline } from 'lucide-vue-next'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold class="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic class="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline class="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
```

```tsx [React]
import { Bold, Italic, Underline } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function App() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToggleGroupComponent, ToggleGroupItemComponent } from '@/components/ui/toggle-group';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleGroupComponent, ToggleGroupItemComponent],
  template: `
    <ui-toggle-group type="multiple">
      <ui-toggle-group-item value="bold" aria-label="Toggle bold">
        <i class="icon-bold"></i>
      </ui-toggle-group-item>
      <ui-toggle-group-item value="italic" aria-label="Toggle italic">
        <i class="icon-italic"></i>
      </ui-toggle-group-item>
      <ui-toggle-group-item value="underline" aria-label="Toggle underline">
        <i class="icon-underline"></i>
      </ui-toggle-group-item>
    </ui-toggle-group>
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
npx galaxy-ui-cli@latest add toggle-group
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add toggle-group
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add toggle-group
```

```bash [bun]
bunx galaxy-ui-cli@latest add toggle-group
```

:::

## Sử dụng

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <ToggleGroup type="single">
    <ToggleGroupItem value="a">A</ToggleGroupItem>
    <ToggleGroupItem value="b">B</ToggleGroupItem>
    <ToggleGroupItem value="c">C</ToggleGroupItem>
  </ToggleGroup>
</template>
```

```tsx [React]
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function App() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToggleGroupComponent, ToggleGroupItemComponent } from '@/components/ui/toggle-group';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleGroupComponent, ToggleGroupItemComponent],
  template: `
    <ui-toggle-group type="single">
      <ui-toggle-group-item value="a">A</ui-toggle-group-item>
      <ui-toggle-group-item value="b">B</ui-toggle-group-item>
      <ui-toggle-group-item value="c">C</ui-toggle-group-item>
    </ui-toggle-group>
  `
})
export class AppComponent {}
```

:::

## API Reference

### ToggleGroup

| Prop | Type | Default | Mô tả |
| --- | --- | --- | --- |
| `type` | `'single' \| 'multiple'` | - | Kiểu lựa chọn (một hoặc nhiều) |
| `variant` | `'default' \| 'outline'` | `'default'` | Kiểu hiển thị của các items |
| `size` | `'default' \| 'sm' \| 'lg'` | `'default'` | Kích thước của các items |
| `disabled` | `boolean` | `false` | Vô hiệu hóa toàn bộ group |
| `modelValue` | `string \| string[]` | - | Giá trị được chọn (single: string, multiple: string[]) |
| `class` | `string` | - | Class CSS tùy chỉnh |

### ToggleGroupItem

| Prop | Type | Default | Mô tả |
| --- | --- | --- | --- |
| `value` | `string` | - | Giá trị duy nhất của item |
| `disabled` | `boolean` | `false` | Vô hiệu hóa item |
| `class` | `string` | - | Class CSS tùy chỉnh |

## Ví dụ

### Single selection

::: code-group

```vue [Vue]
<ToggleGroup type="single">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```

```tsx [React]
<ToggleGroup type="single">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```

```typescript [Angular]
<ui-toggle-group type="single">
  <ui-toggle-group-item value="left">Left</ui-toggle-group-item>
  <ui-toggle-group-item value="center">Center</ui-toggle-group-item>
  <ui-toggle-group-item value="right">Right</ui-toggle-group-item>
</ui-toggle-group>
```

:::

### Multiple selection

::: code-group

```vue [Vue]
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>
```

```tsx [React]
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>
```

```typescript [Angular]
<ui-toggle-group type="multiple">
  <ui-toggle-group-item value="bold">Bold</ui-toggle-group-item>
  <ui-toggle-group-item value="italic">Italic</ui-toggle-group-item>
  <ui-toggle-group-item value="underline">Underline</ui-toggle-group-item>
</ui-toggle-group>
```

:::

### Outline variant

::: code-group

```vue [Vue]
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>
```

```tsx [React]
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>
```

```typescript [Angular]
<ui-toggle-group type="single" variant="outline">
  <ui-toggle-group-item value="a">A</ui-toggle-group-item>
  <ui-toggle-group-item value="b">B</ui-toggle-group-item>
  <ui-toggle-group-item value="c">C</ui-toggle-group-item>
</ui-toggle-group>
```

:::

### Kích thước

::: code-group

```vue [Vue]
<div class="flex flex-col gap-4">
  <ToggleGroup type="single" size="sm">
    <ToggleGroupItem value="a">Small</ToggleGroupItem>
  </ToggleGroup>
  <ToggleGroup type="single" size="default">
    <ToggleGroupItem value="a">Default</ToggleGroupItem>
  </ToggleGroup>
  <ToggleGroup type="single" size="lg">
    <ToggleGroupItem value="a">Large</ToggleGroupItem>
  </ToggleGroup>
</div>
```

```tsx [React]
<div className="flex flex-col gap-4">
  <ToggleGroup type="single" size="sm">
    <ToggleGroupItem value="a">Small</ToggleGroupItem>
  </ToggleGroup>
  <ToggleGroup type="single" size="default">
    <ToggleGroupItem value="a">Default</ToggleGroupItem>
  </ToggleGroup>
  <ToggleGroup type="single" size="lg">
    <ToggleGroupItem value="a">Large</ToggleGroupItem>
  </ToggleGroup>
</div>
```

```typescript [Angular]
<div class="flex flex-col gap-4">
  <ui-toggle-group type="single" size="sm">
    <ui-toggle-group-item value="a">Small</ui-toggle-group-item>
  </ui-toggle-group>
  <ui-toggle-group type="single" size="default">
    <ui-toggle-group-item value="a">Default</ui-toggle-group-item>
  </ui-toggle-group>
  <ui-toggle-group type="single" size="lg">
    <ui-toggle-group-item value="a">Large</ui-toggle-group-item>
  </ui-toggle-group>
</div>
```

:::

## Tương tác bàn phím

| Phím | Mô tả |
| --- | --- |
| `Tab` | Di chuyển focus đến item tiếp theo |
| `Shift + Tab` | Di chuyển focus đến item trước đó |
| `Space` | Bật/tắt item đang được focus |
| `Enter` | Bật/tắt item đang được focus |
| `ArrowRight` / `ArrowDown` | Di chuyển focus đến item tiếp theo |
| `ArrowLeft` / `ArrowUp` | Di chuyển focus đến item trước đó |
| `Home` | Di chuyển focus đến item đầu tiên |
| `End` | Di chuyển focus đến item cuối cùng |

## Khả năng tiếp cận

Tuân thủ [WAI-ARIA Toolbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/).

- Sử dụng role `group` cho container
- Hỗ trợ điều hướng bằng bàn phím đầy đủ
- Các items có thể focus được
- Hỗ trợ cả single và multiple selection


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
