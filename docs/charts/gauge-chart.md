# Gauge Chart

Display circular gauge (speedometer) charts for metrics with min-max ranges and customizable zones.

<ComponentPreview name="GaugeChartDemo">
  <template #preview>
    <DemoContainer>
      <GaugeChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'

const cpuUsage = 75
</script>

<template>
  <GaugeChart
    :value="cpuUsage"
    title="CPU Usage"
    unit="%"
    :height="300"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

export default function App() {
  const cpuUsage = 75

  return (
    <GaugeChart
      value={cpuUsage}
      title="CPU Usage"
      unit="%"
      height={300}
    />
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { GaugeChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GaugeChartComponent],
  template: `
    <ui-gauge-chart
      [value]="cpuUsage"
      title="CPU Usage"
      unit="%"
      [height]="300"
    />
  `
})
export class AppComponent {
  cpuUsage = 75
}
```

```tsx [React Native]
import { GaugeChart } from "@/components/ui/charts"
import { View } from "react-native"

export default function App() {
  const cpuUsage = 75

  return (
    <View className="p-4">
      <GaugeChart
        value={cpuUsage}
        title="CPU Usage"
        unit="%"
        height={300}
      />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/gauge_chart.dart';

class App extends StatelessWidget {
  final double cpuUsage = 75;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(16),
      child: GaugeChart(
        value: cpuUsage,
        title: 'CPU Usage',
        unit: '%',
        height: 300,
      ),
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

```bash
npx galaxy-design@latest add gauge-chart
```

## Usage

### Basic Gauge

Simple gauge with a single value.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'
</script>

<template>
  <GaugeChart :value="75" title="Progress" unit="%" />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

export default function BasicGauge() {
  return <GaugeChart value={75} title="Progress" unit="%" />
}
```

:::

### Custom Range

Customize min and max values.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'
</script>

<template>
  <GaugeChart
    :value="350"
    :min="0"
    :max="500"
    title="Speed"
    unit=" km/h"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

export default function CustomRange() {
  return (
    <GaugeChart
      value={350}
      min={0}
      max={500}
      title="Speed"
      unit=" km/h"
    />
  )
}
```

:::

### Color Zones

Add colored zones to indicate different ranges.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'

const temperatureZones = [
  { from: 0, to: 20, color: '#3b82f6' },  // Cold (blue)
  { from: 20, to: 30, color: '#10b981' }, // Normal (green)
  { from: 30, to: 40, color: '#f59e0b' }, // Warm (orange)
  { from: 40, to: 50, color: '#ef4444' }  // Hot (red)
]
</script>

<template>
  <GaugeChart
    :value="35"
    :min="0"
    :max="50"
    :zones="temperatureZones"
    title="Temperature"
    unit="°C"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

const temperatureZones = [
  { from: 0, to: 20, color: '#3b82f6' },  // Cold (blue)
  { from: 20, to: 30, color: '#10b981' }, // Normal (green)
  { from: 30, to: 40, color: '#f59e0b' }, // Warm (orange)
  { from: 40, to: 50, color: '#ef4444' }  // Hot (red)
]

export default function ColorZones() {
  return (
    <GaugeChart
      value={35}
      min={0}
      max={50}
      zones={temperatureZones}
      title="Temperature"
      unit="°C"
    />
  )
}
```

:::

### Gradient Colors

Use gradient colors across the gauge.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'

const gradientColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#ef4444']
</script>

<template>
  <GaugeChart
    :value="65"
    :color="gradientColors"
    title="Performance"
    unit="%"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

const gradientColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#ef4444']

export default function GradientGauge() {
  return (
    <GaugeChart
      value={65}
      color={gradientColors}
      title="Performance"
      unit="%"
    />
  )
}
```

:::

### Without Pointer

Hide the pointer and show only the progress arc.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'
</script>

<template>
  <GaugeChart
    :value="80"
    :show-pointer="false"
    title="Progress"
    unit="%"
    color="#10b981"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

export default function WithoutPointer() {
  return (
    <GaugeChart
      value={80}
      showPointer={false}
      title="Progress"
      unit="%"
      color="#10b981"
    />
  )
}
```

:::

### Custom Angles

Customize start and end angles for different gauge layouts.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'
</script>

<template>
  <GaugeChart
    :value="60"
    :start-angle="180"
    :end-angle="0"
    title="Semi Circle"
    unit="%"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

export default function CustomAngles() {
  return (
    <GaugeChart
      value={60}
      startAngle={180}
      endAngle={0}
      title="Semi Circle"
      unit="%"
    />
  )
}
```

:::

### Custom Formatter

Format the displayed value with a custom function.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'

const formatBytes = (value: number) => {
  if (value >= 1024) {
    return `${(value / 1024).toFixed(1)} GB`
  }
  return `${value} MB`
}
</script>

<template>
  <GaugeChart
    :value="1536"
    :min="0"
    :max="2048"
    :formatter="formatBytes"
    title="Storage Used"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

const formatBytes = (value: number) => {
  if (value >= 1024) {
    return `${(value / 1024).toFixed(1)} GB`
  }
  return `${value} MB`
}

export default function CustomFormatter() {
  return (
    <GaugeChart
      value={1536}
      min={0}
      max={2048}
      formatter={formatBytes}
      title="Storage Used"
    />
  )
}
```

:::

### Dark Mode

Gauge chart automatically adapts to dark mode.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'
</script>

<template>
  <GaugeChart
    :value="65"
    theme="dark"
    title="CPU Usage"
    unit="%"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"

export default function DarkMode() {
  return (
    <GaugeChart
      value={65}
      theme="dark"
      title="CPU Usage"
      unit="%"
    />
  )
}
```

:::

### Loading State

Display a loading spinner while data is being fetched.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'
import { ref, onMounted } from 'vue'

const value = ref<number | null>(null)
const loading = ref(true)

onMounted(async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  value.value = 75
  loading.value = false
})
</script>

<template>
  <GaugeChart
    :value="value"
    :loading="loading"
    title="CPU Usage"
    unit="%"
  />
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"
import { useState, useEffect } from "react"

export default function LoadingState() {
  const [value, setValue] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setValue(75)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <GaugeChart
      value={value}
      loading={loading}
      title="CPU Usage"
      unit="%"
    />
  )
}
```

:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number \| null` | `null` | Current gauge value |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `title` | `string` | `undefined` | Title displayed below the gauge |
| `unit` | `string` | `''` | Unit suffix for the value |
| `color` | `string \| string[]` | `'#3b82f6'` | Single color or gradient colors |
| `zones` | `Array<{from: number, to: number, color: string}>` | `[]` | Color zones |
| `formatter` | `(value: number) => string` | `undefined` | Custom value formatter |
| `height` | `number` | `300` | Chart height in pixels |
| `width` | `number \| string` | `'100%'` | Chart width |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme mode |
| `startAngle` | `number` | `225` | Start angle in degrees |
| `endAngle` | `number` | `-45` | End angle in degrees |
| `splitNumber` | `number` | `5` | Number of split segments |
| `showProgress` | `boolean` | `true` | Show progress arc |
| `showPointer` | `boolean` | `true` | Show pointer (needle) |
| `animation` | `boolean` | `true` | Enable animations |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyText` | `string` | `'No data available'` | Text shown when no data |
| `class` | `string` | `undefined` | Additional CSS classes |

## Examples

### Performance Monitor

Complete example with multiple gauges for system monitoring.

::: code-group

```vue [Vue]
<script setup lang="ts">
import { GaugeChart } from '@/components/ui/charts'
import { ref, onMounted, onUnmounted } from 'vue'

const cpu = ref(0)
const memory = ref(0)
const disk = ref(0)

const updateMetrics = () => {
  cpu.value = Math.random() * 100
  memory.value = Math.random() * 100
  disk.value = Math.random() * 100
}

let interval: number

onMounted(() => {
  updateMetrics()
  interval = setInterval(updateMetrics, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <GaugeChart
      :value="cpu"
      title="CPU Usage"
      unit="%"
      :zones="[
        { from: 0, to: 50, color: '#10b981' },
        { from: 50, to: 80, color: '#f59e0b' },
        { from: 80, to: 100, color: '#ef4444' }
      ]"
    />

    <GaugeChart
      :value="memory"
      title="Memory Usage"
      unit="%"
      :zones="[
        { from: 0, to: 50, color: '#10b981' },
        { from: 50, to: 80, color: '#f59e0b' },
        { from: 80, to: 100, color: '#ef4444' }
      ]"
    />

    <GaugeChart
      :value="disk"
      title="Disk Usage"
      unit="%"
      :zones="[
        { from: 0, to: 50, color: '#10b981' },
        { from: 50, to: 80, color: '#f59e0b' },
        { from: 80, to: 100, color: '#ef4444' }
      ]"
    />
  </div>
</template>
```

```tsx [React]
import { GaugeChart } from "@/components/ui/charts"
import { useState, useEffect } from "react"

export default function PerformanceMonitor() {
  const [cpu, setCpu] = useState(0)
  const [memory, setMemory] = useState(0)
  const [disk, setDisk] = useState(0)

  useEffect(() => {
    const updateMetrics = () => {
      setCpu(Math.random() * 100)
      setMemory(Math.random() * 100)
      setDisk(Math.random() * 100)
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 3000)

    return () => clearInterval(interval)
  }, [])

  const zones = [
    { from: 0, to: 50, color: '#10b981' },
    { from: 50, to: 80, color: '#f59e0b' },
    { from: 80, to: 100, color: '#ef4444' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <GaugeChart
        value={cpu}
        title="CPU Usage"
        unit="%"
        zones={zones}
      />

      <GaugeChart
        value={memory}
        title="Memory Usage"
        unit="%"
        zones={zones}
      />

      <GaugeChart
        value={disk}
        title="Disk Usage"
        unit="%"
        zones={zones}
      />
    </div>
  )
}
```

:::

## Accessibility

- Uses semantic HTML and ARIA attributes
- Supports keyboard navigation
- Screen reader friendly with proper labels
- Respects user's color scheme preferences

## Best Practices

1. **Choose Appropriate Ranges**: Set min/max values that make sense for your metric
2. **Use Color Zones**: Help users quickly identify status (good/warning/critical)
3. **Add Context**: Include title and unit for clarity
4. **Consider Scale**: Make sure the gauge is large enough to read comfortably
5. **Update Frequency**: Don't update too frequently to avoid distraction
6. **Loading States**: Show loading indicator for async data
7. **Responsive Design**: Test on different screen sizes

## Related Components

- [Line Chart](/charts/line-chart) - For trends over time
- [Bar Chart](/charts/bar-chart) - For comparing values
- [Progress](/components/progress) - For simple progress indicators
