# Progress

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.


<ComponentPreview name="ProgressDemo">
  <template #preview>
    <DemoContainer>
      <ProgressDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <Progress :value="60" />
</template>
```

```tsx [React]
import { Progress } from "@/components/ui/progress"

export default function App() {
  return <Progress value={60} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ProgressComponent } from '@/components/ui/progress';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProgressComponent],
  template: `<ui-progress [value]="60"></ui-progress>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Progress } from '@/components/ui/progress'

export default function App() {
  return <Progress value={60} />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/progress.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const GalaxyProgress(value: 0.6);
  }
}
```
:::

  </template>
</ComponentPreview>
## Installation

::: code-group

```bash [npm]
npx galaxy-design@latest add progress
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add progress
```

```bash [yarn]
yarn dlx galaxy-design@latest add progress
```

```bash [bun]
bunx galaxy-design@latest add progress
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add progress
```

:::

## Usage

### Basic

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

  return <Progress :value={progress} />
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

## Examples

### Default

A simple progress bar showing 33% completion.

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

### With Label

Display progress with a percentage label.

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
      <span class="text-sm font-medium">Progress</span>
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
        <span className="text-sm font-medium">Progress</span>
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
        <span class="text-sm font-medium">Progress</span>
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

### Animated

Animate the progress value over time.

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

### Custom Max Value

Set a custom maximum value instead of the default 100.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm text-muted-foreground">75 out of 150 items completed</p>
    <Progress :model-value="75" :max="150" />
  </div>
</template>
```

```tsx [React]
import { Progress } from "@/components/ui/progress"

export default function App() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">75 out of 150 items completed</p>
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
      <p class="text-sm text-muted-foreground">75 out of 150 items completed</p>
      <ui-progress [value]="75" [max]="150" />
    </div>
  `
})
export class AppComponent {}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` / `modelValue` | `number` | `0` | The current progress value |
| `max` | `number` | `100` | The maximum progress value |
| `class` | `string` | - | Additional CSS classes |

### Vue Events

| Event | Type | Description |
|-------|------|-------------|
| `update:modelValue` | `(value: number) => void` | Emitted when the progress value changes |

## Accessibility

- Built on Radix UI Progress primitive for React
- Built on Radix Vue Progress primitive for Vue
- Built on Radix NG Progress primitive for Angular
- Follows WAI-ARIA design pattern for progress indicators
- Properly announces progress changes to screen readers

## Notes

- The progress value is automatically clamped between 0 and max
- The indicator animates smoothly when the value changes
- For indeterminate progress (loading without known duration), consider using a Spinner component instead

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
