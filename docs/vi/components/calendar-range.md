# Calendar Range

A date range picker calendar component for selecting a start and end date.

<ComponentPreview name="CalendarRangeDemo">
  <template #preview>
    <DemoContainer>
      <CalendarRangeDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
const range = ref({ start: new Date(), end: new Date() })
</script>

<template>
  <CalendarRange v-model="range" />
</template>
```

```tsx [React]
import { CalendarRange } from '@/components/ui/calendar-range'
export default function App() {
  return <CalendarRange />
}
```

```typescript [Angular]
@Component({
  template: `<ui-calendar-range [(range)]="range" />`
})
export class DemoComponent {
  range = { start: new Date(), end: new Date() };
}
```
:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group
```bash [React]
npx galaxy-design add calendar-range
```

```bash [Vue]
npx galaxy-design add calendar-range
```

```bash [Angular]
npx galaxy-design add calendar-range
```
:::

## Usage

::: code-group
```tsx [React]
import { CalendarRange } from '@/components/calendar-range'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

export default function CalendarRangeDemo() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: undefined,
  })

  return (
    <CalendarRange
      selected={range}
      onSelect={setRange}
      className="rounded-md border"
    />
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { CalendarRange } from '@/components/calendar-range'

const range = ref({
  start: new Date(),
  end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
})
</script>

<template>
  <CalendarRange
    v-model="range"
    class="rounded-md border"
  />
</template>
```
:::


## API Reference

### Props

Component này chấp nhận các props sau:

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selected` | `DateRange` | - | Selected date range |
| `onSelect` | `(range: DateRange) => void` | - | Callback when range changes |
| `disabled` | `Date[] \| ((date: Date) => boolean)` | - | Dates that should be disabled |

## Features

- Select start and end dates
- Visual indication of selected range
- Hover preview of range selection
- Keyboard navigation support


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
