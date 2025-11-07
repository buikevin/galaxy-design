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

```tsx [React Native]
import { CalendarRange } from '@/components/ui/calendar-range'
import { useState } from 'react'

export default function App() {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: undefined
  })

  return (
    <CalendarRange
      startDate={range.startDate}
      endDate={range.endDate}
      onDayPress={(day) => {
        if (!range.startDate) {
          setRange({ startDate: new Date(day.dateString), endDate: undefined })
        } else if (!range.endDate) {
          setRange({ ...range, endDate: new Date(day.dateString) })
        } else {
          setRange({ startDate: new Date(day.dateString), endDate: undefined })
        }
      }}
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/calendar_range.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  DateTime? _startDate = DateTime.now();
  DateTime? _endDate;

  @override
  Widget build(BuildContext context) {
    return GalaxyCalendarRange(
      startDate: _startDate,
      endDate: _endDate,
      onRangeSelected: (start, end) {
        setState(() {
          _startDate = start;
          _endDate = end;
        });
      },
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
npx galaxy-ui-cli add calendar-range
```

```bash [Vue]
npx galaxy-ui-cli add calendar-range
```

```bash [Angular]
npx galaxy-ui-cli add calendar-range
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add calendar-range
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

This component accepts the following props:

| Prop | Type | Default | Description |
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


## Accessibility

- **Keyboard Navigation**: [TODO]
- **Screen Reader**: [TODO]
- **Focus Management**: [TODO]
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
