# Slider

Một input mà người dùng chọn giá trị từ trong một phạm vi cho trước.

<ComponentPreview name="SliderDemo">
  <template #preview>
    <DemoContainer>
      <SliderDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
</script>

<template>
  <Slider :default-value="[50]" :max="100" :step="1" class="w-[60%]" />
</template>
```

```tsx [React]
import { Slider } from "@/components/ui/slider"

export default function App() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SliderComponent } from '@/components/ui/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SliderComponent],
  template: `<ui-slider [value]="50" [min]="0" [max]="100" [step]="1" class="w-[60%]"></ui-slider>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add slider
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add slider
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add slider
```

```bash [bun]
bunx galaxy-ui-cli@latest add slider
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Slider } from '@/components/ui'
import { ref } from 'vue'

const value = ref([50])
</script>

<template>
  <Slider v-model="value" :max="100" :step="1" class="w-[60%]" />
</template>
```

### React

```tsx
import { Slider } from '@/components/ui'

export default function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { SliderComponent } from '@/components/ui';

@Component({
  selector: 'app-slider-demo',
  standalone: true,
  imports: [SliderComponent],
  template: `
    <ui-slider
      [value]="value"
      (valueChange)="value = $event"
      [min]="0"
      [max]="100"
      [step]="1"
      class="w-[60%]"
    />
  `
})
export class SliderDemoComponent {
  value = 50;
}
```


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
