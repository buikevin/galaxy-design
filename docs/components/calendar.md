# Calendar

A date picker calendar component for selecting dates.

<ComponentPreview name="CalendarDemo">
  <template #preview>
    <DemoContainer>
      <CalendarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'

const date = ref<Date>(new Date())
</script>

<template>
  <Calendar v-model="date" class="rounded-md border" />
</template>
```

```tsx [React]
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export default function App() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-demo',
  template: `
    <ui-calendar [(date)]="date" class="rounded-md border" />
  `
})
export class CalendarDemoComponent {
  date = new Date();
}
```

```tsx [React Native]
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export default function App() {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <Calendar
      current={date}
      onDayPress={(day) => setDate(new Date(day.dateString))}
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/calendar.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  DateTime _selectedDate = DateTime.now();

  @override
  Widget build(BuildContext context) {
    return GalaxyCalendar(
      selectedDate: _selectedDate,
      onDateSelected: (date) {
        setState(() {
          _selectedDate = date;
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
npx galaxy-ui-cli add calendar
```

```bash [Vue]
npx galaxy-ui-cli add calendar
```

```bash [Angular]
npx galaxy-ui-cli add calendar
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add calendar
```
:::

## Usage

::: code-group
```tsx [React]
import { Calendar } from '@/components/calendar'
import { useState } from 'react'

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@/components/calendar'

const date = ref<Date>(new Date())
</script>

<template>
  <Calendar
    v-model="date"
    class="rounded-md border"
  />
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { CalendarComponent } from '@/components/calendar'

@Component({
  selector: 'app-calendar-demo',
  standalone: true,
  imports: [CalendarComponent],
  template: `
    <ui-calendar
      [selectedDate]="date"
      (dateChange)="handleDateChange($event)"
      class="rounded-md border"
    />
  `
})
export class CalendarDemo {
  date = new Date()

  handleDateChange(newDate: Date) {
    this.date = newDate
  }
}
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
| `selected` | `Date \| undefined` | - | The selected date |
| `onSelect` | `(date: Date \| undefined) => void` | - | Callback when date is selected |
| `disabled` | `Date[] \| ((date: Date) => boolean)` | - | Dates that should be disabled |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Date Range

::: code-group
```tsx [React]
<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
  numberOfMonths={2}
  className="rounded-md border"
/>
```
:::

### Disabled Dates

::: code-group
```tsx [React]
const disabledDays = [
  new Date(2024, 0, 1),
  new Date(2024, 0, 15),
]

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={disabledDays}
/>
```
:::

## Accessibility

- Keyboard navigation with arrow keys
- Proper ARIA labels for days and navigation
- Focus management for keyboard users

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
