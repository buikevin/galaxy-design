# Progress

Hiển thị chỉ báo tiến trình hoàn thành của một tác vụ, thường được hiển thị dưới dạng thanh tiến trình.

## Cài Đặt

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add progress
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add progress
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add progress
```

```bash [bun]
bunx galaxy-ui-cli@latest add progress
```

:::

## Sử Dụng

### Cơ Bản

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { ref } from 'vue'

const progress = ref(33)
</script>

<template>
  <Progress :model-value="progress" />
</template>
```

```tsx [React]
import { Progress } from "@/components/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(33)

  return <Progress value={progress} />
}
```

```typescript [Angular]
import { Component, signal } from '@angular/core';
import { ProgressComponent } from '@/components/ui/progress';

@Component({
  selector: 'app-progress-demo',
  standalone: true,
  imports: [ProgressComponent],
  template: `<ui-progress [value]="progress()" />`
})
export class ProgressDemoComponent {
  progress = signal(33);
}
```

:::

## Ví Dụ

### Mặc Định

Thanh tiến trình đơn giản hiển thị 33% hoàn thành.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <Progress :model-value="33" />
</template>
```

```tsx [React]
import { Progress } from "@/components/ui/progress"

export default function App() {
  return <Progress value={33} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ProgressComponent } from '@/components/ui/progress';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProgressComponent],
  template: `<ui-progress [value]="33" />`
})
export class AppComponent {}
```

:::

### Với Nhãn

Hiển thị tiến trình với nhãn phần trăm.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { ref } from 'vue'

const progress = ref(65)
</script>

<template>
  <div class="w-full space-y-2">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium">Tiến trình</span>
      <span class="text-sm text-muted-foreground">{{ progress }}%</span>
    </div>
    <Progress :model-value="progress" />
  </div>
</template>
```

```tsx [React]
import { Progress } from "@/components/ui/progress"

export default function App() {
  const progress = 65

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Tiến trình</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} />
    </div>
  )
}
```

```typescript [Angular]
import { Component, signal } from '@angular/core';
import { ProgressComponent } from '@/components/ui/progress';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProgressComponent],
  template: `
    <div class="w-full space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium">Tiến trình</span>
        <span class="text-sm text-muted-foreground">{{ progress() }}%</span>
      </div>
      <ui-progress [value]="progress()" />
    </div>
  `
})
export class AppComponent {
  progress = signal(65);
}
```

:::

### Có Animation

Tự động tăng giá trị tiến trình theo thời gian.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { ref, onMounted } from 'vue'

const progress = ref(0)

onMounted(() => {
  const timer = setInterval(() => {
    progress.value += 10
    if (progress.value >= 100) {
      clearInterval(timer)
    }
  }, 500)
})
</script>

<template>
  <Progress :model-value="progress" />
</template>
```

```tsx [React]
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export default function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 10
      })
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return <Progress value={progress} />
}
```

```typescript [Angular]
import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ProgressComponent } from '@/components/ui/progress';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProgressComponent],
  template: `<ui-progress [value]="progress()" />`
})
export class AppComponent implements OnInit, OnDestroy {
  progress = signal(0);
  private timer?: number;

  ngOnInit() {
    this.timer = window.setInterval(() => {
      this.progress.update(prev => {
        if (prev >= 100) {
          if (this.timer) clearInterval(this.timer);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}
```

:::

### Giá Trị Tối Đa Tùy Chỉnh

Đặt giá trị tối đa tùy chỉnh thay vì mặc định 100.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm text-muted-foreground">75 trong 150 mục đã hoàn thành</p>
    <Progress :model-value="75" :max="150" />
  </div>
</template>
```

```tsx [React]
import { Progress } from "@/components/ui/progress"

export default function App() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">75 trong 150 mục đã hoàn thành</p>
      <Progress value={75} max={150} />
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ProgressComponent } from '@/components/ui/progress';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProgressComponent],
  template: `
    <div class="space-y-2">
      <p class="text-sm text-muted-foreground">75 trong 150 mục đã hoàn thành</p>
      <ui-progress [value]="75" [max]="150" />
    </div>
  `
})
export class AppComponent {}
```

:::

## Tham Khảo API

### Props

| Prop | Type | Mặc định | Mô tả |
|------|------|---------|-------|
| `value` / `modelValue` | `number` | `0` | Giá trị tiến trình hiện tại |
| `max` | `number` | `100` | Giá trị tiến trình tối đa |
| `class` | `string` | - | CSS classes bổ sung |

### Vue Events

| Event | Type | Mô tả |
|-------|------|-------|
| `update:modelValue` | `(value: number) => void` | Phát ra khi giá trị tiến trình thay đổi |

## Khả Năng Truy Cập

- Xây dựng trên Radix UI Progress primitive cho React
- Xây dựng trên Radix Vue Progress primitive cho Vue
- Xây dựng trên Radix NG Progress primitive cho Angular
- Tuân theo mẫu thiết kế WAI-ARIA cho chỉ báo tiến trình
- Thông báo thay đổi tiến trình đúng cách cho trình đọc màn hình

## Ghi Chú

- Giá trị tiến trình tự động bị giới hạn giữa 0 và max
- Chỉ báo có animation mượt mà khi giá trị thay đổi
- Đối với tiến trình không xác định (tải mà không biết thời lượng), hãy xem xét sử dụng component Spinner


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
